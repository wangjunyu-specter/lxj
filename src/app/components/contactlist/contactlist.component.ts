/*
 * @Author: wjy-mac
 * @Date: 2019-07-05 21:57:52
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-01-03 11:59:53
 * @Description: file content
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {NavParams} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ContactlistService } from '../../services/contactlist.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-contactlists',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss'],
})
export class ContactlistComponent implements OnInit {
  list: any;
  searchText: string;
  @Output() setItem = new EventEmitter();
  @Output() addNew = new EventEmitter();
  @Input() pageType: number;

  constructor( private contactlist: ContactlistService,
               private route: Router, public alertController: AlertController) {
  }

  ngOnInit() {
    this.list = this.contactlist.getContactlist();
  }
  searchItem() {
    console.log(this.searchText)
    const list = this.contactlist.getContactlist();
    if (!this.searchText) {
      this.list = list;
    } else {
      let arr: any[] = [];
      list.map(res => {
        if (res.name.includes(this.searchText)) {
          arr.push(res);
        }
      })
      this.list = arr;
    }
  }
  changeitem (item) {
    this.setItem.emit(item);
  }
  edmit(item, slide) {
    console.log(slide)
    slide.close();
    this.addPerson(item.address_id);
  }
  addPerson(id = '0') {
    this.addNew.emit();
    this.route.navigate(['/contactdata'], {queryParams: {id}});
  }
  delete(id: string, slide) {
    if (!id) {
      return false;
    }
    this.presentAlert(id, slide);
  }
  async presentAlert(id, slide) {
    const alert = await this.alertController.create({
      header: '提示!',
      message: '是否确定删除!',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确定',
          handler: () => {
            console.log('Confirm Okay');
            slide.close();
            this.contactlist.delete(id);
          }
        }
      ]
    });

    await alert.present();
  }
  setMr (id: string) {
    this.contactlist.setMr(id);
  }
}
