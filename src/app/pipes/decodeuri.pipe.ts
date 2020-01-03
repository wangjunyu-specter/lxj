/*
 * @Author: wjy-mac
 * @Date: 2019-06-21 22:20:22
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-06 13:42:17
 * @Description: file content
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeuri'
})
export class DecodeuriPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    if (value) {
      try {
        return decodeURIComponent(value);
      } catch(err) {
        // value = value.replace(/%/g, '%25');
        console.log(value);
        return "<评论内容已被过滤>";
      }
    }
    return null;
  }

}
