/*
 * @Author: wjy-mac
 * @Date: 2019-10-18 22:58:52
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-23 11:23:26
 * @Description: 退换货订单数据
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThorderService {
  data: object;
  goods: object;
  orderall: boolean;
  issh:  boolean;
  constructor() { }
  setData(data: object, goods: object) {
    this.data = data;
    this.goods = goods;
  }
  setIsall() {
    this.orderall = true;
  }
  setIssh() {
    this.issh = true;
  }
  getData(): object {
    return {
      order: this.data,
      goods: this.goods,
      orderall: this.orderall,
      issh: this.issh
    };
  }
  clearData() {
    this.data = null;
    this.goods = null;
    this.orderall = false;
    this.issh = false;
  }
}
