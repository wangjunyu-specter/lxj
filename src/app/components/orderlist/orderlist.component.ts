import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {TopageService} from "../../services/topage.service";

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss'],
})
export class OrderlistComponent implements OnInit {
  @Input() list: any[];
  constructor(private http: HttpService, private topage: TopageService) { }

  ngOnInit() {}
  gotoPage(type, id) {
    this.topage.toPage(type, id);
  }
}
