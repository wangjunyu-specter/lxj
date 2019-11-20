import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { IndexScrollDirective } from '../index-scroll.directive';
import { XsgBoxComponent } from '../xsg-box/xsg-box.component';
import { PricebuttonComponent } from '../components/pricebutton/pricebutton.component';
// import { PagetitleComponent } from '../components/pagetitle/pagetitle.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, IndexScrollDirective,
    XsgBoxComponent, PricebuttonComponent]
})
export class Tab1PageModule {}
