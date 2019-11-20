/*
 * @Author: wjy-mac
 * @Date: 2019-06-25 23:35:14
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 15:18:17
 * @Description: file content
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {UserService} from './user.service';
 // 联系人数据
@Injectable({
  providedIn: 'root'
})
export class ContactlistService {
  list: any[];
  activeList: any[]; // 当前选中收货、联系人
  mrid: string; // 默认id
  provinceList: any[]; // 省列表
  isgetdata: boolean;
  constructor(private http: HttpService, private user: UserService) {
    this.clear();
  }
  getContactlist () {
    if (this.list.length === 0) {
      this.getList();
    }
    return this.list;
  }
  setList(list: any[]) {
    if (list.length === 0) {
      return false;
    }
    this.list.length = 0;
    this.user.getUserp().then(res => {
      console.log(res)
      this.mrid = res.address_id;
      console.log(this.mrid)
      for (let i = 0, j = list.length; i < j; i++) {
        let jj = this.list.length;
        for (let ii = 0; ii < jj; ii++) {
          if (this.list[ii].address_id == list[i].address_id) {
            list.splice(i, 1);
            i--;
            j--;
            break;
          }
        }
        this.list.push(list[i]);
        if (list[i].address_id == this.mrid && this.mrid != '0') {
          this.list[i].active = true;
          this.list[i].mr = 1;
          this.activeList.push(list[i]);
        } else {
          this.list[i].mr = 0;
        }
      }
      if (!this.mrid) {
        this.list[0].mr = 1;
        this.activeList.push(this.list[0]);
        this.list[0].active = true;
      }
    }).catch(err =>{})

    console.log(this.activeList);
  }
  setPro(list: any) {
    this.provinceList.length = 0;
    this.provinceList.push(...list);
  }
  getPro() {
    return this.provinceList;
  }
  async getProasync() {
    if (this.provinceList.length === 0) {
      try {
        await this.getList();
      } catch (err) {
        return [];
      }
    }
    return this.provinceList;
  }
  setMr (id) {
    this.http.getData(this.http.setMraddress, {address_id: id}).subscribe(res=>{
      this.setMrfn(id);
    }, error2 => {})
  }
  delete (id) {
    this.http.getData(this.http.deleteaddress, {id}).subscribe(res=>{
      for(let i = 0, j = this.list.length; i < j; i++) {
        console.log(this.list[i])
        if (this.list[i]['address_id'] == id) {
          this.list.splice(i, 1);
        }
        if(res.result) {
          this.setMrfn(res.result);
        }
        for (let i = 0, j = this.activeList.length; i < j; i++) {
          if (this.activeList[i].address_id == id) {
            this.activeList.splice(i, 1);
          }
        }
      }
    }, error2 => {});
  }
  setMrfn(id) {
    this.mrid = id;
    this.user.setMraddress(id)
    this.list.map(res => {
      if (res.id == id || res.address_id == id) {
        res.mr = 1;
      } else {
        res.mr = 0;
      }
    })
  }
  setData(num: number) {
    if (this.activeList.length === num) {
      return false;
    }
    if (this.list.length > 0) {
      for (let i = 0, j = this.list.length; i < j; i++) {
        this.list[i].active = false;
      }
    }
    if (this.activeList.length > 0) {
      this.activeList.length = 0;
    }
  }
  async getItem(id) {
    if (this.list && this.list.length > 0) {
      for (let i = 0, j = this.list.length; i < j; i++) {
        if (this.list[i].address_id == id) {
          return this.list[i];
        }
      }
    }
    try {
      await this.getList();
      for (let i = 0, j = this.list.length; i < j; i++) {
        if (this.list[i].address_id === id) {
          return this.list[i];
        }
      }
    } catch (e) {
      return {};
    }
    return {};
  }
  edmit(item) {
    console.log(item)
    if (item.defalut == 1) {
      item.mr = 1;
      this.setMrfn(item.address_id);
      for (let i = 0, j = this.activeList.length; i < j; i++) {
        if (this.activeList[i].address_id == item.address_id) {
          this.activeList.splice(i, 1, item);
        } else {
          if (this.activeList[i].mr == 1) {
            this.activeList[i].mr = 0;
          }
        }
      }
    }
    if (this.activeList.length === 0) {
      this.activeList.push(item);
    }
    let isupdate = false;
    for (let i = 0, j = this.list.length; i < j; i++) {
      if (this.list[i].address_id == item.address_id) {
        this.list.splice(i, 1, item);
        isupdate = true;
      } else {
        if (item.mr == 1) {
          this.list[i].mr = 0;
        }
      }
    }
    if (!isupdate) {
      this.list.push(item);
    }
    console.log(this.list)
  }
  async getActive() {
    if (this.activeList.length === 0) {
      try {
        await this.getList();
      } catch (err) {
        return [];
      }
    }
    return this.activeList;
  }
  setActive(item, num) {
    console.log(item)
    console.log(num)
    let data: any;
    let arr:number[] = [];
    for (let i = 0, j = this.list.length; i < j; i++) {
      if (this.list[i].id === item.id) {
        this.list[i].active = this.list[i].active ? false : true;

        if (this.list[i].active) {
          arr.push(i);
          if (arr.length > num) {
            this.list[arr[arr.length - 2]].active = false;
          }
        }
        data = this.list[i];
      } else {
        console.log(this.list[i])
        if (arr.length === num && this.list[i].active) {
          this.list[i].active = false;
        } else if (arr.length < num && this.list[i].active) {
          arr.push(i);
        } else {
          this.list[i].active = false;
        }
      }
    }
    if (this.activeList.includes(item)) {
      for (let i = 0, j = this.activeList.length; i < j; i++) {
        if (this.activeList[i].id === item.id) {
          this.activeList.splice(i, 1);
          break;
        }
      }
    } else if (!this.activeList.includes(item) && this.activeList.length == num) {
      this.activeList.splice(this.activeList.length - 1, 1, data);
    } else {
      this.activeList.push(item);
    }

  }
  async getList() {
    if (this.isgetdata) {
      return false;
    }
    this.isgetdata = true;
    return new Promise((resolve, reject) => {
      this.http.getDataloading(this.http.getaddress).subscribe(res => {
        this.setList(res['data']['consignee_list']);
        this.setPro(res['data']['shop_province_list']);
        this.isgetdata = false;
        resolve(true)
      }, err => {
        console.log(err);
        this.isgetdata = false;
        reject(false);
      });
    })
  }
  remove () {
    this.list.length = 0;
    this.activeList.length = 0;
    this.mrid = '';
  }
  clear() {
    this.activeList = [];
    this.list = [];
    this.provinceList = [];
    this.isgetdata = false;
  }
}
