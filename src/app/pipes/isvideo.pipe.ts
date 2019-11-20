import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isvideo'
})
export class IsvideoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return false;
    }
    const index = value.lastIndexOf('.');
    if (index < 0) {
      return false;
    }
    const type = value.substr(index + 1);
    if (type === 'mp4' || type === 'ogg' || type === 'WebM') {
      return true;
    }
    console.error(type);
    return false;
  }

}
