/*
 * @Author: wjy-mac
 * @Date: 2019-11-19 21:08:24
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-19 21:33:12
 * @Description: 记录已删除的票圈等id 返回我的发布时使用
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletemyreleaseService {
  id: string; // 已删除对象的id
  type: number; // 已删除类型 对应tab2的pagetype
  constructor() { }
  setId(id: string, type: number) {
    this.id = id;
    this.type = type;
  }
  getId(): {id, type} {
    return {
      id: this.id,
      type: this.type
    };
  }
  clear() {
    this.id = null;
    this.type = null;
  }
}
