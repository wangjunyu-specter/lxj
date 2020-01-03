/*
 * @Author: wjy-mac
 * @Date: 2019-07-06 15:13:08
 * @LastEditors  : wjy-mac
 * @LastEditTime : 2020-01-03 13:19:07
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
// import {Router} from "@angular/router";
import { HttpService } from '../../services/http.service';
import { XcsclistService } from '../../services/xcsclist.service';
import {TopageService} from "../../services/topage.service";


@Component({
  selector: 'app-xcsclist',
  templateUrl: './xcsclist.page.html',
  styleUrls: ['./xcsclist.page.scss'],
})
export class XcsclistPage implements OnInit {
  goodslist: any[];

  constructor(private nav: NavController, private xcxlfn: XcsclistService,
              private http: HttpService, private topage: TopageService) { }

  ngOnInit() {
    this.goodslist = this.xcxlfn.getgoodslist();
  }
  goBack(): void {
    this.nav.back();
  }
  loadData(event) {
    this.xcxlfn.addPage();
    this.xcxlfn.getListhttp(1).then(res => {
      event.target.complete();
    }).catch(err => {
      event.target.complete();
      // event.target.disabled = true;
    });
  }
  doRefresh(event) {
    this.xcxlfn.doRefresh();
    this.xcxlfn.getListhttp(1).then(res => {
      event.target.complete();
    }).catch(err => {
      event.target.complete();
      // event.target.disabled = true;
    });
  }
  openpage(data) {
    console.log(data)
    this.topage.toPage(2, data.goods_id);
  }
  deletem(id: string) {
    this.xcxlfn.deleteitem(id);
  }
}
