/*
 * @Author: wjy-mac
 * @Date: 2019-07-15 15:12:56
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-06 13:07:38
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {NavController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {GzlistService} from "../../services/gzlist.service";

@Component({
  selector: 'app-sharesearch',
  templateUrl: './sharesearch.page.html',
  styleUrls: ['./sharesearch.page.scss'],
})
export class SharesearchPage implements OnInit {
  searchKey: string;
  pageArray: string[];
  pageType: number;
  page: number;
  limit: number;
  searchtext: string;
  list: any[];
  gzuserlist: string[]; // 关注的用户列表
  constructor(private http: HttpService, private activeroute: ActivatedRoute,
              private nav: NavController, private gzlistfn: GzlistService, private route: Router) { }

  ngOnInit() {
    this.pageArray = ['票圈', '游记', '攻略', '约游']; // 搜索页面暂不支持关注
    this.pageType = 0;
    this.page = 1;
    this.limit = 20;
    const params = this.activeroute.snapshot.queryParams;
    this.searchKey = params['searchKey'];
    this.gzuserlist = this.gzlistfn.getGzlist();
  }
  close() {
    this.nav.back();
    console.log('关闭了');
  }
  setType(type: number) {
    this.pageType = type;
    this.czobj();
    this.getHttp();
  }
  searchkey() {
    this.czobj();
    this.getHttp();
  }
  czobj() {
    this.page = 1;
    this.list = [];
  }
  loadData(event) {
    this.page++;
    this.getHttp(event);
  }
  getHttp(event?) {
    if (!this.searchtext) {
      return false;
    }
    const obj = {
      page: this.page,
      num: this.limit,
      type: this.pageType + 1,
      search: this.searchtext
    }
    this.http.postformdata(this.http.getpqlistsearch, obj).subscribe(res => {
      console.log(res);
      this.list = res['data'];
      if (event) {
        event.target.complete();
      }
    }, error2 => {
      if (event) {
        event.target.complete();
      }
    });
  }
  goperson(id) {
    console.log(id)
    this.route.navigate(['/myrelease'], {queryParams: {userid: id}});
  }
  setIsgz(id) {
    if (!this.gzuserlist.includes(id)) {
      return true;
    } else {
      return false;
    }
  }
}
