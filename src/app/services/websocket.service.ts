/*
 * @Author: wjy-mac
 * @Date: 2019-11-06 20:43:10
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-06 21:46:12
 * @Description: websocket文件
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  ws: WebSocket = null; //定义websocket对象
  constructor() { }
  createObservableSocket(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
      }
    );
  }
  sendMessage(msg: string) {
    this.ws.send(msg);
  }
}
