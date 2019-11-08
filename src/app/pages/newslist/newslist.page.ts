import { NativeService } from 'src/app/services/native.service';

/*
 * @Author: wjy-mac
 * @Date: 2019-06-16 01:51:24
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-08 17:32:36
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';
import { EmojiishowService } from 'src/app/services/emojiishow.service';
import { PlitemclickService } from 'src/app/services/plitemclick.service';
import { NewsData } from 'src/app/interface/news-data';
import { HttpService } from './../../services/http.service';
import { UserService } from './../../services/user.service';
import { NewsListService } from './../../services/news-list.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.page.html',
  styleUrls: ['./newslist.page.scss'],
})
export class NewslistPage implements OnInit {
  targetId: string;
  tname: string; // 聊天目标名称
  shopName: string;
  shopHead: string; // TODO 需要获取店铺信息
  shopId: string;
  isshowDrop: boolean; // 是否显示灰色背景;
  list: NewsData[];
  uid: string;
  userhead: string; // 用户头像
  username: string; // 用户名
  constructor(private nav: NavController, private activeroute: ActivatedRoute,
    private ws: WebsocketService, private emojiishow: EmojiishowService, private itemclickfn: PlitemclickService,
    private newslist: NewsListService, private userfn: UserService, private http: HttpService,
    private native: NativeService, public actionSheetController: ActionSheetController,
    private photoViewer: PhotoViewer) { }

  ngOnInit() {
    this.ws.testOnline();
  }
  ionViewWillEnter() {
    const params = this.activeroute.snapshot.queryParams;
    this.shopId = params['id'];
    this.shopName = params['name'];
    this.list = this.newslist.getOnelist(this.shopId);
    this.userfn.getUser().then(res => {
      this.uid = res['user_id'];
      this.userhead = res['headimg'];
      this.username = res['user_name'];
    }).catch(() => {});
  }
  ionViewWillLeave() {
    this.newslist.clearShopid();
    this.setListyd();
  }
  setListyd() {
    // 此处写此聊天对象都已读
  }
  async choiceImg() {
    const actionSheet = await this.actionSheetController.create({
      header: '请选择来源',
      buttons: [{
        text: '相机',
        role: 'destructive',
        handler: () => {
          this.native.getPictureByCamera().then(res => {
            this.basezfile(res);
          });
        }
      }, {
        text: '相册',
        handler: () => {
          this.native.getPictures(length).then((res: any) => {
            res.map(img => {
              this.basezfile(img);
            });
          }, err => {

          });
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
  basezfile(base64) {
    const file = this.native.getImgbase64tofile(base64, 'comment', 'file');
    this.imgupload(file).then(res => {
    }).catch(err3 => {
    });
  }
  /**
   * @Author: wjy-mac
   * @description: 上传图片方法
   * @Date: 2019-11-05 17:12:29
   * @param {type} file 图片对象
   * @return: 
   */  
  imgupload(file) {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      oReq.open('POST', this.http.domain + this.http.updateimg);
      oReq.onreadystatechange = (oEvent) => {
        if (oReq.readyState == 4 && oReq.status == 200) {
          const res = JSON.parse(oReq.response)
          resolve(res.result);
        }
      };
      oReq.onerror = (err) => {
        reject(err);
      };
      oReq.send(file);
    });
  }
  sendMsg(msg) {
    this.setTargetId();
    const news = this.addNews(msg);
    this.newslist.setList(this.shopId, Object.assign({}, news));
    news.wd = -1;
    this.ws.sendMessage(news, 'chat message');
  }
  setTargetId() {
    if (!this.targetId && this.list.length > 0) { // 获取最近一次是和哪个客服聊天
      for (let index = 0; index < this.list.length; index++) {
        const element = this.list[index];
        if (element.uid != this.uid) { // TODO: 此处应该反向循环
          this.targetId = element.uid;
          this.tname = element.tname
          break;
        }
      }
    }
  }
  addNews(msg, type = 1) {
    const obj: NewsData = {
      uid: this.uid,
      uname: this.username,
      tid: this.targetId || '2',
      content: decodeURIComponent(msg),
      time: Date.parse(new Date() as any),
      type,
      tname: this.tname || this.shopName,
      uheader: this.userhead,
      shopId: this.shopId,
      shopName: this.shopName,
      wd: 1
    };
    return obj;
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
  scanImg(src) {
    if (src.includes('http') || src.includes('www')) {
      this.photoViewer.show(src);
    } else {
    this.photoViewer.show(this.http.domain + src);
    }
  }
}
