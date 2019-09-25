/*
 * @Author: wjy-mac
 * @Date: 2019-09-25 16:03:17
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-09-25 16:13:57
 * @Description: 上下结构商品模块
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goodsupanddown',
  templateUrl: './goodsupanddown.component.html',
  styleUrls: ['./goodsupanddown.component.scss'],
})
export class GoodsupanddownComponent implements OnInit {
  @Input() data: object;
  @Input() src: string;
  @Input() tag: string[];
  constructor() { }

  ngOnInit() {}

}
