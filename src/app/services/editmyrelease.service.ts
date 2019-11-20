/*
 * @Author: wjy-mac
 * @Date: 2019-11-19 22:14:35
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-19 23:26:36
 * @Description: file content
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditmyreleaseService {
  private data: any; // 被修改数据
  private ischage: boolean; // 已修改
  private type: number; // 类型
  constructor() { }
  /**
   * @Author: wjy-mac
   * @description: 初始化被修改数据
   * @Date: 2019-11-19 22:18:58
   * @param {type} 
   * @return: 
   */  
  setData(data, type) {
    this.data = data;
    this.type = type;
    this.ischage = false;
  }
  /**
   * @Author: wjy-mac
   * @description: 修改被修改数据
   * @Date: 2019-11-19 22:19:15
   * @param {type} 
   * @return: 
   */  
  changeData(data) {
    this.data = Object.assign(this.data, data);
    this.ischage = true;
  }
  /**
   * @Author: wjy-mac
   * @description: 获取被修改数据
   * @Date: 2019-11-19 22:19:23
   * @param {type} 
   * @return: 
   */  
  getData() {
    return {
      type: this.type,
      data: this.data
    };
  }
  /**
   * @Author: wjy-mac
   * @description: 是否被修改
   * @Date: 2019-11-19 22:19:35
   * @param {type} 
   * @return: 
   */  
  getIschage() {
    return this.ischage;
  }
  clear() {
    this.data = null;
    this.ischage = false;
    this.type = null;
  }
}
