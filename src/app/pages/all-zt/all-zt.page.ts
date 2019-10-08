/*
 * @Author: wjy-mac
 * @Date: 2019-09-26 16:52:52
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-08 15:42:28
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TopageService } from 'src/app/services/topage.service';

@Component({
  selector: 'app-all-zt',
  templateUrl: './all-zt.page.html',
  styleUrls: ['./all-zt.page.scss'],
})
export class AllZtPage implements OnInit {
  type: number; // 专题类型 1户外2商城
  constructor(private nav: NavController, private activeroute: ActivatedRoute,
    private topage:TopageService) { }

  ngOnInit() {
    const params = this.activeroute.snapshot.queryParams;
    this.type = params['type'] || 1;
  }
  goBack(): void {
    this.nav.back();
  }
}
