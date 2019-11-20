import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yhbox',
  templateUrl: './yhbox.component.html',
  styleUrls: ['./yhbox.component.scss'],
})
export class YhboxComponent implements OnInit {
  @Input() title: string;
  @Input() notitle: boolean;
  @Input() des: string;
  @Input() color: string;
  @Input() noborder: boolean;
  constructor() { }

  ngOnInit() {}

}
