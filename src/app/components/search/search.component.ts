import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Router} from "@angular/router";
import {SearchrecodeService} from "../../services/searchrecode.service";
import {ShopContentService} from "../../services/shop-content.service";
import {HttpService} from "../../services/http.service";
import {SearchendgoodsService} from "../../services/searchendgoods.service";
import {NativeService} from "../../services/native.service";
import {StatusBar} from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() type: number; // ishw 1商品 2户外
  @Input() category: string; // ishw 1商品 2户外
  list: any[];
  keywords: string[]; // 后台设定
  keywords2: string[]; // 数据库动态获取
  searchtext: string;
  keyList: string[];
  constructor(private model: ModalController, private route: Router, private serchfn: SearchrecodeService,
              private shop: ShopContentService, private http: HttpService, private serchdata: SearchendgoodsService,
              private native: NativeService, private statusBar: StatusBar) { }

  ngOnInit() {
    // hidden_outstock 隐藏已脱销商品
    this.keyList = [];
  }
  ionViewDidLeave() {
    // this.statusBar
      this.statusBar.styleLightContent();
  }
  ionViewDidEnter() {
    this.statusBar.styleDefault();
    this.list = this.serchfn.getList(this.type);
    this.shop.getShop().then(res => {
      if (res.search_keywords) {
        const key = res.search_keywords.split('|');
        if (this.type === 2) {
          this.keywords = key[0].split(',');
        } else if (this.type === 1) {
          if (key[1]) {
            this.keywords = key[1].split(',');
          }
        }
      }
      if (this.type === 2) {
        this.keywords2 = res['keywords'];
      } else {
        this.keywords2 = res['sckeywords'];
      }
    }).catch(err2 => {})
    if (!this.keywords) {
      this.keywords = [];
    }
    console.log(this.list);
    // this.getHttp()
  }
  close() {
    this.model.dismiss();
    console.log('关闭了')
  }
  topage(text) {
    if (!text) {
      return false;
    }
    // this.route.navigate(['/searchorder'], {queryParams: {type: 1, searchText: text}});
    this.getHttp(text);
    console.log(text)
    this.serchfn.setList(this.type, text);
  }
  searchkey() {
    // encodeURI
    this.keyList.length = 0;
    const keyword = this.searchtext;
    if (!keyword) {
      return false;
    }
    this.http.getData(this.http.tipword, {word: encodeURI(keyword), ishw: this.type}).subscribe(res =>{
      res.data.map(data => {
        this.keyList.push(data.keyword)
      })
      if (!this.keyList.includes(keyword)) {
        this.keyList.unshift(keyword);
      }
    }, err2 => {
      console.error(err2)
    })
  }
  getHttp(text: string) {
    const obj = {
      'keywords': text,
      'brand': '',
      'category': this.category || '',
      'min_price': '',
      'max_price': '',
      'goods_type': '',
      'sc_ds': '',
      'outstock': '',
      'page': 1,
      'ishw': this.type,
      'count': 20
      // 'action': 'form'
  }
    this.http.postformdata(this.http.goodsSearch, obj).subscribe(res => {
      console.log(res);
      if (res.data.goods_list.length > 0) {
        this.serchdata.setObj(res.data);
        this.serchdata.setSearchdata(obj);
        this.close();
        this.route.navigate(['/searchendgoods'], {queryParams: {type: this.type}});
      } else {
        this.native.presentToast('抱歉!没有搜到相关产品');
      }
    }, err2 => {
      console.error(err2)
    })
  }
}
