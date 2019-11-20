import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sj-productnav',
  templateUrl: './sj-productnav.page.html',
  styleUrls: ['./sj-productnav.page.scss'],
})
export class SjProductnavPage implements OnInit {
  navlist: any[];
  suppId: number;
  isget: boolean;
  active: number;
  activeList: object[]; // 当前选中分类
  constructor(private nav: NavController, public http: HttpService, private activeroute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    // this.activeroute.queryParams.subscribe(params => {
    //   console.log(params);
    //   // this.getObj.category = params['id'];
    //   // this.active.id = params['id'];
    // });
    // console.log(this.route.snapshot.paramMap.get('id'))
    this.navlist = [];
    this.suppId = this.activeroute.snapshot.params['id'];
    this.isget = false;
    this.active = 0;
    console.log(this.suppId)
  }
  ionViewDidEnter() {
    if (!this.isget) {
      this.http.getData(this.http.getsjfl, {suppId: this.suppId}).subscribe(res => {
        console.log(res)
        this.navlist.push(...res['data']);
        this.setActive(0, this.navlist[0]);
      }, err => {
        console.log(err)
      });
      this.isget = true;
    }
  }
  goBack () {
    this.nav.back();
  }
  clickotherfn(item) {
    this.open(item.id)
  }
  open (id) {
    this.route.navigate(['/sjproducts', id || 1], {queryParams: {listid: id ? id : 1, suppId: this.suppId}});
  }
  setActive(index: number, item) {
    this.active = index;
    this.activeList = item;
  }
}
