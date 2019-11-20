import { Injectable } from '@angular/core';
import { NativeService } from './native.service';
import { GaoDeLocation, PositionOptions } from '@ionic-native/gao-de-location/ngx';

// import { HttpService } from './http.service';
import {reject} from 'q';
import { AlertController } from '@ionic/angular';
// import {PositionOptions} from '@ionic-native/gao-de-location/ngx';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;
  user: any;
  nowlocation: any; // 当前定位地址
  togglelocation: any; // 切换的地址
  constructor(private native: NativeService, private gaoDeLocation: GaoDeLocation, public alertController: AlertController) {
    this.nowlocation = {
      country: '',
      province: '',
      city: '',
      district: '',
      address: '',
      lat: '',
      lng: ''
    }
    this.togglelocation = {
      country: '',
      province: '',
      city: '',
      district: '',
      address: '',
      regionid: '',
      log: '',
      lng: ''
    };
  }
  clear() {
    this.token = null;
    this.user = null;
    this.nowlocation = {
      country: '',
      province: '',
      city: '',
      district: '',
      address: '',
      lat: '',
      lng: ''
    }
    this.togglelocation = {
      country: '',
      province: '',
      city: '',
      district: '',
      address: '',
      regionid: '',
      log: '',
      lng: ''
    };
  }
  getLocation() {
    if (!this.nowlocation.country) {
      this.getLocationfn();
    }
    return this.nowlocation;
  }
  private getLocationfn() {
    this.gaoDeLocation.getCurrentPosition()
      .then((res: PositionOptions) => { // : todo 需要设置浏览器定位 或 获取地址
        console.log(res);
        this.nowlocation.country = res.country;
        this.nowlocation.province = res.province;
        this.nowlocation.city = res.city;
        this.nowlocation.district = res.district;
        this.nowlocation.address = res.address;
        this.nowlocation.lat = res.latitude;
        this.nowlocation.lng = res.longitude;
        //alert(JSON.stringify(res));
      })
      .catch((error) => {
        console.error(error)
        if (this.native.ismobile()) {
          // this.native
          this.native.presentAlert('打开通知获取更多优惠！');
          this.openQx();
        } else {
          this.nowlocation.country = '中国';
          this.nowlocation.province = '四川省';
          this.nowlocation.city = '成都市';
        }
      });
  }
  async openQx() {
    const alert = await this.alertController.create({
      header: '提示!',
      message: '为了能够提供精准的服务需要获取定位权限!',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '去设置',
          handler: () => {
            console.log('Confirm Okay');
            this.native.openNativeSettingfn(2);
          }
        }
      ]
    });

    await alert.present();
  }
  setToken(token: string) {
    // this.native.getPlatform();
    this.token = token;
    this.native.setStorage('token', token).then(res => {}).catch(err => {
      alert(err);
      alert(JSON.stringify(err));
    });
  }
  async getToken() {
    if (!this.token) {
      this.native.getStorage('token').then(res => {
        this.token = res as string;
      });
    }
    return this.token;
  }
  gethastoken() {
    this.native.getStorage('token');
  }
  setUser(data: object) {
    this.user = data;
    this.updateLocaluser();
  }
  async getUser() {
    // this.native.getPlatform();
    if (this.user && this.user.token) {
      return this.user;
    }
    return new Promise((resolve, reject) => {
      this.native.getStorage('user').then(res => {
        this.user = res;
        resolve(res);
        if (!this.native.ismobile()) {
          setTimeout(() => { // 以防止定位丢失
            this.getLocation();
          }, 0);
        }
      }, err => {
        console.error(err);
        reject();
      }).catch(err => {
        reject();
      });
    });
  }
  async getUserp() {
    try {
      await this.getUser();
    } catch (e) {
      await this.showalertlogin();
    }
    return this.user;
  }
  async addjf(obj) {
    if (this.user && this.user.token) {
      this.setFj(obj);
    } else {
      try {
        await this.getUser();
        this.setFj(obj);
      } catch (e) {
        await this.showalertlogin();
      }
    }
  }
  setFj(obj) {
    if (obj.num) {
      this.user.lxfs = (Number(this.user.lxfs) || 0) + Number(obj.num);
    }
    if (obj.jfnum) {
      this.user.pay_points = (Number(this.user.pay_points) || 0) + Number(obj.jfnum);
    }
    this.updateLocaluser();
  }
  upData(key: string, val) {
    this.user[key] = val;
    this.updateLocaluser();
  }
  upDataobj(userData: object) {
    console.log(userData)
    for (let key in userData) {
      console.log(key)
      if (key === 'username' || key === 'username') {
        this.user['user_name'] = userData[key];
        this.user['username'] = userData[key];
      } else {
        this.user[key] = userData[key];
      }
    }
    console.log(this.user)
    this.updateLocaluser();
  }
  setMraddress(id) {
    this.user.address_id = id;
    this.updateLocaluser();
  }
  updateLocaluser() {
    this.native.setStorage('user', this.user);
  }
  async showalertlogin() {
    // : todo 需要做登录弹窗
    return true;
  }
}
