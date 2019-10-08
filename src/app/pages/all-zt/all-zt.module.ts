/*
 * @Author: wjy-mac
 * @Date: 2019-09-28 18:39:29
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-09-28 18:39:29
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllZtPage } from './all-zt.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: AllZtPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllZtPage]
})
export class AllZtPageModule {}
