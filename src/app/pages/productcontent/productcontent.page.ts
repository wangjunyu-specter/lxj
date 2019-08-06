import { NativeService } from './../../services/native.service';
/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-08-06 23:03:41
 * @Description: file content
 */
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {NavController, IonContent, ActionSheetController, ModalController, PopoverController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpService } from '../../services/http.service';
import { GetproductService } from '../../services/getproduct.service';
import { DomSanitizer } from '@angular/platform-browser';
// import {ShopContentService} from "../../services/shop-content.service";
import { SupplierlistService } from '../../services/supplierlist.service';
// import { UserService } from '../../services/user.service';
import { GoodsattrComponent } from '../../components/goodsattr/goodsattr.component';
import { GoodsContentnavComponent } from '../../components/goods-contentnav/goods-contentnav.component';
import { LljlService } from '../../services/lljl.service';
import {GwcService} from "../../services/gwc.service";
import { CollelistService } from '../../services/collelist.service';
import { XcsclistService } from '../../services/xcsclist.service';
import { AvailableBonusComponent } from '../../components/available-bonus/available-bonus.component';


@Component({
  selector: 'app-productcontent',
  templateUrl: './productcontent.page.html',
  styleUrls: ['./productcontent.page.scss'],
})
export class ProductcontentPage implements OnInit {
  scroolold: number;
  slideOpts: any; // swiper 参数
  @ViewChild(IonContent) content: IonContent;
  pageNav: number;
  isshowtopnav: boolean;
  xclx: any[];
  xsHouse: string;
  xsMin: string;
  xsSec: string;
  xsday: string;
  twcontent: string;
  pinglunnum: number;
  pingluntags: any[];
  pid: string; // 产品id
  suppid: any; // 店铺id
  comment: any[];
  productData: any;
  tcxqIndex: number;
  slideOpts2: any;
  toolbaropacity: string;
  shopName: string;
  oldId: string[]; // 历史产品id
  oldsuppid: string[]; // 历史店铺id
  isSetout: any;
  supplier: any;
  slideOptslv: any;
  // mrattrarr: string[]; // 默认选中属性
  // mrseletestr: string;
  constructor(private nav: NavController, private el: ElementRef, private route: Router,
              private http: HttpService, private activeroute: ActivatedRoute, public sanitizer: DomSanitizer,
              private getProduct: GetproductService, public actionSheetController: ActionSheetController,
              private supplierlist: SupplierlistService, public modalController: ModalController,
              public popoverController: PopoverController, private lljlfn: LljlService, private gwcfn: GwcService,
              private collefn: CollelistService, private xcxlfn: XcsclistService, private native: NativeService) {
    this.slideOptslv = {
      // slidesOffsetBefore : 50,
      slidesPerView : 3.2,
      slidesPerGroup : 1,
      spaceBetween : 10,
      pagination: ''
      // slidesOffsetAfter : 100,
    };
  }
  ionViewWillEnter() {
    console.log('要进来了');
  }
  ionViewDidEnter() {
    console.log('进来了')
    this.setInit();
  }
  ngOnInit() {
    console.log('准备进来了');
    this.oldId = [];
    this.oldsuppid = [];
    this.slideOpts = {
      slidesPerView : 4.5,
      slidesPerGroup : 1,
      spaceBetween : 5,
      zoom: {
        toggle: false
      }
    };
    this.slideOpts2 = {
      slidesPerView : 4.2,
      slidesPerGroup : 1,
      spaceBetween : 5,
      zoom: {
        toggle: false
      }
    };
    this.cleardate();
  }
  doRefresh(event) {
    this.cleardate();
    const id = this.oldId[this.oldId.length - 1];
    const suppid = this.oldsuppid[this.oldsuppid.length - 1]
    // this.setInit(this.oldId[this.oldId.length - 1], this.oldsuppid[this.oldsuppid.length - 1]);
    this.pageNav = 1;
    this.isshowtopnav = false;
    this.toolbaropacity = '0';
    this.comment = [];
    this.tcxqIndex = 0;
    this.pid = id;
    this.getData(id, true).then(res => {
      event.target.complete();
    }).catch(err2 => {
      event.target.complete();
    });

    this.getComment(id);
    this.suppid = suppid;
    this.getsupplier();
  }
  setInit(id='-1', suppid = '0') {
    this.toolbaropacity = '0';
    this.comment = [];
    this.tcxqIndex = 0;
    if (id != '-1') {
      this.pid = id;
      this.getData(id);
      this.getComment(id);
      this.suppid = suppid;
      this.getsupplier();
    } else {
      this.activeroute.queryParams.subscribe(params => {
        let id = params['id'];
        if (this.oldId.length > 0 && this.oldId[this.oldId.length - 1] == id) {
          return false;
        }
        this.suppid = params['suppid'] || '-1';
        if (this.oldsuppid.length > 0 && this.suppid === '-1') {
          this.suppid = this.oldsuppid[this.oldsuppid.length - 1];
        }
        this.pid = id;
        this.oldId.push(this.pid);
        this.getsupplier();
        this.getData(id);
        this.getComment(id);
        this.lljlfn.addjl(id);
      });
    }

    this.pageNav = 1;
    this.isshowtopnav = false;
  }
  setTccontentindex ($event) {
    this.tcxqIndex = $event.id - 1;
  }
  // 获取店铺信息
  getsupplier() {
    this.supplierlist.getData(this.suppid, this.pid).then(res => {
      if (this.suppid == '-1') {
        this.suppid = res.suppid;
      }
      this.supplier = res;
    }).catch(err =>{
      console.error(err);
    });
  }
  async getData(id, isre?) {
    await this.getProduct.getProduct(id, isre).then(res => {
      this.productData = res;
      if (this.productData.xsprice.promote_price && this.productData.xsprice.promote_price !== '0'
        && this.productData.xsprice.promote_end_date) {
        this.setXstime();
      }
    }).catch(err => {
      // this.goBack()
      console.error(err);
    });
    return true;
  }
  getComment(id) {
    this.http.getData(this.http.getGoodcomment, {'goods_id': id}).subscribe(res => {
      this.pingluntags = res['data']['tags'];
      this.comment = res['data']['comment'];
    }, err => {});
  }
  assembleHTML(strHTML: any) {
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }
  setTimetc ($event) {
    this.getProduct.clickOuttime($event.id);
  }
  setXstime () {
    const setTime = setInterval(() => {
      const endDate = this.productData.xsprice.promote_end_date;
      const nowDate = Date.parse((new Date()).toString());
      const totalSeconds = parseInt(((Number(endDate) - Number(nowDate)) / 1000).toString(), 10);
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      let modulo = totalSeconds % (60 * 60 * 24);
      const hours = Math.floor(modulo / (60 * 60));
      modulo = modulo % (60 * 60);
      const minutes = Math.floor(modulo / 60);
      const seconds = parseInt((modulo % 60).toString(), 10);
      if (hours >= 10) {
        this.xsHouse = hours.toString();
      } else {
        this.xsHouse = `0${hours}`;
      }
      if (minutes >= 10) {
        this.xsMin = minutes.toString();
      } else {
        this.xsMin = `0${minutes}`;
      }
      if (seconds >= 10) {
        this.xsSec = seconds.toString();
      } else {
        this.xsSec = `0${seconds}`;
      }
      this.xsday = days.toString();
      if (days === 0 && hours === 0 && minutes === 0 && seconds <= 0) {
        clearInterval(setTime);
      }
    }, 1000);
  }
  logScrolling ($event) {
    const top: number = $event.detail.scrollTop;
    if (!this.scroolold) {
      this.scroolold = top;
    } else {
      if (this.scroolold > 44 && top > 44) {
        this.setShowtopnav(top, this.scroolold);
        this.scroolold = top;
        return false;
      }
      this.scroolold = top;
    }
    let num = 0;
    if (top < 44) {
      num = top * 2 / 100;
    } else {
      num = 1;
    }
    this.setNavstatus(num);
  }
  setShowtopnav (nowtop, oldtop) {
    const type: number = this.pdtop(nowtop, oldtop);
    if (type === -1) {
      return false;
    } else if (type === 0) {
      if (this.isshowtopnav) {
        this.isshowtopnav = false;
      }
      return ;
    }
    this.pageNav = type;
    if (!this.isshowtopnav) {
      this.isshowtopnav = true;
    }
  }
  setNavstatus(num: number) {
    this.toolbaropacity = parseInt((num * 100).toString(), 10).toString();
  }
  goBack(): void {
    // this.location.back();
    if (this.oldId.length > 1) {
      this.nav.back();
      let id = this.oldId.splice(this.oldId.length - 2, 2);
      let suid = this.oldsuppid.splice(this.oldsuppid.length - 2, 2);
      this.cleardate();
      this.setInit(id[0], suid[0]);
    } else {
      this.nav.back();
    }
  }
  async presentModal(type) {
    const modal = await this.modalController.create({
      component: GoodsattrComponent,
      cssClass: 'attrModal',
      componentProps: {
        // src: this.http.domain + this.productData.goods_thumb,
        max: this.productData.topData.buymax,
        gxb: this.productData.gxb,
        attrlist: this.productData.specification,
        goodsid: this.pid,
        type,
        mrattr: this.productData.mrattrarr
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      if (data.arr) {
        this.productData.mrattrarr = data.arr;
        this.productData.mrseletestr = '';
        for (let i = 0, j = this.productData.specification.length; i < j; i++) {
          const item = this.productData.specification[i];
          for (let ii = 0, jj = item.values.length; ii < jj; ii++) {
            const id = item.values[ii].id;
            if (data.arr.includes(id)) {
              if (!this.productData.mrseletestr) {
                this.productData.mrseletestr = item.name + ':' + item.values[ii]['label'];
              } else {
                this.productData.mrseletestr += ',' + item.name + ':' + item.values[ii]['label'];
              }
              break;
            }
          }
        }
      }
      const obj = {
        quick: 0,
        spec: data.arr,
        goods_id: this.pid,
        number: data.num,
        parent: 0,
        isls: data.type - 2
      };
      this.http.postformdata(this.http.addgwc, {goods: JSON.stringify(obj)}).subscribe(res => {
        if (res['rec_id'] && data.type === 3) {
          this.route.navigate(['/spgoods-confirmation'], {queryParams: {catid: res['rec_id']}});
        } else {
          this.native.presentToast(res.msg || res.message)
          this.gwcfn.getListhttp(1);
        }
      }, error2 => {});
      // if (data.type === 3) {
      //   this.route.navigate(['/spgoods-confirmation'], );
      // }
      // if (data.type == 2) {
      //   this.http.postformdata(this.http.addgwc, {goods: JSON.stringify({quick: 0, spec: data.arr, goods_id: this.pid, number: data.num, parent: 0})}).subscribe(res => {}, error2 => {})
      // }
    }

  }
  async lqbonus() { // 领取红包
    const modal = await this.modalController.create({
      component: AvailableBonusComponent,
      cssClass: 'attrModal',
      componentProps: {
        // src: this.http.domain + this.productData.goods_thumb,
        list: this.productData.bonusList,
      }
    });
    await modal.present();
  }
  ngOnDestroy() {
    console.log('销毁')
    if (this.isSetout) {
      clearTimeout(this.isSetout)
      this.isSetout = null;
    }
  }
  gotoPoint(type: number) {
    // if (!this.isshowtopnav) return false;

    // this.ioncontent.g
    // this.pageNav = type;
    let top: number = this.getPointtop(type);
    if (type === 1) {
      top -= 44;
    } else {
      top -= 110;
    }
    this.content.scrollToPoint(0, top, 300);
  }
  getPointtop(type?: number) {
    let top: any;
    if (!type) {
      type = this.pageNav;
    }
    if (type === 1) {
      if (this.el.nativeElement.querySelector('.tw-content')) {
        top = this.el.nativeElement.querySelector('.tw-content').offsetTop;
      }
    } else if (type === 2) {
      if (this.el.nativeElement.querySelector('.xcxl')) {
        top = this.el.nativeElement.querySelector('.xcxl').offsetTop;
      }
    } else if (type === 3) {
      if (this.el.nativeElement.querySelector('.fysm')) {
        top = this.el.nativeElement.querySelector('.fysm').offsetTop;
      }
    } else if (type === 4) {
      if (this.el.nativeElement.querySelector('.gmxz')) {
        top = this.el.nativeElement.querySelector('.gmxz').offsetTop;
      }
    }
    return top || 0;
  }
  pdtop(nowtop: number, oldtop: number) {
    for (let i = 1; i <= 4; i++) {
      let top = this.getPointtop(i);
      let ntop = this.getPointtop(i + 1);
      ntop -= 120;
      if (i !== 1) {
        top -= 120;
      } else {
        top -= 72;
      }
      if (nowtop <= top) {
        if (oldtop > top) {
          return 0;
        } else if (oldtop <= top) {
          return -1;
        }
      } else if (nowtop > top && nowtop <= ntop) {
        return i;
      } else if (nowtop > ntop) {
        continue;
      }
    }
    return 4;
  }
  showfw () {
    let arr = [];
    for (let i = 0, j = this.productData.fw.length; i < j; i++) {
      let item = this.productData.fw[i];
      let obj = {
        text: item,
        handler: () => {}
      }
      arr.push(obj);
    }

    this.showMore(arr, '所有服务')
  }
  showyh () {
    let arr = [];
    for (let i = 0, j = this.productData.promotion.length; i < j; i++) {
      let item = this.productData.promotion[i];
      let obj = {
        text: item.act_name,
        handler: () => {}
      }
      arr.push(obj);
    }
    for (let i = 0, j = this.productData.volume_price_list.length; i < j; i++) {
      let item = this.productData.volume_price_list[i];
      let obj = {
        text: '满' + item.number + '件享受' + item.price +'/件',
        handler: () => {}
      }
      arr.push(obj);
    }
    this.showMore(arr, '优惠信息')
  }
  async showMore(arr = [], title = '提示') {
    const actionSheet = await this.actionSheetController.create({
      header: title,
      mode: 'md',
      buttons: arr
    });
    await actionSheet.present();
  }
  openpage () {
    if (!this.productData.month || this.productData.month.length == 0 || this.productData.month.length == 0 || this.productData.isdelete == 1) {
      return false;
    }
    // this.nav.navigateForward(['/selete-content'], );
    this.route.navigate(['/selete-content'], {queryParams: {id: this.pid}});

  }
  opendp(type?) {
    if (type && this.suppid.toString() === '0') {
      if (this.productData.ishw) {
        this.nav.navigateBack('tabs/tab1');
      } else {
        this.nav.navigateBack('tabs/tab3');
      }
    } else {
      this.route.navigate(['/sj-index'], {queryParams: {id: this.suppid}});
    }
  }
  scgoods() {
    this.http.getData(this.http.addgz, {id: this.pid}).subscribe(res => {
      this.productData.issc = this.productData.issc === 1 ? 0 : 1;
      if (this.productData.ishw) {
        this.xcxlfn.reset();
      } else {
        this.collefn.reset();
      }
    }, error2 => {
      if (this.productData.ishw) {
        this.xcxlfn.reset();
      } else {
        this.collefn.reset();
      }
    });
  }
  /**
   *
   * @param $event
   */
  optenProduct ($event) {
    this.oldsuppid.push(this.suppid);
    let supid:string;
    for (let item of this.supplier.best_goods) {
      if ($event == item['goods_id']) {
        supid = item['suppid'];
        this.suppid = supid;
        break;
      }
    }
    this.route.navigate(['/productcontent'], {queryParams: {id: $event, suppid: this.suppid}});
    this.cleardate();
    this.setInit($event, this.suppid);
    this.content.scrollToPoint(0, 0, 0);
  }
  gototc() {
    this.route.navigate(['/moreyhtc'], {queryParams: {id: this.pid}})
  }
  async toprightmore(ev: any) {
    const popover = await this.popoverController.create({
      component: GoodsContentnavComponent,
      event: ev,
      mode: 'ios',
      translucent: true
    });
    return await popover.present();
  }
  cleardate() {
    this.scroolold = null;
    this.pageNav = null;
    this.isshowtopnav = null;
    this.xclx = null;
    this.xsHouse = null;
    this.xsMin = null;
    this.xsSec = null;
    this.xsday = null;
    this.twcontent = null;
    this.pinglunnum = null;
    this.pingluntags = null;
    this.pid = null;
    this.comment = null;
    this.tcxqIndex = null;
    this.toolbaropacity = null;
    this.shopName = null;
  }
}
