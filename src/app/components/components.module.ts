import { GoodsupanddownComponent } from './goodsupanddown/goodsupanddown.component';
import { ArticlecardComponent } from './articlecard/articlecard.component';
/*
 * @Author: wjy-mac
 * @Date: 2019-07-28 00:35:54
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-10 15:40:55
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { NewpagetitleComponent } from './newpagetitle/newpagetitle.component';
import { SeletebtnComponent } from './seletebtn/seletebtn.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { YhboxComponent } from './yhbox/yhbox.component';
import { PjcontentComponent } from './pjcontent/pjcontent.component';
import { MybuttonComponent } from './mybutton/mybutton.component';
import { TjproductComponent } from './tjproduct/tjproduct.component';
import { XclxComponent } from './xclx/xclx.component';
import { DatecontentComponent } from './datecontent/datecontent.component';
import { DirectivesModule } from '../directives/directives.module';
import { FooterComponent } from './footer/footer.component';
import { SjTopComponent } from './sj-top/sj-top.component';
import { TimePipe } from '../time.pipe';
import { MorenumPipe } from '../morenum.pipe';
import { SetnumComponent } from './setnum/setnum.component';
import { HwcpsortComponent } from './hwcpsort/hwcpsort.component';
import { GoodssortComponent } from './goodssort/goodssort.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { PqimgboxComponent } from './pqimgbox/pqimgbox.component';
import { PllistComponent } from './pllist/pllist.component';
import { BztjboxComponent} from './bztjbox/bztjbox.component';

// import { GoodsContentnavComponent } from './goods-contentnav/goods-contentnav.component';
// import { SeleteAddressComponent } from './selete-address/selete-address.component';
// import { GoodsattrComponent } from './goodsattr/goodsattr.component';
import { YhqtitlePipe } from '../pipes/yhqtitle.pipe';
// import { TimePipe } from '../time.pipe';
// import { GoodsattrPipe } from '../pipes/goodsattr.pipe';
import { PipesModule } from '../pipes/pipes.module';
import {FormsModule} from '@angular/forms';
import { GwcitemComponent } from './gwcitem/gwcitem.component';
import { EmojipickComponent } from './emojipick/emojipick.component';
import { ChatinputboxComponent } from './chatinputbox/chatinputbox.component';
import { EmojiService } from '../services/emoji.service';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrdercontentgoodsComponent } from './ordercontentgoods/ordercontentgoods.component';
import { XclistComponent } from './xclist/xclist.component';
import { RmztitemComponent } from './rmztitem/rmztitem.component';
import { ScnewtitleComponent } from './scnewtitle/scnewtitle.component';
import { ScindextjgoodsComponent } from './scindextjgoods/scindextjgoods.component';
import { NomoreComponent } from './nomore/nomore.component';
// import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [SeletebtnComponent, PagetitleComponent, NewpagetitleComponent, ProductlistComponent, YhboxComponent,
    PjcontentComponent, MybuttonComponent, TjproductComponent, XclxComponent, DatecontentComponent,
    FooterComponent, SjTopComponent, TimePipe, MorenumPipe, SetnumComponent, YhqtitlePipe,
    HwcpsortComponent, GoodssortComponent, ContactlistComponent, GwcitemComponent, PqimgboxComponent, PllistComponent,
    EmojipickComponent, ChatinputboxComponent, OrderlistComponent, OrdercontentgoodsComponent,
    XclistComponent, BztjboxComponent, RmztitemComponent, ArticlecardComponent, GoodsupanddownComponent, ScnewtitleComponent,
    ScindextjgoodsComponent, NomoreComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    DirectivesModule,

  ],
  providers: [EmojiService],
  exports: [SeletebtnComponent, PagetitleComponent, ProductlistComponent, YhboxComponent,
    PjcontentComponent, MybuttonComponent, TjproductComponent, XclxComponent, DatecontentComponent,
    FooterComponent, SjTopComponent, SetnumComponent, HwcpsortComponent,
    GoodssortComponent, ContactlistComponent, TimePipe, GwcitemComponent,
    PqimgboxComponent, PllistComponent, ChatinputboxComponent, OrderlistComponent, OrdercontentgoodsComponent,
    XclistComponent, NewpagetitleComponent, BztjboxComponent, RmztitemComponent, ArticlecardComponent, GoodsupanddownComponent,
    ScnewtitleComponent, ScindextjgoodsComponent, NomoreComponent]
})
export class ComponentsModule { }
