(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sj-productnav-sj-productnav-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sj-productnav/sj-productnav.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sj-productnav/sj-productnav.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>商品分类</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\">\n  <div class=\"my-content\">\n    <div class=\"left\">\n      <ion-content>\n        <div class=\"left-nav\">\n          <div class=\"item\"\n               *ngFor=\"let item of navlist; let i = index\"\n               [ngClass]=\"{'active': i == active}\" (click)=\"setActive(i, item)\">{{item.name}}</div>\n        </div>\n      </ion-content>\n    </div>\n    <div class=\"right\">\n      <ion-content *ngIf=\"activeList\" padding>\n        <!--<ion-button color=\"success\">{{activeList['name']}}</ion-button>-->\n        <app-seletebtn (mclick)=\"clickotherfn($event)\" [name]=\"'进入' + activeList['name'] + '频道'\" [isshowimg]=\"true\" [id]=\"activeList['id']\" [iscenter]=\"true\" [isactive]=\"true\"></app-seletebtn>\n        <!--<app-seletebtn *ngFor=\"let c of activeList.cat_id\" (mclick)=\"clickotherfn($event)\" [name]=\"c['name']\" [id]=\"c['id']\" [iscenter]=\"true\" [small]=\"true\" [graybgon]=\"true\" [block]=\"false\" ></app-seletebtn>-->\n        <div class=\"button-box\" margin-top>\n          <div class=\"button-item\" *ngFor=\"let c of activeList.cat_id\">\n            <div class=\"title\" (click)=\"open(c['id'])\">{{c['name']}}</div>\n            <div class=\"cbutton-box\">\n              <div class=\"cbutton-item\" (click)=\"open(c['id'])\">\n                {{c['name']}}\n              </div>\n              <div class=\"cbutton-item\" *ngFor=\"let d of c.cat_id\" (click)=\"open(d['id'])\">\n                {{d['name']}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-content>\n    </div>\n  </div>\n  <!--<div class=\"nav-box\" *ngFor=\"let item of navlist\">-->\n    <!--<ion-grid>-->\n      <!--<ion-row>-->\n        <!--<ion-col size=\"6\">-->\n          <!--<ion-button size=\"small\" color=\"light\" expand=\"block\" (click)=\"open(item.id)\">{{item.name}}</ion-button>-->\n        <!--</ion-col>-->\n      <!--</ion-row>-->\n    <!--</ion-grid>-->\n    <!--&lt;!&ndash;<div class=\"title\" padding>{{item.name}}</div>&ndash;&gt;-->\n    <!--<ion-grid>-->\n      <!--<ion-row>-->\n        <!--<ion-col size=\"6\" *ngFor=\"let c of item.cat_id\">-->\n          <!--<ion-button size=\"small\" color=\"success\" expand=\"block\" (click)=\"open(c.id)\">{{c.name}}</ion-button>-->\n        <!--</ion-col>-->\n      <!--</ion-row>-->\n    <!--</ion-grid>-->\n  <!--</div>-->\n\n</ion-content>\n");

/***/ }),

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

/***/ "./src/app/pages/sj-productnav/sj-productnav.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/sj-productnav/sj-productnav.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-content {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.my-content .left {\n  width: 96px;\n  background-color: var(--ion-color-white);\n}\n.my-content .left .left-nav .item {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid var(--ion-gray-background-color);\n}\n.my-content .left .left-nav .item.active {\n  background: var(--ion-gray-background-color);\n  color: var(--ion-color-success);\n}\n.my-content .right {\n  flex: 1;\n  background: var(--ion-gray-background-color);\n}\n.my-content .right ion-content {\n  --background: var(--ion-gray-background-color);\n}\n.button-box .button-item {\n  margin-bottom: 15px;\n}\n.button-box .button-item .title {\n  font-size: var(--ion-title);\n  margin-bottom: 10px;\n  color: var(--ion-color-dark);\n}\n.button-box .cbutton-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.button-box .cbutton-box .cbutton-item {\n  margin-bottom: 10px;\n  margin-right: 10px;\n  background-color: var(--ion-color-white);\n  border: 1px solid var(--ion-color-light);\n  font-size: var(--ion-text);\n  padding: 7px 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zai1wcm9kdWN0bmF2L3NqLXByb2R1Y3RuYXYucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zai1wcm9kdWN0bmF2L3NqLXByb2R1Y3RuYXYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNORjtBRE9FO0VBQ0UsV0FBQTtFQUNBLHdDQUFBO0FDTEo7QURPTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5REFBQTtBQ0xSO0FETVE7RUFDRSw0Q0FBQTtFQUNBLCtCQUFBO0FDSlY7QURTRTtFQUNFLE9BQUE7RUFDQSw0Q0FBQTtBQ1BKO0FEUUk7RUFDRSw4Q0FBQTtBQ05OO0FEV0U7RUFDRSxtQkFBQTtBQ1JKO0FEU0k7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNQTjtBRFVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNSSjtBRFNJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zai1wcm9kdWN0bmF2L3NqLXByb2R1Y3RuYXYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pb24tdG9vbGJhciB7XHJcbi8vICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpO1xyXG4vLyAgaW9uLXRpdGxlIHtcclxuLy8gICAgLS1jb2xvcjogI2ZmZjtcclxuLy8gIH1cclxuLy99XHJcblxyXG4ubXktY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgIC5sZWZ0LW5hdiB7XHJcbiAgICAgIC5pdGVtIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWdyYXktYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWdyYXktYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5idXR0b24tYm94IHtcclxuICAuYnV0dG9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNidXR0b24tYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAuY2J1dHRvbi1pdGVtIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgcGFkZGluZzogN3B4IDlweDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIubXktY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5teS1jb250ZW50IC5sZWZ0IHtcbiAgd2lkdGg6IDk2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG4ubXktY29udGVudCAubGVmdCAubGVmdC1uYXYgLml0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xufVxuLm15LWNvbnRlbnQgLmxlZnQgLmxlZnQtbmF2IC5pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuLm15LWNvbnRlbnQgLnJpZ2h0IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWdyYXktYmFja2dyb3VuZC1jb2xvcik7XG59XG4ubXktY29udGVudCAucmlnaHQgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4uYnV0dG9uLWJveCAuYnV0dG9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmJ1dHRvbi1ib3ggLmJ1dHRvbi1pdGVtIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbi5idXR0b24tYm94IC5jYnV0dG9uLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5idXR0b24tYm94IC5jYnV0dG9uLWJveCAuY2J1dHRvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgcGFkZGluZzogN3B4IDlweDtcbn0iXX0= */");

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
    SjProductnavPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    SjProductnavPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sj-productnav',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sj-productnav.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sj-productnav/sj-productnav.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sj-productnav.page.scss */ "./src/app/pages/sj-productnav/sj-productnav.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SjProductnavPage);
    return SjProductnavPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sj-productnav-sj-productnav-module.js.map