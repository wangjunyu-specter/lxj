import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlytime'
})
export class OnlytimePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value.includes(' ')) {
      let time: any = value.replace(/(^\s*)|(\s*$)/g, "");
      time = time.split(' ');
      time = time.filter(x => {
        if (x) return true;
        else return false;
      })
      if (time[1].includes('：')) time[1] = time[1].replace(/：/g, ':')
      return time[1];
    }
    return value;
  }

}
