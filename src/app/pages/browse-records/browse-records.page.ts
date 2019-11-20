import { Component, OnInit } from '@angular/core';
// import {TopageService} from '../../services/topage.service';
import { LljlService } from '../../services/lljl.service';
import { HttpService } from '../../services/http.service';
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";
@Component({
  selector: 'app-browse-records',
  templateUrl: './browse-records.page.html',
  styleUrls: ['./browse-records.page.scss'],
})
export class BrowseRecordsPage implements OnInit {
  list: any[];
  page: number;
  limit: number;
  constructor( private lljl: LljlService, private http: HttpService, private nav: NavController, private route: Router) { }
  ionViewDidEnter() {
    this.getHttp();
  }
  ngOnInit() {
    this.page = 0;
    this.limit = 20;
  }
  getHttp(event?) {
    let idlist: string[] = this.lljl.getList(this.page, this.limit);
    console.log(idlist)
    // idlist = ['292', '293'];
    if (!idlist || idlist.length === 0) {
      return false;
    }
    this.http.getpostformdata(this.http.getlljlList, {category: 0}, {idlist}).subscribe(res => {
      this.list = res.data;
      if (event) {
        event.target.complete();
      }
    }, error2 => {
      if (event) {
        event.target.complete();
        // event.target.disabled = true;
      }
    });
  }
  goBack(): void {
    this.nav.back();
  }
  doRefresh(event) {
    this.page = 0;
    this.getHttp(event);
  }
  loadData(event) {
    this.page++;
    this.getHttp(event);
  }
  openpage($event) {
    console.log($event);
    // this.nav.navigateForward(['/productcontent'], );

    this.route.navigate(['/productcontent'], {queryParams: {id: $event.goods_id, suppid: $event.supplier_id}});
  }
}
