/*
 * @Author: wjy-mac
 * @Date: 2019-11-07 15:56:16
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-07 21:36:51
 * @Description: 消息列表表现
 */
import { Injectable } from '@angular/core';
import { NewsData } from '../interface/news-data';

@Injectable({
  providedIn: 'root'
})
export class NewsListService {
  list: {id: string, arr: NewsData[]}[];
  constructor() {
    this.list = [];
  }
  /**
   * @Author: wjy-mac
   * @description: 设置数据
   * @Date: 2019-11-07 17:19:07
   * @param {type} id 店铺id 或 好友id // 客服不出现此
   * @return: 
   */  
  setList(id: string, arr: NewsData[] | NewsData) {
    for (let index = 0; index < this.list.length; index++) {
      const element = this.list[index];
      if (element['id'] == id) {
        if (arr instanceof Array) {
          element['arr'].push(...arr);
        } else {
          element['arr'].push(arr);
        }
        return false;
      }
    }
    if (arr instanceof Array) {
      this.list.push({id, arr});
    } else {
      this.list.push({id, arr: [arr]});
    }
  }
  getList(): {id: string, arr: NewsData[]}[] {
    return this.list;
  }
  /**
   * @Author: wjy-mac
   * @description: 获取某个id对象的所有数据
   * @Date: 2019-11-07 16:17:01
   * @param {type} id 消息对象
   * @return: NewsData[]
   */
  getOnelist(id: string): NewsData[] {
    for (let index = 0; index < this.list.length; index++) {
      const element = this.list[index];
      if (element['id'] == id) {
        return element['arr'];
      }
    }
    this.list.push({id, arr: []});
    return this.list[this.list.length - 1]['arr'];
  }
}
