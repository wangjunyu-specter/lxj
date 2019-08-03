import { Component, OnInit } from '@angular/core';
import {AlertController, NavController, PopoverController} from "@ionic/angular";
import {PaymentListService} from "../../services/payment-list.service";
import {NativeService} from "../../services/native.service";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {PayboxComponent} from '../../components/paybox/paybox.component';
import {TopageService} from "../../services/topage.service";

@Component({
  selector: 'app-xccontent',
  templateUrl: './xccontent.page.html',
  styleUrls: ['./xccontent.page.scss'],
})
export class XccontentPage implements OnInit {
  orderId: string;
  payList: any[]; // 支付方式
  data: any; // 所有数据
  endtime: string; // 订单关闭剩余时间
  payType: any; // 支付方式
  syye: any; // 使用余额
  kysyye: boolean; // 是否使用余额
  isyepayend: boolean; // 是否已使用余额  但未支付成功
  setouttime: string; // 出发时间
  nowistimeout: boolean; // 当前是否已到出发日期
  constructor(private activeroute: ActivatedRoute, private nav: NavController,
              private http: HttpService, private native: NativeService, private paymentlist: PaymentListService,
              public alertController: AlertController, public popoverController: PopoverController, private topage: TopageService) { }


  ngOnInit() {
    const params = this.activeroute.snapshot.queryParams;
    this.orderId = params['id'];
    this.kysyye = false;
    console.log(this.orderId)
  }
  goBack(): void {
    this.nav.back();
  }
  ionViewWillEnter() {
    this.getDatahttp();
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
      this.http.getDataloading(this.http.orderDetail, {order_id: this.orderId}).subscribe(res => {
        console.log(res)
        this.data = res.data;
        console.log(this.data)
        if (res.data.order.order_status !== '已取消' && res.data.order.order_status !== '已完成') {
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
          this.endtime = hours + '小时' + minutes + '分钟'
        }
        this.setouttime = this.data.order.setouttime;
        console.log(transdate(this.setouttime))
        console.log((new Date()).valueOf())
        const now = (new Date()).valueOf();
        const outime = transdate(this.setouttime);
        if (now >= outime) {
          this.nowistimeout = true;
        } else {
          this.nowistimeout = false;
        }
        resolve(true)
      }, error2 => {
        reject(false)
      })
    });
  }
  setyenum() {
    if (!this.syye) {
      const ye = Number(this.data.max_surplus);
      const price = Number(this.data.order.order_amount)
      this.syye = ye > price ? price : ye;
    }

  }
  cancleOrder() {
    this.http.getDataloading(this.http.cancelOrderxc, {order_id: this.orderId}).subscribe(res => {
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
    })

    return pwd;
  }
  payfn() {
    this.http.postformdataloading(this.http.acteditpayment, {order_id: this.orderId, pay_code: this.payType, is_pay: 1}).subscribe(res => {
      console.log('余额支付成功')
      console.log(res)

    }, error2 => {
    });
  }
  repurchase() {
    this.topage.toPage(2, this.data.goods_list[0].goods_id);
  }
}

function transdate(endTime){
  const date = new Date();
  date.setFullYear(endTime.substring(0,4));
  date.setMonth(endTime.substring(5,7)-1);
  date.setDate(endTime.substring(8,10));
  date.setHours(endTime.substring(11,13));
  date.setMinutes(endTime.substring(14,16));
  date.setSeconds(endTime.substring(17,19));
  return Date.parse(date.toDateString());
}