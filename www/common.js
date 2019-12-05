(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js ***!
  \*************************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};



/***/ }),

/***/ "./src/app/services/lljl.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/lljl.service.ts ***!
  \******************************************/
/*! exports provided: LljlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LljlService", function() { return LljlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-06-09 12:40:56
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 15:26:00
 * @Description: file content
 */

// 浏览记录
var LljlService = /** @class */ (function () {
    function LljlService() {
        this.idlist = new Set();
    }
    LljlService.prototype.addjl = function (id) {
        if (this.idlist.has(id)) {
            this.idlist.delete(id);
        }
        this.idlist.add(id);
    };
    LljlService.prototype.getList = function (page, limit) {
        var arr = Array.from(this.idlist);
        console.log(arr.slice());
        var arr2 = [];
        for (var i = 0; i < limit; i++) {
            if (!arr[i + page * limit]) {
                break;
            }
            arr2.push(arr[i + page * limit]);
        }
        return arr2;
    };
    LljlService.prototype.clear = function () {
        this.idlist.clear();
    };
    LljlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LljlService);
    return LljlService;
}());



/***/ }),

/***/ "./src/app/services/pqlist.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pqlist.service.ts ***!
  \********************************************/
/*! exports provided: PqlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PqlistService", function() { return PqlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _gzlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gzlist.service */ "./src/app/services/gzlist.service.ts");




var PqlistService = /** @class */ (function () {
    function PqlistService(http, gzlistfn) {
        this.http = http;
        this.gzlistfn = gzlistfn;
        this.clear();
    }
    PqlistService.prototype.clear = function () {
        this.list = [];
        this.gzList = [];
        this.pageObj = {
            page: 1,
            num: 20,
            type: 1,
            isall: false
        };
        this.gzpageObj = {
            page: 1,
            num: 20,
            isall: false
        };
    };
    PqlistService.prototype.deleteOne = function (id) {
        for (var index = 0; index < this.list.length; index++) {
            var element = this.list[index];
            if (element.id == id) {
                this.list.splice(index, 1);
                break;
            }
        }
    };
    PqlistService.prototype.getGzpageobj = function () {
        return this.gzpageObj;
    };
    PqlistService.prototype.getpageobj = function () {
        return this.pageObj;
    };
    PqlistService.prototype.getPqone = function (id, type) {
        var arr;
        if (type === 0) {
            arr = this.gzList;
        }
        else {
            arr = this.list;
        }
        for (var i = 0, j = arr.length; i < j; i++) {
            if (arr[i].id === id) {
                return arr[i];
            }
        }
        return null;
    };
    PqlistService.prototype.getList = function () {
        if (this.list.length === 0) {
            this.getListhttp().then(function (res) { }).catch(function (err) { });
        }
        return this.list;
    };
    PqlistService.prototype.getgzList = function () {
        console.log(this.gzList);
        if (this.gzList.length === 0) {
            this.getgzListhttp().then(function (res) { }).catch(function (err) { });
        }
        return this.gzList;
    };
    PqlistService.prototype.reset = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err2_1, err2_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type == 1)) return [3 /*break*/, 5];
                        this.gzpageObj.isall = false;
                        this.gzpageObj.page = 1;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getgzListhttp(1).then(function (res) { }).catch(function (err) { })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err2_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/, true];
                    case 5:
                        this.pageObj.isall = false;
                        this.pageObj.page = 1;
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, this.getListhttp(1)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        err2_2 = _a.sent();
                        return [2 /*return*/, false];
                    case 9: return [2 /*return*/, true];
                }
            });
        });
    };
    PqlistService.prototype.addList = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err2_3, err2_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type == 1)) return [3 /*break*/, 5];
                        if (this.gzpageObj.isall) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getgzListhttp()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err2_3 = _a.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/, true];
                    case 5:
                        if (this.pageObj.isall) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, this.getListhttp()];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        err2_4 = _a.sent();
                        return [2 /*return*/, false];
                    case 9: return [2 /*return*/, true];
                }
            });
        });
    };
    PqlistService.prototype.getListhttp = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.getData(_this.http.getpqlist, _this.pageObj).subscribe(function (res) {
                var _a;
                console.log(res);
                console.log(res);
                var data = res['result'];
                if (type) {
                    _this.list.length = 0;
                }
                (_a = _this.list).push.apply(_a, data['result']);
                if (!data['result'].length || data['result'].length < _this.pageObj.num) {
                    _this.pageObj.isall = true;
                }
                else {
                    _this.pageObj.page++;
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
    PqlistService.prototype.getgzListhttp = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.postformdata(_this.http.getfollowpqlist, _this.gzpageObj).subscribe(function (res) {
                var _a;
                console.log(res);
                var data = res['result'];
                if (type) {
                    _this.gzList.length = 0;
                }
                var userlist = data['users'];
                _this.gzlistfn.setList(userlist);
                (_a = _this.gzList).push.apply(_a, data['result']);
                if (!data['result'].length || data['result'].length < _this.gzpageObj.num) {
                    _this.gzpageObj.isall = true;
                }
                else {
                    _this.gzpageObj.page++;
                }
                resolve(true);
                // this.newGoods = data['new_goods'];
            }, function (err) {
                // alert(JSON.stringify(err))
                console.log(err);
                reject(err);
            });
        });
    };
    PqlistService.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _gzlist_service__WEBPACK_IMPORTED_MODULE_3__["GzlistService"] }
    ]; };
    PqlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _gzlist_service__WEBPACK_IMPORTED_MODULE_3__["GzlistService"]])
    ], PqlistService);
    return PqlistService;
}());



/***/ }),

/***/ "./src/app/services/supplierlist.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/supplierlist.service.ts ***!
  \**************************************************/
/*! exports provided: SupplierlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierlistService", function() { return SupplierlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-28 02:22:48
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-18 15:44:49
 * @Description: file content
 */


// 入驻商列表
var SupplierlistService = /** @class */ (function () {
    function SupplierlistService(http) {
        this.http = http;
        this.list = [];
        this.idlist = new Set();
        this.gxList = {};
    }
    SupplierlistService.prototype.clear = function () {
        this.list = [];
        this.idlist.clear();
        this.gxList = {};
    };
    SupplierlistService.prototype.setList = function (data) {
        data.suppid = data.suppid.toString();
        this.id = data.suppid;
        if (this.idlist.has(data.suppid)) {
            return false;
        }
        data.yj = Number(data.yj);
        this.list.push(data);
        this.idlist.add(data.suppid);
        this.gxList[data.suppid] = this.list.length - 1;
    };
    SupplierlistService.prototype.setData = function (id, key, data) {
        if (!this.idlist.has(id)) {
            return false;
        }
        this.list[this.gxList[id]][key] = data;
    };
    SupplierlistService.prototype.getData = function (id, gid) {
        if (gid === void 0) { gid = '0'; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.id = id;
                        if (this.idlist.has(id)) {
                            return [2 /*return*/, this.list[this.gxList[id]]];
                        }
                        return [4 /*yield*/, this.getHttp(id, gid)];
                    case 1:
                        res = _a.sent();
                        if (res)
                            return [2 /*return*/, this.list[this.gxList[this.id]]];
                        else
                            return [2 /*return*/, null];
                        return [2 /*return*/];
                }
            });
        });
    };
    SupplierlistService.prototype.getHttp = function (id, gid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(id);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.getData(_this.http.getsupplier, { id: gid, supplier_id: id ? Number(id) : -1 }).subscribe(function (res) {
                            _this.setList(res['data']);
                            resolve(true);
                        }, function (err) {
                            console.error(err);
                            reject(false);
                        });
                    })];
            });
        });
    };
    SupplierlistService.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    SupplierlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], SupplierlistService);
    return SupplierlistService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map