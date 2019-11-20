import { Component, OnInit } from '@angular/core';
import {ContactlistService} from "../../services/contactlist.service";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-selete-address',
  templateUrl: './selete-address.component.html',
  styleUrls: ['./selete-address.component.scss'],
})
export class SeleteAddressComponent implements OnInit {

  constructor(private contactlist: ContactlistService, public modalController: ModalController) { }

  ngOnInit() {}
  clickitem (item) {
    this.contactlist.setActive(item, 1);
  }
  close () {
    this.modalController.dismiss();
  }
  addNew() {
    this.close();
  }
}
