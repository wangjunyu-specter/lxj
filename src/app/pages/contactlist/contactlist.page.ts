import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ContactlistService} from '../../services/contactlist.service';
import {ActivatedRoute, Router} from '@angular/router';
// import { NativeService } from '../../services/native.service';
@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.page.html',
  styleUrls: ['./contactlist.page.scss'],
})
export class ContactlistPage implements OnInit {
  // list: any[]
  pageType: number; // 页面类型 1 选择出行人 2 选择收货人 3查看详情
  pernum: number; // 选择数量
  activeList: any[];
  constructor(private nav: NavController, private contactlist: ContactlistService,
              private activeroute: ActivatedRoute,
              private route: Router
              // private alertController: AlertController
  ) {
    this.pageType = 3;
    this.pernum = 1;
  }

  ngOnInit() {
    const params = this.activeroute.snapshot.queryParams;
    this.pageType = Number(params['type']);
    console.log(this.pageType)
    this.pernum = Number(params['num'])
    if (this.pageType == 2) {
      this.pernum = 1;
    }
  }
  ionViewDidEnter() {
    // this.list = this.contactlist.getContactlist()
    this.contactlist.getActive().then(res => {
      this.activeList = res;
    });
  }
  goBack(): void {
    this.nav.back();
  }
  clickitem (item) {
    console.log(item)
    if (this.pageType !== 3) {
      this.contactlist.setActive(item, this.pernum);
    } else {
      return false;
    }
  }
  // edmit (item) {
  //
  // }
  // setMr (id: string) {
  //   this.contactlist.setMr(id);
  // }
  // delete (id: string) {
  //   this.contactlist.delete(id);
  // }
}
