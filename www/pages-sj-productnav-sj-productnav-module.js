(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sj-productnav-sj-productnav-module"],{

/***/ "./src/app/pages/sj-productnav/sj-productnav.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/sj-productnav/sj-productnav.module.ts ***!
  \*************************************************************/
/*! exports provided: SjProductnavPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjProductnavPageModule", function() { return SjProductnavPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sj_productnav_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sj-productnav.page */ "./src/app/pages/sj-productnav/sj-productnav.page.ts");







var routes = [
    {
        path: '',
        component: _sj_productnav_page__WEBPACK_IMPORTED_MODULE_6__["SjProductnavPage"]
    }
];
var SjProductnavPageModule = /** @class */ (function () {
    function SjProductnavPageModule() {
    }
    SjProductnavPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sj_productnav_page__WEBPACK_IMPORTED_MODULE_6__["SjProductnavPage"]]
        })
    ], SjProductnavPageModule);
    return SjProductnavPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sj-productnav/sj-productnav.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/sj-productnav/sj-productnav.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-title>商品分类</ion-title>\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-icon mode=\"ios\" name=\"arrow-back\" (click)=\"goBack()\" style=\"color: #fff\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"nav-box\" *ngFor=\"let item of navlist\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button size=\"small\" color=\"light\" expand=\"block\" (click)=\"open(item.id)\">{{item.name}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!--<div class=\"title\" padding>{{item.name}}</div>-->\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let c of item.cat_id\">\n          <ion-button size=\"small\" color=\"success\" expand=\"block\" (click)=\"open(item.id)\">{{c.name}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sj-productnav/sj-productnav.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/sj-productnav/sj-productnav.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\n  ion-toolbar ion-title {\n    --color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zai1wcm9kdWN0bmF2L3NqLXByb2R1Y3RuYXYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEZBQWEsRUFBQTtFQURmO0lBR0ksYUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2otcHJvZHVjdG5hdi9zai1wcm9kdWN0bmF2LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpO1xyXG4gIGlvbi10aXRsZSB7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/sj-productnav/sj-productnav.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/sj-productnav/sj-productnav.page.ts ***!
  \***********************************************************/
/*! exports provided: SjProductnavPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjProductnavPage", function() { return SjProductnavPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SjProductnavPage = /** @class */ (function () {
    function SjProductnavPage(nav, http, activeroute, route) {
        this.nav = nav;
        this.http = http;
        this.activeroute = activeroute;
        this.route = route;
    }
    SjProductnavPage.prototype.ngOnInit = function () {
        // this.activeroute.queryParams.subscribe(params => {
        //   console.log(params);
        //   // this.getObj.category = params['id'];
        //   // this.active.id = params['id'];
        // });
        // console.log(this.route.snapshot.paramMap.get('id'))
        this.navlist = [];
        this.suppId = this.activeroute.snapshot.params['id'];
        console.log(this.suppId);
    };
    SjProductnavPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.http.getData(this.http.getsjfl, { suppId: this.suppId }).subscribe(function (res) {
            var _a;
            console.log(res);
            (_a = _this.navlist).push.apply(_a, res['data']);
        }, function (err) {
            console.log(err);
        });
    };
    SjProductnavPage.prototype.goBack = function () {
        this.nav.back();
    };
    SjProductnavPage.prototype.open = function (id) {
        this.route.navigate(['/sjproducts', id || 1], { queryParams: { listid: id ? id : 1, suppId: this.suppId } });
    };
    SjProductnavPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sj-productnav',
            template: __webpack_require__(/*! ./sj-productnav.page.html */ "./src/app/pages/sj-productnav/sj-productnav.page.html"),
            styles: [__webpack_require__(/*! ./sj-productnav.page.scss */ "./src/app/pages/sj-productnav/sj-productnav.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SjProductnavPage);
    return SjProductnavPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sj-productnav-sj-productnav-module.js.map