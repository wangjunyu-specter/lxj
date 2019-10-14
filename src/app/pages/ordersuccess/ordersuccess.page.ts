/*
 * @Author: wjy-mac
 * @Date: 2019-07-29 22:24:48
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-07-29 22:24:48
 * @Description: file content
 */
import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import { OrdersuccessService } from '../../services/ordersuccess.service';
import {TopageService} from "../../services/topage.service";
@Component({
  selector: 'app-ordersuccess',
  templateUrl: './ordersuccess.page.html',
  styleUrls: ['./ordersuccess.page.scss'],
})
export class OrdersuccessPage implements OnInit {
  ishw: boolean;
  data: object;
  orderId: string;
  res: any;
  constructor(private nav: NavController, private route: Router,
              private activeroute: ActivatedRoute,
              private order: OrdersuccessService, private topage: TopageService) { }

  ngOnInit() {
    this.ishw = true;
    this.res = this.order.getData();
    const params = this.activeroute.snapshot.queryParams;
    if (params && params['type'] == 1) {
      this.ishw = false;
    }
    // this.activeroute.queryParams.subscribe(params => {
    //
    // });
  }
  ionViewDidEnter() {
    console.log(this.res)
    if (!this.res) {
      this.goIndex();
    }
    this.orderId = this.res['order'].order_id;
    if (this.res && this.res['split_order']) {
      this.data = this.res['split_order']['suborder_list'];
    }

  }
  ionViewDidLeave() {
  }
  goIndex() {
    this.order.clearData();
    this.nav.navigateBack('tabs/tab1');
  }
  getContent() {
    // this.route.navigate(['/spgoods-confirmation'], {queryParams: {catid: res['rec_id']}});
  }
  gotoPage(type, sn) {
    this.topage.toPage(type, sn);
  }
}

// suborder_list: [,…]
// 0: {order_sn: "2019070255876", pay_name: "余额支付", shipping_name: "申通快递", order_amount_formated: "872.00"}
// order_amount_formated: "872.00"
// order_sn: "2019070255876"
// pay_name: "余额支付"
// shipping_name: "申通快递"
