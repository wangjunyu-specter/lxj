/*
 * @Author: wjy-mac
 * @Date: 2019-06-09 12:40:56
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 15:26:00
 * @Description: file content
 */
import { Injectable } from '@angular/core';
// 浏览记录
@Injectable({
  providedIn: 'root'
})
export class LljlService {
  idlist: Set<string>;
  constructor() {
    this.idlist = new Set();
  }
  addjl(id: string) {
    if (this.idlist.has(id)) {
      this.idlist.delete(id);
    }
    this.idlist.add(id);
  }
  getList(page: number, limit: number) {
    const arr = Array.from(this.idlist);
    console.log([...arr])
    const arr2: string[] = [];
    for (let i = 0; i < limit; i++) {
      if (!arr[i + page * limit]) {
        break;
      }
      arr2.push(arr[i + page * limit]);
    }
    return arr2;
  }
  clear() {
    this.idlist.clear();
  }
}
