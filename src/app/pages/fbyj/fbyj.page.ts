import { Component, OnInit } from '@angular/core';
import {ActionSheetController, NavController, Platform, PopoverController} from '@ionic/angular';
import {ActivatedRoute, Router} from "@angular/router";
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HttpService } from '../../services/http.service';
import {UserService} from "../../services/user.service";
import {NativeService} from '../../services/native.service';
import { UploadComponent } from '../../components/upload/upload.component';
import {error} from "@angular/compiler/src/util";
@Component({
  selector: 'app-fbyj',
  templateUrl: './fbyj.page.html',
  styleUrls: ['./fbyj.page.scss'],
})
export class FbyjPage implements OnInit {
  type: number;
  title: string;
  content: string;
  config: any;
  head: string;
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
  constructor(private nav: NavController,
              public plt: Platform, private keyboard: Keyboard,
              private http: HttpService, private user: UserService,
              public actionSheetController: ActionSheetController,
              private activeroute: ActivatedRoute,
              private native: NativeService, public popoverController: PopoverController,
              private route: Router) { }

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
    }
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
          this.native.getPictures( max).then((res: any) => {
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
  basezfile(base64arr: string[], nowarr) {
    base64arr.map((base64, index) => {
      const file = this.native.getImgbase64tofile(base64, 'yjorgl' + index);
      file.append('nothumb', '1');
      const num = nowarr[index];
      this.imgupload(file).then(res => {
        this.contentimgarr[num] = false;
        base64 = null;
        const str = `<img\\s+(alt=""\\s)*class="wjy${num}"(\\sstyle="\\s*(width:\\s*)*\\s{0,1}\\d*%;")*\\s*(src="\\S*")\\s*(\\sstyle="\\s*(width:\\s*)*\\s{0,1}\\d*%;*"\\s*)*\\s*(alt="")*\\s*(/>|>)`;
        const regex = new RegExp(str);
        const nstr = `<img style="max-width: 100%" src="${this.http.zdomain + res['src']}" alt="">`;
        this.content = this.content.replace(regex, nstr);
        this.sub();
        this.savefn();
      }).catch(err2 => {
        this.contentimgarr[num] = false;
        this.suberr();
      });
    });
    base64arr = null;
  }
  updateHead(base64: string) {
    this.isloadhead = true;
    const file = this.native.getImgbase64tofile(base64, 'yjorglhead');
    base64 = null;
    this.imgupload(file).then(res => {
      this.isloadhead = false;
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
        return false;
      }
    }
    return true;
  }
  subupdate() {
    let obj = {
      img: JSON.stringify([this.head]),
      type: this.type + 1,
      address: this.address,
      lnglat: this.lnglat,
      content: this.content
    };
    obj = Object.assign(obj, this.formdata);
    console.log(obj);
    obj['outtime'] = obj['outtime'] ? Date.parse((new Date(obj['outtime'])).toString()) / 1000 : '';
    this.http.postformdata(this.http.fbpqitem, obj).subscribe(res => {
      console.log(res);
      this.user.addjf(res.result.num);
      // this.issub = false;
      this.suberr();
      this.route.navigate(['/fbyjmore'], {queryParams: {type: this.type + 1, num: res.result.num}});
    }, error1 => {
      this.suberr();
    });
  }
  suberr() {
    this.issub = false;
    this.popoverController.dismiss();
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
