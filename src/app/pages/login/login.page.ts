import { WebsocketService } from 'src/app/services/websocket.service';
import { TopageService } from './../../services/topage.service';
/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-01 14:01:37
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
              private alertController: AlertController, private userfn: UserService, private toPagefn: TopageService,
              private ws: WebsocketService, private route: Router) {
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
  }
  ionViewWillEnter() {
    const res = this.activeroute.snapshot.queryParams;
    if (res && res['type'] == 1) {
      this.pageType = res['type'];
    }
    this.ws.disconnet();
    // this.router.queryParams.subscribe(res => {
    //   console.log(res);
    //   if (res && res['type']) {
    //     this.pageType = res['type'];
    //   }
    // });
  }
  goSetpwd() {
    this.route.navigate(['/set-pd'], {queryParams: {type: 1}});
  }
  toggleType(type: number) {
    this.pageType = type;
    this.formData.pwd = '';
    this.formData.yzm = '';
  }
  sub() {
    console.log(this.formData);
    if (this.pageType === 1 || this.pageType == 3) {
      this.login();
    } else if (this.pageType === 2) {
      this.registerhttp();
    } else if (this.pageType === 4) {
      this.chagePwd();
    }
  }
  chagePwd() {
    const obj = {
      mobile: this.formData.tel,
      password: this.formData.pwd,
      code: this.formData.yzm
    };
    this.http.postformdataloading(this.http.resetPwd, obj).subscribe(res => {
      console.log(res);
      this.native.presentAlert('密码重置成功');
      this.pageType = 1;
    }, err2 => {});
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
      this.http.clearUser();
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
  async register() {
    const alert = await this.alertController.create({
      header: '温馨提示',
      message: '点击确定表示已阅读并同意屏幕下方协议哦',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.registerhttp();
          }
        },
        {
          text: '确定',
          role: 'OK',
          cssClass: 'secondary',
          handler: (blah) => {
            this.registerhttp();
          }
        }
      ]
    });

    await alert.present();
  }
  registerhttp() {
    const zz1 = /\d+/;
    const zz2 = /[a-z]+/i;
    if (!zz1.test(this.formData.pwd)) {
      this.native.presentAlert('密码需要包含字母和数字!');
      return false;
    }
    if (!zz2.test(this.formData.pwd)) {
      this.native.presentAlert('密码需要包含字母和数字!');
      return false;
    }
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
  backButton() {
    this.pageType = 1;
  }
  getYzm() {
    if (this.isGetyzm) {
      return false;
    }
    this.isGetyzm = true;
    this.http.getData(this.http.sendYzm, {'mobile_phone': this.formData.tel, 'type': this.pageType - 1}).subscribe(res => {
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
    }, err => {
      this.isGetyzm = false;
    });
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
  openxy(link) {
    this.toPagefn.toPage(10, this.http.zdomain + link);
  }
}
