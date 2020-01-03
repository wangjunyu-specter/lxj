import { Component, OnInit, ViewChild } from '@angular/core';
import {AlertController, NavController} from "@ionic/angular";
import {UserService} from "../../services/user.service";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-setpaypwd',
  templateUrl: './setpaypwd.page.html',
  styleUrls: ['./setpaypwd.page.scss'],
})
export class SetpaypwdPage implements OnInit {
  type: number;
  user: any;
  loginpwd: string;
  yzm: string;
  time: number;
  pwd: string;
  npwd: string;
  @ViewChild('pwdbox', {static: false}) pwdbox: any;
  isfous: boolean;
  constructor(private nav: NavController, private userfn: UserService,
              public alertController: AlertController, private http: HttpService) { }

  ngOnInit() {
    this.type = 1;
    this.pwd = '';
    this.isfous = false;
  }
  ionViewDidEnter() {
    this.userfn.getUserp().then(res => {
      this.user = res;
    });
  }
  goBack(): void {
    this.nav.back();
  }
  yzloginpwd() {
    this.login()

  }
  czyzm() {
    this.czjsq();
  }
  czjsq() {
    this.time = 60;
    const set = setInterval(() => {
      this.time--;
      if (this.time === 0) {
        clearInterval(set);
      }
    }, 1000)
  }
  setYzm() {
    // : todo 未实现验证码验证
    this.type = 3;
    // this.setfoucs();
  }
  setpwd() {
    console.log(this.pwd);
    this.type = 4;
    this.npwd = this.pwd;
    this.pwd = '';
    this.setfoucs();
  }
  setfoucs() {
    console.log(this.pwdbox)
    this.pwdbox.setFocus();
    this.isfous = true;
  }
  setback() {
    this.type = 3;
    this.npwd = '';
  }
  sub() {
    if (this.pwd != this.npwd) {
      this.presentAlert('两次密码不相同!');
    }
    this.http.postformdataloading(this.http.setyepay, {'password': this.pwd}).subscribe(res => {
      this.userfn.upData('is_surplus_open', 1);
      this.presentAlert('设置成功', 1)
    }, error2 => {})
  }
  async presentAlert(des: string, type: number = 0) {
    const alert = await this.alertController.create({
      header: '提示',
      message: des,
      buttons: [{
        text: '确定',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          this.pwd = '';
          this.setfoucs();
          if (type === 1) {
            this.goBack();
          }
        }
      }]
    });

    await alert.present();
  }
  login() {
    console.log(this.user)
    const obj = {
      username: this.user.mobile_phone,
      password: this.loginpwd
    };
    this.http.postformdataloading(this.http.yzpwd, obj).subscribe(res => {
      this.type = 3;
      this.czjsq();
    }, err => {
      console.log(err);
      // alert(JSON.stringify(err));
    });
  }
  setisfous(type: number) {
    if (type === 1) {
      this.isfous = true;
    } else {
      this.isfous = false;
    }
  }
}
