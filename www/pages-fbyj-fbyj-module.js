(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fbyj-fbyj-module"],{

/***/ "./src/app/pages/fbyj/fbyj.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/fbyj/fbyj.module.ts ***!
  \*******************************************/
/*! exports provided: FbyjPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbyjPageModule", function() { return FbyjPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/bundles/ng2-ckeditor.umd.min.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fbyj_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fbyj.page */ "./src/app/pages/fbyj/fbyj.page.ts");








var routes = [
    {
        path: '',
        component: _fbyj_page__WEBPACK_IMPORTED_MODULE_7__["FbyjPage"]
    }
];
var FbyjPageModule = /** @class */ (function () {
    function FbyjPageModule() {
    }
    FbyjPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fbyj_page__WEBPACK_IMPORTED_MODULE_7__["FbyjPage"]]
        })
    ], FbyjPageModule);
    return FbyjPageModule;
}());



/***/ }),

/***/ "./src/app/pages/fbyj/fbyj.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/fbyj/fbyj.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>发布{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <!--<ion-back-button></ion-back-button>-->\n      <ion-button (click)=\"save()\" [disabled]=\"!head || !formdata.title || !content || issub || issave\">\n        <ion-icon name=\"paper-plane\"></ion-icon>保存\n      </ion-button>\n      <ion-button (click)=\"sub(1)\" [disabled]=\"!head || !formdata.title || !content || issub || issave\">\n        <ion-icon name=\"paper-plane\"></ion-icon>发表\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!iscontent\">\n    <div class=\"top-head\">\n      <img [src]=\"head\" alt=\"\" *ngIf=\"head\" (click)=\"addfm()\">\n      <div *ngIf=\"!head\" class=\"ts-box\" (click)=\"addfm()\">\n        添加封面\n      </div>\n    </div>\n    <ion-list>\n      <ion-item>\n        <ion-input [(ngModel)]=\"formdata.title\" clearInput placeholder=\"添加标题\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input [(ngModel)]=\"formdata.destination\" clearInput placeholder=\"目的地\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-datetime no-padding no-margin [(ngModel)]=\"formdata.outtime\" placeholder=\"出发日期\" display-format=\"YYYY.MM.DD\" [doneText]=\"'确定'\" [cancelText]=\"'取消'\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-input [(ngModel)]=\"formdata.days\" type=\"number\" clearInput placeholder=\"出行天数\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input [(ngModel)]=\"formdata.money\" clearInput type=\"number\" placeholder=\"人均花费\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input [(ngModel)]=\"formdata.tag\" clearInput placeholder=\"添加标签\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-textarea [(ngModel)]=\"formdata.des\" rows=\"3\" placeholder=\"一句话描述...\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf=\"iscontent\">\n    <ckeditor [(ngModel)]=\"content\" [config]=\"config\" debounce=\"500\">  </ckeditor>\n  </div>\n  <div class=\"keyboard-height\" [ngStyle]=\"{height: keyboardH + 'px'}\"></div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"setContent()\" [disabled]=\"issub\">\n        {{iscontent ? '标题' : '正文'}}\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"iscontent\">\n      <!--<ion-back-button></ion-back-button>-->\n      <ion-button (click)=\"addimg()\" [disabled]=\"issub\">\n        <ion-icon name=\"images\"></ion-icon>插入图片\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/fbyj/fbyj.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/fbyj/fbyj.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-head .ts-box {\n  min-height: 200px;\n  background-color: var(--ion-gray-background-color);\n  line-height: 200px;\n  text-align: center;\n  font-size: var(--ion-text);\n  color: var(--ion-color-medium); }\n\nion-backdrop {\n  background: blue;\n  --background: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9mYnlqL2ZieWoucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksaUJBQWlCO0VBQ2pCLGtEQUFrRDtFQUNsRCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZieWovZmJ5ai5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWhlYWQge1xuICAudHMtYm94IHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBsaW5lLWhlaWdodDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgfVxufVxuaW9uLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgLS1iYWNrZ3JvdW5kOiByZWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/fbyj/fbyj.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/fbyj/fbyj.page.ts ***!
  \*****************************************/
/*! exports provided: FbyjPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbyjPage", function() { return FbyjPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/upload/upload.component */ "./src/app/components/upload/upload.component.ts");









var FbyjPage = /** @class */ (function () {
    function FbyjPage(nav, plt, keyboard, http, user, actionSheetController, activeroute, native, popoverController, route) {
        this.nav = nav;
        this.plt = plt;
        this.keyboard = keyboard;
        this.http = http;
        this.user = user;
        this.actionSheetController = actionSheetController;
        this.activeroute = activeroute;
        this.native = native;
        this.popoverController = popoverController;
        this.route = route;
    }
    FbyjPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isloadhead = false;
        this.contentimgnum = 0;
        this.contentimgarr = [];
        // this.subloading();
        this.formdata = {
            title: '',
            des: '',
            destination: '',
            outtime: '',
            days: '',
            money: '',
            tag: ''
        };
        this.iscontent = false;
        this.keyboardH = 0;
        this.content = '';
        this.config = {
            language: 'zh-cn',
            toolbar: 'Full'
        };
        this.config.toolbar_Full = [
            // {
            //   name: 'document', items: [
            //     'Source', '-', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates'
            //   ]
            // },
            {
                name: 'clipboard', items: [
                    'Cut', 'Copy', 'PasteText', 'PasteFromWord', '-'
                ]
            },
            {
                name: 'editing', items: [
                    'Find', '-', 'SelectAll', '-', 'SpellChecker'
                ]
            },
            // {
            //   name: 'forms', items: [
            //     'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'
            //   ]
            // },
            {
                name: 'basicstyles', items: [
                    'Bold', 'Italic', 'Underline', 'Strike',
                ]
            },
            {
                name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Blockquote',
                    '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-'
                ]
            },
            // todo 在这里设定需要的插件 ...
            // ,'Flash','Smiley','Video' Video是用得国产插件
            {
                name: 'insert', items: [
                    'Image', 'Html5video', 'Table', 'HorizontalRule', 'Emojione',
                ]
            },
            '/',
            {
                name: 'styles', items: [
                    'Format', 'FontSize'
                ]
            },
            {
                name: 'colors', items: [
                    'TextColor', 'BGColor'
                ]
            }
        ];
        var params = this.activeroute.snapshot.queryParams;
        this.type = params['type'] ? Number(params['type']) : 1;
        switch (this.type) {
            case 1:
                this.title = '游记';
                break;
            case 2:
                this.title = '攻略';
                break;
            case 3:
                this.title = '招募';
                break;
            default:
                this.title = '游记';
        }
        try {
            window.addEventListener('keyboardWillShow', function (event) {
                _this.keyboardH = event.keyboardHeight;
            });
            window.addEventListener('keyboardWillHide', function (event) {
                _this.keyboardH = 0;
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    FbyjPage.prototype.setContent = function () {
        this.iscontent = !this.iscontent;
    };
    FbyjPage.prototype.goBack = function () {
        this.nav.back();
    };
    FbyjPage.prototype.addimg = function () {
        this.presentActionSheet(2);
    };
    FbyjPage.prototype.addfm = function () {
        this.presentActionSheet(1);
        // this.head = 'http://img5.imgtn.bdimg.com/it/u=3300305952,1328708913&fm=26&gp=0.jpg';
    };
    FbyjPage.prototype.presentActionSheet = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: '请选择来源',
                            buttons: [{
                                    text: '相机',
                                    role: 'destructive',
                                    handler: function () {
                                        console.log('Delete clicked');
                                        // this.native.captureImage().then(res => {
                                        //   this.addimgfn(res['fullPath']);
                                        // });
                                        _this.native.getPictureByCamera().then(function (res) {
                                            _this.getimgend(type, [res]);
                                        });
                                    }
                                }, {
                                    text: '相册',
                                    handler: function () {
                                        console.log('Share clicked');
                                        var max = type === 1 ? 1 : 9;
                                        _this.native.getPictures(max).then(function (res) {
                                            _this.getimgend(type, res);
                                        }, function (err) {
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
    FbyjPage.prototype.getimgend = function (type, base64) {
        if (type === 1) {
            this.head = null;
            this.head = base64[0];
            this.updateHead(this.head);
        }
        else {
            // http://192.144.168.163/loading.gif
            var num = this.contentimgnum;
            var nowarr = [];
            var len = base64.length;
            for (var i = 0; i < len; i++) {
                var nownum = num + i;
                this.contentimgarr[nownum] = true;
                nowarr.push(nownum);
                this.content += "<img class=\"wjy" + nownum + "\" style=\"width: 100%;\" src=\"" + this.http.zdomain + "loading.gif\" alt=\"\"><p></p>";
            }
            console.log(this.content);
            this.contentimgnum += len;
            this.basezfile(base64, nowarr);
        }
    };
    FbyjPage.prototype.basezfile = function (base64arr, nowarr) {
        var _this = this;
        base64arr.map(function (base64, index) {
            var file = _this.native.getImgbase64tofile(base64, 'yjorgl' + index);
            file.append('nothumb', '1');
            var num = nowarr[index];
            _this.imgupload(file).then(function (res) {
                _this.contentimgarr[num] = false;
                base64 = null;
                var str = "<img\\s+(alt=\"\"\\s)*class=\"wjy" + num + "\"(\\sstyle=\"\\s*(width:\\s*)*\\s{0,1}\\d*%;\")*\\s*(src=\"\\S*\")\\s*(\\sstyle=\"\\s*(width:\\s*)*\\s{0,1}\\d*%;*\"\\s*)*\\s*(alt=\"\")*\\s*(/>|>)";
                var regex = new RegExp(str);
                var nstr = "<img style=\"max-width: 100%\" src=\"" + (_this.http.zdomain + res['src']) + "\" alt=\"\">";
                _this.content = _this.content.replace(regex, nstr);
                _this.sub();
            }).catch(function (err2) {
                _this.contentimgarr[num] = false;
                _this.suberr();
            });
        });
        base64arr = null;
    };
    FbyjPage.prototype.updateHead = function (base64) {
        var _this = this;
        this.isloadhead = true;
        var file = this.native.getImgbase64tofile(base64, 'yjorglhead');
        base64 = null;
        this.imgupload(file).then(function (res) {
            _this.isloadhead = false;
            _this.head = _this.http.zdomain + res['src'];
            _this.sub();
        }).catch(function (err2) {
            _this.isloadhead = false;
            _this.suberr();
        });
    };
    FbyjPage.prototype.imgupload = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var oReq = new XMLHttpRequest();
            oReq.open('POST', _this.http.domain + _this.http.updateimg);
            oReq.onreadystatechange = function (oEvent) {
                if (oReq.readyState == 4 && oReq.status == 200) {
                    var res = JSON.parse(oReq.response);
                    resolve(res.result);
                }
            };
            oReq.onerror = function (err) {
                reject(err);
            };
            oReq.send(file);
        });
    };
    FbyjPage.prototype.save = function () {
        var _this = this;
        this.issave = true;
        var obj = {
            img: JSON.stringify([this.head]),
            type: this.type + 1,
            address: this.address,
            lnglat: this.lnglat,
            content: this.content
        };
        obj = Object.assign(obj, this.formdata);
        console.log(obj);
        obj['outtime'] = obj['outtime'] ? Date.parse((new Date(obj['outtime'])).toString()) / 1000 : '';
        this.native.setStorage('yjcontent', obj).then(function (res) {
            _this.issave = false;
            _this.native.presentAlert('保存成功,如需使用请到个人中心查看');
        }).catch(function (err2) {
            _this.issave = false;
            _this.native.presentAlert('保存失败，请重试~');
        });
    };
    FbyjPage.prototype.sub = function (type) {
        if (type) {
            this.issub = true;
            this.subloading();
        }
        var canupdate = this.iscansub();
        if (!canupdate) {
            return false;
        }
        this.subupdate();
    };
    FbyjPage.prototype.iscansub = function () {
        if (!this.issub) {
            return false;
        }
        if (this.isloadhead) {
            return false;
        }
        for (var i = 0, j = this.contentimgarr.length; i < j; i++) {
            if (this.contentimgarr[i]) {
                return false;
            }
        }
        return true;
    };
    FbyjPage.prototype.subupdate = function () {
        var _this = this;
        var obj = {
            img: JSON.stringify([this.head]),
            type: this.type + 1,
            address: this.address,
            lnglat: this.lnglat,
            content: this.content
        };
        obj = Object.assign(obj, this.formdata);
        console.log(obj);
        obj['outtime'] = obj['outtime'] ? Date.parse((new Date(obj['outtime'])).toString()) / 1000 : '';
        this.http.postformdata(this.http.fbpqitem, obj).subscribe(function (res) {
            console.log(res);
            _this.user.addjf(res.result.num);
            // this.issub = false;
            _this.suberr();
            _this.route.navigate(['/fbyjmore'], { queryParams: { type: _this.type + 1, num: res.result.num } });
        }, function (error1) {
            _this.suberr();
        });
    };
    FbyjPage.prototype.suberr = function () {
        this.issub = false;
        this.popoverController.dismiss();
    };
    FbyjPage.prototype.subloading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_8__["UploadComponent"],
                            translucent: false,
                            cssClass: 'payboxcontent',
                            backdropDismiss: false
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FbyjPage.prototype.ionViewWillLeave = function () {
        this.content = '';
        this.head = '';
        this.contentimgarr = [];
        // this.blur();
    };
    FbyjPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fbyj',
            template: __webpack_require__(/*! ./fbyj.page.html */ "./src/app/pages/fbyj/fbyj.page.html"),
            styles: [__webpack_require__(/*! ./fbyj.page.scss */ "./src/app/pages/fbyj/fbyj.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_native_service__WEBPACK_IMPORTED_MODULE_7__["NativeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FbyjPage);
    return FbyjPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-fbyj-fbyj-module.js.map