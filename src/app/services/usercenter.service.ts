/*
 * @Author: wjy-mac
 * @Date: 2019-07-30 22:26:24
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 15:49:23
 * @Description: file content
 */
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class UsercenterService {
  centerobj: any; // 个人中心数据对象   关注 粉丝 或赞

  constructor(private http: HttpService) {
    this.clear();
  }
  clear() {
    this.centerobj = {};
  }
  getUserdata() {
    if (!this.centerobj.gznum) {
      this.getGz();
    }
    return this.centerobj;
  }
  private getGz() {
    this.http.getData(this.http.getusercenter).subscribe(res => {
      console.log(res);
      this.centerobj['gznum'] = res.data.gznum;
      this.centerobj['fsnum'] = res.data.fsnum;
      this.centerobj['dznum'] = res.data.dznum;
      this.centerobj['advertisement'] = res.data.advertisement;
      this.centerobj['xclist'] = res.data.xclist;
    })
  }
}
