(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>购物车</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <app-gwcitem *ngFor=\"let item of goodsList; let i = index\"\n               [item]=\"item\"\n                (clickItem)=\"clickItem($event)\"\n               (changeattrfn)=\"changeattrfn($event)\"></app-gwcitem>\n\n</ion-content>\n\n<ion-footer mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <div class=\"footer-box\">\n      <div class=\"left\">\n        <ion-checkbox color=\"danger\"\n                      [(ngModel)]=\"options.isall\"\n                      (ionChange)=\"setIsall()\" (click)=\"setIsclick()\"></ion-checkbox>全选\n      </div>\n      <div class=\"right\">\n        <div class=\"box\">不包含邮费</div>\n        <div class=\"box\">\n          <div>合计:<span>¥{{options.allPrice}}</span></div>\n          <div class=\"des\">{{options.des}}</div>\n        </div>\n        <div class=\"box\">\n          <ion-button size=\"small\" shape=\"round\" color=\"danger\" (click)=\"jspage()\" [disabled]=\"options.yxnum === 0\">结算({{options.yxnum}})</ion-button>\n        </div>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/cart/cart.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/pages/cart/cart.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer ion-toolbar .footer-box {\n  color: var(--ion-color-dark);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n}\nion-footer ion-toolbar .footer-box .left {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: var(--ion-text);\n}\nion-footer ion-toolbar .footer-box .right {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: var(--ion-text);\n}\nion-footer ion-toolbar .footer-box .right .box:first-of-type {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n}\nion-footer ion-toolbar .footer-box .right .box:nth-of-type(2) {\n  margin: 0 6px;\n}\nion-footer ion-toolbar .footer-box .right .box:nth-of-type(2) span {\n  color: var(--ion-color-danger);\n}\nion-footer ion-toolbar .footer-box .right .box:nth-of-type(2) .des {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-danger);\n}\nion-footer ion-toolbar ion-checkbox {\n  --size: 17px;\n  margin-right: 5px;\n}\nion-content {\n  --background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDRE47QURFTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0FSO0FERU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNBUjtBREVVO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtBQ0FaO0FERVU7RUFDRSxhQUFBO0FDQVo7QURDWTtFQUNFLDhCQUFBO0FDQ2Q7QURDWTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNDZDtBREtJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDSE47QURPQTtFQUNFLG9DQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLmZvb3Rlci1ib3gge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAubGVmdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICB9XHJcbiAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDZweDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWNoZWNrYm94IHtcclxuICAgICAgLS1zaXplOiAxN3B4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHJcbn0iLCJpb24tZm9vdGVyIGlvbi10b29sYmFyIC5mb290ZXItYm94IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgLmZvb3Rlci1ib3ggLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciAuZm9vdGVyLWJveCAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgLmZvb3Rlci1ib3ggLnJpZ2h0IC5ib3g6Zmlyc3Qtb2YtdHlwZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIC5mb290ZXItYm94IC5yaWdodCAuYm94Om50aC1vZi10eXBlKDIpIHtcbiAgbWFyZ2luOiAwIDZweDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgLmZvb3Rlci1ib3ggLnJpZ2h0IC5ib3g6bnRoLW9mLXR5cGUoMikgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgLmZvb3Rlci1ib3ggLnJpZ2h0IC5ib3g6bnRoLW9mLXR5cGUoMikgLmRlcyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1jaGVja2JveCB7XG4gIC0tc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/cart/cart.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_gwc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/gwc.service */ "./src/app/services/gwc.service.ts");
/* harmony import */ var _services_getproduct_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/getproduct.service */ "./src/app/services/getproduct.service.ts");
/* harmony import */ var _components_goodsattr_goodsattr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/goodsattr/goodsattr.component */ "./src/app/components/goodsattr/goodsattr.component.ts");








// import {DomSanitizer} from "@angular/platform-browser";
var CartPage = /** @class */ (function () {
    function CartPage(nav, route, http, gwcfn, getProduct, modalController) {
        this.nav = nav;
        this.route = route;
        this.http = http;
        this.gwcfn = gwcfn;
        this.getProduct = getProduct;
        this.modalController = modalController;
    }
    CartPage.prototype.ngOnInit = function () {
        this.isclickall = false;
        // this.gwcfn.getListhttp();
        this.options = this.gwcfn.getOption();
    };
    CartPage.prototype.ionViewDidEnter = function () {
        this.goodsList = this.gwcfn.getList();
    };
    CartPage.prototype.goBack = function () {
        this.nav.back();
    };
    CartPage.prototype.setIsclick = function () {
        this.isclickall = true;
    };
    CartPage.prototype.setIsall = function () {
        if (!this.isclickall) {
            return false;
        }
        this.isclickall = false;
        this.gwcfn.setIsall();
    };
    CartPage.prototype.setYxactive = function () {
        var selGoods = [];
        this.goodsList.map(function (res) {
            res.goods_list.map(function (data) {
                if (data.active) {
                    selGoods.push(data.rec_id);
                }
            });
        });
        // this.yxnum = selGoods.length;
        return selGoods;
    };
    CartPage.prototype.changeattrfn = function ($event) {
        var _this = this;
        this.getProduct.getProduct($event.gid).then(function (res) {
            console.log(res);
            var obj = {
                gxb: res.gxb,
                attrlist: res.specification,
                max: res.topData.buymax,
                mrattr: $event.attr,
                goodsid: $event.gid,
                type: 2
            };
            _this.presentModal(obj, $event.rec_id, $event.num);
        }).catch(function (err) {
            // this.goBack()
            console.log(err);
        });
    };
    CartPage.prototype.presentModal = function (obj, recid, num) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data, objp;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_goodsattr_goodsattr_component__WEBPACK_IMPORTED_MODULE_7__["GoodsattrComponent"],
                            cssClass: 'attrModal',
                            componentProps: obj
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data) {
                            if (Number(num) === data.num && isonearr(obj.mrattr, data.arr)) {
                                return [2 /*return*/, false];
                            }
                            console.log(data);
                            console.log(recid);
                            console.log(num);
                            objp = {
                                rec_id: recid,
                                goods_id: obj.goodsid,
                                attr: data.arr,
                                number: data.num
                            };
                            this.http.postformdataloading(this.http.updategwcattr, objp).subscribe(function (res) {
                                console.log(res);
                                _this.gwcfn.changeData(res.goods_list);
                            });
                            // if (data.arr) {
                            //   this.productData.mrattrarr = data.arr;
                            //   this.productData.mrseletestr = '';
                            //   for (let i = 0, j = this.productData.specification.length; i < j; i++) {
                            //     const item = this.productData.specification[i];
                            //     for (let ii = 0, jj = item.values.length; ii < jj; ii++) {
                            //       const id = item.values[ii].id;
                            //       if (data.arr.includes(id)) {
                            //         if (!this.productData.mrseletestr) {
                            //           this.productData.mrseletestr = item.name + ':' + item.values[ii]['label'];
                            //         } else {
                            //           this.productData.mrseletestr += ',' + item.name + ':' + item.values[ii]['label'];
                            //         }
                            //         break;
                            //       }
                            //     }
                            //   }
                            // }
                            // const obj = {
                            //   quick: 0,
                            //   spec: data.arr,
                            //   goods_id: this.pid,
                            //   number: data.num,
                            //   parent: 0,
                            //   isls: data.type - 2
                            // };
                            // this.http.postformdata(this.http.addgwc, {goods: JSON.stringify(obj)}).subscribe(res => {
                            //   console.log(res['rec_id'])
                            //   if (res['rec_id'] && data.type === 3) {
                            //     this.route.navigate(['/spgoods-confirmation'], {queryParams: {catid: res['rec_id']}});
                            //   } else {
                            //     this.gwcfn.getListhttp(1);
                            //   }
                            // }, error2 => {});
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage.prototype.jspage = function () {
        console.log(this.setYxactive().join(','));
        this.route.navigate(['/spgoods-confirmation'], { queryParams: { catid: this.setYxactive().join(',') } });
    };
    CartPage.prototype.clickItem = function ($event) {
        this.route.navigate(['/productcontent'], { queryParams: { id: $event.goods_id, suppid: $event.supplier_id } });
    };
    CartPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _services_gwc_service__WEBPACK_IMPORTED_MODULE_5__["GwcService"] },
        { type: _services_getproduct_service__WEBPACK_IMPORTED_MODULE_6__["GetproductService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.page.scss */ "./src/app/pages/cart/cart.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_gwc_service__WEBPACK_IMPORTED_MODULE_5__["GwcService"],
            _services_getproduct_service__WEBPACK_IMPORTED_MODULE_6__["GetproductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], CartPage);
    return CartPage;
}());

function isonearr(arr, arr1) {
    if (arr.length !== arr1.length) {
        return false;
    }
    for (var i = 0, j = arr.length; i < j; i++) {
        if (arr[i] !== arr1[i]) {
            return false;
        }
    }
    return true;
}


/***/ })

}]);
//# sourceMappingURL=pages-cart-cart-module.js.map