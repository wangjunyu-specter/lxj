import { NativeService } from 'src/app/services/native.service';
import { HttpService } from './../../services/http.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-set-pd',
  templateUrl: './set-pd.page.html',
  styleUrls: ['./set-pd.page.scss'],
})
export class SetPdPage implements OnInit {
  formData: any;
  isLoading: boolean; // 是否正在请求
  yzmText: string;  // 验证码文字
  isGetyzm: boolean; // 是否正在请求验证码
  type: number; // 1 登录处过来 2 个人中心过来
  constructor(private nav: NavController, private userfn: UserService, private activeroute: ActivatedRoute,
    private http: HttpService, public alertController: AlertController, private native: NativeService) { }

  ngOnInit() {
    this.isLoading = false;
    this.yzmText = '获取验证码';
    this.isGetyzm = false;
    this.formData = {
      tel: '',
      pwd: '',
      yzm: ''
    };
  }
  ionViewWillEnter() {
    console.log('进入2')
    const params = this.activeroute.snapshot.queryParams;
    this.type = params['type'] ? Number(params['type']) : 1;
    if (this.type === 2) {
      this.userfn.getUser().then(res => {
        console.log(res);
        this.formData.tel = res['mobile_phone'];
      }).catch(err => {

      });
    }
  }
  goBack(): void {
    this.nav.back();
  }
  getYzm() {
    if (this.isGetyzm) {
      return false;
    }
    this.isGetyzm = true;
    this.http.getData(this.http.sendYzm, {'mobile_phone': this.formData.tel, 'type': 3}).subscribe(res => {
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
  sub() {
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
    this.isLoading = true;
    const obj = {
      mobile: this.formData.tel,
      password: this.formData.pwd,
      code: this.formData.yzm
    };
    this.http.postformdataloading(this.http.resetPwd, obj).subscribe(res => {
      this.isLoading = false;
      this.setSuccess();
    }, err2 => {
      this.isLoading = false;
    });
  }
  async setSuccess() {
    const alert = await this.alertController.create({
      header: '提示!',
      message: '密码重置成功',
      buttons: [
        {
          text: '确定',
          handler: () => {
            this.goBack();
          }
        }
      ]
    });

    await alert.present();
  }
}
