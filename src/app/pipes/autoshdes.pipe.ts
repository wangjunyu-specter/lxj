/*
 * @Author: wjy-mac
 * @Date: 2019-10-31 16:06:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-31 16:10:42
 * @Description: file content
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoshdes'
})
export class AutoshdesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value || !value.includes('自动收货')) {
      return '';
    } else if (value.includes('-')) {
      return '正在售后中';
    } else {
      return value;
    }
  }

}
