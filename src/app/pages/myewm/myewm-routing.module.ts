import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyewmPage } from './myewm.page';

const routes: Routes = [
  {
    path: '',
    component: MyewmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyewmPageRoutingModule {}
