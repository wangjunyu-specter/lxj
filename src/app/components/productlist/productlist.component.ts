/*
 * @Author: wjy-mac
 * @Date: 2019-07-23 19:56:18
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-15 15:18:22
 * @Description: file content
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {
  // @Input () name: string;
  // @Input () bqList: string[];
  @Input () price: string;
  // @Input () dp: string;
  // @Input () src: string;
  @Input() data: any;
  @Input() showyj: any;
  @Input() noshowmore: any;
  @Input() isshowattr: any;
  @Input() imgtype: any;
  @Output () open = new EventEmitter<any>();
  @Input () type: number; // 1 精品 2热销 3普通
  @Input() ishw: boolean;
  constructor(private http: HttpService) { }

  ngOnInit() {
    console.log(this.data);
  }

  openpage() {
    console.log(this.data)
    this.open.emit(this.data);
  }

}
