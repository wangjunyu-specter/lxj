/*
 * @Author: wjy-mac
 * @Date: 2019-09-25 10:43:28
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-14 12:05:31
 * @Description: 热门主题模块
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rmztitem',
  templateUrl: './rmztitem.component.html',
  styleUrls: ['./rmztitem.component.scss'],
})
export class RmztitemComponent implements OnInit {
  @Input() data: any;
  @Input() index: number;
  @Input() src: string;
  constructor() { }

  ngOnInit() {}

}
