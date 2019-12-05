(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setpaypwd-setpaypwd-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setpaypwd/setpaypwd.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setpaypwd/setpaypwd.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>设置密码</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<ion-content padding>\n  <div class=\"box\" *ngIf=\"type === 1\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">请输入登录密码</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"loginpwd\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" color=\"success\" margin-top [disabled]=\"!loginpwd\" (click)=\"yzloginpwd()\">确定</ion-button>\n  </div>\n  <div class=\"box\" *ngIf=\"type === 2\">\n    <p *ngIf=\"user\">验证码已发送至手机{{user.mobile_phone | telhide}}</p>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"yzm-text\">请输入验证码\n          <ion-text color=\"medium\" *ngIf=\"time > 0\">{{time}}s</ion-text>\n          <ion-button *ngIf=\"time === 0\" (click)=\"czyzm()\" color=\"success\" size=\"small\" fill=\"clear\" no-padding no-margin>没有收到验证码?</ion-button>\n        </ion-label>\n        <ion-input type=\"test\" [(ngModel)]=\"yzm\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" color=\"success\" margin-top [disabled]=\"!yzm\" (click)=\"setYzm()\">确定</ion-button>\n  </div>\n  <div class=\"box\" *ngIf=\"type === 3 || type === 4\">\n    <p *ngIf=\"type === 3\">请输入新密码</p>\n    <p *ngIf=\"type === 4\">请确认新密码</p>\n    <div class=\"pwd-box-div\">\n      <ion-input type=\"password\" maxlength=\"6\" [(ngModel)]=\"pwd\" #pwdbox (ionBlur)=\"setisfous(2)\" (ionFocus)=\"setisfous(1)\"> </ion-input>\n      <ul class=\"pwd-box\"  (click)=\"setfoucs()\">\n        <li>\n          <div>\n            <span class=\"round\" *ngIf=\"pwd.length > 0\"></span>\n            <span class=\"gb\" *ngIf=\"pwd.length == 0 && isfous\">|</span>\n          </div></li>\n        <li><div>\n          <span class=\"round\" *ngIf=\"pwd.length > 1\"></span>\n          <span class=\"gb\" *ngIf=\"pwd.length == 1 && isfous\">|</span>\n        </div></li>\n        <li><div>\n          <span class=\"round\" *ngIf=\"pwd.length > 2\"></span>\n          <span class=\"gb\" *ngIf=\"pwd.length == 2 && isfous\">|</span>\n        </div></li>\n        <li><div>\n          <span class=\"round\" *ngIf=\"pwd.length > 3\"></span>\n          <span class=\"gb\" *ngIf=\"pwd.length == 3 && isfous\">|</span>\n        </div></li>\n        <li><div>\n          <span class=\"round\" *ngIf=\"pwd.length > 4\"></span>\n          <span class=\"gb\" *ngIf=\"pwd.length == 4 && isfous\">|</span>\n        </div></li>\n        <li><div>\n          <span class=\"round\" *ngIf=\"pwd.length > 5\"></span>\n          <span class=\"gb\" *ngIf=\"pwd.length == 5 && isfous\">|</span>\n        </div></li>\n      </ul>\n    </div>\n    <ion-button style=\"margin-top: 50px\" color=\"success\" expand=\"block\" [disabled]=\"!pwd || pwd.length != 6\" *ngIf=\"type === 3\" (click)=\"setpwd()\">确定</ion-button>\n    <ion-row style=\"margin-top: 50px\" *ngIf=\"type === 4\">\n      <ion-col><ion-button color=\"danger\" expand=\"block\" (click)=\"setback()\">上一步</ion-button></ion-col>\n      <ion-col><ion-button color=\"success\" expand=\"block\" (click)=\"sub()\" [disabled]=\"!pwd || pwd.length != 6\">确定</ion-button></ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/setpaypwd/setpaypwd.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/setpaypwd/setpaypwd.module.ts ***!
  \*****************************************************/
/*! exports provided: SetpaypwdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetpaypwdPageModule", function() { return SetpaypwdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setpaypwd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setpaypwd.page */ "./src/app/pages/setpaypwd/setpaypwd.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _setpaypwd_page__WEBPACK_IMPORTED_MODULE_6__["SetpaypwdPage"]
    }
];
var SetpaypwdPageModule = /** @class */ (function () {
    function SetpaypwdPageModule() {
    }
    SetpaypwdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_setpaypwd_page__WEBPACK_IMPORTED_MODULE_6__["SetpaypwdPage"]]
        })
    ], SetpaypwdPageModule);
    return SetpaypwdPageModule;
}());



/***/ }),

/***/ "./src/app/pages/setpaypwd/setpaypwd.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/setpaypwd/setpaypwd.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".yzm-text {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.yzm-text ion-button, .yzm-text ion-text {\n  margin-left: 10px;\n}\n.pwd-box-div {\n  position: relative;\n}\n.pwd-box-div ion-input {\n  opacity: 0;\n  position: relative;\n  z-index: 0;\n}\n.pwd-box-div .pwd-box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  z-index: 1;\n  background-color: #fff;\n  border: 1px solid var(--ion-color-light);\n}\n.pwd-box-div .pwd-box li {\n  flex: 1;\n  border-right: 1px solid var(--ion-color-light);\n  position: relative;\n}\n.pwd-box-div .pwd-box li:last-of-type {\n  border-right: none;\n}\n.pwd-box-div .pwd-box li::before {\n  content: \"\";\n  display: block;\n  padding-top: 100%;\n}\n.pwd-box-div .pwd-box li div {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.pwd-box-div .pwd-box li div span.round {\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--ion-color-dark);\n}\n.pwd-box-div .pwd-box li div span.gb {\n  animation: showandhide 700ms infinite reverse;\n  -webkit-animation: showandhide 700ms infinite reverse;\n  /* Safari and Chrome */\n}\n@keyframes showandhide {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes showandhide /* Safari and Chrome */ {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zZXRwYXlwd2Qvc2V0cGF5cHdkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0cGF5cHdkL3NldHBheXB3ZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0FDRUo7QURDQTtFQUNFLGtCQUFBO0FDRUY7QURERTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNHSjtBRERFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0FDR0o7QURGSTtFQUNFLE9BQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0FDSU47QURITTtFQUNFLGtCQUFBO0FDS1I7QURITTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNLUjtBREhNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0tSO0FESFU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFHQSxrQkFBQTtFQUNBLHVDQUFBO0FDS1o7QURIVTtFQUNFLDZDQUFBO0VBQ0EscURBQUE7RUFBc0Qsc0JBQUE7QUNNbEU7QURFQTtFQUVFO0lBQU0sVUFBQTtFQ0NOO0VEQUE7SUFBSSxVQUFBO0VDR0o7QUFDRjtBRERBO0VBRUU7SUFBTSxVQUFBO0VDR047RURGQTtJQUFJLFVBQUE7RUNLSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0cGF5cHdkL3NldHBheXB3ZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueXptLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpb24tYnV0dG9uLCBpb24tdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuLnB3ZC1ib3gtZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaW9uLWlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gIH1cclxuICAucHdkLWJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGxpIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgZGl2IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgJi5yb3VuZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYuZ2Ige1xyXG4gICAgICAgICAgICBhbmltYXRpb246c2hvd2FuZGhpZGUgNzAwbXMgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246c2hvd2FuZGhpZGUgNzAwbXMgaW5maW5pdGUgcmV2ZXJzZTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvd2FuZGhpZGVcclxue1xyXG4gIGZyb20ge29wYWNpdHk6IDB9XHJcbiAgdG8ge29wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hvd2FuZGhpZGUgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxue1xyXG4gIGZyb20ge29wYWNpdHk6IDB9XHJcbiAgdG8ge29wYWNpdHk6IDE7fVxyXG59XHJcbiIsIi55em0tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi55em0tdGV4dCBpb24tYnV0dG9uLCAueXptLXRleHQgaW9uLXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnB3ZC1ib3gtZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnB3ZC1ib3gtZGl2IGlvbi1pbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbn1cbi5wd2QtYm94LWRpdiAucHdkLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4ucHdkLWJveC1kaXYgLnB3ZC1ib3ggbGkge1xuICBmbGV4OiAxO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHdkLWJveC1kaXYgLnB3ZC1ib3ggbGk6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnB3ZC1ib3gtZGl2IC5wd2QtYm94IGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDEwMCU7XG59XG4ucHdkLWJveC1kaXYgLnB3ZC1ib3ggbGkgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnB3ZC1ib3gtZGl2IC5wd2QtYm94IGxpIGRpdiBzcGFuLnJvdW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuLnB3ZC1ib3gtZGl2IC5wd2QtYm94IGxpIGRpdiBzcGFuLmdiIHtcbiAgYW5pbWF0aW9uOiBzaG93YW5kaGlkZSA3MDBtcyBpbmZpbml0ZSByZXZlcnNlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2hvd2FuZGhpZGUgNzAwbXMgaW5maW5pdGUgcmV2ZXJzZTtcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbn1cblxuQGtleWZyYW1lcyBzaG93YW5kaGlkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzaG93YW5kaGlkZSAvKiBTYWZhcmkgYW5kIENocm9tZSAqLyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/setpaypwd/setpaypwd.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/setpaypwd/setpaypwd.page.ts ***!
  \***************************************************/
/*! exports provided: SetpaypwdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetpaypwdPage", function() { return SetpaypwdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");





var SetpaypwdPage = /** @class */ (function () {
    function SetpaypwdPage(nav, userfn, alertController, http) {
        this.nav = nav;
        this.userfn = userfn;
        this.alertController = alertController;
        this.http = http;
    }
    SetpaypwdPage.prototype.ngOnInit = function () {
        this.type = 1;
        this.pwd = '';
        this.isfous = false;
    };
    SetpaypwdPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.userfn.getUserp().then(function (res) {
            _this.user = res;
        });
    };
    SetpaypwdPage.prototype.goBack = function () {
        this.nav.back();
    };
    SetpaypwdPage.prototype.yzloginpwd = function () {
        this.login();
    };
    SetpaypwdPage.prototype.czyzm = function () {
        this.czjsq();
    };
    SetpaypwdPage.prototype.czjsq = function () {
        var _this = this;
        this.time = 10;
        var set = setInterval(function () {
            _this.time--;
            if (_this.time === 0) {
                clearInterval(set);
            }
        }, 1000);
    };
    SetpaypwdPage.prototype.setYzm = function () {
        // : todo 未实现验证码验证
        this.type = 3;
        // this.setfoucs();
    };
    SetpaypwdPage.prototype.setpwd = function () {
        console.log(this.pwd);
        this.type = 4;
        this.npwd = this.pwd;
        this.pwd = '';
        this.setfoucs();
    };
    SetpaypwdPage.prototype.setfoucs = function () {
        console.log(this.pwdbox);
        this.pwdbox.setFocus();
        this.isfous = true;
    };
    SetpaypwdPage.prototype.setback = function () {
        this.type = 3;
        this.npwd = '';
    };
    SetpaypwdPage.prototype.sub = function () {
        var _this = this;
        if (this.pwd != this.npwd) {
            this.presentAlert('两次密码不相同!');
        }
        this.http.postformdataloading(this.http.setyepay, { 'password': this.pwd }).subscribe(function (res) {
            _this.userfn.upData('is_surplus_open', 1);
            _this.presentAlert('设置成功', 1);
        }, function (error2) { });
    };
    SetpaypwdPage.prototype.presentAlert = function (des, type) {
        if (type === void 0) { type = 0; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '提示',
                            message: des,
                            buttons: [{
                                    text: '确定',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.pwd = '';
                                        _this.setfoucs();
                                        if (type === 1) {
                                            _this.goBack();
                                        }
                                    }
                                }]
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
    SetpaypwdPage.prototype.login = function () {
        var _this = this;
        console.log(this.user);
        var obj = {
            username: this.user.mobile_phone,
            password: this.loginpwd
        };
        this.http.postformdataloading(this.http.yzpwd, obj).subscribe(function (res) {
            _this.type = 2;
            _this.czjsq();
        }, function (err) {
            console.log(err);
            // alert(JSON.stringify(err));
        });
    };
    SetpaypwdPage.prototype.setisfous = function (type) {
        if (type === 1) {
            this.isfous = true;
        }
        else {
            this.isfous = false;
        }
    };
    SetpaypwdPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pwdbox', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SetpaypwdPage.prototype, "pwdbox", void 0);
    SetpaypwdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setpaypwd',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setpaypwd.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setpaypwd/setpaypwd.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setpaypwd.page.scss */ "./src/app/pages/setpaypwd/setpaypwd.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
    ], SetpaypwdPage);
    return SetpaypwdPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-setpaypwd-setpaypwd-module.js.map