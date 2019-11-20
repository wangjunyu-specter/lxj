import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class YhtclistService {
  list: any[];
  constructor(private http: HttpService) {
    this.list = [];
  }
  clear() {
    this.list = [];
  }
  setList (arr) {
    console.log(arr)
    for (let i = 0, j = this.list.length; i < j; i++) {
      const actid = this.list[i]['act_id'];
      let jj = arr.length;
      for (let ii = 0; ii < jj; ii++) {
        if (actid == arr[i]['act_id']) {
          arr.splice(ii, 1);
          ii--;
          jj--;
        }
      }
    }
    this.list.push(...arr);
  }
  async getData (id: string) {
    console.log(id)
    let arr: any[] = [];
    console.log(this.list);
    this.list.map(res => {
      for (let i = 0, j = res.goods_list.length; i < j; i++) {
        const data = res.goods_list[i];
        console.log('dataid:' + data['goods_id'])
        if (data['goods_id'] == id) {
          arr.push(res);
          break;
        }
      }
    })
    console.log(arr)
    if (arr.length > 0) {
      return arr;
    }
    const list = await this.getHttp(id);
    if (list) {
      return list;
    }
  }
  async getHttp (id: string) {
    return new Promise((resolve, reject) => {
      this.http.getData(this.http.getTclist, {goods_id: id}).subscribe(res => {
        console.log(res);
        // this.newGoods = data['new_goods'];
        resolve(res['data']['package_goods_list']);
        this.setList(res['data']['package_goods_list']);
      }, err => {
        console.log(err);
        reject(false)
      });
    });
  }
}
