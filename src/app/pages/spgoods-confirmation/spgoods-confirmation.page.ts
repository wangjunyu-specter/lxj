import { TopageService } from './../../services/topage.service';
import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, ModalController, NavController, PopoverController} from '@ionic/angular';
import {ContactlistService} from '../../services/contactlist.service';
import {DomSanitizer} from '@angular/platform-browser';
import {SeleteAddressComponent} from '../../components/selete-address/selete-address.component';
import {PayboxComponent} from '../../components/paybox/paybox.component';
import { NativeService } from '../../services/native.service';
import { OrdersuccessService } from '../../services/ordersuccess.service';
import {PaymentListService} from '../../services/payment-list.service';
import {UserService} from "../../services/user.service";
@Component({
  selector: 'app-spgoods-confirmation',
  templateUrl: './spgoods-confirmation.page.html',
  styleUrls: ['./spgoods-confirmation.page.scss'],
})
// : todo 暂未做发票
export class SpgoodsConfirmationPage implements OnInit {
  activePerson: any[];
  payList: any[];
  payType: string[];
  goodsList: any[];
  allowusebonus: number; // 是否可以是用优惠券
  allowusesurplus: number; // 是否可以余额支付
  allprice: string; //应付款总价
  zjts: string; // 总结语
  config: any;
  total: any;
  idlist: any[];
  changebonus: any[]; // 使用的优惠券
  bonusList: string[]; // 对应商家id的优惠券列表
  order: any;
  yoursurplus: string; // 可使用余额字符串类型
  yoursurplusnum: number; // 可使用余额number类型
  pricearr: any[]; // 价格明细
  isxxyhq: any[]; // 当前商家是否可以使用线下优惠券
  xxyhq: any[]; // 线下优惠券
  syye: number; // 使用余额
  kysyye: boolean; // 是否使余额
  syyeset: any; // 定时器
  id: string; // 路由来的id
  bzarr: string[];
  orderId: string;
  constructor(private http: HttpService, private route: Router,
              private nav: NavController, public contactlist: ContactlistService,
              public sanitizer: DomSanitizer, private activeroute: ActivatedRoute,
              public modalController: ModalController, public alertController: AlertController,
              private native: NativeService, public popoverController: PopoverController,
              private orderdata: OrdersuccessService, private paylistfn: PaymentListService,
              private userfn: UserService, private topage: TopageService) {
  }

  ngOnInit() {
    this.reset();
    this.payList = this.paylistfn.getList();
    if (this.payList.length > 0) {
      this.payType = this.payList[0]['pay_id'];
    }
    this.bonusList = [];
    this.bzarr = [];
  }
  reset() {
    this.goodsList = [];
    this.changebonus = [];
    this.isxxyhq = [];
    this.xxyhq = [];
    this.pricearr = [];
    this.allowusesurplus = 0;
    // this.payList = [];
    this.total = 0;
    this.kysyye = false;
    const params = this.activeroute.snapshot.queryParams;
    this.id = params['catid'];

  }
  ionViewDidEnter() {
    this.contactlist.getActive().then(res => {
      this.activePerson = res;
      if (this.activePerson.length > 0) {
        console.log(this.activePerson)
        if (this.id) {
          this.idlist = this.id.split(',');
          this.getContent();
        } else {
          this.goBack();
        }
      }
    });
  }
  /**
   * @Author: wjy-mac
   * @description: 获取详情
   * @Date: 2019-12-31 18:08:20
   * @param {type} type？ 无值表示刚进来获取数据 有值表示切换地址后获取数据
   * @return: 
   */  
  getContent(type?) { // 773
    const idlist = this.idlist;
    const obj = {
      address_id: this.activePerson[0] ? this.activePerson[0]['address_id'] : -1,
      sel_cartgoods: idlist
    };
    this.http.postformdata(this.http.qrorder, obj).subscribe(res => {
      console.log(res)
      if (!res['data']['goods_list']) {
        // this.alertfn();
        this.goBack();
      }
      this.goodsList = res['data']['goods_list'];
      this.total = res['data']['total'];
      this.order = res['data']['order'];
      this.pricearr = res.data.pricearr;
      // if (res.data.is_surplus_open != 0) {
      //   this.kysyye = true;
      // }
      if (!type) {
        this.allowusebonus = res['data']['allow_use_bonus'];
        this.allowusesurplus = parseInt(res['data']['allow_use_surplus'], 10);
        // this.allprice = res['data']['shopping_money'];
        this.config = res['data']['config'];
        this.yoursurplus = res.data.your_surplus;
        this.yoursurplusnum = Number(this.yoursurplus);
        this.userfn.upData('your_surplus', this.yoursurplusnum);
      }
      if (this.payList.length == 0) {
        console.log('获得数据')
        // this.payList = res['data']['payment_list'];
        this.paylistfn.setList(res['data']['payment_list']);
        console.log(this.payList)
        this.payType = this.payList[0]['pay_id'];
      }
      for (let i = 0, j = this.goodsList.length; i < j; i++) {
        this.changebonus[i] = '';
      }
      this.syye = this.yoursurplusnum > this.total.amount ? this.total.amount : this.yoursurplusnum;
      // for(let i = 0; i < this.payList.length; i++) {
      //   if (this.payList[i].pay_code === 'balance') {
      //     this.payList.splice(i, 1);
      //     break;
      //   }
      // }
      // if (goodslist && goodslist[0]) {
      //   const data = goodslist[0]['goodlist'][0];
      //   const suppid = data['supplier_id'];
      //   const recid = data['rec_id'];
      //   this.getallprice(recid, suppid);
      // }
    }, error2 => {});

  }
  // getallprice (recid, suppid) {
  //   this.http.getData('flow.php?step=select_shipping', {recid: recid, suppid: suppid}).subscribe(res => {
  //     console.log(res);
  //     this.zjts = res['data']['content'];
  //   });
  // }
  changeYhq(id: string, index: number) {
    // if (this.isxxyhq[index]) {
    //   this.isxxyhq[index] = false;
    // }
    console.log(this.changebonus)
    // const arr = this.changebonus.filter(res => {
    //   if (res) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // })
    // console.log(arr);
    const obj: object = {
      bonus: this.changebonus[index],
      sel_cartgoods: this.idlist,
      suppid: id,
    }
    this.setHttp(this.http.changebonus, obj);
    this.bonusList[id] = this.changebonus[index];
  }

  subyhq(i: number, id: string) {
    if (this.changebonus[i]) {
      this.changebonus[i] = '';
    }
    const yhq = this.xxyhq[i];
    console.log(yhq);
    const obj: object = {
      bonus_sn: yhq,
      sel_cartgoods: this.idlist,
      suppid: id,
    }
    this.setHttp(this.http.setbonussn, obj);
  }
  async seleteAddress() {
    // this.route.navigate(['/contactlist'], {queryParams: {type: 2, num: 1}});
    const modal = await this.modalController.create({
      component: SeleteAddressComponent
    });
    await modal.present();
    await modal.onDidDismiss();
    if (this.activePerson.length > 0) {
      this.getContent(1);
    } else {
      this.reset();
    }
  }
  goBack(): void {
    this.nav.back();
  }
  assembleHTML(strHTML: any) {
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }
  async submit() {
    const surplus = this.kysyye ? this.syye : 0;
    if (surplus > 0) {
      // if (surplus > this.total.amount_formated) {
      //   this.native.presentAlert('请输入正确的余额!');
      //   return false;
      // }
      const pwd = await this.syyepay(); // 获取密码
      console.log(pwd)
      if (!pwd) {
        return false;
      } else {
        let pwdright = false; // 密码是否正确
        try {
          pwdright = await this.yzpaypwd(pwd) as boolean;
        } catch (err2) {
          pwdright = false;
        }
        if (!pwdright) { // 密码不争取
          return false;
        }
        let kypay = false; // 余额是否足够
        try {
          kypay = await this.checksurplus() as any;
        } catch (err2) {
          kypay = false;
        }
        if (!kypay) {
          this.native.presentAlert('余额不足!');
          return false;
        }
        console.log(this.syye )
        // if (this.syye == this.total) {
        //
        //   return false;
        // } else {
        //   // 支付余额小于订单金额时
        // }
      }
    } else {
      // this.native.presentAlert('暂未开通支付，请选择余额支付');
      // return false;
    }

    this.paysuccess(surplus);
    // : todo 调用支付还未做
    // alert('调用支付还未做')
    console.log('准备唤醒支付');
  }
  async checksurplus() {
    return new Promise((resolve, reject) => {
      this.http.postformdataloading(this.http.checksurplus, {surplus: this.total.amount_formated}).subscribe(res => {
        console.log('余额足够')
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
  async yzpaypwd(password) {
    return new Promise((resolve, reject) => {
      this.http.postformdataloading(this.http.yzpaypwd, {password}).subscribe(res => {
        console.log(res)
        resolve(true);
      }, error2 => {
        console.log(error2)
        reject(false);
      });
    });
  }
  paysuccess(surplus = 0) {
    const bonusarr = []; // 红包列表
    this.changebonus.map(res => { // 过滤已选红包id内空值
      if (res) {
        bonusarr.push(res);
      }
    })
    const bzarr = []; // 备注列表
    this.bzarr.map((res, index) => {
      if (res) {
        bzarr[this.goodsList[index]['supplier_id']] = res;
      }
    })
    const obj: object = {
      sel_cartgoods: this.idlist,
      // how_oos, 缺货处理
      // card_message, // 贺卡内容
      // inv_type, 发票信息
      // inv_payee,
      // inv_content,
      postscript: JSON.stringify(bzarr),
      integral: 0,
      bonus: JSON.stringify(this.bonusList),
      bonus_sn: this.xxyhq,
      surplus,
      payment: this.payType
    }
    this.http.postformdataloading(this.http.scorder, obj).subscribe(res => {
      console.log(res);
      this.orderdata.setData(res.data as object);
      bonusarr.map(res => {
        this.goodsList.map(goodsdata => {
          if (!goodsdata['redbag']) {
            return ;
          }
          const redbag = goodsdata['redbag'];
          for (let i = 0; i < redbag.length; i++) {
            if (redbag[i].bonus_id == res) {
              redbag.splice(i, 1);
              return ;
            }
          }
        })
      });
      this.orderId = res.data.order.order_id;
      this.getPaymsg(res.data.order.order_id, res.data.order.order_sn);
      // this.route.navigate(['/ordersuccess'], {queryParams: {type: 1}});
    }, error2 => {});
  }
  getPaymsg(order_id, order_sn) {
    let pay_code;
    for (let index = 0; index < this.payList.length; index++) {
      const element = this.payList[index];
      if (element.pay_id == this.payType) {
        console.log(element);
        pay_code = element['pay_code'];
        break;
      }
    }
    this.http.postformdataloading(this.http.acteditpayment, {order_id, pay_code, is_pay: 1}).subscribe(res => {
      console.log(pay_code)
      let gopay = true;
      const ispay = () => {
        setTimeout(() => {
          if (gopay) {
            this.http.postformdataloading(this.http.acteditpayment2, {order_id}).subscribe(res => {
              this.route.navigate(['/ordersuccess'], {queryParams: {type: 1}});
            }, err => {
              // alert(JSON.stringify(err));
              this.closeOrder(order_id, order_sn);
            });
          }
          document.removeEventListener("resume", ispay, false);
        }, 1500);
      };
      document.addEventListener("resume", ispay, false);
      if (pay_code == 'alipay'){
        this.native.alipayment(res.result).then(res => {
          this.getHttpayend(order_id, order_sn);
        }).catch(err => {
          this.closeOrder(order_id, order_sn);
        }).finally(() => {
          gopay = false;
        });
      } else {
        this.native.wechatpayment(res.result).then(res => {
          this.getHttpayend(order_id, order_sn);
        }).catch(err => {
          this.closeOrder(order_id, order_sn);
        }).finally(() => {
          gopay = false;
        })
      }
    }, error2 => {
    });
  }
  closeOrder(order_id, order_sn) {
    this.topage.toPage(12, order_sn, -1);
    // this.http.postformdata(this.http.actionacteditpaymentclose, {order_id}).subscribe(res => {}, err => {});
  }
  getHttpayend(order_id, order_sn) {
    this.route.navigate(['/ordersuccess'], {queryParams: {type: 1}});
    this.http.postformdataloading(this.http.acteditpayment2, {order_id}).subscribe(res => {
    }, err => {
      // this.topage.toPage(12, order_sn, -1);
    });
  }
  setPrice(res) {
    this.total = res.total;
    this.pricearr = res.pricearr;
    // tslint:disable-next-line: radix
    if (this.syye && parseInt(res.surplus) !== this.syye) {
      this.syye = res.surplus;
    }
    // else if (res.total.amount) {
    //   this.syye = res.total.amount;
    // }
  }
  sekysyye() {
    console.log(123);
  }
  setissyye() {
    this.setyenum();
  }
  setyechange() {
    if (this.syyeset) {
      clearTimeout(this.syyeset);
      this.syyeset = null;
    }
    if (this.syye < 0) {
      this.native.presentAlert('请输入正确的数量');
      this.syye = 0;
      return false;
    }
    if (this.syye && this.syye.toString().includes('.')) {
      const str = this.syye.toString().split('.');
      if (str[1].length > 2) {
        this.native.presentAlert('最小支持小数点后两位');
        this.syye = 0;
        console.log(this.syye);
        return false;
      }
    }
    this.syyeset = setTimeout(() => {
      this.syyeset = null;
      this.setissyye();
    }, 500);
  }
  setyenum() {
    const obj: object = {
      surplus: this.kysyye ? this.syye : 0
    };
    this.setHttp(this.http.changesurplus, obj);
  }
  setHttp(src, obj) {
    // this.order['bonus_id'] = this.changebonus[0];
    const obj1: object = {
      sel_cartgoods: this.idlist,
      order: JSON.stringify(this.order)
    }
    this.http.getpostformdata(src, obj, obj1).subscribe(res => {
      console.log(res);
      this.setPrice(res);
      if (res['order']) {
        this.order = res['order'];
      }
      // this.total = res.total;
      // this.pricearr = res.pricearr;

    }, error2 => {});
  }
  
  async alertfn() {
    const alert = await this.alertController.create({
      header: '提示!',
      message: '没有找到订单商品!!!',
      buttons: [
         {
          text: '确定',
          handler: () => {
            console.log('Confirm Okay');
            this.goBack();
          }
        }
      ]
    });

    await alert.present();
  }
}
