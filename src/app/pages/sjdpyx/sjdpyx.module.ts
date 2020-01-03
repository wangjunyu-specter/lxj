/*
 * @Author: wjy-mac
 * @Date: 2019-04-05 10:50:04
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-12 16:36:09
 * @Description: file content
 */
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SjdpyxPage } from './sjdpyx.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: SjdpyxPage
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
  declarations: [SjdpyxPage]
})
export class SjdpyxPageModule {}
