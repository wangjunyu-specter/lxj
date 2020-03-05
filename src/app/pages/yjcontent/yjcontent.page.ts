import { EditmyreleaseService } from './../../services/editmyrelease.service';
import { NativeService } from 'src/app/services/native.service';
import { Component, OnInit, ViewChild } from '@angular/core';
// import {ActivatedRoute} from "@angular/router";
import {NavController, AlertController, ActionSheetController} from "@ionic/angular";
import {DomSanitizer} from "@angular/platform-browser";
import { YjlistService } from '../../services/yjlist.service';
import {HttpService} from "../../services/http.service";
import {GzlistService} from "../../services/gzlist.service";
import {UserService} from "../../services/user.service";
import {EmojiishowService} from "../../services/emojiishow.service";
import {PlitemclickService} from "../../services/plitemclick.service";
import {ActivatedRoute, Router} from "@angular/router";
import { DeletemyreleaseService } from 'src/app/services/deletemyrelease.service';
@Component({
  selector: 'app-yjcontent',
  templateUrl: './yjcontent.page.html',
  styleUrls: ['./yjcontent.page.scss'],
})
export class YjcontentPage implements OnInit {
  toolbaropacity: string;
  id: string;
  data: any;
  type: number;
  pllist: any[];
  pageObj: any;
  setPlitem: any;
  seletename: string;
  isshowDrop: boolean;
  user: any;
  readnum: number; // 阅读数量
  ishttp: Set<string>; // 防止快速点击 关注等请求

  @ViewChild("myBox", {static: true}) mybox: any;
  // isGetcontentimg: boolean; // 是否已获取详情内图片
  constructor( private nav: NavController,
              public sanitizer: DomSanitizer, private yjlist: YjlistService,
              private http: HttpService, private gzlist: GzlistService, private emojiishow: EmojiishowService,
               private activeroute: ActivatedRoute, private mydeletefn: DeletemyreleaseService,
               private userfn: UserService, private itemclickfn: PlitemclickService,
               private native: NativeService, public alertController: AlertController,
               public actionSheetController: ActionSheetController, private editMyrelease: EditmyreleaseService,
               private route: Router) {
    this.pageObj = {
      page: 1,
      num: 20
    };
  }

  ngOnInit() {
    this.isshowDrop = false;
    this.setPlitem = {};
    // this.isGetcontentimg = false;
    this.toolbaropacity = '0';
    this.ishttp = new Set();
  }
  ionViewDidEnter() {
    console.log('进入新的');
    const params = this.activeroute.snapshot.queryParams;
    this.id = params['id'];
    this.type = params['type'] ? Number(params['type']) : 0;
    const item = this.editMyrelease.getData();
    if (item.data && item.data.id) {
      const ischage = this.editMyrelease.getIschage();
      if (item.data.id != this.id || !ischage || item.type - 1 != this.type) {
        this.editMyrelease.clear();
      } else {
        this.yjlist.editOne(this.id, this.type, item.data);
      }
    }
    this.data = this.yjlist.getPqone(this.id, this.type);
    this.getReadnum();
    this.getContent();
    this.userfn.getUserp().then(res => {
      this.user = res;
    });
  }
  getContent() {
    let hasdata = 1;
    if (!this.data || this.data && !this.data.id) {
      hasdata = 2;
    }
    const obj = {
      tid: this.id,
      page: this.pageObj.page,
      num: this.pageObj.num,
      hasdata,
      type: this.type + 2
    }
    this.http.getData(this.http.getpllist, obj).subscribe(res => {
      console.log(res);
      if (!this.data) {
        this.data = res.result.data.result;
        this.gzlist.setList(res.result.data.users);
      }
      this.pllist = res.result.result;
    }, err => {
      console.log(err);
    });
  }
  logScrolling($event) {
    // this.itemclickfn.Source.emit(2);
    const top: number = $event.detail.scrollTop;
    let num = 0;
    if (top < 44) {
      num = top * 2 / 100;
    } else {
      num = 1;
    }
    this.setNavstatus(num);
  }
  assembleHTML(strHTML: any) {
    // if (!this.isGetcontentimg) {
    //   setTimeout(() => {
    //     const imgs = this.mybox.nativeElement.getElementsByTagName('img');
    //     console.log(imgs.length)
    //     for (let index = 0; index < imgs.length; index++) {
    //       const img = imgs[index];
    //       console.log(img)
    //       img.addEventListener('click', () => {
    //         console.log(index);
    //         alert(index);
    //       })
    //     }
    //   }, 3000);
    //   this.isGetcontentimg = true;
    // }
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }
  setNavstatus(num: number) {
    this.toolbaropacity = parseInt((num * 100).toString(), 10).toString();
  }
  goBack(): void {
    console.log('退出')
    this.nav.back();
  }
  monfous() {
    console.log('时候')
    this.isshowDrop = true;
    // const el = document.querySelector('ion-footer');
    // setTimeout(() => {
    //     el.scrollIntoView(false);
    // }, 200);
    // this.positionStyle = {
    //     position: 'absolute',
    //     bottom: 0
    // };
  }
  monblur() {
    if (!this.emojiishow.getIsshows()) {
      this.blurClear();
    }
    // const el = document.querySelector('ion-footer');
    // el.scrollIntoView(true);
    // this.positionStyle = {
    //     position: '',
    //     bottom: ''
    // };
  }
  sub(content) {
    console.log(content);
    console.log(this.setPlitem);
    console.log(this.data);
    console.log(this.user)
    const obj: any = {
      touid: this.setPlitem.userid || this.data.userid,
      tid: this.data.id,
      content,
    };
    if (this.setPlitem.uid != this.user.user_id && this.setPlitem.touid == this.user.user_id) {
      obj.ishf = 1;
    } else {
      obj.ishf = 0;
    }
    if (this.setPlitem.pid && this.setPlitem.pid != 0){
      obj['pid'] = this.setPlitem.pid;
    } else if (this.setPlitem.id && this.setPlitem.id != 0) {
      obj['pid'] = this.setPlitem.id;
    } else {
      obj['pid'] = 0;
    }
    console.log(obj);
    this.blurClear(1);
    this.http.postformdataloading(this.http.setpl, obj).subscribe(res => {
      console.log(res);
      // : todo 差头像等数据
      obj.id = res.result.id;
      obj.time = Date.parse((new Date()).toString()) / 1000;
      obj.headimg = this.user.headimg;
      obj.dznum = 0;
      obj.user_name = this.user.user_name;
      obj.name = res.result.user.name;
      console.log(obj.pid);

      if (obj.pid == 0) {
        this.pllist.unshift(obj);
      } else {
        for (let i = 0, j = this.pllist.length; i < j; i++) {
          console.log(this.pllist[i].id)
          if (this.pllist[i].id == obj.pid) {
            this.pllist[i].chrild.unshift(obj);
            this.pllist[i].plnum += 1;
            console.log(this.pllist[i])
            return false;
          }
        }
      }
    })
  }
  clickdrop() {
    this.blurClear(1);
    this.itemclickfn.Source.emit(2);

  }
  setplItem(item) {
    console.log(item);
    this.isshowDrop = true;
    this.seletename = item.user_name;
    this.setPlitem = item;
  }
  blurClear(type?) {
    if (type) {
      this.emojiishow.setIsshow(2);
    }
    this.setPlitem = {};
    this.seletename = '';
    this.isshowDrop = false;
  }
  async edmit() {
    let img = "";
    if (this.data && this.data.thumb && this.data.thumb.length > 0) {
      img =  this.data.thumb[0];
    }
    const buttons: any = [{
      text: '分享微信好友',
      role: '',
      handler: () => {
        this.wechatShare(2, img);
      }
    },
    {
      text: '分享到朋友圈',
      role: '',
      handler: () => {
        this.wechatShare(1, img);
      }
    }
  ];
    if (this.user.user_id == this.data.userid) {
      buttons.push(...[{
        text: '编辑',
        handler: () => {
          this.editMyrelease.setData(this.data, this.type + 1);
          this.route.navigate(['/fbyj'], {queryParams: {type: this.type + 1, isedit: 1}});
        }
      }, {
        text: '删除',
        handler: () => {
          this.sureDelete();
        }
      }]);
    }
    buttons.push({
      text: '取消',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    });
    const actionSheet = await this.actionSheetController.create({
      header: '操作',
      buttons
    });
    await actionSheet.present();
  }
  /**
   * @Author: wjy-mac
   * @description: 微信分享
   * @Date: 2019-12-24 14:30:37
   * @param {type} 
   * @return: 
   */  
  wechatShare(type, img?) {
    this.userfn.getUser().then(res => {
      console.log('分享进入')
      this.native.wechatShare(this.data.title || this.data.content, '', img || this.http.zdomain + 'logo108.png',
      this.http.domain + this.http.shareLink + '&id=' + this.id + '&fuid=' + res['user_id'] + '&pagetype=1', type);
    }).catch(err => {});
  }
  /**
   * @Author: wjy-mac
   * @description: 设置删除本条及保持删除的id
   * @Date: 2019-11-19 21:30:50
   * @param {type} 
   * @return: 
   */  
  seleteItem() {
    console.log(this.data);
    this.http.getDataloading(this.http.deletepqitem, {id: this.id, type: this.type + 2}).subscribe(res => {
      this.yjlist.deleteone(this.id, this.type);
      this.mydeletefn.setId(this.id, this.type + 1);
      this.goBack();
    }, err => {});
  }
  async sureDelete() {
    const alert = await this.alertController.create({
      header: '提示',
      message: '删除后无法恢复!',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确定删除',
          handler: () => {
            this.seleteItem();
          }
        }
      ]
    });

    await alert.present();
  }
  /**
   * @Author: wjy-mac
   * @description: 获取阅读数量
   * @Date: 2020-01-10 14:44:48
   * @param {type} 
   * @return: 
   */  
  getReadnum() {
    console.log('获取数量')
    this.http.getData(this.http.getReadnum, {id: this.id}).subscribe(res => {
      this.readnum = res.result;
    }, err => {
      this.readnum = 0;
    });
  }
  setdz() {
    if (this.ishttp.has(this.data.id)) {
      this.native.presentToast('请稍后再试!');
      return false;
    }
    this.ishttp.add(this.data.id);
    let isqx: number;
    if (this.data.isdz === 0) {
      isqx = 0;
    } else {
      isqx = 1;
    }
    const obj = {
      touid: this.data.userid,
      tid: this.data.id,
      istop: 1,
      isqx
    };
    this.http.getData(this.http.setdz, obj).subscribe(res => {
      this.ishttp.delete(this.data.id);
      if (this.data.isdz === 0) {
        this.data.isdz = 1;
        this.data.dznum = res.result.dznum;
      } else {
        this.data.isdz = 0;
        this.data.dznum = res.result.dznum;
      }
    }, error2 => {
      this.ishttp.delete(this.data.id);
    });
  }
}
