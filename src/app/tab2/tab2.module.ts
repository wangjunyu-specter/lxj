import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
// import {VgCoreModule} from '../../../node_modules/videogular2/core';
// import {VgControlsModule} from '../../../node_modules/videogular2/controls';
// import {VgOverlayPlayModule} from '../../../node_modules/videogular2/overlay-play';
// import {VgBufferingModule} from '../../../node_modules/videogular2/buffering';
// import {VideoComponent} from '../components/video/video.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    PipesModule,
    // VgCoreModule,
    // VgControlsModule,
    // VgOverlayPlayModule,
    // VgBufferingModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page],
  // entryComponents: [VideoComponent]
})
export class Tab2PageModule {}
