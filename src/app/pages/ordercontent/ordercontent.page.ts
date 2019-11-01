import { CancelOrderPage } from './../cancel-order/cancel-order.page';
import { ThorderService } from './../../services/thorder.service';
/*
 * @Author: wjy-mac
 * @Date: 2019-07-29 22:29:34
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-01 15:55:05
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AlertController, NavController, PopoverController} from "@ionic/angular";
import {HttpService} from "../../services/http.service";
import {NativeService} from "../../services/native.service";
import {PaymentListService} from "../../services/payment-list.service";
import {PayboxComponent} from '../../components/paybox/paybox.component';
import { TopageService } from '../../services/topage.service';

@Component({
  selector: 'app-ordercontent',
  templateUrl: './ordercontent.page.html',
  styleUrls: ['./ordercontent.page.scss'],
})
export class OrdercontentPage implements OnInit {
  orderId: string;
  payList: any[]; // 支付方式
  data: any; // 所有数据
  endtime: string; // 订单关闭剩余时间
  payType: any; // 支付方式
  syye: any; // 使用余额
  kysyye: boolean; // 是否使用余额
  isyepayend: boolean; // 是否已使用余额  但未支付成功
  isshing: boolean; // 订单所有商品是否正在售后或已退款
  istkend: boolean; // 订单取消状态下是否已全部退款
  comment: number; // 评论id 大于0表示未评论
  constructor(private activeroute: ActivatedRoute, private nav: NavController,
              private http: HttpService, private native: NativeService, private paymentlist: PaymentListService,
              public alertController: AlertController, public popoverController: PopoverController,
              private topage: TopageService, private route: Router, private thorder: ThorderService) { }

  ngOnInit() {
    console.log('进入1')
    this.kysyye = false;
  }
  goBack(): void {
    this.nav.back();
  }
  ionViewWillEnter() {
    console.log('进入2')
    const params = this.activeroute.snapshot.queryParams;
    this.orderId = params['id'];
    this.comment = params['comment'] ? Number(params['comment']) : 0;
    console.log(this.orderId);
    if (!this.orderId) {
      setTimeout(() => {
        this.getDatahttp();
      }, 1000);
    } else {
      this.getDatahttp();
    }
    this.isshing = true;
    this.getData();
  }
  getData() {
    this.paymentlist.getHlist().then(res => {
      this.payList = res;
      this.payType = res[0].pay_code;
    }).catch(err2 => {

    })
  }
  doRefresh(event) {
    this.getData();
    this.getDatahttp().then(res => {
      event.target.complete();
    }).catch(err2 => {
      event.target.complete();
    })
  }
  async getDatahttp() {
    return new Promise((resolve, reject) => {
      this.http.getDataloading(this.http.orderDetail, {order_sn: this.orderId}).subscribe(res => {
        console.log(res)
        this.data = res.data;
        console.log(this.data)
        let istk = false;
        for (let i = 0; i < this.data['goods_list'].length; i++) {
          const goods = this.data['goods_list'][i];
          if (goods['tkend'] != 1 && goods['isshing'] != 1) {
            this.isshing = false;
          }
          if (goods['tkend'] != 1 || goods['backnum'] != goods['goods_number']) {
            istk = true;
          }
        }
        if (!istk) {
          this.istkend = true;
        }
        if ((res.data.order.order_status == '0' || res.data.order.order_status == '1') && res.data.order.pay_status == '0') {
          const endDate = res.data['order'].add_time;
          const nowDate = Date.parse((new Date()).toString()) / 1000;
          const totalSeconds = parseInt(((Number(nowDate) - Number(endDate))).toString(), 10);
          let modulo = totalSeconds % (60 * 60 * 24);
          let hours: any = Math.floor(modulo / (60 * 60));
          modulo = modulo % (60 * 60);
          let minutes: any = Math.floor(modulo / 60);
          const seconds = parseInt((modulo % 60).toString(), 10);
          if (hours < 10) {
            hours = `0${hours}`;
          }
          if (minutes < 10) {
            minutes = `0${minutes}`;
          }
          this.endtime = hours + '小时' + minutes + '分钟';
        }
        resolve(true)
      }, error2 => {
        reject(false)
      });
    });
  }
  setyenum() {
    if (!this.syye) {
      const ye = Number(this.data.max_surplus);
      const price = Number(this.data.order.order_amount)
      this.syye = ye > price ? price : ye;
    }
  }
  // repurchase() {
  //   this.topage.toPage(2, this.data.goods_list[0].goods_id);
  // }
  toPagefn(type, id) {
    this.topage.toPage(type, id);
  }
  async cancleOrder(type = 3) {
    if (type === 1) {
      const alert = await this.alertController.create({
        header: '提示',
        message: '是否确认退款',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
            }
          }, {
            text: '退款',
            handler: () => {
              this.cancleOrderfn();
            }
          }
        ]
      });
      await alert.present();
    } else if (type === 2) {
      this.thorder.setIsall();
      this.CancelOrderdata();
    } else if (type === 3 || type === 4) {
      if (type === 4) {
        this.thorder.setIssh();
      }
      if (this.data['goods_list'].length === 1) {
        this.CancelOrderdata();
      } else {
        this.seleteCancelorder();
      }
    }
  }
  async seleteCancelorder() {
    console.log(this.data['goods_list'])
    const obj = {
      header: '提示!',
      message: '请选择需要处理的商品！',
      inputs: [],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: '确定',
          handler: (e) => {
            if (e) {
              this.CancelOrderdata(this.data['goods_list'][e - 1]);
            }
          }
        }
      ]
    }
    const arr: object[] = [];
    let ischecked = false;
    this.data['goods_list'].map((item, index) => {
      const obj = {
        name: item['goods_name'],
        type: 'radio',
        label: item['goods_name'],
        value: index + 1,
        checked: false,
        disabled: item.tkend == 1 || item.isshing == 1
      };
      let name: string = '';
      if (item.tkend == 1) {
        name = '[已退款]';
      } else if (item.isshing == 1) {
        name = '[售后中]';
      }
      name += item['goods_name'];
      obj.name = name;
      obj.label = name;
      if (!ischecked && item.tkend != 1 && item.isshing != 1) {
        obj.checked = true;
        ischecked = true;
      }
      arr.push(obj);
    });
    obj['inputs'] = arr;
    const alert = await this.alertController.create(obj);
    await alert.present();
  }
  CancelOrderdata(goods?: object) {
    this.route.navigate(['/cancel-order']);
    this.thorder.setData(this.data['order'], goods || this.data['goods_list'][0]);

  }
  cancleOrderfn() {
    this.http.getDataloading(this.http.cancelOrder, {order_id: this.orderId}).subscribe(res => {
      console.log(res);
      this.presentAlert();
    }, error2 => {})
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
    const ye = Number(this.data.max_surplus);
    const price = Number(this.data.order.order_amount)
    if (this.syye > ye || this.syye > price) {
      this.native.presentAlert('请输入正确的金额');
      this.syye = 0;
      return false;
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '提示',
      message: '订单取消成功.',
      buttons: [{
        text: '确定',
        handler: () => {
          this.goBack();
        }}]
    });

    await alert.present();
  }
  async submit() {
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
        const price = Number(this.data.order.order_amount)
        if (surplus == price) {
          this.isyepayend = false;
          // this.route.navigate(['/ordersuccess'], {queryParams: {type: 2}});
          this.getDatahttp();
          return false;
        }
      }
    }
    this.payfn()
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
    });
    return pwd;
  }
  payfn() {
    this.http.postformdataloading(this.http.acteditpayment, {order_id: this.orderId, pay_code: this.payType, is_pay: 1}).subscribe(res => {
      console.log('余额支付成功')
      console.log(res)

    }, error2 => {
    });
  }
  confirmReceipt() {
    this.http.getDataloading(this.http.zdomain + this.http.affirmReceived, {order_id: this.data.order.order_id}).subscribe(res => {
      this.data.order.shipping_status = 2;
      this.presentAlertConfirm();
    }, err2 => {});
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '交易成功!',
      message: '去评价一下本次的购物体验吧~',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '评价',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
}
