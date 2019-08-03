import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-goods-contentnav',
  templateUrl: './goods-contentnav.component.html',
  styleUrls: ['./goods-contentnav.component.scss'],
})
export class GoodsContentnavComponent implements OnInit {

  constructor(private route: Router, private popoverController: PopoverController) { }

  ngOnInit() {}
  openpage(type: number) {
    this.popoverController.dismiss();
    if (type === 2) {
      this.route.navigate(['/cart']);
    } else if (type === 4) {
      this.route.navigate(['/browse-records']);
    }
  }
}
