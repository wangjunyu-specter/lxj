/*
 * @Author: wjy-mac
 * @Date: 2019-10-18 22:58:52
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-21 20:22:57
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
  constructor() { }
  setData(data: object, goods: object) {
    this.data = data;
    this.goods = goods;
  }
  setIsall() {
    this.orderall = true;
  }
  getData(): object {
    return {
      order: this.data,
      goods: this.goods,
      orderall: this.orderall
    };
  }
  clearData() {
    this.data = null;
    this.goods = null;
    this.orderall = false;
  }
}
