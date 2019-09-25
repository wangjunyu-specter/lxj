/*
 * @Author: wjy-mac
 * @Date: 2019-09-25 10:43:28
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-09-25 11:58:58
 * @Description: 热门主题模块
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rmztitem',
  templateUrl: './rmztitem.component.html',
  styleUrls: ['./rmztitem.component.scss'],
})
export class RmztitemComponent implements OnInit {
  @Input() data: object;
  @Input() index: number;
  @Input() src: string;
  constructor() { }

  ngOnInit() {}

}
