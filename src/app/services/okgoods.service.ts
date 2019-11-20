/*
 * @Author: wjy-mac
 * @Date: 2019-10-15 11:35:37
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-15 11:35:37
 * @Description: file content
 */
import { HttpService } from 'src/app/services/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OkgoodsService {

  constructor(private http: HttpService) { }
  sendOkgoods() {
    const httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('GET', this.http.zdomain + this.http.okgoods, true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中
  }
}
