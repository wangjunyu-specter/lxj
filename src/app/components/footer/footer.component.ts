import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() type: number;
  @Input() allprice: number;
  @Input() price: number;
  @Input() disabled: boolean;
  @Output() sub = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  subbtn () {
    if (this.disabled) {
      return false;
    }
    this.sub.emit(123);
  }

}
