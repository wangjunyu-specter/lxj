import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductcontentPage } from './productcontent.page';

import { ComponentsModule } from '../../components/components.module';
import { GoodTimePipe } from '../../good-time.pipe';
import { CarorotherPipe } from '../../carorother.pipe';
import { TimedifferencePipe } from '../../timedifference.pipe';
import { OnlytimePipe } from '../../onlytime.pipe';
import {PipesModule} from "../../pipes/pipes.module";
// import { TimePipe } from '../../time.pipe';


const routes: Routes = [
  {
    path: '',
    component: ProductcontentPage
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
  declarations: [ProductcontentPage, GoodTimePipe, CarorotherPipe, TimedifferencePipe, OnlytimePipe]
})
export class ProductcontentPageModule {}
