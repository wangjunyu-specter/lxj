import { ThorderService } from './../../services/thorder.service';
import { error } from 'selenium-webdriver';
/*
 * @Author: wjy-mac
 * @Date: 2019-10-17 17:47:02
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-19 00:55:41
 * @Description: 取消订单
 */
import { Component, OnInit } from '@angular/core';
import { NativeService } from './../../services/native.service';
import { HttpService } from './../../services/http.service';
import { NavController, ActionSheetController } from '@ionic/angular';
import { ContactlistService } from './../../services/contactlist.service';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.page.html',
  styleUrls: ['./cancel-order.page.scss'],
})
export class CancelOrderPage implements OnInit {
  imgs: string[];
  isupdate: number[];
  issub: boolean;
  subimgs: string[];
  data: object;
  provincelist: any[];
  citylist: any[];
  arealist: any[];
  constructor(private nav: NavController, public actionSheetController: ActionSheetController,
    private native: NativeService, private http: HttpService, private thorder: ThorderService, private contactlist: ContactlistService) { }

  ngOnInit() {
    this.imgs = [];
    this.isupdate = [];
    this.subimgs = [];
    const data = this.thorder.getData();
    if (!data['order']) {
      this.goBack();
      return false;
    }
    console.log(data);
    this.data = {
      back_pay: 2,
      back_type: '4',
      tui_goods_price: data['order']['goods_amount'],
      act: 'back_order_act',
      order_id: data['order']['order_id'],
      order_sn: data['order']['order_sn'],
      goods_id: data['goods']['goods_id'],
      goods_name: data['goods']['goods_name'],
      goods_sn: data['goods']['goods_sn'],
      country: data['order']['country'],
      province: data['order']['province'],
      city: data['order']['city'],
      district: data['order']['district'],
      back_address: data['order']['address'],
      back_consignee: data['order']['consignee'],
      back_mobile: data['order']['mobile'],
      back_zipcode: data['order']['zipcode'],
    };
    this.contactlist.getProasync().then(res => {
      this.provincelist = res;
      this.selteaddress(2, this.data['province']);
      this.selteaddress(3, this.data['city']);
    }).catch(err2 => {});
    // TODO: 状态还差2， 还差状态页面，差补快递单号页面
  }
  addimg() {
    this.presentActionSheet();
  }
  async removeImg(index: number) {
    if (this.isupdate[index] === -1) {
      return false;
    }
    const actionSheet = await this.actionSheetController.create({
      header: '操作',
      buttons: [{
        text: '删除',
        role: 'destructive',
        handler: () => {
          this.imgs.splice(index, 1);
          this.isupdate.splice(index, 1);
          this.subimgs.splice(index, 1);
        }
      },  {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '请选择来源',
      buttons: [{
        text: '相机',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
          // this.native.captureImage().then(res => {
          //   this.addimgfn(res['fullPath']);
          // });
          this.native.getPictureByCamera().then(res => {
            this.basezfile(res);
          });
        }
      }, {
        text: '相册',
        handler: () => {
          console.log('Share clicked');
          this.native.getPictures(1).then((res: any) => {
            const img = res[0];
            this.basezfile(img);
          }, err => {

          });
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  basezfile(base64) {
    const index = this.imgs.length;
    this.imgs.push(base64);
    this.isupdate.push(-1);
    const file = this.native.getImgbase64tofile(base64, 'sh' + index, 'imgFile');
    this.imgupload(file).then(res => {
      this.subimgs[index] = res as any;
      this.isupdate[index] = 1;
      if (this.issub) {
        this.issubfn();
      }
    }).catch(err3 => {
      this.imgs.splice(index, 1);
      this.isupdate.splice(index, 1);
    });
  }
  sub() {
    if (!this.data['back_reason']) {
      this.native.presentAlert('请输入问题描述');
      return false;
    }
    this.issub = true;
    this.issubfn();
  }
  issubfn() {
    // tslint:disable-next-line: prefer-for-of
    for(let i = 0; i < this.isupdate.length; i++) {
      if (this.isupdate[i] === -1) {
        return false;
      }
    }
    this.uploadEnd();
  }
  uploadEnd() {
    const obj = Object.assign({imgs: this.imgs}, this.data);
    this.http.postformdataloading(this.http.zdomain + this.http.backorderact, obj).subscribe(res => {
      this.native.presentToast('申请成功，请等待商家审核');
      this.goBack();
    }, error2 => {});
  }
  imgupload(file) {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      oReq.open('POST', this.http.zdomain + this.http.shupdateimg);
      oReq.onreadystatechange = (oEvent) => {
        if (oReq.readyState == 4 && oReq.status == 200) {
          const res = JSON.parse(oReq.response);
          if (res.status == 1) {
            resolve(res.url);
          } else {
            reject('上传失败，请重试');
          }
        }
      };
      oReq.onerror = (err) => {
        reject(err);
      };
      oReq.send(file);
    });
  }
  goBack(): void {
    this.thorder.clearData();
    this.nav.back();
  }
  selteaddress(type: number, id: string = '1') {
    console.log('进来了')
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
}