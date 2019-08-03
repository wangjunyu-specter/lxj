import {Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {ModalController, NavController, PopoverController} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { ShopContentService } from '../../services/shop-content.service';
import { TopnavlistComponent } from '../../components/topnavlist/topnavlist.component';
import { ShopNavService } from '../../services/shop-nav.service';
import { ProductsListService } from '../../services/products-list.service';
import { IonInfiniteScroll } from '@ionic/angular';
import {TopageService} from "../../services/topage.service";
import {SearchComponent} from "../../components/search/search.component";
import {SupplierlistService} from "../../services/supplierlist.service";

// import { GetshopService } from '../../services/getshop.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  scroolold: number; // 滚动条上一次的值
  bannerList: any[];
  dataList: any[];
  getObj: any;
  shop: any;
  active: any; // 当前分类
  last: number; // 最后获取数量
  amount: number; // 每次获取数量
  suppId: number; //
  link: string; // 获取商品链接
  navlist: any;
  listTitle: string; // 列表标题
  ishw: boolean; // 是否户外产品分类
  togglelist: any[]; // 排序列表
  isactivesort: any; // 当前选中排序
  ishwactive: number; // 户外当前选中
  ishwclick: number; // 户外当前选中
  isshowtopnav: boolean;
  navtop: any; // 排序菜单离顶部高度
  months: any[]; // 月份
  mindate: string;
  nowYear: string;
  nowfulldate: string;
  startDate: string; // 出发时间
  endData: string; // 返程时间
  setShow: boolean// 是否显示条件
  pricearea: object[]; // 价格区间
  settitle: string; // 当前选中下标题
  allAddress: object;
  yhqdata: boolean;
  toolbaropacity: string;
  childnav: object[];
  price_grade: object[]; // 价格序列
  isshowbg: boolean;
  setCloseattr: boolean;
  changeAddress: boolean; // 是否点击热门推荐
  tjcity: object[]; // 推荐的城市
  jtjyList: object[]; // 几天几夜列表
  constructor(private nav: NavController, private route: Router,
              private http: HttpService, private activeroute: ActivatedRoute,
              private shopservice: ShopContentService, public popoverController: PopoverController,
              private shopnav: ShopNavService, private productslist: ProductsListService,
              private topage: TopageService, private el: ElementRef, public modalController: ModalController,
              public changeDetectorRef:ChangeDetectorRef, private supplierfn: SupplierlistService) {

  }
  ionViewDidEnter() {
    console.log('加载完了')
    this.shopservice.getShop().then(res => {
      this.shop = res;
      this.getParam();
    }).catch(err => {});
  }
  ngOnInit() {
    this.childnav = [];
    this.toolbaropacity = '0';
    this.yhqdata = false;
    this.setShow = false;
    this.getObj = {
      category: 368,
      display: 'grid',
      brand: 0,
      price_min: 0,
      price_max: 0,
      filter_attr: 0,
      page: 1,
      sort: '',
      order: '',
      other_has: 1
    };
    this.suppId = 0;
    this.active = {}
    this.setdefalt()

  }
  setDefualsort() { // 只能单选排序属性
    this.getObj.brand = 0;
    this.getObj.price_min = 0;
    this.getObj.price_max = 0;
    this.getObj.filter_attr = 0;
    this.getObj.page = 1;
    this.getObj.sort = '';
    this.getObj.order = '';
    this.getObj.other_has = 1;

    this.isactivesort.id = this.togglelist[0].id;
    this.isactivesort.sortname = this.togglelist[0].type || ''; // 排序方式
    this.isactivesort.sort = ''; // 排序顺序
  }
  async doRefresh(event?) {
    console.log('Begin async operation');
    this.isshowbg = false;
    this.setdefalt();
    const obj = {
      last: this.last,
      amount: this.amount,
    };
    this.last = this.amount;
    try {
      const data = await this.gethttp(obj);
      console.log(data)
      this.dataList = data as any[];

      // this.dataList.push(...data);
      if (event) {
        this.closeDrop();
        event.target.complete();
        console.log('执行了')
      } else {
        this.changeDetectorRef.detectChanges();
      }
    } catch (err) {
      if (event) {
        event.target.complete();
        console.log('执行了')
      }
    }

  }
  setdefalt() {
    this.dataList = null;
    this.last = 0;
    this.amount = 20;
  }
  getParam() {
    this.activeroute.queryParams.subscribe(params => {
      console.log(this.yhqdata)
      if (this.yhqdata) {
        return false;
      }
      this.yhqdata = true;
      console.log(4444)
      console.log(params);
      // this.getObj.category = params['id'];
      // this.active.id = params['id'];
      if (params['suppId']) {
        this.suppId = params['suppId'];
      } else {
        this.suppId = 0;
      }
      if (this.suppId === 0) {
        this.link = this.http.getProductList;
      } else {
        this.link = this.http.getsjflgoods;
        this.getObj = {
          suppId: this.suppId,
          id: params['listid'],
          category: params['listid']
        };
      }
      if (this.suppId == 0) {
        const ishwobj = this.shopnav.ishw(params['listid']);
        this.ishw = ishwobj['ishw'];
        this.childnav = ishwobj['childarr'];
      } else {
        this.supplierfn.getData(this.suppId).then(res => {
          console.log(res);
          if (res.ishw == 1) {
            this.ishw = true;
          }
        }).catch(err2 => {})
      }
      console.log(this.childnav)
      this.setsortfn();
      this.setData(params['listid']);
    });
  }
  setsortfn () {
    this.togglelist = this.shopservice.getSort(this.ishw);
    console.log(this.togglelist);
    this.isactivesort = {
      id: this.togglelist[0].id,
      sortname: this.togglelist[0].type || '', // 排序方式
      sort: '' // 排序顺序
    }
    if (typeof this.togglelist[0].sort === 'string') {
      this.isactivesort.sort = this.togglelist[0].sort;
    } else {
      this.isactivesort.sort = this.togglelist[0].sort[0];
    }
  }
  async searchModel() {
    const modal = await this.modalController.create({
      component: SearchComponent,
      componentProps: { type: this.ishw ? 2 : 1, category: this.getObj.category}
    });
    return await modal.present();
  }
  setData (id) {
    if (this.suppId === 0) {
      this.getObj.category = id;
      this.shopservice.getNavname(id).then(res =>{
        console.log(res)
        this.active = res;
      }).catch(err => {});
      console.log(this.active)
    }
    this.getBanner();
    this.getTj();
    this.getList();
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: TopnavlistComponent,
      event: ev,
      mode: 'ios',
      componentProps: {id: this.getObj.category},
      translucent: true
    });
    popover.onDidDismiss().then(res => {
      if (!res.data) {
        return false;
      }
      const item = res.data;
      // this.yhqdata = false;
      // this.setdefalt();
      // // this.setData(item.menu_url);
      // this.route.navigate(['/products'], {queryParams: {listid: item.menu_url}});
      this.goothercate(item.menu_url);
    })
    return await popover.present();
  }
  goothercate(id: string) {
    this.yhqdata = false;
    this.setdefalt();
    this.route.navigate(['/products'], {queryParams: {listid: id}});
  }
  getList(obj?: any) {
    if (!obj) {
      obj = {
        last: this.last,
        amount: this.amount
      };
    }
    this.last = this.amount;
    console.log(obj)
    // this.http.getpostformdata(this.http.getProductList, this.getObj, obj).subscribe(res => {
    //   console.log(res);
    //   this.dataList = res['data'];
    // }, err => {
    //
    // });
    this.gethttp(obj).then(res => {
      console.log(res);
      this.dataList = res as any[];
    }).catch(err => {

    });
  }
  gethttp (obj) {
    // obj['type'] = this.type;
    if (this.suppId !== 0) {
      obj['page'] = obj.last / this.amount;
      obj['page_size'] = this.amount;
    }
    this.getObj.sort = this.isactivesort.sortname;
    this.getObj.order = this.isactivesort.sort;
    return new Promise((resolve, reject) => {
      this.http.getpostformdataloading(this.link, this.getObj, obj).subscribe(res => {
        console.log(res);
        resolve(res['data']);
        // this.dataList = res['data'];
      }, err => {
        reject(false);
      });
    });
  }
  getBanner () {
    // const obj: any = {
    //   id: this.getObj.category
    // }
    this.productslist.getBanner(this.getObj.category).then(res => {
      console.log(res)
      this.bannerList = res['banner'];
      if (!this.bannerList || this.bannerList && this.bannerList.length == 0) {
        this.toolbaropacity = '100';
      }
      this.listTitle = res['title'];
    }).catch(err => {})

  }
  getTj () {
    if (this.suppId == 0) {
      this.productslist.getNavlist(this.getObj.category).then(res => {
        // this.bannerList = res;
        console.log(res);
        this.setTj(res);
      }).catch(err => {})
    } else {
      this.http.getData(this.http.getProductListtj, {id: this.getObj.category, suppid: this.suppId}).subscribe(res => {
        console.log(res);
        this.setTj(res.data);
        // this.newGoods = data['new_goods'];
      }, err => {
        console.log(err);
      });
    }
  }
  setTj(res) {
    this.navlist = res['banner'];
    this.price_grade = res['price_grade'];
    this.tjcity = res['tjcity'];
    this.jtjyList = res['jtjy'];
    this.jtjyList.unshift({'attr_value': '全部', active: true})
    const carr = [];
    const contryarr = [];
    const addressarr = res['address'];
    addressarr.map(res => {
      if (!contryarr.includes(res['tocountry']['id'])) {
        contryarr.push(res['tocountry']['id']);
        carr.push({name: res['tocountry']['name'], arr: []})
      }
      for (let i = 0; i < carr.length; i++) {
        if (carr[i]['name'] == res['tocountry']['name']) {
          carr[i].arr.push({name: res['tocity']['name'],id: res['tocity']['id'], active: false});
          break;
        }
      }
    })
    console.log(carr)
    this.allAddress = carr;
  }
  loadData(event) {
    const obj = {
      last: this.last,
      amount: this.amount
    };
    this.last += this.amount;
    this.gethttp(obj).then(res => {
      // this.dataList = res;
      this.dataList.push(...res as []);
      event.target.complete();
      if (res['data'].length < 10) {
        event.target.disabled = true;
      }
    }).catch(err => {
      event.target.complete();
      event.target.disabled = true;
    });
  }
  goBack(): void {
    this.yhqdata = false;
    this.setdefalt();
    this.nav.back();
    // this.getParam();
  }
  logScrolling ($event) {
    console.log('滚动')
    const top: number = $event.detail.scrollTop;
    this.setShowtopnav(top);
    let num = 0;
    if (top < 44) {
      num = top * 2 / 100;
    } else {
      num = 1;
    }
    this.setNavstatus(num);
  }
  setShowtopnav (nowtop) {
    console.log('nowtop:' + nowtop)
    const top = this.getPointtop();
    console.log('top:' + top)
    if (nowtop > top) {
      this.isshowtopnav = true;
    } else {
      this.isshowtopnav = false;
    }

  }
  getPointtop() {
    if (!this.navtop) {
      this.navtop = this.el.nativeElement.querySelector('.listnav').offsetTop - 10 - 70;
    }
    return this.navtop;
  }
  setNavstatus(num: number) {
    // console.log(num)
    // const el = document.querySelector('ion-toolbar');
    // el.style.setProperty('--opacity', num);
    if (!this.bannerList || this.bannerList && this.bannerList.length == 0) {
      return false;
    }
    this.toolbaropacity = (parseInt((num * 100).toString(), 10)).toString() as string;

  }

  seleteend(data) {
    this.getObj.time_start = data.start || '';
    this.getObj.jtjy = data.time || '';
    this.getObj.end_time = data.end || '';
    this.getObj.price_min = data.startprice || 0;
    this.getObj.price_max = data.endprice || 0;
    this.getObj.address = data.address || '';
    this.doRefresh();
  }
  setAddress(name: string) {
    this.getObj.address = name;
    this.changeAddress = !this.changeAddress;
    this.doRefresh();
  }
  sethwActivesort(item) {
    this.isactivesort.id = item.id;
    this.isactivesort.sortname = item.type;
    this.isactivesort.sort = item.sort;
    this.doRefresh();
  }
  togglenav(item) {
    console.log(item)

    this.isactivesort.id = item.id;
    this.isactivesort.sortname = item.sortname;
    this.isactivesort.sort = item.sort;
    this.doRefresh();
  }
  openpage($event) {
    console.log($event);
    // this.nav.navigateForward(['/productcontent'], );
    this.route.navigate(['/productcontent'], {queryParams: {id: $event.goods_id, suppid: $event.supplier_id}});
  }
  /**
   * type 1 商品分类列表 2 商品详情 3 主题 4 选择选择地址 5 搜索 6 商城首页
   * @param type
   * @param id
   */
  toPage (type, id?: string, name?: string) {
    console.log(type)
    if (typeof type === 'string') {
      type = Number(type);
    }
    this.topage.toPage(type, id, name);

  }
  isSetshowbg(bool) {
    console.log(bool);
    this.isshowbg = bool;
  }
  closeDrop() {
    this.isshowbg = false;
    this.setCloseattr = !this.setCloseattr;
  }
}
