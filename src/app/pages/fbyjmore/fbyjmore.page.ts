import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-fbyjmore',
  templateUrl: './fbyjmore.page.html',
  styleUrls: ['./fbyjmore.page.scss'],
})
export class FbyjmorePage implements OnInit {
  type: number;
  title: string;
  num: number;
  constructor(private nav: NavController, private route: Router,
              private activeroute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeroute.snapshot.queryParams;
    this.type = params['type'] ? Number(params['type']) : 1;
    this.num = params['num'] ? Number(params['num']) : 0;
    switch (this.type) {
      case 1:
        this.title = '票圈';
        break;
      case 2:
        this.title = '游记';
        break;
      case 3:
        this.title = '攻略';
        break;
      case 4:
        this.title = '招募';
        break;
      default:
        this.title = '票圈';
    }
  }
  ionViewDidEnter() {

  }
  goBack() {
    this.nav.navigateBack('tabs/tab2');
  }
}
