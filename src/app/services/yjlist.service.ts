import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class YjlistService {
  yjlist: any[];
  gllist: any[];
  zmlist: any[];
  yjpageObj: any;
  glpageObj: any;
  zmpageObj: any;

  constructor(private http: HttpService) {
    this.clear();
  }
  clear() {
    this.yjlist = [];
    this.gllist = [];
    this.zmlist = [];
    this.yjpageObj = {
      page: 1,
      num: 20,
      type: 1,
      isall: false
    };
    this.glpageObj = {
      page: 1,
      num: 20,
      type: 1,
      isall: false
    };
    this.zmpageObj = {
      page: 1,
      num: 20,
      type: 1,
      isall: false
    };
  }
  getPqone(id: string, type: number) {
    let arr: any[];
    if (type === 0) {
      arr = this.yjlist;
    } else if (type === 1) {
      arr = this.gllist;
    } else {
      arr = this.zmlist;
    }
    for (let i = 0, j = arr.length; i < j; i++) {
      if (arr[i].id === id) {
        return arr[i];
      }
    }
    return null;
  }
  editOne(id, type, data) {
    let arr: any[];
    if (type === 0) {
      arr = this.yjlist;
    } else if (type === 1) {
      arr = this.gllist;
    } else {
      arr = this.zmlist;
    }
    for (let i = 0, j = arr.length; i < j; i++) {
      if (arr[i].id === id) {
        let obj = arr[i];
        obj = Object.assign(obj, data);
        arr.splice(i, 1, obj);
        break;
      }
    }
  }
  addItem(type, data) {
    let arr: any[];
    if (type === 0) {
      arr = this.yjlist;
    } else if (type === 1) {
      arr = this.gllist;
    } else {
      arr = this.zmlist;
    }
    arr.unshift(data);
  }
  deleteone(id: string, type: number) {
    let arr: any[];
    if (type === 0) {
      arr = this.yjlist;
    } else if (type === 1) {
      arr = this.gllist;
    } else {
      arr = this.zmlist;
    }
    for (let i = 0, j = arr.length; i < j; i++) {
      if (arr[i].id === id) {
        arr.splice(i, 1);
        break;
      }
    }
  }
  getyjList() {
    if (this.yjlist.length === 0) {
      this.getListhttp(1);
    }
    return this.yjlist;
  }
  getglList() {
    if (this.gllist.length === 0) {
      this.getListhttp(2);
    }
    return this.gllist;
  }
  getzmList() {
    if (this.zmlist.length === 0) {
      this.getListhttp(3);
    }
    return this.zmlist;
  }
  async reset(type) {
    if (type == 1) {
      this.yjpageObj.isall = false;
      this.yjpageObj.page = 1;
      try {
        await this.getListhttp(1, 1);
      } catch (err2) {
        return false;
      }
      return true;
    } else if (type == 2) {
      this.glpageObj.isall = false;
      this.glpageObj.page = 1;
      try {
        await this.getListhttp(2, 1);
      } catch (err2) {
        return false;
      }
      return true;
    } else {
      this.zmpageObj.isall = false;
      this.zmpageObj.page = 1;
      try {
        await this.getListhttp(3, 1);
      } catch (err2) {
        return false;
      }
      return true;
    }
  }
  async addList(type) {
    if (type == 1) {
      if (this.yjpageObj.isall) {
        return false;
      }
      try {
        await this.getListhttp(1);
      } catch (err2) {
        return false;
      }
      return true;
    } else if (type == 2) {
      if (this.glpageObj.isall) {
        return false;
      }
      try {
        await this.getListhttp(2);
      } catch (err2) {
        return false;
      }
      return true;
    } else {
      if (this.zmpageObj.isall) {
        return false;
      }
      try {
        await this.getListhttp(3);
      } catch (err2) {
        return false;
      }
      return true;
    }
  }
  getListhttp(type: number, reset?) {
    let obj: any;
    switch (type) {
      case 1:
        obj = Object.assign({}, this.yjpageObj);
        break;
      case 2:
        obj = Object.assign({}, this.glpageObj);
        break;
      case 3:
        obj = Object.assign({}, this.zmpageObj);
        break;
    }
    obj.type = type + 1;
    return new Promise((resolve, reject) => {
      this.http.getData(this.http.getpqlist, obj).subscribe(res => {
        console.log(res);
        console.log(res);
        const data = res['result'];
        switch (type) {
          case 1:
            if (reset) {
              this.yjlist.length = 0;
            }
            this.yjlist.push(...data['result']);
            if (!data['result'].length || data['result'].length < obj.num) {
              this.yjpageObj.isall = true;
            } else {
              this.yjpageObj.page++;
            }
            break;
          case 2:
            if (reset) {
              this.gllist.length = 0;
            }
            this.gllist.push(...data['result']);
            if (!data['result'].length || data['result'].length < obj.num) {
              this.glpageObj.isall = true;
            } else {
              this.glpageObj.page++;
            }
            break;
          case 3:
            if (reset) {
              this.zmlist.length = 0;
            }
            this.zmlist.push(...data['result']);
            if (!data['result'].length || data['result'].length < obj.num) {
              this.zmpageObj.isall = true;
            } else {
              this.zmpageObj.page++;
            }
            break;
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
