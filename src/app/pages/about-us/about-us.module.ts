/*
 * @Author: wjy-mac
 * @Date: 2019-08-01 23:41:46
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-14 19:14:00
 * @Description: file content
 */
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AboutUsPage } from './about-us.page';

const routes: Routes = [
  {
    path: '',
    component: AboutUsPage
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
  declarations: [AboutUsPage]
})
export class AboutUsPageModule {}
