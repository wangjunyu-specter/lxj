import { NativeService } from './../../services/native.service';
import { error } from 'selenium-webdriver';
/*
 * @Author: wjy-mac
 * @Date: 2019-10-22 11:51:17
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-22 16:00:56
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpService } from './../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-salelist',
  templateUrl: './after-salelist.page.html',
  styleUrls: ['./after-salelist.page.scss'],
})
export class AfterSalelistPage implements OnInit {
  page: object;
  list: object[];
  constructor(private nav: NavController, private http: HttpService, private native: NativeService, private route: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.page = {
      page: 0,
      size: 10
    };
    this.getList();
  }

  goBack(): void {
    this.nav.back();
  }
  getList() {
    this.http.getDataloading(this.http.zdomain + this.http.backList, this.page).subscribe(res => {
      console.log(res)
      this.list = res['data'];
    }, error2 => {});
  }
  cancle(item) {
    this.http.getDataloading(this.http.zdomain + this.http.delbackorder, {id: item.back_id}).subscribe(res => {
      item.status_back_1 = 8;
      item.status_back = '用户已取消';
      this.native.presentToast((res['msg']));
    }, err3 => {
    });
  }
  openContent(id) {
   this.route.navigate(['/after-sale'], {queryParams: {id}});
  }
}
