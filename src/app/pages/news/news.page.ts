/*
 * @Author: wjy-mac
 * @Date: 2019-10-10 09:55:35
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-13 22:37:16
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NewsData } from 'src/app/interface/news-data';
import { HttpService } from './../../services/http.service';
import { NewsListService } from './../../services/news-list.service';
import { TopageService } from './../../services/topage.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  type: number; // 1 消息 2 平台通知
  list: {id: string, arr: NewsData[]}[];
  constructor(private nav: NavController, private route: Router, private newslist: NewsListService, private http: HttpService,
    private topage: TopageService) { }

  ngOnInit() {
    this.type = 1;
    this.list = this.newslist.getList();
    console.log(this.list);
  }
  goBack() {
    this.nav.back();
  }
  /**
   * @Author: wjy-mac
   * @description: 跳转消息详情
   * @Date: 2019-11-07 15:07:40
   * @param {type} item 店铺对象
   * @return: 
   */
  goNews(item: {id: string, arr: NewsData[]}) {
    const id = item['id']; //聊天对象id 如店铺/好友id // 客户不会出现在此
    const data: NewsData = item['arr'][item['arr'].length - 1];
    const name = data.shopName || data.uname;
    this.topage.toPage(17, id, name);
    // this.route.navigate(['/newslist'], {queryParams: {id, name}});
  }
  unread(id: string) {
    this.newslist.clearShopid(id);
  }
}
