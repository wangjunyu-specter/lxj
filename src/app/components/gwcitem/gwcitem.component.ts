import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../../services/http.service';
import {DomSanitizer} from "@angular/platform-browser";
import { GwcService } from '../../services/gwc.service';
@Component({
  selector: 'app-gwcitem',
  templateUrl: './gwcitem.component.html',
  styleUrls: ['./gwcitem.component.scss'],
})
export class GwcitemComponent implements OnInit {
  @Input() item: any;
  // @Output() checkedchange = new EventEmitter();
  @Output() changeattrfn = new EventEmitter();
  @Output() clickItem = new EventEmitter();
  // private isall: boolean;
  private ischeckall: boolean; // 是否点击全选按钮
  private ischeckone: boolean; // 是否点击商品选择按钮
  private setnumarr: object;
  allno: boolean; // 是否全部都无货
  constructor(private http: HttpService, public sanitizer: DomSanitizer, private gwclist: GwcService) { }

  ngOnInit() {
    // this.isall = false;
    this.ischeckall = false;
    this.ischeckone = false;
    this.setnumarr = {};
    this.allno = false;
    this.setAllfn();
  }
  assembleHTML(strHTML: any) {
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }
  setNum(data, num: number) {
    if (data.allnumber == 0) {
      return false;
    }
    if (num === -1) {
      if (data.goods_number == 1) {
        return false;
      }
    }
    if (this.setnumarr[data.rec_id]) {
      clearTimeout(this.setnumarr[data.rec_id]);
      this.setnumarr[data.rec_id] = null;
    }
    this.gwclist.setNum(data, this.item.supplier_name, num);
    this.setnumarr[data.rec_id] = setTimeout(() => { // 避免快速点击造成的大量请求
      this.changenum(data);
      this.setnumarr[data.rec_id] = null;
    }, 300);
  }
  changenum(data) {
    if (data.goods_number < 1) {
      this.gwclist.setNumone(data, this.item.supplier_name);
    }
    this.gwclist.setNumchange(data);
    this.setAllfn();
  }
  changeitem(data) {
    if (!this.ischeckone) {
      return false;
    }
    this.gwclist.setCheckedone();
    this.ischeckone = false;
    if (!data.active) {
      this.gwclist.setItemsetItem(this.item.supplier_name, false);
    } else {
      this.setAllfn();
    }
  }
  setAll() {
    if (!this.ischeckall) {
      return false;
    }
    this.item.goods_list.map(res => {
      this.gwclist.setItemall(this.item.supplier_name);
    });
    // this.checkedchange.emit();
    this.gwclist.setCheckedone();
    this.ischeckall = false;
  }
  setisall() {
    this.ischeckall = true;
  }
  setone() {
    this.ischeckone = true;
  }
  unread(id: string) {
    this.gwclist.delete(id, this.item.supplier_name);
  }
  setAllfn() {
    let isall = true;
    let nonumber = 0;
    for (let i = 0, j = this.item.goods_list.length; i < j; i++) {
      this.item.goods_list[i].allnumber = Number(this.item.goods_list[i].allnumber);
      this.item.goods_list[i].goods_number = Number(this.item.goods_list[i].goods_number);
      if (!this.item.goods_list[i].active) {
        this.gwclist.setItemsetItem(this.item.supplier_name, false);
        isall = false;
        // return false;
      }
      if (this.item.goods_list[i].allnumber === 0 || this.item.goods_list[i].allnumber < this.item.goods_list[i].goods_number) {
        nonumber++;
      }
    }
    if (nonumber === this.item.goods_list.length) {
      this.allno = true;
      return false;
    } else {
      this.allno = false;
    }
    if (isall) {
      this.gwclist.setItemsetItem(this.item.supplier_name, true);
    }
  }
  changeattr(data) {
    const attr = data.goods_attr_id.split(',');
    this.changeattrfn.emit({gid: data.goods_id, attr, rec_id: data.rec_id, num: data.goods_number});
  }
  openpage(data) {
    this.clickItem.emit(data);
  }
}
