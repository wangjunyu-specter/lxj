import { Component, OnInit, ViewChild } from '@angular/core';
import {NavController, IonInfiniteScroll} from "@ionic/angular";
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {
  type: number;
  userId: string;
  page: number;
  limit: number;
  list: object[];
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private nav: NavController, private http: HttpService,
              private activeroute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    const params = this.activeroute.snapshot.queryParams;
    this.type = Number(params['type']) || 1;
    this.userId = params['userId'] || '';
    this.page = 0;
    this.limit = 20;
    this.list = [];
  }
  goBack(): void {
    this.nav.back();
  }
  ionViewWillEnter() {
    this.getList();
  }
  doRefresh(event) {
    this.page = 0;
    this.infiniteScroll.disabled = false;
    this.getList(event);
  }
  loadData(event) {
    this.page++;
    this.getList(event, 1);
  }
  getList(event?, type?) {
    let link = this.http.getGzlist;
    // if (this.type !== 1) {
    //   link = this.http.getFslist;
    // }
    const obj = {
      page: this.page,
      limit: this.limit,
      userId: this.userId,
      type: this.type
    }
    this.http.postformdata(link, obj).subscribe(res => {
      if (event) {
        event.target.complete();
      }
      if (this.page === 0) {
        this.list.length = 0;
      }
      this.list.push(...res.data);
      if (event && type && res.data.length < this.limit) {
        this.infiniteScroll.disabled = true;
      }
    }, error2 => {
      if (event) {
        event.target.complete();
      }

    })
  }
  open(id) {
    this.route.navigate(['/myrelease'], {queryParams: {userid: id}});
  }
}
