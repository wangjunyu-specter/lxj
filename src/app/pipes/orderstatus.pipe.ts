/*
 * @Author: wjy-mac
 * @Date: 2019-10-17 15:00:01
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-21 23:17:56
 * @Description: 订单最终状态
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderstatus'
})
export class OrderstatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '未知';
    }
    const orderStatus = value['order_status'];
    const shippingStatus = value['shipping_status'];
    const payStatus = value['pay_status'];
    if ((orderStatus === '0' || orderStatus === '1') && shippingStatus === '0' && payStatus === '0') {
      return '未支付';
    } else if (orderStatus === '1' && shippingStatus === '0' && payStatus === '2') {
      if (args) {
        return '等待商家确认';
      } else {
        return '等待卖家发货';
      }
    } else if (orderStatus === '1' && shippingStatus === '3' && payStatus === '2') {
      if (args) {
        return '商家确认行程中';
      } else {
        return '配货中';
      }
    } else if (orderStatus === '5' && shippingStatus === '1' && payStatus === '2') {
      if (args) {
        return '等待出行中';
      } else {
        return '已发货';
      }
    } else if (orderStatus === '5' && shippingStatus === '2' && payStatus === '2') {
      return '已完成';
    } else if (orderStatus === '4' && shippingStatus === '0' && payStatus === '0') {
      return '已退货';
    } else if (orderStatus === '2' && shippingStatus === '0' && payStatus === '0') {
      return '已取消';
    } else if (orderStatus === '2' && shippingStatus === '0' && payStatus === '2') {
      return '已取消,待退款';
    }
  }

}
