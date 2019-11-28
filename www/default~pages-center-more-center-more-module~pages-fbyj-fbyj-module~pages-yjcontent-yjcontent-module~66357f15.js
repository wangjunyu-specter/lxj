(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-center-more-center-more-module~pages-fbyj-fbyj-module~pages-yjcontent-yjcontent-module~66357f15"],{

/***/ "./src/app/services/yjlist.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/yjlist.service.ts ***!
  \********************************************/
/*! exports provided: YjlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YjlistService", function() { return YjlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");



var YjlistService = /** @class */ (function () {
    function YjlistService(http) {
        this.http = http;
        this.clear();
    }
    YjlistService.prototype.clear = function () {
        this.yjlist = [];
        this.gllist = [];
        this.zmlist = [];
        this.yjpageObj = {
            page: 1,
            num: 20,
            type: 1,
            isall: false
        };
        this.glpageObj = {
            page: 1,
            num: 20,
            type: 1,
            isall: false
        };
        this.zmpageObj = {
            page: 1,
            num: 20,
            type: 1,
            isall: false
        };
    };
    YjlistService.prototype.getPqone = function (id, type) {
        var arr;
        if (type === 0) {
            arr = this.yjlist;
        }
        else if (type === 1) {
            arr = this.gllist;
        }
        else {
            arr = this.zmlist;
        }
        for (var i = 0, j = arr.length; i < j; i++) {
            if (arr[i].id === id) {
                return arr[i];
            }
        }
        return null;
    };
    YjlistService.prototype.editOne = function (id, type, data) {
        var arr;
        if (type === 0) {
            arr = this.yjlist;
        }
        else if (type === 1) {
            arr = this.gllist;
        }
        else {
            arr = this.zmlist;
        }
        for (var i = 0, j = arr.length; i < j; i++) {
            if (arr[i].id === id) {
                var obj = arr[i];
                obj = Object.assign(obj, data);
                arr.splice(i, 1, obj);
                break;
            }
        }
    };
    YjlistService.prototype.addItem = function (type) {
        // let arr: any[];
        this.reset(type).then(function (res) { }).catch(function (err) { });
        // if (type === 1) {
        //   arr = this.yjlist;
        // } else if (type === 2) {
        //   arr = this.gllist;
        // } else {
        //   arr = this.zmlist;
        // }
        // arr.unshift(data);
    };
    YjlistService.prototype.deleteone = function (id, type) {
        var arr;
        if (type === 0) {
            arr = this.yjlist;
        }
        else if (type === 1) {
            arr = this.gllist;
        }
        else {
            arr = this.zmlist;
        }
        for (var i = 0, j = arr.length; i < j; i++) {
            if (arr[i].id === id) {
                arr.splice(i, 1);
                break;
            }
        }
    };
    YjlistService.prototype.getyjList = function () {
        if (this.yjlist.length === 0) {
            this.getListhttp(1).then(function (res) { }).catch(function (err) { });
        }
        return this.yjlist;
    };
    YjlistService.prototype.getglList = function () {
        if (this.gllist.length === 0) {
            this.getListhttp(2).then(function (res) { }).catch(function (err) { });
        }
        return this.gllist;
    };
    YjlistService.prototype.getzmList = function () {
        if (this.zmlist.length === 0) {
            this.getListhttp(3).then(function (res) { }).catch(function (err) { });
        }
        return this.zmlist;
    };
    YjlistService.prototype.reset = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err2_1, err2_2, err2_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type == 1)) return [3 /*break*/, 5];
                        this.yjpageObj.isall = false;
                        this.yjpageObj.page = 1;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getListhttp(1, 1)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err2_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/, true];
                    case 5:
                        if (!(type == 2)) return [3 /*break*/, 10];
                        this.glpageObj.isall = false;
                        this.glpageObj.page = 1;
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, this.getListhttp(2, 1)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        err2_2 = _a.sent();
                        return [2 /*return*/, false];
                    case 9: return [2 /*return*/, true];
                    case 10:
                        this.zmpageObj.isall = false;
                        this.zmpageObj.page = 1;
                        _a.label = 11;
                    case 11:
                        _a.trys.push([11, 13, , 14]);
                        return [4 /*yield*/, this.getListhttp(3, 1)];
                    case 12:
                        _a.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        err2_3 = _a.sent();
                        return [2 /*return*/, false];
                    case 14: return [2 /*return*/, true];
                }
            });
        });
    };
    YjlistService.prototype.addList = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err2_4, err2_5, err2_6;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type == 1)) return [3 /*break*/, 5];
                        if (this.yjpageObj.isall) {
                            return [2 /*return*/, false];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getListhttp(1)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err2_4 = _a.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/, true];
                    case 5:
                        if (!(type == 2)) return [3 /*break*/, 10];
                        if (this.glpageObj.isall) {
                            return [2 /*return*/, false];
                        }
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, this.getListhttp(2)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        err2_5 = _a.sent();
                        return [2 /*return*/, false];
                    case 9: return [2 /*return*/, true];
                    case 10:
                        if (this.zmpageObj.isall) {
                            return [2 /*return*/, false];
                        }
                        _a.label = 11;
                    case 11:
                        _a.trys.push([11, 13, , 14]);
                        return [4 /*yield*/, this.getListhttp(3)];
                    case 12:
                        _a.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        err2_6 = _a.sent();
                        return [2 /*return*/, false];
                    case 14: return [2 /*return*/, true];
                }
            });
        });
    };
    YjlistService.prototype.getListhttp = function (type, reset) {
        var _this = this;
        var obj;
        switch (type) {
            case 1:
                obj = Object.assign({}, this.yjpageObj);
                break;
            case 2:
                obj = Object.assign({}, this.glpageObj);
                break;
            case 3:
                obj = Object.assign({}, this.zmpageObj);
                break;
        }
        obj.type = type + 1;
        return new Promise(function (resolve, reject) {
            _this.http.getData(_this.http.getpqlist, obj).subscribe(function (res) {
                var _a, _b, _c;
                console.log(res);
                console.log(res);
                var data = res['result'];
                switch (type) {
                    case 1:
                        if (reset) {
                            _this.yjlist.length = 0;
                        }
                        (_a = _this.yjlist).push.apply(_a, data['result']);
                        if (!data['result'].length || data['result'].length < obj.num) {
                            _this.yjpageObj.isall = true;
                        }
                        else {
                            _this.yjpageObj.page++;
                        }
                        break;
                    case 2:
                        if (reset) {
                            _this.gllist.length = 0;
                        }
                        (_b = _this.gllist).push.apply(_b, data['result']);
                        if (!data['result'].length || data['result'].length < obj.num) {
                            _this.glpageObj.isall = true;
                        }
                        else {
                            _this.glpageObj.page++;
                        }
                        break;
                    case 3:
                        if (reset) {
                            _this.zmlist.length = 0;
                        }
                        (_c = _this.zmlist).push.apply(_c, data['result']);
                        if (!data['result'].length || data['result'].length < obj.num) {
                            _this.zmpageObj.isall = true;
                        }
                        else {
                            _this.zmpageObj.page++;
                        }
                        break;
                }
                resolve(true);
                // this.newGoods = data['new_goods'];
            }, function (err) {
                // alert(JSON.stringify(err))
                console.log(err);
                reject(false);
            });
        });
    };
    YjlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], YjlistService);
    return YjlistService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-center-more-center-more-module~pages-fbyj-fbyj-module~pages-yjcontent-yjcontent-module~66357f15.js.map