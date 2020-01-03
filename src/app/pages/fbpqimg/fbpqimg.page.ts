/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors  : wjy-mac
 * @LastEditTime : 2019-12-31 15:51:02
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import {NavController, ActionSheetController, PopoverController, ModalController} from '@ionic/angular';
import { HttpService } from '../../services/http.service';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import { SeleteMediaService } from '../../services/selete-media.service';
// import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { MediaFile } from '@ionic-native/media-capture/ngx';
import { File, FileReader } from '@ionic-native/file/ngx';
import { NativeService } from '../../services/native.service';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {error} from 'selenium-webdriver';
import {MediaFile} from '@ionic-native/media-capture/ngx';
import {UploadComponent} from '../../components/upload/upload.component';
import {AmapComponent} from '../../components/amap/amap.component';
@Component({
  selector: 'app-fbpqimg',
  templateUrl: './fbpqimg.page.html',
  styleUrls: ['./fbpqimg.page.scss'],
})
export class FbpqimgPage implements OnInit {
  imgs: string[];
  addressObj: any;
  address: string; // 发布时地址
  lnglat: string;
  content: string;
  type: string;
  // addimg: string;
  isshowend: boolean;
  // video: any; // 视频绝对路径
  // responseImgs: string[];
  userdata: any;
  isloading: boolean;
  videoslt: string; // 视频缩略图
  videofile: MediaFile; // 视频文件
  videofile1: any; // 视频文件
  isseleteVedio: number; // 是否已选择视频 1 视频 2图片 0 未选择
  bdsrc: string;
  seleteFilepath: string; // 图库选择的视频路径
  constructor(private nav: NavController, private http: HttpService,
              private user: UserService,
              private seletemedia: SeleteMediaService,
              private native: NativeService, public actionSheetController: ActionSheetController,
              private file: File,
              private activeroute: ActivatedRoute,
              private transfer: FileTransfer, public popoverController: PopoverController,
              private route: Router, public modalController: ModalController) { }

  ngOnInit() {
    this.isseleteVedio = 0;
    // this.addimg = 'www/assets/add.png';
    this.imgs = [];
    this.isshowend = true;
    
  }
  ionViewDidEnter() {
    const params = this.activeroute.snapshot.queryParams;
    this.type = (params['type']).toString();
    this.addressObj = this.user.getLocation();
    // this.address = this.addressObj['address'];
    // this.lnglat = this.addressObj.lng + '|' + this.addressObj.lat;
    this.userdata = this.user.getUserp();
    this.native.getStorage('pqcontent').then(res => {
      if (res) {
        this.content = res;
      }
    }).catch(err => {});
  }
  // setSlt() {
  //   const videodata = this.seletemedia.getData()[0];
  //   this.videofile.getFormatData(data => {
  //     console.log(data);
  //   });
  //
  // }
  goBack(): void {
    this.native.setStorage('pqcontent', this.content).then(res => {}).catch(err => {});
    this.imgs = [];
    this.videofile = null;
    this.videofile1 = null;
    this.nav.back();
  }
  ionViewDidLeave() {
    // this.seletemedia.clear();
  }
  addfm() {
    if (this.imgs.length === 9) {
      return false;
    }
    this.presentActionSheet();
  }
  remove(index: number) {
    this.imgs.splice(index, 1);
    // this.seletemedia.removeOne(index);
    if (this.imgs.length === 8) {
      this.isshowend = true;
    } else if (this.imgs.length === 0) {
      this.isseleteVedio = 0;
    }
  }
  async presentActionSheet() {
    const buttons = [];
    if (this.isseleteVedio != 1) {
      buttons.push(...[{
        text: '相机',
        handler: () => {
          this.native.getPictureByCamera().then(res => {
            this.addimgfn(res);
          });
        }
      }, {
        text: '相册',
        handler: () => {
          console.log('Share clicked');
          this.native.getPictures( 9 - this.imgs.length).then((res: any) => {
            res.map(img => {
              this.addimgfn(img);
            });
          }, err => {
  
          });
        }
      }]);
    }
    if (this.isseleteVedio != 2) {
      buttons.push({
        text: '拍摄视频',
        role: '',
        handler: () => {
          this.native.captureVideo().then((filedata: MediaFile) => {
            // this.seletemedia.setData(filedata);
            this.isseleteVedio = 1;
            this.videofile = filedata;
            this.videofile.getFormatData(data => {
              this.videofile1 = data;
              // this.getVidefile();
            });
          }, err => {});
        }
      },
      {
        text: '选择视频',
        role: '',
        handler: () => {
          this.native.getViedeo().then(res => {
            this.isseleteVedio = 1;
            this.seleteFilepath = res;
          }).catch(err => {});
        }
      })
    }
    buttons.push({
      text: '取消',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    })
    const actionSheet = await this.actionSheetController.create({
      header: '请选择来源',
      buttons
    });
    await actionSheet.present();
  }
  addimgfn(res) {
    // this.seletemedia.addImg(res);
    this.imgs.push(res);
    if (this.imgs.length > 0) {
      this.isseleteVedio = 2;
    }
    if (this.imgs.length === 9) {
      this.isshowend = false;
    }
  }
  contentsend(patharr?: string[]) {
    const obj = {
      img: JSON.stringify(patharr),
      type: 1,
      address: this.address,
      lnglat: this.lnglat,
      content: this.content
    };
    this.http.postformdataloading(this.http.fbpqitem, obj).subscribe(res => {
      console.log(res);
      // this.isloading = false;
      this.user.addjf(res.result.num);
      this.uploadEnd();
      this.imgs.length = 0;
      this.route.navigate(['/fbyjmore'], {queryParams: {type: 1, num: res.result.num, sendnum: res.result.sendnum, lxb: res.result.lxb}});
      this.native.removeStorage('pqcontent');
    }, err2 => {
      this.uploadEnd();
    });
  }
  sub() {
    this.isloading = true;
    this.subloading();
    if (this.isseleteVedio == 1) {
      this.getVidefile();
    } else {
      if (this.imgs.length === 0) {
        this.contentsend();
      } else {
        this.basezfile();
      }
    }
  }
  getVidefile() {
    let objdata = {
      name: '',
      type: '',
      width: null,
      height: null,
      path: null
    };
    if (this.seleteFilepath) {
      objdata['name'] = 'yj' + (new Date()).getTime();
      const path = this.seleteFilepath;
      const arr = path.split('.');
      const type = arr[arr.length - 1];
      objdata['type'] = 'video/' + type;
      objdata['width'] = 400;
      objdata['height'] = 400;
      objdata['path'] = this.seleteFilepath;
    } else {
      return false;
    }
    const fileTransfer: FileTransferObject = this.transfer.create();
    const width = objdata.width || this.videofile1.width * 0.5;
    const height = objdata.height || this.videofile1.height * 0.5;
    const obj: FileUploadOptions = {
      fileName: objdata.name || this.videofile.name,
      fileKey: 'file',
      chunkedMode: false,
      mimeType: objdata.type || this.videofile.type,
      params: {
        width,
        height
      }
    };
    fileTransfer.upload(objdata.path || this.videofile.fullPath, this.http.domain + this.http.updateimg, obj).then(res => {
      this.videofile = null;
      this.videofile1 = null;
      this.seleteFilepath = null;
      const result = JSON.parse(res.response);
      if (result['status'] == 1) {
        const path = result['result'];
        this.contentsend([path]);
      } else {
      this.native.presentToast(result['msg']);
        this.uploadEnd();
      }
    }).catch(err2 => {
      this.native.presentToast('上传失败');
      this.uploadEnd();
    });
  }
  basezfile() {
    const proarr = [];
    this.imgs.map((base64, index) => {
      const file = this.native.getImgbase64tofile(base64, 'pq' + index);
      proarr.push(this.imgupload(file));
    });
    Promise.all(proarr).then(res => {
      this.contentsend(res);
    }).catch(err => {
      this.native.presentAlert('上传失败，请查看网络是否正常');
      this.uploadEnd();
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
      };
      oReq.onerror = (err) => {
        reject(err);
      };
      oReq.send(file);
    });
  }
  playvideo() {
    // : todo 此处未实现ios和浏览器播放
    if (this.native.isandroid()) {
      this.native.nativeVideoplay(this.seleteFilepath || this.videofile.fullPath);
    } else {
      // this.bdsrc = this.videofile.fullPath;
    }
  }
  async videoSet() {
    const buttons = [];
    if (this.native.isandroid()) {
      buttons.push({
        text: '播放',
        role: 'destructive',
        handler: () => {
          this.playvideo();
        }
      });
    }
    buttons.push(...[{
      text: '删除',
      handler: () => {
        this.videofile = null;
        this.videofile1 = null;
        this.isseleteVedio = 0;
        this.seleteFilepath = null;
      }
    }, {
      text: '取消',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]);
    const actionSheet = await this.actionSheetController.create({
      header: '请选择操作',
      buttons
    });
    await actionSheet.present();
  }
  async uploadEnd() {
    this.isloading = false;
    this.popoverController.dismiss();
    const element = await this.actionSheetController.getTop();
    if (element) {element.dismiss();}
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
  async openMap() {
    const modal = await this.modalController.create({
      component: AmapComponent
    });
    modal.onDidDismiss().then((res: any) => {
      console.log(res);
      if (res.data) {
        this.address = res.data.address;
        this.lnglat = res.data.lnglat;
      }
    });
    return await modal.present();
  }
}

function getFilepath(oldpath: string) {
  if (!oldpath) {
    return {};
  }
  const index = oldpath.lastIndexOf('/');
  const path = oldpath.substr(0, index);
  const name = oldpath.substr(index + 1);
  return {
    path,
    name
  };
}
