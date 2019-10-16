/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-08-03 14:52:31
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import {AlertController, NavController, PopoverController} from '@ionic/angular';
import {HttpService} from '../../services/http.service';
import {PaymentListService} from '../../services/payment-list.service';
import {NativeService} from '../../services/native.service';
import {PayorderService} from '../../services/payorder.service';
import {UserService} from '../../services/user.service';
import {PayboxComponent} from '../../components/paybox/paybox.component';
import {Router} from "@angular/router";
import {OrdersuccessService} from "../../services/ordersuccess.service";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {
  payType: number;
  dataObj: any;
  payList: any[];
  yepay: any;
  kysyye: boolean; // 是否使用余额支付
  yoursurplus: number;
  syye: any;
  price: number;
  orderData: any;
  ordersn: string;
  orderId: number;
  isyepayend: boolean;
  addtime: number;
  constructor(private nav: NavController, private http: HttpService,
              private paymentlist: PaymentListService, private native: NativeService,
              private payorder: PayorderService, private userfn: UserService,
              public popoverController: PopoverController, private route: Router,
              public alertController: AlertController, private orderdatafn: OrdersuccessService) { }

  ngOnInit() {
    this.isyepayend = false;
    this.yoursurplus = 3000;
    this.price = 300;
    this.dataObj = {
      payType: '1'
    };
    this.orderData = this.payorder.getOrder();
    console.log(this.orderData);
    if (!this.orderData) {
      this.backfn();
    } else {
      const order = this.orderData.order;
      this.price = order.order_amount;
      this.ordersn = order.order_sn;
      this.orderId = order.order_id;
      this.addtime = order.add_time;
    }
    // this.http.getData(this.http.getpaymentlist).subscribe(res => {
    //   console.log(res);
    // });
  }
  ionViewDidEnter() {
    this.paymentlist.getHlist().then(res => {
      this.payList = res;
      this.dataObj.payType = this.payList[0].pay_code;
      this.yepay = this.paymentlist.getyepay();
    });
    this.userfn.getUserp().then(res => {
      this.yoursurplus = res.user_money;
    }).catch(err2 => {});
  }
  toggle() {
    console.log(this.dataObj.payType);
  }
  setyenum() {
    if (!this.syye) {
      const ye = Number(this.yoursurplus);
      const price = Number(this.price)
      this.syye = ye > price ? price : ye;
    }
  }
  async submit($event) {
    const surplus = this.kysyye ? this.syye : 0;

    if (surplus > 0 && !this.isyepayend) {
      const pwd = await this.syyepay(); // 获取密码
      console.log(pwd)
      if (!pwd) {
        return false;
      } else {

        let kypay = false; // 余额支付是否成功
        try {
          kypay = await this.checksurplus(pwd) as any;
        } catch (err2) {
          kypay = false;
        }
        if (!kypay) {
          return false;
        }
        this.isyepayend = true;
        console.log(this.syye )
        if (surplus == this.price) {
          this.isyepayend = false;
          this.gotosucess();
          return false;
        }
      }
    }
    this.payfn()
  }
  payfn() {
    this.http.postformdataloading(this.http.acteditpayment, {order_id: this.orderId, pay_code: this.dataObj.payType, is_pay: 1}).subscribe(res => {
      console.log('余额支付成功')
      console.log(res)
      this.gotosucess();
    }, error2 => {
    });
  }
  gotosucess(res?:object) {
    let obj = res;
    if (!obj) {
      obj = {
        order: {
          order_id: this.ordersn
        }
      }
    }
    this.orderdatafn.setData(obj);
    this.route.navigate(['/ordersuccess'], {queryParams: {type: 2}});
  }
  async syyepay() {
    const popover = await this.popoverController.create({
      component: PayboxComponent,
      translucent: false,
      cssClass: 'payboxcontent',
      componentProps: {
        // src: this.http.domain + this.productData.goods_thumb,
        price: this.syye,
      }
    });
    await popover.present();
    const pwd = await popover.onDidDismiss().then(res => {
      console.log(res);
      if (!res.data) {
        return false;
      }
      return res.data;
    })

    return pwd;
  }
  async checksurplus(pwd) {
    return new Promise((resolve, reject) => {
      this.http.postformdataloading(this.http.editsurplus, {order_id: this.orderId, surplus: this.syye, password: pwd}).subscribe(res => {
        console.log('余额支付成功')
        console.log(res)
        resolve(true);
      }, error2 => {
        reject(false);
      });
    });
  }

  setyechange() {
    if (this.syye < 0) {
      this.native.presentAlert('请输入正确的金额');
      this.syye = 0;
      return false;
    }
    if (this.syye && this.syye.toString().includes('.')) {
      const str = this.syye.toString().split('.');
      if (str[1].length > 2) {
        this.native.presentAlert('最小支持金额为分');
        this.syye = 0;
        console.log(this.syye);
        return false;
      }
    }
    if (this.syye > this.yoursurplus || this.syye > this.price) {
      this.native.presentAlert('请输入正确的金额');
      this.syye = 0;
      return false;
    }
  }
  goBack(): void {
    this.presentAlertConfirm()
  }
  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: '提示',
  //     message: '余额支付已成功，30分钟内未继续支付将原路返还.',
  //     buttons: [ {
  //       text: '确定',
  //       handler: () => {
  //         console.log('Confirm Okay');
  //         this.backfn();
  //       }
  //     }]
  //   });
  //
  //   await alert.present();
  // }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '是否取消支付!',
      message: '请在30分钟内到行程中继续支付，否则将取消订单!',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            // this.backfn();
          }
        }, {
          text: '确定',
          handler: () => {
            console.log('Confirm Okay');
            this.backfn();
          }
        }
      ]
    });

    await alert.present();
  }
  backfn() {
    this.nav.back();
  }
}
