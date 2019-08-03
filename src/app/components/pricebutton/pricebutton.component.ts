import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricebutton',
  templateUrl: './pricebutton.component.html',
  styleUrls: ['./pricebutton.component.scss'],
})
export class PricebuttonComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {}

}
