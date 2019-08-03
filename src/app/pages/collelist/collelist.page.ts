import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import { CollelistService } from '../../services/collelist.service';
import { HttpService } from '../../services/http.service';
import { TopageService } from '../../services/topage.service';
// import {Router} from "@angular/router";
@Component({
  selector: 'app-collelist',
  templateUrl: './collelist.page.html',
  styleUrls: ['./collelist.page.scss'],
})
export class CollelistPage implements OnInit {
  goodslist: any[];
  shoplist: any[];
  type: string;
  constructor(private nav: NavController, private collefn: CollelistService,
              private http: HttpService, private topage: TopageService) { }

  ngOnInit() {
    this.type = 'goods';

  }
  ionViewDidEnter() {
    this.goodslist = this.collefn.getgoodslist();
    this.shoplist = this.collefn.getshoplist();
  }
  goBack(): void {
    this.nav.back();
  }
  segmentChanged(val) {
    console.log(val.detail.value);
    this.type = val.detail.value;
  }
  openpage($event) {
    // this.route.navigate(['/productcontent'], {queryParams: {id: $event.goods_id}});
    let type = 1;
    let id: string;
    if (this.type === 'goods') {
      type = 2;
      id = $event.goods_id;
    } else {
      type = 7;
      id = $event.supplierid;
    }
    this.topage.toPage(type, id);
  }
  loadData(event) {
    let type = 1;
    if (this.type === 'goods') {
      type = 1;
    } else {
      type = 2;
    }
    this.collefn.addPage(type);
    if (type === 1) {
      this.collefn.getListhttp(1).then(res => {
        event.target.complete();
      }).catch(err => {
        event.target.complete();
        // event.target.disabled = true;
      });
    } else {
      this.collefn.getList2http(1).then(res => {
        event.target.complete();
      }).catch(err => {
        event.target.complete();
        // event.target.disabled = true;
      });
    }
  }
  unread(id) {
    let type = 1;
    if (this.type === 'goods') {
      type = 1;
    } else {
      type = 2;
    }
    this.collefn.deleteitem(id, type);
  }
}
