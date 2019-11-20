import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goodsattr'
})
export class GoodsattrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    value = value.replace(/\[\S*\]/g, '');
    console.log(value.length)
    if (value.length > 15) {
      return value.slice(0, 15);
    }
    return value;
  }

}
