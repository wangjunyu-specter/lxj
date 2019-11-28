/*
 * @Author: wjy-mac
 * @Date: 2019-07-06 01:40:14
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-20 12:25:24
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-fbyjmore',
  templateUrl: './fbyjmore.page.html',
  styleUrls: ['./fbyjmore.page.scss'],
})
export class FbyjmorePage implements OnInit {
  type: number;
  title: string;
  num: number; // 分数
  allnum: number; // 所有数量
  constructor(private nav: NavController, private route: Router,
              private activeroute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeroute.snapshot.queryParams;
    this.type = params['type'] ? Number(params['type']) : 1;
    this.num = params['num'] || 0;
    this.allnum = params['sendnum'] || 0;
    switch (this.type) {
      case 1:
        this.title = '票圈';
        break;
      case 2:
        this.title = '游记';
        break;
      case 3:
        this.title = '攻略';
        break;
      case 4:
        this.title = '招募';
        break;
      default:
        this.title = '票圈';
    }
  }
  ionViewDidEnter() {

  }
  goBack() {
    this.nav.navigateBack('tabs/tab2');
  }
}
