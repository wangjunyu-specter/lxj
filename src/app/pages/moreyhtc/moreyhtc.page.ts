import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import { YhtclistService } from '../../services/yhtclist.service';
import { HttpService } from '../../services/http.service';
import {TopageService} from "../../services/topage.service";
import { NativeService } from '../../services/native.service';
@Component({
  selector: 'app-moreyhtc',
  templateUrl: './moreyhtc.page.html',
  styleUrls: ['./moreyhtc.page.scss'],
})
export class MoreyhtcPage implements OnInit {
  goodsid: string;
  list: any[];
  constructor(private nav: NavController,
              private yhtcfn: YhtclistService, private http: HttpService,
              private activeroute: ActivatedRoute,
              private topage:TopageService, private route: Router, private native: NativeService) { }

  ngOnInit() {
    const params = this.activeroute.snapshot.queryParams;
    this.goodsid = params['id'] || '-1';

  }
  ionViewDidEnter() {
    this.getList()
  }
  getList () {
    this.yhtcfn.getData(this.goodsid).then(res => {
      console.log(res)
      this.list = res as any[];
    }).catch(err => {

    })
  }
  goBack(): void {
    this.nav.back();
  }
  add (item, type) {
    const obj: object = {
      package_id: item.act_id,
      number: 1,
      isls: type - 1
    }
    this.http.postformdata(this.http.addtc, {package_info: JSON.stringify(obj)}).subscribe(res =>{
      console.log(res)

      if (res.status == 1 && res.rec_id) {
        if (type == 1) {
          this.native.presentToast('已加入购物车')
        } else if (type == 2) {
          this.route.navigate(['/spgoods-confirmation'], {queryParams: {catid: res['rec_id']}});
        }
      }
    }, error2 => {})
  }
  openpage ($event) {
    console.log($event)
    this.topage.toPage(2, $event.goods_id, name)
  }
}
