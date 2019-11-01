/*
 * @Author: wjy-mac
 * @Date: 2019-07-06 16:06:14
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-01 15:52:07
 * @Description: file content
 */
import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {TopageService} from "../../services/topage.service";

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss'],
})
export class OrderlistComponent implements OnInit {
  @Input() list: any[];
  constructor(private http: HttpService, private topage: TopageService) { }

  ngOnInit() {}
  gotoPage(type, id, comment) {
    this.topage.toPage(type, id, comment);
  }
  goComment(id) {
    this.topage.toPage(16, id);
  }
}
