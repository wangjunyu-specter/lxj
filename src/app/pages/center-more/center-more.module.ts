import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CenterMorePage } from './center-more.page';
// import { ComponentsModule } from '../../components/components.module';
const routes: Routes = [
  {
    path: '',
    component: CenterMorePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CenterMorePage]
})
export class CenterMorePageModule {}
