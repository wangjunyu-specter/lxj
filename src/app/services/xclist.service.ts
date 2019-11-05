import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class XclistService {
  listObj: object; // 全部 待付款 已付款-待发货 待出行-待收货 已完成
  amount: number; // 每页条数
  pageObj: number[]; // 页数对象 // 每条对应页数
  isallarry: boolean[]; // 是否取完
  isplorderid: string; // 评论完成后跳转详情页时用次id判断是否这个订单已评论

  constructor(private http: HttpService) {
    this.clear();
  }
  setList(list: any[], type = 1) {
    this.listObj[type - 1].push(...list);
  }
  getPlorderid() {
    return this.isplorderid;
  }
  getList(type: number) {
    if (!this.listObj[type - 1]) {
      this.listObj[type - 1] = [];
      this.getMoregoodshttp(type).then(res => {}).catch(err => {});
    }
    return this.listObj[type - 1];
  }
  async getMore(type: number) {
    try {
      await this.getMoregoodshttp(type);
    } catch (e) {
      console.log(e);
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
      ishw: 2
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
  /**
   * @Author: wjy-mac
   * @description: 设置已有列表中已评价
   * @Date: 2019-11-04 23:32:52
   * @param {type} id 订单ID
   * @param {type} orderSn 订单sn.
   * @return: 
   */  
  setOrderispj(id, orderSn) {
    this.isplorderid = orderSn;
    out:
    for (const key in this.listObj) {
      if (this.listObj[key] && this.listObj[key].length > 0) {
        for (let index = 0; index < this.listObj[key].length; index++) {
          const res = this.listObj[key][index];
          if (res.order_id == id) {
            res['comment_s'] = 0;
            continue out;
          }
        }
      }
    }
  }
  clear() {
    this.listObj = [];
    this.amount = 20;
    this.pageObj = [0, 0, 0, 0, 0];
    this.isallarry = [false, false, false, false, false];
  }
}
