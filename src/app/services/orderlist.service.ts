import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderlistService {
  listObj: object;
  // allList: any[]; // 全部
  // dfkList: any[]; // 待付款
  // dfhList: any[]; // 待发货
  // dshList: any[]; // 待收货
  // ywcList: any[]; // 已完成
  amount: number; // 每页条数
  pageObj: number[]; // 页数对象
  isallarry: boolean[]; // 是否取完
  constructor(private http: HttpService) {
    // this.allList = [];
    // this.dfkList = [];
    // this.dfhList = [];
    // this.dshList = [];
    // this.ywcList = [];
    this.listObj = [];
    this.amount = 10;
    this.pageObj = [0, 0, 0, 0, 0];
    this.isallarry = [false, false, false, false, false];
  }
  setList(list: any[], type = 1) {
    this.listObj[type - 1].push(...list);
  }
  async getList(type: number) {
    console.log('执行力')
    if (!this.listObj[type - 1]) {
      this.listObj[type - 1] = [];
      await this.getMoregoodshttp(type).then(res => {}).catch(err => {});
    }
    return this.listObj[type - 1];
  }
  async getMore(type: number) {
    try {
      await this.getMoregoodshttp(type);
    } catch (e) {
      console.error(e);
    }
    return true;
  }
  async reget(type: number) {
    this.pageObj[type - 1] = 0;
    this.listObj[type - 1].length = 0;
    this.isallarry[type - 1] = false;
    try {
      await this.getMoregoodshttp(type);
      return true;
    } catch (e) {
      return true;
    }
  }
  async getMoregoodshttp(type: number) {
    let status = -1;
    switch (Number(type)) {
      case 1:
        status = -1;
        break;
      case 2:
        status = 100;
        break;
      case 3:
        status = 101;
        break;
      case 4:
        status = 105;
        break;
      case 5:
        status = 102;
        break;
      default:
        status = -1;
        break;
    }
    if (this.isallarry[type - 1]) {
      return false;
    }
    const obj: any = {
      last: this.pageObj[type - 1],
      amount: this.amount,
      composite_status: status,
      ishw: 1
    }
    return new Promise((resolve, reject) => {
      this.http.postformdata(this.http.orderlist, obj).subscribe(res => {
        console.log(res);
        this.pageObj[type - 1] += this.amount;
        this.setList(res['data'], type);
        if (res['data'] && res['data'].length >= this.amount) {
          resolve(true);
        } else {
          this.isallarry[type - 1] = true;
          reject(false);
        }
      }, err => {
        console.log(err);
        this.isallarry[type - 1] = true;
        reject(false);
      });
    });
  }
}
