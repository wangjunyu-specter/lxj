/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy
 * @LastEditTime: 2019-08-03 17:16:11
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import {NavController, PopoverController} from "@ionic/angular";
// import { PayboxComponent } from '../../components/paybox/paybox.component';
import { UserService } from '../../services/user.service';
import {Router} from "@angular/router";
import { NativeService } from 'src/app/services/native.service';

@Component({
  selector: 'app-center-more',
  templateUrl: './center-more.page.html',
  styleUrls: ['./center-more.page.scss'],
})
export class CenterMorePage implements OnInit {
  user: any;
  ismobile: boolean;
  constructor(private route: Router, private nav: NavController, private userfn: UserService, public native: NativeService) { }

  ngOnInit() {
    this.ismobile = this.native.ismobile();
  }
  ionViewWillEnter() {
    this.userfn.getUserp().then(res => {
      this.user = res;
    });
  }
  ionViewDidEnter() {

  }
  goBack(): void {
    this.nav.back();
  }
  setPaypwd() {
    this.route.navigate(['/setpaypwd']);
  }
  loginout() {
    this.nav.navigateRoot('/login');
  }
  gotopage() {
    this.route.navigate(['/contactlist'], {queryParams: {type: 3}});
  }
  tobill() {
    this.route.navigate(['/bill']);
  }
  toabout() {
    this.route.navigate(['/about-us']);
  }
}
