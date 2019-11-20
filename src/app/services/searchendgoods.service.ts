/*
 * @Author: wjy-mac
 * @Date: 2019-07-11 20:14:28
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 15:38:10
 * @Description: file content
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchendgoodsService {
  private obj: any;
  private searchData: any;
  constructor() { }
  clear() {
    this.obj = null;
    this.searchData = null;
  }
  setObj(obj: object) {
    this.obj = obj;
  }
  setSearchdata(data) {
    this.searchData = data;
  }
  getObj(): object {
    return this.obj;
  }
  getSearchdata(): object {
    return this.searchData;
  }
}
