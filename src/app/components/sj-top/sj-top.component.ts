/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-08-07 23:07:13
 * @Description: file content
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sj-top',
  templateUrl: './sj-top.component.html',
  styleUrls: ['./sj-top.component.scss'],
})
export class SjTopComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Output() toggle = new EventEmitter();
  @Input() active: number;
  @Input() supplier: any;
  @Output() topage = new EventEmitter();
  @Output() setGz = new EventEmitter();
  @Output() tosearch = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  closepage () {
    this.close.emit();
  }
  toggleNav (type: number) {
    this.active = type;
    this.toggle.emit(type);
  }
  openpage () {
    this.topage.emit();
  }
  setgz () {
    this.setGz.emit();
  }
  tosearchfn() {
    this.tosearch.emit();
  }
}
