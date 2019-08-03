import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ZtListService {
  listobj: Map<string, object>;
  constructor(private http: HttpService) {
    this.listobj = new Map();
  }
  setData (id:string, data: object) {
    this.listobj.set(id, data)
  }
  async getData(id: string) {
    if (this.listobj.has(id)) {
      return this.listobj.get(id);
    }
    const bool: any = await this.gethttp(id);
    if (bool) {
      return this.listobj.get(id);
    } else {
      return false;
    }
  }
  gethttp (id:string) {
    return new Promise((resolve, reject) => {
      this.http.getData(this.http.getZt, {topic_id: id}).subscribe(res => {
        console.log(res);
        this.setData(id, res['data'])
        resolve(true);
        // this.dataList = res['data'];
      }, err => {
        reject(false);
      });
    });
  }
}
