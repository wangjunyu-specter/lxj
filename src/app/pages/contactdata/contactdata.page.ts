import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {AlertController, NavController} from "@ionic/angular";
import { HttpService } from '../../services/http.service';
import {ActivatedRoute} from "@angular/router";
// import { ProvincesService } from '../../services/provinces.service';
import { NativeService } from '../../services/native.service';
import {ContactlistService} from "../../services/contactlist.service";
@Component({
  selector: 'app-contactdata',
  templateUrl: './contactdata.page.html',
  styleUrls: ['./contactdata.page.scss'],
})
export class ContactdataPage implements OnInit {
  id: string;
  type: number;
  provincelist: any[];
  citylist: any[];
  arealist: any[];
  dataObj: any;
  constructor(private nav: NavController, private http: HttpService,
              private activeroute: ActivatedRoute,
              private native: NativeService,
              private ref: ChangeDetectorRef,
              private contactlist: ContactlistService, public alertController: AlertController) { }

  ngOnInit() {
    this.provincelist = this.contactlist.getPro();
    this.citylist = [];
    this.arealist = [];
    this.dataObj = {
      consignee: '',
      tel: '',
      card: '',
      province: '',
      city: '',
      district: '',
      address: '',
      defalut: 0
    };
  }

  ionViewDidEnter() {
    const params = this.activeroute.snapshot.queryParams;
    this.id = (params['id']).toString();
    if (this.id !== '0' && !this.dataObj['province']) {
      this.contactlist.getItem(this.id).then(obj => {
        console.log(obj)
        if (obj.mr == 1) {
          obj.defalut = 1;
        } else {
          obj.defalut = 0;
        }
        obj.province = obj.province_id;
        obj.city = obj.city_id;
        obj.district = obj.district_id;
        this.dataObj = obj;
        this.selteaddress(2, this.dataObj.province);
        this.selteaddress(3, this.dataObj.city);
      });
    } else {
    }
    if (this.provincelist.length === 0) {
      this.selteaddress(1);
    }
  }
  selteaddress(type: number, id: string = '1') {
    if (type == 2) {
      this.citylist.length = 0;
    }
    this.arealist.length = 0;
    this.http.getData(this.http.getcity, {parent: id, type}).subscribe(res => {
      console.log(res);
      if (type === 1) {
        this.contactlist.setPro(res['regions']);
      } else if (type === 2) {
        this.citylist.push(...res['regions']);
      } else {
        this.arealist.push(...res['regions']);
        // this.ref.checkNoChanges();
      }
      // setTimeout(() => {
      //   this.ref.detectChanges();
      // }, 1000);
    });
  }
  onSubmit() {
    console.log(this.dataObj)
    const telpag = /^1(\d){10}$/;
    if (!telpag.test(this.dataObj.tel)) {
      console.log('验证失败')
      this.native.presentAlert('请输入正确的手机号码!')
      return false;
    }
    const iscard = this.checkIDCard(this.dataObj.card);
    console.log(iscard)
    if (!iscard.status) {
      this.native.presentAlert('请输入正确的18位身份证号码!')
      return false;
    }
    const obj: any = Object.assign({}, this.dataObj);
    if (!obj.mobile) {
      obj.mobile = obj.tel;
    }
    if (obj.defalut) {
      obj.defalut = 1;
    } else {
      obj.defalut = 0;
    }
    this.http.postformdataloading(this.http.editorupdateaddress, obj).subscribe(res => {
      this.contactlist.edmit(res.result);
      this.presentAlert();
    })
  }
  goBack(): void {
    this.nav.back();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '提示',
      message: '操作成功.',
      buttons: [ {
        text: '确定',
        role: '确定',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
          this.goBack();
        }
      }]
    });
    await alert.present();
  }
  checkIDCard(idCard: any) {
    const city = [
      11,
      12,
      13,
      14,
      15,
      21,
      22,
      23,
      31,
      33,
      34,
      35,
      36,
      37,
      41,
      42,
      43,
      44,
      45,
      46,
      50,
      51,
      52,
      54,
      61,
      62,
      63,
      64,
      65,
      71,
      81,
      91
    ];
    let tip = "";
    let pass = true;

    if (
      !idCard ||
      !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(
        idCard
      )
    ) {
      tip = "身份证号格式错误";
      pass = false;
    } else if (city.indexOf(parseInt(idCard.substr(0, 2))) < 0) {
      tip = "地址编码错误";
      pass = false;
    } else {
      //18位身份证需要验证最后一位校验位
      if (idCard.length == 18) {
        idCard = idCard.split("");
        //∑(ai×Wi)(mod 11)
        //加权因子
        const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        //校验位
        const parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        let ai = 0;
        let wi = 0;
        for (var i = 0; i < 17; i++) {
          ai = idCard[i];
          wi = factor[i];
          sum += ai * wi;
        }
        if (parity[sum % 11] != idCard[17]) {
          tip = "校验位错误";
          pass = false;
        }
      }
    }
    const obj = {
      status: pass,
      msg: tip
    };
    if (!pass) {
      return obj;
    }

    return obj;
  }
}
