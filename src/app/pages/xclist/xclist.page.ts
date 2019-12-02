/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-01 13:30:20
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";
import {XclistService} from '../../services/xclist.service';
import {TopageService} from "../../services/topage.service";

@Component({
  selector: 'app-xclist',
  templateUrl: './xclist.page.html',
  styleUrls: ['./xclist.page.scss'],
})
export class XclistPage implements OnInit {
  list1: any[]; // 全部
  list2: any[]; // 已付款
  list3: any[]; // 待出行
  list4: any[]; // 已完成
  list5: any[]; // 已完成
  type: number;
  constructor(private nav: NavController, private route: Router,
              private http: HttpService, private xcxllist: XclistService, private topage: TopageService) { }

  ngOnInit() {
    this.type = 1;
  }
  goBack(): void {
    this.xcxllist.clear();
    // this.nav.back();
    this.nav.navigateBack('/tabs/tab4');
  }
  goContent(id) {
    // this.route.navigate(['/fbyjmore'], {queryParams: {type: this.type + 1, num: res.result.num}});
  }
  ionViewWillEnter() {
    console.log('即将进入')
    this.list1 = this.xcxllist.getList(this.type);
  }
  search() {
    this.route.navigate(['/searchorder'], {queryParams: {type: 2}});
  }
  doRefresh(event) {
    this.xcxllist.reget(this.type).then(res => {
      event.target.complete();
    }).catch(err2 =>{
      event.target.complete();
    });
  }
  loadData(event) {
    console.log(event);
    this.xcxllist.getMore(this.type).then(res => {
      event.target.complete();
    }).catch(err2 => {
      event.target.complete();
    });
  }
  segmentChanged(type) {
    console.log(this.type)
    if (!this['list' + this.type]) {
      this['list' + this.type] = this.xcxllist.getList(this.type);
    }
  }
  gotoPage(id, type) {
    this.topage.toPage(type, id);
  }
}
