(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edmit-user-edmit-user-module"],{

/***/ "./src/app/pages/edmit-user/edmit-user.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/edmit-user/edmit-user.module.ts ***!
  \*******************************************************/
/*! exports provided: EdmitUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdmitUserPageModule", function() { return EdmitUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edmit_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edmit-user.page */ "./src/app/pages/edmit-user/edmit-user.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _edmit_user_page__WEBPACK_IMPORTED_MODULE_6__["EdmitUserPage"]
    }
];
var EdmitUserPageModule = /** @class */ (function () {
    function EdmitUserPageModule() {
    }
    EdmitUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edmit_user_page__WEBPACK_IMPORTED_MODULE_6__["EdmitUserPage"]]
        })
    ], EdmitUserPageModule);
    return EdmitUserPageModule;
}());



/***/ }),

/***/ "./src/app/pages/edmit-user/edmit-user.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/edmit-user/edmit-user.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: wjy\n * @Date: 2019-08-03 14:52:31\n * @LastEditors: wjy\n * @LastEditTime: 2019-08-04 01:26:30\n * @Description: file content\n -->\n<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>修改资料</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form #data=\"ngForm\" *ngIf=\"userData\" (ngSubmit)=\"onSubmit()\">\n    <ion-list>\n      <ion-item>\n        <ion-label>用户名</ion-label>\n        <ion-input text-end\n           [(ngModel)]=\"userData.username\" name=\"username\" required></ion-input>\n      </ion-item>\n      <!--<ion-item>-->\n        <!--<ion-label>手机号</ion-label>-->\n        <!--<ion-input-->\n           <!--[(ngModel)]=\"userData.mobile_phone\" name=\"mobile_phone\" required></ion-input>-->\n      <!--</ion-item>-->\n      <ion-item (click)=\"imgFrom()\" detail>\n        <ion-avatar slot=\"end\">\n          <img [src]=\"userData.headimg | imgsrc: http.domain\">\n        </ion-avatar>\n        <ion-label>头像</ion-label>\n      </ion-item>\n      <ion-item detail>\n        <ion-label>生日</ion-label>\n        <ion-datetime displayFormat=\"YYYY-MM-DD\"\n                      pickerFormat=\"YYYY-MM-DD\"\n                      Format=\"YYYY-MM-DD\" doneText=\"确定\" cancelText=\"取消\"\n                      [(ngModel)]=\"userData.birthday\" name=\"birthday\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>性别</ion-label>\n        <ion-select  [(ngModel)]=\"userData.sex\" name=\"sex\" interface=\"action-sheet\">\n          <ion-select-option value=\"1\">男</ion-select-option>\n          <ion-select-option value=\"0\">女</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <!--<ion-radio-group [(ngModel)]=\"userData.sex\" name=\"sex\">-->\n        <!--<ion-list-header>-->\n          <!--性别-->\n        <!--</ion-list-header>-->\n        <!--<ion-item>-->\n          <!--<ion-label>男</ion-label>-->\n          <!--<ion-radio value=\"1\"></ion-radio>-->\n        <!--</ion-item>-->\n\n        <!--<ion-item>-->\n          <!--<ion-label>女</ion-label>-->\n          <!--<ion-radio value=\"0\"></ion-radio>-->\n        <!--</ion-item>-->\n      <!--</ion-radio-group>-->\n    </ion-list>\n    <ion-button type=\"submit\" color=\"success\" expand=\"block\" [disabled]=\"!data.form.valid || isloading\" *ngIf=\"!data.form.pristine && !isupdate || ischangeHeadend\">提交</ion-button>\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/edmit-user/edmit-user.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/edmit-user/edmit-user.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkbWl0LXVzZXIvZWRtaXQtdXNlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/edmit-user/edmit-user.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/edmit-user/edmit-user.page.ts ***!
  \*****************************************************/
/*! exports provided: EdmitUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdmitUserPage", function() { return EdmitUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");

/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy
 * @LastEditTime: 2019-08-04 02:02:53
 * @Description: file content
 */





var EdmitUserPage = /** @class */ (function () {
    function EdmitUserPage(nav, userfn, native, actionSheetController, http) {
        this.nav = nav;
        this.userfn = userfn;
        this.native = native;
        this.actionSheetController = actionSheetController;
        this.http = http;
    }
    EdmitUserPage.prototype.ngOnInit = function () {
        var _this = this;
        this.userfn.getUserp().then(function (res) {
            console.log(res);
            _this.userid = res.user_id;
            _this.userData = {
                headimg: res.headimg,
                username: res.user_name || res.username,
                birthday: res.birthday,
                // mobile_phone: res.mobile_phone,
                sex: res.sex
            };
        }).catch(function (err) { });
    };
    EdmitUserPage.prototype.goBack = function () {
        this.nav.back();
    };
    EdmitUserPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userdata;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(this.userData);
                userdata = Object.assign({}, this.userData);
                if (!userdata.username) {
                    this.native.presentAlert('请输入用户名!');
                    return [2 /*return*/, false];
                }
                this.isloading = true;
                if (userdata.birthday.includes('T')) {
                    userdata.birthday = userdata.birthday.split('T')[0];
                    this.userData.birthday = userdata.birthday;
                }
                if (this.ischangeHead) {
                    return [2 /*return*/, false];
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
                return [2 /*return*/];
            });
        });
    };
    /**
     * @Author: wjy
     * @description: 更新服务器用户数据
     * @param {type} data 上传的用户数据
     * @return:
     * @Date: 2019-08-04 01:18:32
     */
    EdmitUserPage.prototype.updateData = function (data) {
        var _this = this;
        this.http.postformdataloading(this.http.editprofile, data).subscribe(function (res) {
            console.log(res);
            _this.isupdate = true;
            _this.userfn.upDataobj(data);
            _this.isloading = false;
        }, function (error2) {
            _this.isloading = false;
        });
    };
    EdmitUserPage.prototype.imgupload = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var oReq = new XMLHttpRequest();
            oReq.open('POST', _this.http.domain + _this.http.updateimg);
            oReq.onreadystatechange = function (oEvent) {
                if (oReq.readyState == 4 && oReq.status == 200) {
                    var res = JSON.parse(oReq.response);
                    resolve(res.result['thumb']);
                }
            };
            oReq.onerror = function (err) {
                reject(err);
            };
            oReq.send(file);
        });
    };
    EdmitUserPage.prototype.imgFrom = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            buttons: [{
                                    text: '拍摄照片',
                                    handler: function () {
                                        console.log('Delete clicked');
                                        // this.route.navigate(['/fbpqimg']);
                                        _this.native.getPictureByCamera().then(function (filedata) {
                                            if (!filedata) {
                                                return false;
                                            }
                                            console.log(filedata);
                                            // console.log()
                                            _this.changeHead(filedata);
                                        });
                                    }
                                }, {
                                    text: '从手机相册选择',
                                    handler: function () {
                                        console.log('Share clicked');
                                        _this.native.getPictureByCamera({ sourceType: 0 }).then(function (filedata) {
                                            if (!filedata) {
                                                return false;
                                            }
                                            console.log(filedata);
                                            _this.changeHead(filedata);
                                        });
                                    }
                                }, {
                                    text: '取消',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @Author: wjy
     * @description: 预览头像
     * @param {type} link 图片路径
     * @return:
     * @Date: 2019-08-04 01:13:02
     */
    EdmitUserPage.prototype.changeHead = function (link) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var file, filepath, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.ischangeHead = true;
                        this.userData.headimg = link;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        file = this.native.getImgbase64tofile(this.userData.headimg, this.userData.username + 'userhead' + this.userid);
                        console.log(file);
                        return [4 /*yield*/, this.imgupload(file)];
                    case 2:
                        filepath = _a.sent();
                        console.log(filepath);
                        this.userData.headimg = filepath;
                        this.ischangeHead = false;
                        if (this.isloading) {
                            this.onSubmit();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.native.presentAlert('图片上传失败，请重新选择!');
                        this.ischangeHead = false;
                        if (this.isloading) {
                            this.isloading = false;
                        }
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EdmitUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edmit-user',
            template: __webpack_require__(/*! ./edmit-user.page.html */ "./src/app/pages/edmit-user/edmit-user.page.html"),
            styles: [__webpack_require__(/*! ./edmit-user.page.scss */ "./src/app/pages/edmit-user/edmit-user.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_native_service__WEBPACK_IMPORTED_MODULE_4__["NativeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], EdmitUserPage);
    return EdmitUserPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edmit-user-edmit-user-module.js.map