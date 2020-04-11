import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyewmPageRoutingModule } from './myewm-routing.module';

import { MyewmPage } from './myewm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyewmPageRoutingModule
  ],
  declarations: [MyewmPage]
})
export class MyewmPageModule {}
