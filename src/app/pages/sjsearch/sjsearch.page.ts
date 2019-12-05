/*
 * @Author: wjy-mac
 * @Date: 2019-08-07 23:04:49
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-05 21:02:16
 * @Description: file content
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import {NavController, IonInfiniteScroll} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { NativeService } from 'src/app/services/native.service';
@Component({
  selector: 'app-sjsearch',
  templateUrl: './sjsearch.page.html',
  styleUrls: ['./sjsearch.page.scss'],
})
export class SjsearchPage implements OnInit {
  list: object[];
  isSearch: boolean; // 是否正在搜索
  suppId: string; // 商家id
  pageObj: object;
  keywords: string; // 搜索关键词
  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;
  constructor(private nav: NavController, private route: Router,
    private http: HttpService, private activeroute: ActivatedRoute, private native: NativeService) { }

  ngOnInit() {
    this.native.setStatusbardefalt();
    this.list = [];
    const params = this.activeroute.snapshot.queryParams;
    this.suppId = params['suppid'];
    this.pageObj = {
      page: 1,
      page_size: 20
    };
  }
  ionViewWillLeave() {
    this.native.setStatusbarnomal();
  }
  goBack(): void {
    this.nav.back();
  }
  /**
   * @Author: wjy-mac
   * @description: 搜索
   * @param {type} 
   * @return: 
   * @Date: 2019-08-07 23:29:16
   */
  searchFn(event) {
    console.log(event.detail.value);
    const data = event.detail.value;
    this.keywords = data;
    this.list.length = 0;
    if (!data) {
      return false;
    } else {
      this.infiniteScroll.disabled = false;
    }
    this.isSearch = true;
    this.getList();
  }
  /**
   * @Author: wjy-mac
   * @description: 搜索 请求
   * @param {type} text 搜索关键词 event? 滚动加载对象
   * @return: 
   * @Date: 2019-08-07 23:34:49
   */
  getList(event?) {
    const obj = Object.assign({suppId: this.suppId, keywords: this.keywords}, this.pageObj);
    this.http.getData(this.http.getsjsearchgoods, obj).subscribe(res => {
      console.log(res)
      if (this.isSearch) {
        this.isSearch = false;
      }
      if (res.data && res.data.length > 0) {
        this.list.push(...res['data']);
      }
      if (!res['data'] || res['data'].length < this.pageObj['page_size']) {
        this.infiniteScroll.disabled = true;
      }
      if (event) {
        event.target.complete();
      }
    }, err2 => {
      if (event) {
        event.target.complete();
      }
      if (this.isSearch) {
        this.isSearch = false;
      }
    });
  }
  /**
   * @Author: wjy-mac
   * @description: 滚动加载
   * @param {type} 
   * @return: 
   * @Date: 2019-08-07 23:39:55
   */
  loadData(event) {
    this.pageObj['page']++;
    this.getList(event);
  }
  goodsContent ($event) {
    console.log($event);
    this.open($event.goods_id || $event.id)
  }
  open(id) {
    if (isNaN(Number(id))) {
      return false;
    }
    this.route.navigate(['/productcontent'], {queryParams: {id, suppid: this.suppId}});
  }
}
