import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmojiishowService {
  private ishowobj: any;
  constructor() {
    this.ishowobj = {
      show: false
    };
  }
  getIsshow(): object {
    return this.ishowobj;
  }
  getIsshows(): boolean {
    return this.ishowobj.show;
  }
  setIsshow(type?) {
    if (type === 1) {
      this.ishowobj.show = true;
    } else if (type === 2) {
      this.ishowobj.show = false;
    } else {
      this.ishowobj.show = !this.ishowobj.show;
    }
  }
}
