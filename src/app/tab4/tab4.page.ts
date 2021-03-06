/*
 * @Author: wjy-mac
 * @Date: 2019-07-31 23:26:32
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-05 15:43:01
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpService } from '../services/http.service';
import {UsercenterService} from "../services/usercenter.service";
import {TopageService} from "../services/topage.service";
import {NativeService} from "../services/native.service";
import { OkgoodsService } from '../services/okgoods.service';
import { AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  scroolold: number;
  toolbaropacity: string;
  user: any;
  isshow: boolean;
  centeruser: any;
  hdzxList: object[]; // 活动中心
  isandroid: boolean;
  yoursurplus: string; // 旅行币
  constructor(private route: Router, private userfn: UserService, public http: HttpService,
              private usercenter: UsercenterService, private toPage: TopageService, private native: NativeService,
              private okgoodsfn: OkgoodsService, public alertController: AlertController,
              public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.isshow = false;
    this.user = {};
    this.toolbaropacity = '0';
    this.isandroid = this.native.isandroid();
  }
  ionViewDidEnter() {
    this.userfn.getUserp().then(res => {
      this.user = res;
      // this.yoursurplus = res.user_money;
    }).catch(err => {
      console.log(err);
    });
    this.centeruser = this.usercenter.getUserdata();
    console.log(this.centeruser)
    this.okgoodsfn.sendOkgoods(); // 发送确自动认收货请求
    // this.userfn.getGz().then(res => {
    //   console.log(res)
    // }).catch(error => {
    //   console.log(error)
    // })
  }
  closeXlts(index: number) {
    this.centeruser.xclist.splice(index, 1);
  }
  // 活动做成两种类型，一种打开组件，一种打开网页
  logScrolling($event) {
    const top: number = $event.detail.scrollTop;
    // if (!this.scroolold) {
    //   this.scroolold = top;
    // } else {
    //   if (this.scroolold > 44 && top > 44) {
    //     this.scroolold = top;
    //     return false;
    //   }
    //   this.scroolold = top;
    // }
    let num = 0;
    if (top < 44) {
      num = top * 2 / 100;
      this.isshow = false;
    } else {
      this.isshow = true;
      num = 1;
    }
    this.setNavstatus(num);
  }
  setNavstatus(num: number) {
    this.toolbaropacity = (parseInt((num * 100).toString(), 10)).toString() as string;
  }
  /**
   * @Author: wjy-mac
   * @description: 跳转页面方法
   * @Date: 2019-10-22 11:52:55
   * @param {type} 
   * @return: 
   */  
  openPage(type) {
    if (type === 9) {
      this.route.navigate(['/browse-records']);
    } else if (type === 8) {
      this.route.navigate(['/cart']);
    } else if (type === 3) {
      this.route.navigate(['/bouns']);
    } else if (type === 2) {
      this.route.navigate(['/xcsclist']);
    } else if (type === 4) {
      this.route.navigate(['/collelist']);
    } else if (type === 5) {
      this.route.navigate(['/center-more']);
    } else if (type === 10) {
      this.route.navigate(['/allorder']);
    } else if (type === 1) {
      this.route.navigate(['/xclist']);
    } else if (type === 11) {
      this.route.navigate(['/myrelease']);
    } else if (type === 12) {
      this.route.navigate(['/userlist'], {queryParams: {type: 1}});
    } else if (type === 13) {
      this.route.navigate(['/userlist'], {queryParams: {type: 2}});
    } else if (type === 14) {
      this.route.navigate(['/edmit-user']);
    } else if (type === 15) {
      // this.route.navigate(['/fbyj'], {queryParams: {type: res.data.type}});
      this.getmycg();
    } else if (type === 16) {
      this.route.navigate(['/after-salelist']);
    } else if (type === 17) {
      this.toPage.toPage(17, '0', '平台客服', 0);
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 跳转其他页面
   * @Date: 2020-03-05 15:39:19
   * @param {type} 
   * @return: 
   */  
  openOtherpage(item) {
    this.toPage.toPage(item.type, item.url);
  }
  /**
   * @Author: wjy-mac
   * @description: 跳转活动
   * @Date: 2020-03-05 15:38:37
   * @param {type} 
   * @return: 
   */  
  openHd(item) { 
    this.toPage.toPage(item.type, item.url, item.name, item.des);
  }
  async getmycg() {
    const actionSheet = await this.actionSheetController.create({
      header: '请选择草稿类型',
      buttons: [{
        text: '游记',
        handler: () => {
          this.tomycg(1);
        }
      }, {
        text: '攻略',
        handler: () => {
          this.tomycg(2);
        }
      }, {
        text: '游约',
        handler: () => {
          this.tomycg(3);
        }
      }, {
        text: '取消',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  tomycg(type) {
    this.native.getStorage('yjcontent' + type).then(res => {
      this.route.navigate(['/fbyj'], {queryParams: {type, iscg: 1}});
    }).catch(error => {
      this.native.presentAlert('没有草稿!');
    });
  }
  async hzqt() {
    const alert = await this.alertController.create({
      header: '提示',
      message: '立即联系专属客服为您服务！',
      buttons: [
        {
          text: '考虑考虑',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '立即拨打',
          handler: () => {
            this.native.callTel('13982152738');
          }
        }
      ]
    });

    await alert.present();
  }
  showTs() {
    this.native.presentAlert('旅行币是旅行家平台专用货币,不可提现,只能用于旅行家平台使用,1旅行币=1RMB');
  }
}
