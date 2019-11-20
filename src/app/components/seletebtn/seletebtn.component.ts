import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seletebtn',
  templateUrl: './seletebtn.component.html',
  styleUrls: ['./seletebtn.component.scss'],
})
export class SeletebtnComponent implements OnInit {
  @Input() name: string;
  @Input() price: number;
  @Input() isactive: boolean;
  @Input() small: boolean;
  @Input() block: boolean;
  @Input() graybg: boolean; // 灰色背景，表示禁止点击
  @Input() graybgon: boolean; // 灰色背景，可以点击
  @Input() isshowimg: boolean; // 是否不显示选中图标
  @Input() id: string;
  @Input() iscenter: boolean;
  @Output() mclick = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  setClick() {
    if (this.graybg) {
      return false;
    }
    let obj: any = {
      name: this.name
    };
    if (this.price) {
      obj.price = this.price;
    }
    if (this.id) {
      obj.id = this.id;
    }

    this.mclick.emit(obj);
  }
}
