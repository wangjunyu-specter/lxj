import { YjlistService } from 'src/app/services/yjlist.service';
import { Component, OnInit } from '@angular/core';
import {ActionSheetController, NavController, Platform, PopoverController} from '@ionic/angular';
import {ActivatedRoute, Router} from "@angular/router";
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HttpService } from '../../services/http.service';
import {UserService} from "../../services/user.service";
import {NativeService} from '../../services/native.service';
import { UploadComponent } from '../../components/upload/upload.component';
import {error} from "@angular/compiler/src/util";
import { EditmyreleaseService } from 'src/app/services/editmyrelease.service';
@Component({
  selector: 'app-fbyj',
  templateUrl: './fbyj.page.html',
  styleUrls: ['./fbyj.page.scss'],
})
export class FbyjPage implements OnInit {
  type: number;
  title: string;
  content: string;
  config: any; // 编辑器设置
  head: string; // 封面图
  headobj: any; // 封面对象  包含src路径 thumb 缩略图
  iscontent: boolean; // 是否是输入详情
  keyboardH: number;
  formdata: any;
  address: string;
  lnglat: string;
  contentimgnum: number; // 内容区域上传图片数量， 用于图片上传完成后定位替换
  isloadhead: boolean; // 头部图片是否上传成功
  contentimgarr: boolean[]; // 内容图片是否传完
  issub: boolean; // 是否点击提交
  issave: boolean; // 是否保存
  id: string; // 修改时的id
  constructor(private nav: NavController,
              public plt: Platform, private keyboard: Keyboard,
              private http: HttpService, private user: UserService,
              public actionSheetController: ActionSheetController,
              private activeroute: ActivatedRoute,
              private native: NativeService, public popoverController: PopoverController,
              private route: Router, private myeditdatafn: EditmyreleaseService, private yjlistfn: YjlistService) { }

  ngOnInit() {
    this.isloadhead = false;
    this.contentimgnum = 0;
    this.contentimgarr = [];
    // this.subloading();
    this.formdata = {
      title: '',
      des: '',
      destination: '',
      outtime: '',
      days: '',
      money: '',
      tag: ''
    }
    this.iscontent = false;
    this.keyboardH = 0;
    this.content = ''
    this.config = {
      language: 'zh-cn',
      toolbar: 'Full'
    }
    this.config.toolbar_Full = [
      // {
      //   name: 'document', items: [
      //     'Source', '-', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates'
      //   ]
      // },
      {
        name: 'clipboard', items: [
          'Cut', 'Copy', 'PasteText', 'PasteFromWord', '-'
        ]
      },
      {
        name: 'editing', items: [
          'Find', '-', 'SelectAll', '-', 'SpellChecker'
        ]
      },
      // {
      //   name: 'forms', items: [
      //     'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'
      //   ]
      // },
      {
        name: 'basicstyles', items: [
          'Bold', 'Italic', 'Underline', 'Strike',
        ]
      },
      {
        name: 'paragraph', items:
          ['NumberedList', 'BulletedList',  '-', 'Blockquote',
            '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-'
          ]
      },
      // todo 在这里设定需要的插件 ...
      // ,'Flash','Smiley','Video' Video是用得国产插件
      {
        name: 'insert', items: [
          'Image', 'Html5video', 'Table', 'HorizontalRule', 'Emojione',
        ]
      },
      '/',
      {
        name: 'styles', items: [
           'Format', 'FontSize'
        ]
      },
      {
        name: 'colors', items: [
          'TextColor', 'BGColor'
        ]
      }
    ];
  }
  ionViewWillEnter() {
    const params = this.activeroute.snapshot.queryParams;
    this.type = params['type'] ? Number(params['type']) : 1;
    switch (this.type) {
      case 1:
        this.title = '游记';
        break;
      case 2:
        this.title = '攻略';
        break;
      case 3:
        this.title = '招募';
        break;
      default:
        this.title = '游记';
    }
    if (params['iscg']) {
      this.getCg();
    } else if (params['isedit']) {
      this.setGeteditdata();
    }
  }
  ionViewDidEnter() {
    try {
      window.addEventListener('keyboardWillShow', (event: any) => {
        this.keyboardH = event.keyboardHeight;
      });
      window.addEventListener('keyboardWillHide', (event: any) => {
        this.keyboardH = 0;
      });
    } catch (e) {
      console.log(e);
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 处理保存的草稿数据
   * @Date: 2019-11-20 00:20:35
   * @param {type} 
   * @return: 
   */  
  getCg() {
    this.native.getStorage('yjcontent').then(res => {
      this.head = res.head;
      this.type = res.type - 1;
      this.address = res.address;
      this.lnglat = res.lnglat;
      this.content = res.content;
      this.formdata = res;
      if (this.formdata.outtime) {
        console.log(this.formdata.outtime)
        const date = new Date(this.formdata.outtime * 1000);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        this.formdata.outtime = year + '.' + month + '.' + day;
        console.log(this.formdata.outtime)
      }
    }).catch(error => {
    })
  }
  /**
   * @Author: wjy-mac
   * @description: 处理编辑数据
   * @Date: 2019-11-20 00:20:27
   * @param {type} 
   * @return: 
   */  
  setGeteditdata() {
    const obj = this.myeditdatafn.getData();
    if (obj.type != this.type) {
      this.myeditdatafn.clear();
      return false;
    }
    const data = obj.data;
    this.id = data.id;
    this.head = data.imgarr[0];
    this.headobj = {
      src: data.imgarr && data.imgarr.length > 0 ? data.imgarr[0] : '',
      thumb: data.thumb && data.thumb.length > 0 ? data.thumb[0] : '',
    };
    this.address = data.address;
    this.lnglat = data.lnglat;
    this.content = data.content;
    this.formdata = {
      title: data.title,
      destination: data.destination,
      outtime: data.outtime,
      days: data.days,
      money: data.money,
      tag: data.tag,
      des:data.des
    };
    if (this.formdata.outtime) {
      console.log(this.formdata.outtime)
      const date = new Date(this.formdata.outtime * 1000);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      this.formdata.outtime = year + '.' + month + '.' + day;
      console.log(this.formdata.outtime)
    }
  }
  setContent() {
    this.iscontent = !this.iscontent;
  }
  goBack(): void {
    this.nav.back();
  }
  addimg() {
    this.presentActionSheet(2);
  }
  addfm() {
    this.presentActionSheet(1);
    // this.head = 'http://img5.imgtn.bdimg.com/it/u=3300305952,1328708913&fm=26&gp=0.jpg';
  }
  async presentActionSheet(type: number) {
    const actionSheet = await this.actionSheetController.create({
      header: '请选择来源',
      buttons: [{
        text: '相机',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
          // this.native.captureImage().then(res => {
          //   this.addimgfn(res['fullPath']);
          // });
          this.native.getPictureByCamera().then(res => {
            this.getimgend(type, [res]);
          });
        }
      }, {
        text: '相册',
        handler: () => {
          console.log('Share clicked');
          const max = type === 1 ? 1 : 9;
          this.native.getPictures(3).then((res: any) => {
            this.getimgend(type, res);
          }, err => {

          });
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  getimgend(type, base64: string[]) {
    if (type === 1) {
      this.head = null;
      this.head = base64[0];
      this.updateHead(this.head);
    } else {
      // http://192.144.168.163/loading.gif
      const num = this.contentimgnum;
      const nowarr: number[] = [];
      const len = base64.length;
      for (let i = 0; i < len; i++) {
        const nownum = num + i;
        this.contentimgarr[nownum] = true;
        nowarr.push(nownum);
        this.content += `<img class="wjy${nownum}" style="width: 100%;" src="${this.http.zdomain}loading.gif" alt=""><p></p>`;
      }
      console.log(this.content);
      this.contentimgnum += len;
      this.basezfile(base64, nowarr);
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 上传内容区域图片
   * @Date: 2019-11-19 11:31:25
   * @param {type} base64arr base64数组
   * @param {type} nowarr number数组 base64对应位置
   * @return: 
   */  
  basezfile(base64arr: string[], nowarr) {
    base64arr.map((base64, index) => {
      const num = nowarr[index];
      const file = this.native.getImgbase64tofile(base64, 'yjorgl' + num);
      file.append('nothumb', '1');
      this.imgupload(file).then(res => {
        // alert(JSON.stringify(res));
        base64 = null;
        this.setUpcontentimgend(num, res['src']);
        this.sub();
        this.savefn();
      }).catch(err2 => {
        this.setUpcontentimgend(num);
        this.suberr();
      });
    });
    base64arr = null;
  }
  /**
   * @Author: wjy-mac
   * @description: 图片上传完成
   * @Date: 2019-11-19 12:03:29
   * @param {type} num 表示第几张图片
   * @param {type} src 服务器返回的图片链接，如果没有则表示上传失败
   * @return: 
   */  
  setUpcontentimgend(num: number, src?: string) {
    let nstr: string;
    if (src) {
      nstr = `<img style="max-width: 100%" src="${this.http.zdomain + src}" alt="">`;
    } else {
      this.native.presentAlert('图片上传失败,已自动删除,请重试!');
      nstr = '';
    }
    this.contentimgarr[num] = false;
    const str = `<img\\s+(alt=""\\s)*class="wjy${num}"(\\sstyle="\\s*(width:\\s*)*\\s{0,1}\\d*%;")*\\s*(src="\\S*")\\s*(\\sstyle="\\s*(width:\\s*)*\\s{0,1}\\d*%;*"\\s*)*\\s*(alt="")*\\s*(/>|>)`;
    const regex = new RegExp(str);
    if (this.content.search(regex) > -1) {
      this.content = this.content.replace(regex, nstr);
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 上传封面
   * @Date: 2019-11-19 12:01:55
   * @param {type} 
   * @return: 
   */  
  updateHead(base64: string) {
    this.isloadhead = true;
    const file = this.native.getImgbase64tofile(base64, 'yjorglhead');
    base64 = null;
    this.imgupload(file).then(res => {
      this.isloadhead = false;
      this.headobj = res;
      this.head = this.http.zdomain + res['src'];
      this.sub();
      this.savefn();
    }).catch(err2 => {
      this.isloadhead = false;
      this.suberr();
    });
  }
  imgupload(file) {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      oReq.open('POST', this.http.domain + this.http.updateimg);
      oReq.onreadystatechange = (oEvent) => {
        if (oReq.readyState == 4 && oReq.status == 200) {
          const res = JSON.parse(oReq.response)
          resolve(res.result);
        }
      }
      oReq.onerror = (err) => {
        reject(err);
      }
      oReq.send(file);
    });
  }

  /**
   * 获取之前已保存数据
   * 暂定只能保存一个
   */
  // save() {
  //   this.issave = true;
  //   this.native.getStorage('yjcontent').then(arr => {
  //     this.setsave(arr);
  //   }).catch(error => {
  //     this.setsave([]);
  //   })
  // }

  /**
   * 添加新保存数据
   * @param {Object[]} arr
   */
  // setsave(arr: object[]) { // 保存多个的时候使用，暂定只能保存一个
  setsave() {
    let obj = {
      head: this.head,
      type: this.type + 1,
      address: this.address,
      lnglat: this.lnglat,
      content: this.content
    };
    obj = Object.assign(obj, this.formdata);
    obj['outtime'] = obj['outtime'] ? Date.parse((new Date(obj['outtime'])).toString()) / 1000 : '';
    // arr.push(obj); 保存多个的时候使用，暂定只能保存一个
    this.native.setStorage('yjcontent', obj).then(res => {
      this.issave = false;
      this.native.presentAlert('保存成功,如需使用请到个人中心查看');
    }).catch(err2 => {
      this.issave = false;
      this.native.presentAlert('保存失败，请重试~');
    });
  }
  sub(type?) {
    if (type) {
      this.issub = true;
      this.subloading();
    }
    const canupdate = this.iscansub(1);
    if (!canupdate) {
      return false;
    }
    this.subupdate();
  }

  /**
   * 判断是否可以立即保存
   * @returns {boolean}
   */
  savefn(issave?) {
    if (issave) {
      this.issave = true;
    }
    if (!this.iscansub(2)) {
      return false;
    }
    this.setsave();
  }
  /**
   * type 1 表示发表 2 表示保存
   * @param {number} type
   * @returns {boolean}
   */
  iscansub(type: number) {
    if (!this.issub && type === 1) {
      return false;
    } else if (type === 2 && !this.issave) {
      return false;
    }
    if (this.isloadhead) {
      return false;
    }
    for (let i = 0, j = this.contentimgarr.length; i < j; i++) {
      if (this.contentimgarr[i]) {
        const str = `<img\\s+(alt=""\\s)*class="wjy${i}"(\\sstyle="\\s*(width:\\s*)*\\s{0,1}\\d*%;")*\\s*(src="\\S*")\\s*(\\sstyle="\\s*(width:\\s*)*\\s{0,1}\\d*%;*"\\s*)*\\s*(alt="")*\\s*(/>|>)`;
        const regex = new RegExp(str);
        if (this.content.search(regex) === -1) {
          this.contentimgarr[i] = false;
          continue;
        }
        return false;
      }
    }
    return true;
  } 
  subupdate() {
    let obj = {
      img: JSON.stringify([this.headobj]),
      type: this.type + 1,
      address: this.address,
      lnglat: this.lnglat,
      content: this.content
    };
    obj = Object.assign(obj, this.formdata);
    console.log(obj);
    obj['outtime'] = obj['outtime'] ? Date.parse((new Date(obj['outtime'])).toString()) / 1000 : '';
    if (this.id) {
      obj['id'] = this.id;
    }
    this.http.postformdata(this.http.fbpqitem, obj).subscribe(res => {
      console.log(res);
      if (!this.id) {
        this.user.addjf(res.result.num);
        const obj2 = this.setEdit(obj, res.result.createtime, res.result.id);
        this.yjlistfn.addItem(this.type, obj2);
        this.suberr(res.result);
      } else {
        const obj2 = this.setEdit(obj, res.result, this.id);
        this.myeditdatafn.changeData(obj2);
        this.suberr(1);
      }
    }, error1 => {
      this.suberr();
    });
  }
  /**
   * @Author: wjy-mac
   * @description: 添加完成或失败
   * @Date: 2019-11-19 22:58:47
   * @param {type} 
   * @return: 
   */  
  suberr(num?: any) {
    this.issub = false;
    this.popoverController.dismiss().then(bool => {
      console.log('小时了')
      console.log(bool);
      if (bool) {
        if (num) {
          if (num === 1) {
            this.goBack();
          } else {
            this.route.navigate(['/fbyjmore'], {queryParams: {type: this.type + 1, num: num.num, sendnum: num.sendnum}});
          }
        }
      } else {
        setTimeout(() => {
          this.suberr(num);
        }, 200);
      }
    });
  }
  /**
   * @Author: wjy-mac
   * @description: 更新成功后
   * @Date: 2019-11-19 22:59:04
   * @param {type} 
   * @return: 
   */  
  setEdit(data, time, id) {
    const obj = {
      id,
      createtime: time,
      imgarr: [this.headobj.src],
      thumb: [this.headobj.thumb],
      address: this.address,
      lnglat: this.lnglat,
      content: this.content,
      title: data.title,
      destination: data.destination,
      outtime: data.outtime,
      days: data.days,
      money: data.money,
      tag: data.tag,
      des: data.des
    }
    return obj;
  }
  async subloading() {
    const popover = await this.popoverController.create({
      component: UploadComponent,
      translucent: false,
      cssClass: 'payboxcontent',
      backdropDismiss: false
    });
    await popover.present();
  }
  ionViewWillLeave() {
    this.content = '';
    this.head = '';
    this.contentimgarr = [];
    // this.blur();
  }
  //ios关闭键盘 : todo 获取键盘
  // blur(){
  //   if(this.plt.is("ios")){
  //     try {
  //       if(this.keyboard.isOpen() == false){
  //         let input=document.getElementById("click");
  //         input.focus();
  //         input.blur();
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // }
}
