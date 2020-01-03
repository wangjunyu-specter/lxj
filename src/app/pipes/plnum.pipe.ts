/*
 * @Author: wjy-mac
 * @Date: 2019-12-18 14:07:56
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-18 14:11:21
 * @Description: file content
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plnum'
})
export class PlnumPipe implements PipeTransform {

  transform(value: string, num: string): any {
    if (!value) {
      return 0;
    }
    if (num) {
      return parseInt(value) - parseInt(num);
    } else {
      return value;
    }
  }

}
