(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-after-salelist-after-salelist-module~pages-all-zt-all-zt-module~pages-allorder-allorde~abab8b3e"],{

/***/ "./src/app/pipes/autoshdes.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/autoshdes.pipe.ts ***!
  \*****************************************/
/*! exports provided: AutoshdesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoshdesPipe", function() { return AutoshdesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-10-31 16:06:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-10-31 16:10:42
 * @Description: file content
 */

var AutoshdesPipe = /** @class */ (function () {
    function AutoshdesPipe() {
    }
    AutoshdesPipe.prototype.transform = function (value, args) {
        if (!value || !value.includes('自动收货')) {
            return '';
        }
        else if (value.includes('-')) {
            return '正在售后中';
        }
        else {
            return value;
        }
    };
    AutoshdesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'autoshdes'
        })
    ], AutoshdesPipe);
    return AutoshdesPipe;
}());



/***/ }),

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
 * @LastEditTime: 2019-11-26 23:35:41
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

/*
 * @Author: wjy-mac
 * @Date: 2019-06-30 02:34:48
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-05 17:16:46
 * @Description: file content
 */

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
        if (type === 'mp4' || type === 'ogg' || type === 'WebM' || type === 'm3u8') {
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

/***/ "./src/app/pipes/location.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/location.pipe.ts ***!
  \****************************************/
/*! exports provided: LocationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPipe", function() { return LocationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-11-20 22:06:51
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-20 22:57:35
 * @Description: file content
 */

var LocationPipe = /** @class */ (function () {
    function LocationPipe() {
    }
    LocationPipe.prototype.transform = function (value, args) {
        if (!value) {
            return '成都';
        }
        if (value.length > 3) {
            return value.substr(0, 3);
        }
        return value;
    };
    LocationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'location'
        })
    ], LocationPipe);
    return LocationPipe;
}());



/***/ }),

/***/ "./src/app/pipes/namenm.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/namenm.pipe.ts ***!
  \**************************************/
/*! exports provided: NamenmPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamenmPipe", function() { return NamenmPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-11-05 16:00:03
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-05 16:01:48
 * @Description: 是否匿名
 */

var NamenmPipe = /** @class */ (function () {
    function NamenmPipe() {
    }
    NamenmPipe.prototype.transform = function (value, args) {
        if (args === '1') {
            var str = value.substr(0, 1);
            str += '**';
            return str;
        }
        else {
            return value;
        }
    };
    NamenmPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'namenm'
        })
    ], NamenmPipe);
    return NamenmPipe;
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

/***/ "./src/app/pipes/newslisttime.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/newslisttime.pipe.ts ***!
  \********************************************/
/*! exports provided: NewslisttimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewslisttimePipe", function() { return NewslisttimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-11-07 22:31:25
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-15 17:00:29
 * @Description: 消息列表页时间格式处理
 */

var NewslisttimePipe = /** @class */ (function () {
    function NewslisttimePipe() {
    }
    NewslisttimePipe.prototype.transform = function (value, args) {
        for (var index = 0; index < args.length; index++) {
            var element = args[index];
            var time2 = Number(element.time);
            if (time2 === value && index === 0) {
                return this.timeDownItem(value);
            }
            else if (index !== 0 && time2 === value && (value - args[index - 1].time) > 240000) {
                return this.timeDownItem(value);
            }
            else if (index !== 0 && this.istwoDay(value, args[index - 1].time)) {
                return this.timeDownItem(value);
            }
        }
        return '';
    };
    /**
     * @Author: wjy-mac
     * @description: 获取当天实际
     * @Date: 2019-11-07 21:03:41
     * @param {type} num 时间戳
     * @return:
     */
    NewslisttimePipe.prototype.getTime = function (num) {
        var date = new Date(num);
        console.log(num);
        console.log(date);
        var hours = date.getHours();
        var min = date.getMinutes();
        return (hours < 10 ? '0' + hours.toString() : hours) + ":" + (min < 10 ? '0' + min.toString() : min);
    };
    /**
     * @Author: wjy-mac
     * @description: 获取昨天时间
     * @Date: 2019-11-07 21:04:07
     * @param {type}
     * @return:
     */
    NewslisttimePipe.prototype.getprevTime = function (num) {
        return "\u6628\u5929";
    };
    /**
     * @Author: wjy-mac
     * @description: 获取最近7天内的时间
     * @Date: 2019-11-07 21:06:34
     * @param {type}
     * @return:
     */
    NewslisttimePipe.prototype.getweekTime = function (num) {
        var date = new Date(num);
        var week = date.getDay();
        return "\u661F\u671F" + week;
    };
    /**
    * @Author: wjy-mac
    * @description: 获取最近7天前的时间
    * @Date: 2019-11-07 21:06:34
    * @param {type}
    * @return:
    */
    NewslisttimePipe.prototype.getoldTime = function (num) {
        var date = new Date(num);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return "\u661F\u671F" + year + "\u5E74" + (month < 10 ? '0' + month.toString() : month) + "\u6708" + (day < 10 ? '0' + day.toString() : day) + "\u65E5";
    };
    NewslisttimePipe.prototype.timeDownItem = function (time) {
        var nowDay = new Date(new Date().setHours(0, 0, 0, 0)).getTime(); // 获取当天凌晨时间戳
        var nextDay = nowDay + 86400000; // 明天凌晨时间戳
        if (time >= nowDay && time < nextDay) {
            return this.getTime(time);
        }
        else if (time < nowDay && time >= (nowDay - 86400000)) {
            return this.getprevTime(time);
        }
        else if (time < (nowDay - 86400000) && time >= nowDay - (86400000 * 7)) {
            return this.getweekTime(time);
        }
        else {
            return this.getoldTime(time);
        }
    };
    /**
     * @Author: wjy-mac
     * @description: 判断是否距离上个消息已经第二天
     * @Date: 2019-11-07 21:06:34
     * @param {type}
     * @return:
     */
    NewslisttimePipe.prototype.istwoDay = function (time, pretime) {
        var date = new Date(time);
        var day = date.getDate();
        var date1 = new Date(pretime);
        var day1 = date1.getDate();
        if (day != day1) {
            return true;
        }
    };
    NewslisttimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'newslisttime'
        })
    ], NewslisttimePipe);
    return NewslisttimePipe;
}());



/***/ }),

/***/ "./src/app/pipes/newstime.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/newstime.pipe.ts ***!
  \****************************************/
/*! exports provided: NewstimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewstimePipe", function() { return NewstimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-11-07 20:34:25
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-15 16:19:44
 * @Description: 消息详情页时间格式处理
 */

var NewstimePipe = /** @class */ (function () {
    function NewstimePipe() {
    }
    NewstimePipe.prototype.transform = function (value, args) {
        for (var index = 0; index < args.length; index++) {
            var element = args[index];
            var time2 = Number(element.time);
            if (time2 === value && index === 0) {
                return this.timeDownItem(value);
            }
            else if (index !== 0 && time2 === value && (value - args[index - 1].time) > 240000) {
                return this.timeDownItem(value);
            }
            else if (index !== 0 && this.istwoDay(value, args[index - 1].time)) {
                return this.timeDownItem(value);
            }
        }
        return '';
    };
    /**
     * @Author: wjy-mac
     * @description: 获取当天实际
     * @Date: 2019-11-07 21:03:41
     * @param {type} num 时间戳
     * @return:
     */
    NewstimePipe.prototype.getTime = function (num) {
        var date = new Date(num);
        var hours = date.getHours();
        var min = date.getMinutes();
        return (hours < 10 ? '0' + hours.toString() : hours) + ":" + (min < 10 ? '0' + min.toString() : min);
    };
    /**
     * @Author: wjy-mac
     * @description: 获取昨天时间
     * @Date: 2019-11-07 21:04:07
     * @param {type}
     * @return:
     */
    NewstimePipe.prototype.getprevTime = function (num) {
        var date = new Date(num);
        var hours = date.getHours();
        var min = date.getMinutes();
        return "\u6628\u5929" + (hours < 10 ? '0' + hours.toString() : hours) + ":" + (min < 10 ? '0' + min.toString() : min);
    };
    /**
     * @Author: wjy-mac
     * @description: 获取最近7天内的时间
     * @Date: 2019-11-07 21:06:34
     * @param {type}
     * @return:
     */
    NewstimePipe.prototype.getweekTime = function (num) {
        var date = new Date(num);
        var week = date.getDay();
        var hours = date.getHours();
        var min = date.getMinutes();
        return "\u661F\u671F" + week + " " + (hours < 10 ? '0' + hours.toString() : hours) + ":" + (min < 10 ? '0' + min.toString() : min);
    };
    /**
    * @Author: wjy-mac
    * @description: 获取最近7天前的时间
    * @Date: 2019-11-07 21:06:34
    * @param {type}
    * @return:
    */
    NewstimePipe.prototype.getoldTime = function (num) {
        var date = new Date(num);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var min = date.getMinutes();
        return "\u661F\u671F" + year + "\u5E74" + (month < 10 ? '0' + month.toString() : month) + "\u6708" + (day < 10 ? '0' + day.toString() : day) + "\u65E5 " + (hours < 10 ? '0' + hours.toString() : hours) + ":" + (min < 10 ? '0' + min.toString() : min);
    };
    NewstimePipe.prototype.timeDownItem = function (time) {
        var nowDay = new Date(new Date().setHours(0, 0, 0, 0)).getTime(); // 获取当天凌晨时间戳
        var nextDay = nowDay + 86400000; // 明天凌晨时间戳
        if (time >= nowDay && time < nextDay) {
            return this.getTime(time);
        }
        else if (time < nowDay && time >= (nowDay - 86400000)) {
            return this.getprevTime(time);
        }
        else if (time < (nowDay - 86400000) && time >= nowDay - (86400000 * 7)) {
            return this.getweekTime(time);
        }
        else {
            return this.getoldTime(time);
        }
    };
    /**
     * @Author: wjy-mac
     * @description: 判断是否距离上个消息已经第二天
     * @Date: 2019-11-07 21:06:34
     * @param {type}
     * @return:
     */
    NewstimePipe.prototype.istwoDay = function (time, pretime) {
        var date = new Date(time);
        var day = date.getDate();
        var date1 = new Date(pretime);
        var day1 = date1.getDate();
        if (day != day1) {
            return true;
        }
    };
    NewstimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'newstime'
        })
    ], NewstimePipe);
    return NewstimePipe;
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

/*
 * @Author: wjy-mac
 * @Date: 2019-06-18 09:44:16
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-19 17:24:15
 * @Description: file content
 */

var OldtonowPipe = /** @class */ (function () {
    function OldtonowPipe() {
    }
    OldtonowPipe.prototype.transform = function (value, args) {
        return getTimeUntilNow(value);
    };
    OldtonowPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'oldtonow'
        })
    ], OldtonowPipe);
    return OldtonowPipe;
}());

function getTimeUntilNow(mss) {
    console.log(mss);
    var timestamp = Date.parse((new Date()).toString());
    if (mss.toString().length === 10) {
        mss = mss * 1000;
    }
    var num = timestamp - mss;
    var days = Math.floor(num / 1000 / 86400);
    // const days = parseInt((mss / (1000 * 60 * 60 * 24)).toString(), 10);
    if (days > 0) {
        return days + '天前';
    }
    var hours = Math.floor(num / 1000 / 3600);
    if (hours > 0) {
        return hours + '小时前';
    }
    var minutes = Math.floor(num / 1000 / 60);
    if (minutes > 0) {
        return minutes + '分钟前';
    }
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
 * @LastEditTime: 2019-12-01 15:59:53
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
        else if (orderStatus === '1' && shippingStatus === '0' && payStatus === '2' || orderStatus === '0' && shippingStatus === '0' && payStatus === '2') {
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
        else if (orderStatus === '2' && shippingStatus === '1' && payStatus === '2') {
            return '已全部退款';
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
/* harmony import */ var _autoshdes_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./autoshdes.pipe */ "./src/app/pipes/autoshdes.pipe.ts");
/* harmony import */ var _namenm_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./namenm.pipe */ "./src/app/pipes/namenm.pipe.ts");
/* harmony import */ var _newstime_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./newstime.pipe */ "./src/app/pipes/newstime.pipe.ts");
/* harmony import */ var _newslisttime_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./newslisttime.pipe */ "./src/app/pipes/newslisttime.pipe.ts");
/* harmony import */ var _location_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./location.pipe */ "./src/app/pipes/location.pipe.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-20 22:07:03
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
                _orderstatus_pipe__WEBPACK_IMPORTED_MODULE_17__["OrderstatusPipe"],
                _autoshdes_pipe__WEBPACK_IMPORTED_MODULE_18__["AutoshdesPipe"],
                _namenm_pipe__WEBPACK_IMPORTED_MODULE_19__["NamenmPipe"],
                _newstime_pipe__WEBPACK_IMPORTED_MODULE_20__["NewstimePipe"],
                _newslisttime_pipe__WEBPACK_IMPORTED_MODULE_21__["NewslisttimePipe"],
                _location_pipe__WEBPACK_IMPORTED_MODULE_22__["LocationPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_datecontent_pipe__WEBPACK_IMPORTED_MODULE_3__["DatecontentPipe"], _goodsattr_pipe__WEBPACK_IMPORTED_MODULE_4__["GoodsattrPipe"], _oldtonow_pipe__WEBPACK_IMPORTED_MODULE_5__["OldtonowPipe"], _isgz_pipe__WEBPACK_IMPORTED_MODULE_6__["IsgzPipe"], _imgsrc_pipe__WEBPACK_IMPORTED_MODULE_7__["ImgsrcPipe"],
                _decodeuri_pipe__WEBPACK_IMPORTED_MODULE_8__["DecodeuriPipe"], _setnum_pipe__WEBPACK_IMPORTED_MODULE_9__["SetnumPipe"], _telhide_pipe__WEBPACK_IMPORTED_MODULE_10__["TelhidePipe"], _isvideo_pipe__WEBPACK_IMPORTED_MODULE_11__["IsvideoPipe"], _namesubstr_pipe__WEBPACK_IMPORTED_MODULE_12__["NamesubstrPipe"],
                _xclistattr_pipe__WEBPACK_IMPORTED_MODULE_13__["XclistattrPipe"], _xccontentsplit_pipe__WEBPACK_IMPORTED_MODULE_14__["XccontentsplitPipe"], _splitarr_pipe__WEBPACK_IMPORTED_MODULE_15__["SplitarrPipe"], _xcstatus_pipe__WEBPACK_IMPORTED_MODULE_16__["XcstatusPipe"], _orderstatus_pipe__WEBPACK_IMPORTED_MODULE_17__["OrderstatusPipe"], _autoshdes_pipe__WEBPACK_IMPORTED_MODULE_18__["AutoshdesPipe"],
                _namenm_pipe__WEBPACK_IMPORTED_MODULE_19__["NamenmPipe"], _newstime_pipe__WEBPACK_IMPORTED_MODULE_20__["NewstimePipe"], _newslisttime_pipe__WEBPACK_IMPORTED_MODULE_21__["NewslisttimePipe"], _location_pipe__WEBPACK_IMPORTED_MODULE_22__["LocationPipe"]]
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
 * @LastEditTime: 2019-10-29 17:25:11
 * @Description: file content
 */

var XcstatusPipe = /** @class */ (function () {
    function XcstatusPipe() {
    }
    XcstatusPipe.prototype.transform = function (value, args) {
        console.log(args);
        if (!value) {
            return '';
        }
        if (args === 1) {
            if (value === '已确认 已付款 已发货') {
                return '待出行';
            }
            else if (value === '已确认 已付款 未发货' || value === '已确认 已付款 配货中') {
                return '等待商家确认';
            }
            else if (value === '已确认 已付款 收货确认') {
                return '已完成';
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
        }
        else {
            console.log(value);
            if (value === '已取消 未付款 未发货') {
                return '已取消';
            }
            else if (value === '已确认 已付款 收货确认') {
                return '已完成';
            }
            else {
                return value;
            }
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
//# sourceMappingURL=default~pages-after-salelist-after-salelist-module~pages-all-zt-all-zt-module~pages-allorder-allorde~abab8b3e.js.map