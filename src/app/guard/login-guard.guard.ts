/*
 * @Author: wjy-mac
 * @Date: 2019-11-18 14:47:41
 * @LastEditors  : wjy-mac
 * @LastEditTime : 2019-12-18 21:39:20
 * @Description: file content
 */
import { NativeService } from 'src/app/services/native.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private native: NativeService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        this.native.getStorage('token').then(res => {
          if (res.user_id == -1) {
            resolve(false);
          } else {
            resolve(true);
          }
        }).catch(err => {
          // this.nav.navigateForward('login');
          // this.logints();
          this.native.resetlogin();
          resolve(false);
        });
      });
  }
}
