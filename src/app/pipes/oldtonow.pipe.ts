/*
 * @Author: wjy-mac
 * @Date: 2019-06-18 09:44:16
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-19 17:24:15
 * @Description: file content
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oldtonow'
})
export class OldtonowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return getTimeUntilNow(value);
  }

}
function getTimeUntilNow(mss: number) {
  console.log(mss);
  const timestamp = Date.parse((new Date()).toString());
  if (mss.toString().length === 10) {
    mss = mss * 1000;
  }
  const num = timestamp - mss;
  const days = Math.floor(num / 1000 / 86400);
  // const days = parseInt((mss / (1000 * 60 * 60 * 24)).toString(), 10);
  if (days > 0) {
    return days + '天前';
  }
  const hours = Math.floor(num / 1000 / 3600);
  if (hours > 0) {
    return hours + '小时前';
  }
  const minutes = Math.floor(num / 1000 / 60);
  if (minutes > 0) {
    return minutes + '分钟前';
  }
  return '刚刚 ';
}
