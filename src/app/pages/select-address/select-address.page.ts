import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.page.html',
  styleUrls: ['./select-address.page.scss'],
})
export class SelectAddressPage implements OnInit {
  isactive: string;
  constructor(private nav: NavController) { }

  ngOnInit() {
    this.isactive = '成都';
  }

  seleteAddress($event) {
    this.isactive = $event.name;
    this.nav.back();
  }

}
