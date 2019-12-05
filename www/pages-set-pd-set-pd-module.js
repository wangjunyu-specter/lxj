(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-set-pd-set-pd-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/set-pd/set-pd.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/set-pd/set-pd.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n * @Author: wjy-mac\n * @Date: 2019-11-18 09:52:37\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-21 00:44:35\n * @Description: file content\n -->\n<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>重置密码</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"form-center\">\n    <ion-list>\n      <ion-item>\n          <ion-input placeholder=\"请输入手机号\" type=\"tel\" [disabled]=\"type === 2\" [(ngModel)]=\"formData.tel\" minlength=\"11\" required #name=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <div class=\"my-input\">\n          <input type=\"text\" placeholder=\"请输入验证码\" [disabled]=\"!formData.tel\" [(ngModel)]=\"formData.yzm\" #yzm=\"ngModel\" required>\n          <button class=\"ion-float-right\" [disabled]=\"isGetyzm || !formData.tel || formData.tel.toString().length != 11\" [ngClass]=\"{noclick: !formData.tel || formData.tel.toString().length != 11}\" (click)=\"getYzm()\">{{yzmText}}</button>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder=\"请输入新密码\" type=\"password\" minlength=\"6\" [(ngModel)]=\"formData.pwd\" #pwd=\"ngModel\" required></ion-input>\n      </ion-item>\n    </ion-list>\n    <app-mybutton [isdisabled]=\"isLoading || name.invalid || formData.pwd.length < 6 || !formData.yzm\" [bname]=\"'提交'\" minlength=\"6\" [isblock]=\"true\" (subClick)=\"sub()\"></app-mybutton>\n    \n    <ion-progress-bar *ngIf=\"isLoading\" type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/set-pd/set-pd.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/set-pd/set-pd.module.ts ***!
  \***********************************************/
/*! exports provided: SetPdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPdPageModule", function() { return SetPdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _set_pd_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./set-pd.page */ "./src/app/pages/set-pd/set-pd.page.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-11-18 09:52:37
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 10:16:11
 * @Description: file content
 */







var routes = [
    {
        path: '',
        component: _set_pd_page__WEBPACK_IMPORTED_MODULE_7__["SetPdPage"]
    }
];
var SetPdPageModule = /** @class */ (function () {
    function SetPdPageModule() {
    }
    SetPdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_set_pd_page__WEBPACK_IMPORTED_MODULE_7__["SetPdPage"]]
        })
    ], SetPdPageModule);
    return SetPdPageModule;
}());



/***/ }),

/***/ "./src/app/pages/set-pd/set-pd.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/set-pd/set-pd.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-center img {\n  width: 17px;\n}\n\n.my-input {\n  background: rgba(255, 255, 255, 0.2);\n  height: 41px;\n  border-radius: 20px;\n  width: 100%;\n}\n\n.my-input input {\n  height: 41px;\n  box-sizing: border-box;\n  background: none;\n  border: none;\n  color: var(--ion-color-dark);\n  outline: none;\n  width: calc(100% - 100px);\n}\n\n.my-input input::-webkit-input-placeholder {\n  color: #7d7d7d;\n}\n\n.my-input button {\n  font-size: var(--ion-text);\n  height: 41px;\n  background: none;\n  border: none;\n  outline: none;\n  color: var(--ion-color-secondary);\n  width: 100px;\n}\n\n.my-input button:active {\n  color: var(--ion-color-secondary-shade);\n}\n\n.noclick {\n  color: rgba(0, 0, 0, 0.3) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zZXQtcGQvc2V0LXBkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0LXBkL3NldC1wZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0FDQUo7O0FER0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURFRTtFQUNFLFlBQUE7RUFJQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDREo7O0FERUk7RUFDRSxjQUFBO0FDQU47O0FER0U7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FDREo7O0FERUk7RUFDRSx1Q0FBQTtBQ0FOOztBRElBO0VBQ0Usb0NBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldC1wZC9zZXQtcGQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2VudGVyIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTdweDtcbiAgfVxufVxuLm15LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMik7XG4gIGhlaWdodDo0MXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgaW5wdXQge1xuICAgIGhlaWdodDogNDFweDtcbiAgICAvLyBwYWRkaW5nOiAxNXB4O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xuICAgIH1cbiAgfVxuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICAgIGhlaWdodDogNDFweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgJjphY3RpdmUge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpO1xuICAgIH1cbiAgfVxufVxuLm5vY2xpY2sge1xuICBjb2xvcjogcmdiYSgwLDAsMCwuMykgIWltcG9ydGFudDtcbn0iLCIuZm9ybS1jZW50ZXIgaW1nIHtcbiAgd2lkdGg6IDE3cHg7XG59XG5cbi5teS1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgaGVpZ2h0OiA0MXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5teS1pbnB1dCBpbnB1dCB7XG4gIGhlaWdodDogNDFweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbn1cbi5teS1pbnB1dCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjN2Q3ZDdkO1xufVxuLm15LWlucHV0IGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICBoZWlnaHQ6IDQxcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICB3aWR0aDogMTAwcHg7XG59XG4ubXktaW5wdXQgYnV0dG9uOmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcbn1cblxuLm5vY2xpY2sge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/set-pd/set-pd.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/set-pd/set-pd.page.ts ***!
  \*********************************************/
/*! exports provided: SetPdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPdPage", function() { return SetPdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_native_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var SetPdPage = /** @class */ (function () {
    function SetPdPage(nav, userfn, activeroute, http, alertController, native) {
        this.nav = nav;
        this.userfn = userfn;
        this.activeroute = activeroute;
        this.http = http;
        this.alertController = alertController;
        this.native = native;
    }
    SetPdPage.prototype.ngOnInit = function () {
        this.isLoading = false;
        this.yzmText = '获取验证码';
        this.isGetyzm = false;
        this.formData = {
            tel: '',
            pwd: '',
            yzm: ''
        };
    };
    SetPdPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('进入2');
        var params = this.activeroute.snapshot.queryParams;
        this.type = params['type'] ? Number(params['type']) : 1;
        if (this.type === 2) {
            this.userfn.getUser().then(function (res) {
                console.log(res);
                _this.formData.tel = res['mobile_phone'];
            }).catch(function (err) {
            });
        }
    };
    SetPdPage.prototype.goBack = function () {
        this.nav.back();
    };
    SetPdPage.prototype.getYzm = function () {
        var _this = this;
        if (this.isGetyzm) {
            return false;
        }
        this.isGetyzm = true;
        this.http.getData(this.http.sendYzm, { 'mobile_phone': this.formData.tel, 'type': 3 }).subscribe(function (res) {
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
    SetPdPage.prototype.sub = function () {
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
        this.isLoading = true;
        var obj = {
            mobile: this.formData.tel,
            password: this.formData.pwd,
            code: this.formData.yzm
        };
        this.http.postformdataloading(this.http.resetPwd, obj).subscribe(function (res) {
            _this.isLoading = false;
            _this.setSuccess();
        }, function (err2) {
            _this.isLoading = false;
        });
    };
    SetPdPage.prototype.setSuccess = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '提示!',
                            message: '密码重置成功',
                            buttons: [
                                {
                                    text: '确定',
                                    handler: function () {
                                        _this.goBack();
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
    SetPdPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: src_app_services_native_service__WEBPACK_IMPORTED_MODULE_1__["NativeService"] }
    ]; };
    SetPdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-set-pd',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./set-pd.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/set-pd/set-pd.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./set-pd.page.scss */ "./src/app/pages/set-pd/set-pd.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], src_app_services_native_service__WEBPACK_IMPORTED_MODULE_1__["NativeService"]])
    ], SetPdPage);
    return SetPdPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-set-pd-set-pd-module.js.map