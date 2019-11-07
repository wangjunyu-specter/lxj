/*
 * @Author: wjy-mac
 * @Date: 2019-10-10 09:55:35
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-07 16:58:07
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
  /**
   * @Author: wjy-mac
   * @description: 跳转消息详情
   * @Date: 2019-11-07 15:07:40
   * @param {type} id 聊天对象id 如店铺/好友id // 客户不会出现在此
   * @param {type} name 聊天对象名字 如店铺/好友名 // 客户不会出现在此
   * @param {type} shopname 店名
   * @return: 
   */
  goNews(id: string, name: string, shopname?: string) {
    this.route.navigate(['/newslist'], {queryParams: {id, name}});
  }
}
