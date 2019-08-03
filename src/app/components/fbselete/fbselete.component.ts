import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
// import {Router} from '@angular/router';
@Component({
  selector: 'app-fbselete',
  templateUrl: './fbselete.component.html',
  styleUrls: ['./fbselete.component.scss'],
})
export class FbseleteComponent implements OnInit {

  constructor(public actionSheetController: ActionSheetController,
              public modalController: ModalController) { }

  ngOnInit() {}
  createpq() {
    this.presentActionSheet();
  }
  createyj(type: number) {
    this.close({type});
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: '拍摄照片',
        handler: () => {
          console.log('Delete clicked');
          this.close({type: 0, mediatype: 1});
          // this.route.navigate(['/fbpqimg']);
        }
      }, {
        text: '拍摄视频',
        handler: () => {
          console.log('Delete clicked');
          this.close({type: 0, mediatype: 2});
          // this.route.navigate(['/fbpqvideo']);
        }
      }, {
        text: '从手机相册选择',
        handler: () => {
          console.log('Share clicked');
          this.close({type: 0, mediatype: 3});
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  close(data?) {
    this.modalController.dismiss(data);
  }

}
