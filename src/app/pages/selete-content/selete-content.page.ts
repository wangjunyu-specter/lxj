import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { GetproductService } from '../../services/getproduct.service';
import {NavController} from '@ionic/angular';
import {HttpService} from "../../services/http.service";

// declare let laydate;
@Component({
  selector: 'app-selete-content',
  templateUrl: './selete-content.page.html',
  styleUrls: ['./selete-content.page.scss'],
})
export class SeleteContentPage implements OnInit {
  pid: string;
  data: any;
  selete: any;
  constructor(private nav: NavController, private route: Router, private activeroute: ActivatedRoute,
              private getProduct: GetproductService, private http: HttpService) { }

  ngOnInit() {
    this.selete = {};

  }
  ionViewDidEnter() {
    this.activeroute.queryParams.subscribe(params => {
      this.pid = params['id'];
      this.getProduct.getProduct(this.pid).then(res => {
        this.data = res;
        console.log(this.data);
      }).catch(err => {
        console.log(err);
      });
    });
  }
  submit($event) {
    console.log(this.getProduct.getActiveorder())

    this.route.navigate(['/confirmationorder'], {queryParams: {id: this.pid}});

    // this.http.postformdata(this.http.addgwc, {goods: JSON.stringify(obj)}).subscribe(res => {
    //
    //   this.route.navigate(['/confirmationorder'], {queryParams: {id: this.pid, cid: res['rec_id']}});
    // }, error2 => {});
  }
  seletefn ($event) {
    this.getProduct.jtjyClick($event.id, 2);
    // this.selete[1] = $event.id;
  }
  clickJtjy ($event) {
    this.getProduct.jtjyClick($event.id, 1);
  }
  setData ($event) {
    this.getProduct.clickOuttime($event);
  }
  clickotherfn ($event) {
    this.getProduct.clickother($event.id);
  }
  goBack(): void {
    // this.location.back();
    this.nav.back();
  }
  setNum($event) {
    console.log($event);
    this.getProduct.setPersonnum($event)
  }
}
