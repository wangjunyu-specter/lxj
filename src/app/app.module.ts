/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 23:14:51
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-08-04 00:05:03
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/file/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Network } from '@ionic-native/network/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Market } from '@ionic-native/market/ngx';
import { AppUpdate } from '@ionic-native/app-update/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { ShopContentService } from './services/shop-content.service';
import { GetproductService } from './services/getproduct.service';
import { ProductcontentlistService } from './services/productcontentlist.service';
import { GoodsattrService } from './services/goodsattr.service';
import { SearchrecodeService } from './services/searchrecode.service';
import { SearchendgoodsService } from './services/searchendgoods.service';
import { UserloginService } from './services/userlogin.service';

import { SearchComponent } from './components/search/search.component';
import { GoodsattrComponent } from './components/goodsattr/goodsattr.component';
import { AvailableBonusComponent } from './components/available-bonus/available-bonus.component';
import { GoodsContentnavComponent } from './components/goods-contentnav/goods-contentnav.component';
import { PayboxComponent } from './components/paybox/paybox.component';



import { TopnavlistComponent } from './components/topnavlist/topnavlist.component';
import { NativeService } from './services/native.service';
import { SjindextjgoodsService } from './services/sjindextjgoods.service';
import { ProductsListService } from './services/products-list.service';
import { ScindexService } from './services/scindex.service';
import { TopageService } from './services/topage.service';
import { ZtListService } from './services/zt-list.service';
import { UserService } from './services/user.service';
import { UsercenterService } from './services/usercenter.service';
import { YhtclistService } from './services/yhtclist.service';
import { GwcService } from './services/gwc.service';
import { BounslistService } from './services/bounslist.service';
import { CollelistService } from './services/collelist.service';
import { XcsclistService } from './services/xcsclist.service';
import { ArticelistService } from './services/articelist.service';
import { GzlistService } from './services/gzlist.service';
import { EmojiishowService } from './services/emojiishow.service';
import { PlitemclickService } from './services/plitemclick.service';
import { SeleteMediaService } from './services/selete-media.service';
import { OrdersuccessService } from './services/ordersuccess.service';
import { XclistService } from './services/xclist.service';
import {PaymentListService} from './services/payment-list.service';
import {PayorderService} from './services/payorder.service';


import {NativeStorage} from '@ionic-native/native-storage/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
import { FbseleteComponent } from './components/fbselete/fbselete.component';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import {OrderlistService} from './services/orderlist.service';
import {HworderlistService} from './services/hworderlist.service';
// import { Device } from '@ionic-native/device/ngx';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {VideoComponent} from './components/video/video.component';
import {UploadComponent} from './components/upload/upload.component';
import { GaoDeLocation } from '@ionic-native/gao-de-location/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModelTimePipe } from './pipes/model-time.pipe';

@NgModule({
  declarations: [AppComponent, SearchComponent, TopnavlistComponent, GoodsattrComponent,
    GoodsContentnavComponent, FbseleteComponent, PayboxComponent, VideoComponent, UploadComponent,
    AvailableBonusComponent, ModelTimePipe],
  entryComponents: [SearchComponent, TopnavlistComponent, GoodsattrComponent,
    GoodsContentnavComponent, FbseleteComponent, PayboxComponent, VideoComponent, UploadComponent,
    AvailableBonusComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    // CalendarModule,
    BrowserAnimationsModule,
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory
    // })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    ShopContentService,
    NativeService,
    GetproductService,
    ProductcontentlistService,
    SjindextjgoodsService,
    ProductsListService,
    ScindexService,
    TopageService,
    ZtListService,
    UserService,
    UsercenterService,
    GoodsattrService,
    YhtclistService,
    NativeStorage,
    GwcService,
    ArticelistService,
    // Device,
    BounslistService,
    CollelistService,
    XcsclistService,
    GzlistService,
    EmojiishowService,
    PlitemclickService,
    // ProvincesService,
    SeleteMediaService,
    UserloginService,
      HTTP,
    MediaCapture,
    Keyboard,
    File,
    Camera,
    ImagePicker,
    VideoPlayer,
    FileTransfer,
    PhotoViewer,
    AndroidFullScreen,
    OrdersuccessService,
    HworderlistService,
    OrderlistService,
    XclistService,
    PaymentListService,
    PayorderService,
    Network,
    SearchrecodeService,
    SearchendgoodsService,
    GaoDeLocation,
    InAppBrowser,
    AppVersion,
    Market,
    AppUpdate,
    // NavigationBar,
    // ComponentsModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
