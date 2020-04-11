/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-08 21:54:55
 * @Description: 所有跳转页面类型服务
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import {UserService} from './user.service';
import { NativeService } from './native.service';
import { ActionSheetController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class TopageService {

  constructor(private router: Router, private iab: InAppBrowser, private user: UserService, private native: NativeService,
    public actionSheetController: ActionSheetController) { }

  /**
   * type 1 商品分类列表 2 商品详情 3 主题 4 选择选择地址 5 搜索 6 商城首页 7 店铺首页 8 品牌馆 9 新闻详情
   * 10 跳转网页, 11 跳转行程 12跳转订单详情 13专题列表 14商城专题列表 15消息 16 发布评价 17 聊天详情 18 公告详情
   * 19 微信分享
   * @param type
   * @param id
   * @param args 更多参数
   */
  toPage(type, id?: string, ...args) {
    console.log(args);
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
      this.setLink(id).then(link => {
        this.openBrowser(link);
      }).catch(err => {});
    } else if (type === 11) {
      this.router.navigate(['/xccontent'], {queryParams: {id, comment: args[0]}});
    } else if (type === 12) {
      this.router.navigate(['/ordercontent'], {queryParams: {id, comment: args[0]}});
    } else if (type === 13) {
      this.router.navigate(['/all-zt'], {queryParams: {type: 0}});
    } else if (type === 14) {
      this.router.navigate(['/all-zt'], {queryParams: {type: 1}});
    } else if (type === 15) {
      this.router.navigate(['/news']);
    } else if (type === 16) {
      const obj = {id};
      if (args) {
        obj['type'] = 1;
      }
      this.router.navigate(['/post-comment'], {queryParams: obj});
    } else if (type === 17) {
      console.log(args);
      const obj = {
        id,
        name: args[0],
        kftype: args[1] || args[1] === 0 ? args[1] : 1
      };
      this.router.navigate(['/newslist'], {queryParams: obj});
    } else if (type === 18) {
        this.router.navigate(['/notice'], {queryParams: {id}});
    } else if (type === 19) {
      this.shareActionSheet(id, args[0], args[1]);
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
    this.native.setFullscreen();
    const options: InAppBrowserOptions = { // : todo 需要设置ios配置
      location: 'no',
      toolbar: 'no',
      // closebuttoncaption: '关闭',
      toolbarcolor: '#f1f1f1',
      closebuttoncolor: '#333333',
      navigationbuttoncolor: '#333333',
      footer: 'no',
      // hidenavigationbuttons: 'yes'
      hideurlbar: 'yes'
    };
    // if (href == ${link2}) {

    // }
    if (link.includes('xiebao18')) {
      let link2 = link.split('?');
      link = link2[0];
    }
    const browser = this.iab.create(link, '', options);
    browser.on('loadstop').subscribe(res => {
      if (link.includes('cdlxj.cn')) {
        return false;
      } else if (link.includes('xiebao18')) {
        const code = `(function() {
          var href = window.location.href;
          if (href == 'https://cpsh5.xiebao18.com/wjy2055506') {
            var div = document.createElement('div');
            div.innerText = '返回';
            div.style.cssText = 'position: absolute;width: 50px;padding-left: 10px;color: #fff;font-size: .32rem;height: 1.08rem;line-height: 1.08rem;z-index: 100;top: 0; left: 0;';
            document.body.appendChild(div);
            div.onclick = function () {
              var msg = JSON.stringify({name: 'exitWeb'});
              webkit.messageHandlers.cordova_iab.postMessage(msg);
            }
          }
        })()`;
        browser.executeScript({code});
      } else {
        const code = `(function() {
          var div = document.createElement('div');
          div.innerText = '返回';
          div.style.cssText = 'position: absolute;width: 50px;padding-left: 10px;color: #fff;font-size: .32rem;height: 1.08rem;line-height: 1.08rem;z-index: 100;top: 0; left: 0;';
          document.body.appendChild(div);
          div.onclick = function () {
            var msg = JSON.stringify({name: 'exitWeb'});
            webkit.messageHandlers.cordova_iab.postMessage(msg);
          }
        })()`;
        browser.executeScript({code});
      }
    });
    browser.on('loaderror').subscribe(res => {
      console.log(2)
      console.log(res);
    });
    browser.on('message').subscribe(res => {
      const data = res['data'];
      if (data.name === 'exitWeb') {
        browser.close();
      }
    });
    browser.on('loadstart').subscribe(res => {
    });
    browser.on('exit').subscribe(res => {
      this.native.backFullscreen();
    });
    console.log(browser);
  }
  /**
   * @Author: wjy-mac
   * @description: 选择分享方式
   * @Date: 2020-03-05 15:26:51
   * @param {type} link 分享的链接
   * @param {type} title 分享的标题
   * @param {type} des 分享的描述
   * @return: 
   */  
  async shareActionSheet(link, title, des) {
    const actionSheet = await this.actionSheetController.create({
      header: '请选择分享方式',
      buttons: [{
        text: '分享好友',
        handler: () => {
          this.wechatShare(title, des, link, 2);
        }
      }, {
        text: '分享朋友圈',
        handler: () => {
          this.wechatShare(title, des, link, 1);
        }
      }, {
        text: '分享二维码',
        handler: () => {
          this.setLink(link).then(href => {
            this.router.navigate(['/myewm'], {queryParams: {link: href}});
          }).catch(err => {});
          
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  /**
   * @Author: wjy-mac
   * @description: 获取用户id重组分享链接调用分享
   * @Date: 2020-03-05 15:27:49
   * @param {type} title 分享标题
   * @param {type} des 分享描述
   * @param {type} link 分享链接
   * @param {type} type 分享方式  1 朋友圈 2好友
   * @return: 
   */  
  wechatShare(title, des, link, type) {
    this.setLink(link).then(href => {
      this.native.wechatShare(title, des, '',
      href, type);
    }).catch(err => {});
  }
  /**
   * @Author: wjy-mac
   * @description: 处理链接
   * @Date: 2020-03-09 14:58:07
   * @param {type} link: string 原始链接
   * @return: 
   */
  async setLink(link: string) {
    let href = '';
    if (link.includes('http')) {
      href = link;
    } else {
      href += 'https://' + link;
    }
    try {
      const user = await this.user.getUserp();
      if (href.includes('?')) {
        href += '&user_id=' + user['user_id'];
      } else {
        href += '?user_id=' + user['user_id'];
      }
      return href;
    } catch (err) {
      return href;
    }
  }
}
