import { NativeService } from './../../services/native.service';
import { HttpService } from './../../services/http.service';
/*
 * @Author: wjy-mac
 * @Date: 2019-10-22 09:40:41
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-22 20:52:46
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
  kddata: object;
  constructor(private nav: NavController, private activeroute: ActivatedRoute, private http: HttpService, private native: NativeService) { }

  ngOnInit() {
    this.kddata = {
      invoice_no: '',
      shipping_id: ''
    };
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
      if (this.backShipping['shipping_id'] > 0) {
        this.kddata['invoice_no'] = this.backShipping['invoice_no'];
      }
      if (this.backShipping['invoice_no']) {
        this.kddata['shipping_id'] = this.backShipping['shipping_id'];
      }
    }, err2 => {});
  }
  subKd() {
    const obj = Object.assign({back_id: this.backId}, this.kddata);
    this.http.postformdataloading(this.http.zdomain + this.http.backorderdetailedit, obj).subscribe(res => {
      console.log(res);
      this.native.presentToast(res['msg']);
    }, err2 => {});
  }
}
