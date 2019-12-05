import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-datecontent',
  templateUrl: './datecontent.component.html',
  styleUrls: ['./datecontent.component.scss'],
})
export class DatecontentComponent implements OnInit {
  // wrapperDIV: any;
  @Input() datelist: any[];
  @Input() noMonth: number[];
  settings: any;
  allDate: any;
  isactiveobj: string; // 当前选中日期
  @ViewChild(IonSlides, {static: true}) slide: IonSlides;
  montharr: any[];
  monthactive: number;
  @Output() setDate = new EventEmitter();
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.montharr = [];
    this.monthactive = 0;
    let opt = {
      startDate: '2019-1-10',
      endDate: '2019-4-11',
      data: [{
        date: '2019-1-11',
        price: '100',
        num: 10
      },
        {
          date: '2019-2-13',
          price: '100',
          num: 20
        },
        {
          date: '2019-3-15',
          price: '100',
          num: 15
        }],
      isactive: '2019-2-13'
    }
    if (this.datelist) {
      console.log(this.datelist)
      opt.startDate = this.datelist[0].date;
      opt.endDate = this.datelist[this.datelist.length - 1].date;
      opt.data = this.datelist;
      for (let i = 0, j = this.datelist.length; i < j; i++) {
        if (this.datelist[i].selected_key_ecshop68) {
          opt.isactive = this.datelist[i].date;
          console.log(opt.isactive)
          break;
        }
      }
    }
    this.init(opt);
    this.getDate();
    this.setActivemonth();
  }
  init(opt) {
    this.settings = opt;
  }
  getDate () {
    this.allDate = this.getAll(this.settings.startDate, this.settings.endDate);
  }
  getAll(begin, end) { // 获取两个日期间的所有日期
    let arrobj = [];
    const bq = getDatebq(begin);
    let myBegin = begin.split(bq)[0] + '-' + begin.split(bq)[1] + '-' + 1;
    let myEnd = getFirstAndLastMonthDay(end.split(bq)[0], end.split(bq)[1]);
    // let dateArr = [];
    let ab = myBegin.split(bq);
    let ae = myEnd.split(bq);
    let db = new Date();
    // db.setUTCFullYear(ab[0].toString(), (ab[1] - 1).toString(), ab[2]);
    db.setUTCFullYear(Number(ab[0]), Number(ab[1]) - 1, Number(ab[2]))
    let de = new Date();
    // de.setUTCFullYear(ae[0].toString(), (ae[1] - 1).toString(), ae[2].toString());
    de.setUTCFullYear(Number(ae[0]), Number(ae[1]) - 1, Number(ae[2]))
    let unixDb = db.getTime();
    let unixDe = de.getTime();
    let obj: any = {};
    for (let k = unixDb; k <= unixDe;) {
      // dateArr.push(DateFormat(new Date(parseInt(k))));
      const date = DateFormat(new Date(k));
      console.log(date.month)
      if (this.noMonth && !this.noMonth.includes(date.month)) {
        k = k + 24 * 60 * 60 * 1000;
        continue;
      }
      if (!obj.key) {
        this.montharr.push(date.month)
        obj.key = date.month;
        obj.arr = setArry(date.year, date.month, date.week);
      } else if (obj.key !== date.month) {
        this.montharr.push(date.month)
        arrobj.push(obj.arr);
        obj = {};
        obj.key = date.month;
        obj.arr = setArry(date.year, date.month, date.week);
      }
      // if (!arrobj[date.month]) {
      //   arrobj[date.month] = setArry(date.year, date.month, date.week);
      // }
      // console.log(DateFormat(new Date(k)))
      // console.log(date.year + '-' + date.month + '-' + date.day)
      const moreobj = this.pushTag(date.year + '-' + date.month + '-' + date.day)
      if (moreobj) {
        Object.assign(date, moreobj);
      }
      obj.arr.push(date);
      // dateArr.push(DateFormat(new Date(k)))
      k = k + 24 * 60 * 60 * 1000;
    }
    console.log(this.montharr)
    console.log(this.settings.isactive)
    arrobj.push(obj.arr);
    return arrobj;
  }
  // 初始化时设置选中月份
  setActivemonth() {
    let month = this.settings.isactive.split('-');
    month = month.filter(res => {
      return res;
    })
    let nowmonth = month[1];
    for (let i = 0, j = this.montharr.length; i < j; i++) {
      if (this.montharr[i] === Number(nowmonth)) {
        console.log(i)
        this.toggleSlide(i);
        break;
      }
    }
    console.log(month);
  }
  pushTag (yearMonthDay) {
    for (let i = 0; i < this.settings.data.length; i++) {
      if (yearMonthDay === this.settings.data[i].date) {
        if (yearMonthDay === this.settings.isactive) {
          // this.settings.data[i].active = true;
          this.isactiveobj = yearMonthDay;
        }
        this.settings.data[i].disabled = true;
        return this.settings.data[i];
      }
    }
    return null;
  }
  seleteDay (date) {
    if (!date.num) {
      return false;
    }
    console.log(date);
   this.isactiveobj = date.year + '-' + date.month + '-' + date.day;
   // this.setDate(date.id);
    this.setDate.emit(date.id);
  }
  changemoth ($event) {
    this.slide.getActiveIndex().then(index => {
      console.log(index);
      this.monthactive = index;
    });
  }
  toggleSlide (index: number) {
    this.slide.slideTo(index);
  }
}


function getFirstAndLastMonthDay(year, month) { // 获取当前月的最后一天
  let day = new Date(year, month, 0);
  let lastdate = year + '-' + month + '-' + day.getDate(); // 获取当月最后一天日期
  return lastdate;
}
function DateFormat(obj) {
  let mouth = (obj.getMonth() + 1)>=10?(obj.getMonth() + 1):((obj.getMonth() + 1));
  let day = obj.getDate()>=10?obj.getDate():(obj.getDate());
  let week = new Date(obj.getFullYear() + '/' + mouth + '/' + day).getDay()
  return ({year: obj.getFullYear(), month: mouth, day: day, week: week}); // 返回日期。
}

function setArry (year: number, month: number, week: number): any[] {
  let objarr: any = [];
  for (let i = 0; i < week; i++) {
    const obj = {
      year: year,
      month: month,
      // day: date - i,
      day: '',
      week: week - i - 1
    };
    objarr.unshift(obj);
  }
  // new Date('2019','02',0).getDate()
  return objarr;
}
function getDatebq (str: string) {
  let bq: string;
  if (str.indexOf('/') > -1) {
    bq = '/';
  } else if (str.indexOf('-') > -1) {
    bq = '-';
  } else {
    bq = '.';
  }
  return bq;
}
