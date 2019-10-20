/*
 * @Author: wjy-mac
 * @Date: 2019-10-18 22:58:52
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-18 23:30:20
 * @Description: 退换货订单数据
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThorderService {
  data: object;
  goods: object;
  constructor() { }
  setData(data: object, goods: object) {
    this.data = data;
    this.goods = goods;
  }
  getData(): object {
    return {
      order: this.data,
      goods: this.goods
    };
  }
  clearData() {
    this.data = null;
    this.goods = null;
  }
}
