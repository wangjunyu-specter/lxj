(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-searchorder-searchorder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/searchorder/searchorder.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/searchorder/searchorder.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>搜索订单</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar showCancelButton=\"focus\"\n                 animated  placeholder=\"请输入商品名称\"\n                 cancelButtonText=\"取消\" mode=\"ios\" (ionChange)=\"searchitem($event.detail.value)\"></ion-searchbar>\n  <div class=\"my-content-bg\" *ngFor=\"let item of list; let i = index\">\n    <ion-list inset=\"true\" line=\"none\">\n      <div class=\"shopname-box\">\n        <div class=\"left\">\n          <img src=\"../../../assets/icon/dianpu.png\" alt=\"\"><h3 class=\"supper_name\">{{item.shopname}}</h3>\n        </div>\n        <div class=\"right\">{{item.order_status}}</div>\n      </div>\n      <ion-item *ngFor=\"let data of item.goods_list\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"http.domain + data.goods_thumb\">\n        </ion-thumbnail>\n        <ion-label>\n          <h3 class=\"goods_title\">{{data.goods_name | namesubstr: 25}}</h3>\n          <p class=\"goods_title\">{{data.goods_attr}}</p>\n        </ion-label>\n        <div slot=\"end\" class=\"end-price\">\n          <span>{{data.formated_goods_price}}</span>\n          <span>×{{data.goods_number}}</span>\n        </div>\n      </ion-item>\n      <p class=\"order_des\">共{{item.count}}件商品&nbsp;&nbsp;实付:{{item.total_fee}}</p>\n    </ion-list>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"bubbles\"\n       loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/searchorder/searchorder.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/searchorder/searchorder.module.ts ***!
  \*********************************************************/
/*! exports provided: SearchorderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchorderPageModule", function() { return SearchorderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchorder.page */ "./src/app/pages/searchorder/searchorder.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _searchorder_page__WEBPACK_IMPORTED_MODULE_6__["SearchorderPage"]
    }
];
var SearchorderPageModule = /** @class */ (function () {
    function SearchorderPageModule() {
    }
    SearchorderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_searchorder_page__WEBPACK_IMPORTED_MODULE_6__["SearchorderPage"]]
        })
    ], SearchorderPageModule);
    return SearchorderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/searchorder/searchorder.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/searchorder/searchorder.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-gray-background-color);\n}\nion-content .my-content-bg {\n  background: #fff;\n  margin-bottom: 10px;\n  border-radius: 7px;\n}\n.end-price {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n}\n.end-price span {\n  display: block;\n  text-align: right;\n}\n.goods_title {\n  white-space: normal;\n  font-size: var(--ion-sm-text);\n}\n.order_des {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n  text-align: right;\n}\n.supper_name {\n  font-size: var(--ion-title);\n}\n.shopname-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.shopname-box .left {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 7px 0;\n}\n.shopname-box .left img {\n  width: 20px;\n}\n.shopname-box .left h3 {\n  padding: 0;\n  margin: 0;\n}\n.shopname-box .right {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zZWFyY2hvcmRlci9zZWFyY2hvcmRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlYXJjaG9yZGVyL3NlYXJjaG9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhDQUFBO0FDQ0Y7QURBRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFHQSxrQkFBQTtBQ0VKO0FEQ0E7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUNFRjtBRERFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDR0o7QURBQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUNHRjtBRERBO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDSUY7QURGQTtFQUNFLDJCQUFBO0FDS0Y7QURIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQ01GO0FETEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ09KO0FETkk7RUFDRSxXQUFBO0FDUU47QUROSTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDUU47QURMRTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaG9yZGVyL3NlYXJjaG9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xyXG4gIC5teS1jb250ZW50LWJnIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB9XHJcbn1cclxuLmVuZC1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbi5nb29kc190aXRsZSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxufVxyXG4ub3JkZXJfZGVzIHtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnN1cHBlcl9uYW1lIHtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbn1cclxuLnNob3BuYW1lLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIC5sZWZ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDdweCAwO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIH1cclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbmlvbi1jb250ZW50IC5teS1jb250ZW50LWJnIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5lbmQtcHJpY2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5lbmQtcHJpY2Ugc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmdvb2RzX3RpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG59XG5cbi5vcmRlcl9kZXMge1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnN1cHBlcl9uYW1lIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xufVxuXG4uc2hvcG5hbWUtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbi5zaG9wbmFtZS1ib3ggLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDdweCAwO1xufVxuLnNob3BuYW1lLWJveCAubGVmdCBpbWcge1xuICB3aWR0aDogMjBweDtcbn1cbi5zaG9wbmFtZS1ib3ggLmxlZnQgaDMge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uc2hvcG5hbWUtYm94IC5yaWdodCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/searchorder/searchorder.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/searchorder/searchorder.page.ts ***!
  \*******************************************************/
/*! exports provided: SearchorderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchorderPage", function() { return SearchorderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-06 01:39:02
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-05 21:01:57
 * @Description: file content
 */




var SearchorderPage = /** @class */ (function () {
    function SearchorderPage(nav, route, activeroute, http) {
        this.nav = nav;
        this.route = route;
        this.activeroute = activeroute;
        this.http = http;
    }
    SearchorderPage.prototype.ngOnInit = function () {
        this.list = [];
        this.amount = 20;
        this.last = 0;
        var params = this.activeroute.snapshot.queryParams;
        this.type = params['type'] || 1;
        if (this.type > 2 || this.type < 1) {
            this.type = 1;
        }
    };
    // ionViewWillEnter() {
    //   this.activeroute.queryParams.subscribe(params => {
    //     this.type = params['type'] || 1;
    //     if (this.type > 2 || this.type < 1) {
    //       this.type = 1;
    //     }
    //   })
    // }
    SearchorderPage.prototype.goBack = function () {
        this.nav.back();
    };
    SearchorderPage.prototype.searchitem = function (val) {
        console.log(val);
        this.searchText = val;
        this.last = 0;
        this.infiniteScroll.disabled = false;
        this.list.length = 0;
        if (!val) {
            return false;
        }
        this.getList();
    };
    SearchorderPage.prototype.getList = function (event) {
        var _this = this;
        var obj = {
            last: this.last,
            amount: this.amount,
            composite_status: -1,
            ishw: this.type,
            searchtext: this.searchText
        };
        this.last += this.amount;
        this.http.postformdata(this.http.orderlist, obj).subscribe(function (res) {
            var _a;
            console.log(res);
            (_a = _this.list).push.apply(_a, res.data);
            if (event) {
                event.target.complete();
                if (res.data.length < _this.amount) {
                    _this.infiniteScroll.disabled = true;
                }
            }
        }, function (err) {
            console.log(err);
            if (event) {
                event.target.complete();
                _this.infiniteScroll.disabled = true;
            }
        });
    };
    SearchorderPage.prototype.loadData = function (event) {
        this.getList(event);
        // event.target.complete();
    };
    SearchorderPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], SearchorderPage.prototype, "infiniteScroll", void 0);
    SearchorderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchorder',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./searchorder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/searchorder/searchorder.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./searchorder.page.scss */ "./src/app/pages/searchorder/searchorder.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
    ], SearchorderPage);
    return SearchorderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-searchorder-searchorder-module.js.map