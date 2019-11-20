import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentListService {
  private list: any[]; // 可以使用的支付方式列表
  private yezf: any;
  constructor(private http: HttpService) {
    this.list = [];
  }
  clear() {
    this.list.length = 0;
    this.yezf = null;
  }
  setList(payList) {
    for (let i = 0; i < payList.length; i++) {
      if (payList[i].pay_code === 'balance') {
        this.yezf = payList.splice(i, 1);
        break;
      }
    }
    this.list.push(...payList);
  }
  getList() {
    return this.list;
  }
  getyepay() {
    return this.yezf;
  }
  async getHlist() {
    if (this.list.length === 0) {
      try {
        await this.getMoregoodshttp();
      } catch (e) {
        // return ;
        console.log('没有获取成');
      }
    }
    return this.list;
  }
  private async getMoregoodshttp() {
    return new Promise((resolve, reject) => {
      this.http.getData(this.http.getpaymentlist).subscribe(res => {
        console.log(res);
        this.setList(res.data);
        resolve(true);
      }, err2 => {
        reject(false);
      });
    });
  }
}
