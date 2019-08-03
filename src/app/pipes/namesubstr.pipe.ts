import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namesubstr'
})
export class NamesubstrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    if (isNaN(Number(args)) || !value) {
      return value;
    } else {
      if (value.length > args) {
        return value.substr(0, args) + '...';
      }
    }
    return value;
  }

}
