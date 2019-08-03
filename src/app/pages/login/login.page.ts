import { TopageService } from './../../services/topage.service';
/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy
 * @LastEditTime: 2019-08-03 19:23:10
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AlertController, NavController} from '@ionic/angular';
import { HttpService } from '../../services/http.service';
import { NativeService } from '../../services/native.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  pageType: number; // 页面类型 1 登陆 2注册 3 验证码登陆 4 忘记密码 5 修改密码
  formData: any;
  yzmText: string;  // 验证码文字
  isGetyzm: boolean; // 是否正在请求验证码
  isLoading: boolean; // 是否正在请求
  constructor(private router: ActivatedRoute, private nav: NavController,
              private http: HttpService,
              private native: NativeService, private activeroute: ActivatedRoute,
              private alertController: AlertController, private userfn: UserService, private toPagefn: TopageService) {
    this.pageType = 1;
    this.yzmText = '获取验证码';
    this.isGetyzm = false;
    this.isLoading = false;
    this.formData = {
      tel: '',
      pwd: '',
      yzm: ''
    };
  }
  ngOnInit() {
    console.log(this.native.getPlatform())
  }
  ionViewWillEnter() {
    const res = this.activeroute.snapshot.queryParams;
    if (res && res['type'] == 1) {
      this.pageType = res['type'];
    }
    // this.router.queryParams.subscribe(res => {
    //   console.log(res);
    //   if (res && res['type']) {
    //     this.pageType = res['type'];
    //   }
    // });
  }
  toggleType(type: number) {
    this.pageType = type;
    this.formData.pwd = '';
  }
  sub() {
    console.log(this.formData);
    if (this.pageType === 1 || this.pageType == 3) {
      this.login();
    } else if (this.pageType === 2) {
      this.register();
    }
  }
  login() {
    const obj = {
      username: this.formData.tel,
      password: this.formData.pwd,
      captcha: this.formData.yzm
    };
    this.isLoading = true;
    this.http.postformdata(this.http.login, obj).subscribe(res => {
      console.log(res);
      this.nav.navigateRoot('/tabs/tab1');
      this.userfn.setToken(res.token as string);
      const user = res.data;
      user.token = res.token;
      this.userfn.setUser(user);
      this.isLoading = false;
    }, err => {
      console.log(err);
      // alert(JSON.stringify(err));
      this.isLoading = false;
    });
  }
  register () {
    const obj = {
      mobile_phone: this.formData.tel,
      password: this.formData.pwd,
      mobile_code: this.formData.yzm
    };
    this.isLoading = true;
    this.http.postformdataloading(this.http.register, obj).subscribe(res => {
      console.log(1);
      console.log(res);
      if (res.status == 1) {
        this.presentAlert('', '注册成功,返回登录', 1);
      } else {
        this.presentAlert('', res.msg, 2);
      }
      this.isLoading = false;
    }, err => {
      console.log(err);
      this.isLoading = false;
    });
  }
  async presentAlert(title, msg: string, type: number) {
    const alert = await this.alertController.create({
      header: title || '提示',
      message: msg,
      buttons: [
        {
          text: '确定',
          role: 'OK',
          cssClass: 'secondary',
          handler: (blah) => {
            if (type === 1) {
              // this.nav.navigateRoot('/tabs/tab1');
              this.pageType = 1;
            }
          }
        }
      ]
    });

    await alert.present();
  }
  backButton () {
    this.pageType = 1;
  }
  getYzm () {
    if (this.isGetyzm) {
      return false;
    }
    this.isGetyzm = true;
    this.yzmText = '60';
    const setInter = setInterval(() => {
      if (this.yzmText === '0') {
        clearInterval(setInter);
        this.isGetyzm = false;
        this.yzmText = '获取验证码';
        return false;
      }
      this.yzmText = (Number(this.yzmText) - 1).toString();
    }, 1000);
  }
  openXy(type: number) {
    let link: string;
    if (type === 1) {
      link = this.http.zdomain + 'ptxy.html';
    } else if (type === 2) {
      link = this.http.zdomain + 'yszc.html';
    } else {
      link = this.http.zdomain + 'flsm.html';
    }
    this.toPagefn.toPage(10, link);
  }
}
