import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-goodssort',
  templateUrl: './goodssort.component.html',
  styleUrls: ['./goodssort.component.scss'],
})
export class GoodssortComponent implements OnInit {
  isactivesort: any; // 当前选中排序
  @Input() togglelist: any[];
  @Input() isactivesortobj: any;
  @Input() suppid: any;
  @Output() togglenavfn = new EventEmitter();

  // @Output
  constructor() { }

  ngOnInit() {
    this.isactivesort = {};
  }
  togglenav (item) {
    if (this.isactivesort.id === item.id) {
      if (item.sort.length > 0) {
        if (this.isactivesort.sort == item.sort[0]) {
          this.isactivesort.sort = item.sort[1];
        } else {
          this.isactivesort.sort = item.sort[0];
        }
      } else {
        return false;
      }
    } else {
      this.isactivesort.id = item.id;
      this.isactivesort.sortname = item.type;
      this.isactivesort.sort = item.sort[1];
    }
    // this.doRefresh();
    this.togglenavfn.emit(this.isactivesort);
  }
}
