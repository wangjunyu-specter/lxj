
/*
 * @Author: wjy-mac
 * @Date: 2019-06-16 01:51:24
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-07 22:22:53
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';
import { EmojiishowService } from 'src/app/services/emojiishow.service';
import { PlitemclickService } from 'src/app/services/plitemclick.service';
import { NewsData } from 'src/app/interface/news-data';
import { HttpService } from './../../services/http.service';
import { UserService } from './../../services/user.service';
import { NewsListService } from './../../services/news-list.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.page.html',
  styleUrls: ['./newslist.page.scss'],
})
export class NewslistPage implements OnInit {
  targetId: string;
  shopName: string;
  shopId: string;
  isshowDrop: boolean; // 是否显示灰色背景;
  list: NewsData[];
  uid: string;
  userhead: string;
  constructor(private nav: NavController, private activeroute: ActivatedRoute,
    private ws: WebsocketService, private emojiishow: EmojiishowService, private itemclickfn: PlitemclickService,
    private newslist: NewsListService, private userfn: UserService, private http: HttpService) { }

  ngOnInit() {
    this.ws.testOnline();
  }
  ionViewWillEnter() {
    const params = this.activeroute.snapshot.queryParams;
    this.shopId = params['id'];
    this.shopName = params['name'];
    this.list = this.newslist.getOnelist(this.shopId);
    console.log(this.list);
    this.userfn.getUser().then(res => {
      this.uid = res['user_id'];
      this.userhead = res['headimg'];
    }).catch(() => {});
  }
  sendMsg(msg) {
    console.log(msg);
    if (!this.targetId && this.list.length > 0) {
      for (let index = 0; index < this.list.length; index++) {
        const element = this.list[index];
        if (element.uid != this.uid) { // TODO: 此处应该反向循环
          this.targetId = element.uid;
          break;
        }
      }
    }
    const obj: NewsData = {
      uid: this.uid,
      tid: this.targetId || -1,
      content: decodeURIComponent(msg),
      time: Date.parse(new Date() as any),
      type: 1,
      name: '',
      shopId: this.shopId,
      shopName: this.shopName
    };
    this.newslist.setList(this.shopId, [obj]);
    this.ws.sendMessage({uid: this.targetId || -1, shopId: this.shopId, msg}, 'chat message');
  }
  /**
   * @Author: wjy-mac
   * @description: 获取焦点时设置灰色背景显示 阻止滑动
   * @Date: 2019-11-07 15:24:31
   * @param {type} 
   * @return: 
   */  
  monfous() {
    this.isshowDrop = true;
  }
  /**
   * @Author: wjy-mac
   * @description: 当失去焦点时
   * @Date: 2019-11-07 15:24:54
   * @param {type} 
   * @return: 
   */  
  monblur() {
    if (!this.emojiishow.getIsshows()) {
      this.blurClear();
    }
  }
  blurClear(type?) {
    if (type) {
      this.emojiishow.setIsshow(2);
    }
    this.isshowDrop = false;
  }
  /**
   * @Author: wjy-mac
   * @description: 点击灰色背景触发
   * @Date: 2019-11-07 15:25:21
   * @param {type} 
   * @return: 
   */  
  clickdrop() {
    this.blurClear(1);
    this.itemclickfn.Source.emit(2);
  }
  goBack() {
    this.nav.back();
  }
}
