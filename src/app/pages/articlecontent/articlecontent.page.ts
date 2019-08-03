import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import { ArticelistService } from '../../services/articelist.service';
import {ActivatedRoute} from "@angular/router";
import { HttpService } from '../../services/http.service';
import {DomSanitizer} from "@angular/platform-browser";
import {TopageService} from "../../services/topage.service";

@Component({
  selector: 'app-articlecontent',
  templateUrl: './articlecontent.page.html',
  styleUrls: ['./articlecontent.page.scss'],
})
export class ArticlecontentPage implements OnInit {
  aid: string;
  toolbaropacity: string;
  data: any;
  constructor(private nav: NavController, private articlelist: ArticelistService,
              private activeroute: ActivatedRoute, private http: HttpService, public sanitizer: DomSanitizer,
              private topage: TopageService) { }
  ionViewDidEnter() {
    console.log('加载完了')
    this.getContent();
  }
  ngOnInit() {
    this.data = {};
    this.toolbaropacity = '0';
    const params = this.activeroute.snapshot.queryParams;
    this.aid = params['id'];

  }
  getContent() {
    this.articlelist.getContent(this.aid).then(res => {
      console.log(res);
      this.data = res;
    });
  }
  assembleHTML(strHTML: any) {
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }
  logScrolling($event) {
    const top: number = $event.detail.scrollTop;
    let num = 0;
    if (top < 44) {
      num = top * 2 / 100;
    } else {
      num = 1;
    }
    this.setNavstatus(num);
  }
  setNavstatus(num: number) {
    this.toolbaropacity = parseInt((num * 100).toString(), 10).toString();
  }
  goBack(): void {
    this.nav.back();
  }
  openpage($event) {
    // this.route.navigate(['/productcontent'], {queryParams: {id: $event.goods_id, suppid: $event.supplier_id}});
    this.toPage(2, $event.goods_id);
  }
  toPage (type, id?: string, name?: string) {
    console.log(type)
    if (typeof type === 'string') {
      type = Number(type);
    }
    this.topage.toPage(type, id, name);

  }
}
