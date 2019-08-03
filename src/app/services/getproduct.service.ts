import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ProductcontentlistService } from './productcontentlist.service';
// import { SupplierlistService } from './supplierlist.service';
import {AlertController, NavController} from "@ionic/angular";
import { YhtclistService } from './yhtclist.service';

// import {ShopContentService} from "./shop-content.service";
// import {timeoutWith} from "rxjs/internal/operators";
// 获取产品详情
@Injectable({
  providedIn: 'root'
})
export class GetproductService {
  data: any;
  gxb: string[]; // 属性关系表
  jtjygxb: string[]; // 几天几夜id表
  tctypegxb: string[]; // 套餐类型id表
  startTimebxg: string[]; // 出发时间id表
  activeselct: string; // 选中关系表
  attrNum: any[]; // 属性数量
  activeData: any; // 选中的数据
  id: string;
  activeStartime: any;
  constructor(public http: HttpService, public productList: ProductcontentlistService,
              // private supplierlist: SupplierlistService,
              public alertController: AlertController,
              private yhtcfn: YhtclistService,
              private nav: NavController) {
    this.data = {
      topData: {},
      xsprice: {},
      bannerList: []
    };
    this.jtjygxb = [];
    this.startTimebxg = [];
    this.tctypegxb = [];
  }

  /**
   * 获取产品
   * @param {string} id
   * @returns {Promise<any>}
   */
  async getProduct (id: string, isre?) {
    this.id = id;
    if (!isre) {
      const hasdata = this.productList.getProduct(id);
      if (hasdata) {
        this.data = hasdata;
        return this.data;
      }
    } else {
      this.productList.deleteOne(id);
    }

    const res = await this.getHttp(id);
    if (!res) {
      throw new Error('没有产品');
    }
    const data = res['data'];
    this.data = {
      topData: {},
      xsprice: {},
      bannerList: []
    };
    this.data.id = data.id;
    this.data.topData.tags = data.tags;
    this.data.topData.name = data.goods.goods_name;
    this.data.topData.is_best = data.goods.is_best;
    this.data.topData.is_hot = data.goods.is_hot;
    this.data.onsale = data.goods.is_on_sale;
    this.data.isdelete = data.goods.is_delete;
    this.data.suppId = data.goods.supplier_id;
    this.data.topData.shop_price = data.goods.shop_price;
    this.data.topData.rank_price = data.goods.rank_price;
    this.data.topData.des = '已售' + data.order_num;
    this.data.topData.market_price = data.goods.market_price;
    this.data.goods_sn = data.goods.goods_sn;
    this.data.goods_brand = data.goods.goods_brand;
    this.data.fw = data.fw;
    this.data.goods_shfw = data.goods.goods_shfw;
    this.data.goods_brief = data.goods.goods_brief;
    this.data.ptjgsm = data.ptjgsm;
    this.data.cztc = data.package_goods_list_120;
    this.data.bonusList = data.bonus;
    if (data.package_goods_list) {
      this.yhtcfn.setList(data.package_goods_list);
    }

    this.data.issc = data.issc || 2;
    this.data.properties = data.properties;
    this.data.related_goods = data.related_goods;
    // if (data['catlist'].includes('366')) {
    //   this.data['ishw'] = true;
    // }
    if (data.goods.ishw == 2) {
      this.data['ishw'] = true;
    } else {
      this.data['ishw'] = false;
    }
    // if (data.shopconfig) {
    //   data.shopconfig.yj = Number(data.shopconfig.yj);
    //   this.supplierlist.setList(data.shopconfig);
    // }
    this.data.shopconfig = data.shopconfig || null;
    this.data.ptzygoods = data.ptzygoods || null;

    if (data.goods.buymax && data.goods.buymax_end_date && data.goods.buymax > 0) {
      let date = Date.parse(new Date().toString());
      if (date / 1000 <= data.goods.buymax_end_date) {
        this.data.topData.buymax = data.goods.buymax;
      }
    }
    this.data.xsprice.promote_price = data.goods.promote_price;
    this.data.xsprice.promote_end_date = data.goods.promote_end_date * 1000;
    this.data.promotion = data.promotion;
    this.data.volume_price_list = data.volume_price_list;
    this.gxb = data.prod_exist_arr;
    this.attrNum = data.prod_exist_price;
    data.prod_exist_price.map(res => {
      if (res.num == 0) {
        const attr = '|' + res.attr.join('|') + '|';
        const index = this.gxb.findIndex((value) => {
          return value == attr;
        })
        this.gxb.splice(index, 1);
      }
    })
    // this.data.attribute = data.specification;
    if (this.data['ishw']) {
      this.data.hbxx = data.hbxx;
      this.data.xclx = data.jtjy;
      this.data.fybh = data.goods.fybh;
      this.data.fybbh = data.goods.fybbh;
      this.data.gmsm = data.goods.gwsm;
      this.data.gmxz = data.gmxz;
      this.data.tksm = data.tksm;
      this.data.tkgx = data.isrefund;
      this.setTc(data.specification, data.prod_exist_arr);
    } else {
      this.data.yf = data.yf;
      this.data.goods_thumb = data.goods['goods_thumb'];
      this.data.specification = data.specification;
      this.data.gxb = this.gxb;
      if (this.data.specification.length > 0) {
        const arr2: string[] = [];
        if (this.gxb[0]) {
          const gx: string = this.gxb[0];
          const arr: string[] = gx.split('|');
          arr.map((res: string) => {
            if (res) {
              arr2.push(res);
            }
          });
        }
        const bool: boolean = arr2.length > 0;
        let mrseletestr: string;
        for (let i = 0, j = this.data.specification.length; i < j; i++) {
          const item = this.data.specification[i];
          for (let ii = 0, jj = item.values.length; ii < jj; ii++) {
            const id: string = item.values[ii].id;
            if (bool) {
              if (arr2.includes(id)) {
                if (!mrseletestr) {
                  mrseletestr = item.name + ':' + item.values[ii]['label'];
                } else {
                  mrseletestr += ',' + item.name + ':' + item.values[ii]['label'];
                }
                break;
              }
            } else {
              arr2.push(id);
              if (!mrseletestr) {
                mrseletestr = item.name + ':' + item.values[ii]['label'];
              } else {
                mrseletestr += ',' + item.name + ':' + item.values[ii]['label'];
              }
              break;
            }
          }
        }
        this.data.mrseletestr = mrseletestr;
        this.data.mrattrarr = arr2;
      }
    }

    for (let i = 0, j = data['pictures'].length; i < j; i++) {
      let src = data['pictures'][i].img_url;
      src = src.replace(/.\/..\//g, '');
      this.data.bannerList.push(src);
    }
    this.data.twcontent = data['goods'].goods_desc.replace(/<img(.*?)src=\"(.*?)\"(.*?)>/ig, (res) => {
      if (/height="\d*"/ig.test(res)) {
        res = res.replace(/height="\d*"/ig, '')
      }
      if (/width="\d*"/ig.test(res)) {
        res = res.replace(/width="\d*"/ig, '')
      }
      if (/http/ig.test(res)) {
        return res;
      } else {
        return res.replace(/(src="(\/)*)/g, 'src="' + this.http.zdomain);
      }
    })
    this.data.pinglunnum = data['pinglun'];
    this.data.disabled = false;
    this.data.persenNum = 1;
    this.productList.setProduct(this.data, id);
    return this.data;
  }
  async getHttp (id) {
    return new Promise((resolve, reject) => {
      this.http.getDataloading(this.http.getGoods, {id: id}).subscribe(res => {
        // if (res)
        resolve(res);
      }, err => {
        console.error(err)
        this.presentAlertConfirm(err['msg'])
        // this.nav.back();
        // this.alertController.getTop().

        reject(false);
      });
    });
  }
  async presentAlertConfirm(msg) {
    const alert = await this.alertController.create({
      header: '提示!',
      message: msg,
      buttons: [
        {
          text: '确定',
          handler: () => {
            this.nav.back();
          }
        }
      ]
    });

    await alert.present();
  }
  /**
   * 设置属性规格
   * @param {any[]} attribute
   * @param {any[]} atte
   * @returns {any}
   */
  setTc(attribute: any[], atte: any[]) {
    const obj = this.setAttr(attribute);
    const timearr = obj.timearr; // 所有出发时间
    const endattr = obj.endattr; // 除去出发时间的所有属性
    let arr = []; // 未处理的出发日期属性
    let isactive: boolean = false;
    const montharr = [];
    for (let i = 0, j = timearr.length; i < j; i++) {
      if (!timearr[i]) {
        break;
      }
      const isnowdata = this.setYMD(timearr[i]);
      if (isnowdata.isnow) { // 判断是否过期 过期删除本次数据
        timearr[i].date = isnowdata.date;
        timearr[i].label = isnowdata.label;
      } else {
        this.deleteAttr(timearr[i].id);
        timearr.splice(i, 1);
        i--;
        continue;
      }
      this.startTimebxg.push(timearr[i].id);
      timearr[i].num = this.getStarttimeprice(timearr[i].id);
      const month = this.getMonth(timearr[i].label)
      if (!montharr.includes(month, 0)) {
        montharr.push(month);
      }
      if (timearr[i].selected_key_ecshop68 == 1) {
        isactive = true;
      }
      const data = timearr[i].id;
      const obj = timearr[i];
      for (let ii = 0, jj = atte.length; ii < jj; ii++) {
        if (atte[ii].indexOf('|' + data + '|' ) > -1) {
          if (!obj.targetattr) {
            obj.targetattr = [];
          }
          obj.targetattr.push(atte[ii]);
          obj.minprice = this.getMinprice(endattr, atte[ii].replace('|' + data, ''), Number(obj.price), obj.minprice);
        }
      }
      arr.push(obj);
    }
    this.data.timetc = this.sortArr(arr); // 出发时间
    if (!isactive && this.data.timetc.length > 0) {
      this.data.timetc[0].selected_key_ecshop68 = 1;
    }
    this.data.month = montharr;
    //初始化属性
    const attr = this.setTimetc();
    this.setActiveattr(attr);
    this.clickother();
  }
  getStarttimeprice (id: string) {
    let num = 0;
    for (let i = 0, j = this.attrNum.length; i < j; i++) {
      if (this.attrNum[i].attr.includes(id)) {
        num += Number(this.attrNum[i].num);
      }
    }
    return num;
  }
  /**
   * 去掉过期属性
   * 设置date属性
   * 转化过渡标签'/'
   * @param timearr
   */
  setYMD (res) {
    const ndate = new Date;
    const nyear = ndate.getFullYear();
    const nmonth = ndate.getMonth() + 1;
    const nday = ndate.getDate();
    let label, date;
    let isnow: boolean = true;
    const bq: string = getDatebq(res.label);
    const arr = res.label.split(bq);
    let year: string;
    let month: string;
    let day: string;
    if (arr.length === 3) {
      year = arr[0];
      month = setDate(arr[1]);
      day = setDate(arr[2]);
    } else {
      year = ndate.getFullYear().toString();
      month = setDate(arr[0]);
      day = setDate(arr[1]);
    }
    label = year + '-' + month + '-' + day;
    if (!this.ratiosize(label, nyear + '-' + nmonth + '-' + nday)) {
      isnow = false;
    }
    date = Number(year) + '-' + Number(month) + '-' + Number(day);
    return {label: label, date: date, isnow: isnow};
  }
  deleteAttr (id) {
    // console.log(id);
    for (let i = 0, j = this.gxb.length; i < j; i++) {
      if (!this.gxb[i]) break;
      if (this.gxb[i].indexOf(id) > -1) {
        this.gxb.splice(i, 1);
        i--;
      }
    }
  }
  /**
   * 获取对应属性
   * @param attr
   */
  setAttr(attr) {
    // let zsIndex = -1;
    // let timeIndex = -1;
    let timearr = [];
    let endattr = [];
    for (let i = 0, j = attr.length; i < j; i++) {
      if (!attr[i]) {
        break;
      }
      if (attr[i].name.indexOf('出发时间') > -1) {
        timearr = attr.splice(i, 1)[0].values;
        i--;
        continue;
      }
      endattr = [...endattr, ... attr[i].values];
      if (attr[i].name.indexOf('住宿套餐') > -1) {
        // zsIndex = i;
        this.data.zstc = attr.splice(i, 1)[0];
        for (let ii = 0, jj = this.data.zstc.values.length; ii < jj; ii++) {
          this.tctypegxb.push(this.data.zstc.values[ii].id);
        }
        i--;
      } else if (attr[i].name.indexOf('几天几夜') > -1) {
        // timeIndex = i;
        this.data.jtjy = attr.splice(i, 1)[0];
        for (let ii = 0, jj = this.data.jtjy.values.length; ii < jj; ii++) {
          this.jtjygxb.push(this.data.jtjy.values[ii].id);
        }
        i--;
      }
    }
    this.data.attrList = attr;
    return {
      endattr: endattr,
      timearr: timearr
    };
  }

  /**
   * 获取有哪些月份
   * @param {string} str
   * @returns {number}
   */
  getMonth(str: string): number {
    const bq: string = getDatebq(str);
    const arr = str.split(bq);
    let month = 1;
    if (arr.length === 3) {
      month = Number(arr[1]);
    } else if (arr.length === 2) {
      month = Number(arr[0]);
    }
    return month;
  }
  /**
   * 获取相同时间最小价格
   * @param attribute
   * @param attr
   * @param price
   * @param oldminprice
   * @returns {number}
   */
  getMinprice (attribute, attr, price, oldminprice = 0): number {
    const arr = attr.split('|');
    const arr2 = arr.filter((value) => {
      return value;
    });
    for (let i = 0, j = arr2.length; i < j; i++) {
      for (let ii = 0, jj = attribute.length; ii < jj; ii++) {
        if (attribute[ii].id === arr2[i]) {
          price += Number(attribute[ii].price);
          break;
        }
      }
    }
    let rankprice = this.data.topData.rank_price;
    if (rankprice.includes(',')) {
      rankprice = rankprice.replace(/,/g, '');
    }
    return price + Number(rankprice) > oldminprice ? Number(rankprice) : price + Number(rankprice);
  }

  /**
   * 出发时间排序
   * @param arr
   * @returns {any}
   */
  sortArr (arr) {
    let i = arr.length - 1; // 初始时,最后位置保持不变　
    while ( i > 0) {
      let pos = 0; //每趟开始时,无记录交换
      for (let j = 0; j < i; j++) {
        if (this.ratiosize(arr[j].label , arr[j + 1].label)) {
          pos = j; //记录交换的位置
          const tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
      i = pos; //为下一趟排序作准备
    }
    return arr;
  }

  /**
   *  比较时间字符串大小
   * @param {string} str
   * @param {string} str2
   * @returns {boolean}
   */
  ratiosize (str: string, str2: string) {
    const arr1 = str.split(getDatebq(str));
    const arr2 = str2.split(getDatebq(str2));
    if (arr1.length > arr2.length) {
      return true;
    } else if (arr1.length < arr2.length) {
      return false;
    }
    for (let i = 0, j = arr1.length; i < j; i++) {
      if (Number(arr1[i]) > Number(arr2[i])) {
        return true;
      } else if (Number(arr1[i]) < Number(arr2[i])) {
        return false;
      }
    }
    return true;
  }
  // 点击出发时间
  clickOuttime (id) {
    const attr = this.setTimetc(id);
    this.setActiveattr(attr);
    this.clickother()
  }
  // 点击几天几夜 或套餐类型
  jtjyClick (id, type) {
    let old: string;
    let arr: any;
    if (type === 1) {
      arr = this.data.jtjy.values;
    } else {
      arr = this.data.zstc.values;
    }
    for (let i = 0, j = arr.length; i < j; i++) {
      if (arr[i].selected_key_ecshop68) {
        old = arr[i].id;
        break;
      }
    }
    const re = new RegExp(old, 'g');
    let nattr = this.activeselct.replace(re, id);
    if (!this.gxb.includes(nattr)) {
      // this.activeselct = nattr;
      nattr = null;
    }
    const attr = this.setTimetc();
    this.setActiveattr(attr, id, nattr);
    this.clickother();
  }
  setTimetc (id?: string) {
    let targetattr: string;
    for (let i = 0, j = this.data.timetc.length; i < j; i++) {
      if (id && this.data.timetc[i].id === id || !id && this.data.timetc[i].selected_key_ecshop68) {
        targetattr = this.data.timetc[i].targetattr;
        this.activeStartime = this.data.timetc[i];
        // this.data.activestartprice = this.data.timetc[i].minprice;
        break;
      }
    }
    if (!targetattr && this.data.timetc.length > 0) {
      targetattr = this.data.timetc[0].targetattr;
    }
    return targetattr;
  }
  setActiveattr (targetattr: any = [], id = null, attr = null) {
    this.data.disabled = false;
    let arr = [];
    let activearr = [];
    let isactive = false;
    let activeTime;
    let activejtjy;
    for (let i = 0, j = targetattr.length; i < j; i++) {
      // this.setSeleteattr(targetattr[i], i === 0 ? 1 : 2);
      let arr2 = targetattr[i].split('|');
      arr2 = arr2.filter((res) => {
        return res;
      })

      if ((!id && !attr && i === 0) || attr && attr === targetattr[i] || !isactive && (!attr && id && arr2.includes(id))) {
        this.activeselct = targetattr[i];
        activearr = arr2;
        isactive = true;
        this.setSeletearr(arr2, 1);
        // this.attrPrice(arr2);
        for (let ii = 0, jj = arr2.length; ii < jj; ii++) {
          if (this.startTimebxg.includes(arr2[ii])) {
            activeTime = arr2[ii];
          } else if (this.jtjygxb.includes(arr2[ii])) {
            activejtjy = arr2[ii];
          }
        }
      } else if (activejtjy && !arr2.includes(activejtjy)) {
        for (let ii = 0, jj = arr2.length; ii < jj; ii++) {
          if (this.tctypegxb.includes(arr2[ii])) {
            arr2.splice(ii, 1);
            break;
          }
        }
      }
      arr = arr.concat(arr2.filter(v => !arr.includes(v))); // 合并去重
    }
    arr = arr.concat(activearr).filter(v => arr.includes(v) && !activearr.includes(v)); // 取差集
    // console.log(arr)
    this.setSeletearr(arr, 2);
  }
  setSeletearr (arr, type = 1) {
    // let timeid: string;
    for (let i = 0, j = arr.length; i < j; i++) {
      if (!arr[i]) {
        continue;
      }
      this.setActive(arr[i], type);
    }
    // this.setisdisable(timeid);
  }
  /**
   * 设置选择id属性
   * @param id
   */
  setActive (id, type = 1) {
    // console.log(this.gxb)
    let obj: any = {};
    if (this.startTimebxg.includes(id)) {
      obj = this.setActiveArr(id, this.data.timetc, type);
    } else if (this.jtjygxb.includes(id)) {
      obj = this.setActiveArr(id, this.data.jtjy.values, type);
    } else if (this.tctypegxb.includes(id)) {
      obj = this.setActiveArr(id, this.data.zstc.values, type);
    } else if (this.data.attrList && this.data.attrList.length > 0) {
      for (let i = 0, j = this.data.attrList.length; i < j; i++) {
        const data = this.data.attrList[i];
        obj = this.setActiveArr(id, data.values, type);
      }
    }
    return obj.timeid;
  }
  setActiveArr (id, arr, type) {
    let timeid: string;
    for (let i = 0, j = arr.length; i < j; i++) {
      const res = arr[i];
      if (res.id === id) {
        delete res.disabled;
        if (type === 1 || type === 3) {
          res.selected_key_ecshop68 = 1;
          timeid = id;
        }
      } else {
        if (type === 1) {
          res.selected_key_ecshop68 = 0;
          res.disabled = 'disabled';
        } else if (type === 3) {
          res.selected_key_ecshop68 = 0;
        }
      }
    }
    return {timeid: timeid};
  }
  setPersonnum(num: number) {
    this.data.persenNum += num;
    this.clickother();
  }
  clickother (id?: string) {
    if (!this.activeselct) return false;
    const arr = this.getseleteAttr(id);
    this.attrPrice(arr);
  }
  attrPrice(arr: string[]) {
    arr = arr.filter((value) => {
      return value;
    });
    let str = arr.join(',');
    this.http.getpostformdata(this.http.getProductprice, {id: this.id, attr: str, number: this.data.persenNum}, ).subscribe(res => {
      this.data.activestartprice = res.result;
      this.data.disabled = false;
      this.activeData = res;
    }, err => {
      this.data.disabled = true;

    });
  }
  getActiveobj () {
    return this.activeData;
  }
  getActiveorder() {
    const obj = {
      id: this.id,
      attr: this.getseleteAttr(),
      number: this.data.persenNum
    }
    return obj;
  }
  getseleteAttr(id?: string) {
    if (!this.data.attrList && !this.activeselct) {
      return [];
    }
    let arr = this.activeselct.split('|');
    arr = arr.filter((value) => {
      return value;
    })
    // if (!this.data.attrList[0]) {
    //   return null;
    // }
    if (this.data.attrList.length > 0) {
      for (let i = 0, j = this.data.attrList[0].values.length; i < j; i++) {
        let res = this.data.attrList[0].values[i];
        if (id && res.id == id) {
          if (res.selected_key_ecshop68) {
            res.selected_key_ecshop68 = 0;
          } else {
            res.selected_key_ecshop68 = 1;
            arr.push(res.id);
          }
        } else if (res.selected_key_ecshop68) {
          arr.push(res.id);
        }
      }
    }
    arr = arr.filter((value) => {
      return value;
    });
    return arr;
  }
}

function setDate (str: string) {
  if (str.length < 2) {
    return '0' + str;
  }
  return str;
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
