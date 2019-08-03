import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xccontentsplit'
})
export class XccontentsplitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }
    value = value.replace(/\r?\n|\r/g, "")
    const arr = value.split(' ');
    const arr2 = [];
    arr.map(res => {
      if (!res) {
        return false;
      }
      res = res.replace(/(\[\d*\])/g, '');
      arr2.push(res.split(':'))
    })

    return arr2;
  }

}
