/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 23:14:51
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 15:55:37
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import {NavController, PopoverController} from "@ionic/angular";
// import { PayboxComponent } from '../../components/paybox/paybox.component';
import { UserService } from '../../services/user.service';
import {Router} from "@angular/router";
import { NativeService } from 'src/app/services/native.service';
import { ArticelistService } from 'src/app/services/articelist.service';
import { BounslistService } from 'src/app/services/bounslist.service';
import { CollelistService } from 'src/app/services/collelist.service';
import { ContactlistService } from 'src/app/services/contactlist.service';
import { EmojiishowService } from 'src/app/services/emojiishow.service';
import { GetproductService } from 'src/app/services/getproduct.service';
import { GoodsattrService } from 'src/app/services/goodsattr.service';
import { GwcService } from 'src/app/services/gwc.service';
import { GzlistService } from 'src/app/services/gzlist.service';
import { LljlService } from 'src/app/services/lljl.service';
import { NewsListService } from 'src/app/services/news-list.service';
import { OrderlistService } from 'src/app/services/orderlist.service';
import { OrdersuccessService } from 'src/app/services/ordersuccess.service';
import { PaymentListService } from 'src/app/services/payment-list.service';
import { PayorderService } from 'src/app/services/payorder.service';
import { PqlistService } from 'src/app/services/pqlist.service';
import { ProductcontentlistService } from 'src/app/services/productcontentlist.service';
import { ProductsListService } from 'src/app/services/products-list.service';
import { ProvincesService } from 'src/app/services/provinces.service';
import { ScindexService } from 'src/app/services/scindex.service';
import { HttpService } from 'src/app/services/http.service';
import { SearchendgoodsService } from 'src/app/services/searchendgoods.service';
import { SearchrecodeService } from 'src/app/services/searchrecode.service';
import { SeleteMediaService } from 'src/app/services/selete-media.service';
import { ShopContentService } from 'src/app/services/shop-content.service';
import { ShopNavService } from 'src/app/services/shop-nav.service';
import { SjindextjgoodsService } from 'src/app/services/sjindextjgoods.service';
import { SupplierlistService } from 'src/app/services/supplierlist.service';
import { ThorderService } from 'src/app/services/thorder.service';
import { UsercenterService } from 'src/app/services/usercenter.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { XclistService } from 'src/app/services/xclist.service';
import { XcsclistService } from 'src/app/services/xcsclist.service';
import { YhtclistService } from 'src/app/services/yhtclist.service';
import { YjlistService } from 'src/app/services/yjlist.service';
import { ZtListService } from 'src/app/services/zt-list.service';

@Component({
  selector: 'app-center-more',
  templateUrl: './center-more.page.html',
  styleUrls: ['./center-more.page.scss'],
})
export class CenterMorePage implements OnInit {
  user: any;
  ismobile: boolean;
  constructor(private route: Router, private nav: NavController, private userfn: UserService, public native: NativeService,
              private articelist: ArticelistService, private bounslist: BounslistService,
              private collelist: CollelistService, private contactlist: ContactlistService,
              private emojiisshow: EmojiishowService, private getproduct: GetproductService,
              private goodsattr: GoodsattrService, private gwc: GwcService, private gzlist: GzlistService,
              private http: HttpService, private lljl: LljlService, private newslist: NewsListService,
              private orderlist: OrderlistService, private ordersuccess: OrdersuccessService,
              private paymentlist: PaymentListService, private payorder: PayorderService,
              private pqlist: PqlistService, private productcontentlist: ProductcontentlistService,
              private productslist: ProductsListService, private provinces: ProvincesService,
              private scindex: ScindexService, private searchendgoods: SearchendgoodsService,
              private searchrecode: SearchrecodeService, private seletemedia: SeleteMediaService,
              private shopcontent: ShopContentService, private shopnav: ShopNavService,
              private sjindextjgoods: SjindextjgoodsService, private supplierlist: SupplierlistService,
              private thorder: ThorderService, private usercenter: UsercenterService,
              private ws: WebsocketService, private xclist: XclistService, private xcsclist: XcsclistService,
              private yhtclist: YhtclistService, private yjlist: YjlistService, private ztlist: ZtListService) { }

  ngOnInit() {
    this.ismobile = this.native.ismobile();
  }
  ionViewWillEnter() {
    this.userfn.getUserp().then(res => {
      this.user = res;
    });
  }
  ionViewDidEnter() {

  }
  goBack(): void {
    this.nav.back();
  }
  /**
   * @Author: wjy-mac
   * @description: 设置登录密码
   * @Date: 2019-11-18 10:00:06
   * @param {type} 
   * @return: 
   */  
  toSetpw() {
    this.route.navigate(['/set-pd'], {queryParams: {type: 2}});
  }
  /**
   * @Author: wjy-mac
   * @description: 设置支付密码
   * @Date: 2019-11-18 10:00:13
   * @param {type} 
   * @return: 
   */  
  setPaypwd() {
    this.route.navigate(['/setpaypwd']);
  }
  loginout() {
    this.clearAlldata();
    this.nav.navigateRoot('/login');
  }
  gotopage() {
    this.route.navigate(['/contactlist'], {queryParams: {type: 3}});
  }
  tobill() {
    this.route.navigate(['/bill']);
  }
  toabout() {
    this.route.navigate(['/about-us']);
  }
  clearAlldata() {
    this.articelist.clear();
    this.bounslist.clear();
    this.collelist.clear();
    this.contactlist.clear();
    this.emojiisshow.clear();
    this.getproduct.clear();
    this.goodsattr.clear();
    this.gwc.clear();
    this.gzlist.clear();
    this.http.clearUser();
    this.lljl.clear();
    this.native.clearStorage();
    this.newslist.clear();
    this.orderlist.clear();
    this.ordersuccess.clearData();
    this.paymentlist.clear();
    this.payorder.clear();
    this.pqlist.clear();
    this.productcontentlist.clear();
    this.productslist.clear();
    this.provinces.clear();
    this.scindex.clear();
    this.searchendgoods.clear();
    this.searchrecode.clear();
    this.seletemedia.clear();
    this.shopcontent.clear();
    this.shopnav.clear();
    this.sjindextjgoods.clear();
    this.supplierlist.clear();
    this.thorder.clearData();
    this.userfn.clear();
    this.usercenter.clear();
    this.ws.clear();
    this.xclist.clear();
    this.xcsclist.clear();
    this.yhtclist.clear();
    this.yjlist.clear();
    this.ztlist.clear();
  }
}
