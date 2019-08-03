import { Injectable } from '@angular/core';
import {isArray} from "rxjs/internal/util/isArray";

@Injectable({
  providedIn: 'root'
})
export class ShopNavService {
  navList: any[];
  hwnavList: any;
  activeNav: any; // 当前在哪个分类下
  constructor() {
    this.navList = [];
    this.activeNav = {
      id: '',
      navName: ''
    };
  }
  setNav (list: any[]) {
    this.navList.length = 0;
    this.hwnavList = {};
    for (let i = 0, j = list.length; i < j; i++) {
      if (!list[i]) break;
      if (list[i].id == 366) {
        this.hwnavList = list.splice(i, 1)[0];
        i--;
      } else {
        this.navList.push(list[i]);
      }
    }
    console.log(this.hwnavList);
    console.log(this.navList);
    // console.log(this.activeNav)
    // if (this.activeNav.id && !this.activeNav.navName) {
    //   this.getNavname(this.activeNav.id);
    // }
    // this.navList = list;
  }
  ishw (id: string): object {
    if (this.hwnavList['id'] === id) {
      return {
        ishw: true,
        childarr: this.hwnavList['childnav']
      };
    }
    const arr = isArrayin(this.hwnavList['childnav'], id);
    if (arr) {
      return {
        ishw: true,
        childarr: arr
      }
    }
    const arr2 = isArrayin(this.navList, id);
    if (arr2) {
      return {
        ishw: false,
        childarr: arr2
      }
    }
  }
  getNav (): any[] {
    return this.navList;
  }
  getNavname (id: string): any {
    this.activeNav.id = id;
    for (let i = 0; i < this.navList.length; i++) {
      if (this.navList[i].id === id) {
        this.activeNav.navName = this.navList[i].name;
        break;
      }
    }
    return this.activeNav;
  }
}

function isArrayin(arr, id) {
  for (let i = 0, j = arr.length; i < j; i++) {
    const data = arr[i];
    if (id === data['id']) {
      return data['childnav'] || [];
    } else if (data['childnav'].length > 0){
      const carr = isArrayin(data['childnav'], id);
      if (carr) {
        return carr;
      }
    }
  }
  return false;
}