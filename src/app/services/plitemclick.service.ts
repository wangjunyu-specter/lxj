import { Injectable, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PlitemclickService {
  Source: EventEmitter<number>;
  constructor() {
    this.Source = new EventEmitter();
  }

}
