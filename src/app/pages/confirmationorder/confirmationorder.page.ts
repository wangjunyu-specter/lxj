import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { GetproductService } from '../../services/getproduct.service';
import {ModalController, NavController} from '@ionic/angular';
// import { ContactlistComponent } from '../../components/contactlist/contactlist.component';
import { ContactlistService } from '../../services/contactlist.service';
import {HttpService} from "../../services/http.service";
import {PayorderService} from '../../services/payorder.service';
import {UserService} from "../../services/user.service";
import {NativeService} from "../../services/native.service";
import { TopageService } from 'src/app/services/topage.service';
@Component({
  selector: 'app-confirmationorder',
  templateUrl: './confirmationorder.page.html',
  styleUrls: ['./confirmationorder.page.scss'],
})
export class ConfirmationorderPage implements OnInit {
  data: any;
  pid: string; // 商品id
  cid: string; // 购物车id
  activeData: any;
  num: number;
  price: string;
  resultJf: number;
  activePerson: any[];
  addressId: string;
  pricearr: any[]; // 价格明细
  changebonus: any; // 使用的优惠券
  total: any;
  bz: string; // 备注
  username: string;
  usertel: any;
  allowusebonus: number; // 是否可以是用优惠券
  redbag: any[];
  order: any;
  addcatobj: any;
  isgetContent: boolean; // 判断是否已获取数据  解决两次都获取数据
  bxxx: any; // 保险信息
  ptbx: any; // 平台保险
  constructor(private route: Router, private getProduct: GetproductService, private nav: NavController,
              public contactlist: ContactlistService, private http: HttpService,
              private payorder: PayorderService, private userfn: UserService,
              private activeroute: ActivatedRoute,
              private native: NativeService, private toPagefn: TopageService) { }

  ngOnInit() {
    this.activePerson = [];
    this.pricearr = [];
    this.total = {};
    this.changebonus = '';
    console.log(this.activeroute.snapshot.queryParams)
    const params = this.activeroute.snapshot.queryParams;
    this.pid = params['id'];
    if (!this.pid) {
      this.goBack();
      return false;
    }
    const data = this.getProduct.getActiveorder(); // 获取加入购物车参数
    console.log(data)

    this.addcatobj = {
      quick: 0,
      spec: data.attr,
      goods_id: data.id,
      number: data.number,
      parent: 0,
      isls: 1
    };
  }
  ionViewDidEnter() {
    if (!this.addcatobj.spec && !this.addcatobj.number && !this.addcatobj.goods_id) {
      this.native.presentToast('参数错误!');
      this.goBack()
      return false;
    }
    if (!this.data) {
      this.getData();
    }
    this.addCart();
    // this.getData();
    // this.contactlist.setData(this.num);

  }
  getData() {
    this.getProduct.getProduct(this.pid).then(res => {
      console.log(res)
      this.data = res;
      const activeData = this.getProduct.getActiveobj(); // 获取选中对象
      this.setProduct(activeData)
      this.getYhq()
    }).catch(err => {
      console.log(err);
    });
    this.contactlist.getActive().then(res => {
      this.activePerson = res;
      console.log(this.activePerson)
      this.addressId = res[0].address_id;
      console.log(this.addressId)
      this.getYhq();
    });
    this.userfn.getUserp().then(res => {
      console.log(res)
      this.username = res.user_name;
      this.usertel = res.mobile_phone;
    });
  }
  /**
   * @Author: wjy-mac
   * @description: 加入购物车  下单前都需要先加入购物车
   * @Date: 2020-01-10 16:37:14
   * @param {type} 
   * @return: 
   */  
  addCart() {
    this.http.postformdata(this.http.addgwc, {goods: JSON.stringify(this.addcatobj)}).subscribe(res => {
      this.cid = res['rec_id'];
      this.getYhq();
    }, error2 => {});
  }
  /**
   * @Author: wjy-mac
   * @description: 获取购物车信息
   * @Date: 2020-01-10 16:37:05
   * @param {type} 
   * @return: 
   */  
  getYhq() {
    if (!this.pid || !this.addressId || this.isgetContent || !this.cid) { // 因获取商品id和地址id都是异步
      return false;
    }
    this.isgetContent = true;
    const obj = {
      address_id: this.addressId,
      sel_cartgoods: [this.cid]
    }
    this.http.postformdata(this.http.qrorder, obj).subscribe(res => {
      // console.log(res)
      this.total = res['data']['total'];
      this.order = res['data']['order'];
      this.pricearr = res.data.pricearr;
      this.redbag = res['data']['goods_list'][0]['redbag'];
      this.allowusebonus = res['data']['allow_use_bonus'];
      this.bxxx = res['data']['bxxx'];
      this.ptbx = res['data']['ptbx'];
    }, error2 => {});
  }
  /**
   * @Author: wjy-mac
   * @description: 跳转购买保险
   * @Date: 2020-01-10 16:50:36
   * @param {type} 
   * @return: 
   */  
  buybx() {
    this.toPagefn.toPage(this.ptbx['type'], this.ptbx['link']);
  }
  /**
   * @Author: wjy-mac
   * @description: 查看保险详情
   * @Date: 2020-01-10 16:52:40
   * @param {type} 
   * @return: 
   */  
  scanbxcontent() {
    if (!this.bxxx['link']) {
      return false;
    }
    this.toPagefn.toPage(this.bxxx['type'], this.bxxx['link']);
  }
  changeYhq(id: string, index: number) {
    // if (this.isxxyhq[index]) {
    //   this.isxxyhq[index] = false;
    // }
    console.log(this.changebonus)
    const obj: object = {
      bonus: this.changebonus,
      sel_cartgoods: [this.cid],
      suppid: id,
    }
    this.setHttp(this.http.changebonus, obj);
  }
  setHttp(src, obj) {
    const obj1: object = {
      order: JSON.stringify(this.order)
    }
    this.http.getpostformdata(src, obj, obj1).subscribe(res => {
      console.log(res);
      // this.setPrice(res);
      this.total = res.total;
      this.pricearr = res.pricearr;

    }, error2 => {});
  }
  setProduct(activeData) {
    if (!activeData) {
      this.goBack();
      return false;
    }
    // goods_attr
    this.activeData = activeData.goods_attr.split('&nbsp;')
    this.num = activeData.qty;
    this.price = activeData.result;
    this.resultJf = activeData.result_jf;
  }
  getContact() {
    this.route.navigate(['/contactlist'], {queryParams: {type: 1, num: this.num}});
  }
  submit($event) {
    console.log($event);
    if (!this.username || !this.username) {
      this.native.presentAlert('请输入联系人姓名或手机号码!');
      return false;
    }
    let tripid = '';
    let arr = [];
    this.activePerson.map(res => {
      arr.push(res.address_id)
    })
    tripid = arr.join(',');
    const bounsarr = [];
    bounsarr[this.data.suppId] = this.changebonus;
    const bzarr = [];
    bzarr[this.data.suppId] = this.bz;
    const obj: object = {
      sel_cartgoods: [this.cid],
      // how_oos, 缺货处理
      // card_message, // 贺卡内容
      // inv_type, 发票信息
      // inv_payee,
      // inv_content,
      postscript: JSON.stringify(bzarr),
      integral: 0,
      bonus: JSON.stringify(bounsarr),
      // bonus_sn: this.isxxyhq,
      surplus: 0,
      payment: 1,
      username: this.username,
      usertel: this.usertel,
      tripid
    }
    this.http.postformdataloading(this.http.scorder, obj).subscribe(res => {
      console.log(res);
      const id = res['data']['order']['order_id'];
      // this.orderdata.setData(res.data as object);
      // this.route.navigate(['/ordersuccess'], {queryParams: {type: 1}});
      if (this.redbag && this.redbag.length > 0) {
        for (let i = 0; i < this.redbag.length; i++) {
          if (this.redbag[i].bonus_id == this.changebonus) {
            this.redbag.splice(i, 1);
            break;
          }
        }
      }
      this.userfn.upData('user_money', res['data']['user_money']);
      this.payorder.setOrder(res['data']);
      this.route.navigate(['/pay'], {queryParams: {id}});
    }, error2 => {
      console.error(error2)
    });
  }
  goBack(): void {
    this.nav.back();
  }
  openxy(link) {
    this.toPagefn.toPage(10, this.http.zdomain + link);
  }
}
