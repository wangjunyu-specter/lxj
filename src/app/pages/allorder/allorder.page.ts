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
    console.log('即将进入')
    // this.list1 = this.orderlist.getList(this.type);
    // console.log(this.infiniteScroll.disabled)
    this.segmentChanged();
    // this.infiniteScroll.disabled = false;
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
  doRefresh(event) {
    this.orderlist.reget(this.type).then(res => {
      event.target.complete();
    }).catch(err2 => {
      event.target.complete();
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
       this.orderlist.getList(this.type).then(res =>{
         this['list' + this.type] = res;
       }).catch(err2 => {

       });
    }
  }
}
