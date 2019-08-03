import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ScindexService {
  hasData: boolean; // 是否取过数据
  IndexData: any;
  moreGoods: any[]; // 首页更多商品
  private indexgoodsnum: number;

  constructor(private http: HttpService) {
    this.hasData = false;
    this.indexgoodsnum = 0;
    this.moreGoods = [];
  }
  async getScindex() {
    if (this.hasData) {
      return this.IndexData;
    }
    const bool = await this.getShophttp();
    if (bool) return this.IndexData;
    else return false;
  }
  async getShophttp() {
    return new Promise((resolve, reject) => {
      this.http.getDataloading(this.http.getscIndex).subscribe(res => {
        console.log(res);
        this.hasData = true;
        this.IndexData = res['data'];
        //
        resolve(true)
      }, err => {
        this.hasData = false;
        console.log(err);
        reject(false)
      });
    });
  }
  getMoregoods () {
    return this.moreGoods;
  }
  async getMoregoodshttp() {
    let obj: any = {
      last: this.indexgoodsnum,
      amount: 10,
      ishw: 1
    }
    this.indexgoodsnum += 10;
    return new Promise((resolve, reject) => {
      this.http.postformdataloading(this.http.getindexmore, obj).subscribe(res => {
        console.log(res);
        // this.newGoods = data['new_goods'];
        this.moreGoods.push(...res['data']);
        if (res['data'] && res['data'].length == 10) {
          resolve(true)
        } else {
          reject(false)
        }
      }, err => {
        console.log(err);
        reject(false)
      });
    });
  }
}
