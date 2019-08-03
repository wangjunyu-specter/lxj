import { Component, OnInit, Input } from '@angular/core';
import {ShopNavService} from '../../services/shop-nav.service';
import { ShopContentService } from '../../services/shop-content.service';
import { PopoverController } from '@ionic/angular';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-topnavlist',
  templateUrl: './topnavlist.component.html',
  styleUrls: ['./topnavlist.component.scss'],
})
export class TopnavlistComponent implements OnInit {
  @Input() id: string;
  navList: any[];
  constructor(private shopnav: ShopNavService, private getShop: ShopContentService,
              private popoverController: PopoverController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.navList = this.getShop.getIndexnav();
    if (this.navList.length === 0) {
      this.getShop.getShop();
    }
  }
  open (item) {
    console.log(item);
    // this.router.navigate(['/products'], {queryParams: {id: item.id, name: item.name}})
    this.popoverController.dismiss(item);
  }

}
