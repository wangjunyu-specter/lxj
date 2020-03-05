/*
 * @Author: wjy-mac
 * @Date: 2019-07-07 01:46:32
 * @LastEditors  : wjy-mac
 * @LastEditTime : 2020-01-10 14:27:07
 * @Description: file content
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xccontentsplit'
})
export class XccontentsplitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }
    console.log(value);
    value = value.replace(/\r?\n|\r/g, "|")
    console.log(value);
    const arr = value.split('|');
    const arr2 = [];
    arr.map(res => {
      if (!res) {
        return false;
      }
      res = res.replace(/(\[\d*\])/g, '');
      res = res.replace(/:/, '|');
      arr2.push(res.split('|'));
    });
    return arr2;
  }

}
