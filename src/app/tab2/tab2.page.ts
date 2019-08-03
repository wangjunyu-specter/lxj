import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {ShopContentService} from '../services/shop-content.service';
import {NativeService} from '../services/native.service';
import {Router} from "@angular/router";
import { PqlistService } from '../services/pqlist.service';
import {GzlistService} from "../services/gzlist.service";
import {YjlistService} from "../services/yjlist.service";
import { ModalController } from '@ionic/angular';
import { MediaFile } from '@ionic-native/media-capture/ngx';
import { SeleteMediaService } from '../services/selete-media.service';
// import {FbseletePage} from '../pages/fbselete/fbselete.page';
import { FbseleteComponent } from '../components/fbselete/fbselete.component';
import { TopageService } from '../services/topage.service';
import {error} from 'selenium-webdriver';
// import {SharesearchComponent} from "../components/sharesearch/sharesearch.component";
// import {VideoComponent} from '../components/video/video.component';
// import {GoodsattrComponent} from '../components/goodsattr/goodsattr.component';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  shopdata: any;
  pageType: number;
  pageArray: string[];
  gzlist: any[];
  pqlist: any[];
  yjlist: any[];
  gllist: any[];
  zmlist: any[];
  ishttp: Set<string>;
  media: any;
  searchKey: string;
  constructor(private http: HttpService, private shop: ShopContentService,
              private route: Router, private pqlistfn: PqlistService,
              private gzlistfn: GzlistService, private yjlistfn: YjlistService,
              public modalController: ModalController, private topage: TopageService,
              private native: NativeService, private seletemedia: SeleteMediaService) {
    this.pageType = 0;
    this.pageArray = ['关注', '票圈', '游记', '攻略', '招募'];
    this.ishttp = new Set();
  }
  ionViewDidEnter() {
    console.log('加载完了')
    this.gzlist = this.pqlistfn.getgzList();
    this.shop.getShop().then(res => {
      this.shopdata = res;
      if (this.shopdata.search_keywords) {
        this.searchKey = this.shopdata.search_keywords.split('|')[2];
      }
    }).catch(err => {

    });
  }
  ngOnInit() {
    // this.gzlist = this.pqlistfn.getgzList();
    // this.shop.getShop().then(res => {
    //   this.shopdata = res;
    // }).catch(err => {
    //
    // });
  }
  toPage(id) {
    console.log(id)
    const type = this.pageType;
    if (type < 2) {
      this.route.navigate(['/pqcontent'], {queryParams: {id, type}});
    } else {
      this.route.navigate(['/yjcontent'], {queryParams: {id, type: type - 2}});
    }
  }
  searchModal() {
    // const modal = await this.modalController.create({
    //   component: SharesearchComponent,
    //   componentProps: { searchKey: this.searchKey }
    // });
    // return await modal.present();
    this.route.navigate(['/sharesearch'], {queryParams: {searchKey: this.searchKey}})
  }
  setType(type: number) {
    this.pageType = type;
    if (type === 1 && !this.pqlist) {
      this.pqlist = this.pqlistfn.getList();
    } else if (type === 2 && !this.yjlist) {
      this.yjlist = this.yjlistfn.getyjList();
    } else if (type === 3 && !this.gllist) {
      this.gllist = this.yjlistfn.getglList();
    } else if (type === 4 && !this.zmlist) {
      this.zmlist = this.yjlistfn.getzmList();
    }
  }
  doRefresh(event) {
    switch (Number(this.pageType)) {
      case 0:
        this.pqlistfn.reset(1).then(res =>{
          event.target.complete();
        }).catch(err2 => {
          event.target.complete();
        });
        break;
      case 1:
        this.pqlistfn.reset(2).then(res =>{
          event.target.complete();
        }).catch(err2 => {
          event.target.complete();
        });
        break;
      case 2:
        this.yjlistfn.reset(1).then(res =>{
          event.target.complete();
        }).catch(err2 => {
          event.target.complete();
        });
        break;
      case 3:
        this.yjlistfn.reset(2).then(res =>{
          event.target.complete();
        }).catch(err2 => {
          event.target.complete();
        });
        break;
      case 4:
        this.yjlistfn.reset(3).then(res =>{
          event.target.complete();
        }).catch(err2 => {
          event.target.complete();
        });
        break;
    }
  }
  loadData(event) {
    switch (Number(this.pageType)) {
      case 0:
        this.pqlistfn.addList(1).then(res =>{
          event.target.complete();
        }).catch(err2 => {
          event.target.complete();
        });
        break;
      case 1:
        this.pqlistfn.addList(2).then(res =>{
          event.target.complete();
        }).catch(err2 => {
          event.target.complete();
        });
        break;
      case 2:
        this.yjlistfn.addList(1).then(res =>{
          event.target.complete();
        }).catch(err2 => {
          event.target.complete();
        });
        break;
      case 3:
        this.yjlistfn.addList(2).then(res =>{
          event.target.complete();
        }).catch(err2 => {
          event.target.complete();
        });
        break;
      case 4:
        this.yjlistfn.addList(3).then(res =>{
          event.target.complete();
        }).catch(err2 => {
          event.target.complete();
        });
        break;
    }
  }
  async tofb() {
    const modal = await this.modalController.create({
      component: FbseleteComponent
    });
    modal.onDidDismiss().then(res => {
      console.log(res);
      if (!res.data) {
        return false;
      }
      if (res.data.type === 0) {
        if (res.data.mediatype === 1) {
          this.native.getPictureByCamera().then(filedata => {
            if (!filedata) {
              return false;
            }
            this.seletemedia.addImg(filedata);
            this.toFbpq(res.data.mediatype);
          });
          // this.native.getPictureByCamera().then((filedata: MediaFile) => {
          //
          // }, err => {});
        } else if (res.data.mediatype === 2) {
          this.native.captureVideo().then((filedata: MediaFile) => {
            if (!filedata) {
              return false;
            }
            this.seletemedia.setData(filedata);
            this.toFbpq(res.data.mediatype);
          }, err => {});
        } else {
          this.native.getPictures(9).then((path: any) => {
            if (!path || path.length == 0) {
              return false;
            }
            path.map(img => {
              this.seletemedia.addImg(img);
            })
            this.toFbpq(res.data.mediatype);
          });
        }
      } else {
        this.route.navigate(['/fbyj'], {queryParams: {type: res.data.type}});
      }
      // this.setData(item.menu_url);
    })
    return await modal.present();
  }
  toFbpq(type) {
    this.route.navigate(['/fbpqimg'] , {queryParams: {type}});
  }
  toPages(type, id?: string, name?: string) {
    this.topage.toPage(type, id, name);
  }
  setdz(item) {
    console.log(item)
    if (this.ishttp.has(item.id)) {
      this.native.presentToast('请稍后再试!');
      return false;
    }
    this.ishttp.add(item.id);
    let isqx: number;
    if (item.isdz == 0) {
      isqx = 0;
    } else {
      isqx = 1;
    }
    const obj = {
      touid: item.userid,
      tid: item.id,
      istop: 1,
      isqx
    }
    this.http.getData(this.http.setdz, obj).subscribe(res => {
      this.ishttp.delete(item.id);
      // if (isqx == 1) {
      //   item.isdz = 0;
      // } else {
      //   item.isdz = 1;
      // }
      // item.dznum = res.result.dznum;
      // if (item.heads.length === 5 && item.dznum < 5) {
      //   item.heads = item.heads.splice(0, item.dznum);
      // }
      this.setdatadz(item, isqx, res.result.dznum);
      this.setopydata(item.id, isqx, res.result.dznum);
    }, error2 => {
      this.ishttp.delete(item.id);
    });
  }
  setdatadz(item, isqx, num) {
    if (isqx == 1) {
      item.isdz = 0;
    } else {
      item.isdz = 1;
    }
    item.dznum = num;
    if (item.heads && item.heads.length === 5 && item.dznum < 5) {
      item.heads = item.heads.splice(0, item.dznum);
    }
  }
  setopydata(id, isqx, num) {
    let arr: any[];
    if (this.pageType === 0) {
      arr = this.pqlist;
    } else if (this.pageType === 1) {
      arr = this.gzlist;
    }
    for (let i = 0, j = arr.length; i < j; i++) {
      if (arr[i].id == id) {
        console.log(arr[i])
        this.setdatadz(arr[i], isqx, num);
        return;
      }
    }
  }
  setgz(touid) {
    this.http.getData(this.http.setgz, {touid, type: 1}).subscribe(res => {
      console.log(res)
      this.gzlistfn.puitem(touid);
    });
  }
  goperson(id) {
    console.log(id)
    this.route.navigate(['/myrelease'], {queryParams: {userid: id}});
  }
}
