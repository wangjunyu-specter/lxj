import { HttpService } from './../../services/http.service';
/*
 * @Author: wjy-mac
 * @Date: 2019-10-22 09:40:41
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-22 16:23:14
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-after-sale',
  templateUrl: './after-sale.page.html',
  styleUrls: ['./after-sale.page.scss'],
})
export class AfterSalePage implements OnInit {
  backId: string;
  backShipping: object;
  shippingList: object;
  listBackgoods: object;
  constructor(private nav: NavController, private activeroute: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    const params = this.activeroute.snapshot.queryParams;
    this.backId = params['id'];
    this.getData();
  }
  goBack(): void {
    this.nav.back();
  }
  getData() {
    this.http.getDataloading(this.http.zdomain + this.http.backorderdetail, {id: this.backId}).subscribe(res => {
      console.log(res)
      const data = res['data'];
      this.backShipping = data['back_shipping'];
      this.shippingList = data['shipping_list'];
      this.listBackgoods = data['list_backgoods'];
    }, err2 => {});
  }
}
