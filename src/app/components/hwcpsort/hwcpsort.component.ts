import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange} from '@angular/core';
import {ActionSheetController} from "@ionic/angular";

@Component({
  selector: 'app-hwcpsort',
  templateUrl: './hwcpsort.component.html',
  styleUrls: ['./hwcpsort.component.scss'],
})
export class HwcpsortComponent implements OnInit {
  months: any[]; // 月份
  mindate: string; // 当前选中月份最小
  ysmindate: string; // 所有能选中的最小日期
  nowYear: string;
  nowfulldate: string;
  startDate: string; // 出发时间
  endData: string; // 返程时间
  setShow: boolean// 是否显示条件
  @Input() pricearea: any[]; // 价格区间
  settitle: string; // 当前选中下标题
  ishwactive: number; // 户外当前选中
  ishwclick: number; // 户外当前选中
  @Input() allAddress: object[]; // 目的地
  allAddress2: object;// 地址全部选项
  pricearea2: any[]; // 当后台没有设置价格区间时使用
  oldAddresactive: string[]; // 上一次选中地址序号 1 表示国家， 第二位表示城市序号位
  @Input() togglelist: any[]; // 排序列表
  @Input() setCloseattr: any[]; // 监听是否点击背景
  @Input() changeAddress: boolean; // 是否点击热门地点推荐
  @Output() sethwActivesortfn = new EventEmitter(); // 显示综合排序
  // @Output() seletePrice = new EventEmitter();
  // @Output() seleteTime = new EventEmitter();
  @Output() isSetshowbg = new EventEmitter(); // 设置显示背景
  @Output() seleteend = new EventEmitter(); // 选择完毕后触发
  @Input() jtjyList: object[];
  @Input() tjcity: object[];
  jtjyList2: object[]; // 当后台未取到几天几夜时使用
  formData: object;
  @Input() suppid: string;
  constructor(public actionSheetController: ActionSheetController) {
    this.ishwactive = 1;
    this.setMonth();

    this.resetPrice();
    this.setJtjy();
    this.allAddress2 = {
      name: '不限',
      active: true
    }
  }
  setMonth() {
    const myDate = new Date();//获取系统当前时间
    const nowMonth = myDate.getMonth() + 1;
    let nextMonth;
    if (nowMonth == 12) {
      nextMonth = 1;
    } else {
      nextMonth = nowMonth + 1;
    }
    let endMonth;
    if (nextMonth == 12) {
      endMonth = 1;
    } else {
      endMonth = nextMonth + 1;
    }
    this.months = [
      {
        name: nowMonth + '月',
        id: 1,
        active: false
      },
      {
        name: nextMonth + '月',
        id: 2,
        active: false
      },
      {
        name: endMonth + '月',
        id: 3,
        active: false
      },
      {
        name: endMonth + '月后',
        id: 4,
        active: false
      }
    ]
    this.nowYear = myDate.getFullYear().toString();
    const nowdate = myDate.getDate();
    const nowfullmonth = nowMonth < 10 ? '0' + nowMonth : nowMonth;
    this.nowfulldate = nowdate < 10 ? '0' + nowdate : nowdate.toString();
    this.mindate = this.nowYear + '-' + nowfullmonth + '-' + this.nowfulldate;
    this.ysmindate = this.mindate;
  }
  resetPrice() {
    if (!this.pricearea) {
      console.log('进来了')
      this.pricearea2 = [{
        end: 0,
        price_range: "全部",
        selected: 1,
        start: 0
      }, {
        end: 500,
        price_range: "0-500",
        selected: 0,
        start: 0,
      }, {
        end: 1000,
        price_range: "501-1000",
        selected: 0,
        start: 501,
      }, {
        end: 2000,
        price_range: "1001-2000",
        selected: 0,
        start: 1001,
      }, {
        end: "999999999",
        price_range: "2000以上",
        selected: 0,
        start: 2000
      }]
    } else {
      this.pricearea.map((res, index) => {
        if (index === 0) {
          res.selected = 1;
        } else {
          res.selected = 0;
        }
      })
    }
  }
  setJtjy() {
    if (!this.jtjyList) {
      this.jtjyList2 = [
        {
          attr_value: '全部',
          active: true
        },
        {
          attr_value: '3天2夜',
          active: false
        },
        {
          attr_value: '4天3夜',
          active: false
        },
        {
          attr_value: '5天4夜',
          active: false
        }
      ]
    }
  }
  ngOnInit() {
    this.formData = {};
  }
  ngOnChanges(changes:{[setCloseattr:string]: SimpleChange }) {
    console.log(changes)
    if (changes['setCloseattr']) {
      this.setShow = false;
    }
    if (changes['changeAddress']) {
      this.setAddress({name: '不限'})
    }
  }
  async showzhpx() {
    if (this.ishwactive !== 1) {
      this.ishwactive = 1;
      const item = this.togglelist[0];
      this.sethwActivesortfn.emit(item);
      return false;
    }
    let arr = [];
    for (let i = 0, j = this.togglelist.length; i < j; i++) {
      const item = this.togglelist[i];
      if(item.name == '价格' && Number(this.suppid) != 0) {
        continue;
      }
      const obj: object = {
        text: item.name,
        name: item.id,
        handler: () => {
          this.ishwactive = 1;
          // this.sethwActivesort(item);
          this.sethwActivesortfn.emit(item);
        }
      }
      arr.push(obj);
    }
    const obj = {
      text: '取消',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    };
    arr.push(obj)
    const actionSheet = await this.actionSheetController.create({
      mode: 'md',
      buttons: arr
    });
    await actionSheet.present();
  }

  showoter (type: number) {
    if (this.ishwclick == type && this.setShow) {
      this.setShow = false;
      return false;
    }
    this.ishwclick = type;
    this.setShow = true;
    this.isSetshowbg.emit(true);
    if (type === 4) {
      this.settitle = '出发日期'
    } else if (type === 3) {
      this.settitle = '几天几夜'
    } else if (type === 2) {
      this.settitle = '目的地'
    }
  }
  setMonths ($event) {
    console.log($event)
    this.startDate = '';
    this.endData = '';
    this.months.map(res => {
      if (res.id === $event.id) {
        res.active = true;
        let smonth: string;
        if (!res.name.includes('后')) {
          smonth = res.name.substring(0, res.name.length - 1);
        } else {
          smonth = res.name.substring(0, res.name.length - 2);
          let month = Number(smonth) + 1;
          if (month > 12) {
            month = 1;
          }
          smonth = month.toString();
        }
        const month = Number(smonth) < 10 ? '0' + smonth : smonth;
        if (res.id === 1) {
          this.mindate = this.nowYear + '-' + month + '-' + this.nowfulldate;
        } else {
          this.mindate = this.nowYear + '-' + month + '-01';
        }
        // this.startDate = this.mindate;
        console.log(this.mindate)
      } else {
        res.active = false;
      }
    })
    const obj = {
      start: this.mindate
    }
    if(!this.months[this.months.length - 1].active) {
      const day = getCurrentMonthLast(this.mindate);
      obj['end'] = day;
      console.log(day)
    } else {
      const day = getCurrentMonthLast(this.mindate, 1);
      obj['end'] = day;
    }
    this.setTimefn(obj);
  }
  setTimefn(obj) {
    console.log(obj);
    this.formData['start'] = obj['start'] || '';
    this.formData['end'] = obj['end'] || '';
  }
  seleteTimefn() {
    this.setShow = false;
    this.ishwactive = this.ishwclick;
    this.changeend();
  }
  setJtjyfn(data) {
    console.log(data);
    this.setShow = true;
    this.ishwactive = 3;
    let arr: object[];
    if (this.jtjyList) {
      arr = this.jtjyList;
    } else {
      arr = this.jtjyList2;
    }
    arr.map(res => {
      if (res['attr_value'] === data.name) {
        res['active'] = true;
        let name: string;
        if (res['attr_value'] == '全部') {
          name = '';
        } else {
          name = res['attr_value'];
        }
        this.formData['time'] = name;
      } else {
        res['active'] = false;
      }
    })
  }
  changestart() {
    if(this.startDate) {
      this.endData = '';
      this.formData['end'] = '';
      const start = timepase(this.startDate);
      const start2 = start.replace(/\//g, '-');
      this.formData['start'] = start2;
    }
  }
  chengeendtime() {
    console.log(this.mindate)
    if (this.endData) {
      const end = timepase(this.endData);
      const end2 = end.replace(/\//g, '-');
      this.formData['end'] = end2;
      if (!this.startDate) {
        this.formData['start'] = this.mindate;
      }
    }
  }
  czTimefn() {
    this.startDate = '';
    this.endData = '';
    this.mindate = this.ysmindate;
    this.formData['startprice'] = 0;
    this.formData['endprice'] = 0;
    this.formData['start'] = '';
    this.formData['end'] = '';

    this.resetPrice();
    this.months.map(res => {
      res.active = false;
    });
  }
  changeend() { // 选择完毕
    // this.seleteTime.emit(this.formData);
    // this.seletePrice.emit(this.formData);
    this.seleteend.emit(this.formData);
  }
  setPricearea ($event) {
    console.log($event)
    // let isSet = false; // 防止点击相同选项处罚请求
    const obj = {
      start: 0,
      end: 0
    }
    if (this.pricearea) {
      this.pricearea.map(res => {
        if (res.price_range === $event.id) {
          if (res.selected !== 1) {
            // isSet = true;
            res.selected = 1;
            obj.start = res.start;
            obj.end = res.end;
          }
          // this.ishwactive = 3;
        } else {
          res.selected = 0;
        }
      })
    } else {
      this.pricearea2.map(res => {
        if (res.price_range === $event.id) {
          if (res.selected !== 1) {
            // isSet = true;
            res.selected = 1;
            obj.start = res.start;
            obj.end = res.end;
          }
          this.ishwactive = 3;
        } else {
          res.selected = 0;
        }
      })
    }
    if (obj.end || obj.end == 0) {
      this.formData['startprice'] = obj.start;
      this.formData['endprice'] = obj.end;
    }
    // this.setShow = false;
    // if (isSet) {
    //   this.changeend()
    // }
  }
  setAddress ($event, index?, j?) {
    console.log($event)
    console.log(this.formData)
    if (!this.formData) {
      this.formData = {};
    }
    if ($event.name == '不限') {
      this.formData['address'] = '';
      this.allAddress2['active'] = true;
    } else {
      this.allAddress2['active'] = false;
      this.formData['address'] = $event.id;
    }
    if (index || index == 0) {
      if (!this.oldAddresactive || this.oldAddresactive.length == 0) {
        this.oldAddresactive = [index, j];
        this.allAddress[index]['arr'][j].active = true;
        this.tjcity.map(res =>{
          res['active'] = false;
        })
      } else {
        if (this.oldAddresactive[0] == index && this.oldAddresactive[1] == j) {
          return false;
          // if (this.allAddress[index]['arr'][j].active) {
          //   this.allAddress[index]['arr'][j].active = false;
          // } else {
          //   this.allAddress[index]['arr'][j].active = true;
          // }
        } else {
          this.allAddress[index]['arr'][j].active = true;
          this.allAddress[this.oldAddresactive[0]]['arr'][this.oldAddresactive[1]].active = false;
          this.oldAddresactive = [index, j];
        }
      }
    } else {
      if (this.oldAddresactive && this.oldAddresactive.length > 0) {
        this.allAddress[this.oldAddresactive[0]]['arr'][this.oldAddresactive[1]].active = false;
        this.oldAddresactive.length = 0;
      } else {
        if (this.tjcity) {
          this.tjcity.map(res =>{
            res['active'] = false;
          })
        }
      }
      if ($event['name'] !== '不限') {
        this.tjcity.map(res => {
          if (res['name'] == $event.name) {
            res['active'] = true;
            return false;
          }
        })
      }
    }
  }
}

function timepase(time) {
  const arr = time.split('T');
  const time2 = arr[0].replace(/-/g, '/');
  return time2;
}
function getDay(time, time2) {
  const dateBegin = new Date(time);
  const dateEnd = new Date(time2);
  const dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
  const dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
  return dayDiff;
}

//获取指定时间的最后一天
function getCurrentMonthLast (date, type?) {
  const endDate = new Date(date); //date 是需要传递的时间如：2018-08
  let month = endDate.getMonth();
  const nextMonth = ++month;
  const nextMonthFirstDay = new Date(endDate.getFullYear(), nextMonth, 1);
  const oneDay = 1000 * 60 * 60 * 24;
  const dateString = new Date(Number(nextMonthFirstDay) - Number(oneDay));
  let endtime = dateString.toLocaleDateString(); //toLocaleDateString() 返回 如：2018/8/31
  console.log(dateString) //Wed Oct 31 2018 00:00:00 GMT+0800 (中国标准时间)
  if (!endtime.includes('-')) {
    endtime = endtime.replace(/\//g, '-');
  }
  const arr = endtime.split('-');
  if (Number(arr[1]) < 10) {
    arr[1] = '0' + arr[1];
  }
  if (Number(arr[2]) < 10) {
    arr[2] = '0' + arr[2];
  }
  if (type) {
    arr[0] = (Number(arr[0]) + 3).toString();
  }
  endtime = arr.join('-');
  return endtime;
}