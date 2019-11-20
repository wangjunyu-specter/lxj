/*
 * @Author: wjy-mac
 * @Date: 2019-07-07 01:08:12
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-05 15:27:59
 * @Description: file content
 */
import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {TopageService} from "../../services/topage.service";

@Component({
  selector: 'app-xclist-component',
  templateUrl: './xclist.component.html',
  styleUrls: ['./xclist.component.scss'],
})
export class XclistComponent implements OnInit {
  @Input() list: any[];

  constructor(private http: HttpService, private topage: TopageService) { }

  ngOnInit() {}
  gotoPage(type, id, comment) {
    this.topage.toPage(type, id, comment);
  }
  goComment(id) {
    this.topage.toPage(16, id, 1);
  }
}
