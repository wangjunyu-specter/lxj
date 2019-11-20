/*
 * @Author: wjy-mac
 * @Date: 2019-06-15 20:37:20
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-09-24 15:43:18
 * @Description: file content
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.scss'],
})
export class PagetitleComponent implements OnInit {
  @Input() myname: string;
  @Input() des: string;
  @Input() type: boolean;
  @Input() nopadding: boolean;
  @Input() nobold: boolean;
  @Input() smpadding: boolean;
  @Input() val: any;
  @Output() setclick = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  change() {
    if (!this.val) {
      return false;
    }
    this.setclick.emit({value: this.val});
  }
}
