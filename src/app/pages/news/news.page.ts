/*
 * @Author: wjy-mac
 * @Date: 2019-10-10 09:55:35
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-10 15:16:27
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  type: number; // 1 消息 2 平台通知
  constructor(private nav: NavController, private route: Router) { }

  ngOnInit() {
    this.type = 1;
  }
  goBack() {
    this.nav.back();
  }
  goNews(id: string, name: string) {
    this.route.navigate(['/newslist'], {queryParams: {id, name}});
  }
}
