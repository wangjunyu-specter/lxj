import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yhqtitle'
})
export class YhqtitlePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '优惠券自动抵扣';
    }
    if (value.indexOf('满') > -1) {
      return '满减';
    } else if (value.indexOf('折') > -1) {
      return '折扣';
    }
    return value || '优惠券自动抵扣';
  }

}
