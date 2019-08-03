import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatecontentPipe } from './datecontent.pipe';
import { GoodsattrPipe } from './goodsattr.pipe';
import { OldtonowPipe } from './oldtonow.pipe';
import { IsgzPipe } from './isgz.pipe';
import { ImgsrcPipe } from './imgsrc.pipe';
import { DecodeuriPipe } from './decodeuri.pipe';
import { SetnumPipe } from './setnum.pipe';
import { TelhidePipe } from './telhide.pipe';
import { IsvideoPipe } from './isvideo.pipe';
import { NamesubstrPipe } from './namesubstr.pipe';
import { XclistattrPipe } from './xclistattr.pipe';
import { XccontentsplitPipe } from './xccontentsplit.pipe';
import { SplitarrPipe } from './splitarr.pipe';

// import { YhqtitlePipe } from './yhqtitle.pipe';

@NgModule({
  declarations: [DatecontentPipe, GoodsattrPipe, OldtonowPipe, IsgzPipe,
    ImgsrcPipe, DecodeuriPipe, SetnumPipe, TelhidePipe, IsvideoPipe, NamesubstrPipe,
    XclistattrPipe,
    XccontentsplitPipe,
    SplitarrPipe],
  imports: [
    CommonModule
  ],
  exports: [DatecontentPipe, GoodsattrPipe, OldtonowPipe, IsgzPipe, ImgsrcPipe,
    DecodeuriPipe, SetnumPipe, TelhidePipe, IsvideoPipe, NamesubstrPipe,
    XclistattrPipe, XccontentsplitPipe, SplitarrPipe]
})
export class PipesModule { }
