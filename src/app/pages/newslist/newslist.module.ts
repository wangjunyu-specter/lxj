/*
 * @Author: wjy-mac
 * @Date: 2019-03-21 22:31:34
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-07 16:49:37
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewslistPage } from './newslist.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: NewslistPage
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
  declarations: [NewslistPage]
})
export class NewslistPageModule {}
