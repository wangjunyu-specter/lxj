import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {ShopContentService} from "../../services/shop-content.service";
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  data: any;
  constructor(private nav: NavController, private shopservice: ShopContentService) { }

  ngOnInit() {
    this.shopservice.getShop().then(res => {
      console.log(res)
      this.data = res;
    }).catch(err => {});
  }
  goBack(): void {
    this.nav.back();
  }
}
