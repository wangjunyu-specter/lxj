
/*
 * @Author: wjy-mac
 * @Date: 2019-11-26 23:08:04
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-26 23:36:27
 * @Description: file content
 */
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NativeService } from './../../services/native.service';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-scan-images',
  templateUrl: './scan-images.component.html',
  styleUrls: ['./scan-images.component.scss'],
})
export class ScanImagesComponent implements OnInit {
  @Input() src: string | string[];
  @Input() type: number;
  @Input() index: number;
  slideOpts: any;
  constructor(public modalController: ModalController, public http: HttpService, private native: NativeService) { }

  ngOnInit() {
    this.slideOpts = {
      initialSlide: this.index || 0,
      pager: false,
      zoom: {
        maxRatio: 5,
      }
    }
  }
  ionViewWillEnter() {
    this.native.setFullscreen();
  }
  close() {
    this.modalController.dismiss();
  }
  imgsrc(value) {
    if (!value) {
      return '../../assets/mrtx.jpg';
    }
    const args = this.http.zdomain;
    if (value.startsWith('http') || value.startsWith('data:image') || value.startsWith('file:///') || value.startsWith('cdvfile://')) {
      return value;
    } else if (value.startsWith('/mobile') && args && args.endsWith('mobile/')) {
      return args + value.substring(7);
    } else if (value.startsWith('./../')) {
      return args + value.substring(5);
    } else {
      return args + value;
    }
  }
}
