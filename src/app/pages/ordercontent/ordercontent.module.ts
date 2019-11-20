/*
 * @Author: wjy-mac
 * @Date: 2019-07-06 22:18:30
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-07-06 22:18:30
 * @Description: file content
 */
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrdercontentPage } from './ordercontent.page';
import {ComponentsModule} from "../../components/components.module";

const routes: Routes = [
  {
    path: '',
    component: OrdercontentPage
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
  declarations: [OrdercontentPage]
})
export class OrdercontentPageModule {}
