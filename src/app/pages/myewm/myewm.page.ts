import { NativeService } from 'src/app/services/native.service';
import { ViewChild, ElementRef } from '@angular/core';
/*
 * @Author: wjy-mac
 * @Date: 2020-04-08 21:46:37
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-08 23:33:27
 * @Description: file content
 */
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var QRCode;
@Component({
  selector: 'app-myewm',
  templateUrl: './myewm.page.html',
  styleUrls: ['./myewm.page.scss'],
})
export class MyewmPage implements OnInit {
  link: string; // 链接地址
  @ViewChild('ewm', {static: false}) ewm: ElementRef;
  @ViewChild('canvas', {static: false}) canvas: ElementRef;
  @ViewChild('bigbg', {static: false}) bigbg: ElementRef;
  context: any;
  type: number = 0;
  links: string[]; // 背景图片地址
  width: number; // 窗口宽度
  height: number; // 窗口高度
  constructor(private activeroute: ActivatedRoute, private el:ElementRef, private native: NativeService) { }

  ngOnInit() {
    setTimeout(() => {console.log(this.ewm.nativeElement)}, 3000)
    const params = this.activeroute.snapshot.queryParams;
    this.link = params['link'];
    this.links = [
      '../../../assets/ewmbg/ewmbg1.jpg',
      '../../../assets/ewmbg/ewmbj2.jpg'
    ]
  }
  ionViewDidEnter() {
    this.createEwm();
    this.setCanvas();
    this.creatBj();
  }
  createEwm() {
    // tslint:disable-next-line: no-unused-expression
    new QRCode(this.ewm.nativeElement, {
      text: this.link,
      width: 128,
      height: 128,
      colorDark : '#000000',
      colorLight : '#ffffff',
    });
  }
  setCanvas() {
    this.context = this.canvas.nativeElement.getContext("2d");
    this.width = this.bigbg.nativeElement.scrollWidth;
    this.height = this.bigbg.nativeElement.scrollHeight;
    this.canvas.nativeElement.width = this.width;
    this.canvas.nativeElement.height = this.height;
  }
  creatBj() {
    if (this.type === this.links.length - 1) {
      this.creatMrewm();
      return false;
    }
    // console.log(this.el.nativeElement.querySelector('.img-box' + this.type))
    const img = new Image();
    let src = this.links[this.type];
    img.src = src;
    img.onload = (e) => {
      this.czhb();
      this.context.drawImage(e.target, 0, 0, this.width, this.height);
      this.createewm(this.width - 100, this.height - 100, 80, 80);
    };
  }
  createewm(left, top, width, height) {
    this.context.drawImage(this.getEwm(), left, top, width, height);
  }
  creatMrewm() {
    const width = this.width / 2;
    const top = (this.height - width) / 2;
    const left = width / 2;
    this.czhb();
    this.createewm(left, top, width, width);
  }
  getEwm() {
    return this.el.nativeElement.querySelector('#ewm img');
  }
  czhb() {
    this.context.clearRect(0, 0, this.width, this.height);
  }
  toggle(index: number) {
    this.type = index;
    this.creatBj();
  }
  save() {
    const dataURL = this.canvas.nativeElement.toDataURL("image/png");
    this.native.saveImage(dataURL);
  }
}
