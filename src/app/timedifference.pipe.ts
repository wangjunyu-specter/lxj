import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timedifference'
})
export class TimedifferencePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let start = value.replace(/(^\s*)|(\s*$)/g, "");
    let end: string = args.replace(/(^\s*)|(\s*$)/g, "");
    if (start.includes('：')) {
      start = start.replace(/：/g, ':');
    }
    if (start.includes('-')) {
      start = start.replace(/-/g, '/');
    }
    if (start.split(':').length - 1 < 2) {
      start += ':00'
    }
    if (end.includes('：')) {
      end = end.replace(/：/g, ':');
    }
    if (end.includes('-')) {
      end = end.replace(/-/g, '/');
    }
    if (end.split(':').length - 1 < 2) {
      end += ':00'
    }
    let now_time = Date.parse(new Date(start).toString());//当前出发的时间戳
    let end_time = Date.parse(new Date(end).toString());//指定时间的时间戳
    if (end_time < now_time) {
      [now_time, end_time] = [end_time, now_time]
    }
    var time_dis = end_time - now_time;
    const days=Math.floor(time_dis/(24*3600*1000));
    //计算出小时数
    const leave1=time_dis%(24*3600*1000);//计算天数后剩余的毫秒数
    const hours=Math.floor(leave1/(3600*1000));
    //计算相差分钟数
    const leave2=leave1%(3600*1000);//计算小时数后剩余的毫秒数
    const minutes=Math.floor(leave2/(60*1000));
    //计算相差秒数
    // const leave3=leave2%(60*1000);//计算小时数后剩余的毫秒数
    // const second = leave3/1000;
    let time: string = '';
    if (days) {
      time = days + '天'
    }
    if (hours) {
      time += hours + '小时'
    }
    if (minutes) {
      time += minutes + '分钟'
    }
    return time;
  }

}
