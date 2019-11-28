/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-26 21:39:24
 * @Description: file content
 */
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
  userData: any; // 可以修改的user数据
  isupdate: boolean; // 是否已上传数据
  ischangeHead: boolean; // 是否正在上传图片
  ischangeHeadend: boolean; // 是否改变图片
  isloading: boolean; // 是否正在上传
  userid: string;
  constructor(private nav: NavController, private userfn: UserService,
              private native: NativeService, public actionSheetController: ActionSheetController,
              private http: HttpService) { }

  ngOnInit() {
    this.userfn.getUserp().then(res =>{
      console.log(res);
      this.userid = res.user_id;
      this.userData = {
        headimg: res.headimg,
        username: res.user_name || res.username,
        birthday: res.birthday,
        // mobile_phone: res.mobile_phone,
        sex: res.sex
      };
    }).catch(err => {});
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
    this.isloading = true;
    if (userdata.birthday.includes('T')) {
      userdata.birthday = userdata.birthday.split('T')[0]
      this.userData.birthday = userdata.birthday;
    }
    if (this.ischangeHead) {
      return false;
    }
    // if (userdata.headimg.includes('data:image/jpeg;base64')) {
    //   const file = this.native.getImgbase64tofile(userdata.headimg, userdata.username + 'pqtx');
    //   try {
    //     const filepath = await this.imgupload(file);
    //     userdata.headimg = filepath;
    //     this.userData.headimg = filepath;
    //   } catch (err) {
    //     this.native.presentAlert('图片上传失败，请稍后再试!')
    //     return false;
    //   }
    // }
    this.updateData(userdata);
  }
  /**
   * @Author: wjy
   * @description: 更新服务器用户数据
   * @param {type} data 上传的用户数据
   * @return: 
   * @Date: 2019-08-04 01:18:32
   */
  updateData(data: any) {
    this.http.postformdataloading(this.http.editprofile, data).subscribe(res =>{
      console.log(res);
      this.isupdate = true;
      this.userfn.upDataobj(data);
      this.isloading = false;
      this.ischangeHeadend = false;
    }, error2 => {
      this.isloading = false;
    });
  }
  imgupload(file) {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
      oReq.open('POST', this.http.domain + this.http.updateimg);
      oReq.onreadystatechange = (oEvent) => {
        if (oReq.readyState == 4 && oReq.status == 200) {
          const res = JSON.parse(oReq.response);
          resolve(res.result['src']);
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
            console.log(filedata)
            // console.log()
            this.changeHead(filedata);
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
            console.log(filedata)
            this.changeHead(filedata);
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
  /**
   * @Author: wjy
   * @description: 预览头像
   * @param {type} link 图片路径
   * @return: 
   * @Date: 2019-08-04 01:13:02
   */
  private async changeHead(link: string) {
    this.ischangeHead = true;
    this.userData.headimg = link;
    try {
      const file = this.native.getImgbase64tofile(this.userData.headimg, 'userheaduid_' + this.userid);
      file.append('nothumb', '1');
      file.append('ishead', '1');
      console.log(file);
      const filepath = await this.imgupload(file);
      console.log(filepath)
      this.userData.headimg = filepath;
      this.ischangeHead = false;
      this.ischangeHeadend = true;
      if (this.isloading) {
        this.onSubmit();
      }
    } catch (err) {
      this.native.presentAlert('图片上传失败，请重新选择!');
      this.ischangeHead = false;
      if (this.isloading) {
        this.isloading = false;
      }
      return false;
    }
  }
}
