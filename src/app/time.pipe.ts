import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value * 1000);
    const Y = date.getFullYear()
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    const D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    if (args) {
      if (args[0] === 1) {
        return Y + args[1] + M + args[1] + D
      }
      return Y + args[0] + M + args[0] + D
    }
    return Y + '/' + M + '/' + D + ' ' + h + ":" + m + ':' + s;
  }

}
