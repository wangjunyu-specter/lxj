/*
 * @Author: wjy-mac
 * @Date: 2019-07-28 02:22:48
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 15:44:49
 * @Description: file content
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
// 入驻商列表
@Injectable({
  providedIn: 'root'
})
export class SupplierlistService {
  list: any[];
  idlist: Set<string>;
  gxList: object; // 关系列表
  id: number; // 当前选中店铺id
  constructor(public http: HttpService) {
    this.list = [];
    this.idlist = new Set();
    this.gxList = {};
  }
  clear() {
    this.list = [];
    this.idlist.clear();
    this.gxList = {};
  }
  setList (data: any) {
    data.suppid = data.suppid.toString();
    this.id = data.suppid;

    if (this.idlist.has(data.suppid)) {
      return false;
    }
    data.yj = Number(data.yj);
    this.list.push(data)
    this.idlist.add(data.suppid);
    this.gxList[data.suppid] = this.list.length - 1;
  }
  setData (id: string, key: any, data: any) {
    if (!this.idlist.has(id)) {
      return false;
    }
    this.list[this.gxList[id]][key] = data;
  }
  async getData(id, gid = '0') {
    this.id = id;
    if (this.idlist.has(id)) {
      return this.list[this.gxList[id]]
    }
    const res = await this.getHttp(id, gid);
    if (res) return this.list[this.gxList[this.id]];
    else return null;
  }
  private async getHttp (id, gid) {
    console.log(id);
    return new Promise((resolve, reject) => {
      this.http.getData(this.http.getsupplier, {id: gid,supplier_id: id ? Number(id) : -1}).subscribe(res => {
        this.setList(res['data'])
        resolve(true);
      }, err => {
        console.error(err)
        reject(false);
      });
    });
  }
}
