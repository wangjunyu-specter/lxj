import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'morenum'
})
export class MorenumPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let num = Number(value);
    return num > 100 ? '充足' : '余' + num;
  }

}
