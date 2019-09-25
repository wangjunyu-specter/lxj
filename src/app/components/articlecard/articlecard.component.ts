/*
 * @Author: wjy-mac
 * @Date: 2019-09-25 15:20:15
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-09-25 15:29:22
 * @Description: 首页文章模块
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-articlecard',
  templateUrl: './articlecard.component.html',
  styleUrls: ['./articlecard.component.scss'],
})
export class ArticlecardComponent implements OnInit {
  @Input() data: object;
  @Input() src: string;
  @Output() setclick = new EventEmitter();

  constructor() { }

  ngOnInit() {}
  change() {
    this.setclick.emit({value: this.data['id']});
  }
}
