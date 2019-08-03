import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
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
  tjlist: any[];
  isactive: number; // 1 首页 2商品列表
  isnavactive: number;
  supplier: any;
  constructor(private nav: NavController, private suppliserlist: SupplierlistService,
              private activeroute: ActivatedRoute,
              private http: HttpService, private route: Router,
              private tjlistfn: SjindextjgoodsService, private collefn: CollelistService) { }

  ngOnInit() {
    this.tjlist = [];
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
  getIndextj (id) {
    this.tjlistfn.getData(id).then(res => {
      console.log(res)
      this.tjlist.push(...res['best_goods'])
      this.tjlist.push(...res['hot_goods'])
      this.tjlist.push(...res['new_goods'])
      this.tjlist.push(...res['tjgoods'])
    }).catch(err => {})
  }
  goBack () {
    this.nav.back();
    // this.nav.navigateBack('/productcontent');
  }
  setNav ($event) {
    this.isactive = $event;
  }
  selectepx (type: number) {
    this.isnavactive = type;
  }
  toPage () {
    this.nav.navigateForward('/sjdpyx');
  }
  setGz () {
    console.log(this.supplier)
    this.suppliserlist.setData(this.supplier['suppid'], 'is_guanzhu', true)
    this.http.getData(this.http.scshop, {suppId: this.supplier['suppid']}).subscribe(res => {
      this.collefn.reset();
    }, error2 => {
      this.collefn.reset();
    })
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
