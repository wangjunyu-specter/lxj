(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-all-zt-all-zt-module"],{

/***/ "./src/app/pages/all-zt/all-zt.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/all-zt/all-zt.module.ts ***!
  \***********************************************/
/*! exports provided: AllZtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllZtPageModule", function() { return AllZtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _all_zt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-zt.page */ "./src/app/pages/all-zt/all-zt.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-09-28 18:39:29
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-10 15:27:23
 * @Description: file content
 */








var routes = [
    {
        path: '',
        component: _all_zt_page__WEBPACK_IMPORTED_MODULE_6__["AllZtPage"]
    }
];
var AllZtPageModule = /** @class */ (function () {
    function AllZtPageModule() {
    }
    AllZtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_all_zt_page__WEBPACK_IMPORTED_MODULE_6__["AllZtPage"]]
        })
    ], AllZtPageModule);
    return AllZtPageModule;
}());



/***/ }),

/***/ "./src/app/pages/all-zt/all-zt.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/all-zt/all-zt.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: wjy-mac\n * @Date: 2019-09-26 16:52:52\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-10-10 15:35:46\n * @Description: 专题列表\n -->\n<ion-header [translucent]=\"true\">\n    <ion-toolbar mode=\"ios\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goBack()\">\n          <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>{{type == 0 ? '户外专题' : '装备专题'}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"top\">\n    <img src=\"./assets/listbg.svg\" alt=\"\">\n    <div class=\"banner\" padding *ngIf=\"banner\" (click)=\"goPagefn(banner.url, banner.type)\">\n      <img [src]=\"banner.image | imgsrc: http.domain\">\n    </div>\n  </div>\n  <div class=\"my-list\" padding>\n    <div class=\"item\" *ngFor=\"let item of list\" (click)=\"goPagefn(item.topic_id)\">\n      <img [src]=\"item.topic_img | imgsrc: http.zdomain\" alt=\"\">\n      <div class=\"title\">{{item.title}}</div>\n      <div class=\"footer\">\n        <ion-text color=\"tertiary\">{{item.start_time | time: '/'}}-{{item.end_time | time: '/'}}</ion-text>\n        <ion-text color=\"success\">查看详情</ion-text>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/all-zt/all-zt.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/all-zt/all-zt.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n  margin-top: var(--ion-platform-margin-top);\n  overflow: hidden; }\n  .top .banner {\n    position: relative;\n    margin-top: -106px;\n    width: 100%; }\n  .top .banner img {\n      width: 100%; }\n  .my-list .item {\n  margin-bottom: 20px; }\n  .my-list .item img {\n    width: 100%; }\n  .my-list .item .title {\n    font-size: var(--ion-title);\n    color: var(--ion-color-dark);\n    font-weight: 600;\n    line-height: 25px; }\n  .my-list .item .footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n  .my-list .item .footer ion-text {\n      font-size: var(--ion-sm-text); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9hbGwtenQvYWxsLXp0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDBDQUEwQztFQUMxQyxnQkFBZ0IsRUFBQTtFQUhsQjtJQUtJLGtCQUFrQjtJQUVsQixrQkFBa0I7SUFDbEIsV0FBVyxFQUFBO0VBUmY7TUFVTSxXQUFXLEVBQUE7RUFJakI7RUFFSSxtQkFBbUIsRUFBQTtFQUZ2QjtJQUlNLFdBQVcsRUFBQTtFQUpqQjtJQU9NLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBVnZCO0lBYU0sYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTtFQWZwQztNQWlCUSw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsbC16dC9hbGwtenQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcCB7XG4gIC8vbWFyZ2luLXRvcDogLTQ0cHg7XG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1wbGF0Zm9ybS1tYXJnaW4tdG9wKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLmJhbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vdG9wOiAtNjhweDtcbiAgICBtYXJnaW4tdG9wOiAtMTA2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuLm15LWxpc3Qge1xuICAuaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgICAuZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgaW9uLXRleHQge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/all-zt/all-zt.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/all-zt/all-zt.page.ts ***!
  \*********************************************/
/*! exports provided: AllZtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllZtPage", function() { return AllZtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-09-26 16:52:52
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-08 21:28:25
 * @Description: file content
 */





var AllZtPage = /** @class */ (function () {
    function AllZtPage(nav, activeroute, topage, http) {
        this.nav = nav;
        this.activeroute = activeroute;
        this.topage = topage;
        this.http = http;
    }
    AllZtPage.prototype.ngOnInit = function () {
        var params = this.activeroute.snapshot.queryParams;
        this.type = params['type'] || 0;
        this.getList(this.type);
        this.getBanner(this.type);
    };
    AllZtPage.prototype.getList = function (type) {
        var _this = this;
        this.http.getDataloading(this.http.getZtlist, { type: type }).subscribe(function (res) {
            console.log(res);
            _this.list = res['data'];
        }, function (err2) { });
    };
    AllZtPage.prototype.getBanner = function (type) {
        var _this = this;
        this.http.getDataloading(this.http.getZtlistbanner, { type: type }).subscribe(function (res) {
            console.log(res);
            _this.banner = res['data'] && res['data'].length > 0 ? res['data'][0] : null;
        }, function (err2) { });
    };
    AllZtPage.prototype.goBack = function () {
        this.nav.back();
    };
    AllZtPage.prototype.goPagefn = function (id, type) {
        if (type === void 0) { type = 3; }
        this.topage.toPage(type, id);
    };
    AllZtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-zt',
            template: __webpack_require__(/*! ./all-zt.page.html */ "./src/app/pages/all-zt/all-zt.page.html"),
            styles: [__webpack_require__(/*! ./all-zt.page.scss */ "./src/app/pages/all-zt/all-zt.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_topage_service__WEBPACK_IMPORTED_MODULE_4__["TopageService"], _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], AllZtPage);
    return AllZtPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-all-zt-all-zt-module.js.map