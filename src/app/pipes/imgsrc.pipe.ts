/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-09 16:24:11
 * @Description: file content
 */
import { Pipe, PipeTransform } from '@angular/core';
import { HttpService } from '../services/http.service';
@Pipe({
  name: 'imgsrc'
})
export class ImgsrcPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    console.log(args);
  // : todo 暂未实现    所有img src pipe
    if (!value) {
      return '../../assets/mrtx.jpg';
    }
    // value = '/mobile/images/201908/thumbyyuserhead161564935022041.jpg'
    if (value.startsWith('http') || value.startsWith('data:image') || value.startsWith('file:///') || value.startsWith('cdvfile://')) {
      return value;
    } else if (value.startsWith('/mobile') && args && args.endsWith('mobile/')) {
      return args + value.substring(7);
    } else if (value.startsWith('./../')) {
      return args + value.substring(5);
    } else {
      return args + value;
    }
  }

}
