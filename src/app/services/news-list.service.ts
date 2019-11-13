/*
 * @Author: wjy-mac
 * @Date: 2019-11-07 15:56:16
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-13 23:02:17
 * @Description: 消息列表表现
 */
import { Injectable, EventEmitter } from '@angular/core';
import { NewsData } from '../interface/news-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsListService {
  list: {id: string, arr: NewsData[], num: number}[];
  nowShopid: string; // 当前打开的聊天窗口对象id
  Source: EventEmitter<number>; // 监听事件，是否有打开窗口的新消息
  allnum: number; // 所有未读消息数
  constructor() {
    this.list = [];
    this.Source = new EventEmitter();
    this.allnum = 0;
  }
  /**
   * @Author: wjy-mac
   * @description: 设置数据
   * @Date: 2019-11-07 17:19:07
   * @param {type} id 店铺id 或 好友id // 客服不出现此
   * @return: 
   */  
  setList(id: string, arr: NewsData[] | NewsData) {
    console.log(arr);
    let num = 0; // 未读数量
    if (id != this.nowShopid) {
      if (arr instanceof Array) { // 查询此次添加数据的未读数量
        for (let index = arr.length - 1; index >= 0; index--) {
          const element = arr[index];
          if (Number(element.wd) === 1) {
            num++;
          } else {
            break;
          }
        }
      } else {
        if (arr.wd === 1) {
          num = 1;
        }
      }
    }
    let bool = false; // 是否处理数据
    for (let index = 0; index < this.list.length; index++) {
      const element = this.list[index];
      if (element['id'] == id) {
        element['num'] = element['num'] ? element['num'] + num : num;
        if (arr instanceof Array) {
          element['arr'].push(...arr);
        } else {
          element['arr'].push(arr);
        }
        bool = true;
        break;
      }
    }
    if (!bool) {
      if (arr instanceof Array) {
        this.list.push({id, arr, num});
      } else {
        this.list.push({id, arr: [arr], num});
      }
    }
    if (id === this.nowShopid) {
      this.Source.emit(1);
    } else {
      this.allnum += num;
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
    this.nowShopid = id; // 保留当前打开的页面对象id
    for (let index = 0; index < this.list.length; index++) {
      const element = this.list[index];
      if (element['id'] == id) {
        this.allnum -= element['num'];
        element['num'] = 0;
        if (element['arr'].length > 0) {
          element['arr'][element['arr'].length - 1]['wd'] = 1;
        }
        return element['arr'];
      }
    }
    this.list.push({id, arr: [], num: 0});
    return this.list[this.list.length - 1]['arr'];
  }
  clearShopid(id?: string) { // 是id目前都已读
    id = id || this.nowShopid;
    console.log(this.list);
    for (let index = 0; index < this.list.length; index++) {
      const element = this.list[index];
      if (element['id'] == id) {
        if (element['arr'].length > 0) {
          element['arr'][element['arr'].length - 1]['wd'] = 1;
        } else {
          this.list.splice(index, 1);
        }
        element['num'] = 0;
        break;
      }
    }
    this.nowShopid = null; // 每次退出消息页面都清除上次打开的id，
  }
}
