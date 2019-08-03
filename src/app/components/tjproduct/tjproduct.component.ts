import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tjproduct',
  templateUrl: './tjproduct.component.html',
  styleUrls: ['./tjproduct.component.scss'],
})
export class TjproductComponent implements OnInit {
  @Input () src: string;
  @Input () name: string;
  @Input () des: string;
  @Input () price: number;
  @Input () id: string;
  @Input () dessubstr: boolean;
  @Input () dessubstrnum: number;
  @Output () tclick = new EventEmitter();
  constructor() { }
  ngOnInit() {}
  setClick() {
    if (!this.id) return false;
    this.tclick.emit(this.id);
  }
}
