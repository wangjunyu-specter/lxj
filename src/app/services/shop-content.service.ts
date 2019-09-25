/*
 * @Author: wjy-mac
 * @Date: 2019-07-30 22:58:50
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-09-25 10:34:05
 * @Description: file content
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {ShopNavService} from "./shop-nav.service";
// 平台店铺数据
@Injectable({
  providedIn: 'root'
})
export class ShopContentService {
  shopObj: any;
  indexNav: any[];
  indexBanner: any[];
  hasData: boolean; // 是否取过数据
  bzjx: any; // 本周精选
  rmzt1: any; // 热门主题第一部分 宽屏
  rmzt2: any; // 热门主题第2部分
  hdbox1: any; // 顶部产品推荐左边
  hdbox2: any; // 顶部产品推荐右边
  indexTitle: any; // 首页标题 （本周精选标题由专题数据自带）
  bestGoods: any; // 产品推荐
  // newGoods: any; // 新品推荐
  moreGoods: any[]; // 首页更多商品
  index_nav2: any[]; // 首页第三部分4个导航
  sortlistobj: any; // 分类页排序方式
  caticallist: any[]; // 文章列表
  private indexgoodsnum: number;
  constructor(private http: HttpService, private shopnav: ShopNavService) {
    this.indexNav = [];
    this.indexBanner = [];
    this.shopObj = {};
    this.hasData = false;
    this.moreGoods = [];
    this.indexgoodsnum = 0;
    this.caticallist = [];
  }
  setIndexbanner (list: any[]) {
    this.indexBanner.length = 0;
    for (let i = 0, j = list.length; i < j; i++) {
      this.indexBanner.push(list[i]);
    }
  }
  getIndexbanner () {
    return this.indexBanner;
  }
  setShopObj (data) {
    // this.shopObj = data;
    for (const key in this.shopObj) {
      delete this.shopObj[key];
    }
    for (const key in data) {
      this.shopObj[key] = data[key];
    }
    console.log(this.shopObj)
  }
  setIndexnav (list: any[]) {
    this.indexNav.length = 0;
    for (let i = 0, j = list.length; i < j; i++) {
      this.indexNav.push(list[i]);
    }
  }
  async getShop() {
    if (!this.hasData) {
      await this.getShophttp();
    }
    return this.shopObj;
  }
  async resetgetShop() {
    try {
      await this.getShophttp();
      return true;
    } catch (e) {
      throw e;
    }
  }
  getIndexnav () {
    return this.indexNav;
  }
  async getNavname (id: string) {
    console.log(this.indexNav)
    if (this.indexNav.length > 0) {
      return this.getNowname(id)
    }
    await this.getShophttp();
    return this.getNowname(id)
  }
  getNowname (id: string) {
    let obj: any = {
      id: id
    }
    for (let i = 0; i < this.indexNav.length; i++) {
      if (this.indexNav[i].menu_url === id) {
        obj['navName'] = this.indexNav[i].menu_name;
        break;
      }
    }
    return obj;
  }
  getBzjx () {
    return this.bzjx;
  }
  getRmzt () {
    return this.rmzt1;
  }
  getRmzt2 () {
    return this.rmzt2;
  }
  getIndextitle () {
    return this.indexTitle;
  }
  getHdbox1 () {
    return this.hdbox1;
  }
  getHdbox2 () {
    return this.hdbox2;
  }
  getBest () {
    return this.bestGoods;
  }
  getIndex3box () {
    return this.index_nav2;
  }
  getCaticle() {
    return this.caticallist;
  }
  getSort (type: boolean) {
    if (type) {
      return this.sortlistobj['hw'];
    } else {
      return this.sortlistobj['sc'];
    }
  }
  // getNews () {
  //   return this.newGoods;
  // }
  async getShophttp() {
    return new Promise((resolve, reject) => {
      this.http.getData(this.http.getIndex).subscribe(res => {
        console.log(res);
        this.hasData = true;
        // alert(JSON.stringify(res))
        const data = res['data'];
        // alert(JSON.stringify(data))
        // this.navList = data['menu_list'];
        this.setIndexnav(data['menu_list']);
        let obj = {};
        for (let i = 0, j = data['shop_config'].length; i < j; i++) {
          const resData = data['shop_config'][i];
          obj[resData.CODE] = resData.VALUE;
        }
        obj['keywords'] = data['keywords'];
        obj['sckeywords'] = data['sckeywords'];
        this.setShopObj(obj);
        this.shopnav.setNav(data['categories']);
        this.setIndexbanner(data['index_banner']);
        this.bzjx = data['bzjx'];
        this.rmzt1 = data['index_box71'];
        // this.rmzt2 = data['index_box72'];
        this.indexTitle = data['index_title'];
        this.hdbox1 = data['index_box41'];
        this.hdbox2 = data['index_box42'];
        this.bestGoods = data['tj_goods'];
        this.caticallist = data['new_articles'];
        this.index_nav2 = data['index_nav2'];
        this.sortlistobj = data['flsort'];
        // this.newGoods = data['new_goods'];
        resolve(true)
      }, err => {
        // alert(JSON.stringify(err))
        console.log(err);
        reject(false)
      });
    });
  }
  getMoregoods () {
    return this.moreGoods;
  }
  async getMoregoodshttp() {
    // let obj: any = {
    //   category: 5,
    //   display: 'grid',
    //   brand:'',
    //   price_min:'',
    //   price_max:'',
    //   filter_attr: '',
    //   page: 1,
    //   sort: '',
    //   order: '',
    //   other_has: 1,
    // }
    const obj: any = {
      last: this.indexgoodsnum || 0,
      amount: 10,
      ishw: 2
    }
    this.indexgoodsnum += 10;
    return new Promise((resolve, reject) => {
      this.http.postformdata(this.http.getindexmore, obj).subscribe(res => {
        console.log(res);
        // this.newGoods = data['new_goods'];
        this.moreGoods.push(...res['data']);
        if (res['data'] && res['data'].length == 10) {
          resolve(true)
        } else {
          reject(false)
        }
      }, err => {
        console.log(err);
        reject(false)
      });
    });
  }
}
