/*
 * @Author: wjy-mac
 * @Date: 2019-08-07 23:04:49
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-08-07 23:28:01
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SjsearchPage } from './sjsearch.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: SjsearchPage
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
  declarations: [SjsearchPage]
})
export class SjsearchPageModule {}
