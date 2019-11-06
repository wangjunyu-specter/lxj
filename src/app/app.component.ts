import { WebsocketService } from './services/websocket.service';
/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-06 21:45:02
 * @Description: file content
 */
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private ws: WebsocketService
    // private androidfullscreen: AndroidFullScreen
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(true);
      this.wsfn();
      // alert(this.platform.is('android'))
      // this.statusBar.backgroundColorByHexString('#00f1f1f1');
      // if (this.platform.is('android')) {
      //   this.androidfullscreen.showSystemUI();
      //   this.statusBar.overlaysWebView(true);
      //   this.statusBar.backgroundColorByHexString('');
      // }
    });
  }
  wsfn() {
    this.ws.createObservableSocket('ws://news.cdlxj.cn').subscribe(
      onmessage => {
        console.log(onmessage);
      },
      onerror => {
        console.error(onerror);
      },
      onclose => {
        console.warn('关闭了');
      }
    );
  }
}
