/*
 * @Author: wjy-mac
 * @Date: 2019-06-19 00:16:16
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-19 23:21:13
 * @Description: file content
 */
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { IonicModule } from '@ionic/angular';

import { FbyjPage } from './fbyj.page';

const routes: Routes = [
  {
    path: '',
    component: FbyjPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CKEditorModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FbyjPage]
})
export class FbyjPageModule {}
