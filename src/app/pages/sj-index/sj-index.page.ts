/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-08-07 23:50:59
 * @Description: file content
 */
import { Component, OnInit, ViewChild  } from '@angular/core';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { SupplierlistService } from '../../services/supplierlist.service';
import {ActivatedRoute, Router} from "@angular/router";
import { HttpService } from '../../services/http.service';
import { SjindextjgoodsService } from '../../services/sjindextjgoods.service';
import { CollelistService } from '../../services/collelist.service';

@Component({
  selector: 'app-sj-index',
  templateUrl: './sj-index.page.html',
  styleUrls: ['./sj-index.page.scss'],
})
export class SjIndexPage implements OnInit {
  tjlist: any[]; // 分类推荐
  tjlist1: any[]; // 精品推荐
  tjlist2: any[]; // 热销推荐
  tjlist3: any[]; // 新品推荐
  isactive: number; // 1 首页 2商品列表
  isnavactive: number;
  supplier: any;
  all: object[]; // 所有商品
  suppId: string; // 商家id
  pageObj: object;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private nav: NavController, private suppliserlist: SupplierlistService,
              private activeroute: ActivatedRoute,
              private http: HttpService, private route: Router,
              private tjlistfn: SjindextjgoodsService, private collefn: CollelistService) { }

  ngOnInit() {
    this.pageObj = {
      page: 1,
      page_size: 20
    };
    this.all = [];
    this.tjlist = [];
    this.tjlist1 = [];
    this.tjlist2 = [];
    this.tjlist3 = [];
    this.isactive = 1;
    this.isnavactive = 1;
  }
  ionViewDidEnter() {
    this.activeroute.queryParams.subscribe(params => {
      let id = params['id']
      this.suppliserlist.getData(id).then(res => {
        this.supplier = res;
        // this.tjlist.push(...this.supplier['best_goods'])

      }).catch(err => {})
      console.log(this.supplier)
      this.getIndextj(id)

    });
  }
  getIndextj(id) {
    this.suppId = id;
    this.tjlistfn.getData(id).then(res => {
      console.log(res)
      this.tjlist1.push(...res['best_goods']);
      this.tjlist2.push(...res['hot_goods']);
      this.tjlist3.push(...res['new_goods']);
      this.tjlist.push(...res['tjgoods']);
    }).catch(err => {});
  }
  goBack() {
    this.nav.back();
    // this.nav.navigateBack('/productcontent');
  }
  setNav($event) {
    this.isactive = $event;
    if ($event == 2 && this.all.length === 0) {
      this.getAll();
    }
  }
  loadData(event) {
    this.pageObj['page']++;
    this.getAll(event);
  }
  getAll(event?) {
    const obj = Object.assign({suppId: this.suppId}, this.pageObj);
    this.http.getDataloading(this.http.getsjsearchgoods, obj).subscribe(res => {
      console.log(res)
      if (res.data && res.data.length > 0) {
        this.all.push(...res['data']);
      }
      if (!res['data'] || res['data'].length < this.pageObj['page_size']) {
        this.infiniteScroll.disabled = true;
      }
      if (event) {
        event.target.complete();
      }
    }, err2 => {
      if (event) {
        event.target.complete();
      }
    });
  }
  selectepx (type: number) {
    this.isnavactive = type;
  }
  toPage() {
    this.nav.navigateForward('/sjdpyx');
  }
  toSearch() {
    this.nav.navigateForward('/sjsearch', {queryParams: {suppid: this.suppId}});
  }
  setGz() {
    console.log(this.supplier);
    this.suppliserlist.setData(this.supplier['suppid'], 'is_guanzhu', true)
    this.http.getData(this.http.scshop, {suppId: this.supplier['suppid']}).subscribe(res => {
      this.collefn.reset();
    }, error2 => {
      this.collefn.reset();
    });
  }
  goodsContent ($event) {
    console.log($event);
    this.open($event.goods_id || $event.id)
  }
  open (id) {
    if (isNaN(Number(id))) {
      return false;
    }
    this.route.navigate(['/productcontent'], {queryParams: {id: id, suppid: this.supplier.suppid}});
  }
}
