import { Component } from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";
import { ScindexService } from '../services/scindex.service';
import {TopageService} from "../services/topage.service";
import {HttpService} from "../services/http.service";
import {Router} from '@angular/router';
import {ShopContentService} from "../services/shop-content.service";
// import {ShopContentService} from "../../services/shop-content.service";
import { SearchComponent } from '../components/search/search.component';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  scroolold: number; // 滚动条上一次的值
  bannerList: any[]
  navList: any[]; // 导航
  toolbaropacity: string;

  slideOpts: any; // 第二导航swiper参数
  slideOptslv: any; // 旅行灵感参数
  titleList: object; // 标题列表
  ggtj1: any[]; // 广告1
  ggtj2: any[]; // 广告2
  ggtj3: any[]; // 广告2
  ggtj4: any[]; // 广告2
  ggtj6: any[]; // 广告2
  ggtj7: any[]; // 广告2
  ggtj8: any[]; // 广告2
  ggtj5: any[]; // 广告5
  pptj: any[]; // 品牌推荐
  tjgoods: any; // 推荐商品
  moreGoods: any[]; // 更多商品
  topgoods: any[]; // 热卖10
  // shopdata: any;
  keywords: string; // 首页搜索提示文字
  constructor (private nav: NavController, private getIndex: ScindexService,
               private http: HttpService, private topage: TopageService,
               private route: Router, private shop: ShopContentService,
               public modalController: ModalController) {

  }
  ngOnInit() {
    this.toolbaropacity = '0';
    this.slideOpts = {
      slidesPerView : 5,
      slidesPerGroup : 5,
      slidesPerColumn: 1,
      pagination: {
        el: '.swiper-pagination2'
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
  }
  ionViewDidEnter() {
    this.moreGoods = this.getIndex.getMoregoods();
    this.getIndex.getScindex().then(res => {
      console.log(res)
      this.bannerList = res['index_banner'];
      this.navList = res['menu_list'];
      this.ggtj1 = res['index_gg1'];
      this.ggtj2 = res['index_gg2'];
      this.ggtj3 = res['index_gg3'];
      this.ggtj4 = res['index_gg4'];
      this.ggtj5 = res['index_gg5'];
      this.ggtj6 = res['index_gg6'];
      this.ggtj7 = res['index_gg7'];
      this.ggtj8 = res['index_gg8'];
      this.titleList = res['index_title'];
      this.pptj = res['index_gg9'];
      this.tjgoods = res['tj_goods'];
      this.topgoods = res['top_goods'];
      // console.log(this.titleList)
    }).catch(err =>{})
    this.shop.getShop().then(res => {
      if (res.search_keywords) {
        const key = res.search_keywords.split('|');
        console.log(key)
        this.keywords = key[1];
      }
      if (!this.keywords) {
        this.keywords = res.sckeywords[0];
      }
    }).catch(err2 => {})
  }
  logScrolling ($event) {
    const top: number = $event.detail.scrollTop;
    // if (!this.scroolold) {
    //   this.scroolold = top;
    // } else {
    //   if (this.scroolold > 44 && top > 44) {
    //     this.scroolold = top;
    //     return false;
    //   }
    //   this.scroolold = top;
    // }
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
    this.toolbaropacity = (parseInt((num * 100).toString(), 10)).toString() as string;
  }
  openpage($event) {
    console.log($event);
    // this.nav.navigateForward(['/productcontent'], );

    this.route.navigate(['/productcontent'], {queryParams: {id: $event.goods_id || $event.id, suppid: $event.supplier_id}});
  }
  toPage(type, id?: string, name?: string) {
    this.topage.toPage(type, id, name);
  }
  async searchpage() {
    const modal = await this.modalController.create({
      component: SearchComponent,
      componentProps: { type: 1 }
    });
    return await modal.present();
  }
  loadData(event) {
    this.getIndex.getMoregoodshttp().then(res => {
      console.log(this.moreGoods)
      event.target.complete();
    }).catch(err => {
      event.target.complete();
      event.target.disabled = true;
    });
  }
}
