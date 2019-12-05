(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-center-more-center-more-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/center-more/center-more.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/center-more/center-more.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n * @Author: wjy-mac\n * @Date: 2019-08-03 23:14:51\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-18 10:14:36\n * @Description: file content\n -->\n<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>更多设置</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <!-- <ion-item *ngIf=\"user && user.is_surplus_open == 0\" button (click)=\"setPaypwd()\">设置支付密码</ion-item> -->\n    <!-- <ion-item *ngIf=\"user && user.is_surplus_open == 1\" button (click)=\"setPaypwd()\">修改支付密码</ion-item> -->\n    <ion-item *ngIf=\"user\" button (click)=\"gotopage(1)\">地址管理</ion-item>\n    <!-- <ion-item button (click)=\"tobill()\">账单</ion-item> 感觉无用 wjy -->\n    <ion-item button (click)=\"toSetpw()\">修改登录密码</ion-item>\n    <ion-item button (click)=\"toabout()\">关于我们</ion-item>\n  </ion-list>\n  <ion-button color=\"danger\" expand=\"block\" (click)=\"loginout()\">退出登录</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/center-more/center-more.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/center-more/center-more.module.ts ***!
  \*********************************************************/
/*! exports provided: CenterMorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterMorePageModule", function() { return CenterMorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _center_more_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./center-more.page */ "./src/app/pages/center-more/center-more.page.ts");







// import { ComponentsModule } from '../../components/components.module';
var routes = [
    {
        path: '',
        component: _center_more_page__WEBPACK_IMPORTED_MODULE_6__["CenterMorePage"]
    }
];
var CenterMorePageModule = /** @class */ (function () {
    function CenterMorePageModule() {
    }
    CenterMorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                // ComponentsModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_center_more_page__WEBPACK_IMPORTED_MODULE_6__["CenterMorePage"]]
        })
    ], CenterMorePageModule);
    return CenterMorePageModule;
}());



/***/ }),

/***/ "./src/app/pages/center-more/center-more.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/center-more/center-more.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NlbnRlci1tb3JlL2NlbnRlci1tb3JlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/center-more/center-more.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/center-more/center-more.page.ts ***!
  \*******************************************************/
/*! exports provided: CenterMorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterMorePage", function() { return CenterMorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_native_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var src_app_services_articelist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/articelist.service */ "./src/app/services/articelist.service.ts");
/* harmony import */ var src_app_services_bounslist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/bounslist.service */ "./src/app/services/bounslist.service.ts");
/* harmony import */ var src_app_services_collelist_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/collelist.service */ "./src/app/services/collelist.service.ts");
/* harmony import */ var src_app_services_contactlist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/contactlist.service */ "./src/app/services/contactlist.service.ts");
/* harmony import */ var src_app_services_emojiishow_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/emojiishow.service */ "./src/app/services/emojiishow.service.ts");
/* harmony import */ var src_app_services_getproduct_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/getproduct.service */ "./src/app/services/getproduct.service.ts");
/* harmony import */ var src_app_services_goodsattr_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/goodsattr.service */ "./src/app/services/goodsattr.service.ts");
/* harmony import */ var src_app_services_gwc_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/gwc.service */ "./src/app/services/gwc.service.ts");
/* harmony import */ var src_app_services_gzlist_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/gzlist.service */ "./src/app/services/gzlist.service.ts");
/* harmony import */ var src_app_services_lljl_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/lljl.service */ "./src/app/services/lljl.service.ts");
/* harmony import */ var src_app_services_news_list_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/news-list.service */ "./src/app/services/news-list.service.ts");
/* harmony import */ var src_app_services_orderlist_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/orderlist.service */ "./src/app/services/orderlist.service.ts");
/* harmony import */ var src_app_services_ordersuccess_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/services/ordersuccess.service */ "./src/app/services/ordersuccess.service.ts");
/* harmony import */ var src_app_services_payment_list_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/payment-list.service */ "./src/app/services/payment-list.service.ts");
/* harmony import */ var src_app_services_payorder_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/services/payorder.service */ "./src/app/services/payorder.service.ts");
/* harmony import */ var src_app_services_pqlist_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/services/pqlist.service */ "./src/app/services/pqlist.service.ts");
/* harmony import */ var src_app_services_productcontentlist_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/services/productcontentlist.service */ "./src/app/services/productcontentlist.service.ts");
/* harmony import */ var src_app_services_products_list_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/services/products-list.service */ "./src/app/services/products-list.service.ts");
/* harmony import */ var src_app_services_provinces_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/services/provinces.service */ "./src/app/services/provinces.service.ts");
/* harmony import */ var src_app_services_scindex_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/services/scindex.service */ "./src/app/services/scindex.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_searchendgoods_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/services/searchendgoods.service */ "./src/app/services/searchendgoods.service.ts");
/* harmony import */ var src_app_services_searchrecode_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/services/searchrecode.service */ "./src/app/services/searchrecode.service.ts");
/* harmony import */ var src_app_services_selete_media_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/services/selete-media.service */ "./src/app/services/selete-media.service.ts");
/* harmony import */ var src_app_services_shop_content_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/services/shop-content.service */ "./src/app/services/shop-content.service.ts");
/* harmony import */ var src_app_services_shop_nav_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/services/shop-nav.service */ "./src/app/services/shop-nav.service.ts");
/* harmony import */ var src_app_services_sjindextjgoods_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/services/sjindextjgoods.service */ "./src/app/services/sjindextjgoods.service.ts");
/* harmony import */ var src_app_services_supplierlist_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/services/supplierlist.service */ "./src/app/services/supplierlist.service.ts");
/* harmony import */ var src_app_services_thorder_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/services/thorder.service */ "./src/app/services/thorder.service.ts");
/* harmony import */ var src_app_services_usercenter_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/app/services/usercenter.service */ "./src/app/services/usercenter.service.ts");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var src_app_services_xclist_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! src/app/services/xclist.service */ "./src/app/services/xclist.service.ts");
/* harmony import */ var src_app_services_xcsclist_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! src/app/services/xcsclist.service */ "./src/app/services/xcsclist.service.ts");
/* harmony import */ var src_app_services_yhtclist_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! src/app/services/yhtclist.service */ "./src/app/services/yhtclist.service.ts");
/* harmony import */ var src_app_services_yjlist_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! src/app/services/yjlist.service */ "./src/app/services/yjlist.service.ts");
/* harmony import */ var src_app_services_zt_list_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! src/app/services/zt-list.service */ "./src/app/services/zt-list.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 23:14:51
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 15:55:37
 * @Description: file content
 */


// import { PayboxComponent } from '../../components/paybox/paybox.component';







































var CenterMorePage = /** @class */ (function () {
    function CenterMorePage(route, nav, userfn, native, articelist, bounslist, collelist, contactlist, emojiisshow, getproduct, goodsattr, gwc, gzlist, http, lljl, newslist, orderlist, ordersuccess, paymentlist, payorder, pqlist, productcontentlist, productslist, provinces, scindex, searchendgoods, searchrecode, seletemedia, shopcontent, shopnav, sjindextjgoods, supplierlist, thorder, usercenter, ws, xclist, xcsclist, yhtclist, yjlist, ztlist) {
        this.route = route;
        this.nav = nav;
        this.userfn = userfn;
        this.native = native;
        this.articelist = articelist;
        this.bounslist = bounslist;
        this.collelist = collelist;
        this.contactlist = contactlist;
        this.emojiisshow = emojiisshow;
        this.getproduct = getproduct;
        this.goodsattr = goodsattr;
        this.gwc = gwc;
        this.gzlist = gzlist;
        this.http = http;
        this.lljl = lljl;
        this.newslist = newslist;
        this.orderlist = orderlist;
        this.ordersuccess = ordersuccess;
        this.paymentlist = paymentlist;
        this.payorder = payorder;
        this.pqlist = pqlist;
        this.productcontentlist = productcontentlist;
        this.productslist = productslist;
        this.provinces = provinces;
        this.scindex = scindex;
        this.searchendgoods = searchendgoods;
        this.searchrecode = searchrecode;
        this.seletemedia = seletemedia;
        this.shopcontent = shopcontent;
        this.shopnav = shopnav;
        this.sjindextjgoods = sjindextjgoods;
        this.supplierlist = supplierlist;
        this.thorder = thorder;
        this.usercenter = usercenter;
        this.ws = ws;
        this.xclist = xclist;
        this.xcsclist = xcsclist;
        this.yhtclist = yhtclist;
        this.yjlist = yjlist;
        this.ztlist = ztlist;
    }
    CenterMorePage.prototype.ngOnInit = function () {
        this.ismobile = this.native.ismobile();
    };
    CenterMorePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.userfn.getUserp().then(function (res) {
            _this.user = res;
        });
    };
    CenterMorePage.prototype.ionViewDidEnter = function () {
    };
    CenterMorePage.prototype.goBack = function () {
        this.nav.back();
    };
    /**
     * @Author: wjy-mac
     * @description: 设置登录密码
     * @Date: 2019-11-18 10:00:06
     * @param {type}
     * @return:
     */
    CenterMorePage.prototype.toSetpw = function () {
        this.route.navigate(['/set-pd'], { queryParams: { type: 2 } });
    };
    /**
     * @Author: wjy-mac
     * @description: 设置支付密码
     * @Date: 2019-11-18 10:00:13
     * @param {type}
     * @return:
     */
    CenterMorePage.prototype.setPaypwd = function () {
        this.route.navigate(['/setpaypwd']);
    };
    CenterMorePage.prototype.loginout = function () {
        this.clearAlldata();
        this.nav.navigateRoot('/login');
    };
    CenterMorePage.prototype.gotopage = function () {
        this.route.navigate(['/contactlist'], { queryParams: { type: 3 } });
    };
    CenterMorePage.prototype.tobill = function () {
        this.route.navigate(['/bill']);
    };
    CenterMorePage.prototype.toabout = function () {
        this.route.navigate(['/about-us']);
    };
    CenterMorePage.prototype.clearAlldata = function () {
        this.articelist.clear();
        this.bounslist.clear();
        this.collelist.clear();
        this.contactlist.clear();
        this.emojiisshow.clear();
        this.getproduct.clear();
        this.goodsattr.clear();
        this.gwc.clear();
        this.gzlist.clear();
        this.http.clearUser();
        this.lljl.clear();
        this.native.clearStorage();
        this.newslist.clear();
        this.orderlist.clear();
        this.ordersuccess.clearData();
        this.paymentlist.clear();
        this.payorder.clear();
        this.pqlist.clear();
        this.productcontentlist.clear();
        this.productslist.clear();
        this.provinces.clear();
        this.scindex.clear();
        this.searchendgoods.clear();
        this.searchrecode.clear();
        this.seletemedia.clear();
        this.shopcontent.clear();
        this.shopnav.clear();
        this.sjindextjgoods.clear();
        this.supplierlist.clear();
        this.thorder.clearData();
        this.userfn.clear();
        this.usercenter.clear();
        this.ws.clear();
        this.xclist.clear();
        this.xcsclist.clear();
        this.yhtclist.clear();
        this.yjlist.clear();
        this.ztlist.clear();
    };
    CenterMorePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: src_app_services_native_service__WEBPACK_IMPORTED_MODULE_5__["NativeService"] },
        { type: src_app_services_articelist_service__WEBPACK_IMPORTED_MODULE_6__["ArticelistService"] },
        { type: src_app_services_bounslist_service__WEBPACK_IMPORTED_MODULE_7__["BounslistService"] },
        { type: src_app_services_collelist_service__WEBPACK_IMPORTED_MODULE_8__["CollelistService"] },
        { type: src_app_services_contactlist_service__WEBPACK_IMPORTED_MODULE_9__["ContactlistService"] },
        { type: src_app_services_emojiishow_service__WEBPACK_IMPORTED_MODULE_10__["EmojiishowService"] },
        { type: src_app_services_getproduct_service__WEBPACK_IMPORTED_MODULE_11__["GetproductService"] },
        { type: src_app_services_goodsattr_service__WEBPACK_IMPORTED_MODULE_12__["GoodsattrService"] },
        { type: src_app_services_gwc_service__WEBPACK_IMPORTED_MODULE_13__["GwcService"] },
        { type: src_app_services_gzlist_service__WEBPACK_IMPORTED_MODULE_14__["GzlistService"] },
        { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_26__["HttpService"] },
        { type: src_app_services_lljl_service__WEBPACK_IMPORTED_MODULE_15__["LljlService"] },
        { type: src_app_services_news_list_service__WEBPACK_IMPORTED_MODULE_16__["NewsListService"] },
        { type: src_app_services_orderlist_service__WEBPACK_IMPORTED_MODULE_17__["OrderlistService"] },
        { type: src_app_services_ordersuccess_service__WEBPACK_IMPORTED_MODULE_18__["OrdersuccessService"] },
        { type: src_app_services_payment_list_service__WEBPACK_IMPORTED_MODULE_19__["PaymentListService"] },
        { type: src_app_services_payorder_service__WEBPACK_IMPORTED_MODULE_20__["PayorderService"] },
        { type: src_app_services_pqlist_service__WEBPACK_IMPORTED_MODULE_21__["PqlistService"] },
        { type: src_app_services_productcontentlist_service__WEBPACK_IMPORTED_MODULE_22__["ProductcontentlistService"] },
        { type: src_app_services_products_list_service__WEBPACK_IMPORTED_MODULE_23__["ProductsListService"] },
        { type: src_app_services_provinces_service__WEBPACK_IMPORTED_MODULE_24__["ProvincesService"] },
        { type: src_app_services_scindex_service__WEBPACK_IMPORTED_MODULE_25__["ScindexService"] },
        { type: src_app_services_searchendgoods_service__WEBPACK_IMPORTED_MODULE_27__["SearchendgoodsService"] },
        { type: src_app_services_searchrecode_service__WEBPACK_IMPORTED_MODULE_28__["SearchrecodeService"] },
        { type: src_app_services_selete_media_service__WEBPACK_IMPORTED_MODULE_29__["SeleteMediaService"] },
        { type: src_app_services_shop_content_service__WEBPACK_IMPORTED_MODULE_30__["ShopContentService"] },
        { type: src_app_services_shop_nav_service__WEBPACK_IMPORTED_MODULE_31__["ShopNavService"] },
        { type: src_app_services_sjindextjgoods_service__WEBPACK_IMPORTED_MODULE_32__["SjindextjgoodsService"] },
        { type: src_app_services_supplierlist_service__WEBPACK_IMPORTED_MODULE_33__["SupplierlistService"] },
        { type: src_app_services_thorder_service__WEBPACK_IMPORTED_MODULE_34__["ThorderService"] },
        { type: src_app_services_usercenter_service__WEBPACK_IMPORTED_MODULE_35__["UsercenterService"] },
        { type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_36__["WebsocketService"] },
        { type: src_app_services_xclist_service__WEBPACK_IMPORTED_MODULE_37__["XclistService"] },
        { type: src_app_services_xcsclist_service__WEBPACK_IMPORTED_MODULE_38__["XcsclistService"] },
        { type: src_app_services_yhtclist_service__WEBPACK_IMPORTED_MODULE_39__["YhtclistService"] },
        { type: src_app_services_yjlist_service__WEBPACK_IMPORTED_MODULE_40__["YjlistService"] },
        { type: src_app_services_zt_list_service__WEBPACK_IMPORTED_MODULE_41__["ZtListService"] }
    ]; };
    CenterMorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-center-more',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./center-more.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/center-more/center-more.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./center-more.page.scss */ "./src/app/pages/center-more/center-more.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_services_native_service__WEBPACK_IMPORTED_MODULE_5__["NativeService"],
            src_app_services_articelist_service__WEBPACK_IMPORTED_MODULE_6__["ArticelistService"], src_app_services_bounslist_service__WEBPACK_IMPORTED_MODULE_7__["BounslistService"],
            src_app_services_collelist_service__WEBPACK_IMPORTED_MODULE_8__["CollelistService"], src_app_services_contactlist_service__WEBPACK_IMPORTED_MODULE_9__["ContactlistService"],
            src_app_services_emojiishow_service__WEBPACK_IMPORTED_MODULE_10__["EmojiishowService"], src_app_services_getproduct_service__WEBPACK_IMPORTED_MODULE_11__["GetproductService"],
            src_app_services_goodsattr_service__WEBPACK_IMPORTED_MODULE_12__["GoodsattrService"], src_app_services_gwc_service__WEBPACK_IMPORTED_MODULE_13__["GwcService"], src_app_services_gzlist_service__WEBPACK_IMPORTED_MODULE_14__["GzlistService"],
            src_app_services_http_service__WEBPACK_IMPORTED_MODULE_26__["HttpService"], src_app_services_lljl_service__WEBPACK_IMPORTED_MODULE_15__["LljlService"], src_app_services_news_list_service__WEBPACK_IMPORTED_MODULE_16__["NewsListService"],
            src_app_services_orderlist_service__WEBPACK_IMPORTED_MODULE_17__["OrderlistService"], src_app_services_ordersuccess_service__WEBPACK_IMPORTED_MODULE_18__["OrdersuccessService"],
            src_app_services_payment_list_service__WEBPACK_IMPORTED_MODULE_19__["PaymentListService"], src_app_services_payorder_service__WEBPACK_IMPORTED_MODULE_20__["PayorderService"],
            src_app_services_pqlist_service__WEBPACK_IMPORTED_MODULE_21__["PqlistService"], src_app_services_productcontentlist_service__WEBPACK_IMPORTED_MODULE_22__["ProductcontentlistService"],
            src_app_services_products_list_service__WEBPACK_IMPORTED_MODULE_23__["ProductsListService"], src_app_services_provinces_service__WEBPACK_IMPORTED_MODULE_24__["ProvincesService"],
            src_app_services_scindex_service__WEBPACK_IMPORTED_MODULE_25__["ScindexService"], src_app_services_searchendgoods_service__WEBPACK_IMPORTED_MODULE_27__["SearchendgoodsService"],
            src_app_services_searchrecode_service__WEBPACK_IMPORTED_MODULE_28__["SearchrecodeService"], src_app_services_selete_media_service__WEBPACK_IMPORTED_MODULE_29__["SeleteMediaService"],
            src_app_services_shop_content_service__WEBPACK_IMPORTED_MODULE_30__["ShopContentService"], src_app_services_shop_nav_service__WEBPACK_IMPORTED_MODULE_31__["ShopNavService"],
            src_app_services_sjindextjgoods_service__WEBPACK_IMPORTED_MODULE_32__["SjindextjgoodsService"], src_app_services_supplierlist_service__WEBPACK_IMPORTED_MODULE_33__["SupplierlistService"],
            src_app_services_thorder_service__WEBPACK_IMPORTED_MODULE_34__["ThorderService"], src_app_services_usercenter_service__WEBPACK_IMPORTED_MODULE_35__["UsercenterService"],
            src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_36__["WebsocketService"], src_app_services_xclist_service__WEBPACK_IMPORTED_MODULE_37__["XclistService"], src_app_services_xcsclist_service__WEBPACK_IMPORTED_MODULE_38__["XcsclistService"],
            src_app_services_yhtclist_service__WEBPACK_IMPORTED_MODULE_39__["YhtclistService"], src_app_services_yjlist_service__WEBPACK_IMPORTED_MODULE_40__["YjlistService"], src_app_services_zt_list_service__WEBPACK_IMPORTED_MODULE_41__["ZtListService"]])
    ], CenterMorePage);
    return CenterMorePage;
}());



/***/ }),

/***/ "./src/app/services/provinces.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/provinces.service.ts ***!
  \***********************************************/
/*! exports provided: ProvincesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvincesService", function() { return ProvincesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProvincesService = /** @class */ (function () {
    function ProvincesService() {
        this.list = [];
    }
    ProvincesService.prototype.clear = function () {
        this.list = [];
    };
    ProvincesService.prototype.getList = function () {
        return this.list;
    };
    ProvincesService.prototype.setList = function (list) {
        var _a;
        (_a = this.list).push.apply(_a, list);
    };
    ProvincesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProvincesService);
    return ProvincesService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-center-more-center-more-module.js.map