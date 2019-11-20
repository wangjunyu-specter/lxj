/*
 * @Author: wjy-mac
 * @Date: 2019-11-14 20:54:57
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-14 21:43:46
 * @Description: 通知公告详情
 */
import { NewsListService } from './../../services/news-list.service';
import { TzData } from './../../interface/news-data';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {
  noticeId: string;
  data: TzData;
  constructor(private nav: NavController, private activeroute: ActivatedRoute,
    private newsList: NewsListService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    const params = this.activeroute.snapshot.queryParams;
    this.noticeId = params['id'];
    this.data = this.newsList.getTzdata(this.noticeId);
  }
  goBack() {
    this.nav.back();
  }
  assembleHTML(strHTML: any) {
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }
}
