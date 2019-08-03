import { Component, OnInit, ViewChild } from '@angular/core';
import {NavController, IonInfiniteScroll } from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {SearchendgoodsService} from "../../services/searchendgoods.service";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-searchendgoods',
  templateUrl: './searchendgoods.page.html',
  styleUrls: ['./searchendgoods.page.scss'],
})
export class SearchendgoodsPage implements OnInit {
  data: object;
  page: number;
  keyword: string;
  serachhttpData: object;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private activeroute: ActivatedRoute, private nav: NavController,
              private serchdata: SearchendgoodsService, private http: HttpService) { }

  ngOnInit() {
    this.data = this.serchdata.getObj();
    this.serachhttpData = this.serchdata.getSearchdata();
    console.log(this.data)
  }
  ionViewWillEnter() {
    if (!this.data) {
      this.goBack();
    }
    this.keyword = this.data['search_keywords'];
    this.page = 1;
  }
  goBack(): void {
    this.nav.back();
  }
  doRefresh(event) {
    this.page = 1;
    this.infiniteScroll.disabled = false;
    this.getHttp(event, 1);
  }
  loadData(event) {
    this.page++;
    this.getHttp(event, 2)
  }
  getHttp(event?, type?: number) {
    this.serachhttpData['page'] = this.page;
    this.http.postformdata(this.http.goodsSearch, this.serachhttpData).subscribe(res =>{
      if (event) {
        event.target.complete();
      }
      if (this.page === 1) {
        this.data['goods_list'] = res.data.goods_list;
      } else {
        this.data['goods_list'].push(...res.data.goods_list);
      }
      if (type && type === 2 && (!res.data.goods_list || res.data.goods_list.length === 0 || res.data.goods_list.length < this.serachhttpData['count'])) {
        this.infiniteScroll.disabled = true;
      }
    }, err2 => {
      if (event) {
        event.target.complete();
      }
    })
  }
}
