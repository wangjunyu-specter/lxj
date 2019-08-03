import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import {NativeService} from "./native.service";
import {HttpService} from "./http.service";
import {reject} from "q";
@Injectable({
  providedIn: 'root'
})
export class GzlistService {
  list: string[];
  isget: boolean; // 是否已获取关注列表
  constructor(private user: UserService, private native: NativeService, private http: HttpService) {
    this.list = [];
  }
  async getList() {
    if (this.list.length === 0 && !this.native.ismobile() || !this.isget) {
      try {
        await this.getHttp();
      } catch (err) {
        return [];
      }
    }
    return this.list;
  }
  getGzlist() {
    return this.list;
  }
  getHttp() {
    return new Promise((resolve, reject) => {
      this.http.getData(this.http.getfollowlistuser).subscribe(res => {
        console.log(res)
        if (res.result.length > 0) {
          this.setList(res.result);
        }
        resolve(true);
      }, error2 => {
        reject(false);
      })
    })
  }
  setList(list) {
    this.list.length = 0;
    this.list.push(...list);
    this.isget = true;
    this.user.getUserp().then(res => {
      this.list.push(res['user_id']);
    }).catch(err => {});
  }
  puitem(id) {
    console.log(id)
    this.list.push(id);
  }
  removeItem(id) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] == id) {
        this.list.splice(i, 1);
        break;
      }
    }
  }
}
