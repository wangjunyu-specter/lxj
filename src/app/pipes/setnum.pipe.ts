import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setnum'
})
export class SetnumPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value || isNaN(Number(value))) {
      return 0;
    }
    const num = Number(value);
    if (num > 10000) {
      const w = Math.floor(num / 10000);
      const y = num % 10000;
      let str = w.toString();
      if (y > 0) {
        const q = Math.floor(y / 1000);
        if (q > 0) {
          str += '.' + q + '+';
        }
      }
      return str + '万'
    }
    return value;
  }

}
