(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-selete-content-selete-content-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/selete-content/selete-content.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/selete-content/selete-content.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <!--<ion-back-button></ion-back-button>-->\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>选择套餐</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <app-pagetitle *ngIf=\"data && data.timetc\" [myname]=\"'出发日期'\" [nobold]=\"true\" [type]=\"false\" [smpadding]=\"true\"></app-pagetitle>\r\n  <app-datecontent *ngIf=\"data && data.timetc\" [datelist]=\"data.timetc\" [noMonth]=\"data.month\" (setDate)=\"setData($event)\"></app-datecontent>\r\n  <div class=\"border\"></div>\r\n  <app-pagetitle *ngIf=\"data && data.jtjy\" [myname]=\"'几天几晚'\" [nobold]=\"true\" [type]=\"false\" [smpadding]=\"true\"></app-pagetitle>\r\n  <div class=\"tcbox\" *ngIf=\"data && data.jtjy\">\r\n    <app-seletebtn *ngFor=\"let item of data.jtjy.values\" (mclick)=\"clickJtjy($event)\" [name]=\"item.label\" [id]=\"item.id\" [graybg]=\"item.disabled\" [isactive]=\"item.selected_key_ecshop68\"></app-seletebtn>\r\n  </div>\r\n  <div class=\"border\"></div>\r\n  <app-pagetitle *ngIf=\"data && data.zstc\" [myname]=\"'套餐'\" [nobold]=\"true\" [type]=\"false\" [smpadding]=\"true\"></app-pagetitle>\r\n  <div class=\"tctype\" *ngIf=\"data && data.zstc\">\r\n    <app-seletebtn *ngFor=\"let item of data.zstc.values\" (mclick)=\"seletefn($event)\" [graybg]=\"item.disabled\" [name]=\"item.label\" [id]=\"item.id\" [isactive]=\"item.selected_key_ecshop68\"></app-seletebtn>\r\n  </div>\r\n  <div class=\"border\" *ngIf=\"data && data.attrList.length > 0\"></div>\r\n  <app-pagetitle *ngIf=\"data && data.attrList.length > 0\" [myname]=\"data.attrList[0].name\" [nobold]=\"true\" [type]=\"false\" [smpadding]=\"true\"></app-pagetitle>\r\n  <div *ngIf=\"data && data.attrList.length > 0\">\r\n    <app-seletebtn *ngFor=\"let item of data.attrList[0].values\" (mclick)=\"clickotherfn($event)\" [name]=\"item.label\" [id]=\"item.id\" [isactive]=\"item.selected_key_ecshop68\"></app-seletebtn>\r\n  </div>\r\n  <div class=\"border\" style=\"margin-top: 10px\"></div>\r\n  <app-pagetitle [myname]=\"'购买数量'\" [nobold]=\"true\" [type]=\"false\" [smpadding]=\"true\"></app-pagetitle>\r\n  <app-setnum *ngIf=\"data\" [price]=\"data.activestartprice\" [num]=\"data.persenNum\" [maxnum]=\"data.topData.buymax\" (setNum)=\"setNum($event)\"></app-setnum>\r\n</ion-content>\r\n\r\n<ion-footer mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <app-footer *ngIf=\"data\" [type]=\"1\" [allprice]=\"data.activestartprice\" [price]=\"0\" [disabled]=\"data.disabled\" (sub)=\"submit($event)\"></app-footer>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/selete-content/selete-content.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/selete-content/selete-content.module.ts ***!
  \***************************************************************/
/*! exports provided: SeleteContentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleteContentPageModule", function() { return SeleteContentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _selete_content_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selete-content.page */ "./src/app/pages/selete-content/selete-content.page.ts");








var routes = [
    {
        path: '',
        component: _selete_content_page__WEBPACK_IMPORTED_MODULE_7__["SeleteContentPage"]
    }
];
var SeleteContentPageModule = /** @class */ (function () {
    function SeleteContentPageModule() {
    }
    SeleteContentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_selete_content_page__WEBPACK_IMPORTED_MODULE_7__["SeleteContentPage"]]
        })
    ], SeleteContentPageModule);
    return SeleteContentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/selete-content/selete-content.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/selete-content/selete-content.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.tcbox app-seletebtn {\n  margin-right: 7px;\n  margin-bottom: 7px;\n  display: inline-block;\n}\n.tctype app-seletebtn {\n  display: block;\n  margin-bottom: 7px;\n}\n.border {\n  position: relative;\n}\n.border::before {\n  content: \"\";\n  pointer-events: none;\n  /* 防止点击触发 */\n  box-sizing: border-box;\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  left: 0;\n  top: 0;\n  border-radius: 8px;\n  border: 1px solid var(--ion-color-light);\n  transform: scale(0.5);\n  transform-origin: 0 0;\n}\n#layui-laydate1 {\n  background: red;\n  --width: 100%;\n}\nion-toolbar {\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsZXRlLWNvbnRlbnQvc2VsZXRlLWNvbnRlbnQucGFnZS5zY3NzIiwiL1VzZXJzL3dqeS9EZXNrdG9wL2x4ai9zcmMvYXBwL3BhZ2VzL3NlbGV0ZS1jb250ZW50L3NlbGV0ZS1jb250ZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDZDtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBRENKO0FDR0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QURBSjtBQ0dBO0VBQ0Usa0JBQUE7QURBRjtBQ0NFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQXNCLFdBQUE7RUFDdEIsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7RUFFQSxxQkFBQTtBREVKO0FDQ0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBREVGO0FDQ0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBREVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VsZXRlLWNvbnRlbnQvc2VsZXRlLWNvbnRlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnRjYm94IGFwcC1zZWxldGVidG4ge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50Y3R5cGUgYXBwLXNlbGV0ZWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbi5ib3JkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm9yZGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyog6Ziy5q2i54K55Ye76Kem5Y+RICovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbn1cblxuI2xheXVpLWxheWRhdGUxIHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICAtLXdpZHRoOiAxMDAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbn0iLCIudGNib3gge1xyXG4gIGFwcC1zZWxldGVidG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcbi50Y3R5cGUge1xyXG4gIGFwcC1zZWxldGVidG4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgfVxyXG59XHJcbi5ib3JkZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICY6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyog6Ziy5q2i54K55Ye76Kem5Y+RICovXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgfVxyXG59XHJcbiNsYXl1aS1sYXlkYXRlMSB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG4gIC0td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0tcGFkZGluZy10b3A6IDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/selete-content/selete-content.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/selete-content/selete-content.page.ts ***!
  \*************************************************************/
/*! exports provided: SeleteContentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleteContentPage", function() { return SeleteContentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_getproduct_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getproduct.service */ "./src/app/services/getproduct.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");






// declare let laydate;
var SeleteContentPage = /** @class */ (function () {
    function SeleteContentPage(nav, route, activeroute, getProduct, http) {
        this.nav = nav;
        this.route = route;
        this.activeroute = activeroute;
        this.getProduct = getProduct;
        this.http = http;
    }
    SeleteContentPage.prototype.ngOnInit = function () {
        this.selete = {};
    };
    SeleteContentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.activeroute.queryParams.subscribe(function (params) {
            _this.pid = params['id'];
            _this.getProduct.getProduct(_this.pid).then(function (res) {
                _this.data = res;
                console.log(_this.data);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    SeleteContentPage.prototype.submit = function ($event) {
        console.log(this.getProduct.getActiveorder());
        this.route.navigate(['/confirmationorder'], { queryParams: { id: this.pid } });
        // this.http.postformdata(this.http.addgwc, {goods: JSON.stringify(obj)}).subscribe(res => {
        //
        //   this.route.navigate(['/confirmationorder'], {queryParams: {id: this.pid, cid: res['rec_id']}});
        // }, error2 => {});
    };
    SeleteContentPage.prototype.seletefn = function ($event) {
        this.getProduct.jtjyClick($event.id, 2);
        // this.selete[1] = $event.id;
    };
    SeleteContentPage.prototype.clickJtjy = function ($event) {
        this.getProduct.jtjyClick($event.id, 1);
    };
    SeleteContentPage.prototype.setData = function ($event) {
        this.getProduct.clickOuttime($event);
    };
    SeleteContentPage.prototype.clickotherfn = function ($event) {
        this.getProduct.clickother($event.id);
    };
    SeleteContentPage.prototype.goBack = function () {
        // this.location.back();
        this.nav.back();
    };
    SeleteContentPage.prototype.setNum = function ($event) {
        console.log($event);
        this.getProduct.setPersonnum($event);
    };
    SeleteContentPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_getproduct_service__WEBPACK_IMPORTED_MODULE_3__["GetproductService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }
    ]; };
    SeleteContentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selete-content',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selete-content.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/selete-content/selete-content.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selete-content.page.scss */ "./src/app/pages/selete-content/selete-content.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_getproduct_service__WEBPACK_IMPORTED_MODULE_3__["GetproductService"], _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], SeleteContentPage);
    return SeleteContentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-selete-content-selete-content-module.js.map