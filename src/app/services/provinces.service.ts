import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {
  list: any[];
  constructor() {
    this.list = [];
  }
  clear() {
    this.list = [];
  }
  getList() {
    return this.list;
  }
  setList(list: any[]) {
    this.list.push(...list);
  }
}
