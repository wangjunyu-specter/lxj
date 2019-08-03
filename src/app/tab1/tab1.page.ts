import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
// import { SearchPage } from '../search/search.page';
import { SearchComponent } from '../components/search/search.component';
import { HttpService } from '../services/http.service';
import { ShopContentService } from '../services/shop-content.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { TopageService } from '../services/topage.service';
// import { ShopNavService } from '../services/shop-nav.service';
// import { GetshopService } from '../services/getshop.service';
import { UserService } from '../services/user.service';
import { GaoDeLocation, PositionOptions } from '@ionic-native/gao-de-location/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  bannerList: any[]
  navList: any[]; // 导航
  navList2: any[]; // 第二导航   户外亲子游
  slideOpts: any; // 第二导航swiper参数
  slideOptslv: any; // 旅行灵感参数
  scroolold: number; // 滚动条上一次的值
  dataList: any[];
  shopdata: any;
  bzjx: any; // 本周精选
  bzjxActive: number; // 本周精选 当前选中
  rmzt1: any; // 热门主题第一部分 宽屏
  rmzt2: any; // 热门主题第2部分 宽屏
  indexTitle: any; // 首页标题 （本周精选标题由专题数据自带）
  hdbox1: any; // 顶部产品推荐左边
  hdbox2: any; // 顶部产品推荐右边
  bestGood: any; // 推荐商品
  moreGoods: any[]; // 更多商品
  catcalelist: any[]; // 文章列表
  toolbaropacity: string;
  bannerslideopts: any; // banner 配置
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  keywords: string;
  location: any;
  constructor(public modalController: ModalController,
              private http: HttpService, private shop: ShopContentService,
              private topage: TopageService, private user: UserService, private route: Router) {
  }
  ngOnInit() {
    // this.shopdata = {}
    this.toolbaropacity = '0';

    this.bzjxActive = 0;
    this.bestGood = [];

    this.slideOpts = {
      slidesPerView : 5,
      slidesPerGroup : 5,
      slidesPerColumn: 2,
      pagination: {
        // el: '.swiper-pagination2'
      },
    };
    this.slideOptslv = {
      // slidesOffsetBefore : 50,
      slidesPerView : 2.5,
      slidesPerGroup : 1,
      spaceBetween : 10,
      pagination: ''
      // slidesOffsetAfter : 100,
    };
    this.bannerslideopts = {
      // pagination: {
      //   el: '.swiper-pagination',
      //   // bulletClass: 'my-swiper-item'
      //   renderBullet: function (index, className) {
      //     console.log(className)
      //     return '<span class="' + className + '" style="margin: 0 5px;">&nbsp;</span>';
      //   }
      // },
    }

  }
  ionViewDidEnter() {
    this.moreGoods = this.shop.getMoregoods();
    console.log(this.moreGoods)
    this.getShopcontent();
    this.location = this.user.getLocation();

  }
  getShopcontent() {
    this.shop.getShop().then(res => {
      this.shopdata = res;
      console.log(res)
      this.navList = this.shop.getIndexnav();
      this.bannerList = this.shop.getIndexbanner();
      this.bzjx = this.shop.getBzjx();
      this.rmzt1 = this.shop.getRmzt();
      this.rmzt2 = this.shop.getRmzt2();
      this.indexTitle = this.shop.getIndextitle();
      this.hdbox1 = this.shop.getHdbox1();
      this.hdbox2 = this.shop.getHdbox2();
      this.bestGood = this.shop.getBest();
      // alert(JSON.stringify(this.bestGood))
      this.navList2 = this.shop.getIndex3box();
      this.catcalelist = this.shop.getCaticle();
      if (this.shopdata.search_keywords) {
        const key = this.shopdata.search_keywords.split('|')[0];
        this.keywords = key.split(',')[0];
      } else {
        this.keywords = this.shopdata['keywords'][0];
      }
    }).catch(err => {});
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.shop.resetgetShop().then(() => {
      event.target.complete();
      this.getShopcontent();
    }, () => {
      event.target.complete();
    }).catch(err => {
      event.target.complete();
    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchComponent,
      componentProps: { type: 2 }
    });
    return await modal.present();
  }
  logScrolling ($event) {
    const top: number = $event.detail.scrollTop;
    if (!this.scroolold) {
      this.scroolold = top;
    } else {
      if (this.scroolold > 44 && top > 44) {
        this.scroolold = top;
        return false;
      }
      this.scroolold = top;
    }
    let num = 0;
    if (top < 44) {
      num = top * 2 / 100;
    } else {
      num = 1;
    }
    this.setNavstatus(num);
  }
  setNavstatus(num: number) {
    // const el = document.querySelector('ion-toolbar');
    // el.style.setProperty('--opacity', num);
    this.toolbaropacity = parseInt((num * 100).toString(), 10).toString();

  }
  clickbzjx ($event) {
    console.log($event);
    this.toPage(2, $event)
  }
  openpage($event) {
    console.log($event);
    // this.nav.navigateForward(['/productcontent'], );

    this.route.navigate(['/productcontent'], {queryParams: {id: $event.goods_id || $event.id, suppid: $event.supplier_id}});
  }
  setopen($event) {
    console.log($event);
    this.toPage(9, $event.value);
  }
  /**
   * type 1 商品分类列表 2 商品详情 3 主题 4 选择选择地址 5 搜索 6 商城首页 7 店铺首页
   * @param type
   * @param id
   */
  toPage (type, id?: string, name?: string) {
    this.topage.toPage(type, id, name);
  }
  loadData(event) {
    this.shop.getMoregoodshttp().then(res => {
      event.target.complete();
    }).catch(err => {
      event.target.complete();
      event.target.disabled = true;
    });
  }
}
