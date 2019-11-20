import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllorderPage } from './allorder.page';
import {PipesModule} from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
const routes: Routes = [
  {
    path: '',
    component: AllorderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // PipesModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllorderPage]
})
export class AllorderPageModule {}
