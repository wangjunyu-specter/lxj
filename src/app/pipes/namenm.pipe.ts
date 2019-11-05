/*
 * @Author: wjy-mac
 * @Date: 2019-11-05 16:00:03
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-05 16:01:48
 * @Description: 是否匿名
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namenm'
})
export class NamenmPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (args === '1') {
      let str = value.substr(0, 1);
      str += '**';
      return str;
    } else {
      return value;
    }
  }

}
