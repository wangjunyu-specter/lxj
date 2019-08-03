import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ArticelistService {
  list: Set<any>;
  constructor(private http: HttpService) {
    this.list = new Set();
  }
  async getContent(id: string) {
    if (this.list.has(id)) {
      return this.list[id];
    }
    let data: any;
    try {
      data = await this.getList(id);
    } catch (err) {
      data = {};
    }
    return data;
  }
  async getList(id: string) {
    return new Promise((resolve, reject) => {
      this.http.getData(this.http.getarticlecontent, {aid: id}).subscribe(res => {
        console.log(res);
        // this.newGoods = data['new_goods'];

        if (res['data']) {
          resolve(res['data']);
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
