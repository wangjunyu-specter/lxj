import { NativeService } from 'src/app/services/native.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavController, ActionSheetController, AlertController} from "@ionic/angular";
import {PqlistService} from "../../services/pqlist.service";
import {HttpService} from "../../services/http.service";
import {GzlistService} from "../../services/gzlist.service";
import {EmojiishowService} from "../../services/emojiishow.service";
import { UserService } from '../../services/user.service';
import {PlitemclickService} from "../../services/plitemclick.service";
import { DeletemyreleaseService } from 'src/app/services/deletemyrelease.service';
// import {Keyboard} from "@ionic-native/keyboard/ngx";

@Component({
  selector: 'app-pqcontent',
  templateUrl: './pqcontent.page.html',
  styleUrls: ['./pqcontent.page.scss'],
})
export class PqcontentPage implements OnInit {
  id: string;
  data: any;
  type: number;
  pageObj: any;
  pllist: any[];
  positionStyle: any;
  setPlitem: any;
  seletename: string;
  isshowDrop: boolean;
  user: any;
  isclear: any; // 消除评论对象延迟
  gzlistarr: string[];
  constructor(private activeroute: ActivatedRoute, private nav: NavController,
              private pqlistfn: PqlistService, private http: HttpService,
              private gzlist: GzlistService, private emojiishow: EmojiishowService,
              private userfn: UserService, private itemclickfn: PlitemclickService,
              public actionSheetController: ActionSheetController, private native: NativeService,
              private mydeletefn: DeletemyreleaseService, public alertController: AlertController) {
    this.pageObj = {
      page: 1,
      num: 20
    };
  }

  ngOnInit() {
    this.isshowDrop = false;
    this.setPlitem = {};
  }
  ionViewDidEnter() {
    console.log('进来了')
    this.gzlist.getList().then(res => {
      this.gzlistarr = res;
    }).catch(err2 => {
      this.gzlistarr = [];
    });
    this.activeroute.queryParams.subscribe(params => {
      console.log(params)
      this.id = params['id'];
      this.type = params['type'] ? Number(params['type']) : 0;
      this.data = this.pqlistfn.getPqone(this.id, this.type);
      this.getContent();
    });
    this.userfn.getUserp().then(res => {
      this.user = res;
    });
  }
  getContent() {
    let hasdata = 1;
    if (!this.data) {
      hasdata = 2;
    }
    this.http.getData(this.http.getpllist, {tid: this.id, page: this.pageObj.page, num: this.pageObj.num, hasdata}).subscribe(res => {
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

  goBack(): void {
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
    if (!content) {
      return false;
    }
    console.log(content);
    const item: any = Object.assign({}, this.setPlitem);

    const obj: any = {
      touid: item.userid || this.data.userid,
      tid: this.data.id,
      content,
    };
    if (item.uid != this.user.user_id && item.touid == this.user.user_id) {
      obj.ishf = 1;
    } else {
      obj.ishf = 0;
    }
    console.log(item)
    if (item.pid && item.pid != 0){
      obj['pid'] = item.pid;
    } else if (item.id && item.id != 0) {
      obj['pid'] = item.id;
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
            if (!this.pllist[i].chrild) {
              this.pllist[i].chrild = [];
            }
            this.pllist[i].chrild.unshift(obj);
            this.pllist[i].plnum += 1;
            return false;
          }
        }
      }
    });
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
    this.isclear = setTimeout(() => {
      this.setPlitem = {};
      this.isclear = null;
    }, 1000)
    this.seletename = '';
    this.isshowDrop = false;
  }
  async edmit() {
    const buttons = [{
      text: '分享到微信',
      role: '',
      handler: () => {
        this.native.wechatShare();
      }
    }, {
      text: '分享到微博',
      handler: () => {
        this.native.weboShare();
      }
    }];
    if (this.user.user_id == this.data.userid) {
      buttons.push({
        text: '删除',
        handler: () => {
          this.sureDelete();
        }
      });
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
  seleteItem() {
    console.log(this.data);
    this.http.getDataloading(this.http.deletepqitem, {id: this.id, type: 1}).subscribe(res => {
      this.mydeletefn.setId(this.id, 0);
      this.pqlistfn.deleteOne(this.id);
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
}
