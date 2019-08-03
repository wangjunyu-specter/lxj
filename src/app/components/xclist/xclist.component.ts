import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {TopageService} from "../../services/topage.service";

@Component({
  selector: 'app-xclist-component',
  templateUrl: './xclist.component.html',
  styleUrls: ['./xclist.component.scss'],
})
export class XclistComponent implements OnInit {
  @Input() list: any[];

  constructor(private http: HttpService, private topage: TopageService) { }

  ngOnInit() {}
  gotoPage(type, id) {
    this.topage.toPage(type, id);
  }
}
