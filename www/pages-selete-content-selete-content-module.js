(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-selete-content-selete-content-module"],{

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

/***/ "./src/app/pages/selete-content/selete-content.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/selete-content/selete-content.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <!--<ion-back-button></ion-back-button>-->\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>选择套餐</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <app-pagetitle *ngIf=\"data && data.timetc\" [myname]=\"'出发日期'\" [nobold]=\"true\" [type]=\"false\" [smpadding]=\"true\"></app-pagetitle>\r\n  <app-datecontent *ngIf=\"data && data.timetc\" [datelist]=\"data.timetc\" [noMonth]=\"data.month\" (setDate)=\"setData($event)\"></app-datecontent>\r\n  <div class=\"border\"></div>\r\n  <app-pagetitle *ngIf=\"data && data.jtjy\" [myname]=\"'几天几晚'\" [nobold]=\"true\" [type]=\"false\" [smpadding]=\"true\"></app-pagetitle>\r\n  <div class=\"tcbox\" *ngIf=\"data && data.jtjy\">\r\n    <app-seletebtn *ngFor=\"let item of data.jtjy.values\" (mclick)=\"clickJtjy($event)\" [name]=\"item.label\" [id]=\"item.id\" [graybg]=\"item.disabled\" [isactive]=\"item.selected_key_ecshop68\"></app-seletebtn>\r\n  </div>\r\n  <div class=\"border\"></div>\r\n  <app-pagetitle *ngIf=\"data && data.zstc\" [myname]=\"'套餐'\" [nobold]=\"true\" [type]=\"false\" [smpadding]=\"true\"></app-pagetitle>\r\n  <div class=\"tctype\" *ngIf=\"data && data.zstc\">\r\n    <app-seletebtn *ngFor=\"let item of data.zstc.values\" (mclick)=\"seletefn($event)\" [graybg]=\"item.disabled\" [name]=\"item.label\" [id]=\"item.id\" [isactive]=\"item.selected_key_ecshop68\"></app-seletebtn>\r\n  </div>\r\n  <div class=\"border\" *ngIf=\"data && data.attrList.length > 0\"></div>\r\n  <app-pagetitle *ngIf=\"data && data.attrList.length > 0\" [myname]=\"data.attrList[0].name\" [nobold]=\"true\" [type]=\"false\" [smpadding]=\"true\"></app-pagetitle>\r\n  <div *ngIf=\"data && data.attrList.length > 0\">\r\n    <app-seletebtn *ngFor=\"let item of data.attrList[0].values\" (mclick)=\"clickotherfn($event)\" [name]=\"item.label\" [id]=\"item.id\" [isactive]=\"item.selected_key_ecshop68\"></app-seletebtn>\r\n  </div>\r\n  <div class=\"border\" style=\"margin-top: 10px\"></div>\r\n  <app-pagetitle [myname]=\"'购买数量'\" [nobold]=\"true\" [type]=\"false\" [smpadding]=\"true\"></app-pagetitle>\r\n  <app-setnum *ngIf=\"data\" [price]=\"data.activestartprice\" [num]=\"data.persenNum\" [maxnum]=\"data.topData.buymax\" (setNum)=\"setNum($event)\"></app-setnum>\r\n</ion-content>\r\n\r\n<ion-footer mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <app-footer *ngIf=\"data\" [type]=\"1\" [allprice]=\"data.activestartprice\" [price]=\"0\" [disabled]=\"data.disabled\" (sub)=\"submit($event)\"></app-footer>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/selete-content/selete-content.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/selete-content/selete-content.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.tcbox app-seletebtn {\n  margin-right: 7px;\n  margin-bottom: 7px;\n  display: inline-block; }\n.tctype app-seletebtn {\n  display: block;\n  margin-bottom: 7px; }\n.border {\n  position: relative; }\n.border::before {\n    content: \"\";\n    pointer-events: none;\n    /* 防止点击触发 */\n    box-sizing: border-box;\n    position: absolute;\n    width: 200%;\n    height: 200%;\n    left: 0;\n    top: 0;\n    border-radius: 8px;\n    border: 1px solid var(--ion-color-light);\n    transform: scale(0.5);\n    transform-origin: 0 0; }\n#layui-laydate1 {\n  background: red;\n  --width: 100%; }\nion-toolbar {\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsZXRlLWNvbnRlbnQvc2VsZXRlLWNvbnRlbnQucGFnZS5zY3NzIiwiL1VzZXJzL3dqeS9EZXNrdG9wL2x4ai9zcmMvYXBwL3BhZ2VzL3NlbGV0ZS1jb250ZW50L3NlbGV0ZS1jb250ZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFFSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBO0FBR3pCO0VBRUksY0FBYztFQUNkLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0Usa0JBQWtCLEVBQUE7QUFEcEI7SUFHSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQUUsV0FBQTtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osT0FBTztJQUNQLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsd0NBQXVDO0lBQ3ZDLHFCQUFxQjtJQUVyQixxQkFBcUIsRUFBQTtBQUd6QjtFQUNFLGVBQWU7RUFDZixhQUFRLEVBQUE7QUFHVjtFQUNFLG1CQUFpQjtFQUNqQixnQkFBYztFQUNkLGtCQUFnQjtFQUNoQixnQkFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VsZXRlLWNvbnRlbnQvc2VsZXRlLWNvbnRlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnRjYm94IGFwcC1zZWxldGVidG4ge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLnRjdHlwZSBhcHAtc2VsZXRlYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDdweDsgfVxuXG4uYm9yZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5ib3JkZXI6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAvKiDpmLLmraLngrnlh7vop6blj5EgKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjAwJTtcbiAgICBoZWlnaHQ6IDIwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDsgfVxuXG4jbGF5dWktbGF5ZGF0ZTEge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIC0td2lkdGg6IDEwMCU7IH1cblxuaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7IH1cbiIsIi50Y2JveCB7XHJcbiAgYXBwLXNlbGV0ZWJ0biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbn1cclxuLnRjdHlwZSB7XHJcbiAgYXBwLXNlbGV0ZWJ0biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICB9XHJcbn1cclxuLmJvcmRlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJjo6YmVmb3Jle1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiDpmLLmraLngrnlh7vop6blj5EgKi9cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjAwJTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICB9XHJcbn1cclxuI2xheXVpLWxheWRhdGUxIHtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgLS13aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLXRvcDogMDtcclxufVxyXG4iXX0= */"

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
    SeleteContentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selete-content',
            template: __webpack_require__(/*! ./selete-content.page.html */ "./src/app/pages/selete-content/selete-content.page.html"),
            styles: [__webpack_require__(/*! ./selete-content.page.scss */ "./src/app/pages/selete-content/selete-content.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_getproduct_service__WEBPACK_IMPORTED_MODULE_3__["GetproductService"], _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], SeleteContentPage);
    return SeleteContentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-selete-content-selete-content-module.js.map