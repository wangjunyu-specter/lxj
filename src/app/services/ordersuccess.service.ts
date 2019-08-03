import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersuccessService {
  data: object;
  constructor() { }
  setData(data: object) {
    this.data = data;
  }
  getData(): object {
    return this.data;
  }
  clearData() {
    this.data = {};
  }
}
