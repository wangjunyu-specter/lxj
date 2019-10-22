/*
 * @Author: wjy-mac
 * @Date: 2019-10-22 19:50:55
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-22 20:18:39
 * @Description: file content
 */
import { ComponentsModule } from '../../components/components.module';
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
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AfterSalelistPage]
})
export class AfterSalelistPageModule {}
