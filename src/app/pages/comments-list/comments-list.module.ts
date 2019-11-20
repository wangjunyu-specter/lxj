/*
 * @Author: wjy-mac
 * @Date: 2019-11-05 11:32:10
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-05 11:41:51
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CommentsListPage } from './comments-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: CommentsListPage
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
  declarations: [CommentsListPage]
})
export class CommentsListPageModule {}
