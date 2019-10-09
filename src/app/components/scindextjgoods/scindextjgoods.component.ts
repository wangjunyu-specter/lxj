/*
 * @Author: wjy-mac
 * @Date: 2019-10-09 19:49:58
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-09 21:38:58
 * @Description: file content
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scindextjgoods',
  templateUrl: './scindextjgoods.component.html',
  styleUrls: ['./scindextjgoods.component.scss'],
})
export class ScindextjgoodsComponent implements OnInit {
  @Input() src: string;
  @Input() name: string;
  @Input() nowprice: string;
  @Input() oldPrice: string;
  @Input() type: number = 1; // 1 标题显示一行， 2标题显示2行
  @Input() shadow: number = 1; // 1不显示阴影 2显示阴影
  constructor() { }

  ngOnInit() {
  }

}
