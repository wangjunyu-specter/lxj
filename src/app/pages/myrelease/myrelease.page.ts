import { NativeService } from 'src/app/services/native.service';
import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {HttpService} from "../../services/http.service";
import {TopageService} from "../../services/topage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GzlistService} from "../../services/gzlist.service";
import { DeletemyreleaseService } from 'src/app/services/deletemyrelease.service';
import { EditmyreleaseService } from 'src/app/services/editmyrelease.service';

@Component({
  selector: 'app-myrelease',
  templateUrl: './myrelease.page.html',
  styleUrls: ['./myrelease.page.scss'],
})
export class MyreleasePage implements OnInit {
  pageType: number;
  yjpageObj: any;
  glpageObj: any;
  zmpageObj: any;
  pqpageObj: any;
  allList: any[];
  userId: string;
  user: any;
  isgz: boolean;
  gzList: string[];
  isios: boolean;
  constructor(private nav: NavController, private http: HttpService, private activeroute: ActivatedRoute,
              private topage: TopageService, private route: Router, private gzlistfn: GzlistService,
              private mydeletefn: DeletemyreleaseService, private editMyrelease: EditmyreleaseService,
              private native: NativeService) { }

  ngOnInit() {
    this.pageType = 1;
    this.isios = false;
    this.allList = [];
    const limit: number = 20;
    this.pqpageObj = {
      page: 1,
      num: limit,
      type: 1,
      isall: false
    };
    this.yjpageObj = {
      page: 1,
      num: limit,
      type: 2,
      isall: false
    };
    this.glpageObj = {
      page: 1,
      num: limit,
      type: 3,
      isall: false
    };
    this.zmpageObj = {
      page: 1,
      num: limit,
      type: 4,
      isall: false
    };
    const params = this.activeroute.snapshot.queryParams;
    this.userId = params['userid'] || 0;

  }
  goBack(): void {
    this.nav.back();
  }
  ionViewDidEnter() {
    this.isios = this.native.isios();
    const deleteObj = this.mydeletefn.getId();
    if (deleteObj['id']) {
      if (this.allList.length > 0) {
        for (let index = 0; index < this.allList[deleteObj.type].length; index++) {
          const element = this.allList[deleteObj.type][index];
          if (deleteObj['id'] == element['id']) {
            this.allList[deleteObj.type].splice(index, 1);
            this.mydeletefn.clear();
            break;
          }
        }
      } else {
        this.mydeletefn.clear();
      }
    }
    const item = this.editMyrelease.getData();
    if (item.data && item.data.id) {
      console.log('进入1')
      const ischage = this.editMyrelease.getIschage();
      if (this.allList.length > 0 && ischage) {
        this.changeItem(item.type, item.data);
        console.log('进入2')
      }
      this.editMyrelease.clear();
    }
    this.gzlistfn.getList().then(res => {
      this.gzList = res;
      if (this.gzList.includes(this.userId) && this.userId) {
        this.isgz = true;
      } else {
        this.isgz = false;
      }
    }).catch(err2 => {});

    this.setType();
    console.log(this.userId)
    if (this.userId) {
      this.http.getData(this.http.getousercenter, {userId: this.userId}).subscribe(res => {
        console.log(res);
        this.user = res.data;
      }, error2 => {});
    }
  }
  /**
   * @Author: wjy-mac
   * @description: 内容编辑后改变列表数据
   * @Date: 2019-11-20 00:02:14
   * @param {type} 
   * @return: 
   */  
  changeItem(type, data) {
    console.log(type)
    console.log(data)
    for (let index = 0; index < this.allList[type].length; index++) {
      const element = this.allList[type][index];
      if (element['id'] == data.id) {
        const obj = Object.assign(element, data);
        this.allList[type].splice(index, 1, obj);
      }
    }
  }
  toPages(type, id?: string, name?: string) {
    this.topage.toPage(type, id, name);
  }
  toPage(id) {
    console.log(id)
    const type = this.pageType;
    if (type == 1) {
      this.route.navigate(['/pqcontent'], {queryParams: {id, type}});
    } else {
      this.route.navigate(['/yjcontent'], {queryParams: {id, type: type - 2}});
    }
  }
  doRefresh(event) {
    switch (Number(this.pageType)) {
      case 1:
        this.pqpageObj.page = 1;
        this.pqpageObj.isall = false;
        break;
      case 2:
        this.yjpageObj.page = 1;
        this.yjpageObj.isall = false;
        break;
      case 3:
        this.glpageObj.page = 1;
        this.glpageObj.isall = false;
        break;
      case 4:
        this.zmpageObj.page = 1;
        this.zmpageObj.isall = false;
        break;
    }
    this.getListhttp(event, 1);
  }

  
  setType() {
    const type = Number(this.pageType);
    console.log(type)
    if (!this.allList[this.pageType - 1]) {
      this.allList[this.pageType - 1] = [];
      this.getListhttp();
    }

  }
  loadData(event) {
    let obj;
    switch (Number(this.pageType)) {
      case 1:
        obj = this.pqpageObj;
        break;
      case 2:
        obj = this.yjpageObj;
        break;
      case 3:
        obj = this.glpageObj;
        break;
      case 4:
        obj = this.zmpageObj;
        break;
    }
    if (obj.isall) {
      event.target.complete();
      return false;
    }
    this.getListhttp(event)

  }
  getListhttp(event?, type?) {
    const src = this.http.getpqlist;
    let obj: any;
    switch (Number(this.pageType)) {
      case 1:
        obj = Object.assign({}, this.pqpageObj);
        this.pqpageObj.page++;
        break;
      case 2:
        obj = Object.assign({}, this.yjpageObj);
        this.yjpageObj.page++;
        break;
      case 3:
        obj = Object.assign({}, this.glpageObj);
        this.glpageObj.page++;
        break;
      case 4:
        obj = Object.assign({}, this.zmpageObj);
        this.zmpageObj.page++;
        break;
    }
    obj.userId = this.userId;
    obj.getPerson = 1;
    this.http.getData(src, obj).subscribe(res => {

      const data = res['result'];
      if (type) {
        this.allList[this.pageType - 1] = [];
      }
      this.allList[this.pageType - 1].push(...data['result']);
      switch (Number(this.pageType)) {
        case 1:
          // this.pqlist.push(...data['result']);
          if (!data['result'].length || data['result'].length < obj.num) {
            this.pqpageObj.isall = true;
          } else {
            this.pqpageObj.page++;
          }
          break;
        case 2:
          // this.yjlist.push(...data['result']);
          if (!data['result'].length || data['result'].length < obj.num) {
            this.yjpageObj.isall = true;
          } else {
            this.yjpageObj.page++;
          }
          break;
        case 3:
          // this.gllist.push(...data['result']);
          if (!data['result'].length || data['result'].length < obj.num) {
            this.glpageObj.isall = true;
          } else {
            this.glpageObj.page++;
          }
          break;
        case 4:
          // this.zmlist.push(...data['result']);
          if (!data['result'].length || data['result'].length < obj.num) {
            this.zmpageObj.isall = true;
          } else {
            this.zmpageObj.page++;
          }
          break;
      }
      if (event) {
        event.target.complete();
      }
      // this.newGoods = data['new_goods'];
    }, err => {
      // alert(JSON.stringify(err))
      console.log(err);
      if (event) {
        event.target.complete();
      }
    });
  }
  openUsers(type) {
    // this.userId
    this.route.navigate(['/userlist'], {queryParams: {type, userId: this.userId}});

  }
  setgz(touid, type = 1) {
    this.http.getData(this.http.setgz, {touid, type}).subscribe(res => {
      console.log(res)
      if (type === 1) {
        this.isgz = true;
        this.gzlistfn.puitem(touid);
      } else {
        this.isgz = false;
        this.gzlistfn.removeItem(touid);
      }

    });
  }
}
