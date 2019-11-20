import { Component, OnInit, ViewChild  } from '@angular/core';
import {NavController, IonInfiniteScroll } from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-searchorder',
  templateUrl: './searchorder.page.html',
  styleUrls: ['./searchorder.page.scss'],
})
export class SearchorderPage implements OnInit {
  list: any[];
  amount: number;
  last: number;
  searchText: string;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  type: number; // 搜索类型  1是商品  2 是户外产品
  constructor(private nav: NavController, private route: Router,
              private activeroute: ActivatedRoute,
              private http: HttpService) { }

  ngOnInit() {
    this.list = [];
    this.amount = 20;
    this.last = 0;
    const params = this.activeroute.snapshot.queryParams;
    this.type = params['type'] || 1;
    if (this.type > 2 || this.type < 1) {
      this.type = 1;
    }
  }
  // ionViewWillEnter() {
  //   this.activeroute.queryParams.subscribe(params => {
  //     this.type = params['type'] || 1;
  //     if (this.type > 2 || this.type < 1) {
  //       this.type = 1;
  //     }
  //   })
  // }
  goBack(): void {
    this.nav.back();
  }
  searchitem(val) {
    console.log(val)
    this.searchText = val;
    this.last = 0;
    this.infiniteScroll.disabled = false;
    this.list.length = 0;
    if (!val) {
      return false;
    }
    this.getList();
  }
  getList(event?) {
    const obj: any = {
      last: this.last,
      amount: this.amount,
      composite_status: -1,
      ishw: this.type,
      searchtext: this.searchText
    }
    this.last += this.amount
    this.http.postformdata(this.http.orderlist, obj).subscribe(res => {
      console.log(res);
      this.list.push(...res.data);
      if (event) {
        event.target.complete();
        if (res.data.length < this.amount) {
          this.infiniteScroll.disabled = true;
        }
      }
    }, err => {
      console.log(err);
      if (event) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
      }
    });
  }
  loadData(event) {
    this.getList(event)
    // event.target.complete();
  }
}
