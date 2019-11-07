/*
 * @Author: wjy-mac
 * @Date: 2019-11-07 22:31:25
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-07 22:32:07
 * @Description: 消息列表页时间格式处理
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newslisttime'
})
export class NewslisttimePipe implements PipeTransform {

  transform(value: number, args: any[]): any {
    for (let index = 0; index < args.length; index++) {
      const element = args[index];
      if (element.time === value && index === 0) {
        return this.timeDownItem(value);
      } else if (index !== 0 && element.time === value && (value - args[index - 1].time) > 240000) {
        return this.timeDownItem(value);
      } else if (index !== 0 && this.istwoDay(value, args[index - 1].time)) {
        return this.timeDownItem(value);
      }
    }
    return '';
  }
  /**
   * @Author: wjy-mac
   * @description: 获取当天实际
   * @Date: 2019-11-07 21:03:41
   * @param {type} num 时间戳
   * @return: 
   */  
  getTime(num: number) {
    const date = new Date(num);
    const hours = date.getHours();
    const min = date.getMinutes();
    return `${hours < 10 ? '0' + hours.toString() : hours}:${min < 10 ? '0' + min.toString() : min}`;
  }

  /**
   * @Author: wjy-mac
   * @description: 获取昨天时间
   * @Date: 2019-11-07 21:04:07
   * @param {type} 
   * @return: 
   */  
  getprevTime(num: number) {
    return `昨天`;
  }
  /**
   * @Author: wjy-mac
   * @description: 获取最近7天内的时间
   * @Date: 2019-11-07 21:06:34
   * @param {type} 
   * @return: 
   */  
  getweekTime(num: number) {
    const date = new Date(num);
    const week = date.getDay();
    return `星期${week}`;
  }
   /**
   * @Author: wjy-mac
   * @description: 获取最近7天前的时间
   * @Date: 2019-11-07 21:06:34
   * @param {type} 
   * @return: 
   */  
  getoldTime(num: number) {
    const date = new Date(num);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `星期${year}年${month < 10 ? '0' + month.toString() : month}月${day < 10 ? '0' + day.toString() : day}日`;
  }

 timeDownItem(time: number) {
   const nowDay = new Date(new Date().setHours(0, 0, 0, 0)).getTime(); // 获取当天凌晨时间戳
   const nextDay = nowDay + 86400000; // 明天凌晨时间戳
   if (time >= nowDay && time < nextDay) {
    return this.getTime(time);
   } else if (time < nowDay && time >= (nowDay - 86400000)) {
    return this.getprevTime(time);
   } else if (time < (nowDay - 86400000) && time >= nowDay - (86400000 * 7)) {
    return this.getweekTime(time);
   } else {
    return this.getoldTime(time);
   }
 }
  /**
   * @Author: wjy-mac
   * @description: 判断是否距离上个消息已经第二天
   * @Date: 2019-11-07 21:06:34
   * @param {type} 
   * @return: 
   */  
 istwoDay(time: number, pretime: number) {
  const date = new Date(time);
  const day = date.getDate();
  const date1 = new Date(pretime);
  const day1 = date1.getDate();
  if (day != day1) {
    return true;
  }
 }

}
