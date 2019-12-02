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
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/fesm5/ng2-ckeditor.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fbyj_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fbyj.page */ "./src/app/pages/fbyj/fbyj.page.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-06-19 00:16:16
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-19 23:21:13
 * @Description: file content
 */








var routes = [
    {
        path: '',
        component: _fbyj_page__WEBPACK_IMPORTED_MODULE_8__["FbyjPage"]
    }
];
var FbyjPageModule = /** @class */ (function () {
    function FbyjPageModule() {
    }
    FbyjPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_fbyj_page__WEBPACK_IMPORTED_MODULE_8__["FbyjPage"]]
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

module.exports = "<!--\n * @Author: wjy-mac\n * @Date: 2019-07-31 23:40:56\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-29 23:15:43\n * @Description: file content\n -->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>发布{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <!--<ion-back-button></ion-back-button>-->\n      <ion-button *ngIf=\"!id\" (click)=\"savefn(1)\" [disabled]=\"!formdata.title || !content || issub || issave\">\n        <ion-icon name=\"paper-plane\"></ion-icon>保存\n      </ion-button>\n      <ion-button (click)=\"sub(1)\" [disabled]=\"!formdata.title || !content || issub || issave\">\n        <ion-icon name=\"paper-plane\"></ion-icon>发表\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #contentbox>\n  <div *ngIf=\"!iscontent\">\n    <div class=\"top-head\">\n      <img [src]=\"head | imgsrc: http.zdomain\" alt=\"\" *ngIf=\"head\" (click)=\"addfm()\">\n      <div *ngIf=\"!head\" class=\"ts-box\" (click)=\"addfm()\">\n        添加封面\n      </div>\n    </div>\n    <ion-list>\n      <ion-item>\n        <ion-input (ionFocus)=\"focusinput($event)\" (ionBlur)=\"blurinput($event)\" [(ngModel)]=\"formdata.title\" clearInput placeholder=\"添加标题\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input (ionFocus)=\"focusinput($event)\" (ionBlur)=\"blurinput($event)\" [(ngModel)]=\"formdata.destination\" clearInput placeholder=\"目的地\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-datetime class=\"ion-no-padding ion-no-margin\" [(ngModel)]=\"formdata.outtime\" placeholder=\"出发日期\" display-format=\"YYYY.MM.DD\" [doneText]=\"'确定'\" [cancelText]=\"'取消'\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-input (ionFocus)=\"focusinput($event)\" (ionBlur)=\"blurinput($event)\" [(ngModel)]=\"formdata.days\" type=\"number\" clearInput placeholder=\"出行天数\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input (ionFocus)=\"focusinput($event)\" (ionBlur)=\"blurinput($event)\" [(ngModel)]=\"formdata.money\" clearInput type=\"number\" placeholder=\"人均花费\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input (ionFocus)=\"focusinput($event)\" (ionBlur)=\"blurinput($event)\" [(ngModel)]=\"formdata.tag\" clearInput placeholder=\"添加标签\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-textarea (ionFocus)=\"focusinput($event)\" (ionBlur)=\"blurinput($event)\" [(ngModel)]=\"formdata.des\" rows=\"3\" placeholder=\"一句话描述...\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf=\"iscontent\">\n    <ckeditor [(ngModel)]=\"content\" [config]=\"config\" debounce=\"500\">  </ckeditor>\n  </div>\n  <div class=\"keyboard-height\" [ngStyle]=\"{height: keyboardH + 'px'}\"></div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button mode=\"ios\" color=\"secondary\" (click)=\"setContent()\" [disabled]=\"issub\">\n        {{iscontent ? '标题' : '正文'}}\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"iscontent\">\n      <!--<ion-back-button></ion-back-button>-->\n      <ion-button (click)=\"addimg()\" color=\"secondary\" [disabled]=\"issub\">\n        <ion-icon name=\"images\"></ion-icon>本地图片\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n"

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
/* harmony import */ var src_app_services_yjlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/yjlist.service */ "./src/app/services/yjlist.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/upload/upload.component */ "./src/app/components/upload/upload.component.ts");
/* harmony import */ var src_app_services_editmyrelease_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/editmyrelease.service */ "./src/app/services/editmyrelease.service.ts");











var FbyjPage = /** @class */ (function () {
    function FbyjPage(nav, plt, keyboard, http, user, actionSheetController, activeroute, native, popoverController, route, myeditdatafn, yjlistfn) {
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
        this.myeditdatafn = myeditdatafn;
        this.yjlistfn = yjlistfn;
    }
    FbyjPage.prototype.ngOnInit = function () {
        this.isloadhead = false;
        this.contentimgnum = -1;
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
                    'Find', '-', 'SpellChecker'
                ]
            },
            // {
            //   name: 'forms', items: [
            //     'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'
            //   ]
            // },
            {
                name: 'basicstyles', items: [
                    'Bold', 'Italic', 'Underline',
                ]
            },
            {
                name: 'paragraph', items: [
                    '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-'
                ]
            },
            {
                name: 'insert', items: [
                    'Image', 'Table', 'HorizontalRule', 'Emojione',
                ]
            },
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
    };
    FbyjPage.prototype.ionViewWillEnter = function () {
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
                this.title = '约游';
                break;
            default:
                this.title = '游记';
        }
        if (params['iscg']) {
            this.iscg = true;
            this.getCg();
        }
        else if (params['isedit']) {
            this.setGeteditdata();
        }
    };
    FbyjPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        try {
            this.newHandle = function (event) {
                _this.keyboardH = event.keyboardHeight;
                _this.keyboardWillShow();
            };
            this.newHandle2 = function () {
                _this.keyboardH = 0;
                if (_this.bfscrolltop < 0) {
                    _this.scrollToBottom(_this.bfscrolltop);
                }
                _this.bfscrolltop = 0;
            };
            window.addEventListener('keyboardWillShow', this.newHandle);
            window.addEventListener('keyboardWillHide', this.newHandle2);
        }
        catch (e) {
        }
    };
    FbyjPage.prototype.ionViewDidLeave = function () {
        window.removeEventListener('keyboardWillShow', this.newHandle);
        window.removeEventListener('keyboardWillHide', this.newHandle2);
    };
    FbyjPage.prototype.keyboardWillShow = function () {
        var height = this.target.getBoundingClientRect().bottom;
        var wheight = this.getClientHeight();
        var y = wheight - this.keyboardH - height;
        if (y < 0) {
            this.bfscrolltop = y;
            this.scrollToBottom(-this.bfscrolltop);
        }
    };
    FbyjPage.prototype.keyboardWillHide = function (event) {
    };
    FbyjPage.prototype.getClientHeight = function () {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        else {
            clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        return clientHeight;
    };
    /**
     * @Author: wjy-mac
     * @description: 处理保存的草稿数据
     * @Date: 2019-11-20 00:20:35
     * @param {type}
     * @return:
     */
    FbyjPage.prototype.getCg = function () {
        var _this = this;
        this.native.getStorage('yjcontent').then(function (res) {
            _this.head = res.head;
            _this.type = res.type - 1;
            _this.address = res.address;
            _this.lnglat = res.lnglat;
            _this.content = res.content;
            _this.formdata = res;
            if (_this.formdata.outtime) {
                console.log(_this.formdata.outtime);
                var date = new Date(_this.formdata.outtime * 1000);
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                _this.formdata.outtime = year + '.' + month + '.' + day;
                console.log(_this.formdata.outtime);
            }
        }).catch(function (error) {
        });
    };
    /**
     * @Author: wjy-mac
     * @description: 处理编辑数据
     * @Date: 2019-11-20 00:20:27
     * @param {type}
     * @return:
     */
    FbyjPage.prototype.setGeteditdata = function () {
        var obj = this.myeditdatafn.getData();
        if (obj.type != this.type) {
            this.myeditdatafn.clear();
            return false;
        }
        var data = obj.data;
        this.id = data.id;
        this.head = data.imgarr[0];
        this.headobj = {
            src: data.imgarr && data.imgarr.length > 0 ? data.imgarr[0] : '',
            thumb: data.thumb && data.thumb.length > 0 ? data.thumb[0] : '',
        };
        this.address = data.address;
        this.lnglat = data.lnglat;
        this.content = data.content;
        this.formdata = {
            title: data.title,
            destination: data.destination,
            outtime: data.outtime,
            days: data.days,
            money: data.money,
            tag: data.tag,
            des: data.des
        };
        if (this.formdata.outtime) {
            console.log(this.formdata.outtime);
            var date = new Date(this.formdata.outtime * 1000);
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            this.formdata.outtime = year + '.' + month + '.' + day;
            console.log(this.formdata.outtime);
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
        // this.getimgend(2, ['123']);
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
                                        _this.native.getPictures(1).then(function (res) {
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
            var nowarr = [];
            var len = base64.length;
            for (var i = 0; i < len; i++) {
                this.contentimgnum++;
                this.contentimgarr[this.contentimgnum] = true;
                nowarr.push(this.contentimgnum);
                this.content += "<img class=\"wjy" + this.contentimgnum + "\" style=\"width: 100%;\" src=\"" + this.http.zdomain + "loading.gif\" alt=\"\"><p></p>";
            }
            console.log(this.content);
            this.contentimgnum += len;
            this.basezfile(base64, nowarr);
        }
    };
    /**
     * @Author: wjy-mac
     * @description: 上传内容区域图片
     * @Date: 2019-11-19 11:31:25
     * @param {type} base64arr base64数组
     * @param {type} nowarr number数组 base64对应位置
     * @return:
     */
    FbyjPage.prototype.basezfile = function (base64arr, nowarr) {
        var _this = this;
        base64arr.map(function (base64, index) {
            var num = nowarr[index];
            var file = _this.native.getImgbase64tofile(base64, 'yjorgl' + num);
            file.append('nothumb', '1');
            _this.imgupload(file).then(function (res) {
                // alert(JSON.stringify(res));
                base64 = null;
                _this.setUpcontentimgend(num, res['src']);
                _this.sub();
                _this.savefn();
            }).catch(function (err2) {
                _this.setUpcontentimgend(num);
                _this.suberr();
            });
        });
        base64arr = null;
    };
    /**
     * @Author: wjy-mac
     * @description: 图片上传完成
     * @Date: 2019-11-19 12:03:29
     * @param {type} num 表示第几张图片
     * @param {type} src 服务器返回的图片链接，如果没有则表示上传失败
     * @return:
     */
    FbyjPage.prototype.setUpcontentimgend = function (num, src) {
        var nstr;
        if (src) {
            nstr = "<img style=\"max-width: 100%\" src=\"" + (this.http.zdomain + src) + "\" alt=\"\">";
        }
        else {
            this.native.presentAlert('图片上传失败,已自动删除,请重试!');
            nstr = '';
        }
        this.contentimgarr[num] = false;
        var str = "<img\\s+(alt=\"\"\\s)*class=\"wjy" + num + "\"(\\sstyle=\"\\s*(width:\\s*)*\\s{0,1}\\d*%;\")*\\s*(src=\"\\S*\")\\s*(\\sstyle=\"\\s*(width:\\s*)*\\s{0,1}\\d*%;*\"\\s*)*\\s*(alt=\"\")*\\s*(/>|>)";
        var regex = new RegExp(str);
        if (this.content.search(regex) > -1) {
            this.content = this.content.replace(regex, nstr);
        }
    };
    /**
     * @Author: wjy-mac
     * @description: 上传封面
     * @Date: 2019-11-19 12:01:55
     * @param {type}
     * @return:
     */
    FbyjPage.prototype.updateHead = function (base64) {
        var _this = this;
        this.isloadhead = true;
        var file = this.native.getImgbase64tofile(base64, 'yjorglhead');
        base64 = null;
        this.imgupload(file).then(function (res) {
            _this.isloadhead = false;
            _this.headobj = res;
            _this.head = _this.http.zdomain + res['src'];
            _this.sub();
            _this.savefn();
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
    /**
     * 获取之前已保存数据
     * 暂定只能保存一个
     */
    // save() {
    //   this.issave = true;
    //   this.native.getStorage('yjcontent').then(arr => {
    //     this.setsave(arr);
    //   }).catch(error => {
    //     this.setsave([]);
    //   })
    // }
    /**
     * 添加新保存数据
     * @param {Object[]} arr
     */
    // setsave(arr: object[]) { // 保存多个的时候使用，暂定只能保存一个
    FbyjPage.prototype.setsave = function () {
        var _this = this;
        var obj = {
            head: this.head,
            type: this.type + 1,
            address: this.address,
            lnglat: this.lnglat,
            content: this.content
        };
        obj = Object.assign(obj, this.formdata);
        obj['outtime'] = obj['outtime'] ? Date.parse((new Date(obj['outtime'])).toString()) / 1000 : '';
        // arr.push(obj); 保存多个的时候使用，暂定只能保存一个
        this.native.setStorage('yjcontent', obj).then(function (res) {
            _this.issave = false;
            _this.native.presentAlert(_this.iscg ? '保存成功' : '保存成功,如需使用请到个人中心我的草稿里查看');
        }).catch(function (err2) {
            _this.issave = false;
            _this.native.presentAlert('保存失败，请重试~');
        });
    };
    FbyjPage.prototype.sub = function (type) {
        var _this = this;
        if (type) {
            this.issub = true;
        }
        var canupdate = this.iscansub(1);
        if (!canupdate) {
            return false;
        }
        this.getpopover(1).then(function (res) {
            _this.subupdate();
        });
    };
    /**
     * 判断是否可以立即保存
     * @returns {boolean}
     */
    FbyjPage.prototype.savefn = function (issave) {
        if (issave) {
            this.issave = true;
        }
        if (!this.iscansub(2)) {
            return false;
        }
        this.setsave();
    };
    /**
     * type 1 表示发表 2 表示保存
     * @param {number} type
     * @returns {boolean}
     */
    FbyjPage.prototype.iscansub = function (type) {
        if (!this.issub && type === 1) {
            return false;
        }
        else if (type === 2 && !this.issave) {
            return false;
        }
        if (this.isloadhead) {
            this.getpopover(1);
            return false;
        }
        for (var i = 0, j = this.contentimgarr.length; i < j; i++) {
            if (this.contentimgarr[i]) {
                var str = "<img\\s+(alt=\"\"\\s)*class=\"wjy" + i + "\"(\\sstyle=\"\\s*(width:\\s*)*\\s{0,1}\\d*%;\")*\\s*(src=\"\\S*\")\\s*(\\sstyle=\"\\s*(width:\\s*)*\\s{0,1}\\d*%;*\"\\s*)*\\s*(alt=\"\")*\\s*(/>|>)";
                var regex = new RegExp(str);
                if (this.content.search(regex) === -1) {
                    this.contentimgarr[i] = false;
                    continue;
                }
                this.getpopover(1);
                return false;
            }
        }
        return true;
    };
    /**
     * @Author: wjy-mac
     * @description: 判断是否有弹窗并根据type跳转
     * @Date: 2019-11-20 16:16:41
     * @param {type} type 1 表示显示 2隐藏
     * @return:
     */
    FbyjPage.prototype.getpopover = function (type) {
        if (type === void 0) { type = 1; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, bool, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 12]);
                        return [4 /*yield*/, this.popoverController.getTop()];
                    case 1:
                        res = _a.sent();
                        if (!res) return [3 /*break*/, 5];
                        if (!(type === 1)) return [3 /*break*/, 2];
                        return [2 /*return*/, true];
                    case 2: return [4 /*yield*/, this.popoverController.dismiss()];
                    case 3:
                        bool = _a.sent();
                        if (bool) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        if (!(type === 1)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.subloading()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 7: return [2 /*return*/, true];
                    case 8:
                        err_1 = _a.sent();
                        if (!(type === 1)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.subloading()];
                    case 9:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 10: return [2 /*return*/, false];
                    case 11: return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    FbyjPage.prototype.subupdate = function () {
        var _this = this;
        var obj = {
            img: JSON.stringify([this.headobj]),
            type: this.type + 1,
            address: this.address,
            lnglat: this.lnglat,
            content: this.content
        };
        obj = Object.assign(obj, this.formdata);
        console.log(obj);
        obj['outtime'] = obj['outtime'] ? Date.parse((new Date(obj['outtime'])).toString()) / 1000 : '';
        if (this.id) {
            obj['id'] = this.id;
        }
        this.http.postformdata(this.http.fbpqitem, obj).subscribe(function (res) {
            console.log(res);
            if (!_this.id) {
                _this.user.addjf(res.result.num);
                var obj2 = _this.setEdit(obj, res.result.createtime, res.result.id);
                _this.yjlistfn.addItem(_this.type);
                _this.suberr(res.result);
            }
            else {
                var obj2 = _this.setEdit(obj, res.result, _this.id);
                _this.myeditdatafn.changeData(obj2);
                _this.suberr(1);
            }
        }, function (error1) {
            _this.suberr();
        });
    };
    /**
     * @Author: wjy-mac
     * @description: 添加完成或失败
     * @Date: 2019-11-19 22:58:47
     * @param {type}
     * @return:
     */
    FbyjPage.prototype.suberr = function (num) {
        var _this = this;
        if (this.iscg) {
            this.native.removeStorage('yjcontent');
        }
        this.getpopover(2).then(function (res) {
            if (res) {
                _this.issub = false;
                if (num) {
                    if (num === 1) {
                        _this.goBack();
                    }
                    else {
                        _this.route.navigate(['/fbyjmore'], { queryParams: { type: _this.type + 1, num: num.num, sendnum: num.sendnum } });
                    }
                }
            }
            else {
                setTimeout(function () { _this.suberr(num); }, 300);
            }
        }).catch(function () {
            setTimeout(function () { _this.suberr(num); }, 300);
        });
    };
    /**
     * @Author: wjy-mac
     * @description: 更新成功后
     * @Date: 2019-11-19 22:59:04
     * @param {type}
     * @return:
     */
    FbyjPage.prototype.setEdit = function (data, time, id) {
        var obj = {
            id: id,
            createtime: time,
            imgarr: this.headobj ? [this.headobj.src] : [],
            thumb: this.headobj ? [this.headobj.thumb] : [],
            address: this.address,
            lnglat: this.lnglat,
            content: this.content,
            title: data.title,
            destination: data.destination,
            outtime: data.outtime,
            days: data.days,
            money: data.money,
            tag: data.tag,
            des: data.des
        };
        return obj;
    };
    FbyjPage.prototype.subloading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__["UploadComponent"],
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
        this.keyboardH = 0;
        this.target = null;
        this.bfscrolltop = 0;
        // this.blur();
    };
    /**
     * @Author: wjy-mac
     * @description: 当指定输入框触发焦点，保留当前触发input
     * @Date: 2019-11-29 20:12:20
     * @param {type}
     * @return:
     */
    FbyjPage.prototype.focusinput = function (e) {
        this.target = e.target;
        // document.body.scrollTop = document.body.scrollHeight;
    };
    /**
     * @Author: wjy-mac
     * @description: 当指定输入框失去焦点，清楚保留的input
     * @Date: 2019-11-29 20:12:56
     * @param {type}
     * @return:
     */
    FbyjPage.prototype.blurinput = function (e) {
        this.target = null;
        // document.body.scrollTop = this.bfscrolltop;
    };
    /**
     * @Author: wjy-mac
     * @description: 滚动到底部 使用延时是为了防抖
     * @Date: 2019-11-12 15:35:06
     * @param {type}
     * @return:
     */
    FbyjPage.prototype.scrollToBottom = function (y) {
        // this.target.scrollIntoView(true);
        this.contentbox.scrollByPoint(0, y, 100);
        // setTimeout(() => {
        //   this.contentbox.scrollToBottom(1);
        // }, 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], FbyjPage.prototype, "contentbox", void 0);
    FbyjPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-fbyj',
            template: __webpack_require__(/*! ./fbyj.page.html */ "./src/app/pages/fbyj/fbyj.page.html"),
            styles: [__webpack_require__(/*! ./fbyj.page.scss */ "./src/app/pages/fbyj/fbyj.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_native_service__WEBPACK_IMPORTED_MODULE_8__["NativeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_editmyrelease_service__WEBPACK_IMPORTED_MODULE_10__["EditmyreleaseService"], src_app_services_yjlist_service__WEBPACK_IMPORTED_MODULE_1__["YjlistService"]])
    ], FbyjPage);
    return FbyjPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-fbyj-fbyj-module.js.map