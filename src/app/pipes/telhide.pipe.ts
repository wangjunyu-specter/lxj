import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telhide'
})
export class TelhidePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }
    const start = value.substr(0, 3);
    const end = value.substr(-4);
    return start + '****' + end;
  }

}
