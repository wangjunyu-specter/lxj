(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-all-zt-all-zt-module~pages-allorder-allorder-module~pages-articlecontent-articleconten~f8ece40a"],{

/***/ "./src/app/pipes/datecontent.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/datecontent.pipe.ts ***!
  \*******************************************/
/*! exports provided: DatecontentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatecontentPipe", function() { return DatecontentPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatecontentPipe = /** @class */ (function () {
    function DatecontentPipe() {
    }
    DatecontentPipe.prototype.transform = function (value, args) {
        console.log(value);
        return null;
    };
    DatecontentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'datecontent'
        })
    ], DatecontentPipe);
    return DatecontentPipe;
}());



/***/ }),

/***/ "./src/app/pipes/decodeuri.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/decodeuri.pipe.ts ***!
  \*****************************************/
/*! exports provided: DecodeuriPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeuriPipe", function() { return DecodeuriPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DecodeuriPipe = /** @class */ (function () {
    function DecodeuriPipe() {
    }
    DecodeuriPipe.prototype.transform = function (value, args) {
        if (value) {
            return decodeURIComponent(value);
        }
        return null;
    };
    DecodeuriPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'decodeuri'
        })
    ], DecodeuriPipe);
    return DecodeuriPipe;
}());



/***/ }),

/***/ "./src/app/pipes/goodsattr.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/goodsattr.pipe.ts ***!
  \*****************************************/
/*! exports provided: GoodsattrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsattrPipe", function() { return GoodsattrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoodsattrPipe = /** @class */ (function () {
    function GoodsattrPipe() {
    }
    GoodsattrPipe.prototype.transform = function (value, args) {
        console.log(value);
        value = value.replace(/\[\S*\]/g, '');
        console.log(value.length);
        if (value.length > 15) {
            return value.slice(0, 15);
        }
        return value;
    };
    GoodsattrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'goodsattr'
        })
    ], GoodsattrPipe);
    return GoodsattrPipe;
}());



/***/ }),

/***/ "./src/app/pipes/imgsrc.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/imgsrc.pipe.ts ***!
  \**************************************/
/*! exports provided: ImgsrcPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgsrcPipe", function() { return ImgsrcPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: wjy
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-09 16:24:11
 * @Description: file content
 */

var ImgsrcPipe = /** @class */ (function () {
    function ImgsrcPipe() {
    }
    ImgsrcPipe.prototype.transform = function (value, args) {
        console.log(args);
        // : todo 暂未实现    所有img src pipe
        if (!value) {
            return '../../assets/mrtx.jpg';
        }
        // value = '/mobile/images/201908/thumbyyuserhead161564935022041.jpg'
        if (value.startsWith('http') || value.startsWith('data:image') || value.startsWith('file:///') || value.startsWith('cdvfile://')) {
            return value;
        }
        else if (value.startsWith('/mobile') && args && args.endsWith('mobile/')) {
            return args + value.substring(7);
        }
        else if (value.startsWith('./../')) {
            return args + value.substring(5);
        }
        else {
            return args + value;
        }
    };
    ImgsrcPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'imgsrc'
        })
    ], ImgsrcPipe);
    return ImgsrcPipe;
}());



/***/ }),

/***/ "./src/app/pipes/isgz.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/isgz.pipe.ts ***!
  \************************************/
/*! exports provided: IsgzPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsgzPipe", function() { return IsgzPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IsgzPipe = /** @class */ (function () {
    function IsgzPipe() {
    }
    IsgzPipe.prototype.transform = function (value, args) {
        console.log(value);
        console.log(args);
        if (!args) {
            return false;
        }
        if (args.includes(value)) {
            return false;
        }
        return true;
    };
    IsgzPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'isgz'
        })
    ], IsgzPipe);
    return IsgzPipe;
}());



/***/ }),

/***/ "./src/app/pipes/isvideo.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/isvideo.pipe.ts ***!
  \***************************************/
/*! exports provided: IsvideoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsvideoPipe", function() { return IsvideoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IsvideoPipe = /** @class */ (function () {
    function IsvideoPipe() {
    }
    IsvideoPipe.prototype.transform = function (value, args) {
        if (!value) {
            return false;
        }
        var index = value.lastIndexOf('.');
        if (index < 0) {
            return false;
        }
        var type = value.substr(index + 1);
        if (type === 'mp4' || type === 'ogg' || type === 'WebM') {
            return true;
        }
        console.error(type);
        return false;
    };
    IsvideoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'isvideo'
        })
    ], IsvideoPipe);
    return IsvideoPipe;
}());



/***/ }),

/***/ "./src/app/pipes/namesubstr.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/namesubstr.pipe.ts ***!
  \******************************************/
/*! exports provided: NamesubstrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamesubstrPipe", function() { return NamesubstrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NamesubstrPipe = /** @class */ (function () {
    function NamesubstrPipe() {
    }
    NamesubstrPipe.prototype.transform = function (value, args) {
        console.log(value);
        if (isNaN(Number(args)) || !value) {
            return value;
        }
        else {
            if (value.length > args) {
                return value.substr(0, args) + '...';
            }
        }
        return value;
    };
    NamesubstrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'namesubstr'
        })
    ], NamesubstrPipe);
    return NamesubstrPipe;
}());



/***/ }),

/***/ "./src/app/pipes/oldtonow.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/oldtonow.pipe.ts ***!
  \****************************************/
/*! exports provided: OldtonowPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldtonowPipe", function() { return OldtonowPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OldtonowPipe = /** @class */ (function () {
    function OldtonowPipe() {
    }
    OldtonowPipe.prototype.transform = function (value, args) {
        return getTimeUntilNow(value);
        return null;
    };
    OldtonowPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'oldtonow'
        })
    ], OldtonowPipe);
    return OldtonowPipe;
}());

function getTimeUntilNow(mss) {
    var days = parseInt((mss / (1000 * 60 * 60 * 24)).toString(), 10);
    if (days > 0) {
        return days + '天前';
    }
    var hours = parseInt(((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString(), 10);
    if (hours > 0) {
        return hours + '小时前';
    }
    var minutes = parseInt(((mss % (1000 * 60 * 60)) / (1000 * 60)).toString(), 10);
    if (minutes > 0) {
        return minutes + '分钟前';
    }
    var seconds = (mss % (1000 * 60)) / 1000;
    return '刚刚 ';
}


/***/ }),

/***/ "./src/app/pipes/orderstatus.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/orderstatus.pipe.ts ***!
  \*******************************************/
/*! exports provided: OrderstatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderstatusPipe", function() { return OrderstatusPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-10-17 15:00:01
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-17 16:05:20
 * @Description: 订单最终状态
 */

var OrderstatusPipe = /** @class */ (function () {
    function OrderstatusPipe() {
    }
    OrderstatusPipe.prototype.transform = function (value, args) {
        if (!value) {
            return '未知';
        }
        var orderStatus = value['order_status'];
        var shippingStatus = value['shipping_status'];
        var payStatus = value['pay_status'];
        if ((orderStatus === '0' || orderStatus === '1') && shippingStatus === '0' && payStatus === '0') {
            return '未支付';
        }
        else if (orderStatus === '1' && shippingStatus === '0' && payStatus === '2') {
            if (args) {
                return '等待商家确认';
            }
            else {
                return '等待卖家发货';
            }
        }
        else if (orderStatus === '1' && shippingStatus === '3' && payStatus === '2') {
            if (args) {
                return '商家确认行程中';
            }
            else {
                return '配货中';
            }
        }
        else if (orderStatus === '5' && shippingStatus === '1' && payStatus === '2') {
            if (args) {
                return '等待出行中';
            }
            else {
                return '已发货';
            }
        }
        else if (orderStatus === '5' && shippingStatus === '2' && payStatus === '2') {
            return '已完成';
        }
        else if (orderStatus === '4' && shippingStatus === '0' && payStatus === '0') {
            return '已退货';
        }
        else if (orderStatus === '2' && shippingStatus === '0' && payStatus === '0') {
            return '已取消';
        }
        else if (orderStatus === '2' && shippingStatus === '0' && payStatus === '2') {
            return '已取消,待退款';
        }
    };
    OrderstatusPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderstatus'
        })
    ], OrderstatusPipe);
    return OrderstatusPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _datecontent_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datecontent.pipe */ "./src/app/pipes/datecontent.pipe.ts");
/* harmony import */ var _goodsattr_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goodsattr.pipe */ "./src/app/pipes/goodsattr.pipe.ts");
/* harmony import */ var _oldtonow_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oldtonow.pipe */ "./src/app/pipes/oldtonow.pipe.ts");
/* harmony import */ var _isgz_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isgz.pipe */ "./src/app/pipes/isgz.pipe.ts");
/* harmony import */ var _imgsrc_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgsrc.pipe */ "./src/app/pipes/imgsrc.pipe.ts");
/* harmony import */ var _decodeuri_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decodeuri.pipe */ "./src/app/pipes/decodeuri.pipe.ts");
/* harmony import */ var _setnum_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setnum.pipe */ "./src/app/pipes/setnum.pipe.ts");
/* harmony import */ var _telhide_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./telhide.pipe */ "./src/app/pipes/telhide.pipe.ts");
/* harmony import */ var _isvideo_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isvideo.pipe */ "./src/app/pipes/isvideo.pipe.ts");
/* harmony import */ var _namesubstr_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./namesubstr.pipe */ "./src/app/pipes/namesubstr.pipe.ts");
/* harmony import */ var _xclistattr_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./xclistattr.pipe */ "./src/app/pipes/xclistattr.pipe.ts");
/* harmony import */ var _xccontentsplit_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./xccontentsplit.pipe */ "./src/app/pipes/xccontentsplit.pipe.ts");
/* harmony import */ var _splitarr_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./splitarr.pipe */ "./src/app/pipes/splitarr.pipe.ts");
/* harmony import */ var _xcstatus_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./xcstatus.pipe */ "./src/app/pipes/xcstatus.pipe.ts");
/* harmony import */ var _orderstatus_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./orderstatus.pipe */ "./src/app/pipes/orderstatus.pipe.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-17 15:00:30
 * @Description: file content
 */

















// import { YhqtitlePipe } from './yhqtitle.pipe';
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_datecontent_pipe__WEBPACK_IMPORTED_MODULE_3__["DatecontentPipe"], _goodsattr_pipe__WEBPACK_IMPORTED_MODULE_4__["GoodsattrPipe"], _oldtonow_pipe__WEBPACK_IMPORTED_MODULE_5__["OldtonowPipe"], _isgz_pipe__WEBPACK_IMPORTED_MODULE_6__["IsgzPipe"],
                _imgsrc_pipe__WEBPACK_IMPORTED_MODULE_7__["ImgsrcPipe"], _decodeuri_pipe__WEBPACK_IMPORTED_MODULE_8__["DecodeuriPipe"], _setnum_pipe__WEBPACK_IMPORTED_MODULE_9__["SetnumPipe"], _telhide_pipe__WEBPACK_IMPORTED_MODULE_10__["TelhidePipe"], _isvideo_pipe__WEBPACK_IMPORTED_MODULE_11__["IsvideoPipe"], _namesubstr_pipe__WEBPACK_IMPORTED_MODULE_12__["NamesubstrPipe"],
                _xclistattr_pipe__WEBPACK_IMPORTED_MODULE_13__["XclistattrPipe"],
                _xccontentsplit_pipe__WEBPACK_IMPORTED_MODULE_14__["XccontentsplitPipe"],
                _splitarr_pipe__WEBPACK_IMPORTED_MODULE_15__["SplitarrPipe"],
                _xcstatus_pipe__WEBPACK_IMPORTED_MODULE_16__["XcstatusPipe"],
                _orderstatus_pipe__WEBPACK_IMPORTED_MODULE_17__["OrderstatusPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_datecontent_pipe__WEBPACK_IMPORTED_MODULE_3__["DatecontentPipe"], _goodsattr_pipe__WEBPACK_IMPORTED_MODULE_4__["GoodsattrPipe"], _oldtonow_pipe__WEBPACK_IMPORTED_MODULE_5__["OldtonowPipe"], _isgz_pipe__WEBPACK_IMPORTED_MODULE_6__["IsgzPipe"], _imgsrc_pipe__WEBPACK_IMPORTED_MODULE_7__["ImgsrcPipe"],
                _decodeuri_pipe__WEBPACK_IMPORTED_MODULE_8__["DecodeuriPipe"], _setnum_pipe__WEBPACK_IMPORTED_MODULE_9__["SetnumPipe"], _telhide_pipe__WEBPACK_IMPORTED_MODULE_10__["TelhidePipe"], _isvideo_pipe__WEBPACK_IMPORTED_MODULE_11__["IsvideoPipe"], _namesubstr_pipe__WEBPACK_IMPORTED_MODULE_12__["NamesubstrPipe"],
                _xclistattr_pipe__WEBPACK_IMPORTED_MODULE_13__["XclistattrPipe"], _xccontentsplit_pipe__WEBPACK_IMPORTED_MODULE_14__["XccontentsplitPipe"], _splitarr_pipe__WEBPACK_IMPORTED_MODULE_15__["SplitarrPipe"], _xcstatus_pipe__WEBPACK_IMPORTED_MODULE_16__["XcstatusPipe"], _orderstatus_pipe__WEBPACK_IMPORTED_MODULE_17__["OrderstatusPipe"]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/pipes/setnum.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/setnum.pipe.ts ***!
  \**************************************/
/*! exports provided: SetnumPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetnumPipe", function() { return SetnumPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SetnumPipe = /** @class */ (function () {
    function SetnumPipe() {
    }
    SetnumPipe.prototype.transform = function (value, args) {
        if (!value || isNaN(Number(value))) {
            return 0;
        }
        var num = Number(value);
        if (num > 10000) {
            var w = Math.floor(num / 10000);
            var y = num % 10000;
            var str = w.toString();
            if (y > 0) {
                var q = Math.floor(y / 1000);
                if (q > 0) {
                    str += '.' + q + '+';
                }
            }
            return str + '万';
        }
        return value;
    };
    SetnumPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'setnum'
        })
    ], SetnumPipe);
    return SetnumPipe;
}());



/***/ }),

/***/ "./src/app/pipes/splitarr.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/splitarr.pipe.ts ***!
  \****************************************/
/*! exports provided: SplitarrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitarrPipe", function() { return SplitarrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SplitarrPipe = /** @class */ (function () {
    function SplitarrPipe() {
    }
    SplitarrPipe.prototype.transform = function (value, args) {
        if (!value || typeof value != 'string') {
            return value;
        }
        if (value.includes(' ')) {
            return value.split(' ');
        }
        else if (value.includes(',')) {
            return value.split(',');
        }
        else if (value.includes('|')) {
            return value.split('|');
        }
        else {
            return value.split('，');
        }
        return '';
    };
    SplitarrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'splitarr'
        })
    ], SplitarrPipe);
    return SplitarrPipe;
}());



/***/ }),

/***/ "./src/app/pipes/telhide.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/telhide.pipe.ts ***!
  \***************************************/
/*! exports provided: TelhidePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelhidePipe", function() { return TelhidePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TelhidePipe = /** @class */ (function () {
    function TelhidePipe() {
    }
    TelhidePipe.prototype.transform = function (value, args) {
        if (!value) {
            return '';
        }
        var start = value.substr(0, 3);
        var end = value.substr(-4);
        return start + '****' + end;
    };
    TelhidePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'telhide'
        })
    ], TelhidePipe);
    return TelhidePipe;
}());



/***/ }),

/***/ "./src/app/pipes/xccontentsplit.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/xccontentsplit.pipe.ts ***!
  \**********************************************/
/*! exports provided: XccontentsplitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XccontentsplitPipe", function() { return XccontentsplitPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var XccontentsplitPipe = /** @class */ (function () {
    function XccontentsplitPipe() {
    }
    XccontentsplitPipe.prototype.transform = function (value, args) {
        if (!value) {
            return '';
        }
        value = value.replace(/\r?\n|\r/g, "");
        var arr = value.split(' ');
        var arr2 = [];
        arr.map(function (res) {
            if (!res) {
                return false;
            }
            res = res.replace(/(\[\d*\])/g, '');
            arr2.push(res.split(':'));
        });
        return arr2;
    };
    XccontentsplitPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'xccontentsplit'
        })
    ], XccontentsplitPipe);
    return XccontentsplitPipe;
}());



/***/ }),

/***/ "./src/app/pipes/xclistattr.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/xclistattr.pipe.ts ***!
  \******************************************/
/*! exports provided: XclistattrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XclistattrPipe", function() { return XclistattrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var XclistattrPipe = /** @class */ (function () {
    function XclistattrPipe() {
    }
    XclistattrPipe.prototype.transform = function (value, args) {
        if (!value) {
            return '';
        }
        value = value.replace(/\r?\n|\r/g, "");
        var arr = value.split(' ');
        var arr2 = [];
        arr.map(function (res) {
            if (!res) {
                return false;
            }
            res = res.replace(/(\[\d*\])/g, '');
            arr2.push(res);
        });
        if (arr2.length > 3 && !args) {
            arr2.length = 3;
            arr2.push('...');
        }
        return arr2;
    };
    XclistattrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'xclistattr'
        })
    ], XclistattrPipe);
    return XclistattrPipe;
}());



/***/ }),

/***/ "./src/app/pipes/xcstatus.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/xcstatus.pipe.ts ***!
  \****************************************/
/*! exports provided: XcstatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XcstatusPipe", function() { return XcstatusPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-10-11 22:11:12
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-17 16:19:54
 * @Description: file content
 */

var XcstatusPipe = /** @class */ (function () {
    function XcstatusPipe() {
    }
    XcstatusPipe.prototype.transform = function (value, args) {
        if (!value) {
            return '';
        }
        else if (value === '已确认 已付款 已发货') {
            return '待出行';
        }
        else if (value === '已确认 已付款 未发货' || value === '已确认 已付款 配货中') {
            return '等待商家确认';
        }
        else if (value === '已确认 已付款 收货确认') {
            return ' 已完成';
        }
        else if (value === '已取消 未付款 未发货') {
            return '已取消';
        }
        else if (value === '未确认 未付款 未发货' || value === '已确认 未付款 未发货') {
            return '待付款';
        }
        else if (value === '已取消 已付款 未发货') {
            return '已取消,待退款';
        }
        else {
            return value;
        }
    };
    XcstatusPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'xcstatus'
        })
    ], XcstatusPipe);
    return XcstatusPipe;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-all-zt-all-zt-module~pages-allorder-allorder-module~pages-articlecontent-articleconten~f8ece40a.js.map