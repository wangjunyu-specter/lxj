/*
 * @Author: wjy-mac
 * @Date: 2019-07-01 15:18:42
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-05 00:30:46
 * @Description: file content
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../../services/http.service';
import {DomSanitizer} from '@angular/platform-browser';
import {VideoComponent} from '../video/video.component';
import {ModalController} from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import {NativeService} from '../../services/native.service';
import { ScanImagesComponent } from '../scan-images/scan-images.component';

// import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
@Component({
  selector: 'app-pqimgbox',
  templateUrl: './pqimgbox.component.html',
  styleUrls: ['./pqimgbox.component.scss'],
})
export class PqimgboxComponent implements OnInit {
  @Input() imglist: string[]; // 缩略图
  @Input() ytimglist: string[]; // 原始图片路径  或视频路径
  @Input() showend: boolean;
  @Output() clickItem = new EventEmitter();
  @Output() addimgitem = new EventEmitter();
  // @Output() playvideo = new EventEmitter();
  constructor(private http: HttpService, private sanitizer: DomSanitizer,
              public modalController: ModalController,
              private photoViewer: PhotoViewer, private native: NativeService) { }

  ngOnInit() {
    // if (!this.imglist) {
    //   this.imglist = [
    //     'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',
    //     'http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg',
    //     'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',
    //     'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',
    //     'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',
    //     'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',
    //     // 'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',
    //   ];
    // }

  }
  openItem(index: number) {
    console.log(index)
    console.log(this.ytimglist)
    if (this.ytimglist && this.ytimglist[index]) {
      // this.photoViewer.show(this.http.zdomain + this.ytimglist[index]);
      this.scanImage(this.ytimglist, index);
    } else {
      this.clickItem.emit(index);
    }
  }
  addImg() {
    this.addimgitem.emit();
  }
  public sanitize(url: string): any {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  playvideofn(index: number) {
    if (this.ytimglist && this.ytimglist[index]) {
      // this.playvideo.emit(this.http.zdomain + this.ytimglist[index]);
      this.playvideop(this.http.zdomain + this.ytimglist[index]);
    }
  }
  async playvideop(src: string) {
    console.log(src)
    // this.navigationBar.hideNavigationBar();
    const modal = await this.modalController.create({
      component: VideoComponent,
      componentProps: {
        // src: this.http.domain + this.productData.goods_thumb,
        src,
      }
    });
    await modal.present();
    await modal.onDidDismiss();
    this.native.backFullscreen();
  }
  /**
   * @Author: wjy-mac
   * @description: 查看图片
   * @Date: 2019-11-26 23:25:30
   * @param {type} src 图片或者图片地址列表
   * @param {type} index 查看第几张图片 下标
   * @return: 
   */  
  async scanImage(src: string | string[], index = 0) {
    const modal = await this.modalController.create({
      component: ScanImagesComponent,
      componentProps: {
        src,
        type: typeof(src) === 'string' ? -1 : 1,
        index
      }
    });
    await modal.present();
    await modal.onDidDismiss();
    this.native.backFullscreen();
  }
}
