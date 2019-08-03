import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import { GzlistService } from './gzlist.service';
@Injectable({
  providedIn: 'root'
})
export class PqlistService {
  list: any[];
  gzList: any[];
  pageObj: any;
  gzpageObj: any;
  constructor(private http: HttpService, private gzlistfn: GzlistService) {
    this.list = [];
    this.gzList = [];
    this.pageObj = {
      page: 1,
      num: 20,
      type: 1,
      isall: false
    };
    this.gzpageObj = {
      page: 1,
      num: 20,
      isall: false
    };
  }
  getGzpageobj() {
    return this.gzpageObj;
  }
  getpageobj() {
    return this.pageObj;
  }
  getPqone(id: string, type: number) {
    let arr: any[];
    if (type === 0) {
      arr = this.gzList;
    } else {
      arr = this.list;
    }
    for (let i = 0, j = arr.length; i < j; i++) {
      if (arr[i].id === id) {
        return arr[i];
      }
    }
    return null;
  }
  getList() {
    if (this.list.length === 0) {
      this.getListhttp();
    }
    return this.list;
  }
  getgzList() {
    if (this.gzList.length === 0) {
      this.getgzListhttp();
    }
    return this.gzList;
  }
  async reset(type) {
    if (type == 1) {
      this.gzpageObj.isall = false;
      this.gzpageObj.page = 1;
      try {
        await this.getgzListhttp(1);
      } catch (err2) {
        return false;
      }
      return true;
    } else {
      this.pageObj.isall = false;
      this.pageObj.page = 1;
      try {
        await this.getListhttp(1);
      } catch (err2) {
        return false;
      }
      return true;
    }
  }
  async addList(type) {
    if (type == 1) {
      if (this.gzpageObj.isall) {
        return true;
      }
      try {
        await this.getgzListhttp();
      } catch (err2) {
        return false;
      }
      return true;
    } else {
      if (this.pageObj.isall) {
        return true;
      }
      try {
        await this.getListhttp();
      } catch (err2) {
        return false;
      }
      return true;
    }
  }
  getListhttp(type?) {
    return new Promise((resolve, reject) => {
      this.http.getData(this.http.getpqlist, this.pageObj).subscribe(res => {
        console.log(res);
        console.log(res);
        const data = res['result'];
        if (type) {
          this.list.length = 0;
        }
        this.list.push(...data['result']);
        if (!data['result'].length || data['result'].length < this.pageObj.num) {
          this.pageObj.isall = true;
        } else {
          this.pageObj.page++;
        }
        resolve(true)
        // this.newGoods = data['new_goods'];
      }, err => {
        // alert(JSON.stringify(err))
        console.log(err);
        reject(false)
      });
    });
  }
  getgzListhttp(type?) {
    return new Promise((resolve, reject) => {
      this.http.postformdata(this.http.getfollowpqlist, this.gzpageObj).subscribe(res => {
        console.log(res);
        const data = res['result'];
        if (type) {
          this.gzList.length = 0;
        }
        const userlist = data['users'];
        this.gzlistfn.setList(userlist);
        this.gzList.push(...data['result']);
        if (!data['result'].length || data['result'].length < this.gzpageObj.num) {
          this.gzpageObj.isall = true;
        } else {
          this.gzpageObj.page++;
        }
        resolve(true)
        // this.newGoods = data['new_goods'];
      }, err => {
        // alert(JSON.stringify(err))
        console.log(err);
        reject(false)
      });
    });
  }
}
