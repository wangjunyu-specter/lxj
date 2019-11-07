import { ComponentsModule } from 'src/app/components/components.module';
/*
 * @Author: wjy-mac
 * @Date: 2019-10-09 21:49:28
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-07 22:20:08
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsPage } from './news.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: NewsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
