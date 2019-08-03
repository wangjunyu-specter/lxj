import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oldtonow'
})
export class OldtonowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return getTimeUntilNow(value);
    return null;
  }

}
function getTimeUntilNow(mss: number) {
  const days = parseInt((mss / (1000 * 60 * 60 * 24)).toString(), 10);
  if (days > 0) {
    return days + '天前';
  }
  const hours = parseInt(((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString(), 10);
  if (hours > 0) {
    return hours + '小时前';
  }
  const minutes = parseInt(((mss % (1000 * 60 * 60)) / (1000 * 60)).toString(), 10);
  if (minutes > 0) {
    return minutes + '分钟前';
  }
  const seconds = (mss % (1000 * 60)) / 1000;
  return '刚刚 ';
}
