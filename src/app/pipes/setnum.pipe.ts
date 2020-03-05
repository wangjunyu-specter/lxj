/*
 * @Author: wjy-mac
 * @Date: 2019-07-07 00:58:34
 * @LastEditors  : wjy-mac
 * @LastEditTime : 2020-01-10 14:40:09
 * @Description: 设置显示数字
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setnum'
})
export class SetnumPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value || isNaN(Number(value))) {
      return 0;
    }
    const num = Number(value);
    if (num > 10000) {
      const w = Math.floor(num / 10000);
      const y = num % 10000;
      let str = w.toString();
      if (y > 0) {
        const q = Math.floor(y / 1000);
        if (q > 0) {
          str += '.' + q + '+';
        }
      }
      return str + '万';
    }
    return value;
  }

}
