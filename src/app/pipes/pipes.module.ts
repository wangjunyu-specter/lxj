/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-20 22:07:03
 * @Description: file content
 */
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
import { XcstatusPipe } from './xcstatus.pipe';
import { OrderstatusPipe } from './orderstatus.pipe';
import { AutoshdesPipe } from './autoshdes.pipe';
import { NamenmPipe } from './namenm.pipe';
import { NewstimePipe } from './newstime.pipe';
import { NewslisttimePipe } from './newslisttime.pipe';
import { LocationPipe } from './location.pipe';

// import { YhqtitlePipe } from './yhqtitle.pipe';

@NgModule({
  declarations: [DatecontentPipe, GoodsattrPipe, OldtonowPipe, IsgzPipe,
    ImgsrcPipe, DecodeuriPipe, SetnumPipe, TelhidePipe, IsvideoPipe, NamesubstrPipe,
    XclistattrPipe,
    XccontentsplitPipe,
    SplitarrPipe,
    XcstatusPipe,
    OrderstatusPipe,
    AutoshdesPipe,
    NamenmPipe,
    NewstimePipe,
    NewslisttimePipe,
    LocationPipe],
  imports: [
    CommonModule
  ],
  exports: [DatecontentPipe, GoodsattrPipe, OldtonowPipe, IsgzPipe, ImgsrcPipe,
    DecodeuriPipe, SetnumPipe, TelhidePipe, IsvideoPipe, NamesubstrPipe,
    XclistattrPipe, XccontentsplitPipe, SplitarrPipe, XcstatusPipe, OrderstatusPipe, AutoshdesPipe,
    NamenmPipe, NewstimePipe, NewslisttimePipe, LocationPipe]
})
export class PipesModule { }
