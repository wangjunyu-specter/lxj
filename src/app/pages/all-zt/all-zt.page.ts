/*
 * @Author: wjy-mac
 * @Date: 2019-09-26 16:52:52
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-08 21:28:25
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TopageService } from '../../services/topage.service';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-all-zt',
  templateUrl: './all-zt.page.html',
  styleUrls: ['./all-zt.page.scss'],
})
export class AllZtPage implements OnInit {
  type: number; // 专题类型 1户外2商城
  list: object[];
  banner: object;
  constructor(private nav: NavController, private activeroute: ActivatedRoute,
    private topage:TopageService, private http: HttpService) { }

  ngOnInit() {
    const params = this.activeroute.snapshot.queryParams;
    this.type = params['type'] || 0;
    this.getList(this.type);
    this.getBanner(this.type);
  }
  getList(type) {
    this.http.getDataloading(this.http.getZtlist, {type}).subscribe(res => {
      console.log(res);
      this.list = res['data'];
    }, err2 => {});
  }
  getBanner(type) {
    this.http.getDataloading(this.http.getZtlistbanner, {type}).subscribe(res => {
      console.log(res);
      this.banner = res['data'] && res['data'].length > 0 ? res['data'][0] : null ;
    }, err2 => {});
  }
  goBack(): void {
    this.nav.back();
  }
  goPagefn(id, type = 3) {
    this.topage.toPage(type, id);
  }
}
