import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-xsg-box',
  templateUrl: './xsg-box.component.html',
  styleUrls: ['./xsg-box.component.scss'],
})
export class XsgBoxComponent implements OnInit {
  @Input () name: string;
  @Input () time: string;
  @Input () type: number; // 1为限时购
  @Input () src: string;
  @Input () price: number;
  constructor() { }

  ngOnInit() {
    this.type = 1;
  }

}
