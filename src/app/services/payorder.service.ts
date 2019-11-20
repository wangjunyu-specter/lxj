import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayorderService {
  orderData: any;
  constructor() { }
  setOrder(data) {
    this.orderData = data;
  }
  getOrder() {
    return this.orderData;
  }
  clear() {
    this.orderData = '';
  }
}
