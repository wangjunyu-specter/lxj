/*
 * @Author: wjy-mac
 * @Date: 2019-11-05 11:32:10
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-05 14:58:11
 * @Description: file content
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.page.html',
  styleUrls: ['./comments-list.page.scss'],
})
export class CommentsListPage implements OnInit {
  commentList: object[];
  private goodsId: string;
  tags: object[];
  private pageObj: object;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private nav: NavController, private http: HttpService, private activeroute: ActivatedRoute) { }
  goBack(): void {
    this.nav.back();
  }
  ngOnInit() {
    this.commentList = [];
    this.tags = [];
    this.pageObj = {
      page: 0,
      limit: 10
    };
  }
  ionViewWillEnter() {
    console.log('进入2')
    const params = this.activeroute.snapshot.queryParams;
    this.goodsId = params['id'];
    this.getList();
  }
  getList(event?) {
    const obj = {
      goods_id: this.goodsId,
      page: this.pageObj['page'],
      limit: this.pageObj['limit']
    };
    this.http.getDataloading(this.http.getGoodcommentList, obj).subscribe(res => {
      if (this.pageObj['page'] === 0) {
        this.tags = res['data']['tags'];
      }
      console.log(this.tags);
      this.commentList.push(...res['data']['comment']);
      if (event) {
        event.target.complete();
      }
      if (res['data']['comment'].length < obj['limit']) {
        this.infiniteScroll.disabled = true;
      }
    }, err2 => {
      if (event) {
        event.target.complete();
      }
    });
  }
  loadData(event) {
    this.pageObj['page']++;
    this.getList(event);
  }
}
