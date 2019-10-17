/*
 * @Author: wjy-mac
 * @Date: 2019-10-11 22:11:12
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-17 16:19:54
 * @Description: file content
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xcstatus'
})
export class XcstatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    } else if (value === '已确认 已付款 已发货') {
      return '待出行';
    } else if (value === '已确认 已付款 未发货' || value === '已确认 已付款 配货中') {
      return '等待商家确认';
    } else if (value === '已确认 已付款 收货确认') {
      return ' 已完成';
    } else if (value === '已取消 未付款 未发货') {
      return '已取消';
    } else if (value === '未确认 未付款 未发货' || value === '已确认 未付款 未发货') {
      return '待付款';
    } else if (value === '已取消 已付款 未发货') {
      return '已取消,待退款';
    } else {
      return value;
    }
  }

}
