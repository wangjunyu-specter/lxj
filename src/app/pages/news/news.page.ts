import { reject } from 'q';
/*
 * @Author: wjy-mac
 * @Date: 2019-10-10 09:55:35
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-16 00:15:39
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NewsData, TzData } from 'src/app/interface/news-data';
import { HttpService } from './../../services/http.service';
import { NewsListService } from './../../services/news-list.service';
import { TopageService } from './../../services/topage.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit { 
  type: number; // 1 消息 2 平台通知
  list: {id: string, arr: NewsData[]}[];
  tzgglist: TzData[];
  constructor(private nav: NavController, private route: Router, public newslist: NewsListService, private http: HttpService,
    private topage: TopageService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.type = 1;
    this.list = this.newslist.getList();
    this.tzgglist = this.newslist.getTzlist();
    console.log(this.list);
  }
  ionViewWillEnter() {
    if (this.tzgglist.length === 0) {
      this.getTznews().then(res => {
        if (res < this.newslist.tzggPageobj.limit) {
          this.newslist.setTznewsAll();
        }
      }).catch(err => {});
    }
    if (this.list.length === 0) {
      this.getNewslist().then(res => {
        if (res < this.newslist.newsPageobj.limit) {
          this.newslist.setNewsall();
        }
      }).catch(err => {});
    }
  }
  assembleHTML(strHTML: any) {
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }
  /**
   * @Author: wjy-mac
   * @description: 获取聊天消息列表
   * @Date: 2019-11-14 23:44:54
   * @param {type} 
   * @return: 
   */  
  getNewslist() {
    return new Promise((resolve, reject) => {
      const obj = this.newslist.getNewspage();
      this.http.getData(this.http.getMynewslist, obj).subscribe(res => {
        if (obj.page === 0) {
          this.newslist.setNewsnum(Number(res.num));
        }
        this.newslist.setNewslist(res.data);
        resolve(res.data.length);
      }, err => {
        reject();
      });
    });
  }
  /**
   * @Author: wjy-mac
   * @description: 获取通知列表
   * @Date: 2019-11-14 21:02:04
   * @param {type} 
   * @return: 
   */  
  getTznews() {
    return new Promise((resolve, reject) => {
      const obj = this.newslist.getTzpager();
      this.http.getData(this.http.getMynews, obj).subscribe(res => {
        this.newslist.setTzlist(res.data);
        if (obj.page === 0) {
          this.newslist.setTznum(res.num);
        }
        resolve(res.data.length);
      }, err => {
        reject();
      });
    });
  }
  goBack() {
    this.nav.back();
  }
  /**
   * @Author: wjy-mac
   * @description: 下拉刷新
   * @Date: 2019-11-14 23:10:44
   * @param {type} 
   * @return: 
   */  
  doRefresh(event) {
    this.newslist.czPage(this.type);
    if (this.type === 1) {
      this.getNewslist().then(res => {
        if (res < this.newslist.newsPageobj.limit) {
          this.newslist.setNewsall();
        }
        event.target.complete();
      }).catch(err => {
        event.target.complete();
      });
    } else {
      this.getTznews().then(res => {
        if (res < this.newslist.tzggPageobj.limit) {
          this.newslist.setTznewsAll();
        }
        event.target.complete();
      }).catch(err => {
        event.target.complete();
      });
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 翻页
   * @Date: 2019-11-14 21:05:54
   * @param {type} 
   * @return: 
   */  
  loadData(event) {
    if (this.type === 1) {
      if (this.newslist.newsPageobj.all) {
        event.target.complete();
      } else {
        this.newslist.setNewspager(1);
        this.getNewslist().then(res => {
          if (res < this.newslist.newsPageobj.limit) {
            this.newslist.setNewsall();
          }
          event.target.complete();
        }).catch(() => {
          this.newslist.setNewspager(-1);
          event.target.complete();
        });
      }
    } else {
      if (this.newslist.tzggPageobj.all) {
        event.target.complete();
      } else {
        this.newslist.setTzpager(1);
        this.getTznews().then(res => {
          if (res < this.newslist.tzggPageobj.limit) {
            this.newslist.setTznewsAll();
          }
          event.target.complete();
        }).catch(() => {
          this.newslist.setTzpager(-1);
          event.target.complete();
        });
      }
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 跳转消息详情
   * @Date: 2019-11-07 15:07:40
   * @param {type} item 店铺对象
   * @return: 
   */
  goNews(item: {id: string, arr: NewsData[]}) {
    const id = item['id']; //聊天对象id 如店铺/好友id // 客户不会出现在此
    const data: NewsData = item['arr'][item['arr'].length - 1];
    const name = data.shopName || data.uname;
    this.topage.toPage(17, id, name);
    // this.route.navigate(['/newslist'], {queryParams: {id, name}});
  }
  /**
   * @Author: wjy-mac
   * @description: 去通知详情
   * @Date: 2019-11-14 20:57:25
   * @param {type} 
   * @return: 
   */  
  goTzcontent(item: TzData) {
    if (item.isread === '0') {
      this.setisread(item.id);
    }
    this.topage.toPage(18, item.id);
  }
  /**
   * @Author: wjy-mac
   * @description: 设置聊天已读
   * @Date: 2019-11-14 20:03:17
   * @param {type} 
   * @return: 
   */  
  unread(id: string) {
    this.http.getData(this.http.setMynewsList, {shopId: id}).subscribe(res => {
      this.newslist.clearShopid(id);
    }, err => {});
  }
  /**
   * @Author: wjy-mac
   * @description: 设置通知消息已读
   * @Date: 2019-11-14 21:12:23
   * @param {type} 
   * @return: 
   */  
  setisread(id) {
    this.http.getData(this.http.setMynews, {id}).subscribe(res => {
      this.newslist.setTzyd(id);
    }, err2 => {});
  }
  /**
   * @Author: wjy-mac
   * @description: 删除目标聊天消息
   * @Date: 2019-11-14 20:01:02
   * @param {type} 
   * @return: 
   */  
  deleteItem(id: string) {
    this.http.getData(this.http.DeleteMynewslist, {shopId: id}).subscribe(res => {
      this.newslist.deleteItem(id);
    }, err2 => {});
  }
}
