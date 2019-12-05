(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notice-notice-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notice/notice.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notice/notice.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n * @Author: wjy-mac\n * @Date: 2019-11-14 20:54:57\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-14 21:43:55\n * @Description: file content\n -->\n<ion-header mode=\"ios\">\n    <ion-toolbar mode=\"ios\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"goBack()\">\n          <ion-icon name=\"arrow-back\" mode=\"ios\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>通知公告</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"data\">\n      <div class=\"title\">{{data.title}}</div>\n      <div class=\"time\">{{data.last_send | time}}</div>\n      <div class=\"mycontent\" [innerHTML]=\"assembleHTML(data.email_content)\">\n      </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/notice/notice.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/notice/notice.module.ts ***!
  \***********************************************/
/*! exports provided: NoticePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticePageModule", function() { return NoticePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notice.page */ "./src/app/pages/notice/notice.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-11-14 20:54:57
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-14 21:40:43
 * @Description: file content
 */







var routes = [
    {
        path: '',
        component: _notice_page__WEBPACK_IMPORTED_MODULE_6__["NoticePage"]
    }
];
var NoticePageModule = /** @class */ (function () {
    function NoticePageModule() {
    }
    NoticePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notice_page__WEBPACK_IMPORTED_MODULE_6__["NoticePage"]]
        })
    ], NoticePageModule);
    return NoticePageModule;
}());



/***/ }),

/***/ "./src/app/pages/notice/notice.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/notice/notice.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: var(--ion-title);\n  color: var(--ion-color-dark);\n  text-align: center;\n}\n\n.time {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n  text-align: center;\n}\n\n.mycontent {\n  margin-top: 20px;\n  font-size: var(--ion-text);\n  color: var(--ion-color-dark);\n  line-height: 20px;\n  text-indent: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9ub3RpY2Uvbm90aWNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbm90aWNlL25vdGljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90aWNlL25vdGljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aW1lIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm15Y29udGVudCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcbn0iLCIudGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpbWUge1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5teWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtaW5kZW50OiAyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/notice/notice.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/notice/notice.page.ts ***!
  \*********************************************/
/*! exports provided: NoticePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticePage", function() { return NoticePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_news_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/news-list.service */ "./src/app/services/news-list.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-11-14 20:54:57
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-14 21:43:46
 * @Description: 通知公告详情
 */





var NoticePage = /** @class */ (function () {
    function NoticePage(nav, activeroute, newsList, sanitizer) {
        this.nav = nav;
        this.activeroute = activeroute;
        this.newsList = newsList;
        this.sanitizer = sanitizer;
    }
    NoticePage.prototype.ngOnInit = function () {
    };
    NoticePage.prototype.ionViewWillEnter = function () {
        var params = this.activeroute.snapshot.queryParams;
        this.noticeId = params['id'];
        this.data = this.newsList.getTzdata(this.noticeId);
    };
    NoticePage.prototype.goBack = function () {
        this.nav.back();
    };
    NoticePage.prototype.assembleHTML = function (strHTML) {
        return this.sanitizer.bypassSecurityTrustHtml(strHTML);
    };
    NoticePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_news_list_service__WEBPACK_IMPORTED_MODULE_1__["NewsListService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
    ]; };
    NoticePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-notice',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notice.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notice/notice.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notice.page.scss */ "./src/app/pages/notice/notice.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_news_list_service__WEBPACK_IMPORTED_MODULE_1__["NewsListService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], NoticePage);
    return NoticePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-notice-notice-module.js.map