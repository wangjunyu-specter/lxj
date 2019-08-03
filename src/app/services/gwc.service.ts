import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class GwcService {
  list: any[];
  // public yxnum: number;
  // public isall: boolean;
  // public allPrice: number;
  // des: string;
  options: any;
  constructor(private http: HttpService) {
    this.options = {
      yxnum: 0,
      isall: false,
      allPrice: 0,
      des: '优惠金额见结算页面'
    };
    // this.yxnum = 0;
    // this.isall = false;
    // this.allPrice = 0;
    this.list = [];
    // this.des = '优惠金额见结算页面';
  }
  getOption() {
    return this.options;
  }
  // getDes(): string {
  //   return this.des;
  // }
  getList() {
    // if (this.list.length === 0) {
    //   this.getListhttp();
    // }
    this.getListhttp();
    return this.list;
  }
  // getIsall(): boolean {
  //   return this.isall;
  // }
  // getYxnum(): number {
  //   return this.yxnum;
  // }
  // getAllprice() {
  //   return this.allPrice;
  // }
  setNum(data, name, num) {
    console.log(data)
    for (let i = 0, j = this.list.length; i < j; i++) {
      if (this.list[i].supplier_name === name) {
        for (let ii = 0, jj = this.list[i].goods_list.length; ii < jj; ii++) {
          const res = this.list[i].goods_list[ii];
          if (res.rec_id === data.rec_id) {
            res.goods_number = Number(res.goods_number) + num;
            return false;
          }
        }
      }
    }
  }
  setNumone(data, name) {
    for (let i = 0, j = this.list.length; i < j; i++) {
      if (this.list[i].supplier_name === name) {
        for (let ii = 0, jj = this.list[i].goods_list.length; ii < jj; ii++) {
          const res = this.list[i].goods_list[ii];
          if (res.rec_id === data.rec_id) {
            res.goods_number = 1;
            return false;
          }
        }
      }
    }
  }
  getListhttp(type?) {
    if (type) {
      this.http.getData(this.http.getgwc).subscribe(res => {
        console.log(res);
        this.setListfn(res);
      });
    } else {
      this.http.getDataloading(this.http.getgwc).subscribe(res => {
        console.log(res);
        this.setListfn(res);
      });
    }

  }
  setListfn(res) {
    const arr = res.data.goods_list;
    if (arr && arr.length > 0) {
      for (let i = 0, j = arr.length; i < j; i++) {
        arr[i].goods_list.map(data => {
          if (data.allnumber === 0) {
            return false;
          }
          data.active = true;
          this.options.yxnum++;
        });
        if (this.options.yxnum === 0) {
          continue;
        }
        arr[i].active = true;
        if (arr.length === 1 || i === j - 1) {
          this.options.isall = true;
        } else {
          this.options.isall = false;
        }
        break;
      }
    }
    // this.goodsList = arr;
    // this.list = [...arr];
    this.list.length = 0;
    this.list.push(...arr);
    this.options.allPrice = res.data.total.goods_amount;
    this.setCheckedone();
  }
  delete(id: string, name) {
    this.http.getData(this.http.deletegoods, {id}).subscribe(() => {
      for (let i = 0, j = this.list.length; i < j; i++) {
        if (this.list[i].supplier_name === name) {
          for (let ii = 0, jj = this.list[i].goods_list.length; ii < jj; ii++) {
            const res = this.list[i].goods_list[ii];
            if (res.rec_id === id) {
              this.list[i].goods_list.splice(ii, 1);
              return false;
            }
          }
        }
      }
      // this.item.goods_list.splice(index, 1);
    }, error2 => {
      console.log(error2);
      // this.item.goods_list.splice(index, 1);
    });
  }
  setItemsetItem(name: string, bool: boolean) {
    for (let i = 0, j = this.list.length; i < j; i++) {
      if (this.list[i].supplier_name === name) {
        this.list[i].active = bool;
      }
    }
  }
  setItemall(name: string) {
    for (let i = 0, j = this.list.length; i < j; i++) {
      if (this.list[i].supplier_name === name) {
        for (let ii = 0, jj = this.list[i].goods_list.length; ii < jj; ii++) {
          const res = this.list[i].goods_list[ii];
          res.active = this.list[i].active;
        }
        break;
      }
    }
  }
  setCheckedone() {
    const selGoods: string[] = this.setYxactive();
    if (selGoods.length === 0) {
      this.options.allPrice = 0;
      this.options.yxnum = 0;
      return false;
    }
    const obj: object = {
      sel_goods: selGoods,
    };
    this.options.des = '正在计算金额';
    this.http.getData(this.http.selcart, obj).subscribe(res => {
      console.log(res);
      this.options.des = '优惠金额见结算页面';
      this.options.allPrice = res.result;
    }, error2 => {
      console.log(error2);
      this.options.des = '优惠金额见结算页面';
    });
  }
  setYxactive() {
    const selGoods: string[] = [];
    let bool = true; // 判断是否已全选
    this.list.map(res => {
      res.goods_list.map(data => {
        if (data.allnumber === 0) {
          return false;
        }
        if (data.active) {
          selGoods.push(data.rec_id);
        } else {
          bool = false;
        }
      });
    });
    if (bool) {
      this.options.isall = true;
    } else {
      this.options.isall = false;
    }
    this.options.yxnum = selGoods.length;
    return selGoods;
  }

  setNumchange($event) {
    const selGoods: string[] = this.setYxactive();
    const obj: object = {
      sel_goods: selGoods,
      rec_id: $event.rec_id,
      number: $event.goods_number,
      goods_id: $event.goods_id,
      suppid: $event.supplier_id,
      is_package: $event.extension_code === 'package_buy' ? 1 : 0
    };
    this.options.des = '正在计算金额';

    this.http.getData(this.http.updateGwc, obj).subscribe(res => {
      this.options.allPrice = res.cart_amount_desc;
      this.options.des = '优惠金额见结算页面';
    }, error2 => {
      console.log(error2);
      $event.goods_number = error2.number;
      this.options.des = '优惠金额见结算页面';
    });
  }
  setIsall() {
    this.list.map(res => {
      let bool = false;
      for (let i = 0, j = res.goods_list.length; i < j; i++) {
        const data = res.goods_list[i];
        if (data.allnumber === 0) {
          continue;
        }
        bool = true;
        data.active = this.options.isall;
      }
      if (bool) {
        res.active = this.options.isall;
      }
    });
    this.setCheckedone();
  }
  changeData(data) {
    outer:
    for (let i = 0, j = this.list.length; i < j; i++) {
      if (this.list[i].supplier_name === data.supplier_name) {
        if (data.discount) {
          this.list[i].discount = data.discount;
        }
        for (let ii = 0, jj = this.list[i].goods_list.length; ii < jj; ii++) {
          const res = this.list[i].goods_list[ii];
          if (res.rec_id === data.goods.rec_id) {
            data.goods.active = res.active;
            this.list[i].goods_list.splice(ii, 1, data.goods);
            break outer;
          }
        }
      }
    }
    this.setCheckedone();
  }
}
