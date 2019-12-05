/*
 * @Author: wjy-mac
 * @Date: 2019-07-02 00:26:42
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-05 20:55:34
 * @Description: file content
 */
import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-paybox',
  templateUrl: './paybox.component.html',
  styleUrls: ['./paybox.component.scss'],
})
export class PayboxComponent implements OnInit {
  @ViewChild('pwdbox', {static: true}) pwdbox: any;
  @Input() price: string;
  pwd: string;
  isfous: boolean;

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    this.pwd = '';
    this.isfous = false;
  }
  setfoucs() {
    this.pwdbox.setFocus();
    this.isfous = true;
  }
  setisfous(type: number) {
    if (type === 1) {
      this.isfous = true;
    } else {
      this.isfous = false;
      this.pwd = '';
    }
  }
  padchange() {
    if (this.pwd.length === 6) {
      this.popoverController.dismiss(this.pwd);
    }
  }
}
