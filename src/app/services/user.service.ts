import { Injectable } from '@angular/core';
import { NativeService } from './native.service';
import { GaoDeLocation, PositionOptions } from '@ionic-native/gao-de-location/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { HttpService } from './http.service';
import { AlertController } from '@ionic/angular';
// import {PositionOptions} from '@ionic-native/gao-de-location/ngx';
declare var AMap;
const yktoken = 'wjyykuser';
const ykdata = {
  token: 'wjyykuser',
  user_id: '-1',
  email: '',
  user_name: '游客',
  user_money: '0',
  pay_points: '0',
  is_surplus_open: '-1',
  address_id: '-1',
  lxfs: '0',
  birthday: '1992-01-01',
  user_rank: '1',
  mobile_phone: '',
  headimg: '',
  sex: '1',
  reg_time: '2015-07-28',
  lxdj: '户外小白',
  username: '游客',
  user_points: '230',
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;
  user: any;
  nowlocation: any; // 当前定位地址
  togglelocation: any; // 切换的地址
  constructor(private native: NativeService, private gaoDeLocation: GaoDeLocation, public alertController: AlertController,
    private geolocation: Geolocation) {
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
  /**
   * @Author: wjy-mac
   * @description: 同步获取地址
   * @Date: 2019-12-09 15:44:40
   * @param {type} 
   * @return: 
   */  
  getLocation() {
    if (!this.nowlocation.country) {
      this.getLocationfn();
    }
    return this.nowlocation;
  }
  /**
   * @Author: wjy-mac
   * @description: 只获取已有地址
   * @Date: 2019-12-18 16:13:13
   * @param {type} 
   * @return: 
   */  
  getLocation3() {
    return this.nowlocation;
  }
  /**
   * @Author: wjy-mac
   * @description: 异步获取地址
   * @Date: 2019-12-09 15:44:31
   * @param {type} 
   * @return: 
   */  
  async getLocation2() {
    if (this.nowlocation.country) {
      return this.nowlocation;
    }
    await this.getLocationfn();
    return this.nowlocation;
  }
  setLocationdata() {
    return {
      country: '中国',
      province: '四川',
      city: '成都',
      district: '',
      address: '',
      latitude: '39.923423',
      longitude: '116.368904'
    };
  }
  private async getLocationfn() {
    let res;
    try {
      if (this.native.isios()) {
        const locationdata = await this.geolocation.getCurrentPosition();
        const res2 = await this.lnglattoaddress([locationdata.coords['longitude'], locationdata.coords['latitude']]);
        res = {};
        res.longitude = locationdata.coords['longitude'];
        res.latitude = locationdata.coords['latitude'];
        res.country = res2['addressComponent']['country'];
        res.province = res2['addressComponent']['province'];
        res.city = res2['addressComponent']['city'];
        res.district = res2['addressComponent']['district'];
        res.address = res2['formattedAddress'];
      } else {
        res = await this.gaoDeLocation.getCurrentPosition();
      }
      if (res.province) {
        res.province = res.province.substring(0, res.province.length - 1);
        res.city = res.city.substring(0, res.city.length - 1);
      }
    } catch(error) {
      if (error == 'plugin_not_installed') {
        setTimeout(() => {
          this.getLocationfn();
        }, 1000);
        res = this.setLocationdata();
      } else if (error == 'cordova_not_available') {
        res = this.setLocationdata();
      } else {
        if (this.native.ismobile()) {
          console.log(this.native.ismobile())
          // this.native
          // this.native.presentAlert('请在设置中打开定位权限!');
          this.openQx();
          res = this.setLocationdata();
        } else {
          res = this.setLocationdata();
        }
      }
    }
    this.nowlocation.country = res.country;
    this.nowlocation.province = res.province;
    this.nowlocation.city = res.city;
    this.nowlocation.district = res.district;
    this.nowlocation.address = res.address;
    this.nowlocation.lat = res.latitude;
    this.nowlocation.lng = res.longitude;
  }
  async lnglattoaddress(lnglat) {
    return new Promise((resolve, reject) => {
      AMap.plugin('AMap.Geocoder', function() {
        const geocoder = new AMap.Geocoder();
        // const lnglat = [116.396574, 39.992706];
        geocoder.getAddress(lnglat, function(status, result) {
          if (status === 'complete' && result.info === 'OK') {
              // result为对应的地理位置详细信息
              resolve(result.regeocode);
          } else {
            reject();
          }
        });
      });
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
  setToken(token?: string) {
    // this.native.getPlatform();
    this.token = token || yktoken;
    this.native.setStorage('token', token).then(res => {}).catch(err => {
      // alert(err);
      // alert(JSON.stringify(err));
    });
  }
  async getToken() {
    if (!this.token) {
      let token: string;
      try {
        token = await this.native.getStorage('token');
      } catch(err) {
        token = yktoken;
      }
      this.token = token;
    }
    return this.token;
  }
  gethastoken() {
    this.native.getStorage('token');
  }
  setUser(data?: object) {
    this.user = data || ykdata;
    this.updateLocaluser();
  }
  /**
   * @Author: wjy-mac
   * @description: 获取用户信息
   * @Date: 2019-12-24 14:26:07
   * @param {type} 
   * @return: 
   */  
  async getUser() {
    // this.native.getPlatform();
    if (this.user && this.user.token) {
      return this.user;
    }
    let user: any;
    try {
      user = await this.native.getStorage('user');
    } catch(err) {
      user = ykdata;
      this.token = yktoken;
    }
    this.user = user;
    if (!this.native.ismobile()) {
      setTimeout(() => { // web 以防止定位丢失
        this.getLocation();
      }, 0);
    }
    return this.user;
  }
  /**
   * @Author: wjy-mac
   * @description: 判断是否未登陆
   * @Date: 2019-12-24 14:25:43
   * @param {type} 
   * @return: 
   */  
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
    return true;
  }
}
