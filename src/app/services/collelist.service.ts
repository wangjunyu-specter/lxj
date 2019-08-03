import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class CollelistService {
  list: any[]; // 商品
  list1: any[]; // 店铺
  page: number; // 商品
  page1: number; // 店铺
  limit: number;
  constructor(private http: HttpService) {
    this.page = 0;
    this.page1 = 0;
    this.list = [];
    this.list1 = [];
    this.limit = 20;
  }
  getgoodslist() {
    if (this.list.length === 0) {
      this.getListhttp();
    }
    return this.list;
  }
  getshoplist() {
    if (this.list1.length === 0) {
      this.getList2http(1);
    }
    return this.list1;
  }
  addPage(type: number) {
    if (type === 1) {
      this.page++;
    } else {
      this.page1++;
    }
  }
  reset() {// : 加入收藏调用
    this.page = 0;
    this.page1 = 0;
    this.list = [];
    this.list1 = [];
    this.getListhttp(1);
    this.getList2http(1);
  }
  async getListhttp(type?) {
    const obj = {page: this.page * this.limit, limit: this.limit};
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
  async getList2http(type?) {
    const obj = {page: this.page1 * this.limit, limit: this.limit};
    return new Promise((resolve, reject) => {
      if (type) {
        this.http.getData(this.http.followshop, obj).subscribe(res => {
          console.log(res);
          this.setList2(res.data);
          if (!res.data || res.data.length === 0) {
            reject('没有了');
          }
          resolve(1);
        }, error2 => {
          reject();
        });
      } else {
        this.http.getDataloading(this.http.followshop, obj).subscribe(res => {
          console.log(res);
          this.setList2(res.data);
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
  setList2(res) {
    this.list1.push(...res);
    // res.map(data => {
    //   // data.use_startdate = data.use_startdate.replace(/-/g, '.');
    //   // data.use_enddate = data.use_enddate.replace(/-/g, '.');
    //   // this.list.push(data);
    // });
  }
  deleteitem(id, type) { // : todo 商品取消收藏未做
    if (type === 1) {
      this.http.postformdata(this.http.delfollow, {rec_id: id}).subscribe(res => {
        console.log(res);
        for (let i = 0, j = this.list1.length; i < j; i++) {
          if (this.list[i].rec_id === id) {
            this.list1.splice(i, 1);
            break;
          }
        }
      });
    } else {
      this.http.postformdata(this.http.delfollow, {rec_id: id}).subscribe(res => {
        console.log(res);
        for (let i = 0, j = this.list1.length; i < j; i++) {
          if (this.list1[i].id === id) {
            this.list1.splice(i, 1);
            break;
          }
        }
      });
    }

  }
}
