/*
 * @Author: wjy-mac
 * @Date: 2019-03-21 22:31:34
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-12 16:56:54
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierlistService } from 'src/app/services/supplierlist.service';
import { NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { CollelistService } from 'src/app/services/collelist.service';

@Component({
  selector: 'app-sjdpyx',
  templateUrl: './sjdpyx.page.html',
  styleUrls: ['./sjdpyx.page.scss'],
})
export class SjdpyxPage implements OnInit {
  supplier: any;
  constructor(private activeroute: ActivatedRoute, private suppliserlist: SupplierlistService, private nav: NavController,
    private http: HttpService, private collefn: CollelistService) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.activeroute.queryParams.subscribe(params => {
      let id = params['suppid']
      this.suppliserlist.getData(id).then(res => {
        this.supplier = res;
        console.log(this.supplier)
        // this.tjlist.push(...this.supplier['best_goods'])

      }).catch(err => {})

    });
  }
  sc() {
    this.suppliserlist.setData(this.supplier['suppid'], 'is_guanzhu', true);
    const obj = ['收藏人数', ++this.supplier['fensiobj'][1]];
    this.suppliserlist.setData(this.supplier['suppid'], 'fensiobj', obj);
    this.http.getData(this.http.scshop, {suppId: this.supplier['suppid']}).subscribe(res => {
      this.collefn.reset();
    }, error2 => {
      this.collefn.reset();
    });
  }
  qxsc() {
    this.suppliserlist.setData(this.supplier['suppid'], 'is_guanzhu', false);
    const obj = ['收藏人数', --this.supplier['fensiobj'][1]];
    this.suppliserlist.setData(this.supplier['suppid'], 'fensiobj', obj);
    this.http.getData(this.http.removeguanzhu, {suppId: this.supplier['suppid']}).subscribe(res => {
      this.collefn.reset();
    }, error2 => {
      this.collefn.reset();
    });
  }
  goBack(): void {
    this.nav.back();
  }
}
