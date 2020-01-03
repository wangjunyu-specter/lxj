/*
 * @Author: wjy-mac
 * @Date: 2019-07-06 15:13:08
 * @LastEditors  : wjy-mac
 * @LastEditTime : 2020-01-03 13:34:52
 * @Description: file content
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class XcsclistService {

  list: any[]; // 收藏的行程
  page: number;
  limit: number;
  constructor(private http: HttpService) {
    this.clear();
  }
  clear() {
    this.page = 0;
    this.list = [];
    this.limit = 20;
  }
  getgoodslist() {
    if (this.list.length === 0) {
      this.getListhttp();
    }
    return this.list;
  }
  addPage() {
    this.page++;
  }
  reset() {// : 加入收藏调用
    this.page = 0;
    this.list = [];
    this.getListhttp(1);
  }
  doRefresh() {
    this.page = 0;
    this.list = [];
  }
  async getListhttp(type?) {
    const obj = {page: this.page * this.limit, limit: this.limit, ishw: 2};
    return new Promise((resolve, reject) => {
      if (type) {
        this.http.getData(this.http.collectionlist, obj).subscribe(res => {
          console.log(res);
          this.setList(res.data);
          if (!res.data || res.data.length === 0) {
            reject('没有了');
          }
          resolve(1);
        }, error2 => {
          reject();
        });
      } else {
        this.http.getDataloading(this.http.collectionlist, obj).subscribe(res => {
          console.log(res);
          this.setList(res.data);
          if (!res.data || res.data.length === 0) {
            reject('没有了');
          }
          resolve(1);
        }, error2 => {
          reject();
        });
      }
    });
  }
  setList(res) {
    this.list.push(...res);
    console.log(this.list);

    // res.map(data => {
    //   // data.use_startdate = data.use_startdate.replace(/-/g, '.');
    //   // data.use_enddate = data.use_enddate.replace(/-/g, '.');
    //   // this.list.push(data);
    // });
  }
  /**
   * @Author: wjy-mac
   * @description: 取消收藏行程
   * @Date: 2020-01-03 13:34:36
   * @param {type} 
   * @return: 
   */  
  deleteitem(id) {
    this.http.getData(this.http.delfollowgoods, {rec_id: id}).subscribe(res => {
      console.log(res);
      for (let i = 0, j = this.list.length; i < j; i++) {
        if (this.list[i].rec_id === id) {
          this.list.splice(i, 1);
          break;
        }
      }
    });

  }
}
