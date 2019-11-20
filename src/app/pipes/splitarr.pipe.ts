import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitarr'
})
export class SplitarrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value || typeof value != 'string') {
      return value;
    }
    if (value.includes(' ')) {
      return value.split(' ');
    } else if (value.includes(',')) {
      return value.split(',')
    } else if (value.includes('|')) {
      return value.split('|')
    } else {
      return value.split('，')
    }
    return '';
  }

}
