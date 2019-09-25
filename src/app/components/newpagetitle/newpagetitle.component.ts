/*
 * @Author: wjy-mac
 * @Date: 2019-09-24 15:43:53
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-09-24 15:43:53
 * @Description: file content
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newpagetitle',
  templateUrl: './newpagetitle.component.html',
  styleUrls: ['./newpagetitle.component.scss'],
})
export class NewpagetitleComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
