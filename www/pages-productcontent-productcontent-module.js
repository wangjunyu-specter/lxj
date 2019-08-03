(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-productcontent-productcontent-module"],{

/***/ "./src/app/carorother.pipe.ts":
/*!************************************!*\
  !*** ./src/app/carorother.pipe.ts ***!
  \************************************/
/*! exports provided: CarorotherPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarorotherPipe", function() { return CarorotherPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarorotherPipe = /** @class */ (function () {
    function CarorotherPipe() {
    }
    CarorotherPipe.prototype.transform = function (value, args) {
        if (value == 0) {
            return '飞机';
        }
        else if (value == 1) {
            return '火车/高铁';
        }
        else if (value == 2) {
            return '汽车';
        }
        else {
            return '游轮';
        }
    };
    CarorotherPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'carorother'
        })
    ], CarorotherPipe);
    return CarorotherPipe;
}());



/***/ }),

/***/ "./src/app/good-time.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/good-time.pipe.ts ***!
  \***********************************/
/*! exports provided: GoodTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodTimePipe", function() { return GoodTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoodTimePipe = /** @class */ (function () {
    function GoodTimePipe() {
    }
    GoodTimePipe.prototype.transform = function (value, args) {
        console.log(value);
        var arr = [];
        if (value.indexOf('/') > -1) {
            arr = value.split('/');
        }
        else if (value.indexOf('-') > -1) {
            arr = value.split('-');
        }
        var month;
        var day;
        if (arr.length === 3) {
            month = arr[1];
            day = arr[2];
        }
        else {
            month = arr[0];
            day = arr[1];
        }
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return month + '/' + day;
    };
    GoodTimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'goodTime'
        })
    ], GoodTimePipe);
    return GoodTimePipe;
}());



/***/ }),

/***/ "./src/app/onlytime.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/onlytime.pipe.ts ***!
  \**********************************/
/*! exports provided: OnlytimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlytimePipe", function() { return OnlytimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnlytimePipe = /** @class */ (function () {
    function OnlytimePipe() {
    }
    OnlytimePipe.prototype.transform = function (value, args) {
        if (value.includes(' ')) {
            var time = value.replace(/(^\s*)|(\s*$)/g, "");
            time = time.split(' ');
            time = time.filter(function (x) {
                if (x)
                    return true;
                else
                    return false;
            });
            if (time[1].includes('：'))
                time[1] = time[1].replace(/：/g, ':');
            return time[1];
        }
        return value;
    };
    OnlytimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'onlytime'
        })
    ], OnlytimePipe);
    return OnlytimePipe;
}());



/***/ }),

/***/ "./src/app/pages/productcontent/productcontent.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/productcontent/productcontent.module.ts ***!
  \***************************************************************/
/*! exports provided: ProductcontentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductcontentPageModule", function() { return ProductcontentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productcontent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productcontent.page */ "./src/app/pages/productcontent/productcontent.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _good_time_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../good-time.pipe */ "./src/app/good-time.pipe.ts");
/* harmony import */ var _carorother_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../carorother.pipe */ "./src/app/carorother.pipe.ts");
/* harmony import */ var _timedifference_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../timedifference.pipe */ "./src/app/timedifference.pipe.ts");
/* harmony import */ var _onlytime_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../onlytime.pipe */ "./src/app/onlytime.pipe.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");













// import { TimePipe } from '../../time.pipe';
var routes = [
    {
        path: '',
        component: _productcontent_page__WEBPACK_IMPORTED_MODULE_6__["ProductcontentPage"]
    }
];
var ProductcontentPageModule = /** @class */ (function () {
    function ProductcontentPageModule() {
    }
    ProductcontentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_productcontent_page__WEBPACK_IMPORTED_MODULE_6__["ProductcontentPage"], _good_time_pipe__WEBPACK_IMPORTED_MODULE_8__["GoodTimePipe"], _carorother_pipe__WEBPACK_IMPORTED_MODULE_9__["CarorotherPipe"], _timedifference_pipe__WEBPACK_IMPORTED_MODULE_10__["TimedifferencePipe"], _onlytime_pipe__WEBPACK_IMPORTED_MODULE_11__["OnlytimePipe"]]
        })
    ], ProductcontentPageModule);
    return ProductcontentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/productcontent/productcontent.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/productcontent/productcontent.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\">\r\n    <div class=\"search-bar\">\r\n      <div class=\"left\" (click)=\"goBack()\">\r\n        <img src=\"/assets/backbg.svg\" alt=\"\">\r\n      </div>\r\n      <div class=\"center\">\r\n      </div>\r\n      <div class=\"right\">\r\n        <!--<img src=\"/assets/wechatbg.svg\" alt=\"\">-->\r\n        <div class=\"round\"><ion-icon name=\"share\"></ion-icon></div>\r\n        <div class=\"round\" (click)=\"toprightmore($event)\"><ion-icon name=\"more\" mode=\"ios\"></ion-icon></div>\r\n        <!--<img src=\"/assets/czbg.svg\" alt=\"\">-->\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\r\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n       pullingIcon=\"arrow-dropdown\"\r\n       pullingText=\"Pull to refresh\"\r\n       refreshingSpinner=\"circles\"\r\n       refreshingText=\"更新中...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div *ngIf=\"!productData\" class=\"top\">\r\n    <ion-skeleton-text animated style=\"height: 260px;\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"height: 20px;\" ></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"height: 20px;\" ></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"margin-top: 10px; height: 44px;\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"height: 44px;\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"height: 60px;margin-top: 10px;\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"height: 60px;margin-top: 10px;\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"height: 200px;margin-top: 10px;\"></ion-skeleton-text>\r\n    <ion-row>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-skeleton-text animated style=\"height: 20px;margin-top: 10px;\"></ion-skeleton-text>\r\n      <ion-skeleton-text animated style=\"margin-top: 10px;\"></ion-skeleton-text>\r\n      <ion-skeleton-text animated style=\"height: 100px;margin-top: 10px;\"></ion-skeleton-text>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"tw-content2\" padding *ngIf=\"isshowtopnav\">\r\n    <div class=\"title\">\r\n      <div class=\"box\" [ngClass]=\"{'active': pageNav === 1}\" (click)=\"gotoPoint(1)\">图文介绍<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && productData.ishw\" [ngClass]=\"{'active': pageNav === 2}\" (click)=\"gotoPoint(2)\">行程线路<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && !productData.ishw\" [ngClass]=\"{'active': pageNav === 2}\" (click)=\"gotoPoint(2)\">规格参数<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && productData.ishw\" [ngClass]=\"{'active': pageNav === 3}\" (click)=\"gotoPoint(3)\">费用说明<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && !productData.ishw\" [ngClass]=\"{'active': pageNav === 3}\" (click)=\"gotoPoint(3)\">包装售后<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && productData.ishw\" [ngClass]=\"{'active': pageNav === 4}\" (click)=\"gotoPoint(4)\">购买须知<span></span></div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"top\" *ngIf=\"productData\">\r\n    <ion-slides pager=\"true\">\r\n      <ion-slide *ngFor=\"let item of productData.bannerList\">\r\n        <img src=\"{{http.zdomain + item}}\">\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <div class=\"yhtime-box\" *ngIf=\"productData && productData.xsprice.promote_price && productData.xsprice.promote_price !== '0' && productData.xsprice.promote_end_date\">\r\n    <img src=\"./assets/cxbar.svg\" alt=\"\">\r\n    <div class=\"text-content\">\r\n      <div class=\"left\"><span>限时价</span><span>¥</span><span>{{productData.xsprice.promote_price}}</span></div>\r\n      <div class=\"right\">\r\n        <span>剩余时间</span>\r\n        <div class=\"time-box\">\r\n          <span *ngIf=\"xsday && xsday != 0\">{{xsday}}</span><span *ngIf=\"xsday && xsday != 0\">:</span><span>{{xsHouse}}</span><span>:</span><span>{{xsMin}}</span><span>:</span><span>{{xsSec}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"title-box\" *ngIf=\"productData\" [ngClass]=\"{'title-top': !productData.xsprice.promote_price || productData.xsprice.promote_price == '0' || !productData.xsprice.promote_end_date}\">\r\n    <app-productlist *ngIf=\"productData.topData\" [data]=\"productData.topData\" [price]=\"productData.activestartprice\"></app-productlist>\r\n  </div>\r\n  <div class=\"fwbox line-height\">\r\n    <ion-list node=\"ios\" *ngIf=\"productData\">\r\n      <ion-item *ngIf=\"productData.yf\">\r\n        <ion-label>\r\n          <span margin-end>发货</span>\r\n          <span *ngIf=\"productData.yf > 0\">运费：{{productData.yf}}</span>\r\n          <span *ngIf=\"productData.yf == -1\">快递包邮</span>\r\n        </ion-label>\r\n        <!--<ion-note>销量3万</ion-note>-->\r\n      </ion-item>\r\n      <ion-item button  (click)=\"showfw()\">\r\n        <ion-label *ngIf=\"productData && productData.fw\">\r\n          <span margin-end>服务</span>\r\n          <span *ngFor=\"let item of productData.fw\"><img src=\"./assets/gou.svg\" alt=\"\">{{item}}</span>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item button (click)=\"showyh()\">\r\n        <ion-label *ngIf=\"productData\">\r\n          优惠\r\n          <app-yhbox style=\"margin-left: 10px\" *ngIf=\"!productData.promotion || productData.promotion.length === 0\" [title]=\"'优惠券自动抵扣'\"></app-yhbox>\r\n          <app-yhbox style=\"margin-left: 10px\" *ngFor=\"let item of productData.promotion\" [title]=\"item.act_name\" [des]=\"item.act_name\"></app-yhbox>\r\n          <app-yhbox style=\"margin-left: 10px\" *ngFor=\"let item of productData.volume_price_list\" [title]=\"'满' + item.number + '件' + item.price +'/件'\" [des]=\"'满' + item.number + '件' + item.price +'/件'\"></app-yhbox>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"productData && !productData.ishw && productData.mrseletestr && productData.isdelete == 0 && productData.onsale == 1\" button (click)=\"presentModal(1)\">\r\n        <ion-label>\r\n          <span margin-end>选择</span>\r\n          <span>{{productData.mrseletestr}}</span>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <div class=\"tc-box line-height\" *ngIf=\"productData && productData.ishw && productData.isdelete == 0 && productData.onsale == 1\">\r\n    <ion-list mode=\"ios\" lines=\"none\">\r\n      <ion-item button (click)=\"openpage()\">\r\n        <ion-label>选择套餐</ion-label>\r\n        <div solt=\"end\" class=\"right-div\" *ngIf=\"productData\">\r\n          <span *ngFor=\"let item of productData.month;let i = index;\">{{i !== 0 ? '/':''}}{{item}}月</span>\r\n          <span>可选</span>\r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div padding-start padding-end>\r\n      <ion-slides [options]=\"slideOpts\" *ngIf=\"productData\">\r\n        <ion-slide *ngFor=\"let item of productData.timetc; let i = index;\">\r\n          <app-seletebtn [block]=\"true\" [name]=\"item.label | goodTime\" [price]=\"item.minprice\" [isactive]=\"item.selected_key_ecshop68\"\r\n          (mclick)=\"setTimetc($event)\" [id]=\"item.id\"></app-seletebtn>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n  </div>\r\n  <div class=\"yhpj line-height\" *ngIf=\"productData && productData.pinglunnum && productData.pinglunnum > 0\">\r\n    <ion-list mode=\"ios\" lines=\"none\">\r\n      <ion-item button>\r\n        <ion-label>用户评价({{productData.pinglunnum | setnum}})</ion-label>\r\n        <span>全部评价</span>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-chip color=\"secondary\" *ngFor=\"let item of pingluntags\">\r\n          <ion-label color=\"dark\">{{item.tag_name}}({{item.tag_num}})</ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div *ngFor=\"let item of comment\">\r\n      <app-pjcontent [data]=\"item\"></app-pjcontent>\r\n    </div>\r\n    <!--<ion-list mode=\"ios\" lines=\"none\">-->\r\n      <!--<ion-item button>-->\r\n        <!--<ion-label>问大家</ion-label>-->\r\n        <!--<span>共9条问题</span>-->\r\n      <!--</ion-item>-->\r\n    <!--</ion-list>-->\r\n    <!--<ion-list lines=\"none\">-->\r\n      <!--<ion-item>-->\r\n        <!--<img src=\"./assets/wen.svg\" slot=\"start\" alt=\"\">-->\r\n        <!--<ion-label>-->\r\n          <!--<h2>什么时候出发</h2>-->\r\n          <!--<p>123个回答</p>-->\r\n        <!--</ion-label>-->\r\n      <!--</ion-item>-->\r\n      <!--<ion-item>-->\r\n        <!--<img src=\"./assets/wen.svg\" slot=\"start\" alt=\"\">-->\r\n        <!--<ion-label>-->\r\n          <!--<h2>除了套餐价格以外，还有其他费用吗</h2>-->\r\n          <!--<p>123个回答</p>-->\r\n        <!--</ion-label>-->\r\n      <!--</ion-item>-->\r\n    <!--</ion-list>-->\r\n  </div>\r\n  <div class=\"shop-information line-height\" *ngIf=\"supplier\">\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-thumbnail slot=\"start\">\r\n          <img [src]=\"supplier.shoplogo ? http.zdomain + supplier.shoplogo : 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h2>{{supplier.suppliername}}</h2>\r\n          <p>\r\n            <span *ngIf=\"suppid == 0\"><img class=\"kb\" src=\"./assets/kb.svg\" alt=\"\">平台特供</span>\r\n            <span *ngIf=\"supplier.yj > 0 && suppid != 0\"><img class=\"kb\" src=\"./assets/kb.svg\" alt=\"\">认证商家</span>\r\n            <span><img src=\"./assets/dz.svg\" alt=\"\">金牌口碑</span>\r\n          </p>\r\n        </ion-label>\r\n        <app-mybutton *ngIf=\"suppid != 0\" [bname]=\"'进店逛逛'\" slot=\"end\"  (click)=\"opendp()\"></app-mybutton>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-grid class=\"shop-des\" *ngIf=\"goodsnumobj\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <h2>{{supplier.goodsnumobj[1]}}</h2>\r\n          <p>{{supplier.goodsnumobj[0]}}</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2>{{supplier.fensiobj[1]}}</h2>\r\n          <p>{{supplier.fensiobj[0]}}</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2>{{supplier.haopingobj[1] == 0 ? '100' : supplier.haopingobj[1]}}%</h2>\r\n          <p>{{supplier.haopingobj[0]}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col *ngFor=\"let item of supplier.best_goods\" size=\"4\">\r\n          <app-tjproduct [price]=\"item.shop_price\" [name]=\"item.goods_name\"\r\n                         [src]=\"http.zdomain + item.thumb\" [id]=\"item.goods_id\" (tclick)=\"optenProduct($event)\"></app-tjproduct>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div class=\"cztc\" *ngIf=\"productData && productData.cztc.length > 0\">\r\n    <ion-list mode=\"ios\">\r\n      <ion-item button lines=\"none\" (click)=\"gototc()\">\r\n        <ion-label>超值套餐</ion-label>\r\n        <span>更多套餐</span>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div padding>\r\n      <ion-slides pager=\"true\" [options]=\"slideOptslv\" class=\"lxlg\"  (click)=\"gototc()\">\r\n        <ion-slide style=\"position: relative\">\r\n          <img class=\"tcbgimg\" src=\"../assets/tcbj.png\" alt=\"\">\r\n          <div class=\"tc-first-box\">\r\n            <div>原价：<span>{{productData.cztc[0].subtotal}}</span></div>\r\n            <div class=\"xj\">套餐价：<span>{{productData.cztc[0].package_price}}</span></div>\r\n            <div>节省：{{productData.cztc[0].saving}}</div>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide *ngFor=\"let data of productData.cztc[0].goods_list\">\r\n          <img style=\"width: 15px\" [src]=\"http.domain + 'themesmobile/68ecshopcom_mobile/images/goods/jia.png'\">\r\n          <img [src]=\"http.domain + data.goods_thumb\">\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"tw-content line-height\" padding>\r\n    <div class=\"title\">\r\n      <div class=\"box\" [ngClass]=\"{'active': pageNav === 1}\" (click)=\"gotoPoint(1)\">图文介绍<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && productData.ishw\" [ngClass]=\"{'active': pageNav === 2}\" (click)=\"gotoPoint(2)\">行程线路<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && !productData.ishw\" [ngClass]=\"{'active': pageNav === 2}\" (click)=\"gotoPoint(2)\">规格参数<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && productData.ishw\" [ngClass]=\"{'active': pageNav === 3}\" (click)=\"gotoPoint(3)\">费用说明<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && !productData.ishw\" [ngClass]=\"{'active': pageNav === 3}\" (click)=\"gotoPoint(3)\">包装售后<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && productData.ishw\" [ngClass]=\"{'active': pageNav === 4}\" (click)=\"gotoPoint(4)\">购买须知<span></span></div>\r\n    </div>\r\n    <div class=\"car-information\" *ngIf=\"productData && productData.hbxx && productData.ishw\">\r\n      <div class=\"tmcontent-title\">{{productData.hbxx.car | carorother}}信息</div>\r\n      <div class=\"car-des\">{{productData.hbxx.car | carorother}}信息仅供参考，具体信息可咨询商家</div>\r\n      <div class=\"information-box\">\r\n        <div class=\"box\">\r\n          <div class=\"title\"><img src=\"./assets/to.svg\" alt=\"\">{{productData.hbxx.start_city}}-{{productData.hbxx.forcity}} {{productData.hbxx.flight}}</div>\r\n          <div class=\"footer\">\r\n            <div class=\"time\">\r\n              <span>{{productData.hbxx.starttime | onlytime}}</span>\r\n              <span>{{productData.hbxx.startpoint}}</span>\r\n            </div>\r\n            <div class=\"center\">\r\n              <span></span>\r\n              <div>{{productData.hbxx.starttime | timedifference: productData.hbxx.arrivetime}}</div>\r\n            </div>\r\n            <div class=\"time\">\r\n              <span>{{productData.hbxx.arrivetime | onlytime}}</span>\r\n              <span>{{productData.hbxx.arrivepoint}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"box\">\r\n          <div class=\"title\"><img src=\"./assets/back.svg\" alt=\"\">{{productData.hbxx.fstartCity}}-{{productData.hbxx.fforcity}} {{productData.hbxx.fflight}}</div>\r\n          <div class=\"footer\">\r\n            <div class=\"time\">\r\n              <span>{{productData.hbxx.fstarttime | onlytime}}</span>\r\n              <span>{{productData.hbxx.fstartpoint}}</span>\r\n            </div>\r\n            <div class=\"center\">\r\n              <span></span>\r\n              <div>{{productData.hbxx.fstarttime | timedifference: productData.hbxx.farrivetime}}</div>\r\n            </div>\r\n            <div class=\"time\">\r\n              <span>{{productData.hbxx.farrivetime | onlytime}}</span>\r\n              <span>{{productData.hbxx.farrivepoint}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tmcontent-title\">图文介绍</div>\r\n    <div class=\"twjs-box tw-html-content\">\r\n      <div *ngIf=\"productData\" [innerHTML]=\"assembleHTML(productData.twcontent)\"></div>\r\n    </div>\r\n    <div class=\"tmcontent-title xcxl\" *ngIf=\"productData\">{{productData.ishw ? '行程线路' : '规格参数'}}</div>\r\n    <!--<div class=\"gmxz-des\">-->\r\n      <!--5天4晚|4个景点-->\r\n    <!--</div>-->\r\n    <div class=\"\" margin-top=\"5px\">\r\n      <ion-grid *ngIf=\"productData && !productData.ishw\">\r\n        <ion-list *ngIf=\"productData\">\r\n          <ion-item *ngIf=\"productData.goods_sn\">\r\n            <ion-label>\r\n              商品编号\r\n            </ion-label>\r\n            <div slot=\"end\">{{productData.goods_sn}}</div>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"productData.goods_brand\">\r\n            <ion-label>\r\n              商品品牌\r\n            </ion-label>\r\n            <div slot=\"end\">{{productData.goods_brand}}</div>\r\n          </ion-item>\r\n          <ion-item *ngFor=\"let item of productData.properties\">\r\n            <ion-label>{{item.name}}</ion-label>\r\n            <div slot=\"end\">{{item.value}}</div>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-grid>\r\n      <ion-slides [options]=\"slideOpts2\" *ngIf=\"productData && productData.xclx && productData.xclx.length > 1\">\r\n        <ion-slide *ngFor=\"let item of productData.xclx; let i = index;\">\r\n          <app-seletebtn [block]=\"true\" [name]=\"item.jtjy_name\" [isactive]=\"i === tcxqIndex\"\r\n                         (mclick)=\"setTccontentindex($event)\" [id]=\"i + 1\"></app-seletebtn>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n    <div class=\"xclx-box\" *ngIf=\"productData && productData.xclx && productData.xclx.length > 0 && productData.ishw\">\r\n      <app-xclx [data]=\"productData.xclx[tcxqIndex].attr\"></app-xclx>\r\n    </div>\r\n    <div class=\"tmcontent-title fysm\" *ngIf=\"productData\">{{productData.ishw ? '费用说明' : '包装售后'}}</div>\r\n    <div class=\"twjs-box\" *ngIf=\"productData && !productData.ishw\">\r\n      <h2><span></span>包装清单</h2>\r\n      <p>{{productData.goods_brief || '暂无'}}</p>\r\n      <h2><span></span>售后服务</h2>\r\n      <p>{{productData.goods_shfw ||  '暂无'}}</p>\r\n      <h2><span></span>价格说明</h2>\r\n      <div *ngFor=\"let item of productData.ptjgsm;let i = index;\" style=\"color: #999;font-size: 12px;\">\r\n        {{(i + 1) + '、' + item}}\r\n      </div>\r\n    </div>\r\n    <div class=\"gmxz-des\" *ngIf=\"productData && productData.ishw\">\r\n      费用透明，全程0购物\r\n    </div>\r\n    <div class=\"twjs-box\" *ngIf=\"productData && productData.ishw\">\r\n      <h2><span></span>费用包含</h2>\r\n      <p>下单前请注意：为了确保您顺利出行，请下单前来电确认余位和行程。</p>\r\n      <div class=\"fybh-box\">\r\n        <div *ngIf=\"productData && productData.fybh\" [innerHTML]=\"assembleHTML(productData.fybh)\"></div>\r\n      </div>\r\n      <h2><span></span>费用不包含</h2>\r\n      <div class=\"fybh-box\">\r\n        <div *ngIf=\"productData && productData.fybbh\" [innerHTML]=\"assembleHTML(productData.fybbh)\"></div>\r\n      </div>\r\n      <h2><span></span>购物说明</h2>\r\n      <div class=\"fybh-box\">\r\n        <div *ngIf=\"productData && productData.gmsm\" [innerHTML]=\"assembleHTML(productData.gmsm)\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tmcontent-title gmxz\" *ngIf=\"productData && productData.ishw\">购买须知</div>\r\n    <div class=\"gmxz-des\" *ngIf=\"productData && productData.ishw\">\r\n      全程为您服务，让您无忧出行\r\n    </div>\r\n    <div class=\"twjs-box\" *ngIf=\"productData && productData.ishw\">\r\n      <h2><span></span>退款说明</h2>\r\n      <p *ngIf=\"productData && productData.tkgx == 1\">\r\n        商家确认前随时可退，商家确认后将不支持退款\r\n      </p>\r\n      <p *ngIf=\"productData && productData.tkgx == 2\">\r\n        商家确认前随时可退，商家确认后将按照下列规则退款：\r\n      </p>\r\n      <ul class=\"tkxz\" *ngIf=\"productData && productData.tksm\">\r\n        <li *ngFor=\"let item of productData.tksm;let i = index\">\r\n          {{i + 1}}.出发日期前{{item.beforetime}}天(含),扣除订单金额&nbsp;<ion-text color=\"danger\">{{item.kcbl}}%</ion-text>&nbsp;作为卖家损失费\r\n        </li>\r\n      </ul>\r\n      <ul class=\"tkxz\" *ngIf=\"productData && (!productData.tksm || productData.tksm.length === 0)\">\r\n        <li>\r\n          出行前随时可退\r\n        </li>\r\n      </ul>\r\n      <h2><span></span>温馨提示</h2>\r\n      <div *ngIf=\"productData && productData.gmxz\" [innerHTML]=\"assembleHTML(productData.gmxz)\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"klyk\" *ngIf=\"productData && productData.related_goods.length > 0\">\r\n    看了又看\r\n  </div>\r\n  <ion-grid *ngIf=\"productData\">\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let item of productData.related_goods\" size=\"4\">\r\n        <app-tjproduct [price]=\"item.shop_price\" [name]=\"item.goods_name\"\r\n                       [src]=\"http.zdomain + item.goods_thumb\" [id]=\"item.goods_id\" (tclick)=\"optenProduct($event)\"></app-tjproduct>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" *ngIf=\"productData\">\r\n    <div class=\"footer-content\">\r\n      <div class=\"left\">\r\n        <div class=\"box\"><img src=\"./assets/kf-icon.svg\" alt=\"\"><span>客服</span></div>\r\n        <div class=\"box\" (click)=\"opendp(1)\"><img src=\"./assets/dianpu-icon.svg\" alt=\"\"><span>店铺</span></div>\r\n        <div class=\"box\" (click)=\"scgoods()\">\r\n          <img *ngIf=\"productData.issc !== 1\" src=\"./assets/sc-icon.svg\" alt=\"\">\r\n          <img *ngIf=\"productData.issc === 1\" src=\"./assets/icon/sc.svg\" alt=\"\">\r\n          <span>收藏</span></div>\r\n      </div>\r\n      <div class=\"right\" (click)=\"openpage()\"\r\n           [ngClass]=\"{'gray': productData.month && productData.month.length == 0 || productData.isdelete == 1 || productData.onsale == 0}\"\r\n           *ngIf=\"productData.ishw || productData.isdelete == 1 || productData.onsale == 0\">\r\n        {{productData.isdelete == 1 ? '已删除' : productData.onsale == 0 ? '已下架' : '立即预订'}}\r\n      </div>\r\n      <div class=\"right-goods\" *ngIf=\"!productData.ishw && productData.isdelete != 1 && productData.onsale != 0\">\r\n        <div class=\"left\" (click)=\"presentModal(2)\">\r\n          加入购物车\r\n        </div>\r\n        <div class=\"right\" (click)=\"presentModal(3)\">\r\n          立即购买\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/productcontent/productcontent.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/productcontent/productcontent.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px;\n  height: 36px; }\n  .search-bar .left {\n    width: var(--ion-statusbar-left);\n    font-size: var(--ion-icon-big);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .search-bar .left img {\n      width: 22px;\n      margin-left: 5px; }\n  .search-bar .right {\n    width: 52px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n  .search-bar .right div.round {\n      background-color: rgba(0, 0, 0, 0.6);\n      width: 21px;\n      height: 21px;\n      border-radius: 50%;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center; }\n  .search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px;\n    height: 27px; }\n  ion-content {\n  --background: var(--ion-gray-background-color); }\n  app-seletebtn {\n  width: 100%; }\n  .yhtime-box {\n  margin-top: -20px;\n  position: relative;\n  z-index: 100;\n  width: 100%; }\n  .yhtime-box img {\n    width: 100%; }\n  .yhtime-box .text-content {\n    position: absolute;\n    width: 100%;\n    height: 50%;\n    top: 10%;\n    left: 0;\n    display: flex;\n    align-items: stretch; }\n  .yhtime-box .text-content > div {\n      flex: 1; }\n  .yhtime-box .text-content .left {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: flex-end;\n      color: #fff; }\n  .yhtime-box .text-content .left span {\n        display: inline-block;\n        font-size: var(--ion-text); }\n  .yhtime-box .text-content .left span:first-of-type {\n          padding-left: 15px;\n          margin-right: 10px; }\n  .yhtime-box .text-content .left span:last-of-type {\n          font-size: 26px;\n          font-weight: 600;\n          margin-bottom: -3px; }\n  .yhtime-box .text-content .right {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end;\n      align-items: flex-end;\n      font-size: var(--ion-text);\n      color: #fff;\n      padding-right: 15px; }\n  .yhtime-box .text-content .right .time-box {\n        margin-left: 5px; }\n  .yhtime-box .text-content .right .time-box span:nth-of-type(odd) {\n          background-color: #fff;\n          padding: 0 2px;\n          border-radius: 3px;\n          color: #1DB9BD;\n          margin: 0 3px; }\n  .top {\n  margin-top: var(--ion-platform-margin-top);\n  background-color: #fff; }\n  .top ion-slides {\n    --bullet-background-active: #fff; }\n  .title-box {\n  background-color: #fff;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  position: relative;\n  margin-top: -15px;\n  z-index: 0; }\n  .title-box.title-top {\n    margin-top: -12px; }\n  .line-height {\n  margin-top: 8px; }\n  .fwbox {\n  background: #fff; }\n  .fwbox ion-list {\n    margin-bottom: 0; }\n  .fwbox ion-list ion-item {\n      --background: #fff; }\n  .fwbox ion-list ion-item ion-label {\n        font-size: var(--ion-text);\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center; }\n  .fwbox ion-list ion-item ion-label span {\n          display: flex;\n          flex-direction: row;\n          justify-content: flex-start;\n          align-items: center; }\n  .fwbox ion-list ion-item ion-label img {\n          width: 13px;\n          margin-right: 5px; }\n  .fwbox ion-list ion-item:last-of-type ion-label app-yhbox {\n        margin-left: 8px; }\n  .fwbox ion-list ion-item:last-of-type ion-label app-yhbox:first-of-type {\n          margin-left: 15px; }\n  .tc-box, .yhpj {\n  background-color: #fff;\n  padding-bottom: 15px; }\n  .tc-box ion-list ion-item, .yhpj ion-list ion-item {\n    --background: #fff; }\n  .tc-box ion-list ion-item .right-div, .yhpj ion-list ion-item .right-div {\n      display: flex; }\n  .tc-box ion-list ion-item span, .yhpj ion-list ion-item span {\n      font-size: var(--ion-sm-text);\n      color: var(--ion-color-primary); }\n  ion-list {\n  margin-bottom: 0; }\n  .shop-information {\n  padding: 15px 0;\n  background-color: #fff; }\n  .shop-information ion-label span {\n    margin-right: 10px; }\n  .shop-information ion-label img {\n    width: 15px;\n    margin-right: 5px; }\n  .shop-information ion-label img.kb {\n      margin-bottom: -2px; }\n  .shop-des ion-col {\n  text-align: center; }\n  .shop-des h2 {\n  font-size: var(--ion-title);\n  margin-bottom: 0; }\n  .shop-des p {\n  font-size: var(--ion-sm-text);\n  margin-top: 5px;\n  color: var(--ion-color-medium); }\n  .isscrollcontent {\n  position: fixed;\n  background-color: #fff;\n  width: 100%;\n  top: 44px;\n  left: 0;\n  z-index: 1000;\n  padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0; }\n  .tw-content2 {\n  position: fixed;\n  top: var(--ion-platform-margin-height);\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  --padding-bottom: 0;\n  padding-bottom: 0;\n  background-color: #fff;\n  box-shadow: 0 2px 3px rgba(var(--ion-color-medium-rgb), 0.4);\n  border-bottom: 1px solid var(--ion-color-light); }\n  .tw-content2 > .title {\n    display: flex; }\n  .tw-content2 > .title > .box {\n      flex: 1;\n      color: var(--ion-color-dark);\n      font-size: var(--ion-text);\n      padding-bottom: 15px;\n      text-align: center; }\n  .tw-content2 > .title > .box.active {\n        font-weight: 600;\n        position: relative; }\n  .tw-content2 > .title > .box.active span {\n          width: 20px;\n          height: 3px;\n          border-radius: 1.5px;\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          margin-left: -10px;\n          background-color: var(--ion-color-secondary); }\n  .tw-content {\n  background-color: #fff; }\n  .tw-content > .title {\n    display: flex;\n    border-bottom: 1px solid var(--ion-color-light); }\n  .tw-content > .title > .box {\n      flex: 1;\n      color: var(--ion-color-dark);\n      font-size: var(--ion-text);\n      padding-bottom: 15px;\n      text-align: center; }\n  .tw-content > .title > .box.active {\n        font-weight: 600;\n        position: relative; }\n  .tw-content > .title > .box.active span {\n          width: 20px;\n          height: 3px;\n          border-radius: 1.5px;\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          margin-left: -10px;\n          background-color: var(--ion-color-secondary); }\n  .tw-content .car-information .car-des {\n    font-size: var(--ion-sm-text);\n    color: var(--ion-color-medium);\n    text-align: center;\n    margin-top: 8px;\n    margin-bottom: 15px; }\n  .tw-content .car-information .information-box {\n    border: 1px solid var(--ion-color-light);\n    border-radius: 5px;\n    padding: 15px;\n    color: var(--ion-color-dark); }\n  .tw-content .car-information .information-box .box:first-of-type {\n      border-bottom: 1px solid var(--ion-color-light);\n      padding-bottom: 15px;\n      margin-bottom: 15px; }\n  .tw-content .car-information .information-box .title {\n      font-size: var(--ion-text);\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      padding-bottom: 15px; }\n  .tw-content .car-information .information-box .title img {\n        width: 19px;\n        margin-right: 5px; }\n  .tw-content .car-information .information-box .footer {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: flex-start; }\n  .tw-content .car-information .information-box .footer .center {\n        flex: 1;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-left: 5px;\n        margin-right: 5px; }\n  .tw-content .car-information .information-box .footer .center span {\n          position: absolute;\n          width: 100%;\n          left: 0;\n          border-bottom: 1px solid var(--ion-color-light);\n          z-index: 0; }\n  .tw-content .car-information .information-box .footer .center div {\n          display: inline-block;\n          border: 1px solid var(--ion-color-light);\n          padding: 0 5px;\n          font-size: var(--ion-sm-text);\n          height: 22px;\n          border-radius: 15px;\n          background-color: #fff;\n          position: relative;\n          z-index: 1; }\n  .tw-content .car-information .information-box .footer .time {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center; }\n  .tw-content .car-information .information-box .footer .time span:first-of-type {\n          font-size: var(--ion-title);\n          font-weight: 600; }\n  .tw-content .car-information .information-box .footer .time span:last-of-type {\n          font-size: var(--ion-sm-text); }\n  .tw-content .tmcontent-title {\n    font-size: var(--ion-big-title);\n    font-weight: 600;\n    color: var(--ion-color-dark);\n    text-align: center;\n    margin-top: 30px; }\n  .tw-content .twjs-box h2 {\n    font-size: var(--ion-title);\n    font-weight: 600;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .tw-content .twjs-box h2 span {\n      width: 5px;\n      height: 5px;\n      background-color: var(--ion-color-secondary);\n      display: inline-block;\n      margin-right: 5px; }\n  .tw-content .twjs-box p {\n    font-size: var(--ion-sm-text);\n    color: var(--ion-color-medium); }\n  .tw-content .twjs-box div {\n    font-size: var(--ion-text);\n    margin: 20px 0 10px; }\n  .tw-content .twjs-box div ol {\n      padding: 0; }\n  .tw-content .twjs-box .fybh-box {\n    list-style: none;\n    color: var(--ion-color-dark) !important;\n    padding: 0; }\n  .tw-content .gmxz-des {\n    font-size: var(--ion-sm-text);\n    color: var(--ion-color-medium);\n    text-align: center;\n    margin-top: 8px; }\n  ion-footer {\n  background-color: #fff; }\n  ion-footer ion-toolbar {\n    --padding-bottom: 0;\n    --padding-end: 0;\n    --padding-start: 0;\n    --padding-top: 0; }\n  ion-footer .footer-content {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: stretch; }\n  ion-footer .footer-content .left {\n      padding: 5px 0;\n      width: 44%;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center; }\n  ion-footer .footer-content .left .box {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        font-size: var(--ion-tab-sm-text);\n        color: var(--ion-color-medium); }\n  ion-footer .footer-content .left .box img {\n          width: 20px; }\n  ion-footer .footer-content .right {\n      flex: 1;\n      background-color: var(--ion-color-danger);\n      color: #fff;\n      font-size: var(--ion-title);\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n  ion-footer .footer-content .right:active {\n        background-color: var(--ion-color-danger-tint); }\n  ion-footer .footer-content .right.gray {\n        background-color: var(--ion-color-medium); }\n  ion-footer .footer-content .right-goods {\n      padding-right: 10px;\n      flex: 1;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      font-size: 11px; }\n  ion-footer .footer-content .right-goods > div {\n        flex: 1;\n        font-size: var(--ion-sm-text);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 26px; }\n  ion-footer .footer-content .right-goods .left {\n        background-color: var(--ion-color-secondary);\n        color: #fff;\n        border-top-left-radius: 13px;\n        border-bottom-left-radius: 13px; }\n  ion-footer .footer-content .right-goods .left:active {\n          background-color: var(--ion-color-secondary-tint); }\n  ion-footer .footer-content .right-goods .right {\n        border-top-right-radius: 13px;\n        border-bottom-right-radius: 13px; }\n  .klyk {\n  font-size: var(--ion-text);\n  color: var(--ion-color-medium);\n  text-align: center;\n  margin-top: 20px; }\n  ul.tkxz {\n  list-style: none;\n  padding-left: 5px;\n  font-size: var(--ion-text);\n  color: var(--ion-color-dark); }\n  ul.tkxz li {\n    line-height: 18px;\n    margin-bottom: 8px; }\n  .show-0 {\n  --opacity: 0; }\n  .show-1 {\n  --opacity: 0.01; }\n  .show-2 {\n  --opacity: 0.02; }\n  .show-3 {\n  --opacity: 0.03; }\n  .show-4 {\n  --opacity: 0.04; }\n  .show-5 {\n  --opacity: 0.05; }\n  .show-6 {\n  --opacity: 0.06; }\n  .show-7 {\n  --opacity: 0.07; }\n  .show-8 {\n  --opacity: 0.08; }\n  .show-9 {\n  --opacity: 0.09; }\n  .show-10 {\n  --opacity: 0.1; }\n  .show-11 {\n  --opacity: 0.11; }\n  .show-12 {\n  --opacity: 0.12; }\n  .show-13 {\n  --opacity: 0.13; }\n  .show-14 {\n  --opacity: 0.14; }\n  .show-15 {\n  --opacity: 0.15; }\n  .show-16 {\n  --opacity: 0.16; }\n  .show-17 {\n  --opacity: 0.17; }\n  .show-18 {\n  --opacity: 0.18; }\n  .show-19 {\n  --opacity: 0.19; }\n  .show-20 {\n  --opacity: 0.2; }\n  .show-21 {\n  --opacity: 0.21; }\n  .show-22 {\n  --opacity: 0.22; }\n  .show-23 {\n  --opacity: 0.23; }\n  .show-24 {\n  --opacity: 0.24; }\n  .show-25 {\n  --opacity: 0.25; }\n  .show-26 {\n  --opacity: 0.26; }\n  .show-27 {\n  --opacity: 0.27; }\n  .show-28 {\n  --opacity: 0.28; }\n  .show-29 {\n  --opacity: 0.29; }\n  .show-30 {\n  --opacity: 0.3; }\n  .show-31 {\n  --opacity: 0.31; }\n  .show-32 {\n  --opacity: 0.32; }\n  .show-33 {\n  --opacity: 0.33; }\n  .show-34 {\n  --opacity: 0.34; }\n  .show-35 {\n  --opacity: 0.35; }\n  .show-36 {\n  --opacity: 0.36; }\n  .show-37 {\n  --opacity: 0.37; }\n  .show-38 {\n  --opacity: 0.38; }\n  .show-39 {\n  --opacity: 0.39; }\n  .show-40 {\n  --opacity: 0.4; }\n  .show-41 {\n  --opacity: 0.41; }\n  .show-42 {\n  --opacity: 0.42; }\n  .show-43 {\n  --opacity: 0.43; }\n  .show-44 {\n  --opacity: 0.44; }\n  .show-45 {\n  --opacity: 0.45; }\n  .show-46 {\n  --opacity: 0.46; }\n  .show-47 {\n  --opacity: 0.47; }\n  .show-48 {\n  --opacity: 0.48; }\n  .show-49 {\n  --opacity: 0.49; }\n  .show-50 {\n  --opacity: 0.5; }\n  .show-51 {\n  --opacity: 0.51; }\n  .show-52 {\n  --opacity: 0.52; }\n  .show-53 {\n  --opacity: 0.53; }\n  .show-54 {\n  --opacity: 0.54; }\n  .show-55 {\n  --opacity: 0.55; }\n  .show-56 {\n  --opacity: 0.56; }\n  .show-57 {\n  --opacity: 0.57; }\n  .show-58 {\n  --opacity: 0.58; }\n  .show-59 {\n  --opacity: 0.59; }\n  .show-60 {\n  --opacity: 0.6; }\n  .show-61 {\n  --opacity: 0.61; }\n  .show-62 {\n  --opacity: 0.62; }\n  .show-63 {\n  --opacity: 0.63; }\n  .show-64 {\n  --opacity: 0.64; }\n  .show-65 {\n  --opacity: 0.65; }\n  .show-66 {\n  --opacity: 0.66; }\n  .show-67 {\n  --opacity: 0.67; }\n  .show-68 {\n  --opacity: 0.68; }\n  .show-69 {\n  --opacity: 0.69; }\n  .show-70 {\n  --opacity: 0.7; }\n  .show-71 {\n  --opacity: 0.71; }\n  .show-72 {\n  --opacity: 0.72; }\n  .show-73 {\n  --opacity: 0.73; }\n  .show-74 {\n  --opacity: 0.74; }\n  .show-75 {\n  --opacity: 0.75; }\n  .show-76 {\n  --opacity: 0.76; }\n  .show-77 {\n  --opacity: 0.77; }\n  .show-78 {\n  --opacity: 0.78; }\n  .show-79 {\n  --opacity: 0.79; }\n  .show-80 {\n  --opacity: 0.8; }\n  .show-81 {\n  --opacity: 0.81; }\n  .show-82 {\n  --opacity: 0.82; }\n  .show-83 {\n  --opacity: 0.83; }\n  .show-84 {\n  --opacity: 0.84; }\n  .show-85 {\n  --opacity: 0.85; }\n  .show-86 {\n  --opacity: 0.86; }\n  .show-87 {\n  --opacity: 0.87; }\n  .show-88 {\n  --opacity: 0.88; }\n  .show-89 {\n  --opacity: 0.89; }\n  .show-90 {\n  --opacity: 0.9; }\n  .show-91 {\n  --opacity: 0.91; }\n  .show-92 {\n  --opacity: 0.92; }\n  .show-93 {\n  --opacity: 0.93; }\n  .show-94 {\n  --opacity: 0.94; }\n  .show-95 {\n  --opacity: 0.95; }\n  .show-96 {\n  --opacity: 0.96; }\n  .show-97 {\n  --opacity: 0.97; }\n  .show-98 {\n  --opacity: 0.98; }\n  .show-99 {\n  --opacity: 0.99; }\n  .show-100 {\n  --opacity: 1; }\n  ion-modal, .modal {\n  --height: 70%; }\n  .cztc {\n  background-color: #fff;\n  margin-top: 10px; }\n  .cztc .tcbgimg {\n    border-radius: 5px; }\n  .cztc .tc-first-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--ion-text);\n    line-height: 22px; }\n  .cztc .tc-first-box > div:first-of-type span {\n      text-decoration: line-through; }\n  .cztc .tc-first-box .xj {\n      color: var(--ion-color-danger); }\n  .cztc .tc-first-box .xj span {\n        font-size: var(--ion-title); }\n  .tw-html-content img {\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9wcm9kdWN0Y29udGVudC9wcm9kdWN0Y29udGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZLEVBQUE7RUFQZDtJQVNJLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7RUFkdkI7TUFnQk0sV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBakJ0QjtJQXFCSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTtFQXhCbEM7TUEwQk0sb0NBQWdDO01BQ2hDLFdBQVc7TUFDWCxZQUFZO01BR1osa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLG1CQUFtQixFQUFBO0VBbkN6QjtJQTRDSSxvQkFBb0I7SUFDcEIsT0FBTztJQUNQLGNBQWM7SUFDZCxZQUFZLEVBQUE7RUFNaEI7RUFDRSw4Q0FBYSxFQUFBO0VBSWY7RUFDRSxXQUFXLEVBQUE7RUFFYjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQTtFQUpiO0lBTUksV0FBVyxFQUFBO0VBTmY7SUFTSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxRQUFRO0lBQ1IsT0FBTztJQUNQLGFBQWE7SUFDYixvQkFBb0IsRUFBQTtFQWZ4QjtNQWlCTSxPQUFPLEVBQUE7RUFqQmI7TUFvQk0sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiwyQkFBMkI7TUFDM0IscUJBQXFCO01BQ3JCLFdBQVcsRUFBQTtFQXhCakI7UUEwQlEscUJBQXFCO1FBQ3JCLDBCQUEwQixFQUFBO0VBM0JsQztVQTZC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QTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsY0FBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGNBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixjQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsZUFBVSxFQUFBO0VBQTFCO0VBQWdCLGVBQVUsRUFBQTtFQUExQjtFQUFnQixlQUFVLEVBQUE7RUFBMUI7RUFBZ0IsWUFBVSxFQUFBO0VBRTVCO0VBQ0UsYUFBUyxFQUFBO0VBRVg7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7RUFGbEI7SUFPSSxrQkFBa0IsRUFBQTtFQVB0QjtJQVVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQUs7SUFDTCxPQUFPO0lBRVAsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixpQkFBaUIsRUFBQTtFQXJCckI7TUF3QlEsNkJBQTRCLEVBQUE7RUF4QnBDO01BNEJNLDhCQUE4QixFQUFBO0VBNUJwQztRQThCUSwyQkFBMkIsRUFBQTtFQU1uQztFQUVJLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdGNvbnRlbnQvcHJvZHVjdGNvbnRlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgLmxlZnQge1xyXG4gICAgd2lkdGg6IHZhcigtLWlvbi1zdGF0dXNiYXItbGVmdCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1pY29uLWJpZyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBkaXYucm91bmQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgICAgd2lkdGg6IDIxcHg7XHJcbiAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLy9pbWcge1xyXG4gICAgLy8gIHdpZHRoOiAyMnB4O1xyXG4gICAgLy8gIGhlaWdodDogMjJweDtcclxuICAgIC8vICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgLy99XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgfVxyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAvLy0tYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAvL3RvcDogLTY1cHg7XHJcbn1cclxuXHJcbmFwcC1zZWxldGVidG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi55aHRpbWUtYm94IHtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnRleHQtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgJj5kaXYge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLmxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNweDtcclxuICAgICAgICAgIC8vbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAudGltZS1ib3gge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgc3BhbjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDJweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIGNvbG9yOiAjMURCOUJEO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRvcCB7XHJcbiAgLy9tYXJnaW4tdG9wOiAtNDRweDtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBpb24tc2xpZGVzIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZmZmO1xyXG4gIH1cclxufVxyXG4udGl0bGUtYm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgJi50aXRsZS10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgfVxyXG59XHJcbi5saW5lLWhlaWdodCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4uZndib3gge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgLy8gIGlvbi1sYWJlbCB7XHJcbiAgICAgIC8vICAgIHNwYW4ge1xyXG4gICAgICAvLyAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAvLyAgICB9XHJcbiAgICAgIC8vICB9XHJcbiAgICAgIC8vfVxyXG4gICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGFwcC15aGJveCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRjLWJveCwgLnlocGoge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIC5yaWdodC1kaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tbGlzdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uc2hvcC1pbmZvcm1hdGlvbiB7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICYua2Ige1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnNob3AtZGVzIHtcclxuICBpb24tY29sIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICB9XHJcbn1cclxuLmlzc2Nyb2xsY29udGVudCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOjQ0cHg7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcbi8vLnR3LWNvbnRlbnQyIHtcclxuLy8gIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gIHRvcDogMDtcclxuLy8gIGxlZnQ6IDA7XHJcbi8vICB3aWR0aDogMTAwJTtcclxuLy8gIHotaW5kZXg6IDEwMDtcclxuLy8gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4vLyAgbWFyZ2luLXRvcDogM3B4O1xyXG4vLyAgcGFkZGluZy1sZWZ0OiAwO1xyXG4vLyAgcGFkZGluZy1yaWdodDogMDtcclxuLy8gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4vLyAgLnRpdGxlIHtcclxuLy8gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuLy8gIH1cclxuLy99XHJcbi50dy1jb250ZW50MiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi1oZWlnaHQpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgLy9vcGFjaXR5OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAuNCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgJj4udGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICY+LmJveCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMS41cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnR3LWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgJj4udGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgJj4uYm94IHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyLWluZm9ybWF0aW9uIHtcclxuXHJcbiAgICAuY2FyLWRlcyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmluZm9ybWF0aW9uLWJveCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAuYm94IHtcclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTlweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aW1lIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50bWNvbnRlbnQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tYmlnLXRpdGxlKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgLnR3anMtYm94IHtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICAgIGRpdiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBtYXJnaW46IDIwcHggMCAxMHB4O1xyXG4gICAgICBvbCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZ5YmgtYm94IHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgLmdteHotZGVzIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIH1cclxufVxyXG5pb24tZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICB9XHJcbiAgLmZvb3Rlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAubGVmdCB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICB3aWR0aDogNDQlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGFiLXNtLXRleHQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQpO1xyXG4gICAgICB9XHJcbiAgICAgICYuZ3JheSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodC1nb29kcyB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICY+ZGl2IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxlZnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEzcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTNweDtcclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucmlnaHQge1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxM3B4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5rbHlrIHtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxudWwudGt4eiB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIGxpIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbn1cclxuQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAxMDAge1xyXG4gIC5zaG93LSN7JGl9IHsgICAtLW9wYWNpdHk6ICN7JGkgLyAxMDB9OyB9XHJcbn1cclxuaW9uLW1vZGFsLCAubW9kYWwgIHtcclxuICAtLWhlaWdodDogNzAlO1xyXG59XHJcbi5jenRjIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gIC50Y2JnaW1nIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC50Yy1maXJzdC1ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICAvL21hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAmPmRpdjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnhqIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50dy1odG1sLWNvbnRlbnQge1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/productcontent/productcontent.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/productcontent/productcontent.page.ts ***!
  \*************************************************************/
/*! exports provided: ProductcontentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductcontentPage", function() { return ProductcontentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_getproduct_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/getproduct.service */ "./src/app/services/getproduct.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_supplierlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/supplierlist.service */ "./src/app/services/supplierlist.service.ts");
/* harmony import */ var _components_goodsattr_goodsattr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/goodsattr/goodsattr.component */ "./src/app/components/goodsattr/goodsattr.component.ts");
/* harmony import */ var _components_goods_contentnav_goods_contentnav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/goods-contentnav/goods-contentnav.component */ "./src/app/components/goods-contentnav/goods-contentnav.component.ts");
/* harmony import */ var _services_lljl_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/lljl.service */ "./src/app/services/lljl.service.ts");
/* harmony import */ var _services_gwc_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/gwc.service */ "./src/app/services/gwc.service.ts");
/* harmony import */ var _services_collelist_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/collelist.service */ "./src/app/services/collelist.service.ts");
/* harmony import */ var _services_xcsclist_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/xcsclist.service */ "./src/app/services/xcsclist.service.ts");







// import {ShopContentService} from "../../services/shop-content.service";

// import { UserService } from '../../services/user.service';






var ProductcontentPage = /** @class */ (function () {
    // mrattrarr: string[]; // 默认选中属性
    // mrseletestr: string;
    function ProductcontentPage(nav, el, route, http, activeroute, sanitizer, getProduct, actionSheetController, supplierlist, modalController, popoverController, lljlfn, gwcfn, collefn, xcxlfn) {
        this.nav = nav;
        this.el = el;
        this.route = route;
        this.http = http;
        this.activeroute = activeroute;
        this.sanitizer = sanitizer;
        this.getProduct = getProduct;
        this.actionSheetController = actionSheetController;
        this.supplierlist = supplierlist;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.lljlfn = lljlfn;
        this.gwcfn = gwcfn;
        this.collefn = collefn;
        this.xcxlfn = xcxlfn;
        this.slideOptslv = {
            // slidesOffsetBefore : 50,
            slidesPerView: 3.2,
            slidesPerGroup: 1,
            spaceBetween: 10,
            pagination: ''
            // slidesOffsetAfter : 100,
        };
    }
    ProductcontentPage.prototype.ionViewWillEnter = function () {
        console.log('要进来了');
    };
    ProductcontentPage.prototype.ionViewDidEnter = function () {
        console.log('进来了');
        this.setInit();
    };
    ProductcontentPage.prototype.ngOnInit = function () {
        console.log('准备进来了');
        this.oldId = [];
        this.oldsuppid = [];
        this.slideOpts = {
            slidesPerView: 4.5,
            slidesPerGroup: 1,
            spaceBetween: 5,
            zoom: {
                toggle: false
            }
        };
        this.slideOpts2 = {
            slidesPerView: 4.2,
            slidesPerGroup: 1,
            spaceBetween: 5,
            zoom: {
                toggle: false
            }
        };
        this.cleardate();
    };
    ProductcontentPage.prototype.doRefresh = function (event) {
        this.cleardate();
        var id = this.oldId[this.oldId.length - 1];
        var suppid = this.oldsuppid[this.oldsuppid.length - 1];
        // this.setInit(this.oldId[this.oldId.length - 1], this.oldsuppid[this.oldsuppid.length - 1]);
        this.pageNav = 1;
        this.isshowtopnav = false;
        this.toolbaropacity = '0';
        this.comment = [];
        this.tcxqIndex = 0;
        this.pid = id;
        this.getData(id).then(function (res) {
            event.target.complete();
        }).catch(function (err2) {
            event.target.complete();
        });
        this.getComment(id);
        this.suppid = suppid;
        this.getsupplier();
    };
    ProductcontentPage.prototype.setInit = function (id, suppid) {
        var _this = this;
        if (id === void 0) { id = '-1'; }
        if (suppid === void 0) { suppid = '0'; }
        this.toolbaropacity = '0';
        this.comment = [];
        this.tcxqIndex = 0;
        if (id != '-1') {
            this.pid = id;
            this.getData(id);
            this.getComment(id);
            this.suppid = suppid;
            this.getsupplier();
        }
        else {
            this.activeroute.queryParams.subscribe(function (params) {
                var id = params['id'];
                if (_this.oldId.length > 0 && _this.oldId[_this.oldId.length - 1] == id) {
                    return false;
                }
                _this.suppid = params['suppid'] || '-1';
                if (_this.oldsuppid.length > 0 && _this.suppid === '-1') {
                    _this.suppid = _this.oldsuppid[_this.oldsuppid.length - 1];
                }
                _this.pid = id;
                _this.oldId.push(_this.pid);
                _this.getsupplier();
                _this.getData(id);
                _this.getComment(id);
                _this.lljlfn.addjl(id);
            });
        }
        this.pageNav = 1;
        this.isshowtopnav = false;
    };
    ProductcontentPage.prototype.setTccontentindex = function ($event) {
        this.tcxqIndex = $event.id - 1;
    };
    // 获取店铺信息
    ProductcontentPage.prototype.getsupplier = function () {
        var _this = this;
        this.supplierlist.getData(this.suppid, this.pid).then(function (res) {
            if (_this.suppid == '-1') {
                _this.suppid = res.suppid;
            }
            _this.supplier = res;
        }).catch(function (err) {
            console.error(err);
        });
    };
    ProductcontentPage.prototype.getData = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProduct.getProduct(id).then(function (res) {
                            _this.productData = res;
                            if (_this.productData.xsprice.promote_price && _this.productData.xsprice.promote_price !== '0'
                                && _this.productData.xsprice.promote_end_date) {
                                _this.setXstime();
                            }
                        }).catch(function (err) {
                            // this.goBack()
                            console.error(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    ProductcontentPage.prototype.getComment = function (id) {
        var _this = this;
        this.http.getData(this.http.getGoodcomment, { 'goods_id': id }).subscribe(function (res) {
            _this.pingluntags = res['data']['tags'];
            _this.comment = res['data']['comment'];
        }, function (err) { });
    };
    ProductcontentPage.prototype.assembleHTML = function (strHTML) {
        return this.sanitizer.bypassSecurityTrustHtml(strHTML);
    };
    ProductcontentPage.prototype.setTimetc = function ($event) {
        this.getProduct.clickOuttime($event.id);
    };
    ProductcontentPage.prototype.setXstime = function () {
        var _this = this;
        var setTime = setInterval(function () {
            var endDate = _this.productData.xsprice.promote_end_date;
            var nowDate = Date.parse((new Date()).toString());
            var totalSeconds = parseInt(((Number(endDate) - Number(nowDate)) / 1000).toString(), 10);
            var days = Math.floor(totalSeconds / (60 * 60 * 24));
            var modulo = totalSeconds % (60 * 60 * 24);
            var hours = Math.floor(modulo / (60 * 60));
            modulo = modulo % (60 * 60);
            var minutes = Math.floor(modulo / 60);
            var seconds = parseInt((modulo % 60).toString(), 10);
            if (hours >= 10) {
                _this.xsHouse = hours.toString();
            }
            else {
                _this.xsHouse = "0" + hours;
            }
            if (minutes >= 10) {
                _this.xsMin = minutes.toString();
            }
            else {
                _this.xsMin = "0" + minutes;
            }
            if (seconds >= 10) {
                _this.xsSec = seconds.toString();
            }
            else {
                _this.xsSec = "0" + seconds;
            }
            _this.xsday = days.toString();
            if (days === 0 && hours === 0 && minutes === 0 && seconds <= 0) {
                clearInterval(setTime);
            }
        }, 1000);
    };
    ProductcontentPage.prototype.logScrolling = function ($event) {
        var top = $event.detail.scrollTop;
        if (!this.scroolold) {
            this.scroolold = top;
        }
        else {
            if (this.scroolold > 44 && top > 44) {
                this.setShowtopnav(top, this.scroolold);
                this.scroolold = top;
                return false;
            }
            this.scroolold = top;
        }
        var num = 0;
        if (top < 44) {
            num = top * 2 / 100;
        }
        else {
            num = 1;
        }
        this.setNavstatus(num);
    };
    ProductcontentPage.prototype.setShowtopnav = function (nowtop, oldtop) {
        var type = this.pdtop(nowtop, oldtop);
        if (type === -1) {
            return false;
        }
        else if (type === 0) {
            if (this.isshowtopnav) {
                this.isshowtopnav = false;
            }
            return;
        }
        this.pageNav = type;
        if (!this.isshowtopnav) {
            this.isshowtopnav = true;
        }
    };
    ProductcontentPage.prototype.setNavstatus = function (num) {
        this.toolbaropacity = parseInt((num * 100).toString(), 10).toString();
    };
    ProductcontentPage.prototype.goBack = function () {
        // this.location.back();
        if (this.oldId.length > 1) {
            this.nav.back();
            var id = this.oldId.splice(this.oldId.length - 2, 2);
            var suid = this.oldsuppid.splice(this.oldsuppid.length - 2, 2);
            this.cleardate();
            this.setInit(id[0], suid[0]);
        }
        else {
            this.nav.back();
        }
    };
    ProductcontentPage.prototype.presentModal = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data, i, j, item, ii, jj, id, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_goodsattr_goodsattr_component__WEBPACK_IMPORTED_MODULE_8__["GoodsattrComponent"],
                            cssClass: 'attrModal',
                            componentProps: {
                                // src: this.http.domain + this.productData.goods_thumb,
                                max: this.productData.topData.buymax,
                                gxb: this.productData.gxb,
                                attrlist: this.productData.specification,
                                goodsid: this.pid,
                                type: type,
                                mrattr: this.productData.mrattrarr
                            }
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
                            if (data.arr) {
                                this.productData.mrattrarr = data.arr;
                                this.productData.mrseletestr = '';
                                for (i = 0, j = this.productData.specification.length; i < j; i++) {
                                    item = this.productData.specification[i];
                                    for (ii = 0, jj = item.values.length; ii < jj; ii++) {
                                        id = item.values[ii].id;
                                        if (data.arr.includes(id)) {
                                            if (!this.productData.mrseletestr) {
                                                this.productData.mrseletestr = item.name + ':' + item.values[ii]['label'];
                                            }
                                            else {
                                                this.productData.mrseletestr += ',' + item.name + ':' + item.values[ii]['label'];
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                            obj = {
                                quick: 0,
                                spec: data.arr,
                                goods_id: this.pid,
                                number: data.num,
                                parent: 0,
                                isls: data.type - 2
                            };
                            this.http.postformdata(this.http.addgwc, { goods: JSON.stringify(obj) }).subscribe(function (res) {
                                if (res['rec_id'] && data.type === 3) {
                                    _this.route.navigate(['/spgoods-confirmation'], { queryParams: { catid: res['rec_id'] } });
                                }
                                else {
                                    _this.gwcfn.getListhttp(1);
                                }
                            }, function (error2) { });
                            // if (data.type === 3) {
                            //   this.route.navigate(['/spgoods-confirmation'], );
                            // }
                            // if (data.type == 2) {
                            //   this.http.postformdata(this.http.addgwc, {goods: JSON.stringify({quick: 0, spec: data.arr, goods_id: this.pid, number: data.num, parent: 0})}).subscribe(res => {}, error2 => {})
                            // }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductcontentPage.prototype.ngOnDestroy = function () {
        console.log('销毁');
        if (this.isSetout) {
            clearTimeout(this.isSetout);
            this.isSetout = null;
        }
    };
    ProductcontentPage.prototype.gotoPoint = function (type) {
        // if (!this.isshowtopnav) return false;
        // this.ioncontent.g
        // this.pageNav = type;
        var top = this.getPointtop(type);
        if (type === 1) {
            top -= 44;
        }
        else {
            top -= 110;
        }
        this.content.scrollToPoint(0, top, 300);
    };
    ProductcontentPage.prototype.getPointtop = function (type) {
        var top;
        if (!type) {
            type = this.pageNav;
        }
        if (type === 1) {
            if (this.el.nativeElement.querySelector('.tw-content')) {
                top = this.el.nativeElement.querySelector('.tw-content').offsetTop;
            }
        }
        else if (type === 2) {
            if (this.el.nativeElement.querySelector('.xcxl')) {
                top = this.el.nativeElement.querySelector('.xcxl').offsetTop;
            }
        }
        else if (type === 3) {
            if (this.el.nativeElement.querySelector('.fysm')) {
                top = this.el.nativeElement.querySelector('.fysm').offsetTop;
            }
        }
        else if (type === 4) {
            if (this.el.nativeElement.querySelector('.gmxz')) {
                top = this.el.nativeElement.querySelector('.gmxz').offsetTop;
            }
        }
        return top || 0;
    };
    ProductcontentPage.prototype.pdtop = function (nowtop, oldtop) {
        for (var i = 1; i <= 4; i++) {
            var top_1 = this.getPointtop(i);
            var ntop = this.getPointtop(i + 1);
            ntop -= 120;
            if (i !== 1) {
                top_1 -= 120;
            }
            else {
                top_1 -= 72;
            }
            if (nowtop <= top_1) {
                if (oldtop > top_1) {
                    return 0;
                }
                else if (oldtop <= top_1) {
                    return -1;
                }
            }
            else if (nowtop > top_1 && nowtop <= ntop) {
                return i;
            }
            else if (nowtop > ntop) {
                continue;
            }
        }
        return 4;
    };
    ProductcontentPage.prototype.showfw = function () {
        var arr = [];
        for (var i = 0, j = this.productData.fw.length; i < j; i++) {
            var item = this.productData.fw[i];
            var obj = {
                text: item,
                handler: function () { }
            };
            arr.push(obj);
        }
        this.showMore(arr, '所有服务');
    };
    ProductcontentPage.prototype.showyh = function () {
        var arr = [];
        for (var i = 0, j = this.productData.promotion.length; i < j; i++) {
            var item = this.productData.promotion[i];
            var obj = {
                text: item.act_name,
                handler: function () { }
            };
            arr.push(obj);
        }
        for (var i = 0, j = this.productData.volume_price_list.length; i < j; i++) {
            var item = this.productData.volume_price_list[i];
            var obj = {
                text: '满' + item.number + '件享受' + item.price + '/件',
                handler: function () { }
            };
            arr.push(obj);
        }
        this.showMore(arr, '优惠信息');
    };
    ProductcontentPage.prototype.showMore = function (arr, title) {
        if (arr === void 0) { arr = []; }
        if (title === void 0) { title = '提示'; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: title,
                            mode: 'md',
                            buttons: arr
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductcontentPage.prototype.openpage = function () {
        if (!this.productData.month || this.productData.month.length == 0 || this.productData.month.length == 0 || this.productData.isdelete == 1) {
            return false;
        }
        // this.nav.navigateForward(['/selete-content'], );
        this.route.navigate(['/selete-content'], { queryParams: { id: this.pid } });
    };
    ProductcontentPage.prototype.opendp = function (type) {
        if (type && this.suppid.toString() === '0') {
            this.nav.navigateBack('tabs/tab1');
        }
        else {
            this.route.navigate(['/sj-index'], { queryParams: { id: this.suppid } });
        }
    };
    ProductcontentPage.prototype.scgoods = function () {
        var _this = this;
        this.http.getData(this.http.addgz, { id: this.pid }).subscribe(function (res) {
            _this.productData.issc = _this.productData.issc === 1 ? 0 : 1;
            if (_this.productData.ishw) {
                _this.xcxlfn.reset();
            }
            else {
                _this.collefn.reset();
            }
        }, function (error2) {
            if (_this.productData.ishw) {
                _this.xcxlfn.reset();
            }
            else {
                _this.collefn.reset();
            }
        });
    };
    /**
     *
     * @param $event
     */
    ProductcontentPage.prototype.optenProduct = function ($event) {
        this.oldsuppid.push(this.suppid);
        var supid;
        for (var _i = 0, _a = this.supplier.best_goods; _i < _a.length; _i++) {
            var item = _a[_i];
            if ($event == item['goods_id']) {
                supid = item['suppid'];
                this.suppid = supid;
                break;
            }
        }
        this.route.navigate(['/productcontent'], { queryParams: { id: $event, suppid: this.suppid } });
        this.cleardate();
        this.setInit($event, this.suppid);
        this.content.scrollToPoint(0, 0, 0);
    };
    ProductcontentPage.prototype.gototc = function () {
        this.route.navigate(['/moreyhtc'], { queryParams: { id: this.pid } });
    };
    ProductcontentPage.prototype.toprightmore = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_goods_contentnav_goods_contentnav_component__WEBPACK_IMPORTED_MODULE_9__["GoodsContentnavComponent"],
                            event: ev,
                            mode: 'ios',
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductcontentPage.prototype.cleardate = function () {
        this.scroolold = null;
        this.pageNav = null;
        this.isshowtopnav = null;
        this.xclx = null;
        this.xsHouse = null;
        this.xsMin = null;
        this.xsSec = null;
        this.xsday = null;
        this.twcontent = null;
        this.pinglunnum = null;
        this.pingluntags = null;
        this.pid = null;
        this.comment = null;
        this.tcxqIndex = null;
        this.toolbaropacity = null;
        this.shopName = null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], ProductcontentPage.prototype, "content", void 0);
    ProductcontentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productcontent',
            template: __webpack_require__(/*! ./productcontent.page.html */ "./src/app/pages/productcontent/productcontent.page.html"),
            styles: [__webpack_require__(/*! ./productcontent.page.scss */ "./src/app/pages/productcontent/productcontent.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _services_getproduct_service__WEBPACK_IMPORTED_MODULE_5__["GetproductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _services_supplierlist_service__WEBPACK_IMPORTED_MODULE_7__["SupplierlistService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _services_lljl_service__WEBPACK_IMPORTED_MODULE_10__["LljlService"], _services_gwc_service__WEBPACK_IMPORTED_MODULE_11__["GwcService"],
            _services_collelist_service__WEBPACK_IMPORTED_MODULE_12__["CollelistService"], _services_xcsclist_service__WEBPACK_IMPORTED_MODULE_13__["XcsclistService"]])
    ], ProductcontentPage);
    return ProductcontentPage;
}());



/***/ }),

/***/ "./src/app/timedifference.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/timedifference.pipe.ts ***!
  \****************************************/
/*! exports provided: TimedifferencePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimedifferencePipe", function() { return TimedifferencePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimedifferencePipe = /** @class */ (function () {
    function TimedifferencePipe() {
    }
    TimedifferencePipe.prototype.transform = function (value, args) {
        var _a;
        var start = value.replace(/(^\s*)|(\s*$)/g, "");
        var end = args.replace(/(^\s*)|(\s*$)/g, "");
        if (start.includes('：')) {
            start = start.replace(/：/g, ':');
        }
        if (start.includes('-')) {
            start = start.replace(/-/g, '/');
        }
        if (start.split(':').length - 1 < 2) {
            start += ':00';
        }
        if (end.includes('：')) {
            end = end.replace(/：/g, ':');
        }
        if (end.includes('-')) {
            end = end.replace(/-/g, '/');
        }
        if (end.split(':').length - 1 < 2) {
            end += ':00';
        }
        var now_time = Date.parse(new Date(start).toString()); //当前出发的时间戳
        var end_time = Date.parse(new Date(end).toString()); //指定时间的时间戳
        if (end_time < now_time) {
            _a = [end_time, now_time], now_time = _a[0], end_time = _a[1];
        }
        var time_dis = end_time - now_time;
        var days = Math.floor(time_dis / (24 * 3600 * 1000));
        //计算出小时数
        var leave1 = time_dis % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
        var hours = Math.floor(leave1 / (3600 * 1000));
        //计算相差分钟数
        var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
        var minutes = Math.floor(leave2 / (60 * 1000));
        //计算相差秒数
        // const leave3=leave2%(60*1000);//计算小时数后剩余的毫秒数
        // const second = leave3/1000;
        var time = '';
        if (days) {
            time = days + '天';
        }
        if (hours) {
            time += hours + '小时';
        }
        if (minutes) {
            time += minutes + '分钟';
        }
        return time;
    };
    TimedifferencePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'timedifference'
        })
    ], TimedifferencePipe);
    return TimedifferencePipe;
}());



/***/ })

}]);
//# sourceMappingURL=pages-productcontent-productcontent-module.js.map