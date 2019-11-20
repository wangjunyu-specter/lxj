/*
 * @Author: wjy-mac
 * @Date: 2019-11-18 14:47:41
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 19:23:27
 * @Description: file content
 */
import { NativeService } from 'src/app/services/native.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private nav: NavController, private native: NativeService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        this.native.getStorage('token').then(res => {
          console.log(res);
          resolve(true);
        }).catch(err => {
          alert(JSON.stringify(err));
          this.nav.navigateForward('login');
          reject(false);
        });
      });
  }
}
