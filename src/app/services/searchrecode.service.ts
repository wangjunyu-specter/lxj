import { Injectable } from '@angular/core';
import {NativeService} from "./native.service";

@Injectable({
  providedIn: 'root'
})
export class SearchrecodeService {
  list: any[]; // 户外产品搜索
  list2: any[]; // 商品搜索
  list3: any[]; // 分享搜索
  isget: boolean; // 是否已获取本地数据
  constructor(private native: NativeService) {
    this.clear();
  }
  clear() {
    this.isget = false;
    this.list = [];
    this.list2 = [];
    this.list3 = [];
  }
  getList(type: number) {
    if (!this.isget) {
      this.isget = true;
      this.native.getStorage('searchRecodea').then(res => {
        if (res) {
          this.list.push(...res)
        }
      }).catch(err2 => {
        console.error(err2);
      })
      this.native.getStorage('searchRecodeb').then(res => {
        if (res) {
          this.list2.push(...res)
        }
      }).catch(err2 => {
        console.error(err2);
      })
      this.native.getStorage('searchRecodec').then(res => {
        if (res) {
          this.list3.push(...res)
        }
      }).catch(err2 => {
        console.error(err2);
      })
    }
    if (type === 1) {
      return this.list2;
    } else if (type === 2) {
      return this.list;
    } else {
      return this.list3;
    }
  }
  setList(type: number, val: string) {
    val = trim(val);
    if (type === 2) {
      if (this.list.includes(val)) {
        this.setListsort(this.list, val);
        return false;
      }
      this.list.unshift(val);
    } else if (type === 1) {
      if (this.list2.includes(val)) {
        console.log(this.list2)
        this.setListsort(this.list2, val);
        return false;
      }
      this.list2.unshift(val);
    } else if (type === 3) {
      if (this.list3.includes(val)) {
        this.setListsort(this.list3, val);
        return false;
      }
      this.list3.unshift(val);
    }
    this.updateStore(type);
  }
  updateStore(type: number) {
    if (type === 2) {
      this.native.setStorage('searchRecodea', this.list).then(data =>{
        console.log(data)
      }).catch(err2 => {
        console.log(err2)
      })
    } else if (type === 1) {
      this.native.setStorage('searchRecodeb', this.list2).then(data =>{
        console.log(data)
      }).catch(err2 => {
        console.log(err2)
      })
    } else if (type === 3) {
      this.native.setStorage('searchRecodec', this.list3).then(data =>{
        console.log(data)
      }).catch(err2 => {
        console.log(err2)
      })
    }
  }
  setListsort(list, val) {
    console.log(list)
    for (let i = 0; i < list.length; i++) {
      if (list[i] === val) {
        list.splice(i, 1);
      }
    }
    list.unshift(val);
  }

}

function trim(str){ //删除左右两端的空格
  return str.replace(/(^\s*)|(\s*$)/g, "");
}