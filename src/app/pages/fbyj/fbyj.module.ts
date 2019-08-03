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
    RouterModule.forChild(routes)
  ],
  declarations: [FbyjPage]
})
export class FbyjPageModule {}
