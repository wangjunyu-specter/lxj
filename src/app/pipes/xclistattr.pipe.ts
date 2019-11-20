import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xclistattr'
})
export class XclistattrPipe implements PipeTransform {

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
      arr2.push(res)
    })
    if (arr2.length > 3 && !args) {
      arr2.length = 3;
      arr2.push('...')
    }
    return arr2;
  }

}
