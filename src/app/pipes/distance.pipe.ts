/*
 * @Author: wjy-mac
 * @Date: 2019-12-09 16:05:53
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-12 15:32:51
 * @Description: 距离单位换算
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(value: any): any {
    console.log(value)
    if (!value && value !== 0) {
      return '咫尺天涯';
    } else if (value < 20) {
      return '近在眼前';
    } else if (value >= 20 && value < 1000) {
      return value + '米';
    } else {
      return (value / 1000) + 'km';
    }
  }

}
