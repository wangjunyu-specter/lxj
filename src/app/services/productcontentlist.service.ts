/*
 * @Author: wjy-mac
 * @Date: 2019-07-28 02:18:42
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 15:34:17
 * @Description: file content
 */
import { Injectable } from '@angular/core';
// 产品详情列表
@Injectable({
  providedIn: 'root'
})
export class ProductcontentlistService {
  productList: any;
  constructor() {
    this.productList = {};
  }
  getProduct (id: string) {
    console.log(id)
    return this.productList[id];
  }
  setProduct (data: any, id: string) {
    this.productList[id] = data;
  }
  deleteOne(id: string) {
    delete this.productList[id];
  }
  clear() {
    this.productList = {};
  }
}
