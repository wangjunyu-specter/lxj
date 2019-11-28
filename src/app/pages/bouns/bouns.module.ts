/*
 * @Author: wjy-mac
 * @Date: 2019-06-11 19:55:24
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-21 15:59:49
 * @Description: file content
 */
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BounsPage } from './bouns.page';

const routes: Routes = [
  {
    path: '',
    component: BounsPage
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
  declarations: [BounsPage]
})
export class BounsPageModule {}
