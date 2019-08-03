import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatacontentDirective } from './dataContent/datacontent.directive';

@NgModule({
  declarations: [DatacontentDirective],
  imports: [
    CommonModule
  ],
  exports: [DatacontentDirective]
})
export class DirectivesModule { }
