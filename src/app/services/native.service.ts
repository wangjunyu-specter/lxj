/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 23:14:51
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-05 22:35:50
 * @Description: file content
 */
import { Injectable } from '@angular/core';
import {AlertController, LoadingController, ToastController, Platform } from '@ionic/angular';
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
// import { Device } from '@ionic-native/device/ngx';

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
              private market: Market) { }
  public async getAppversion() {
    const version = await this.appVersion.getVersionNumber();
    return version;
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
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }
  // 获取平台信息
  getPlatform() {
    return this.plt.is('hybrid');
  }
  // 是否手机
  ismobile() {
    return this.plt.is('hybrid');
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
    this.market.open('io.lxj.wjy');
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
      if (this.getPlatform()) {
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
      if (this.getPlatform()) {
        try {
          const data = await this.getStoragefn(title);
          return JSON.parse(data as any);
        } catch (e) {
          console.log(e)
          throw null;
        }
      } else {
        const data = window.sessionStorage.getItem(title);
        if (data) {
          console.log(data);
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
    console.log(22212)
    return new Promise((resolve, reject) => {
      this.nativeStorage.getItem(title)
        .then(
          data => resolve(data),
          error => reject(error)
        );
    });
  }
  removeStorage(title: string = 'my_store_user') {
      if (this.getPlatform()) {
          this.nativeStorage.remove(title);
      } else {
          window.sessionStorage.removeItem(title);
      }
  }
  clearStorage() {
      if (this.getPlatform()) {
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
      saveToPhotoAlbum: true, // 是否保存到相册
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
    const nametype = mime.substring(5);
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
  setFullscreen() {
    if (this.isandroid()) {
      this.androidFullScreen.immersiveMode();
    } else {
      this.statusbar.hide();
    }
  }
  backFullscreen() {
    if (this.isandroid()) {
      this.androidFullScreen.showSystemUI();
    } else {
      this.statusbar.show();
    }
    this.statusbar.overlaysWebView(true);
  }
  /**
   * @Author: wjy-mac
   * @description: 设置头部白色背景
   * @param {type} 
   * @return: 
   * @Date: 2019-08-07 23:23:27
   */
  setStatusbardefalt() {
    this.statusbar.styleDefault();
  }
  /**
   * @Author: wjy-mac
   * @description: 回复头部为透明颜色
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
}
