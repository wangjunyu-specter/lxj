import { UserService } from './user.service';
import { HttpService } from 'src/app/services/http.service';
/*
 * @Author: wjy-mac
 * @Date: 2019-11-06 20:43:10
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-08 16:46:35
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
  constructor(public newslist: NewsListService, private http: HttpService,
    private userfn: UserService) { }
  createObservableSocket() {
    this.link = this.http.wslink;
    this.ws = io(this.link);
    this.ws.on('disconnect', () => {
      this.ws.open();
    });
    this.ws.on('connect', () => {
      console.log('本地连接成功了')
      this.setUserdata().then(user => {
        this.sendMessage(user, 'setData');
      }).catch(err2 => {
      });
    });
    this.ws.on('chat message', (res) => {
      this.news(res);
    });
    this.ws.on('log', (res) => {
      console.log(res);
    });
  }
  async setUserdata() {
    let user: any;
    try {
      user = await this.userfn.getUser();
    } catch (e) {
      console.error(e);
      user = {};
    }
    const obj = {
      uid: user['user_id'],
      token: user.token
    };
    return obj;
  }
  testOnline() {
    if (!this.link) {
      this.createObservableSocket();
    }
  }
  news(data: NewsData) {
    this.newslist.setList(data.shopId || data.uid, [data]);
  }
  /**
   * @Author: wjy-mac
   * @description: 发送消息
   * @Date: 2019-11-08 16:39:16
   * @param {type} msg 消息内容
   * @param {type} key 消息接收建
   * @return: 
   */  
  sendMessage(msg: object, key: string) {
    this.ws.emit(key, msg);
  }
  disconnet() {
    this.ws.disconnect(true);
  }
}
