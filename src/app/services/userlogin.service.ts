import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {reject} from "q";
import {UserService} from "./user.service";
 // 暂时无用  登录服务 准备做成获取验证码服务
@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private http: HttpService, private userfn: UserService) { }
  login(obj) {
    return new Promise((resolve, reject) =>{
      this.http.postformdata(this.http.login, obj).subscribe(res => {
        this.userfn.setToken(res.token as string);
        const user = res.data;
        user.token = res.token;
        this.userfn.setUser(user);
        resolve(res);
      }, err => {
        reject(err)
      });
    });
  }
}
