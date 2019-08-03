import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ModalController, NavController} from "@ionic/angular";
import {HttpService} from "../../services/http.service";
import {GwcService} from "../../services/gwc.service";
import {GetproductService} from "../../services/getproduct.service";
import { GoodsattrComponent } from '../../components/goodsattr/goodsattr.component';

// import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  goodsList: any[];
  options: any;
  isclickall: boolean;
  constructor(private nav: NavController, private route: Router,
              private http: HttpService, private gwcfn: GwcService,
              private getProduct: GetproductService, public modalController: ModalController) { }

  ngOnInit() {
    this.isclickall = false;
    // this.gwcfn.getListhttp();
    this.options = this.gwcfn.getOption();
  }
  ionViewDidEnter() {
    this.goodsList = this.gwcfn.getList();

  }
  goBack(): void {
    this.nav.back();
  }

  setIsclick() {
    this.isclickall = true;
  }
  setIsall() {
    if (!this.isclickall) {
      return false;
    }
    this.isclickall = false;
    this.gwcfn.setIsall();
  }
  setYxactive() {
    const selGoods: string[] = [];
    this.goodsList.map(res => {
      res.goods_list.map(data => {
        if (data.active) {
          selGoods.push(data.rec_id);
        }
      });
    });
    // this.yxnum = selGoods.length;
    return selGoods;
  }
  changeattrfn($event) {
    this.getProduct.getProduct($event.gid).then(res => {
      console.log(res);
      const obj = {
        gxb: res.gxb,
        attrlist: res.specification,
        max: res.topData.buymax,
        mrattr: $event.attr,
        goodsid: $event.gid,
        type: 2
      };
      this.presentModal(obj, $event.rec_id, $event.num);
    }).catch(err => {
      // this.goBack()
      console.log(err);
    });
  }
  async presentModal(obj, recid, num) {
    const modal = await this.modalController.create({
      component: GoodsattrComponent,
      cssClass: 'attrModal',
      componentProps: obj
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      if (Number(num) === data.num && isonearr(obj.mrattr, data.arr)) {
        return false;
      }
      console.log(data);
      console.log(recid);
      console.log(num);
      const objp = {
        rec_id: recid,
        goods_id: obj.goodsid,
        attr: data.arr,
        number: data.num
      }
      this.http.postformdataloading(this.http.updategwcattr, objp).subscribe(res => {
        console.log(res);
        this.gwcfn.changeData(res.goods_list);
      });
      // if (data.arr) {
      //   this.productData.mrattrarr = data.arr;
      //   this.productData.mrseletestr = '';
      //   for (let i = 0, j = this.productData.specification.length; i < j; i++) {
      //     const item = this.productData.specification[i];
      //     for (let ii = 0, jj = item.values.length; ii < jj; ii++) {
      //       const id = item.values[ii].id;
      //       if (data.arr.includes(id)) {
      //         if (!this.productData.mrseletestr) {
      //           this.productData.mrseletestr = item.name + ':' + item.values[ii]['label'];
      //         } else {
      //           this.productData.mrseletestr += ',' + item.name + ':' + item.values[ii]['label'];
      //         }
      //         break;
      //       }
      //     }
      //   }
      // }
      // const obj = {
      //   quick: 0,
      //   spec: data.arr,
      //   goods_id: this.pid,
      //   number: data.num,
      //   parent: 0,
      //   isls: data.type - 2
      // };
      // this.http.postformdata(this.http.addgwc, {goods: JSON.stringify(obj)}).subscribe(res => {
      //   console.log(res['rec_id'])
      //   if (res['rec_id'] && data.type === 3) {
      //     this.route.navigate(['/spgoods-confirmation'], {queryParams: {catid: res['rec_id']}});
      //   } else {
      //     this.gwcfn.getListhttp(1);
      //   }
      // }, error2 => {});
    }

  }
  jspage() {
    console.log(this.setYxactive().join(','))
    this.route.navigate(['/spgoods-confirmation'], {queryParams: {catid: this.setYxactive().join(',')}});
  }
  clickItem($event) {
    this.route.navigate(['/productcontent'], {queryParams: {id: $event.goods_id, suppid: $event.supplier_id}});

  }
}

function isonearr(arr, arr1) {
  if (arr.length !== arr1.length) {
    return false;
  }
  for (let i = 0, j = arr.length; i < j; i++) {
    if (arr[i] !== arr1[i]) {
      return false;
    }
  }
  return true;
}
