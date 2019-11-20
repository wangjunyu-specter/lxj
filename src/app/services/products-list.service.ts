import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {
  bannerobj: Map<any, any>;
  navlist: Map<any, any>;
  constructor(private http: HttpService) {
    this.bannerobj = new Map();
    this.navlist = new Map();
  }
  clear() {
    this.bannerobj.clear();
    this.navlist.clear();
  }
  setBanner (id, data) {
    this.bannerobj.set(id, data);
  }
  setNav (id, data) {
    this.navlist.set(id, data);
  }
  async getBanner (id) {
    if (this.bannerobj.has(id)) {
      return this.bannerobj.get(id);
    }
    let bool = await this.getHttpbanner(id);
    if (bool) {
      return this.bannerobj.get(id);
    } else {
      return [];
    }
  }
  async getNavlist (id) {
    if (this.navlist.has(id)) {
      return this.navlist.get(id);
    }
    let bool = await this.getHttpnav(id);
    if (bool) {
      return this.navlist.get(id);
    } else {
      return [];
    }
  }
  async getHttpbanner (id) {
    return new Promise((resolve, reject) => {
      this.http.getData(this.http.getProductListbanner, {id}).subscribe(res => {
        console.log(res);
        // this.newGoods = data['new_goods'];
        this.setBanner(id, res['data']);
        resolve(true)
      }, err => {
        console.log(err);
        reject(false)
      });
    })
  }
  async getHttpnav (id) {
    return new Promise((resolve, reject) => {
      this.http.getData(this.http.getProductListtj, {id}).subscribe(res => {
        console.log(res);
        // this.newGoods = data['new_goods'];
        this.setNav(id, res['data']);
        resolve(true)
      }, err => {
        console.log(err);
        reject(false)
      });
    })
  }
}
