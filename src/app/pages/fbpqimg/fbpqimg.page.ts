/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-19 15:13:52
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import {NavController, ActionSheetController, PopoverController} from '@ionic/angular';
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
@Component({
  selector: 'app-fbpqimg',
  templateUrl: './fbpqimg.page.html',
  styleUrls: ['./fbpqimg.page.scss'],
})
export class FbpqimgPage implements OnInit {
  imgs: string[];
  addressObj: any;
  address: string;
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
  constructor(private nav: NavController, private http: HttpService,
              private user: UserService,
              private seletemedia: SeleteMediaService,
              private native: NativeService, public actionSheetController: ActionSheetController,
              private file: File,
              private activeroute: ActivatedRoute,
              private transfer: FileTransfer, public popoverController: PopoverController,
              private route: Router) { }

  ngOnInit() {
    this.isseleteVedio = 0;
    // this.addimg = 'www/assets/add.png';
    this.imgs = [];
    this.isshowend = true;
    this.address = '12323';
  }
  ionViewDidEnter() {
    const params = this.activeroute.snapshot.queryParams;
    this.type = (params['type']).toString();
    this.addressObj = this.user.getLocation();
    this.userdata = this.user.getUserp();
  }
  // setSlt() {
  //   const videodata = this.seletemedia.getData()[0];
  //   this.videofile.getFormatData(data => {
  //     console.log(data);
  //   });
  //
  // }
  goBack(): void {
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
    }
  }
  async presentActionSheet() {
    const buttons = [];
    if (this.isseleteVedio != 1) {
      buttons.push(...[{
        text: '相机',
        role: 'destructive',
        handler: () => {
          this.native.getPictureByCamera().then(res => {
            this.isseleteVedio = 2;
            this.addimgfn(res);
          });
        }
      }, {
        text: '相册',
        handler: () => {
          console.log('Share clicked');
          this.native.getPictures( 9 - this.imgs.length).then((res: any) => {
            this.isseleteVedio = 2;
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
            });
          }, err => {});
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
    if (this.imgs.length === 9) {
      this.isshowend = false;
    }
  }
  contentsend(patharr?: string[]) {
    const obj = {
      img: JSON.stringify(patharr),
      type: 1,
      address: this.addressObj.address,
      lnglat: this.addressObj.lng + '|' + this.addressObj.lat,
      content: this.content
    };
    this.http.postformdataloading(this.http.fbpqitem, obj).subscribe(res => {
      console.log(res);
      // this.isloading = false;
      alert(JSON.stringify(res))
      this.user.addjf(res.result.num);
      this.uploadEnd();
      this.imgs.length = 0;
      this.route.navigate(['/fbyjmore'], {queryParams: {type: 1, num: res.result.num, sendnum: res.result.sendnum}});

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
    // const oMyForm = new FormData();    // 创建一个空的FormData对象
    // oMyForm.append('file', this.videofile, this.videofile.name);
    // // oMyForm.append('abc', '123');
    // this.imgupload(oMyForm).then(filepath => {
    //   this.contentsend([filepath as string]);
    // });
    const fileTransfer: FileTransferObject = this.transfer.create();
    const width = this.videofile1.width * 0.5;
    const height = this.videofile1.height * 0.5;
    const obj: FileUploadOptions = {
      fileName: this.videofile.name,
      fileKey: 'file',
      chunkedMode: false,
      mimeType: this.videofile.type,
      params: {
        width,
        height
      }
    }
    fileTransfer.upload(this.videofile.fullPath, this.http.domain + this.http.updateimg, obj).then(res => {
      
      this.videofile = null;
      this.videofile1 = null;
      const path = JSON.parse(res.response)['result'];
      this.contentsend([path]);
    }).catch(err2 => {
      console.log('错了我')
      console.error(err2);
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
      }
      oReq.onerror = (err) => {
        reject(err);
      }
      oReq.send(file);
    });
  }
  playvideo() {
    // : todo 此处未实现ios和浏览器播放
   this.native.nativeVideoplay(this.videofile.fullPath);

  }
  uploadEnd() {
    this.isloading = false;
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
