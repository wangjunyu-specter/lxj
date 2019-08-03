import { Component, OnInit } from '@angular/core';
import {ActionSheetController, NavController} from "@ionic/angular";
import {UserService} from "../../services/user.service";
import {NativeService} from "../../services/native.service";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-edmit-user',
  templateUrl: './edmit-user.page.html',
  styleUrls: ['./edmit-user.page.scss'],
})
export class EdmitUserPage implements OnInit {
  userData: any;
  isupdate: boolean;
  constructor(private nav: NavController, private userfn: UserService,
              private native: NativeService, public actionSheetController: ActionSheetController,
              private http: HttpService) { }

  ngOnInit() {
    this.userfn.getUserp().then(res =>{
      console.log(res);
      this.userData = {
        headimg: res.headimg,
        username: res.user_name || res.username,
        birthday: res.birthday,
        // mobile_phone: res.mobile_phone,
        sex: res.sex
      }
    }).catch(err => {})
  }
  goBack () {
    this.nav.back();
  }
  async onSubmit() {
    console.log(this.userData)
    const userdata: any = Object.assign({}, this.userData);
    if (!userdata.username) {
      this.native.presentAlert('请输入用户名!');
      return false;
    }
    if (userdata.birthday.includes('T')) {
      userdata.birthday = userdata.birthday.split('T')[0]
      this.userData.birthday = userdata.birthday;
    }
    if (userdata.headimg.includes('data:image/jpeg;base64')) {
      const file = this.native.getImgbase64tofile(userdata.headimg, userdata.username + 'pqtx');
      try {
        const filepath = await this.imgupload(file);
        userdata.headimg = filepath;
        this.userData.headimg = filepath;
      } catch (err) {
        this.native.presentAlert('图片上传失败，请稍后再试!')
        return false;
      }
    }
    console.log(this.http)
    this.http.postformdataloading(this.http.editprofile, userdata).subscribe(res =>{
      console.log(res);
      this.isupdate = true;

      this.userfn.upDataobj(userdata);
    }, error2 => {})
  }
  imgupload(file) {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      oReq.open('POST', this.http.domain + this.http.updateimg);
      oReq.onreadystatechange = (oEvent) => {
        if (oReq.readyState == 4 && oReq.status == 200) {
          const res = JSON.parse(oReq.response)
          resolve(res.result);
        }
      }
      oReq.onerror = (err) => {
        reject(err);
      }
      oReq.send(file);
    });
  }
  async imgFrom() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: '拍摄照片',
        handler: () => {
          console.log('Delete clicked');
          // this.route.navigate(['/fbpqimg']);
          this.native.getPictureByCamera().then(filedata => {
            if (!filedata) {
              return false;
            }
            // console.log()
            this.userData.headimg = filedata;
          });
        }
      }, {
        text: '从手机相册选择',
        handler: () => {
          console.log('Share clicked');
          this.native.getPictureByCamera({sourceType: 0}).then(filedata => {
            if (!filedata) {
              return false;
            }
            this.userData.headimg = filedata;
          });
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
}
