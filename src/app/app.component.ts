
/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-01 13:29:50
 * @Description: file content
 */
import { Component, HostListener } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { Platform, ToastController, ActionSheetController, AlertController, ModalController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
import { JPush } from '@jiguang-ionic/jpush/ngx';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  url: string;
  backButtonPressed: boolean;
  private keyValue: boolean;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private jPush: JPush,
    private router: Router,
    private appMinimize: AppMinimize,
    public toastController: ToastController,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public modalController: ModalController,
    public nav: NavController
    // private androidfullscreen: AndroidFullScreen
  ) {
    this.backButtonPressed = false;
    this.keyValue = false;
    this.keyboardEvent();
    this.initRouterListen();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      // this.statusBar.overlaysWebView(true);
      // alert(this.platform.is('android'))
      // this.statusBar.backgroundColorByHexString('#00f1f1f1');
      // if (this.platform.is('android')) {
      //   this.androidfullscreen.showSystemUI();
      //   this.statusBar.overlaysWebView(true);
      //   this.statusBar.backgroundColorByHexString('');
      // }
      // this.registerBackButtonAction();//注册返回按键事件
      this.initJpush();
    });
  }
  initJpush() {
    this.jPush.init();
    document.addEventListener("resume", () => {
      // alert("进入，前台展示"); //进入，前台展示
      this.jPush.setApplicationIconBadgeNumber(0);
      this.jPush.resetBadge();
    }, false);
  }
  registerBackButtonAction() {
    if (!this.platform.is('android')) {
      return;
    }
    this.platform.backButton.subscribe(() => {
      if (this.keyValue) {//如果键盘开启则隐藏键盘
        this.keyValue = false;
        return;
      }
      if (this.url === '/tabs/tab1' || this.url === '/login') {
          if (this.backButtonPressed) {
              this.appMinimize.minimize();
              this.backButtonPressed = false;
          } else {
              this.presentToast();
              this.backButtonPressed = true;
              setTimeout(() => this.backButtonPressed = false, 2000);
          }
      } else if (this.url.includes('ordercontent')) {
        // this.router.navigateByUrl('/allorder');
        
        
      }
    });
  }
  keyboardEvent() {//键盘触发
    // let that = this;
    window.addEventListener('native.keyboardshow', () => {
      this.keyValue = true;//键盘开启改变属性
    });
    window.addEventListener('native.keyboardhide', () => {
      setTimeout(() => { this.keyValue = false; }, 200)//延时器
    });
  }
  initRouterListen() {
    this.router.events.subscribe(event => { // 需要放到最后一个执行
        if (event instanceof NavigationEnd) {
          console.log(event.url);
            this.url = event.url;
        }
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: '再按一次退出应用',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }
  @HostListener('document:ionBackButton', ['$event'])
  private overrideHardwareBackAction($event: any) {
    $event.detail.register(100, async () => {
      try {
        if (this.keyValue) {//如果键盘开启则隐藏键盘
          this.keyValue = false;
          return;
        }
      } catch(err) {}
      try {
        const element = await this.actionSheetController.getTop();
        if (element) {element.dismiss(); return; }
      } catch(err) {};
      try {
        const element = await this.alertController.getTop();
        if (element) {element.dismiss(); return; }
      } catch(err) {};
      try {
        const element = await this.modalController.getTop();
        if (element) {element.dismiss(); return; }
      } catch(err) {};
      if (this.url === '/tabs/tab1' || this.url === '/tabs/tab2' ||
      this.url === '/tabs/tab3' || this.url === '/tabs/tab4' || this.url === '/login') {
        if (this.backButtonPressed) {
            this.appMinimize.minimize();
            this.backButtonPressed = false;
        } else {
            this.presentToast();
            this.backButtonPressed = true;
            setTimeout(() => this.backButtonPressed = false, 2000);
        }
      } else if (this.url.includes('ordercontent')) {
        this.router.navigateByUrl('/allorder');
        return;
      } else if (this.url === '/allorder' || this.url === '/xclist') {
        this.nav.navigateBack('/tabs/tab4');
      } else {
        this.nav.back();
      }
    });
  }
}
