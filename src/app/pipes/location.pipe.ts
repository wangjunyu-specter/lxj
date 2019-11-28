/*
 * @Author: wjy-mac
 * @Date: 2019-11-20 22:06:51
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-20 22:57:35
 * @Description: file content
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {
      return '成都';
    }
    if (value.length > 3) {
      return value.substr(0, 3);
    }
    return value;
  }

}
