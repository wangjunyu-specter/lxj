/*
 * @Author: wjy-mac
 * @Date: 2019-09-24 16:20:23
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-09-24 17:13:54
 * @Description: file content
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bztjbox',
  templateUrl: './bztjbox.component.html',
  styleUrls: ['./bztjbox.component.scss'],
})
export class BztjboxComponent implements OnInit {
  @Input () src: string;
  @Input () name: string;
  @Input () price: number;
  @Input () id: string;
  @Input () dessubstrnum: number;
  @Output () tclick = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  setClick() {
    if (!this.id) return false;
    this.tclick.emit(this.id);
  }
}
