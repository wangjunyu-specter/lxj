/*
 * @Author: wjy-mac
 * @Date: 2019-11-06 20:43:10
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-07 17:53:33
 * @Description: websocket文件
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as io from 'socket.io-client';
import { NewsListService } from './news-list.service';
import { NewsData } from '../interface/news-data';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  ws: any = null; //定义websocket对象
  link: string;
  constructor(public newslist: NewsListService) { }
  createObservableSocket(url: string) {
    this.link = url;
    this.ws = io(url);
    this.ws.on('disconnect', () => {
      this.ws.open();
    });
    this.ws.on('chat message', (res) => {
      this.news(res);
    });
  }
  testOnline() {
    if (!this.link) {
      this.createObservableSocket('ws://news.cdlxj.cn');
    }
  }
  news(data: NewsData) {
    this.newslist.setList(data.shopId || data.uid, [data]);
  }
  sendMessage(msg: object, key: string) {
    this.ws.emit(key, msg);
  }
  disconnet() {
    this.ws.disconnect(true);
  }
}
