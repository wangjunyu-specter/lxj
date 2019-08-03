import { Component, OnInit } from '@angular/core';
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
              private contactlist: ContactlistService, public alertController: AlertController) { }

  ngOnInit() {
    this.provincelist = this.contactlist.getPro();
    this.dataObj = {
      consignee: '',
      tel: '',
      card: '',
      province: '',
      city: '',
      district: '',
      address: '',
      defalut: 1
    }
    const params = this.activeroute.snapshot.queryParams;
    this.id = (params['id']).toString();
  }

  ionViewDidEnter() {
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
        console.log(this.dataObj)
      });
    }
    if (this.provincelist.length === 0) {
      this.selteaddress(1)
    }

  }
  selteaddress(type: number, id: string = '1') {
    this.http.getData(this.http.getcity, {parent: id, type}).subscribe(res => {
      console.log(res);
      if (type === 1) {
        this.contactlist.setPro(res['regions']);
      } else if (type === 2) {
        this.citylist = res['regions'];
      } else {
        this.arealist = res['regions'];
      }
    })
  }
  onSubmit() {
    console.log(this.dataObj)
    const telpag = /^1(\d){10}$/;
    if (!telpag.test(this.dataObj.tel)) {
      console.log('验证失败')
      this.native.presentAlert('请输入正确的手机号码!')
      return false;
    }
    const cardneg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
    if (!cardneg.test(this.dataObj.card)) {
      console.log('验证失败')
      this.native.presentAlert('请输入18位身份证号码!')
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
}
