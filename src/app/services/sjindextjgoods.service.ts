import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class SjindextjgoodsService {
  listobj: Map<any, any>;
  constructor(public http: HttpService) {
    this.listobj = new Map();
  }
  setData (id, data) {
    // this.listobj[id] = data;
    this.listobj.set(id, data);
  }
  async getData (id) {
    if (this.listobj.has(id)) {
      return this.listobj.get(id);
    }
    const res = await this.getHttp(id);
    if (res) return this.listobj.get(id);
    else return {};
  }
  async getHttp (id) {
    return new Promise((resolve, reject) => {
      this.http.getData(this.http.getsjindexmore, {suppid: id}).subscribe(res => {
        this.setData(id, res['data'])
        resolve(true);
      }, err => {
        console.log(err)
        reject(false);
      });
    });
  }
}
