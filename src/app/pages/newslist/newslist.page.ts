import { TopageService } from './../../services/topage.service';
import { NativeService } from 'src/app/services/native.service';

/*
 * @Author: wjy-mac
 * @Date: 2019-06-16 01:51:24
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-15 17:39:18
 * @Description: file content
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ActionSheetController, IonContent} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';
import { EmojiishowService } from 'src/app/services/emojiishow.service';
import { PlitemclickService } from 'src/app/services/plitemclick.service';
import { NewsData } from 'src/app/interface/news-data';
import { HttpService } from './../../services/http.service';
import { UserService } from './../../services/user.service';
import { NewsListService } from './../../services/news-list.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { SupplierlistService } from 'src/app/services/supplierlist.service';

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
  kftype: number; // 当前页面进入方式  1表示商品页|未支付订单页进入 联系售前客服 2已支付订单页进入 联系售后客服
  // supplier: object; // 商家
  @ViewChild(IonContent) content: IonContent;
  constructor(private nav: NavController, private activeroute: ActivatedRoute,
    private ws: WebsocketService, private emojiishow: EmojiishowService, private itemclickfn: PlitemclickService,
    private newslist: NewsListService, private userfn: UserService, private http: HttpService,
    private native: NativeService, public actionSheetController: ActionSheetController,
    private photoViewer: PhotoViewer, private suppliserlist: SupplierlistService, private toPage: TopageService) { }

  ngOnInit() {
    this.ws.testOnline();
  }
  ionViewWillEnter() {
    const params = this.activeroute.snapshot.queryParams;
    this.shopId = params['id'];
    this.shopName = params['name'];
    this.kftype = params['kftype'] || 1;
    this.suppliserlist.getData(this.shopId).then(res => {
      this.shopHead = res['shoplogo'];
    }).catch(err => {});
    this.list = this.newslist.getOnelist(this.shopId);
    this.scrollToBottom(1); // 如果已有数据，则直接滚往底部
    this.userfn.getUser().then(res => {
      this.uid = res['user_id'];
      this.userhead = res['headimg'];
      this.username = res['user_name'];
    }).catch(() => {});
    this.newslist.Source.subscribe(num => {
      this.scrollToBottom(1);
    });
    if (!this.newslist.getIsshopconetnt(this.shopId)) {
      this.getContentlist();
    }
  }
  ionViewWillLeave() {
    console.log('即将离开')
    this.newslist.clearShopid();
    this.setListyd();
  }
  getContentlist() {
    this.http.getDataloading(this.http.getMynewscontent, {shopId: this.shopId}).subscribe(res => {
      this.newslist.setShopcontent(this.shopId);
      console.log(res);
      this.newslist.setShophistorynews(this.shopId, res.data);
    }, err => {});
  }
  /**
   * @Author: wjy-mac
   * @description: 设置服务器聊天对象消息已读
   * @Date: 2019-11-14 23:48:15
   * @param {type} 
   * @return: 
   */  
  setListyd() {
    this.http.getData(this.http.setMynewsList, {shopId: this.shopId}).subscribe(res => {
    }, err => {});
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
    const file = this.native.getImgbase64tofile(base64, 'news', 'file');
    this.setTargetId();
    const news = this.addNews(base64);
    this.newslist.setList(this.shopId, Object.assign({}, news));
    news.wd = -1;
    this.imgupload(file).then(res => {
      news.content = res as string;
      this.ws.sendMessage(news, 'usersend');
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
          const res = JSON.parse(oReq.response);
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
    this.ws.sendMessage(news, 'usersend');
  }
  setTargetId() {
    if (!this.targetId && this.list.length > 0) { // 获取最近一次是和哪个客服聊天
      for (let index = this.list.length - 1; index >= 0; index--) {
        const element = this.list[index];
        if (element.uid != this.uid) {
          if (element.kftype == this.kftype || Number(element.kftype) === 0) {
            this.targetId = element.uid;
            this.tname = element.tname
          }
          break;
        }
      }
    }
  }
  addNews(msg, type = 1) {
    const obj: NewsData = {
      uid: this.uid,
      uname: this.username,
      tid: this.targetId || -1,
      content: decodeURIComponent(msg),
      time: Date.parse(new Date() as any),
      type,
      tname: this.tname || this.shopName,
      uheader: this.userhead,
      theader: this.shopHead,
      shopId: this.shopId,
      shopName: this.shopName,
      wd: 1,
      kftype: this.kftype,
      isyh: 1
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
  /**
   * @Author: wjy-mac
   * @description: 全屏查看图片
   * @Date: 2019-11-13 10:28:27
   * @param {type} 
   * @return: 
   */  
  scanImg(src) {
    if (src.includes('http') || src.includes('www')) {
      this.photoViewer.show(src);
    } else {
    this.photoViewer.show(this.http.domain + src);
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 滚动到底部 使用延时是为了防抖
   * @Date: 2019-11-12 15:35:06
   * @param {type} 
   * @return: 
   */  
  scrollToBottom(int) {
    console.log('开始滚动了');
    setTimeout(() => {
      this.content.scrollToBottom(1);
    }, int);
  }
  /**
   * @Author: wjy-mac
   * @description: 页面跳转
   * @Date: 2019-11-13 10:28:39
   * @param {type} 
   * @return: 
   */  
  goTopage(type: number, id: string) {
    this.toPage.toPage(type, id);
  }
}
