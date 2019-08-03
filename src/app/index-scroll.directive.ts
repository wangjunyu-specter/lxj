import { Directive, HostListener, ElementRef, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appIndexScroll]'
})
export class IndexScrollDirective {

  constructor (private el: ElementRef, private renderer: Renderer2) {
    console.log(this.el.nativeElement);
  }
  @HostListener('scroll', ['$event']) onscroll (btn: Event) {
    console.log(123)
    this.renderer.addClass(this.el.nativeElement, 'myclass');
  }

}
