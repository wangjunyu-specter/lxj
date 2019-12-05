(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contactlist-contactlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contactlist/contactlist.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contactlist/contactlist.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"pageType == 1\">选择出行人</ion-title>\n    <ion-title *ngIf=\"pageType == 2\">选择收货人</ion-title>\n    <ion-title *ngIf=\"pageType == 3\">查看详情</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"pageType !== 3\">\n      <ion-button (click)=\"goBack()\" [disabled]=\"activeList.length != pernum\">\n        确定\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-contactlists (setItem)=\"clickitem($event)\" [pageType]=\"pageType\"></app-contactlists>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/contactlist/contactlist.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/contactlist/contactlist.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactlistPageModule", function() { return ContactlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contactlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactlist.page */ "./src/app/pages/contactlist/contactlist.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _contactlist_page__WEBPACK_IMPORTED_MODULE_6__["ContactlistPage"]
    }
];
var ContactlistPageModule = /** @class */ (function () {
    function ContactlistPageModule() {
    }
    ContactlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contactlist_page__WEBPACK_IMPORTED_MODULE_6__["ContactlistPage"]]
        })
    ], ContactlistPageModule);
    return ContactlistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/contactlist/contactlist.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/contactlist/contactlist.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3RsaXN0L2NvbnRhY3RsaXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/contactlist/contactlist.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/contactlist/contactlist.page.ts ***!
  \*******************************************************/
/*! exports provided: ContactlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactlistPage", function() { return ContactlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_contactlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contactlist.service */ "./src/app/services/contactlist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





// import { NativeService } from '../../services/native.service';
var ContactlistPage = /** @class */ (function () {
    function ContactlistPage(nav, contactlist, activeroute, route
    // private alertController: AlertController
    ) {
        this.nav = nav;
        this.contactlist = contactlist;
        this.activeroute = activeroute;
        this.route = route;
        this.pageType = 3;
        this.pernum = 1;
    }
    ContactlistPage.prototype.ngOnInit = function () {
        var params = this.activeroute.snapshot.queryParams;
        this.pageType = Number(params['type']);
        console.log(this.pageType);
        this.pernum = Number(params['num']);
        if (this.pageType == 2) {
            this.pernum = 1;
        }
    };
    ContactlistPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // this.list = this.contactlist.getContactlist()
        this.contactlist.getActive().then(function (res) {
            _this.activeList = res;
        });
    };
    ContactlistPage.prototype.goBack = function () {
        this.nav.back();
    };
    ContactlistPage.prototype.clickitem = function (item) {
        console.log(item);
        if (this.pageType !== 3) {
            this.contactlist.setActive(item, this.pernum);
        }
        else {
            return false;
        }
    };
    ContactlistPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_contactlist_service__WEBPACK_IMPORTED_MODULE_3__["ContactlistService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ContactlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactlist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contactlist/contactlist.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contactlist.page.scss */ "./src/app/pages/contactlist/contactlist.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_contactlist_service__WEBPACK_IMPORTED_MODULE_3__["ContactlistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
            // private alertController: AlertController
        ])
    ], ContactlistPage);
    return ContactlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contactlist-contactlist-module.js.map