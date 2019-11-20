import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {BounslistService} from "../../services/bounslist.service";

@Component({
  selector: 'app-bouns',
  templateUrl: './bouns.page.html',
  styleUrls: ['./bouns.page.scss'],
})
export class BounsPage implements OnInit {
  list: any[];
  constructor(private nav: NavController, private bounlistfn: BounslistService) { }
  ionViewDidEnter() {
    this.list = this.bounlistfn.getList();
  }
  ngOnInit() {

  }
  doRefresh(event) {
    this.bounlistfn.refresh().then(res =>{
      event.target.complete();
    }).catch(err => {
      event.target.complete();
    })
  }
  goBack(): void {
    this.nav.back();
  }
  loadData(event) {
    this.bounlistfn.addPage();
    this.bounlistfn.getListhttp(1).then(res => {
      event.target.complete();
    }).catch(err => {
      event.target.complete();
      event.target.disabled = true;
    });

  }
}
