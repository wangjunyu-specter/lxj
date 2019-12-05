(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-08-03 10:37:34\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-11-21 00:19:15\r\n * @Description: file content\r\n -->\r\n\r\n<ion-content>\r\n  <div class=\"my-content\">\r\n    <div class=\"login-top\">\r\n      <div class=\"top-back\">\r\n        <ion-button fill=\"clear\" (click)=\"backButton()\" *ngIf=\"pageType != 1\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n      </div>\r\n      <div class=\"title-box\">\r\n        <div class=\"title\">旅行家</div>\r\n        <p>专注户外旅行，领略自然之美</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-center\">\r\n      <ion-input placeholder=\"请输入手机号\" type=\"number\" [(ngModel)]=\"formData.tel\" required #name=\"ngModel\"></ion-input>\r\n      <div class=\"my-input\" *ngIf=\"pageType == 2 || pageType == 3 || pageType == 4\">\r\n        <input type=\"number\" placeholder=\"请输入验证码\" [(ngModel)]=\"formData.yzm\" #yzm=\"ngModel\" required>\r\n        <button float-right [disabled]=\"isGetyzm || !formData.tel || formData.tel.toString().length != 11\" [ngClass]=\"{noclick: !formData.tel || formData.tel.toString().length != 11}\" (click)=\"getYzm()\">{{yzmText}}</button>\r\n      </div>\r\n      <ion-input *ngIf=\"pageType != 3\" [placeholder]=\"pageType == 1? '请输入密码' : '请输入新密码'\" type=\"password\" minlength=\"6\" [(ngModel)]=\"formData.pwd\" #pwd=\"ngModel\" required></ion-input>\r\n      <app-mybutton [isdisabled]=\"isLoading || name.invalid || (pageType !== 3 && (!formData.pwd || formData.pwd && formData.pwd.length < 6)) || (pageType !== 1 && (!formData.yzm || formData.yzm && formData.yzm.toString().length < 6))\" [bname]=\"pageType === 2 ? '同意协议并注册': pageType == 4 ? '提交':'登录'\" minlength=\"6\" [isblock]=\"true\" (subClick)=\"sub()\"></app-mybutton>\r\n      <ion-grid *ngIf=\"pageType == 1 || pageType == 3\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <a (click)=\"goSetpwd()\" *ngIf=\"pageType != 3\">\r\n              <!-- <img src=\"./assets/login2.svg\" alt=\"\"> -->\r\n              忘记密码\r\n            </a>\r\n          </ion-col>\r\n          <ion-col class=\"ion-text-right\">\r\n            <a (click)=\"toggleType(3)\" *ngIf=\"pageType == 1\">验证码登录</a>\r\n            <a (click)=\"toggleType(1)\" *ngIf=\"pageType == 3\">密码登录</a>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-progress-bar *ngIf=\"isLoading\" type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\r\n    </div>\r\n    <div class=\"login-footer\" *ngIf=\"pageType == 1 || pageType == 3\">\r\n      <ion-button class=\"zhuce\" fill=\"clear\" expand=\"block\" (click)=\"toggleType(2)\">现在去注册</ion-button>\r\n      <div class=\"or-line\">\r\n        <img src=\"./assets/login3.svg\" alt=\"\">\r\n      </div>\r\n      <ion-button class=\"sbgg\" fill=\"clear\" expand=\"block\">每个人都是自己人生的旅行家</ion-button>\r\n    </div>\r\n    <div class=\"login-footer\" *ngIf=\"pageType == 2\">\r\n      <p>已阅读并同意以下协议</p>\r\n      <div>\r\n        <span (click)=\"openxy('ptxy.html')\">《旅行家平台服务协议》</span>\r\n        <span (click)=\"openxy('yszc.html')\">《隐私权政策》</span>\r\n        <span (click)=\"openxy('flsm.html')\">《法律声明》</span></div>\r\n    </div>\r\n    <div class=\"login-footer\" *ngIf=\"pageType !== 1 && pageType !== 3 && pageType !== 2\"></div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");







// import { MybuttonComponent } from '../components/mybutton/mybutton.component';

var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
            entryComponents: []
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-content {\n  padding-left: 30px;\n  padding-right: 30px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url(\"/assets/Bitmap@2x.png\") left top no-repeat;\n  background-size: 100% 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.my-content ion-icon {\n  color: #fff;\n}\n.my-content ion-input {\n  margin-bottom: 15px;\n  border-radius: 20px;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --background: rgba(255,255,255,.2);\n  --placeholder-color: #ebebeb;\n  --color: var(--ion-color-light, #fff);\n}\n.my-content .my-input {\n  background: rgba(255, 255, 255, 0.2);\n  height: 41px;\n  border-radius: 20px;\n  width: 100%;\n  margin-bottom: 15px;\n}\n.my-content .my-input input {\n  height: 41px;\n  padding: 15px;\n  box-sizing: border-box;\n  background: none;\n  border: none;\n  color: #fff;\n  outline: none;\n  width: calc(100% - 100px);\n}\n.my-content .my-input input::-webkit-input-placeholder {\n  color: rgba(var(--ion-color-light-rgb, 0, 0, 0), 0.5);\n}\n.my-content .my-input button {\n  font-size: var(--ion-text);\n  height: 41px;\n  background: none;\n  border: none;\n  outline: none;\n  color: var(--ion-color-secondary);\n  width: 100px;\n}\n.my-content .my-input button:active {\n  color: var(--ion-color-secondary-shade);\n}\n.my-content a {\n  text-decoration: none;\n  color: #fff;\n  font-size: var(--ion-title, 14px);\n}\n.my-content .top-back {\n  height: 55px;\n  margin-left: -30px;\n  margin-right: -30px;\n  margin-top: var(--ion-android-padding-top);\n}\n.my-content .title-box {\n  color: #fff;\n}\n.my-content .title-box .title {\n  font-size: 35px;\n}\n.my-content .login-footer {\n  height: 135px;\n}\n.my-content .login-footer img {\n  min-height: 23px;\n}\n.my-content .login-footer .zhuce {\n  --color: var(--ion-color-secondary);\n}\n.my-content .login-footer .sbgg {\n  --color: var(--ion-color-light, #fff);\n}\n.my-content .login-footer p {\n  color: var(--ion-color-light, #fff);\n}\n.my-content .login-footer span {\n  font-size: var(--ion-sm-text, 12px);\n  color: var(--ion-color-secondary);\n}\n.my-content .form-center img {\n  width: 17px;\n}\n.noclick {\n  color: rgba(0, 0, 0, 0.3) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkRBQUE7RUFFQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7QUNFSjtBREFFO0VBQ0UsbUJBQUE7RUFHQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7QUNFSjtBREFFO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFHQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNHTjtBREZNO0VBQ0UscURBQUE7QUNJUjtBRERJO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQ0dOO0FERk07RUFDRSx1Q0FBQTtBQ0lSO0FEQUU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQ0VKO0FEQUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDRUo7QURBRTtFQUNFLFdBQUE7QUNFSjtBRERJO0VBQ0UsZUFBQTtBQ0dOO0FEQUU7RUFDRSxhQUFBO0FDRUo7QURFSTtFQUNFLGdCQUFBO0FDQU47QURFSTtFQUNFLG1DQUFBO0FDQU47QURFSTtFQUNFLHFDQUFBO0FDQU47QURFSTtFQUNFLG1DQUFBO0FDQU47QURFSTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7QUNBTjtBRElJO0VBQ0UsV0FBQTtBQ0ZOO0FETUE7RUFDRSxvQ0FBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9CaXRtYXBAMngucG5nXCIpIGxlZnQgdG9wIG5vLXJlcGVhdDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjIpO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ViZWJlYjtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2ZmZik7XHJcbiAgfVxyXG4gIC5teS1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4yKTtcclxuICAgIGhlaWdodDo0MXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGlucHV0IHtcclxuICAgICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMCwwLDApLCAuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlLCAxNHB4KTtcclxuICB9XHJcbiAgLnRvcC1iYWNrIHtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tYW5kcm9pZC1wYWRkaW5nLXRvcCk7XHJcbiAgfVxyXG4gIC50aXRsZS1ib3gge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sb2dpbi1mb290ZXIge1xyXG4gICAgaGVpZ2h0OiAxMzVweDtcclxuICAgIC5vci1saW5lIHtcclxuICAgICAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMjU1LDI1NSwyNTUpLCAuNSk7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBtaW4taGVpZ2h0OiAyM3B4O1xyXG4gICAgfVxyXG4gICAgLnpodWNlIHtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICB9XHJcbiAgICAuc2JnZyB7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2ZmZik7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2ZmZik7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCwgMTJweCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvcm0tY2VudGVyIHtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubm9jbGljayB7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjMpICFpbXBvcnRhbnQ7XHJcbn0iLCIubXktY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL0JpdG1hcEAyeC5wbmdcIikgbGVmdCB0b3Agbm8tcmVwZWF0O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm15LWNvbnRlbnQgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5teS1jb250ZW50IGlvbi1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMik7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNlYmViZWI7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2ZmZik7XG59XG4ubXktY29udGVudCAubXktaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGhlaWdodDogNDFweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubXktY29udGVudCAubXktaW5wdXQgaW5wdXQge1xuICBoZWlnaHQ6IDQxcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xufVxuLm15LWNvbnRlbnQgLm15LWlucHV0IGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMCwgMCwgMCksIDAuNSk7XG59XG4ubXktY29udGVudCAubXktaW5wdXQgYnV0dG9uIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIGhlaWdodDogNDFweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5teS1jb250ZW50IC5teS1pbnB1dCBidXR0b246YWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpO1xufVxuLm15LWNvbnRlbnQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlLCAxNHB4KTtcbn1cbi5teS1jb250ZW50IC50b3AtYmFjayB7XG4gIGhlaWdodDogNTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zMHB4O1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tYW5kcm9pZC1wYWRkaW5nLXRvcCk7XG59XG4ubXktY29udGVudCAudGl0bGUtYm94IHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubXktY29udGVudCAudGl0bGUtYm94IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbi5teS1jb250ZW50IC5sb2dpbi1mb290ZXIge1xuICBoZWlnaHQ6IDEzNXB4O1xufVxuLm15LWNvbnRlbnQgLmxvZ2luLWZvb3RlciBpbWcge1xuICBtaW4taGVpZ2h0OiAyM3B4O1xufVxuLm15LWNvbnRlbnQgLmxvZ2luLWZvb3RlciAuemh1Y2Uge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5teS1jb250ZW50IC5sb2dpbi1mb290ZXIgLnNiZ2cge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmZmYpO1xufVxuLm15LWNvbnRlbnQgLmxvZ2luLWZvb3RlciBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2ZmZik7XG59XG4ubXktY29udGVudCAubG9naW4tZm9vdGVyIHNwYW4ge1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0LCAxMnB4KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLm15LWNvbnRlbnQgLmZvcm0tY2VudGVyIGltZyB7XG4gIHdpZHRoOiAxN3B4O1xufVxuXG4ubm9jbGljayB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");



/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-01 14:01:37
 * @Description: file content
 */






var LoginPage = /** @class */ (function () {
    function LoginPage(router, nav, http, native, activeroute, alertController, userfn, toPagefn, ws, route) {
        this.router = router;
        this.nav = nav;
        this.http = http;
        this.native = native;
        this.activeroute = activeroute;
        this.alertController = alertController;
        this.userfn = userfn;
        this.toPagefn = toPagefn;
        this.ws = ws;
        this.route = route;
        this.pageType = 1;
        this.yzmText = '获取验证码';
        this.isGetyzm = false;
        this.isLoading = false;
        this.formData = {
            tel: '',
            pwd: '',
            yzm: ''
        };
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        var res = this.activeroute.snapshot.queryParams;
        if (res && res['type'] == 1) {
            this.pageType = res['type'];
        }
        this.ws.disconnet();
        // this.router.queryParams.subscribe(res => {
        //   console.log(res);
        //   if (res && res['type']) {
        //     this.pageType = res['type'];
        //   }
        // });
    };
    LoginPage.prototype.goSetpwd = function () {
        this.route.navigate(['/set-pd'], { queryParams: { type: 1 } });
    };
    LoginPage.prototype.toggleType = function (type) {
        this.pageType = type;
        this.formData.pwd = '';
        this.formData.yzm = '';
    };
    LoginPage.prototype.sub = function () {
        console.log(this.formData);
        if (this.pageType === 1 || this.pageType == 3) {
            this.login();
        }
        else if (this.pageType === 2) {
            this.registerhttp();
        }
        else if (this.pageType === 4) {
            this.chagePwd();
        }
    };
    LoginPage.prototype.chagePwd = function () {
        var _this = this;
        var obj = {
            mobile: this.formData.tel,
            password: this.formData.pwd,
            code: this.formData.yzm
        };
        this.http.postformdataloading(this.http.resetPwd, obj).subscribe(function (res) {
            console.log(res);
            _this.native.presentAlert('密码重置成功');
            _this.pageType = 1;
        }, function (err2) { });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var obj = {
            username: this.formData.tel,
            password: this.formData.pwd,
            captcha: this.formData.yzm
        };
        this.isLoading = true;
        this.http.postformdata(this.http.login, obj).subscribe(function (res) {
            console.log(res);
            _this.http.clearUser();
            _this.nav.navigateRoot('/tabs/tab1');
            _this.userfn.setToken(res.token);
            var user = res.data;
            user.token = res.token;
            _this.userfn.setUser(user);
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            // alert(JSON.stringify(err));
            _this.isLoading = false;
        });
    };
    LoginPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '温馨提示',
                            message: '点击确定表示已阅读并同意屏幕下方协议哦',
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.registerhttp();
                                    }
                                },
                                {
                                    text: '确定',
                                    role: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.registerhttp();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.registerhttp = function () {
        var _this = this;
        var zz1 = /\d+/;
        var zz2 = /[a-z]+/i;
        if (!zz1.test(this.formData.pwd)) {
            this.native.presentAlert('密码需要包含字母和数字!');
            return false;
        }
        if (!zz2.test(this.formData.pwd)) {
            this.native.presentAlert('密码需要包含字母和数字!');
            return false;
        }
        var obj = {
            mobile_phone: this.formData.tel,
            password: this.formData.pwd,
            mobile_code: this.formData.yzm
        };
        this.isLoading = true;
        this.http.postformdataloading(this.http.register, obj).subscribe(function (res) {
            console.log(1);
            console.log(res);
            if (res.status == 1) {
                _this.presentAlert('', '注册成功,返回登录', 1);
            }
            else {
                _this.presentAlert('', res.msg, 2);
            }
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
            _this.isLoading = false;
        });
    };
    LoginPage.prototype.presentAlert = function (title, msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title || '提示',
                            message: msg,
                            buttons: [
                                {
                                    text: '确定',
                                    role: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        if (type === 1) {
                                            // this.nav.navigateRoot('/tabs/tab1');
                                            _this.pageType = 1;
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.backButton = function () {
        this.pageType = 1;
    };
    LoginPage.prototype.getYzm = function () {
        var _this = this;
        if (this.isGetyzm) {
            return false;
        }
        this.isGetyzm = true;
        this.http.getData(this.http.sendYzm, { 'mobile_phone': this.formData.tel, 'type': this.pageType - 1 }).subscribe(function (res) {
            _this.yzmText = '60';
            var setInter = setInterval(function () {
                if (_this.yzmText === '0') {
                    clearInterval(setInter);
                    _this.isGetyzm = false;
                    _this.yzmText = '获取验证码';
                    return false;
                }
                _this.yzmText = (Number(_this.yzmText) - 1).toString();
            }, 1000);
        }, function (err) {
            _this.isGetyzm = false;
        });
    };
    LoginPage.prototype.openXy = function (type) {
        var link;
        if (type === 1) {
            link = this.http.zdomain + 'ptxy.html';
        }
        else if (type === 2) {
            link = this.http.zdomain + 'yszc.html';
        }
        else {
            link = this.http.zdomain + 'flsm.html';
        }
        this.toPagefn.toPage(10, link);
    };
    LoginPage.prototype.openxy = function (link) {
        this.toPagefn.toPage(10, this.http.zdomain + link);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
        { type: _services_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _services_topage_service__WEBPACK_IMPORTED_MODULE_2__["TopageService"] },
        { type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            _services_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _services_topage_service__WEBPACK_IMPORTED_MODULE_2__["TopageService"],
            src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map