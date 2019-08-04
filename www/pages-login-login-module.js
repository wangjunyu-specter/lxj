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

module.exports = "\r\n<ion-content>\r\n  <div class=\"my-content\">\r\n    <div class=\"login-top\">\r\n      <div class=\"top-back\">\r\n        <ion-button fill=\"clear\" (click)=\"backButton()\" *ngIf=\"pageType != 1\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n      </div>\r\n      <div class=\"title-box\">\r\n        <div class=\"title\">旅行家</div>\r\n        <p>专注户外游领域，感悟旅行更多意义</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-center\">\r\n      <ion-input placeholder=\"请输入手机号\" type=\"tel\" [(ngModel)]=\"formData.tel\" minlength=\"11\" required #name=\"ngModel\"></ion-input>\r\n      <div class=\"my-input\" *ngIf=\"pageType == 2 || pageType == 3 || pageType == 4\">\r\n        <input type=\"text\" placeholder=\"请输入验证码\" [(ngModel)]=\"formData.yzm\" #yzm=\"ngModel\" required>\r\n        <button float-right [disabled]=\"isGetyzm\" (click)=\"getYzm()\">{{yzmText}}</button>\r\n      </div>\r\n      <ion-input *ngIf=\"pageType != 3\" [placeholder]=\"pageType == 1? '请输入密码' : '请输入新密码'\" type=\"password\" minlength=\"6\" [(ngModel)]=\"formData.pwd\" #pwd=\"ngModel\" required></ion-input>\r\n      <app-mybutton [isdisabled]=\"isLoading || name.invalid || (pageType !== 3 && formData.pwd.length < 6) || (pageType !== 1 && !formData.yzm)\" [bname]=\"pageType === 2 ? '注册': pageType == 4 ? '提交':'登录'\" minlength=\"6\" [isblock]=\"true\" (subClick)=\"sub()\"></app-mybutton>\r\n      <ion-grid *ngIf=\"pageType == 1 || pageType == 3\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <a (click)=\"toggleType(4)\">\r\n              <img src=\"./assets/login2.svg\" alt=\"\">\r\n              忘记密码\r\n            </a>\r\n          </ion-col>\r\n          <ion-col text-right>\r\n            <a (click)=\"toggleType(3)\" *ngIf=\"pageType == 1\">验证码登录</a>\r\n            <a (click)=\"toggleType(1)\" *ngIf=\"pageType == 3\">密码登录</a>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-progress-bar *ngIf=\"isLoading\" type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\r\n    </div>\r\n    <div class=\"login-footer\" *ngIf=\"pageType == 1 || pageType == 3\">\r\n      <ion-button class=\"zhuce\" fill=\"clear\" expand=\"block\" (click)=\"toggleType(2)\">现在去注册</ion-button>\r\n      <div class=\"or-line\">\r\n        <img src=\"./assets/login3.svg\" alt=\"\">\r\n      </div>\r\n      <ion-button class=\"sbgg\" fill=\"clear\" expand=\"block\">随便逛逛</ion-button>\r\n    </div>\r\n    <div class=\"login-footer\" *ngIf=\"pageType == 2\">\r\n      <p>已阅读并同意以下协议</p>\r\n      <div><a>《旅行家平台服务协议》</a><a href=\"#\">《隐私权政策》</a><a href=\"#\">《法律声明》</a></div>\r\n    </div>\r\n    <div class=\"login-footer\" *ngIf=\"pageType !== 1 && pageType !== 3 && pageType !== 2\"></div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-content {\n  padding-left: 30px;\n  padding-right: 30px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url(\"/assets/Bitmap@2x.png\") left top no-repeat;\n  background-size: 100% 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n  .my-content ion-icon {\n    color: #fff; }\n  .my-content ion-input {\n    margin-bottom: 15px;\n    border-radius: 20px;\n    --padding-start: 15px;\n    --padding-end: 15px;\n    --background: rgba(255,255,255,.2);\n    --placeholder-color: #ebebeb;\n    --color: var(--ion-color-light, #fff); }\n  .my-content .my-input {\n    background: rgba(255, 255, 255, 0.2);\n    height: 41px;\n    border-radius: 20px;\n    width: 100%;\n    margin-bottom: 15px; }\n  .my-content .my-input input {\n      height: 41px;\n      padding: 15px;\n      box-sizing: border-box;\n      background: none;\n      border: none;\n      color: #fff;\n      outline: none;\n      width: calc(100% - 100px); }\n  .my-content .my-input input::-webkit-input-placeholder {\n        color: rgba(var(--ion-color-light-rgb, 0, 0, 0), 0.5); }\n  .my-content .my-input button {\n      font-size: var(--ion-text);\n      height: 41px;\n      background: none;\n      border: none;\n      outline: none;\n      color: var(--ion-color-secondary);\n      width: 100px; }\n  .my-content .my-input button:active {\n        color: var(--ion-color-secondary-shade); }\n  .my-content a {\n    text-decoration: none;\n    color: #fff;\n    font-size: var(--ion-title, 14px); }\n  .my-content .top-back {\n    height: 55px;\n    margin-left: -30px;\n    margin-right: -30px;\n    margin-top: var(--ion-android-padding-top); }\n  .my-content .title-box {\n    color: #fff; }\n  .my-content .title-box .title {\n      font-size: 35px; }\n  .my-content .login-footer {\n    height: 135px; }\n  .my-content .login-footer .or-line {\n      border: 1px dashed rgba(var(--ion-color-light-rgb, 255, 255, 255), 0.5); }\n  .my-content .login-footer img {\n      min-height: 23px; }\n  .my-content .login-footer .zhuce {\n      --color: var(--ion-color-secondary); }\n  .my-content .login-footer .sbgg {\n      --color: var(--ion-color-light, #fff); }\n  .my-content .login-footer p {\n      color: var(--ion-color-light, #fff); }\n  .my-content .login-footer a {\n      font-size: var(--ion-sm-text, 12px);\n      color: var(--ion-color-secondary); }\n  .my-content .form-center img {\n    width: 17px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJEQUEyRDtFQUUzRCwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEIsRUFBQTtFQVhoQztJQWFJLFdBQVcsRUFBQTtFQWJmO0lBZ0JJLG1CQUFtQjtJQUduQixtQkFBbUI7SUFDbkIscUJBQWdCO0lBQ2hCLG1CQUFjO0lBQ2Qsa0NBQWE7SUFDYiw0QkFBb0I7SUFDcEIscUNBQVEsRUFBQTtFQXhCWjtJQTJCSSxvQ0FBZ0M7SUFDaEMsWUFBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUEvQnZCO01BaUNNLFlBQVk7TUFDWixhQUFhO01BR2Isc0JBQXNCO01BQ3RCLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osV0FBVztNQUNYLGFBQWE7TUFDYix5QkFBeUIsRUFBQTtFQTFDL0I7UUE0Q1EscURBQWtELEVBQUE7RUE1QzFEO01BZ0RNLDBCQUEwQjtNQUMxQixZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixhQUFhO01BQ2IsaUNBQWlDO01BQ2pDLFlBQVksRUFBQTtFQXREbEI7UUF3RFEsdUNBQXVDLEVBQUE7RUF4RC9DO0lBNkRJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsaUNBQWlDLEVBQUE7RUEvRHJDO0lBa0VJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBDQUEwQyxFQUFBO0VBckU5QztJQXdFSSxXQUFXLEVBQUE7RUF4RWY7TUEwRU0sZUFBZSxFQUFBO0VBMUVyQjtJQThFSSxhQUFhLEVBQUE7RUE5RWpCO01BZ0ZNLHVFQUFvRSxFQUFBO0VBaEYxRTtNQW1GTSxnQkFBZ0IsRUFBQTtFQW5GdEI7TUFzRk0sbUNBQVEsRUFBQTtFQXRGZDtNQXlGTSxxQ0FBUSxFQUFBO0VBekZkO01BNEZNLG1DQUFtQyxFQUFBO0VBNUZ6QztNQStGTSxtQ0FBbUM7TUFDbkMsaUNBQWlDLEVBQUE7RUFoR3ZDO0lBcUdNLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jb250ZW50IHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvQml0bWFwQDJ4LnBuZ1wiKSBsZWZ0IHRvcCBuby1yZXBlYXQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBpb24taW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4yKTtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNlYmViZWI7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmZmYpO1xyXG4gIH1cclxuICAubXktaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMik7XHJcbiAgICBoZWlnaHQ6NDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGhlaWdodDogNDFweDtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDAsMCwwKSwgLjUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSwgMTRweCk7XHJcbiAgfVxyXG4gIC50b3AtYmFjayB7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0zMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0taW9uLWFuZHJvaWQtcGFkZGluZy10b3ApO1xyXG4gIH1cclxuICAudGl0bGUtYm94IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubG9naW4tZm9vdGVyIHtcclxuICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICAub3ItbGluZSB7XHJcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI1NSwyNTUsMjU1KSwgLjUpO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgbWluLWhlaWdodDogMjNweDtcclxuICAgIH1cclxuICAgIC56aHVjZSB7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgfVxyXG4gICAgLnNiZ2cge1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmZmYpO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmZmYpO1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQsIDEycHgpO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb3JtLWNlbnRlciB7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTdweDtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

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
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");


/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy
 * @LastEditTime: 2019-08-03 19:23:10
 * @Description: file content
 */






var LoginPage = /** @class */ (function () {
    function LoginPage(router, nav, http, native, activeroute, alertController, userfn, toPagefn) {
        this.router = router;
        this.nav = nav;
        this.http = http;
        this.native = native;
        this.activeroute = activeroute;
        this.alertController = alertController;
        this.userfn = userfn;
        this.toPagefn = toPagefn;
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
        console.log(this.native.getPlatform());
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        var res = this.activeroute.snapshot.queryParams;
        if (res && res['type'] == 1) {
            this.pageType = res['type'];
        }
        // this.router.queryParams.subscribe(res => {
        //   console.log(res);
        //   if (res && res['type']) {
        //     this.pageType = res['type'];
        //   }
        // });
    };
    LoginPage.prototype.toggleType = function (type) {
        this.pageType = type;
        this.formData.pwd = '';
    };
    LoginPage.prototype.sub = function () {
        console.log(this.formData);
        if (this.pageType === 1 || this.pageType == 3) {
            this.login();
        }
        else if (this.pageType === 2) {
            this.register();
        }
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
        var _this = this;
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
        this.yzmText = '60';
        var setInter = setInterval(function () {
            if (_this.yzmText === '0') {
                clearInterval(setInter);
                _this.isGetyzm = false;
                _this.yzmText = '获取验证码';
                return false;
            }
            _this.yzmText = (Number(_this.yzmText) - 1).toString();
        }, 1000);
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
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _services_native_service__WEBPACK_IMPORTED_MODULE_6__["NativeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_topage_service__WEBPACK_IMPORTED_MODULE_1__["TopageService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map