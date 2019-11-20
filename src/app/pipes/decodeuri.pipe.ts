import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeuri'
})
export class DecodeuriPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return decodeURIComponent(value);
    }
    return null;
  }

}
