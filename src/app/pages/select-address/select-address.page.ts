/*
 * @Author: wjy-mac
 * @Date: 2019-03-21 23:15:28
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-21 15:57:52
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.page.html',
  styleUrls: ['./select-address.page.scss'],
})
export class SelectAddressPage implements OnInit {
  isactive: string;
  loaction: any;
  constructor(private nav: NavController, private userfn: UserService) { }

  ngOnInit() {
    this.isactive = '成都';
    this.loaction = this.userfn.getLocation();
  }

  seleteAddress($event) {
    this.isactive = $event.name;
    this.nav.back();
  }
  goBack(): void {
    this.nav.back();
  }
}
