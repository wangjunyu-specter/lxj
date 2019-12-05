(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-after-salelist-after-salelist-module~pages-all-zt-all-zt-module~pages-allorder-allorde~12213322"],{

/***/ "./src/app/services/contactlist.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/contactlist.service.ts ***!
  \*************************************************/
/*! exports provided: ContactlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactlistService", function() { return ContactlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-06-25 23:35:14
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 15:18:17
 * @Description: file content
 */



// 联系人数据
var ContactlistService = /** @class */ (function () {
    function ContactlistService(http, user) {
        this.http = http;
        this.user = user;
        this.clear();
    }
    ContactlistService.prototype.getContactlist = function () {
        if (this.list.length === 0) {
            this.getList();
        }
        return this.list;
    };
    ContactlistService.prototype.setList = function (list) {
        var _this = this;
        if (list.length === 0) {
            return false;
        }
        this.list.length = 0;
        this.user.getUserp().then(function (res) {
            console.log(res);
            _this.mrid = res.address_id;
            console.log(_this.mrid);
            for (var i = 0, j = list.length; i < j; i++) {
                var jj = _this.list.length;
                for (var ii = 0; ii < jj; ii++) {
                    if (_this.list[ii].address_id == list[i].address_id) {
                        list.splice(i, 1);
                        i--;
                        j--;
                        break;
                    }
                }
                _this.list.push(list[i]);
                if (list[i].address_id == _this.mrid && _this.mrid != '0') {
                    _this.list[i].active = true;
                    _this.list[i].mr = 1;
                    _this.activeList.push(list[i]);
                }
                else {
                    _this.list[i].mr = 0;
                }
            }
            if (!_this.mrid) {
                _this.list[0].mr = 1;
                _this.activeList.push(_this.list[0]);
                _this.list[0].active = true;
            }
        }).catch(function (err) { });
        console.log(this.activeList);
    };
    ContactlistService.prototype.setPro = function (list) {
        var _a;
        this.provinceList.length = 0;
        (_a = this.provinceList).push.apply(_a, list);
    };
    ContactlistService.prototype.getPro = function () {
        return this.provinceList;
    };
    ContactlistService.prototype.getProasync = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.provinceList.length === 0)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getList()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, []];
                    case 4: return [2 /*return*/, this.provinceList];
                }
            });
        });
    };
    ContactlistService.prototype.setMr = function (id) {
        var _this = this;
        this.http.getData(this.http.setMraddress, { address_id: id }).subscribe(function (res) {
            _this.setMrfn(id);
        }, function (error2) { });
    };
    ContactlistService.prototype.delete = function (id) {
        var _this = this;
        this.http.getData(this.http.deleteaddress, { id: id }).subscribe(function (res) {
            for (var i = 0, j = _this.list.length; i < j; i++) {
                console.log(_this.list[i]);
                if (_this.list[i]['address_id'] == id) {
                    _this.list.splice(i, 1);
                }
                if (res.result) {
                    _this.setMrfn(res.result);
                }
                for (var i_1 = 0, j_1 = _this.activeList.length; i_1 < j_1; i_1++) {
                    if (_this.activeList[i_1].address_id == id) {
                        _this.activeList.splice(i_1, 1);
                    }
                }
            }
        }, function (error2) { });
    };
    ContactlistService.prototype.setMrfn = function (id) {
        this.mrid = id;
        this.user.setMraddress(id);
        this.list.map(function (res) {
            if (res.id == id || res.address_id == id) {
                res.mr = 1;
            }
            else {
                res.mr = 0;
            }
        });
    };
    ContactlistService.prototype.setData = function (num) {
        if (this.activeList.length === num) {
            return false;
        }
        if (this.list.length > 0) {
            for (var i = 0, j = this.list.length; i < j; i++) {
                this.list[i].active = false;
            }
        }
        if (this.activeList.length > 0) {
            this.activeList.length = 0;
        }
    };
    ContactlistService.prototype.getItem = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, j, i, j, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.list && this.list.length > 0) {
                            for (i = 0, j = this.list.length; i < j; i++) {
                                if (this.list[i].address_id == id) {
                                    return [2 /*return*/, this.list[i]];
                                }
                            }
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getList()];
                    case 2:
                        _a.sent();
                        for (i = 0, j = this.list.length; i < j; i++) {
                            if (this.list[i].address_id === id) {
                                return [2 /*return*/, this.list[i]];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/, {}];
                    case 4: return [2 /*return*/, {}];
                }
            });
        });
    };
    ContactlistService.prototype.edmit = function (item) {
        console.log(item);
        if (item.defalut == 1) {
            item.mr = 1;
            this.setMrfn(item.address_id);
            for (var i = 0, j = this.activeList.length; i < j; i++) {
                if (this.activeList[i].address_id == item.address_id) {
                    this.activeList.splice(i, 1, item);
                }
                else {
                    if (this.activeList[i].mr == 1) {
                        this.activeList[i].mr = 0;
                    }
                }
            }
        }
        if (this.activeList.length === 0) {
            this.activeList.push(item);
        }
        var isupdate = false;
        for (var i = 0, j = this.list.length; i < j; i++) {
            if (this.list[i].address_id == item.address_id) {
                this.list.splice(i, 1, item);
                isupdate = true;
            }
            else {
                if (item.mr == 1) {
                    this.list[i].mr = 0;
                }
            }
        }
        if (!isupdate) {
            this.list.push(item);
        }
        console.log(this.list);
    };
    ContactlistService.prototype.getActive = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.activeList.length === 0)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getList()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        return [2 /*return*/, []];
                    case 4: return [2 /*return*/, this.activeList];
                }
            });
        });
    };
    ContactlistService.prototype.setActive = function (item, num) {
        console.log(item);
        console.log(num);
        var data;
        var arr = [];
        for (var i = 0, j = this.list.length; i < j; i++) {
            if (this.list[i].id === item.id) {
                this.list[i].active = this.list[i].active ? false : true;
                if (this.list[i].active) {
                    arr.push(i);
                    if (arr.length > num) {
                        this.list[arr[arr.length - 2]].active = false;
                    }
                }
                data = this.list[i];
            }
            else {
                console.log(this.list[i]);
                if (arr.length === num && this.list[i].active) {
                    this.list[i].active = false;
                }
                else if (arr.length < num && this.list[i].active) {
                    arr.push(i);
                }
                else {
                    this.list[i].active = false;
                }
            }
        }
        if (this.activeList.includes(item)) {
            for (var i = 0, j = this.activeList.length; i < j; i++) {
                if (this.activeList[i].id === item.id) {
                    this.activeList.splice(i, 1);
                    break;
                }
            }
        }
        else if (!this.activeList.includes(item) && this.activeList.length == num) {
            this.activeList.splice(this.activeList.length - 1, 1, data);
        }
        else {
            this.activeList.push(item);
        }
    };
    ContactlistService.prototype.getList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.isgetdata) {
                    return [2 /*return*/, false];
                }
                this.isgetdata = true;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.getDataloading(_this.http.getaddress).subscribe(function (res) {
                            _this.setList(res['data']['consignee_list']);
                            _this.setPro(res['data']['shop_province_list']);
                            _this.isgetdata = false;
                            resolve(true);
                        }, function (err) {
                            console.log(err);
                            _this.isgetdata = false;
                            reject(false);
                        });
                    })];
            });
        });
    };
    ContactlistService.prototype.remove = function () {
        this.list.length = 0;
        this.activeList.length = 0;
        this.mrid = '';
    };
    ContactlistService.prototype.clear = function () {
        this.activeList = [];
        this.list = [];
        this.provinceList = [];
        this.isgetdata = false;
    };
    ContactlistService.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    ContactlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ContactlistService);
    return ContactlistService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-after-salelist-after-salelist-module~pages-all-zt-all-zt-module~pages-allorder-allorde~12213322.js.map