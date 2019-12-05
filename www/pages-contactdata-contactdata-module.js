(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contactdata-contactdata-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contactdata/contactdata.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contactdata/contactdata.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>添加出行人</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<ion-content padding>\n  <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-list>\n      <ion-item>\n        <ion-input placeholder=\"请输入姓名\" required [(ngModel)]=\"dataObj.consignee\" name=\"consignee\" #consignee=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder=\"请输入有效手机号码\" required [(ngModel)]=\"dataObj.tel\" name=\"tel\" #tel=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder=\"请输入18位身份证号码\" required [(ngModel)]=\"dataObj.card\" name=\"card\" #card=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>省</ion-label>\n        <ion-select placeholder=\"请选择省\" (ionChange)=\"selteaddress(2, dataObj.province)\" required [(ngModel)]=\"dataObj.province\" name=\"province\" cancelText=\"取消\" okText=\"确定\" #province=\"ngModel\">\n          <ion-select-option *ngFor=\"let item of provincelist\" [value]=\"item.region_id\">{{item.region_name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>市</ion-label>\n        <ion-select placeholder=\"请选择市\" (ionChange)=\"selteaddress(3, dataObj.city)\" required [(ngModel)]=\"dataObj.city\" name=\"city\" cancelText=\"取消\" okText=\"确定\" #city=\"ngModel\">\n          <ion-select-option *ngFor=\"let item of citylist\" [value]=\"item.region_id\">{{item.region_name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>区</ion-label>\n        <ion-select placeholder=\"请选择区\" required [(ngModel)]=\"dataObj.district\" name=\"district\" cancelText=\"取消\" okText=\"确定\" #district=\"ngModel\">\n          <ion-select-option *ngFor=\"let item of arealist\" [value]=\"item.region_id\">{{item.region_name}}</ion-select-option>\n        </ion-select>\n\n      </ion-item>\n      <ion-item>\n        <ion-textarea placeholder=\"详细地址：如道路、门牌号、小区、楼栋号、单元室等\" required [(ngModel)]=\"dataObj.address\" name=\"address\" #address=\"ngModel\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label>设为默认地址</ion-label>\n        <ion-toggle color=\"success\" [(ngModel)]=\"dataObj.defalut\" name=\"defalut\"></ion-toggle>\n      </ion-item>\n    </ion-list>\n    <ion-button color=\"success\" expand=\"block\" type=\"submit\" [disabled]=\"!userForm.form.valid\">提交</ion-button>\n  </form>\n  <p class=\"des\"><ion-text color=\"danger\">身份证号码错误会导致无法购买车票及保险</ion-text></p>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/contactdata/contactdata.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/contactdata/contactdata.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactdataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactdataPageModule", function() { return ContactdataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contactdata_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactdata.page */ "./src/app/pages/contactdata/contactdata.page.ts");







var routes = [
    {
        path: '',
        component: _contactdata_page__WEBPACK_IMPORTED_MODULE_6__["ContactdataPage"]
    }
];
var ContactdataPageModule = /** @class */ (function () {
    function ContactdataPageModule() {
    }
    ContactdataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contactdata_page__WEBPACK_IMPORTED_MODULE_6__["ContactdataPage"]]
        })
    ], ContactdataPageModule);
    return ContactdataPageModule;
}());



/***/ }),

/***/ "./src/app/pages/contactdata/contactdata.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/contactdata/contactdata.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".des {\n  font-size: var(--ion-sm-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9jb250YWN0ZGF0YS9jb250YWN0ZGF0YS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRhY3RkYXRhL2NvbnRhY3RkYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0ZGF0YS9jb250YWN0ZGF0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzIHtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxufSIsIi5kZXMge1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/contactdata/contactdata.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/contactdata/contactdata.page.ts ***!
  \*******************************************************/
/*! exports provided: ContactdataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactdataPage", function() { return ContactdataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _services_contactlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/contactlist.service */ "./src/app/services/contactlist.service.ts");





// import { ProvincesService } from '../../services/provinces.service';


var ContactdataPage = /** @class */ (function () {
    function ContactdataPage(nav, http, activeroute, native, contactlist, alertController) {
        this.nav = nav;
        this.http = http;
        this.activeroute = activeroute;
        this.native = native;
        this.contactlist = contactlist;
        this.alertController = alertController;
    }
    ContactdataPage.prototype.ngOnInit = function () {
        this.provincelist = this.contactlist.getPro();
        this.dataObj = {
            consignee: '',
            tel: '',
            card: '',
            province: '',
            city: '',
            district: '',
            address: '',
            defalut: 1
        };
        var params = this.activeroute.snapshot.queryParams;
        this.id = (params['id']).toString();
    };
    ContactdataPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.id !== '0' && !this.dataObj['province']) {
            this.contactlist.getItem(this.id).then(function (obj) {
                console.log(obj);
                if (obj.mr == 1) {
                    obj.defalut = 1;
                }
                else {
                    obj.defalut = 0;
                }
                obj.province = obj.province_id;
                obj.city = obj.city_id;
                obj.district = obj.district_id;
                _this.dataObj = obj;
                console.log(_this.dataObj);
            });
        }
        if (this.provincelist.length === 0) {
            this.selteaddress(1);
        }
    };
    ContactdataPage.prototype.selteaddress = function (type, id) {
        var _this = this;
        if (id === void 0) { id = '1'; }
        this.http.getData(this.http.getcity, { parent: id, type: type }).subscribe(function (res) {
            console.log(res);
            if (type === 1) {
                _this.contactlist.setPro(res['regions']);
            }
            else if (type === 2) {
                _this.citylist = res['regions'];
            }
            else {
                _this.arealist = res['regions'];
            }
        });
    };
    ContactdataPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.dataObj);
        var telpag = /^1(\d){10}$/;
        if (!telpag.test(this.dataObj.tel)) {
            console.log('验证失败');
            this.native.presentAlert('请输入正确的手机号码!');
            return false;
        }
        var cardneg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
        if (!cardneg.test(this.dataObj.card)) {
            console.log('验证失败');
            this.native.presentAlert('请输入18位身份证号码!');
            return false;
        }
        var obj = Object.assign({}, this.dataObj);
        if (!obj.mobile) {
            obj.mobile = obj.tel;
        }
        if (obj.defalut) {
            obj.defalut = 1;
        }
        else {
            obj.defalut = 0;
        }
        this.http.postformdataloading(this.http.editorupdateaddress, obj).subscribe(function (res) {
            _this.contactlist.edmit(res.result);
            _this.presentAlert();
        });
    };
    ContactdataPage.prototype.goBack = function () {
        this.nav.back();
    };
    ContactdataPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '提示',
                            message: '操作成功.',
                            buttons: [{
                                    text: '确定',
                                    role: '确定',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                        _this.goBack();
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactdataPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_native_service__WEBPACK_IMPORTED_MODULE_5__["NativeService"] },
        { type: _services_contactlist_service__WEBPACK_IMPORTED_MODULE_6__["ContactlistService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    ContactdataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactdata',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactdata.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contactdata/contactdata.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contactdata.page.scss */ "./src/app/pages/contactdata/contactdata.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_native_service__WEBPACK_IMPORTED_MODULE_5__["NativeService"],
            _services_contactlist_service__WEBPACK_IMPORTED_MODULE_6__["ContactlistService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ContactdataPage);
    return ContactdataPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contactdata-contactdata-module.js.map