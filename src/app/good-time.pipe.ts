import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goodTime'
})
export class GoodTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    let arr = [];
    if (value.indexOf('/') > -1) {
      arr = value.split('/');
    } else if (value.indexOf('-') > -1) {
      arr = value.split('-');
    }
    let month: string;
    let day: string;
    if (arr.length === 3) {
      month = arr[1];
      day = arr[2];
    } else {
      month = arr[0];
      day = arr[1];
    }
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return month + '/' + day;
  }

}
