import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import { ZtListService } from '../../services/zt-list.service';
import {ActivatedRoute} from "@angular/router";
import { HttpService } from '../../services/http.service';
import {TopageService} from "../../services/topage.service";
@Component({
  selector: 'app-zt',
  templateUrl: './zt.page.html',
  styleUrls: ['./zt.page.scss'],
})
export class ZtPage implements OnInit {
  scroolold: number; // 滚动条上一次的值
  title: string;
  topone: any;
  list: any[];
  banner: string;
  banner1: string;
  xsday: string;
  xsHouse: string;
  xsMin: string;
  xsSec: string;
  constructor(private nav: NavController, private ztlist: ZtListService,
              private activeroute: ActivatedRoute, private http: HttpService, private topage:TopageService) { }

  ngOnInit() {
    // this.getData
  }
  ionViewDidEnter() {
    this.getParam();
  }
  getParam () {
    this.activeroute.queryParams.subscribe(params => {
      console.log(params['id'])
      this.ztlist.getData(params['id']).then(res => {
        this.setData(res)
      }).catch(err => {
        console.log(err)
        this.nav.back();
      })
    }, err => {});
  }
  setData (data: any) {
    console.log(data)
    this.title = data['title'];
    this.banner = data['pic'];
    const res = data['sort_goods_arr'];
    if (res[0] && res[0]['goods'] && res[0]['goods'].length > 0) {
      if (res[0]['goods'].length === 1) {
        this.settopone(res[0]['goods'][0])
        if (!this.banner) {
          this.banner1 = this.topone['goods_img'];
        }
      } else {
        this.settopone(res[0]['goods'].splice(0, 1)[0])

      }
    }
    this.list = res;
  }
  settopone (data: any) {
    delete data['goods_thumb'];
    this.topone = data;
    if (this.topone.promote_price && this.topone.promote_price !== '0'
      && this.topone.promote_end_date) {
      this.setXstime();
    }
  }
  setXstime () {
    const setTime = setInterval(() => {
      const endDate = this.topone.promote_end_date;
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
    this.setNavstatus(num.toString());
  }
  setNavstatus (num: string) {
    const el = document.querySelector('ion-toolbar');
    el.style.setProperty('--opacity', num);
  }
  goBack(): void {
    this.nav.back();
  }
  openpage ($event) {
    this.toPage(2, $event['goods_id']);
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
    // if (type === 2) {
    //   console.log(type)
    //   this.route.navigate(['/productcontent'], {queryParams: {id: id}});
    // } else if (type === 3) {
    //
    // }
    this.topage.toPage(type, id, name)

  }
}
