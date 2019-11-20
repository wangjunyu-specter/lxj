/*
 * @Author: wjy-mac
 * @Date: 2019-07-08 22:57:34
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 15:14:26
 * @Description: file content
 */
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class BounslistService {
  list: any[];
  page: number;
  limit: number;
  constructor(private http: HttpService) {
    this.clear();
  }
  getList(): any[] {
    if (this.list.length === 0) {
      this.getListhttp();
    }
    return this.list;
  }
  resetList() { // : 加入红包调用更新列表
    this.list.length = 0;
    this.page = 0;
    this.getListhttp(1);
  }
  addPage() {
    this.page++;
  }
  async refresh() {
    this.list.length = 0;
    this.page = 0;
    try {
      await this.getListhttp();
    } catch (err2) {
      return false;
    }
    return true;
  }
  async getListhttp(type?) {
    const obj = {page: this.page * this.limit, limit: this.limit};

    return new Promise((resolve, reject) => {
      if (type) {
      this.http.getData(this.http.getBounus, obj).subscribe(res => {
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
      this.http.getDataloading(this.http.getBounus, obj).subscribe(res => {
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
    res.map(data => {
      data.use_startdate = data.use_startdate.replace(/-/g, '.');
      data.use_enddate = data.use_enddate.replace(/-/g, '.');
      this.list.push(data);
    });
  }
  clear() {
    this.list = [];
    this.page = 0;
    this.limit = 20;
  }
}