import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchendgoodsService {
  private obj: any;
  private searchData: any;
  constructor() { }
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
