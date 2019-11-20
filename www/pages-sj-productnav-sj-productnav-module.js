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
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








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
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
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

module.exports = "\n<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>商品分类</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\">\n  <div class=\"my-content\">\n    <div class=\"left\">\n      <ion-content>\n        <div class=\"left-nav\">\n          <div class=\"item\"\n               *ngFor=\"let item of navlist; let i = index\"\n               [ngClass]=\"{'active': i == active}\" (click)=\"setActive(i, item)\">{{item.name}}</div>\n        </div>\n      </ion-content>\n    </div>\n    <div class=\"right\">\n      <ion-content *ngIf=\"activeList\" padding>\n        <!--<ion-button color=\"success\">{{activeList['name']}}</ion-button>-->\n        <app-seletebtn (mclick)=\"clickotherfn($event)\" [name]=\"'进入' + activeList['name'] + '频道'\" [isshowimg]=\"true\" [id]=\"activeList['id']\" [iscenter]=\"true\" [isactive]=\"true\"></app-seletebtn>\n        <!--<app-seletebtn *ngFor=\"let c of activeList.cat_id\" (mclick)=\"clickotherfn($event)\" [name]=\"c['name']\" [id]=\"c['id']\" [iscenter]=\"true\" [small]=\"true\" [graybgon]=\"true\" [block]=\"false\" ></app-seletebtn>-->\n        <div class=\"button-box\" margin-top>\n          <div class=\"button-item\" *ngFor=\"let c of activeList.cat_id\">\n            <div class=\"title\" (click)=\"open(c['id'])\">{{c['name']}}</div>\n            <div class=\"cbutton-box\">\n              <div class=\"cbutton-item\" (click)=\"open(c['id'])\">\n                {{c['name']}}\n              </div>\n              <div class=\"cbutton-item\" *ngFor=\"let d of c.cat_id\" (click)=\"open(d['id'])\">\n                {{d['name']}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-content>\n    </div>\n  </div>\n  <!--<div class=\"nav-box\" *ngFor=\"let item of navlist\">-->\n    <!--<ion-grid>-->\n      <!--<ion-row>-->\n        <!--<ion-col size=\"6\">-->\n          <!--<ion-button size=\"small\" color=\"light\" expand=\"block\" (click)=\"open(item.id)\">{{item.name}}</ion-button>-->\n        <!--</ion-col>-->\n      <!--</ion-row>-->\n    <!--</ion-grid>-->\n    <!--&lt;!&ndash;<div class=\"title\" padding>{{item.name}}</div>&ndash;&gt;-->\n    <!--<ion-grid>-->\n      <!--<ion-row>-->\n        <!--<ion-col size=\"6\" *ngFor=\"let c of item.cat_id\">-->\n          <!--<ion-button size=\"small\" color=\"success\" expand=\"block\" (click)=\"open(c.id)\">{{c.name}}</ion-button>-->\n        <!--</ion-col>-->\n      <!--</ion-row>-->\n    <!--</ion-grid>-->\n  <!--</div>-->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/sj-productnav/sj-productnav.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/sj-productnav/sj-productnav.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-content {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: stretch; }\n  .my-content .left {\n    width: 96px;\n    background-color: var(--ion-color-white); }\n  .my-content .left .left-nav .item {\n      width: 100%;\n      height: 50px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-bottom: 1px solid var(--ion-gray-background-color); }\n  .my-content .left .left-nav .item.active {\n        background: var(--ion-gray-background-color);\n        color: var(--ion-color-success); }\n  .my-content .right {\n    flex: 1;\n    background: var(--ion-gray-background-color); }\n  .my-content .right ion-content {\n      --background: var(--ion-gray-background-color); }\n  .button-box .button-item {\n  margin-bottom: 15px; }\n  .button-box .button-item .title {\n    font-size: var(--ion-title);\n    margin-bottom: 10px;\n    color: var(--ion-color-dark); }\n  .button-box .cbutton-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap; }\n  .button-box .cbutton-box .cbutton-item {\n    margin-bottom: 10px;\n    margin-right: 10px;\n    background-color: var(--ion-color-white);\n    border: 1px solid var(--ion-color-light);\n    font-size: var(--ion-text);\n    padding: 7px 9px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zai1wcm9kdWN0bmF2L3NqLXByb2R1Y3RuYXYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isb0JBQW9CLEVBQUE7RUFQdEI7SUFTSSxXQUFXO0lBQ1gsd0NBQXdDLEVBQUE7RUFWNUM7TUFhUSxXQUFXO01BQ1gsWUFBWTtNQUNaLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLHlEQUF5RCxFQUFBO0VBbEJqRTtRQW9CVSw0Q0FBNEM7UUFDNUMsK0JBQStCLEVBQUE7RUFyQnpDO0lBMkJJLE9BQU87SUFDUCw0Q0FBNEMsRUFBQTtFQTVCaEQ7TUE4Qk0sOENBQWEsRUFBQTtFQUluQjtFQUVJLG1CQUFtQixFQUFBO0VBRnZCO0lBSU0sMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiw0QkFBNEIsRUFBQTtFQU5sQztFQVVJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7RUFkbkI7SUFnQk0sbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDLDBCQUEwQjtJQUMxQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NqLXByb2R1Y3RuYXYvc2otcHJvZHVjdG5hdi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2lvbi10b29sYmFyIHtcclxuLy8gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksIHJlZCksIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCBibHVlKSk7XHJcbi8vICBpb24tdGl0bGUge1xyXG4vLyAgICAtLWNvbG9yOiAjZmZmO1xyXG4vLyAgfVxyXG4vL31cclxuXHJcbi5teS1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgLmxlZnQge1xyXG4gICAgd2lkdGg6IDk2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgLmxlZnQtbmF2IHtcclxuICAgICAgLml0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmJ1dHRvbi1ib3gge1xyXG4gIC5idXR0b24taXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2J1dHRvbi1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5jYnV0dG9uLWl0ZW0ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBwYWRkaW5nOiA3cHggOXB4O1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

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
        this.isget = false;
        this.active = 0;
        console.log(this.suppId);
    };
    SjProductnavPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (!this.isget) {
            this.http.getData(this.http.getsjfl, { suppId: this.suppId }).subscribe(function (res) {
                var _a;
                console.log(res);
                (_a = _this.navlist).push.apply(_a, res['data']);
                _this.setActive(0, _this.navlist[0]);
            }, function (err) {
                console.log(err);
            });
            this.isget = true;
        }
    };
    SjProductnavPage.prototype.goBack = function () {
        this.nav.back();
    };
    SjProductnavPage.prototype.clickotherfn = function (item) {
        this.open(item.id);
    };
    SjProductnavPage.prototype.open = function (id) {
        this.route.navigate(['/sjproducts', id || 1], { queryParams: { listid: id ? id : 1, suppId: this.suppId } });
    };
    SjProductnavPage.prototype.setActive = function (index, item) {
        this.active = index;
        this.activeList = item;
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