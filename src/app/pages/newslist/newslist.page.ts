import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.page.html',
  styleUrls: ['./newslist.page.scss'],
})
export class NewslistPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.nav.back();
  }
    close() {}
}
