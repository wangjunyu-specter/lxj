import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carorother'
})
export class CarorotherPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == 0) {
      return '飞机'
    } else if (value == 1) {
      return '火车/高铁'
    } else if (value == 2) {
      return '汽车'
    } else {
      return '游轮'
    }
  }

}
