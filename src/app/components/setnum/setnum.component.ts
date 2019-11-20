import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setnum',
  templateUrl: './setnum.component.html',
  styleUrls: ['./setnum.component.scss'],
})
export class SetnumComponent implements OnInit {
  @Input() price: string;
  @Input() num: number;
  @Input() maxnum: number;
  @Output() setNum = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  setnumfn(num: number) {
    if (this.num + num < 1) {
      return false;
    }
    if (this.maxnum && this.num + num > this.maxnum) {
      return false;
    }
    this.setNum.emit(num);
  }

}
