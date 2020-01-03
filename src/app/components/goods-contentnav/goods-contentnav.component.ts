import { NewsListService } from './../../services/news-list.service';
/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors  : wjy-mac
 * @LastEditTime : 2020-01-03 14:07:01
 * @Description: 商品详情右上角更多
 */
import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-goods-contentnav',
  templateUrl: './goods-contentnav.component.html',
  styleUrls: ['./goods-contentnav.component.scss'],
})
export class GoodsContentnavComponent implements OnInit {
  @Input() id: string;
  @Input() ishw: number;
  constructor(private route: Router, private popoverController: PopoverController, public newsfn: NewsListService) { }

  ngOnInit() {}
  openpage(type: number) {
    this.popoverController.dismiss();
    if (type === 1) {
      this.route.navigate(['/news']);
    } else if (type === 2) {
      this.route.navigate(['/cart']);
    } else if (type === 4) {
      this.route.navigate(['/browse-records']);
    } else if (type === 3) {
      this.route.navigate(['/xcsclist']);
    } else if (type === 5) {
      if (this.ishw == 1) {
        this.route.navigate(['/xcsclist']);
      } else {
        this.route.navigate(['/collelist']);
      }
    }
  }
}
