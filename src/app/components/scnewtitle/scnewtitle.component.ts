/*
 * @Author: wjy-mac
 * @Date: 2019-10-09 11:40:04
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-09 11:40:04
 * @Description: file content
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scnewtitle',
  templateUrl: './scnewtitle.component.html',
  styleUrls: ['./scnewtitle.component.scss'],
})
export class ScnewtitleComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {}

}
