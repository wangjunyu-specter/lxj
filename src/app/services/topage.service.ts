/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-09-28 18:45:00
 * @Description: 所有跳转页面类型服务
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TopageService {

  constructor(private router: Router, private iab: InAppBrowser, private user: UserService) { }

  /**
   * type 1 商品分类列表 2 商品详情 3 主题 4 选择选择地址 5 搜索 6 商城首页 7 店铺首页 8 品牌馆 9 新闻详情
   * 10 跳转网页, 11 跳转行程 12跳转订单详情 13专题列表 14商城专题列表
   * @param type
   * @param id
   */
  toPage(type, id?: string, name?: string) {
    if (typeof type === 'string') {
      type = Number(type);
    }
    console.log(type)
    id = id ? id.toString() : '';
    console.log(id)
    if (type === 1) {
      this.router.navigate(['/products'], {queryParams: {listid: id ? id : 1}});
      // this.nav.navigateRoot()
    } else if (type === 2) {
      console.log(type)
      this.router.navigate(['/productcontent'], {queryParams: {id}});
    } else if (type === 4) {
      this.router.navigate(['/select-address']);
    } else if (type === 5) {
      // this.router.navigate(['/search']);
      // this.presentModal();
      // this.presentModal();
      // 从页面单独跳转
      console.info('从页面单独跳转');
    } else if (type === 3) {
      this.router.navigate(['/zt'], {queryParams: {id}});
    } else if (type === 6) {
      this.router.navigate(['/tabs/tab3']);
    } else if (type === 7) {
      if (id && id !== '0') {
        this.router.navigate(['/sj-index'], {queryParams: {id}});
      } else {
        this.router.navigate(['/tabs/tab1']);
      }
    } else if (type === 9) {
      this.router.navigate(['/articlecontent'], {queryParams: {id}});
    } else if (type === 10) {
      let href = '';
      if (id.includes('http')) {
        href = id;
      } else {
        href += 'http://' + id;
      }
      this.user.getUserp().then(res => {
        if (href.includes('?')) {
          href += '&user_id=' + res['user_id'];
        } else {
          href += '?user_id=' + res['user_id'];
        }
        this.openBrowser(href);
      }).catch(err2 => {
        this.openBrowser(href);
      });
    } else if (type === 11) {
      this.router.navigate(['/xccontent'], {queryParams: {id}});
    } else if (type === 12) {
      this.router.navigate(['/ordercontent'], {queryParams: {id}});
    } else if (type === 13) {
      this.router.navigate(['/all-zt'], {queryParams: {type: 1}});
    } else if (type === 14) {
      this.router.navigate(['/all-zt'], {queryParams: {type: 2}});
    } else {
      this.router.navigate(['/tabs/tab1']);
    }
  }
  /**
   * @Author: wjy
   * @description: 打开浏览器,
   * @param {type} 传入链接
   * @return: 
   * @Date: 2019-08-03 19:19:41
   */
  private openBrowser(link: string) {
    const options: InAppBrowserOptions = { // : todo 需要设置ios配置
      location: 'yes',
      // closebuttoncaption: '关闭',
      toolbarcolor: '#f1f1f1',
      closebuttoncolor: '#333333',
      navigationbuttoncolor: '#333333',
      footer: 'no',
      // hidenavigationbuttons: 'yes'
      hideurlbar: 'yes'
    };
    const browser = this.iab.create(link, '', options);
  }
}
