import { HttpService } from 'src/app/services/http.service';
/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-13 15:22:52
 * @Description: 关于我们页面
 */
import { ShopContentService } from './../../services/shop-content.service';
import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { NativeService } from 'src/app/services/native.service';
import { TopageService } from 'src/app/services/topage.service';
// import { Market } from '@ionic-native/market/ngx';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  data: any;
  appver: string;
  isios: boolean;
  constructor(private nav: NavController, private shopservice: ShopContentService, private native: NativeService,
    private http: HttpService, private toPagefn: TopageService) { }

  ngOnInit() {
    this.shopservice.getShop().then(res => {
      console.log(res)
      this.data = res;
    }).catch(err => {});
    this.native.getAppversion().then(res => {
      this.appver = res;
    }).catch(err2 => {});
    this.isios = this.native.isios();
  }
  goBack(type2?, type3?): void {
    this.nav.back();
  }
  test(type: number, sec: string): string {
    return '123';
  }
  /**
   * @Author: wjy-home
   * @description: 打开商店,只有ios可以使用
   * @param {type} 
   * @return: 
   * @Date: 2019-08-03 17:32:35
   */
  openStore() {
    this.native.openStore();
  }
  openxy(link) {
    this.toPagefn.toPage(10, this.http.zdomain + link);
  }
  /**
   * @Author: wjy-home
   * @description: 更新app， ios使用打开商店，android使用热更新或者链接重新下载
   * @param {type} 
   * @return: 
   * @Date: 2019-08-03 17:46:18
   */
  updateapp() {
    if (this.isios) {
      this.openStore();
    } else {
      
    }
  }
}
