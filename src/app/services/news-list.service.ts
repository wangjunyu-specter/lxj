/*
 * @Author: wjy-mac
 * @Date: 2019-11-07 15:56:16
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 15:29:19
 * @Description: 消息列表表现
 */
import { Injectable, EventEmitter } from '@angular/core';
import { NewsData, TzData } from '../interface/news-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsListService {
  hasShopid: Set<string>; // 是否已获取指定商家的列表信息 用于消息列表
  hasShopcontent: Set<string>; // 是否已获取指定商家消息详情列表 用于消息详情
  list: {id: string, arr: NewsData[], num: number}[];
  nowShopid: string; // 当前打开的聊天窗口对象id
  Source: EventEmitter<number>; // 监听事件，是否有打开窗口的新消息
  allnum: number; // 所有未读消息数
  tzallnum: number; // 所有未读通知
  tzgglist: TzData[]; // 通知公告列表
  tzggPageobj: {page: number, limit: number, all: boolean};
  newsPageobj: {page: number, limit: number, all: boolean};
  constructor() {
    this.hasShopid = new Set();
    this.hasShopcontent = new Set();
    this.list = [];
    this.Source = new EventEmitter();
    this.allnum = 0;
    this.tzallnum = 0;
    this.tzgglist = [];
    this.tzggPageobj = {
      page: 0,
      limit: 20,
      all: false
    };
    this.newsPageobj = {
      page: 0,
      limit: 20,
      all: false
    };
  }
  clear() {
    this.hasShopid.clear();
    this.hasShopcontent.clear();
    this.list = [];
    this.allnum = 0;
    this.tzallnum = 0;
    this.tzgglist = [];
    this.tzggPageobj = {
      page: 0,
      limit: 20,
      all: false
    };
    this.newsPageobj = {
      page: 0,
      limit: 20,
      all: false
    };
  }
  /**
   * @Author: wjy-mac
   * @description: 设置已获取指定商家以往所有消息
   * @Date: 2019-11-15 16:59:19
   * @param {type} 
   * @return: 
   */  
  setShopcontent(id: string) {
    this.hasShopcontent.add(id);
  }
  /**
   * @Author: wjy-mac
   * @description: 是否已获取指定商家所有历史消息
   * @Date: 2019-11-15 16:59:56
   * @param {type} 
   * @return: 
   */  
  getIsshopconetnt(id: string) {
    return this.hasShopcontent.has(id);
  }
  setShophistorynews(id: string, arr: NewsData[]) {
    if (!this.hasShopid.has(id)) {
      this.hasShopid.add(id);
      const obj = {
        num: 0,
        arr: [],
        id
      };
      this.list.unshift(obj);
    }
    for (let index = 0; index < this.list.length; index++) {
      const element = this.list[index];
      if (element['id'] == id) {
        element['num'] = 0;
        element['arr'].length = 0;
        for (let index = 0; index < arr.length; index++) {
          const data = arr[index];
          const obj: NewsData = {
            type: Number(data.type),
            content: data.content,
            time: Number(data.time),
            uid: data.uid,
            tid: data.tid,
            uheader: data.uheader,
            theader: data.theader,
            uname: data.uname,
            tname: data.tname,
            shopId: data.shopId,
            shopName: data.shopName,
            wd: Number(data.wd),
            kftype: Number(data.kftype),
            isyh: Number(data.isyh)
          };
          element['arr'].push(obj);
        }
        this.Source.emit(1);
        break;
      }
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 设置聊天数据
   * @Date: 2019-11-07 17:19:07
   * @param {type} id 店铺id 或 好友id // 客服不出现此
   * @param {type} arr 数据 NewsData
   * @param {type} num 未读数量
   * @return: 
   */  
  setList(id: string, arr: NewsData, num?: number) {
    console.log(arr)
    let num2 = num || 0;
    if (num2 === 0 && Number(arr.wd) === -1 && arr.type !== 1) {
      num2 = 1;
    }
    if (this.hasShopid.has(id)) {
      for (let index = 0; index < this.list.length; index++) {
        const element = this.list[index];
        if (element['id'] == id) {
          element['num'] = element['num'] ? element['num'] + num2 : num2;
          element['arr'].push(arr);
          break;
        }
      }
    } else {
      this.hasShopid.add(id);
      this.list.unshift({id, arr: [arr], num: num2});
    }
    if (id === this.nowShopid) {
      this.Source.emit(1);
    } else if (!num) {
      this.allnum += num2;
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 设置聊天列表
   * @Date: 2019-11-14 23:16:05
   * @param {type} 
   * @return: 
   */  
  setNewslist(arr: {data: NewsData, num: number}[]) {
    if (this.newsPageobj.page === 0) { // 下拉刷新
      this.list.length = 0;
      this.hasShopid.clear();
    }
    arr.forEach(res => {
      const obj: NewsData = {
        type: Number(res.data.type),
        content: res.data.content,
        time: Number(res.data.time),
        uid: res.data.uid,
        tid: res.data.tid,
        uheader: res.data.uheader,
        theader: res.data.theader,
        uname: res.data.uname,
        tname: res.data.tname,
        shopId: res.data.shopId,
        shopName: res.data.shopName,
        wd: Number(res.data.wd),
        kftype: Number(res.data.kftype),
        isyh: Number(res.data.isyh)
      }
      this.setList(res.data.shopId, obj, Number(res.num));
    });
  }
  /**
   * @Author: wjy-mac
   * @description: 获取通知详情
   * @Date: 2019-11-14 22:23:54
   * @param {type} 
   * @return: 
   */  
  getTzdata(id: string): TzData {
    for (let index = 0; index < this.tzgglist.length; index++) {
      const element = this.tzgglist[index];
      if (element.id === id) {
        return element;
      }
      
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 设置聊天消息未读总数量
   * @Date: 2019-11-14 22:56:28
   * @param {type} 
   * @return: 
   */  
  setNewsnum(num: number) {
    this.allnum = num;
  }
  /**
   * @Author: wjy-mac
   * @description: 设置通知公告未读数量
   * @Date: 2019-11-14 21:27:18
   * @param {type} 
   * @return: 
   */  
  setTznum(num: number) {
    this.tzallnum = num;
  }
  /**
   * @Author: wjy-mac
   * @description: 获取聊天数据
   * @Date: 2019-11-14 19:55:06
   * @param {type} 
   * @return: 
   */  
  getList(): {id: string, arr: NewsData[]}[] {
    return this.list;
  }
  /**
   * @Author: wjy-mac
   * @description: 设置通知公告消息
   * @Date: 2019-11-14 19:59:03
   * @param {type} 
   * @return: 
   */  
  setTzlist(arr: TzData[]) {
    if (this.tzggPageobj.page === 0) {
      this.tzgglist.length = 0;
    }
    this.tzgglist.push(...arr);
  }
  /**
   * @Author: wjy-mac
   * @description: 通知消息页面翻页
   * @Date: 2019-11-14 20:58:48
   * @param {type} num 1 or -1
   * @return: 
   */  
  setTzpager(num: number) {
    if (this.tzggPageobj.all && num === 1) {
      return false;
    }
    this.tzggPageobj.page += num;
  }
  /**
   * @Author: wjy-mac
   * @description: 聊天消息翻页
   * @Date: 2019-11-14 22:59:49
   * @param {type} 
   * @return: 
   */  
  setNewspager(num: number) {
    if (this.newsPageobj.all && num === 1) {
      return false;
    }
    this.newsPageobj.page += num;
  }
  /**
   * @Author: wjy-mac
   * @description: 聊天消息列表全部获取
   * @Date: 2019-11-14 23:00:38
   * @param {type} 
   * @return: 
   */  
  setNewsall() {
    this.newsPageobj.all = true;
  }
  /**
   * @Author: wjy-mac
   * @description: 通知消息已全部获取
   * @Date: 2019-11-14 21:00:07
   * @param {type} 
   * @return: 
   */  
  setTznewsAll() {
    this.tzggPageobj.all = true;
  }
  /**
   * @Author: wjy-mac
   * @description: 获取通知公告列表
   * @Date: 2019-11-14 20:06:40
   * @param {type} 
   * @return: 
   */  
  getTzlist(): TzData[] {
    return this.tzgglist;
  }
  /**
   * @Author: wjy-mac
   * @description: 获取通知公告页数
   * @Date: 2019-11-14 20:07:23
   * @param {type} 
   * @return: 
   */  
  getTzpager(): {page: number, limit: number, all: boolean} {
    return this.tzggPageobj;
  }
  /**
   * @Author: wjy-mac
   * @description: 下拉刷新页数
   * @Date: 2019-11-14 23:09:08
   * @param {type} 
   * @return: 
   */  
  czPage(type: number) {
    if (type === 1) {
      this.newsPageobj.page = 0;
      this.newsPageobj.all = false;
    } else {
      this.newsPageobj.page = 0;
      this.newsPageobj.all = false;
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 获取聊天消息页数
   * @Date: 2019-11-14 23:01:27
   * @param {type} 
   * @return: 
   */  
  getNewspage(): {page: number, limit: number, all: boolean} {
    return this.newsPageobj;
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
    if (this.hasShopid.has(id)) {
      for (let index = 0; index < this.list.length; index++) {
        const element = this.list[index];
        if (element['id'] == id) {
          this.allnum -= element['num'];
          element['num'] = 0;
          // if (element['arr'].length > 0) {
          //   element['arr'][element['arr'].length - 1]['wd'] = 1;
          // }
          return element['arr'];
        }
      }
    } else {
      this.hasShopid.add(id);
      this.list.push({id, arr: [], num: 0});
      return this.list[this.list.length - 1]['arr'];
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 聊天信息已读
   * @Date: 2019-11-14 20:42:28
   * @param {type} 
   * @return: 
   */  
  clearShopid(id?: string) { // 是id目前都已读
    id = id || this.nowShopid;
    console.log(this.list);
    for (let index = 0; index < this.list.length; index++) {
      const element = this.list[index];
      if (element['id'] == id) {
        if (element['arr'].length > 0) {
          element['arr'][element['arr'].length - 1]['wd'] = 1;
          element['num'] = 0;
        } else {
          this.list.splice(index, 1);
          this.hasShopid.delete(id);
        }
        break;
      }
    }
    this.nowShopid = null; // 每次退出消息页面都清除上次打开的id，
  }
  /**
   * @Author: wjy-mac
   * @description: 设置通知消息已读
   * @Date: 2019-11-14 22:24:15
   * @param {type} 
   * @return: 
   */  
  setTzyd(id: string) {
    for (let index = 0; index < this.tzgglist.length; index++) {
      const element = this.tzgglist[index];
      if (element.id === id) {
        element.isread = '1';
        this.tzallnum--;
        break;
      }
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 删除聊天对象
   * @Date: 2019-11-14 20:02:51
   * @param {type} id
   * @return: 
   */  
  deleteItem(id: string) {
    for (let index = 0; index < this.list.length; index++) {
      const element = this.list[index];
      if (element.id === id) {
        this.list.splice(index, 1);
      }
    }
  }

}
