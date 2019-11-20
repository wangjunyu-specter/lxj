import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecontent'
})
export class DatecontentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    return null;
  }

}
