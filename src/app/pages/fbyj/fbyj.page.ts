import { YjlistService } from 'src/app/services/yjlist.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {ActionSheetController, NavController, Platform, PopoverController, IonContent, AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from "@angular/router";
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HttpService } from '../../services/http.service';
import {UserService} from "../../services/user.service";
import {NativeService} from '../../services/native.service';
import { UploadComponent } from '../../components/upload/upload.component';
// import {error} from "@angular/compiler/src/util";
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
  iscg: boolean; // 是否草稿
  target: any; // 当前选中的input
  bfscrolltop: any; // 滚动的高度
  @ViewChild(IonContent, {static: true}) contentbox: IonContent;
  newHandle: any;
  newHandle2: any;
  setTime: any; // 自动保存对象
  constructor(private nav: NavController,
              public plt: Platform, private keyboard: Keyboard,
              private http: HttpService, private user: UserService,
              public actionSheetController: ActionSheetController, public alertController: AlertController,
              private activeroute: ActivatedRoute,
              private native: NativeService, public popoverController: PopoverController,
              private route: Router, private myeditdatafn: EditmyreleaseService, private yjlistfn: YjlistService) { }

  ngOnInit() {
    this.isloadhead = false;
    this.contentimgnum = -1;
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
    this.content = '';
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
          // 'Cut', 'Copy', 'PasteText', 'PasteFromWord', '-'
        ]
      },
      {
        name: 'editing', items: [
          //'Find', '-', 'SpellChecker'
        ]
      },
      // {
      //   name: 'forms', items: [
      //     'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'
      //   ]
      // },
      {
        name: 'basicstyles', items: [
          'Bold', 'Italic', 'Underline',
        ]
      },
      {
        name: 'paragraph', items:
          [
            'JustifyLeft', 'JustifyCenter', 'JustifyRight', //'JustifyBlock', '-'
          ]
      },
      {
        name: 'insert', items: [
          'Image', 'Table',// 'HorizontalRule', 'Emojione',
        ]
      },
      {
        name: 'styles', items: [
           'Format', //'FontSize'
        ]
      },
      {
        name: 'colors', items: [
          'TextColor',// 'BGColor'
        ]
      }
    ];
  }
  ionViewWillEnter() {
    const params = this.activeroute.snapshot.queryParams;
    this.type = params['type'] ? Number(params['type']) : 1;
    this.setPagetitle();
    const position = this.user.getLocation3();
    this.address = position.address;
    this.lnglat = position.longitude + '|' + position.latitude;
    if (params['iscg']) {
      this.iscg = true;
      this.getCg();
    } else if (params['isedit']) {
      this.setGeteditdata();
    }
  }
  setPagetitle() {
    switch (this.type) {
      case 1:
        this.title = '游记';
        break;
      case 2:
        this.title = '攻略';
        break;
      case 3:
        this.title = '约游';
        break;
      default:
        this.title = '游记';
    }
  }
  ionViewDidEnter() {
    try {
      this.newHandle = (event) => {
        this.keyboardH = event.keyboardHeight;
        this.keyboardWillShow();
      }
      this.newHandle2 = () => {
        this.keyboardH = 0;
        if (this.bfscrolltop < 0) {
          this.scrollToBottom(this.bfscrolltop);
        }
        this.bfscrolltop = 0;
     }
      window.addEventListener('keyboardWillShow', this.newHandle);
      window.addEventListener('keyboardWillHide', this.newHandle2);
    } catch (e) {
    }
    this.addDsq();
  }
  ionViewDidLeave() {
    window.removeEventListener('keyboardWillShow', this.newHandle);
    window.removeEventListener('keyboardWillHide', this.newHandle2);
    clearInterval(this.setTime);
  }
  keyboardWillShow() {
    const height = this.target.getBoundingClientRect().bottom;
    const wheight = this.getClientHeight();
    const y = wheight - this.keyboardH - height;
    if (y < 0) {
      this.bfscrolltop = y;
      this.scrollToBottom(-this.bfscrolltop);
    }
  }
  keyboardWillHide(event) {
    
  }
  getClientHeight()
  {
    let clientHeight = 0;
    if(document.body.clientHeight && document.documentElement.clientHeight)
    {
      clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
    }
    else
    {
      clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
    }
    return clientHeight;
  }
  /**
   * @Author: wjy-mac
   * @description: 处理保存的草稿数据
   * @Date: 2019-11-20 00:20:35
   * @param {type} 
   * @return: 
   */  
  async getCg() {
    try {
      const res = await this.native.getStorage('yjcontent' + this.type);
      // this.head = res.head;
      this.type = res.type - 1;
      if (res.address) {
        this.address = res.address;
        this.lnglat = res.lnglat;
      }
      this.content = res.content;
      if (res['img']) {
        this.headobj = JSON.parse(res['img']);
        this.head = this.http.zdomain + this.headobj['src'];
      }
      if (res['id']) {
        this.id = res.id;
      }
      this.formdata = res;
      if (this.formdata.outtime) {
        const date = new Date(this.formdata.outtime * 1000);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        this.formdata.outtime = year + '.' + month + '.' + day;
      }
    } catch(err) {
      const alert = await this.alertController.create({
        header: '提示!',
        message: '没有获取到数据,是否退出重试!',
        buttons: [
          {
            text: '退出',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              this.goBack(1);
            }
          }, {
            text: '重新开始',
            handler: () => {
              console.log('Confirm Okay');
              this.native.removeStorage('yjcontent' + this.type);
              this.iscg = false;
            }
          }
        ]
      });
      await alert.present();
    }
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
    if (data.address) {
      this.address = data.address;
      this.lnglat = data.lnglat;
    }
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
  /**
   * @Author: wjy-mac
   * @description: 
   * @Date: 2019-12-18 16:34:38
   * @param {type} type？ 1表示完成后返回 没有则表示按钮返回
   * @return: 
   */  
  goBack(type?): any {
    if (!type) {
      if (this.head || this.content) {
        this.Confirmback();
        return false;
      }
      for (const key in this.formdata) {
        if (this.formdata.hasOwnProperty(key)) {
          const element = this.formdata[key];
          if (element) {
            this.Confirmback();
            return false;
          }
        }
      }
      if (!this.iscansub(3)) {
        this.Confirmback('还有图片正在上传哦,是否放弃?');
        return false;
      }
    }
    this.nav.back();
  }
  async Confirmback(msg?) {
    const alert = await this.alertController.create({
      header: '提示!',
      message: msg || '保存后下次还可以继续在个人中心修改哦!',
      buttons: [
        {
          text: '直接退出',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.getpopover(2);
            this.nav.back();
          }
        }, {
          text: '再等等',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
  addimg() {
    this.presentActionSheet(2);
    // this.getimgend(2, ['123']);
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
          this.native.getPictures(1).then((res: any) => {
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
      const nowarr: number[] = [];
      const len = base64.length;
      for (let i = 0; i < len; i++) {
        this.contentimgnum++;
        this.contentimgarr[this.contentimgnum] = true;
        nowarr.push(this.contentimgnum);
        this.content += `<img class="wjy${this.contentimgnum}" style="width: 100%;" src="${this.http.zdomain}loading.gif" alt=""><p></p>`;
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
          console.log(oReq.response);
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
   * @Author: wjy-mac
   * @description: 删除定时保存
   * @Date: 2019-12-18 17:40:12
   * @param {type} 
   * @return: 
   */  
  clearDsq() {
    clearInterval(this.setTime);
    this.setTime = null;
  }
  /**
   * @Author: wjy-mac
   * @description: 添加定时保存
   * @Date: 2019-12-18 17:40:21
   * @param {type} 
   * @return: 
   */  
  addDsq() {
    if (this.setTime) {
      this.clearDsq();
    };
    this.setTime = setInterval(() => {
      if (this.iscanzdsave()) {
        this.setsave(1);
      } else {
        console.log('保存失败')
      }
    }, 300000);
  }
  /**
   * @Author: wjy-mac
   * @description: 判断是否可以自动保存
   * @Date: 2019-12-18 17:47:57
   * @param {type} 
   * @return: 
   */  
  iscanzdsave() {
    if (this.content || this.headobj) {
      return true;
    }
    // for (const key in this.formdata) {
    //   if (this.formdata.hasOwnProperty(key)) {
    //     const element = this.formdata[key];
    //     if (element) {
    //       return true;
    //     }
    //   }
    // }
    return false;
  }
  /**
   * @Author: wjy-mac 保存多个的时候使用，暂定只能保存一个
   * @description: 
   * @Date: 2019-12-18 17:34:15
   * @param {type} iszdtype 1 表示自动保存  没有则表示手动
   * @return: 
   */  
  setsave(iszdtype?) {
    // let obj = {
    //   head: this.head,
    //   type: this.type + 1,
    //   address: this.address,
    //   lnglat: this.lnglat,
    //   content: this.content
    // };
    // obj = Object.assign(obj, this.formdata);
    // obj['outtime'] = obj['outtime'] ? Date.parse((new Date(obj['outtime'])).toString()) / 1000 : '';
    this.title = '正在保存';
    this.clearDsq();
    let obj = {
      type: this.type + 1,
      address: this.address,
      lnglat: this.lnglat,
      content: this.content
    };
    if (this.headobj) {
      obj['img'] = JSON.stringify(this.headobj);
    }
    obj = Object.assign(obj, this.formdata);
    obj['outtime'] = obj['outtime'] ? Date.parse((new Date(obj['outtime'])).toString()) / 1000 : '';
    if (this.id) {
      obj['id'] = this.id;
    }
    // arr.push(obj); 保存多个的时候使用，暂定只能保存一个
    this.native.setStorage('yjcontent' + this.type, obj).then(res => {
      this.issave = false;
      this.addDsq();
      this.setPagetitle();
      if (!iszdtype) {
        this.native.presentAlert(this.iscg ? '保存成功' : '保存成功,如需使用请到个人中心我的草稿里查看');
      }
    }).catch(err2 => {
      this.issave = false;
      this.addDsq();
      this.setPagetitle();
      !iszdtype && this.native.presentAlert('保存失败，请重试~');
    });
  }
  sub(type?) {
    if (type) {
      this.issub = true;
    }
    const canupdate = this.iscansub(1);
    if (!canupdate) {
      return false;
    }
    this.getpopover(1).then(res => {
      this.subupdate();
    });
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
   * type 1 表示发表 2 表示保存 3 询问是否有图片在上传
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
      this.getpopover(1);
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
        this.getpopover(1);
        return false;
      }
    }
    return true;
  } 
  /**
   * @Author: wjy-mac
   * @description: 判断是否有弹窗并根据type跳转
   * @Date: 2019-11-20 16:16:41
   * @param {type} type 1 表示显示 2隐藏
   * @return: 
   */  
  async getpopover(type = 1) {
    try {
      const res = await this.popoverController.getTop();
      if (res) {
        if (type === 1) {
          return true;
        }  else {
          const bool = await this.popoverController.dismiss();
          if (bool) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        if (type === 1) {
          await this.subloading();
          return true;
        }
      }
      return true;
    } catch(err) {
      if (type === 1) {
        await this.subloading();
        return true;
      } else {
        return false;
      }
    }
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
        this.yjlistfn.addItem(this.type);
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
    if (this.iscg) {
      this.native.removeStorage('yjcontent' + this.type);
    }
    this.getpopover(2).then(res => {
      if (res) {
        this.issub = false;
        if (num) {
          if (num === 1) {
            this.goBack(1);
          } else {
            this.route.navigate(['/fbyjmore'], {queryParams: {type: this.type + 1, num: num.num, sendnum: num.sendnum, lxb: num.lxb}});
          }
        }
      } else {
        setTimeout(() => {this.suberr(num); }, 300);
      }
    }).catch(() => {
      setTimeout(() => {this.suberr(num); }, 300);
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
      imgarr: this.headobj ? [this.headobj.src] : [],
      thumb: this.headobj ? [this.headobj.thumb] : [],
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
    this.keyboardH = 0;
    this.target = null;
    this.bfscrolltop = 0;
    // this.blur();
  }
  /**
   * @Author: wjy-mac
   * @description: 当指定输入框触发焦点，保留当前触发input
   * @Date: 2019-11-29 20:12:20
   * @param {type} 
   * @return: 
   */  
  focusinput(e) {
    this.target = e.target;
    // document.body.scrollTop = document.body.scrollHeight;
  }
  /**
   * @Author: wjy-mac
   * @description: 当指定输入框失去焦点，清楚保留的input
   * @Date: 2019-11-29 20:12:56
   * @param {type} 
   * @return: 
   */  
  blurinput(e) {
    this.target = null;
    // document.body.scrollTop = this.bfscrolltop;
  }
  /**
   * @Author: wjy-mac
   * @description: 滚动到底部 使用延时是为了防抖
   * @Date: 2019-11-12 15:35:06
   * @param {type} 
   * @return: 
   */  
  scrollToBottom(y: number) {
    // this.target.scrollIntoView(true);
    this.contentbox.scrollByPoint(0, y, 100);
    // setTimeout(() => {
    //   this.contentbox.scrollToBottom(1);
    // }, 1);
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
