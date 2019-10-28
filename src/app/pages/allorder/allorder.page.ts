/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-28 22:30:59
 * @Description: 所有订单
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {OrderlistService} from '../../services/orderlist.service';
// import {HttpService} from "../../services/http.service";
// import {TopageService} from "../../services/topage.service";
@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.page.html',
  styleUrls: ['./allorder.page.scss'],
})
export class AllorderPage implements OnInit {
  type: number;
  list1: any[];
  list2: any[];
  list3: any[];
  list4: any[];
  list5: any[];
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private nav: NavController, private route: Router, private orderlist: OrderlistService) { }

  ngOnInit() {
    this.type = 1;
  }
  ionViewWillEnter() {
    // if (this['list' + this.type]) { // 进入次页面就更新数据，暂时不用
    //   console.log('有数据')
    //   this.doRefresh();
    // }
    this.segmentChanged();
  }
  goBack(): void {
    this.nav.back();
  }
  // goContent(id) {
  //   // this.route.navigate(['/fbyjmore'], {queryParams: {type: this.type + 1, num: res.result.num}});
  // }
  search() {
    this.route.navigate(['/searchorder'], {queryParams: {type: 1}});
  }
  doRefresh(event?) {
    this.orderlist.reget(this.type).then(res => {
      if (event) {
        event.target.complete();
      }
    }).catch(err2 => {
      if (event) {
        event.target.complete();
      }
    });
  }
  loadData(event) {
    console.log(event);
    this.orderlist.getMore(this.type).then(res => {
      event.target.complete();
    }).catch(err2 => {
      event.target.complete();
    });
  }
  segmentChanged() {
    console.log(this.type)
    if (!this['list' + this.type]) {
       this.orderlist.getList(this.type).then(res => {
         this['list' + this.type] = res;
       }).catch(err2 => {

       });
    }
  }
}
