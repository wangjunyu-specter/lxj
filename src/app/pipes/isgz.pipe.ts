import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isgz'
})
export class IsgzPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    console.log(args)
    if (!args) {
      return false;
    }
    if (args.includes(value)) {
      return false;
    }
    return true;
  }

}
