
/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 23:14:51
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-05 18:27:18
 * @Description: file content
 */
import { Injectable } from '@angular/core';
import {AlertController, LoadingController, ToastController, Platform, NavController } from '@ionic/angular';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {VideoPlayer} from '@ionic-native/video-player/ngx';
import { Network } from '@ionic-native/network/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Market } from '@ionic-native/market/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Device } from '@ionic-native/device/ngx';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
import { Toast } from '@ionic-native/toast/ngx';
// import { Alipay } from '@ionic-native/alipay/ngx';
// import { Wechat } from '@ionic-native/wechat/ngx';

declare var Wechat;
// declare var Alipay;
declare let cordova

@Injectable({
  providedIn: 'root'
})
export class NativeService {
  loading: any;
  hasLoad: boolean;
  constructor(private alertController: AlertController, public loadingController: LoadingController,
              public toastController: ToastController, private nativeStorage: NativeStorage,
              public plt: Platform, private mediaCapture: MediaCapture,
              private imagePicker: ImagePicker, private camera: Camera,
              private androidFullScreen: AndroidFullScreen, private statusbar: StatusBar,
              private videoPlayer: VideoPlayer, private network: Network, private appVersion: AppVersion,
              private market: Market, private callNumber: CallNumber, private device: Device,
              private openNativeSettings: OpenNativeSettings, private toast: Toast,
              private nav: NavController
              // private alipay: Alipay,
              // private wechat: Wechat
              ) { }
  public async getAppversion() {
    const version = await this.appVersion.getVersionNumber();
    return version;
  }
  weboShare() {
    
  }
  getAppversioncode() {
    return this.appVersion.getVersionCode().then(res => {
      alert(res);
      alert(JSON.stringify(res))
    }).catch(err => {

    });
  }
  public openNativeSettingfn(type: number = 1) {
    let setting: string;
    if (type === 1) {
      setting = 'settings';
    } else if (type === 2) {
      if (this.isandroid()) {
        setting = 'location';
      } else {
        setting = 'locations';
      }
    }
    this.openNativeSettings.open(setting);
  }
  async presentAlert(msg, title?) {
    const alert = await this.alertController.create({
      header: title || '提示',
      message: msg,
      buttons: [
        {
          text: '确定',
          role: 'OK',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }
  async showLoading() {
    if (this.hasLoad) {
      return false;
    }
    this.hasLoad = true;
    this.loading = await this.loadingController.create({
      message: '加载中',
      // duration: 2000
    });
    await this.loading.present();

    // const { role, data } = await loading.onDidDismiss();

  }
  async hideLoading() {
    if (!this.hasLoad) {
      return false;
    }
    if (this.loading) {
      this.loading.dismiss();
      this.hasLoad = false;
      this.loading = null;
    } else {
      const stime = setInterval(() => {
        if (this.loading) {
          clearInterval(stime);
          this.loading.dismiss();
          this.hasLoad = false;
          this.loading = null;
        }
      }, 300)
    }

    // this.loading = await this.loadingController.create({
    //   message: 'Hellooo',
    //   // duration: 2000
    // });
    // await this.loading.present();
    //
    // // const { role, data } = await loading.onDidDismiss();
    //
    // console.log('Loading dismissed!');
  }
  async presentAlertConfirm(title = '提示', msg?) {
    const alert = await this.alertController.create({
      header: title,
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确定',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  presentToast(msg: string) {
    if(this.ismobile()) {
      this.mobileToast(msg);
    } else {
      this.webToast(msg);
    }
  }
  private async webToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
  private mobileToast(msg: string) {
    this.toast.show(msg, '2000', 'bottom').subscribe(
      toast => {
      }
    );
  }
  getUuid() {
    return this.device.uuid;
  }
  // 获取平台信息
  getPlatform() {
    // return this.plt.is('mobile');
    return this.plt.is('android') || this.plt.is('ios');
    // return true;
  }
  // 是否手机
  ismobile() {
    return this.plt.is('cordova');
    // return this.plt.is('android') || this.plt.is('ios');
  }
  isandroid() {
    return this.plt.is('android');
  }
  isios() {
    return this.plt.is('ios');
  }
   /**
   * @Author: wjy-home
   * @description: 打开商店,只有ios可以使用
   * @param {type} 
   * @return: 
   * @Date: 2019-08-03 17:32:35
   */
  openStore() {
    // alert('户外旅行家/id1490243013?l=zh&ls=1');
    // cordova.plugins.market.open('1490243013');
    this.market.open('1490243013').then(res => {
    }).catch(err => {
      alert(JSON.stringify(err))
    });
  }
  callTel(tel: string) {
    if (!tel) {
      this.presentAlert('商家没有设置电话!', '提示');
      return false;
    }
    this.callNumber.callNumber(tel, true);
  }
  /**
   * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
   */
  getNetworkType(): string {
    if (!this.ismobile()) {
      return 'wifi';
    }
    return this.network.type;
  }

  /**
   * 判断是否有网络
   * @returns {boolean}
   */
  isConnecting(): boolean {
    return this.getNetworkType() !== 'none';
  }
  // 储存数据
  async setStorage(title: string, val: any) {
    val = JSON.stringify(val);
    try {
      if (this.ismobile()) {
        const data = await this.storage(title, val);
        return data;
      } else {
        window.sessionStorage.setItem(title, val);
        return true;
      }
    } catch (err2) {
      throw err2;
    }
  }
  private storage(title: string = 'my_store_user', val: any) {
    return new Promise((resolve, reject) => {
      this.nativeStorage.setItem(title, val)
        .then(
          () => resolve(true),
          error => reject(error)
        );
    });
  }
  async getStorage(title: string) {
    try {
      if (this.ismobile()) {
        try {
          const data = await this.getStoragefn(title);
          return JSON.parse(data as any);
        } catch (e) {
          throw null;
        }
      } else {
        const data = window.sessionStorage.getItem(title);
        if (data && data != 'undefined') {
          return JSON.parse(data);
        } else {
          throw null;
        }
      }
    } catch (err2) {
      throw err2;
    }
  }
  private getStoragefn(title: string = 'my_store_user') {
    return new Promise((resolve, reject) => {
      this.nativeStorage.getItem(title)
        .then(
          data => resolve(data),
          error => reject(error)
        );
    });
  }
  removeStorage(title: string = 'my_store_user') {
      if (this.ismobile()) {
          this.nativeStorage.remove(title);
      } else {
          window.sessionStorage.removeItem(title);
      }
  }
  clearStorage() {
      if (this.ismobile()) {
          this.nativeStorage.clear();
      } else {
          window.sessionStorage.clear();
      }
  }

  captureImage() {
    return new Promise((resolve, reject) => {
      const options: CaptureImageOptions = { limit: 1 }
      this.mediaCapture.captureImage(options)
        .then(
          (data: MediaFile[]) => {
            const res = data[0];
            resolve(res);
          },
          (err: CaptureError) => {
            reject(err);
          }
        );
    });
  }
  captureVideo(duration = 10) {
    return new Promise((resolve, reject) => {
      const options: CaptureVideoOptions = { limit: 1, duration }
      this.mediaCapture.captureVideo(options)
        .then(
          (data: MediaFile[]) => {
            const res = data[0];
            resolve(res);
          },
          (err: CaptureError) => {
            reject(err);
          }
        );
    });
  }
  
  /**
   * @Author: wjy-mac
   * @description: 通过相册获取图片
   * @Date: 2019-12-11 17:03:00
   * @param {type} 
   * @return: 
   */  
  async getPictures(max: number = 9) {
    try {
      const imgsrcarr = await this.getPicturesfn(1, max) as string[];
      const arr: string[] = [];
      imgsrcarr.map(res => {
        const str = 'data:image/jpeg;base64,' + res;
        arr.push(str);
      });
      return arr;
      // return imgsrcarr;
    } catch (e) {
      return [];
    }
  }
  private async getPicturesfn(type, max: number = 9) {
    const options = {
      maximumImagesCount: max,
      width: 800,
      outputType: type
    }
    return new Promise((resolve, reject) => {
      this.imagePicker.getPictures(options).then((results) => {
        resolve(results);
      }, (err) => {
        reject([]);
      });
    });
  }
  /**
   * 使用cordova-plugin-camera获取照片
   * @param options
   * @returns {Promise<string>}
   */
  getPicture(options: CameraOptions = {}): Promise<string> {
    const ops: CameraOptions = Object.assign({
      sourceType: this.camera.PictureSourceType.CAMERA, // 图片来源,CAMERA:拍照,PHOTOLIBRARY:相册
      destinationType: this.camera.DestinationType.DATA_URL, // 默认返回base64字符串,DATA_URL:base64   FILE_URI:图片路径
      quality: 70, // 图像质量，范围为0 - 100
      allowEdit: false, // 选择图片前是否允许编辑
      // encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 800, // 缩放图像的宽度（像素）
      targetHeight: 800, // 缩放图像的高度（像素）5889
      saveToPhotoAlbum: false, // 是否保存到相册
      encodingType: 1,
      correctOrientation: true // 设置摄像机拍摄的图像是否为正确的方向
    }, options);
    return new Promise((resolve) => {
      this.camera.getPicture(ops).then((imgData: string) => {
        resolve(imgData);
      }, (err) => {
        err == 20 && this.presentToast('没有权限,请在设置中开启权限');
        // this.warn('getPicture:' + err);
      });
    });
  }
  /**
   * @Author: wjy-mac
   * @description: 通过相册获取视频
   * @Date: 2019-12-11 17:03:24
   * @param {type} 
   * @return: 
   */  
  async getViedeo() {
    try {
      const res = await this.getPicture({
        sourceType: 0,
        mediaType: 1,
        destinationType: 2 // DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
      });
      return res;
    } catch (err) {
      String(err).indexOf('cancel') != -1 ? this.presentToast('取消拍照') : this.presentToast('获取照片失败');
      throw new Error();
    }
  }
  /**
   * 通过拍照获取照片
   * @param options
   * @return {Promise<string>}
   */
  getPictureByCamera(options: CameraOptions = {}): Promise<string> {
    return new Promise((resolve) => {
      this.getPicture(Object.assign({
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL // DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
      }, options)).then((imgData: string) => {
        resolve('data:image/jpeg;base64,' + imgData);
      }).catch(err => {
        String(err).indexOf('cancel') != -1 ? this.presentToast('取消拍照') : this.presentToast('获取照片失败');
      });
    });
  }
  // getPictureByCamera(options: CameraOptions = {}): Promise<string> {
  //   return new Promise((resolve) => {
  //     this.getPicture(Object.assign({
  //       sourceType: this.camera.PictureSourceType.CAMERA,
  //       destinationType: this.camera.DestinationType.FILE_URI // DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
  //     }, options)).then((imgData: string) => {
  //       resolve(imgData);
  //     }).catch(err => {
  //       String(err).indexOf('cancel') != -1 ? this.presentToast('取消拍照') : this.presentToast('获取照片失败');
  //     });
  //   });
  // }
  /**
   * 通过base64转formdata
   * @param base64
   * @param name
   */
  getImgbase64tofile(base64, name, filename = 'file') {
    const type = 'image/png'; // 定义图片类型（canvas转的图片一般都是png，也可以指定其他类型）
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)[1] || type;
    const nametype = mime.split('/')[1];
    name = name + (new Date()).valueOf() + '.' + nametype; // 定义文件名字（例如：abc.png ， cover.png）
// 去掉url的头，并转化为byte
    const bytes = window.atob(arr[1]);
// 处理异常,将ascii码小于0的转换为大于0
    const ab = new ArrayBuffer(bytes.length);
// 生成视图（直接针对内存）：8位无符号整数，长度1个字节
    const ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }
    const file = new Blob([ab], {
      type: mime
    });
    const oMyForm = new FormData();    // 创建一个空的FormData对象
    oMyForm.append(filename, file, name);
    // oMyForm.append('abc', '123');
    return oMyForm;
  }
  /**
   * @Author: wjy-mac
   * @description: 设置全屏
   * @Date: 2019-12-06 20:18:27
   * @param {type} 
   * @return: 
   */  
  setFullscreen() {
    if (this.isandroid()) {
      this.androidFullScreen.immersiveMode();
    } else {
      this.statusbar.hide();
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 退出全屏
   * @Date: 2019-12-06 20:18:34
   * @param {type} 
   * @return: 
   */  
  backFullscreen() {
    if (this.isandroid()) {
      this.androidFullScreen.showSystemUI();
    } else {
      this.statusbar.show();
    }
    this.statusbar.overlaysWebView(true);
  }
  setIosdefault() {
    this.statusbar.styleDefault();
  }
  /**
   * @Author: wjy-mac
   * @description: 设置头部白色背景深色字
   * @param {type} 
   * @return: 
   * @Date: 2019-08-07 23:23:27
   */
  setStatusbardefalt() {
    this.statusbar.styleDefault();
  }
  /**
   * @Author: wjy-mac
   * @description: 设置白色字体
   * @Date: 2019-12-12 15:54:48
   * @param {type} 
   * @return: 
   */  
  setStatusbarlighttext() {
    this.statusbar.styleLightContent();
  }
  /**
   * @Author: wjy-mac
   * @description: 恢复头部为透明颜色
   * @param {type} 
   * @return: 
   * @Date: 2019-08-07 23:23:51
   */
  setStatusbarnomal() {
    this.statusbar.overlaysWebView(true);
  }
  nativeVideoplay(src: string) {
    if (this.isandroid()) {
      this.videoPlayer.play(src).then(() => {
        console.log('video completed');
      }).catch(err => {
        console.log(err);
      });
    } else {
      alert('ios暂未实现');
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 支付宝支付
   * @Date: 2019-11-27 20:27:16
   * @param {type} 
   * @return: 
   */  
  alipayment(alipayOrder) {
    return new Promise((resolve, reject) => {
      cordova.plugins.alipay.payment(alipayOrder, data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
    // try {
    //   await this.alipay.pay(alipayOrder);
    //   return true;
    // } catch(err) {
    //   throw new Error(err);
    // }
  }
  unescapeHTML(a){
    let aNew = "" + a;
       return aNew.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
   }
  /**
   * @Author: wjy-mac
   * @description: 微信支付
   * @Date: 2019-11-27 20:31:50
   * @param {type} 
   * var params = {
          partnerid: '10000100', // merchant id
          prepayid: 'wx201411101639507cbf6ffd8b0779950874', // prepay id
          noncestr: '1add1a30ac87aa2db72f57a2375d8fec', // nonce
          timestamp: '1439531364', // timestamp
          sign: '0CB01533B8C1EF103065174F50BCA001', // signed string
      };
   * @return: 
   */  
  wechatpayment(params) {
    // { appid: "wx27166a2a293d90cb", mch_id:  string(10) "" ["nonce_str"]=> string(16) "QSKTTBv07z4PnJXs" ["prepay_id"]=> string(36) "wx3014015133795699b4b86e871733438500" ["result_code"]=> string(7) "SUCCESS" ["return_code"]=> string(7) "SUCCESS" ["return_msg"]=> string(2) "OK" ["sign"]=> string(64) "4AE52BFBD266756CDB253CC4C0CCC2A7DA464E142C1E6E515FAAF19E0BF57BF3" ["trade_type"]=> string(3) "APP" }
    const obj = {
      partnerid: params['mch_id'],
      appid: params['appid'],
      prepayid: params['prepay_id'],
      noncestr: params['nonce_str'],
      timestamp: params['timestamp'].toString(),
      sign: params['sign']
    };
    console.log(obj);
    return new Promise((resolve, reject) => {
      Wechat.sendPaymentRequest(obj, data => {
        resolve(data);
      }, err => {
        alert(JSON.stringify(err));
        reject(err);
      });
    })
  }
  /**
   * @Author: wjy-mac
   * @description: 微信多媒体分享
   * @Date: 2019-11-27 20:35:49
   * @param {type} type 1 朋友圈 2 好友
   * @return: 
   */
  wechatShare(title: string, des: string, src: string, link: string, type: number = 1) {
    Wechat.share({
      message: {
          title,
          description: des || '来自专业户外旅行平台-户外旅行家',
          thumb: src || 'https://sc.cdlxj.cn/logo512.png',
          mediaTagName: "旅行家",
          messageExt: "这是第三方带的测试字段",
          messageAction: "<action>dotalist</action>",
          media: {
            type: Wechat.Type.WEBPAGE,   // webpage
            webpageUrl: link  // webpage
          }
      },
      scene: type === 1 ? Wechat.Scene.TIMELINE :  Wechat.Scene.SESSION  // share to Timeline
    }, () => {
        // alert("Success");
    }, (reason) => {
        // alert("Failed: " + reason);
    });
  }
  /**
   * @Author: wjy-mac
   * @description: 是否登录
   * @Date: 2019-12-18 21:37:00
   * @param {type} 
   * @return: 
   */  
  async resetlogin(type?: number) {
    const alert = await this.alertController.create({
      header: '提示',
      message: type ? '登录已失效，是否登录？' : '需要先登录哦!!!',
      buttons: [
        {
          text: '随便看看',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '去登录',
          handler: () => {
            console.log('Confirm Okay');
            this.nav.navigateRoot('/login');
          }
        }
      ]
    });

    await alert.present();
  }
}

