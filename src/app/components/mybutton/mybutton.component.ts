import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mybutton',
  templateUrl: './mybutton.component.html',
  styleUrls: ['./mybutton.component.scss'],
})
export class MybuttonComponent implements OnInit {
  @Input() bname: string;
  @Input() isblock: boolean;
  @Input() isdisabled: boolean;
  @Output() subClick = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  sub () {
    this.subClick.emit();
  }
}
