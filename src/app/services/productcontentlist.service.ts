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
}
