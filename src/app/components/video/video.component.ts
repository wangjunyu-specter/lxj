import { Component, OnInit, Input } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {NativeService} from '../../services/native.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() src: string;
  constructor(public modalController: ModalController, private native: NativeService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.native.setFullscreen();
  }
  close() {
    // this.native.backFullscreen();
    this.modalController.dismiss();
  }
}
