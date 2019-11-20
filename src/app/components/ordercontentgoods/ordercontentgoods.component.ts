import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {TopageService} from "../../services/topage.service";

@Component({
  selector: 'app-ordercontentgoods',
  templateUrl: './ordercontentgoods.component.html',
  styleUrls: ['./ordercontentgoods.component.scss'],
})
export class OrdercontentgoodsComponent implements OnInit {
  @Input() goods_list: any[];
  @Input() shopname: string;
  @Input() supplier_id: string;
  constructor(public http: HttpService, private topage: TopageService) { }

  ngOnInit() {}
  gotoPage(type, id) {
    this.topage.toPage(type, id);
  }
}
