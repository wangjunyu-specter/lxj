
/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors  : wjy-mac
 * @LastEditTime : 2019-12-20 23:38:13
 * @Description: file content
 */
import { Component, HostListener } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { Platform, ToastController, ActionSheetController, AlertController, ModalController, NavController, PopoverController } from '@ionic/angular';
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
    public nav: NavController,
    public popoverController: PopoverController
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
      this.statusBar.overlaysWebView(true);
      // alert(this.platform.is('android'))
      // this.statusBar.backgroundColorByHexString('#00f1f1f1');
      // if (this.platform.is('android')) {
      //   this.androidfullscreen.showSystemUI();
      //   this.statusBar.overlaysWebView(true);
      //   this.statusBar.backgroundColorByHexString('');
      // }
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
  // 重写android硬件返回
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
      } else if (this.url.startsWith('/fbyj')) {
        const element = await this.popoverController.getTop();
        let msg: string;
        if (element) {
          msg = '还有图片正在上传哦,是否放弃?';
        } else {
          msg = '保存后下次还可以继续在个人中心修改哦!';
        }
        const alert = await this.alertController.create({
          header: '提示!',
          message: msg,
          buttons: [
            {
              text: '退出',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                this.nav.back();
                element.dismiss();
                return;
              }
            }, {
              text: '再等等',
              handler: () => {
                return;
              }
            }
          ]
        });
        await alert.present();
      } else {
        this.nav.back();
      }
    });
  }
}
