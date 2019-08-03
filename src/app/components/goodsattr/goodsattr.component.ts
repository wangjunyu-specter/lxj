import { Component, OnInit, Input } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {HttpService} from "../../services/http.service";
import {GoodsattrService} from "../../services/goodsattr.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-goodsattr',
  templateUrl: './goodsattr.component.html',
  styleUrls: ['./goodsattr.component.scss'],
})
export class GoodsattrComponent implements OnInit {
  src: string;
  price: string;
  kc: number = 0;
  @Input() attrlist: any[] = [];
  @Input() gxb: string[] = [];
  @Input() goodsid: string;
  @Input() max: number;
  @Input() type: number;
  @Input() mrattr: string[];
  num: number = 1;
  selecattr: string;
  priceattrstr: string;
  constructor(public modalController: ModalController, private http: HttpService,
              public sanitizer: DomSanitizer, private goodsattrfn: GoodsattrService) { }

  ngOnInit() {
    // this.clearData();
    console.log(this.attrlist)
    console.log(this.mrattr)
    if (this.gxb.length > 0) {
      this.setmrarr();
      this.setmrfn(this.mrattr);
      this.setGray();
    }
    let str: string;
    if (this.mrattr) {
      this.setmrselect(this.mrattr);
      str = this.mrattr.join(',');
    }
    this.attrPrice(str);
    this.priceattrstr = str;
  }
  setmrselect(mrarr) {
    this.attrlist.map(res => {
      res.values.map(data => {
        if (mrarr.includes(data.id)) {
          data.isactive = true;
        } else {
          data.isactive = false;
        }
      });
    });
  }
  setmrarr () {
    const allattrobj: object = {};
    this.gxb.map((res, index) => {
      let str = res.replace(/\|/g,'_');
      str = str.substr(1, str.length - 2)
      allattrobj[index] = str;
    })
    this.goodsattrfn.config({'suitRuleInfo': allattrobj});
  }
  setmrfn (mrarr) {
    for (let i = 0, j = mrarr.length; i < j; i++) {
      if (!this.ifingxb(mrarr[i])) {
        mrarr.splice(i, 1);
        i--;
        j--;
      }
    }
    for (const position in mrarr) {
      this.goodsattrfn.set(position, mrarr[position]);
    }
  }
  setGray() {
    for (let i = 0, j = this.goodsattrfn.enddata.length; i < j; i++) {
      const res = this.goodsattrfn.enddata[i];
      if (!this.attrlist[i]) {
        break;
      }
      this.attrlist[i].values.map((data) => {
        const id = data.id;
        if (res.includes(id)) {
          data.graybg = true;
        }
      });
    }
  }
  assembleHTML(strHTML: any) {
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }
  attrPrice(str?: string) {
    console.log('获取')
    this.http.getpostformdata(this.http.getProductprice, {id: this.goodsid, attr: str || '', number: this.num}, ).subscribe(res => {
      this.price = res['result'];
      this.kc = res['goods_attr_number'];
      this.selecattr = res['goods_attr'];
      this.src = this.http.domain + res['goods_attr_thumb'];
    }, err => {

    });
  }
  setnumfn (num: number) {
    if (this.max && num === 1 && this.num == this.max) {
      return false;
    } else if (num === -1 && this.num === 1) {
      return false;
    }
    this.num += num;
    this.attrPrice(this.priceattrstr)
  }
  setClick (item, index) {
    if (item.graybg) {
      return false;
    }
    const bool: boolean = this.ifingxb(item.id);
    if (!bool) {
      this.setActive(index, item.id, false)
      this.setPrice();
      return false;
    }
    if (item.isactive) {
      this.goodsattrfn.unset(index);
    } else {
      this.goodsattrfn.set(index, item.id);
    }
    this.setActive(index, item.id, true)
    this.setPrice();
    this.setGray();
  }
  ifingxb (id): boolean {
    let bool: boolean = false; // 判断是否是多选
    for (let i = 0, j = this.gxb.length; i < j; i++) {
      if (this.gxb[i].includes(id)) {
        bool = true;
        break;
      }
    }
    return bool;
  }
  setActive (index: number, id, type: boolean) {
    this.attrlist[index].values.map(res => {
      if (res.id === id) {
        if (res.isactive) {
          res.isactive = false;
        } else {
          res.isactive = true;
        }
      } else if (type){
        res.isactive = false;
      }
    })
  }
  setPrice () {
    let arr: string[] = [];
    this.attrlist.map(data => {
      data.values.map(res => {
        if (res.isactive) {
          arr.push(res.id)
        }
      })
    })
    const price: string = arr.join(',')
    this.priceattrstr = price;
    this.attrPrice(price);
  }
  setclose (type?) {
    let arr: string[];
    if (this.priceattrstr) {
      arr = this.priceattrstr.split(',');
    }
    type = type || this.type;
    const num = this.num;
    this.modalController.dismiss({arr, num, type});
  }
  close() {
    this.modalController.dismiss();
  }
  // clearData() {
  //   console.log(' qingc')
  //   this.num = 1;
  //   this.selecattr = '';
  //   this.priceattrstr = '';
  //   this.src = '';
  //   this.price = '';
  //   this.kc = 0;
  //   this.goodsattrfn.clear();
  // }
}
