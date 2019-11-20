import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDatacontent]'
})
export class DatacontentDirective {
  @Input() defaultColor: string;
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }
  @Input() set appDatacontent (data) {
    // this.viewContainer.createEmbeddedView(this.templateRef)
    console.log(data);
    console.log(this.viewContainer);
    console.log(this.viewContainer.element.nativeElement);
    // console.log(this.templateRef.createEmbeddedView());
    // this.viewContainer.createEmbeddedView();
    // this.templateRef.elementRef.value = '123'
  }

}
