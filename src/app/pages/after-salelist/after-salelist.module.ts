import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AfterSalelistPage } from './after-salelist.page';

const routes: Routes = [
  {
    path: '',
    component: AfterSalelistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AfterSalelistPage]
})
export class AfterSalelistPageModule {}
