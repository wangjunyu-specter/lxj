import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpgoodsConfirmationPage } from './spgoods-confirmation.page';
import {ComponentsModule} from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { SeleteAddressComponent } from '../../components/selete-address/selete-address.component';
const routes: Routes = [
  {
    path: '',
    component: SpgoodsConfirmationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SpgoodsConfirmationPage, SeleteAddressComponent],
  entryComponents: [SeleteAddressComponent]
})
export class SpgoodsConfirmationPageModule {}
