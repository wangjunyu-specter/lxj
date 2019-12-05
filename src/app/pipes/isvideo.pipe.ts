/*
 * @Author: wjy-mac
 * @Date: 2019-06-30 02:34:48
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-05 17:16:46
 * @Description: file content
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isvideo'
})
export class IsvideoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return false;
    }
    const index = value.lastIndexOf('.');
    if (index < 0) {
      return false;
    }
    const type = value.substr(index + 1);
    if (type === 'mp4' || type === 'ogg' || type === 'WebM' || type === 'm3u8') {
      return true;
    }
    console.error(type);
    return false;
  }

}
