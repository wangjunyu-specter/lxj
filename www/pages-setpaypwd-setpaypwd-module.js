(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setpaypwd-setpaypwd-module"],{

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

/***/ "./src/app/pages/setpaypwd/setpaypwd.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/setpaypwd/setpaypwd.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>设置密码</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<ion-content padding>\n  <div class=\"box\" *ngIf=\"type === 1\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">请输入登录密码</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"loginpwd\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" color=\"success\" margin-top [disabled]=\"!loginpwd\" (click)=\"yzloginpwd()\">确定</ion-button>\n  </div>\n  <div class=\"box\" *ngIf=\"type === 2\">\n    <p *ngIf=\"user\">验证码已发送至手机{{user.mobile_phone | telhide}}</p>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"yzm-text\">请输入验证码\n          <ion-text color=\"medium\" *ngIf=\"time > 0\">{{time}}s</ion-text>\n          <ion-button *ngIf=\"time === 0\" (click)=\"czyzm()\" color=\"success\" size=\"small\" fill=\"clear\" no-padding no-margin>没有收到验证码?</ion-button>\n        </ion-label>\n        <ion-input type=\"test\" [(ngModel)]=\"yzm\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" color=\"success\" margin-top [disabled]=\"!yzm\" (click)=\"setYzm()\">确定</ion-button>\n  </div>\n  <div class=\"box\" *ngIf=\"type === 3 || type === 4\">\n    <p *ngIf=\"type === 3\">请输入新密码</p>\n    <p *ngIf=\"type === 4\">请确认新密码</p>\n    <div class=\"pwd-box-div\">\n      <ion-input type=\"password\" maxlength=\"6\" [(ngModel)]=\"pwd\" #pwdbox (ionBlur)=\"setisfous(2)\" (ionFocus)=\"setisfous(1)\"> </ion-input>\n      <ul class=\"pwd-box\"  (click)=\"setfoucs()\">\n        <li>\n          <div>\n            <span class=\"round\" *ngIf=\"pwd.length > 0\"></span>\n            <span class=\"gb\" *ngIf=\"pwd.length == 0 && isfous\">|</span>\n          </div></li>\n        <li><div>\n          <span class=\"round\" *ngIf=\"pwd.length > 1\"></span>\n          <span class=\"gb\" *ngIf=\"pwd.length == 1 && isfous\">|</span>\n        </div></li>\n        <li><div>\n          <span class=\"round\" *ngIf=\"pwd.length > 2\"></span>\n          <span class=\"gb\" *ngIf=\"pwd.length == 2 && isfous\">|</span>\n        </div></li>\n        <li><div>\n          <span class=\"round\" *ngIf=\"pwd.length > 3\"></span>\n          <span class=\"gb\" *ngIf=\"pwd.length == 3 && isfous\">|</span>\n        </div></li>\n        <li><div>\n          <span class=\"round\" *ngIf=\"pwd.length > 4\"></span>\n          <span class=\"gb\" *ngIf=\"pwd.length == 4 && isfous\">|</span>\n        </div></li>\n        <li><div>\n          <span class=\"round\" *ngIf=\"pwd.length > 5\"></span>\n          <span class=\"gb\" *ngIf=\"pwd.length == 5 && isfous\">|</span>\n        </div></li>\n      </ul>\n    </div>\n    <ion-button style=\"margin-top: 50px\" color=\"success\" expand=\"block\" [disabled]=\"!pwd || pwd.length != 6\" *ngIf=\"type === 3\" (click)=\"setpwd()\">确定</ion-button>\n    <ion-row style=\"margin-top: 50px\" *ngIf=\"type === 4\">\n      <ion-col><ion-button color=\"danger\" expand=\"block\" (click)=\"setback()\">上一步</ion-button></ion-col>\n      <ion-col><ion-button color=\"success\" expand=\"block\" (click)=\"sub()\" [disabled]=\"!pwd || pwd.length != 6\">确定</ion-button></ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/setpaypwd/setpaypwd.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/setpaypwd/setpaypwd.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".yzm-text {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .yzm-text ion-button, .yzm-text ion-text {\n    margin-left: 10px; }\n  .pwd-box-div {\n  position: relative; }\n  .pwd-box-div ion-input {\n    opacity: 0;\n    position: relative;\n    z-index: 0; }\n  .pwd-box-div .pwd-box {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    list-style: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n    z-index: 1;\n    background-color: #fff;\n    border: 1px solid var(--ion-color-light); }\n  .pwd-box-div .pwd-box li {\n      flex: 1;\n      border-right: 1px solid var(--ion-color-light);\n      position: relative; }\n  .pwd-box-div .pwd-box li:last-of-type {\n        border-right: none; }\n  .pwd-box-div .pwd-box li::before {\n        content: '';\n        display: block;\n        padding-top: 100%; }\n  .pwd-box-div .pwd-box li div {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center; }\n  .pwd-box-div .pwd-box li div span.round {\n          display: block;\n          width: 8px;\n          height: 8px;\n          border-radius: 50%;\n          background-color: var(--ion-color-dark); }\n  .pwd-box-div .pwd-box li div span.gb {\n          animation: showandhide 700ms infinite reverse;\n          -webkit-animation: showandhide 700ms infinite reverse;\n          /* Safari and Chrome */ }\n  @keyframes showandhide {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  @-webkit-keyframes showandhide /* Safari and Chrome */ {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zZXRwYXlwd2Qvc2V0cGF5cHdkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQixFQUFBO0VBSnJCO0lBTUksaUJBQWlCLEVBQUE7RUFHckI7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUdJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVSxFQUFBO0VBTGQ7SUFRSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsd0NBQXdDLEVBQUE7RUFyQjVDO01BdUJNLE9BQU87TUFDUCw4Q0FBOEM7TUFDOUMsa0JBQWtCLEVBQUE7RUF6QnhCO1FBMkJRLGtCQUFrQixFQUFBO0VBM0IxQjtRQThCUSxXQUFXO1FBQ1gsY0FBYztRQUNkLGlCQUFpQixFQUFBO0VBaEN6QjtRQW1DUSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLE9BQU87UUFDUCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLG1CQUFtQixFQUFBO0VBM0MzQjtVQThDWSxjQUFjO1VBQ2QsVUFBVTtVQUNWLFdBQVc7VUFHWCxrQkFBa0I7VUFDbEIsdUNBQXVDLEVBQUE7RUFwRG5EO1VBdURZLDZDQUE0QztVQUM1QyxxREFBb0Q7VUFBRSxzQkFBQSxFQUF1QjtFQVF6RjtFQUVFO0lBQU0sVUFBVSxFQUFBO0VBQ2hCO0lBQUksVUFBVSxFQUFBLEVBQUE7RUFHaEI7RUFFRTtJQUFNLFVBQVUsRUFBQTtFQUNoQjtJQUFJLFVBQVUsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0cGF5cHdkL3NldHBheXB3ZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueXptLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpb24tYnV0dG9uLCBpb24tdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuLnB3ZC1ib3gtZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaW9uLWlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gIH1cclxuICAucHdkLWJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGxpIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgZGl2IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgJi5yb3VuZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYuZ2Ige1xyXG4gICAgICAgICAgICBhbmltYXRpb246c2hvd2FuZGhpZGUgNzAwbXMgaW5maW5pdGUgcmV2ZXJzZTtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246c2hvd2FuZGhpZGUgNzAwbXMgaW5maW5pdGUgcmV2ZXJzZTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvd2FuZGhpZGVcclxue1xyXG4gIGZyb20ge29wYWNpdHk6IDB9XHJcbiAgdG8ge29wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hvd2FuZGhpZGUgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxue1xyXG4gIGZyb20ge29wYWNpdHk6IDB9XHJcbiAgdG8ge29wYWNpdHk6IDE7fVxyXG59XHJcbiJdfQ== */"

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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pwdbox'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SetpaypwdPage.prototype, "pwdbox", void 0);
    SetpaypwdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setpaypwd',
            template: __webpack_require__(/*! ./setpaypwd.page.html */ "./src/app/pages/setpaypwd/setpaypwd.page.html"),
            styles: [__webpack_require__(/*! ./setpaypwd.page.scss */ "./src/app/pages/setpaypwd/setpaypwd.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
    ], SetpaypwdPage);
    return SetpaypwdPage;
}());



/***/ }),

/***/ "./src/app/pipes/datecontent.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/datecontent.pipe.ts ***!
  \*******************************************/
/*! exports provided: DatecontentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatecontentPipe", function() { return DatecontentPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatecontentPipe = /** @class */ (function () {
    function DatecontentPipe() {
    }
    DatecontentPipe.prototype.transform = function (value, args) {
        console.log(value);
        return null;
    };
    DatecontentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'datecontent'
        })
    ], DatecontentPipe);
    return DatecontentPipe;
}());



/***/ }),

/***/ "./src/app/pipes/decodeuri.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/decodeuri.pipe.ts ***!
  \*****************************************/
/*! exports provided: DecodeuriPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeuriPipe", function() { return DecodeuriPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DecodeuriPipe = /** @class */ (function () {
    function DecodeuriPipe() {
    }
    DecodeuriPipe.prototype.transform = function (value, args) {
        if (value) {
            return decodeURIComponent(value);
        }
        return null;
    };
    DecodeuriPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'decodeuri'
        })
    ], DecodeuriPipe);
    return DecodeuriPipe;
}());



/***/ }),

/***/ "./src/app/pipes/goodsattr.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/goodsattr.pipe.ts ***!
  \*****************************************/
/*! exports provided: GoodsattrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsattrPipe", function() { return GoodsattrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoodsattrPipe = /** @class */ (function () {
    function GoodsattrPipe() {
    }
    GoodsattrPipe.prototype.transform = function (value, args) {
        console.log(value);
        value = value.replace(/\[\S*\]/g, '');
        console.log(value.length);
        if (value.length > 15) {
            return value.slice(0, 15);
        }
        return value;
    };
    GoodsattrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'goodsattr'
        })
    ], GoodsattrPipe);
    return GoodsattrPipe;
}());



/***/ }),

/***/ "./src/app/pipes/imgsrc.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/imgsrc.pipe.ts ***!
  \**************************************/
/*! exports provided: ImgsrcPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgsrcPipe", function() { return ImgsrcPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImgsrcPipe = /** @class */ (function () {
    function ImgsrcPipe() {
    }
    ImgsrcPipe.prototype.transform = function (value, args) {
        // : todo 暂未实现    所有img src pipe
        if (!value) {
            return '../../assets/mrtx.jpg';
        }
        if (value.startsWith('http') || value.startsWith('data:image') || value.startsWith('file:///') || value.startsWith('cdvfile://')) {
            return value;
        }
        else {
            return args + value;
        }
    };
    ImgsrcPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'imgsrc'
        })
    ], ImgsrcPipe);
    return ImgsrcPipe;
}());



/***/ }),

/***/ "./src/app/pipes/isgz.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/isgz.pipe.ts ***!
  \************************************/
/*! exports provided: IsgzPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsgzPipe", function() { return IsgzPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IsgzPipe = /** @class */ (function () {
    function IsgzPipe() {
    }
    IsgzPipe.prototype.transform = function (value, args) {
        console.log(value);
        console.log(args);
        if (args.includes(value)) {
            return false;
        }
        return true;
    };
    IsgzPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'isgz'
        })
    ], IsgzPipe);
    return IsgzPipe;
}());



/***/ }),

/***/ "./src/app/pipes/isvideo.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/isvideo.pipe.ts ***!
  \***************************************/
/*! exports provided: IsvideoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsvideoPipe", function() { return IsvideoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IsvideoPipe = /** @class */ (function () {
    function IsvideoPipe() {
    }
    IsvideoPipe.prototype.transform = function (value, args) {
        if (!value) {
            return false;
        }
        var index = value.lastIndexOf('.');
        if (index < 0) {
            return false;
        }
        var type = value.substr(index + 1);
        if (type === 'mp4' || type === 'ogg' || type === 'WebM') {
            return true;
        }
        console.error(type);
        return false;
    };
    IsvideoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'isvideo'
        })
    ], IsvideoPipe);
    return IsvideoPipe;
}());



/***/ }),

/***/ "./src/app/pipes/namesubstr.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/namesubstr.pipe.ts ***!
  \******************************************/
/*! exports provided: NamesubstrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamesubstrPipe", function() { return NamesubstrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NamesubstrPipe = /** @class */ (function () {
    function NamesubstrPipe() {
    }
    NamesubstrPipe.prototype.transform = function (value, args) {
        console.log(value);
        if (isNaN(Number(args)) || !value) {
            return value;
        }
        else {
            if (value.length > args) {
                return value.substr(0, args) + '...';
            }
        }
        return value;
    };
    NamesubstrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'namesubstr'
        })
    ], NamesubstrPipe);
    return NamesubstrPipe;
}());



/***/ }),

/***/ "./src/app/pipes/oldtonow.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/oldtonow.pipe.ts ***!
  \****************************************/
/*! exports provided: OldtonowPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldtonowPipe", function() { return OldtonowPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OldtonowPipe = /** @class */ (function () {
    function OldtonowPipe() {
    }
    OldtonowPipe.prototype.transform = function (value, args) {
        return getTimeUntilNow(value);
        return null;
    };
    OldtonowPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'oldtonow'
        })
    ], OldtonowPipe);
    return OldtonowPipe;
}());

function getTimeUntilNow(mss) {
    var days = parseInt((mss / (1000 * 60 * 60 * 24)).toString(), 10);
    if (days > 0) {
        return days + '天前';
    }
    var hours = parseInt(((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString(), 10);
    if (hours > 0) {
        return hours + '小时前';
    }
    var minutes = parseInt(((mss % (1000 * 60 * 60)) / (1000 * 60)).toString(), 10);
    if (minutes > 0) {
        return minutes + '分钟前';
    }
    var seconds = (mss % (1000 * 60)) / 1000;
    return '刚刚 ';
}


/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _datecontent_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datecontent.pipe */ "./src/app/pipes/datecontent.pipe.ts");
/* harmony import */ var _goodsattr_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goodsattr.pipe */ "./src/app/pipes/goodsattr.pipe.ts");
/* harmony import */ var _oldtonow_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oldtonow.pipe */ "./src/app/pipes/oldtonow.pipe.ts");
/* harmony import */ var _isgz_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isgz.pipe */ "./src/app/pipes/isgz.pipe.ts");
/* harmony import */ var _imgsrc_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgsrc.pipe */ "./src/app/pipes/imgsrc.pipe.ts");
/* harmony import */ var _decodeuri_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decodeuri.pipe */ "./src/app/pipes/decodeuri.pipe.ts");
/* harmony import */ var _setnum_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setnum.pipe */ "./src/app/pipes/setnum.pipe.ts");
/* harmony import */ var _telhide_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./telhide.pipe */ "./src/app/pipes/telhide.pipe.ts");
/* harmony import */ var _isvideo_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isvideo.pipe */ "./src/app/pipes/isvideo.pipe.ts");
/* harmony import */ var _namesubstr_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./namesubstr.pipe */ "./src/app/pipes/namesubstr.pipe.ts");
/* harmony import */ var _xclistattr_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./xclistattr.pipe */ "./src/app/pipes/xclistattr.pipe.ts");
/* harmony import */ var _xccontentsplit_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./xccontentsplit.pipe */ "./src/app/pipes/xccontentsplit.pipe.ts");















// import { YhqtitlePipe } from './yhqtitle.pipe';
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_datecontent_pipe__WEBPACK_IMPORTED_MODULE_3__["DatecontentPipe"], _goodsattr_pipe__WEBPACK_IMPORTED_MODULE_4__["GoodsattrPipe"], _oldtonow_pipe__WEBPACK_IMPORTED_MODULE_5__["OldtonowPipe"], _isgz_pipe__WEBPACK_IMPORTED_MODULE_6__["IsgzPipe"],
                _imgsrc_pipe__WEBPACK_IMPORTED_MODULE_7__["ImgsrcPipe"], _decodeuri_pipe__WEBPACK_IMPORTED_MODULE_8__["DecodeuriPipe"], _setnum_pipe__WEBPACK_IMPORTED_MODULE_9__["SetnumPipe"], _telhide_pipe__WEBPACK_IMPORTED_MODULE_10__["TelhidePipe"], _isvideo_pipe__WEBPACK_IMPORTED_MODULE_11__["IsvideoPipe"], _namesubstr_pipe__WEBPACK_IMPORTED_MODULE_12__["NamesubstrPipe"],
                _xclistattr_pipe__WEBPACK_IMPORTED_MODULE_13__["XclistattrPipe"],
                _xccontentsplit_pipe__WEBPACK_IMPORTED_MODULE_14__["XccontentsplitPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_datecontent_pipe__WEBPACK_IMPORTED_MODULE_3__["DatecontentPipe"], _goodsattr_pipe__WEBPACK_IMPORTED_MODULE_4__["GoodsattrPipe"], _oldtonow_pipe__WEBPACK_IMPORTED_MODULE_5__["OldtonowPipe"], _isgz_pipe__WEBPACK_IMPORTED_MODULE_6__["IsgzPipe"], _imgsrc_pipe__WEBPACK_IMPORTED_MODULE_7__["ImgsrcPipe"],
                _decodeuri_pipe__WEBPACK_IMPORTED_MODULE_8__["DecodeuriPipe"], _setnum_pipe__WEBPACK_IMPORTED_MODULE_9__["SetnumPipe"], _telhide_pipe__WEBPACK_IMPORTED_MODULE_10__["TelhidePipe"], _isvideo_pipe__WEBPACK_IMPORTED_MODULE_11__["IsvideoPipe"], _namesubstr_pipe__WEBPACK_IMPORTED_MODULE_12__["NamesubstrPipe"],
                _xclistattr_pipe__WEBPACK_IMPORTED_MODULE_13__["XclistattrPipe"], _xccontentsplit_pipe__WEBPACK_IMPORTED_MODULE_14__["XccontentsplitPipe"]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/pipes/setnum.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/setnum.pipe.ts ***!
  \**************************************/
/*! exports provided: SetnumPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetnumPipe", function() { return SetnumPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SetnumPipe = /** @class */ (function () {
    function SetnumPipe() {
    }
    SetnumPipe.prototype.transform = function (value, args) {
        if (!value || isNaN(Number(value))) {
            return 0;
        }
        var num = Number(value);
        if (num > 10000) {
            var w = Math.floor(num / 10000);
            var y = num % 10000;
            var str = w.toString();
            if (y > 0) {
                var q = Math.floor(y / 1000);
                if (q > 0) {
                    str += '.' + q + '+';
                }
            }
            return str + '万';
        }
        return value;
    };
    SetnumPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'setnum'
        })
    ], SetnumPipe);
    return SetnumPipe;
}());



/***/ }),

/***/ "./src/app/pipes/telhide.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/telhide.pipe.ts ***!
  \***************************************/
/*! exports provided: TelhidePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelhidePipe", function() { return TelhidePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TelhidePipe = /** @class */ (function () {
    function TelhidePipe() {
    }
    TelhidePipe.prototype.transform = function (value, args) {
        if (!value) {
            return '';
        }
        var start = value.substr(0, 3);
        var end = value.substr(-4);
        return start + '****' + end;
    };
    TelhidePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'telhide'
        })
    ], TelhidePipe);
    return TelhidePipe;
}());



/***/ }),

/***/ "./src/app/pipes/xccontentsplit.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/xccontentsplit.pipe.ts ***!
  \**********************************************/
/*! exports provided: XccontentsplitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XccontentsplitPipe", function() { return XccontentsplitPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var XccontentsplitPipe = /** @class */ (function () {
    function XccontentsplitPipe() {
    }
    XccontentsplitPipe.prototype.transform = function (value, args) {
        if (!value) {
            return '';
        }
        value = value.replace(/\r?\n|\r/g, "");
        var arr = value.split(' ');
        var arr2 = [];
        arr.map(function (res) {
            if (!res) {
                return false;
            }
            res = res.replace(/(\[\d*\])/g, '');
            arr2.push(res.split(':'));
        });
        return arr2;
    };
    XccontentsplitPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'xccontentsplit'
        })
    ], XccontentsplitPipe);
    return XccontentsplitPipe;
}());



/***/ }),

/***/ "./src/app/pipes/xclistattr.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/xclistattr.pipe.ts ***!
  \******************************************/
/*! exports provided: XclistattrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XclistattrPipe", function() { return XclistattrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var XclistattrPipe = /** @class */ (function () {
    function XclistattrPipe() {
    }
    XclistattrPipe.prototype.transform = function (value, args) {
        if (!value) {
            return '';
        }
        value = value.replace(/\r?\n|\r/g, "");
        var arr = value.split(' ');
        var arr2 = [];
        arr.map(function (res) {
            if (!res) {
                return false;
            }
            res = res.replace(/(\[\d*\])/g, '');
            arr2.push(res);
        });
        if (arr2.length > 3 && !args) {
            arr2.length = 3;
            arr2.push('...');
        }
        return arr2;
    };
    XclistattrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'xclistattr'
        })
    ], XclistattrPipe);
    return XclistattrPipe;
}());



/***/ })

}]);
//# sourceMappingURL=pages-setpaypwd-setpaypwd-module.js.map