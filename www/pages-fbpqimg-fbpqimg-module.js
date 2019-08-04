(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fbpqimg-fbpqimg-module"],{

/***/ "./src/app/pages/fbpqimg/fbpqimg.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/fbpqimg/fbpqimg.module.ts ***!
  \*************************************************/
/*! exports provided: FbpqimgPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbpqimgPageModule", function() { return FbpqimgPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fbpqimg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fbpqimg.page */ "./src/app/pages/fbpqimg/fbpqimg.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _fbpqimg_page__WEBPACK_IMPORTED_MODULE_6__["FbpqimgPage"]
    }
];
var FbpqimgPageModule = /** @class */ (function () {
    function FbpqimgPageModule() {
    }
    FbpqimgPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fbpqimg_page__WEBPACK_IMPORTED_MODULE_6__["FbpqimgPage"]]
        })
    ], FbpqimgPageModule);
    return FbpqimgPageModule;
}());



/***/ }),

/***/ "./src/app/pages/fbpqimg/fbpqimg.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/fbpqimg/fbpqimg.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"ios\">\n      <!--<ion-back-button></ion-back-button>-->\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>发布</ion-title>\n    <ion-buttons slot=\"end\">\n      <!--<ion-back-button></ion-back-button>-->\n      <ion-button (click)=\"sub()\" [disabled]=\"!content && imgs.length === 0\">\n        <ion-icon name=\"paper-plane\"></ion-icon>发表\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-textarea rows=\"7\" [maxlength]=\"300\" [(ngModel)]=\"content\" placeholder=\"此刻你在哪里,分享下你的旅行心情吧~\"></ion-textarea>\n  <app-pqimgbox *ngIf=\"type != '2'\" [imglist]=\"imgs\" [showend]=\"isshowend\" (clickItem)=\"remove($event)\" (addimgitem)=\"addfm()\"></app-pqimgbox>\n  <!--<img [src]=\"videoslt\" alt=\"\">-->\n  <!--<video width=\"320\" height=\"240\" controls>-->\n    <!--<source [src]=\"videofile\" type=\"video/mp4\">-->\n    <!--<source [src]=\"videofile\" type=\"video/ogg\">-->\n    <!--您的浏览器不支持 video 标签。-->\n  <!--</video>-->\n  <!--<video width=\"320\" height=\"240\" controls>-->\n    <!--<source [src]=\"videofile1\" type=\"video/mp4\">-->\n    <!--<source [src]=\"videofile1\" type=\"video/ogg\">-->\n    <!--您的浏览器不支持 video 标签。-->\n  <!--</video>-->\n  <div class=\"bf-box\" *ngIf=\"type == '2'\" (click)=\"playvideo()\">\n    <img src=\"../../../assets/icon/play.svg\" alt=\"\">\n  </div>\n  <ion-list margin-top>\n    <ion-item button>\n      <ion-icon name=\"pin\" slot=\"start\"></ion-icon>{{addressObj.address}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/fbpqimg/fbpqimg.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/fbpqimg/fbpqimg.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-box {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px; }\n\n.box {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  float: left;\n  font-size: 12px;\n  background-color: var(--ion-gray-background-color);\n  border-radius: 5px;\n  overflow: hidden; }\n\n.box img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n\n.box:before {\n  /* Other ratios */\n  content: \"\";\n  display: block;\n  padding-top: 100%; }\n\n.bf-box {\n  width: 100px;\n  height: 100px;\n  border: 1px solid var(--ion-color-light);\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.bf-box img {\n    width: 40%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9mYnBxaW1nL2ZicHFpbWcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTLEVBQUE7O0FBRVg7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFFWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtEQUFrRDtFQUdsRCxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBWGxCO0lBYUksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxpQkFBQTtFQUVBLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFOekI7SUFRSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYnBxaW1nL2ZicHFpbWcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1ib3gge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDEwcHg7XG59XG4uYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICAvL21hcmdpbjogNSUgNSUgMCAwO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuLmJveDpiZWZvcmUge1xuICAvKiBPdGhlciByYXRpb3MgKi9cblxuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDEwMCU7XG59XG4uYmYtYm94IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/fbpqimg/fbpqimg.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/fbpqimg/fbpqimg.page.ts ***!
  \***********************************************/
/*! exports provided: FbpqimgPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbpqimgPage", function() { return FbpqimgPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_selete_media_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/selete-media.service */ "./src/app/services/selete-media.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/upload/upload.component */ "./src/app/components/upload/upload.component.ts");

/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy
 * @LastEditTime: 2019-08-04 02:07:00
 * @Description: file content
 */






// import { VideoPlayer } from '@ionic-native/video-player/ngx';

// import { MediaFile } from '@ionic-native/media-capture/ngx';



var FbpqimgPage = /** @class */ (function () {
    function FbpqimgPage(nav, http, user, seletemedia, native, actionSheetController, file, activeroute, transfer, popoverController, route) {
        this.nav = nav;
        this.http = http;
        this.user = user;
        this.seletemedia = seletemedia;
        this.native = native;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.activeroute = activeroute;
        this.transfer = transfer;
        this.popoverController = popoverController;
        this.route = route;
    }
    FbpqimgPage.prototype.ngOnInit = function () {
        // this.addimg = 'www/assets/add.png';
        this.imgs = this.seletemedia.getList();
        this.isshowend = true;
        this.address = '12323';
        var params = this.activeroute.snapshot.queryParams;
        this.type = (params['type']).toString();
    };
    FbpqimgPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.addressObj = this.user.getLocation();
        if (this.type == '2') {
            // this.video = this.imgs[0];
            this.videofile = this.seletemedia.getData();
            this.videofile.getFormatData(function (data) {
                _this.videofile1 = data;
            });
            // this.setSlt();
        }
        this.userdata = this.user.getUserp();
    };
    // setSlt() {
    //   const videodata = this.seletemedia.getData()[0];
    //   this.videofile.getFormatData(data => {
    //     console.log(data);
    //   });
    //
    // }
    FbpqimgPage.prototype.goBack = function () {
        this.nav.back();
    };
    FbpqimgPage.prototype.ionViewDidLeave = function () {
        this.seletemedia.clear();
    };
    FbpqimgPage.prototype.addfm = function () {
        if (this.imgs.length === 9) {
            return false;
        }
        this.presentActionSheet();
    };
    FbpqimgPage.prototype.remove = function (index) {
        // this.imgs.splice(index, 1);
        this.seletemedia.removeOne(index);
        if (this.imgs.length === 8) {
            this.isshowend = true;
        }
    };
    FbpqimgPage.prototype.presentActionSheet = function () {
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
                                            _this.addimgfn(res);
                                        });
                                    }
                                }, {
                                    text: '相册',
                                    handler: function () {
                                        console.log('Share clicked');
                                        _this.native.getPictures(9 - _this.imgs.length).then(function (res) {
                                            res.map(function (img) {
                                                _this.addimgfn(img);
                                            });
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
    FbpqimgPage.prototype.addimgfn = function (res) {
        this.seletemedia.addImg(res);
        if (this.imgs.length === 9) {
            this.isshowend = false;
        }
    };
    FbpqimgPage.prototype.contentsend = function (patharr) {
        var _this = this;
        var obj = {
            img: JSON.stringify(patharr),
            type: 1,
            address: this.addressObj.address,
            lnglat: this.addressObj.lng + '|' + this.addressObj.lat,
            content: this.content
        };
        this.http.postformdataloading(this.http.fbpqitem, obj).subscribe(function (res) {
            console.log(res);
            // this.isloading = false;
            _this.user.addjf(res.result.num);
            _this.uploadEnd();
            _this.route.navigate(['/fbyjmore'], { queryParams: { type: 1, num: res.result.num } });
        }, function (err2) {
            _this.uploadEnd();
        });
    };
    FbpqimgPage.prototype.sub = function () {
        this.isloading = true;
        this.subloading();
        if (this.imgs.length === 0) {
            this.contentsend();
            return false;
        }
        if (this.type === '2') {
            this.getVidefile();
        }
        else {
            this.basezfile();
        }
    };
    FbpqimgPage.prototype.getVidefile = function () {
        var _this = this;
        // const oMyForm = new FormData();    // 创建一个空的FormData对象
        // oMyForm.append('file', this.videofile, this.videofile.name);
        // // oMyForm.append('abc', '123');
        // this.imgupload(oMyForm).then(filepath => {
        //   this.contentsend([filepath as string]);
        // });
        var fileTransfer = this.transfer.create();
        var width = this.videofile1.width * 0.5;
        var height = this.videofile1.height * 0.5;
        var obj = {
            fileName: this.videofile.name,
            fileKey: 'file',
            chunkedMode: false,
            mimeType: this.videofile.type,
            params: {
                width: width,
                height: height
            }
        };
        fileTransfer.upload(this.videofile.fullPath, this.http.domain + this.http.updateimg, obj).then(function (res) {
            var path = JSON.parse(res.response)['result'];
            _this.contentsend([path]);
        }).catch(function (err2) {
            console.log('错了我');
            console.error(err2);
            _this.uploadEnd();
        });
    };
    FbpqimgPage.prototype.basezfile = function () {
        var _this = this;
        var proarr = [];
        this.imgs.map(function (base64, index) {
            var file = _this.native.getImgbase64tofile(base64, 'pq' + index);
            proarr.push(_this.imgupload(file));
        });
        Promise.all(proarr).then(function (res) {
            _this.contentsend(res);
        }).catch(function (err) {
            _this.native.presentAlert('上传失败，请查看网络是否正常');
            _this.uploadEnd();
        });
    };
    FbpqimgPage.prototype.imgupload = function (file) {
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
    FbpqimgPage.prototype.playvideo = function () {
        // : todo 此处未实现ios和浏览器播放
        this.native.nativeVideoplay(this.videofile.fullPath);
    };
    FbpqimgPage.prototype.uploadEnd = function () {
        this.isloading = false;
        this.popoverController.dismiss();
    };
    FbpqimgPage.prototype.subloading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_10__["UploadComponent"],
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
    FbpqimgPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fbpqimg',
            template: __webpack_require__(/*! ./fbpqimg.page.html */ "./src/app/pages/fbpqimg/fbpqimg.page.html"),
            styles: [__webpack_require__(/*! ./fbpqimg.page.scss */ "./src/app/pages/fbpqimg/fbpqimg.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_selete_media_service__WEBPACK_IMPORTED_MODULE_6__["SeleteMediaService"],
            _services_native_service__WEBPACK_IMPORTED_MODULE_9__["NativeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FbpqimgPage);
    return FbpqimgPage;
}());

function getFilepath(oldpath) {
    if (!oldpath) {
        return {};
    }
    var index = oldpath.lastIndexOf('/');
    var path = oldpath.substr(0, index);
    var name = oldpath.substr(index + 1);
    return {
        path: path,
        name: name
    };
}


/***/ })

}]);
//# sourceMappingURL=pages-fbpqimg-fbpqimg-module.js.map