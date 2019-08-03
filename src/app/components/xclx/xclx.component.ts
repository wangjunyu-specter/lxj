import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-xclx',
  templateUrl: './xclx.component.html',
  styleUrls: ['./xclx.component.scss'],
})
export class XclxComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {}

}
