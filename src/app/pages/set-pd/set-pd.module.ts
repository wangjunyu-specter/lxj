/*
 * @Author: wjy-mac
 * @Date: 2019-11-18 09:52:37
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 10:16:11
 * @Description: file content
 */
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetPdPage } from './set-pd.page';

const routes: Routes = [
  {
    path: '',
    component: SetPdPage
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
  declarations: [SetPdPage]
})
export class SetPdPageModule {}
