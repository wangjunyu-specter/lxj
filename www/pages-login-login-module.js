(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

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

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-08-03 10:37:34\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-11-21 00:19:15\r\n * @Description: file content\r\n -->\r\n\r\n<ion-content>\r\n  <div class=\"my-content\">\r\n    <div class=\"login-top\">\r\n      <div class=\"top-back\">\r\n        <ion-button fill=\"clear\" (click)=\"backButton()\" *ngIf=\"pageType != 1\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n      </div>\r\n      <div class=\"title-box\">\r\n        <div class=\"title\">旅行家</div>\r\n        <p>专注户外旅行，领略自然之美</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-center\">\r\n      <ion-input placeholder=\"请输入手机号\" type=\"number\" [(ngModel)]=\"formData.tel\" required #name=\"ngModel\"></ion-input>\r\n      <div class=\"my-input\" *ngIf=\"pageType == 2 || pageType == 3 || pageType == 4\">\r\n        <input type=\"number\" placeholder=\"请输入验证码\" [(ngModel)]=\"formData.yzm\" #yzm=\"ngModel\" required>\r\n        <button float-right [disabled]=\"isGetyzm || !formData.tel || formData.tel.toString().length != 11\" [ngClass]=\"{noclick: !formData.tel || formData.tel.toString().length != 11}\" (click)=\"getYzm()\">{{yzmText}}</button>\r\n      </div>\r\n      <ion-input *ngIf=\"pageType != 3\" [placeholder]=\"pageType == 1? '请输入密码' : '请输入新密码'\" type=\"password\" minlength=\"6\" [(ngModel)]=\"formData.pwd\" #pwd=\"ngModel\" required></ion-input>\r\n      <app-mybutton [isdisabled]=\"isLoading || name.invalid || (pageType !== 3 && (!formData.pwd || formData.pwd && formData.pwd.length < 6)) || (pageType !== 1 && (!formData.yzm || formData.yzm && formData.yzm.toString().length < 6))\" [bname]=\"pageType === 2 ? '同意协议并注册': pageType == 4 ? '提交':'登录'\" minlength=\"6\" [isblock]=\"true\" (subClick)=\"sub()\"></app-mybutton>\r\n      <ion-grid *ngIf=\"pageType == 1 || pageType == 3\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <a (click)=\"goSetpwd()\" *ngIf=\"pageType != 3\">\r\n              <!-- <img src=\"./assets/login2.svg\" alt=\"\"> -->\r\n              忘记密码\r\n            </a>\r\n          </ion-col>\r\n          <ion-col class=\"ion-text-right\">\r\n            <a (click)=\"toggleType(3)\" *ngIf=\"pageType == 1\">验证码登录</a>\r\n            <a (click)=\"toggleType(1)\" *ngIf=\"pageType == 3\">密码登录</a>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-progress-bar *ngIf=\"isLoading\" type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\r\n    </div>\r\n    <div class=\"login-footer\" *ngIf=\"pageType == 1 || pageType == 3\">\r\n      <ion-button class=\"zhuce\" fill=\"clear\" expand=\"block\" (click)=\"toggleType(2)\">现在去注册</ion-button>\r\n      <div class=\"or-line\">\r\n        <img src=\"./assets/login3.svg\" alt=\"\">\r\n      </div>\r\n      <ion-button class=\"sbgg\" fill=\"clear\" expand=\"block\">每个人都是自己人生的旅行家</ion-button>\r\n    </div>\r\n    <div class=\"login-footer\" *ngIf=\"pageType == 2\">\r\n      <p>已阅读并同意以下协议</p>\r\n      <div>\r\n        <span (click)=\"openxy('ptxy.html')\">《旅行家平台服务协议》</span>\r\n        <span (click)=\"openxy('yszc.html')\">《隐私权政策》</span>\r\n        <span (click)=\"openxy('flsm.html')\">《法律声明》</span></div>\r\n    </div>\r\n    <div class=\"login-footer\" *ngIf=\"pageType !== 1 && pageType !== 3 && pageType !== 2\"></div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-content {\n  padding-left: 30px;\n  padding-right: 30px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url(\"/assets/Bitmap@2x.png\") left top no-repeat;\n  background-size: 100% 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n  .my-content ion-icon {\n    color: #fff; }\n  .my-content ion-input {\n    margin-bottom: 15px;\n    border-radius: 20px;\n    --padding-start: 15px;\n    --padding-end: 15px;\n    --background: rgba(255,255,255,.2);\n    --placeholder-color: #ebebeb;\n    --color: var(--ion-color-light, #fff); }\n  .my-content .my-input {\n    background: rgba(255, 255, 255, 0.2);\n    height: 41px;\n    border-radius: 20px;\n    width: 100%;\n    margin-bottom: 15px; }\n  .my-content .my-input input {\n      height: 41px;\n      padding: 15px;\n      box-sizing: border-box;\n      background: none;\n      border: none;\n      color: #fff;\n      outline: none;\n      width: calc(100% - 100px); }\n  .my-content .my-input input::-webkit-input-placeholder {\n        color: rgba(var(--ion-color-light-rgb, 0, 0, 0), 0.5); }\n  .my-content .my-input button {\n      font-size: var(--ion-text);\n      height: 41px;\n      background: none;\n      border: none;\n      outline: none;\n      color: var(--ion-color-secondary);\n      width: 100px; }\n  .my-content .my-input button:active {\n        color: var(--ion-color-secondary-shade); }\n  .my-content a {\n    text-decoration: none;\n    color: #fff;\n    font-size: var(--ion-title, 14px); }\n  .my-content .top-back {\n    height: 55px;\n    margin-left: -30px;\n    margin-right: -30px;\n    margin-top: var(--ion-android-padding-top); }\n  .my-content .title-box {\n    color: #fff; }\n  .my-content .title-box .title {\n      font-size: 35px; }\n  .my-content .login-footer {\n    height: 135px; }\n  .my-content .login-footer img {\n      min-height: 23px; }\n  .my-content .login-footer .zhuce {\n      --color: var(--ion-color-secondary); }\n  .my-content .login-footer .sbgg {\n      --color: var(--ion-color-light, #fff); }\n  .my-content .login-footer p {\n      color: var(--ion-color-light, #fff); }\n  .my-content .login-footer span {\n      font-size: var(--ion-sm-text, 12px);\n      color: var(--ion-color-secondary); }\n  .my-content .form-center img {\n    width: 17px; }\n  .noclick {\n  color: rgba(0, 0, 0, 0.3) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJEQUEyRDtFQUUzRCwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEIsRUFBQTtFQVhoQztJQWFJLFdBQVcsRUFBQTtFQWJmO0lBZ0JJLG1CQUFtQjtJQUduQixtQkFBbUI7SUFDbkIscUJBQWdCO0lBQ2hCLG1CQUFjO0lBQ2Qsa0NBQWE7SUFDYiw0QkFBb0I7SUFDcEIscUNBQVEsRUFBQTtFQXhCWjtJQTJCSSxvQ0FBZ0M7SUFDaEMsWUFBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUEvQnZCO01BaUNNLFlBQVk7TUFDWixhQUFhO01BR2Isc0JBQXNCO01BQ3RCLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osV0FBVztNQUNYLGFBQWE7TUFDYix5QkFBeUIsRUFBQTtFQTFDL0I7UUE0Q1EscURBQWtELEVBQUE7RUE1QzFEO01BZ0RNLDBCQUEwQjtNQUMxQixZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixhQUFhO01BQ2IsaUNBQWlDO01BQ2pDLFlBQVksRUFBQTtFQXREbEI7UUF3RFEsdUNBQXVDLEVBQUE7RUF4RC9DO0lBNkRJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsaUNBQWlDLEVBQUE7RUEvRHJDO0lBa0VJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBDQUEwQyxFQUFBO0VBckU5QztJQXdFSSxXQUFXLEVBQUE7RUF4RWY7TUEwRU0sZUFBZSxFQUFBO0VBMUVyQjtJQThFSSxhQUFhLEVBQUE7RUE5RWpCO01BbUZNLGdCQUFnQixFQUFBO0VBbkZ0QjtNQXNGTSxtQ0FBUSxFQUFBO0VBdEZkO01BeUZNLHFDQUFRLEVBQUE7RUF6RmQ7TUE0Rk0sbUNBQW1DLEVBQUE7RUE1RnpDO01BK0ZNLG1DQUFtQztNQUNuQyxpQ0FBaUMsRUFBQTtFQWhHdkM7SUFxR00sV0FBVyxFQUFBO0VBSWpCO0VBQ0Usb0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY29udGVudCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL0JpdG1hcEAyeC5wbmdcIikgbGVmdCB0b3Agbm8tcmVwZWF0O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgaW9uLWlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMik7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZWJlYmViO1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZmZmKTtcclxuICB9XHJcbiAgLm15LWlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjIpO1xyXG4gICAgaGVpZ2h0OjQxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiLCAwLDAsMCksIC41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgIGhlaWdodDogNDFweDtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUsIDE0cHgpO1xyXG4gIH1cclxuICAudG9wLWJhY2sge1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzBweDtcclxuICAgIG1hcmdpbi10b3A6IHZhcigtLWlvbi1hbmRyb2lkLXBhZGRpbmctdG9wKTtcclxuICB9XHJcbiAgLnRpdGxlLWJveCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmxvZ2luLWZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDEzNXB4O1xyXG4gICAgLm9yLWxpbmUge1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiLCAyNTUsMjU1LDI1NSksIC41KTtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDIzcHg7XHJcbiAgICB9XHJcbiAgICAuemh1Y2Uge1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIH1cclxuICAgIC5zYmdnIHtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZmZmKTtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZmZmKTtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0LCAxMnB4KTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZm9ybS1jZW50ZXIge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5ub2NsaWNrIHtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuMykgIWltcG9ydGFudDtcclxufSJdfQ== */"

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
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
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