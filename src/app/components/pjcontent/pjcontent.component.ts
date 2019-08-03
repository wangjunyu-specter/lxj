import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-pjcontent',
  templateUrl: './pjcontent.component.html',
  styleUrls: ['./pjcontent.component.scss'],
})
export class PjcontentComponent implements OnInit {
  // :todo 需要实现管道 限制字数
  @Input() data: any;
  slideOpts: any;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.slideOpts = {
      slidesPerView : 3,
      slidesPerGroup : 1,
      spaceBetween : 10,
      zoom: {
        toggle: false,
      }
    };
  }

}
