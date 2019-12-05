(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pqcontent-pqcontent-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pqcontent/pqcontent.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pqcontent/pqcontent.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n * @Author: wjy-mac\n * @Date: 2019-07-24 22:54:10\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-19 21:26:59\n * @Description: file content\n -->\n<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <div class=\"search-bar\">\n      <div class=\"left\" (click)=\"goBack()\">\n        <img src=\"/assets/backbg.svg\" alt=\"\">\n      </div>\n      <div class=\"center\" *ngIf=\"data\">\n        <div class=\"person\" (click)=\"goperson()\">\n          <img [src]=\"data.headimg | imgsrc: http.zdomain\">\n          <div class=\"name-box\">\n            <div class=\"name\">{{data.user_name}} <app-yhbox [color]=\"'yellow'\" [title]=\"data.name\" [noborder]=\"true\"></app-yhbox></div>\n            <div class=\"des\">{{data.createtime | oldtonow}}</div>\n          </div>\n        </div>\n        <div class=\"gz\" *ngIf=\"isgz()\" (click)=\"setgz(data.userid)\">\n          <span>+关注</span>\n        </div>\n      </div>\n      <div class=\"right\">\n        <ion-icon name=\"more\" mode=\"ios\" (click)=\"edmit()\"></ion-icon>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"top-content ion-padding\" *ngIf=\"data\">\n    <p *ngIf=\"data.content && data.content != 'null'\">{{data.content}}</p>\n    <app-pqimgbox [imglist]=\"data.thumb && data.thumb[0] ? data.thumb : data.imgarr\" [ytimglist]=\"data.imgarr\"></app-pqimgbox>\n    <div class=\"address-box\" *ngIf=\"data.address && data.address != 'null'\">\n      <div class=\"left\">\n        <div class=\"address\">\n          <ion-icon name=\"pin\" color=\"dark\"></ion-icon>\n          <span>{{data.address}}</span>\n        </div>\n      </div>\n      <ion-text color=\"medium\">距你0km</ion-text>\n    </div>\n    <div class=\"img-box\">\n      <img *ngFor=\"let src of data.heads\" [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\n      {{data.dznum}}人觉得很赞\n    </div>\n  </div>\n  <div *ngIf=\"data\" class=\"app-pllist ion-padding-bottom ion-margin-bottom\">\n    <div class=\"hfnum\">{{data.plnum}}条回复</div>\n    <app-pllist *ngFor=\"let item of pllist\" [data]=\"item\" [tid]=\"id\" [uid]=\"data.userid\" (setItem)=\"setplItem($event)\"></app-pllist>\n  </div>\n  <ion-backdrop *ngIf=\"isshowDrop\" (ionBackdropTap)=\"clickdrop()\"></ion-backdrop>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"ion-no-padding\">\n    <app-chatinputbox (sub)=\"sub($event)\" (myfous)=\"monfous()\" (mybulr)=\"monblur()\" [username]=\"seletename\"></app-chatinputbox>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/pqcontent/pqcontent.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/pqcontent/pqcontent.module.ts ***!
  \*****************************************************/
/*! exports provided: PqcontentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PqcontentPageModule", function() { return PqcontentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pqcontent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pqcontent.page */ "./src/app/pages/pqcontent/pqcontent.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _pqcontent_page__WEBPACK_IMPORTED_MODULE_6__["PqcontentPage"]
    }
];
var PqcontentPageModule = /** @class */ (function () {
    function PqcontentPageModule() {
    }
    PqcontentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pqcontent_page__WEBPACK_IMPORTED_MODULE_6__["PqcontentPage"]]
        })
    ], PqcontentPageModule);
    return PqcontentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pqcontent/pqcontent.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/pqcontent/pqcontent.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #fff;\n}\n\nion-content {\n  --background: var(--ion-gray-background-color);\n}\n\nion-content .top-content {\n  background-color: #fff;\n}\n\nion-content .address-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 10px;\n}\n\nion-content .address-box .left {\n  margin-right: 10px;\n  max-width: 55%;\n}\n\nion-content .address-box .left .address {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: var(--ion-color-light);\n  padding: 2px 5px;\n  border-radius: 5px;\n  font-size: var(--ion-sm-text);\n}\n\nion-content .address-box .left .address span {\n  flex: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\nion-content .address-box ion-text {\n  font-size: var(--ion-sm-text);\n}\n\nion-content .img-box {\n  margin-top: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n}\n\nion-content .img-box img {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n\nion-content .app-pllist {\n  padding-top: 1px;\n  margin-top: 15px;\n  background-color: #fff;\n}\n\nion-content .app-pllist .hfnum {\n  font-size: var(--ion-text);\n  color: var(--ion-color-dark);\n  margin: 15px;\n}\n\n.search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px;\n  height: 36px;\n}\n\n.search-bar .left {\n  width: var(--ion-statusbar-left);\n  font-size: var(--ion-icon-big);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.search-bar .left img {\n  width: 22px;\n  margin-left: 5px;\n}\n\n.search-bar .right {\n  width: 25px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.search-bar .right ion-icon {\n  color: var(--ion-color-dark);\n}\n\n.search-bar .right div.round {\n  background-color: rgba(0, 0, 0, 0.6);\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-bar .center {\n  flex: 1;\n  margin: 0 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.search-bar .center .person {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.search-bar .center .person img {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.search-bar .center .person .name-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.search-bar .center .person .name-box .name {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: var(--ion-title);\n  color: var(--ion-color-dark);\n}\n\n.search-bar .center .person .name-box .name app-yhbox {\n  margin-left: 10px;\n}\n\n.search-bar .center .person .name-box .des {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n}\n\n.search-bar .center .gz span {\n  background: var(--ion-color-linegradient);\n  font-size: var(--ion-sm-text);\n  height: 20px;\n  padding: 0 7px;\n  display: block;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 10px;\n}\n\n.search-bar .center .gz span:active {\n  background: var(--ion-color-linegradient-active);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9wcWNvbnRlbnQvcHFjb250ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHFjb250ZW50L3BxY29udGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsOENBQUE7QUNFRjs7QURERTtFQUNFLHNCQUFBO0FDR0o7O0FEREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURGSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0lOOztBREhNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDS1I7O0FESFE7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDS1Y7O0FEQUk7RUFDRSw2QkFBQTtBQ0VOOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRU47O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURBSTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDRU47O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQUU7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRERJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDR047O0FEQUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURESTtFQUNFLDRCQUFBO0FDR047O0FEREk7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDR047O0FES0U7RUFDRSxPQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURLSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNITjs7QURJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBRElNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ0ZSOztBREdRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNEVjs7QURFVTtFQUNFLGlCQUFBO0FDQVo7O0FER1E7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0FDRFY7O0FETU07RUFDRSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUdBLG1CQUFBO0FDTFI7O0FETVE7RUFDRSxnREFBQTtBQ0pWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHFjb250ZW50L3BxY29udGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xyXG4gIC50b3AtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuYWRkcmVzcy1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC5sZWZ0IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDU1JTtcclxuICAgICAgLmFkZHJlc3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgLy9tYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW1nLWJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYXBwLXBsbGlzdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAuaGZudW0ge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uc2VhcmNoLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgLmxlZnQge1xyXG4gICAgd2lkdGg6IHZhcigtLWlvbi1zdGF0dXNiYXItbGVmdCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1pY29uLWJpZyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgfVxyXG4gICAgZGl2LnJvdW5kIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICAgIHdpZHRoOiAyMXB4O1xyXG4gICAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC8vaW1nIHtcclxuICAgIC8vICB3aWR0aDogMjJweDtcclxuICAgIC8vICBoZWlnaHQ6IDIycHg7XHJcbiAgICAvLyAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIC8vfVxyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIC8vaGVpZ2h0OiAyN3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLnBlcnNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAubmFtZS1ib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgICAgYXBwLXloYm94IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZ3oge1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGluZWdyYWRpZW50KTtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgLy93aWR0aDogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDdweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saW5lZ3JhZGllbnQtYWN0aXZlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xufVxuaW9uLWNvbnRlbnQgLnRvcC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbmlvbi1jb250ZW50IC5hZGRyZXNzLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5hZGRyZXNzLWJveCAubGVmdCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWF4LXdpZHRoOiA1NSU7XG59XG5pb24tY29udGVudCAuYWRkcmVzcy1ib3ggLmxlZnQgLmFkZHJlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG59XG5pb24tY29udGVudCAuYWRkcmVzcy1ib3ggLmxlZnQgLmFkZHJlc3Mgc3BhbiB7XG4gIGZsZXg6IDE7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWNvbnRlbnQgLmFkZHJlc3MtYm94IGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG59XG5pb24tY29udGVudCAuaW1nLWJveCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbmlvbi1jb250ZW50IC5pbWctYm94IGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5pb24tY29udGVudCAuYXBwLXBsbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5pb24tY29udGVudCAuYXBwLXBsbGlzdCAuaGZudW0ge1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuLnNlYXJjaC1iYXIgLmxlZnQge1xuICB3aWR0aDogdmFyKC0taW9uLXN0YXR1c2Jhci1sZWZ0KTtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24taWNvbi1iaWcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VhcmNoLWJhciAubGVmdCBpbWcge1xuICB3aWR0aDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5zZWFyY2gtYmFyIC5yaWdodCB7XG4gIHdpZHRoOiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnNlYXJjaC1iYXIgLnJpZ2h0IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbi5zZWFyY2gtYmFyIC5yaWdodCBkaXYucm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHdpZHRoOiAyMXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWFyY2gtYmFyIC5jZW50ZXIge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDAgMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaC1iYXIgLmNlbnRlciAucGVyc29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaC1iYXIgLmNlbnRlciAucGVyc29uIGltZyB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uc2VhcmNoLWJhciAuY2VudGVyIC5wZXJzb24gLm5hbWUtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnNlYXJjaC1iYXIgLmNlbnRlciAucGVyc29uIC5uYW1lLWJveCAubmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuLnNlYXJjaC1iYXIgLmNlbnRlciAucGVyc29uIC5uYW1lLWJveCAubmFtZSBhcHAteWhib3gge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5zZWFyY2gtYmFyIC5jZW50ZXIgLnBlcnNvbiAubmFtZS1ib3ggLmRlcyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uc2VhcmNoLWJhciAuY2VudGVyIC5neiBzcGFuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpbmVncmFkaWVudCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDAgN3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2VhcmNoLWJhciAuY2VudGVyIC5neiBzcGFuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saW5lZ3JhZGllbnQtYWN0aXZlKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/pqcontent/pqcontent.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/pqcontent/pqcontent.page.ts ***!
  \***************************************************/
/*! exports provided: PqcontentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PqcontentPage", function() { return PqcontentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_native_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_pqlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/pqlist.service */ "./src/app/services/pqlist.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_gzlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/gzlist.service */ "./src/app/services/gzlist.service.ts");
/* harmony import */ var _services_emojiishow_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/emojiishow.service */ "./src/app/services/emojiishow.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_plitemclick_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/plitemclick.service */ "./src/app/services/plitemclick.service.ts");
/* harmony import */ var src_app_services_deletemyrelease_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/deletemyrelease.service */ "./src/app/services/deletemyrelease.service.ts");












// import {Keyboard} from "@ionic-native/keyboard/ngx";
var PqcontentPage = /** @class */ (function () {
    function PqcontentPage(activeroute, nav, pqlistfn, http, gzlist, emojiishow, userfn, itemclickfn, actionSheetController, native, mydeletefn, alertController, route) {
        this.activeroute = activeroute;
        this.nav = nav;
        this.pqlistfn = pqlistfn;
        this.http = http;
        this.gzlist = gzlist;
        this.emojiishow = emojiishow;
        this.userfn = userfn;
        this.itemclickfn = itemclickfn;
        this.actionSheetController = actionSheetController;
        this.native = native;
        this.mydeletefn = mydeletefn;
        this.alertController = alertController;
        this.route = route;
        this.pageObj = {
            page: 1,
            num: 20
        };
    }
    PqcontentPage.prototype.ngOnInit = function () {
        this.isshowDrop = false;
        this.setPlitem = {};
    };
    PqcontentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('进来了');
        this.gzlist.getList().then(function (res) {
            _this.gzlistarr = res;
        }).catch(function (err2) {
            _this.gzlistarr = [];
        });
        this.activeroute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.id = params['id'];
            _this.type = params['type'] ? Number(params['type']) : 0;
            _this.data = _this.pqlistfn.getPqone(_this.id, _this.type);
            console.log(_this.data);
            _this.getContent();
        });
        this.userfn.getUserp().then(function (res) {
            _this.user = res;
        });
    };
    PqcontentPage.prototype.setgz = function (touid) {
        var _this = this;
        this.http.getData(this.http.setgz, { touid: touid, type: 1 }).subscribe(function (res) {
            console.log(res);
            // this.gzlistfn.puitem(touid);
            _this.gzlistarr.push(touid);
        });
    };
    PqcontentPage.prototype.isgz = function () {
        if (this.gzlistarr.includes(this.data.userid)) {
            return false;
        }
        return true;
    };
    PqcontentPage.prototype.goperson = function () {
        this.route.navigate(['/myrelease'], { queryParams: { userid: this.data.userid } });
    };
    PqcontentPage.prototype.getContent = function () {
        var _this = this;
        var hasdata = 1;
        if (!this.data) {
            hasdata = 2;
        }
        this.http.getData(this.http.getpllist, { tid: this.id, page: this.pageObj.page, num: this.pageObj.num, hasdata: hasdata }).subscribe(function (res) {
            console.log(res);
            if (!_this.data) {
                _this.data = res.result.data.result;
                _this.gzlist.setList(res.result.data.users);
            }
            _this.pllist = res.result.result;
        }, function (err) {
            console.log(err);
        });
    };
    PqcontentPage.prototype.goBack = function () {
        this.nav.back();
    };
    PqcontentPage.prototype.monfous = function () {
        console.log('时候');
        this.isshowDrop = true;
        // const el = document.querySelector('ion-footer');
        // setTimeout(() => {
        //     el.scrollIntoView(false);
        // }, 200);
        // this.positionStyle = {
        //     position: 'absolute',
        //     bottom: 0
        // };
    };
    PqcontentPage.prototype.monblur = function () {
        if (!this.emojiishow.getIsshows()) {
            this.blurClear();
        }
        // const el = document.querySelector('ion-footer');
        // el.scrollIntoView(true);
        // this.positionStyle = {
        //     position: '',
        //     bottom: ''
        // };
    };
    PqcontentPage.prototype.sub = function (content) {
        var _this = this;
        if (!content) {
            return false;
        }
        console.log(content);
        var item = Object.assign({}, this.setPlitem);
        var obj = {
            touid: item.userid || this.data.userid,
            tid: this.data.id,
            content: content,
        };
        if (item.uid != this.user.user_id && item.touid == this.user.user_id) {
            obj.ishf = 1;
        }
        else {
            obj.ishf = 0;
        }
        console.log(item);
        if (item.pid && item.pid != 0) {
            obj['pid'] = item.pid;
        }
        else if (item.id && item.id != 0) {
            obj['pid'] = item.id;
        }
        else {
            obj['pid'] = 0;
        }
        console.log(obj);
        this.blurClear(1);
        this.http.postformdataloading(this.http.setpl, obj).subscribe(function (res) {
            console.log(res);
            // : todo 差头像等数据
            obj.id = res.result.id;
            obj.time = Date.parse((new Date()).toString()) / 1000;
            obj.headimg = _this.user.headimg;
            obj.dznum = 0;
            obj.user_name = _this.user.user_name;
            obj.name = res.result.user.name;
            console.log(obj.pid);
            if (obj.pid == 0) {
                _this.pllist.unshift(obj);
            }
            else {
                for (var i = 0, j = _this.pllist.length; i < j; i++) {
                    console.log(_this.pllist[i].id);
                    if (_this.pllist[i].id == obj.pid) {
                        if (!_this.pllist[i].chrild) {
                            _this.pllist[i].chrild = [];
                        }
                        _this.pllist[i].chrild.unshift(obj);
                        _this.pllist[i].plnum += 1;
                        return false;
                    }
                }
            }
        });
    };
    PqcontentPage.prototype.clickdrop = function () {
        this.blurClear(1);
        this.itemclickfn.Source.emit(2);
    };
    PqcontentPage.prototype.setplItem = function (item) {
        console.log(item);
        this.isshowDrop = true;
        this.seletename = item.user_name;
        this.setPlitem = item;
    };
    PqcontentPage.prototype.blurClear = function (type) {
        var _this = this;
        if (type) {
            this.emojiishow.setIsshow(2);
        }
        this.isclear = setTimeout(function () {
            _this.setPlitem = {};
            _this.isclear = null;
        }, 1000);
        this.seletename = '';
        this.isshowDrop = false;
    };
    PqcontentPage.prototype.edmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var img, buttons, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        img = "";
                        if (this.data && this.data.thumb && this.data.thumb.length > 0) {
                            img = this.data.thumb[0];
                        }
                        buttons = [{
                                text: '分享微信好友',
                                role: '',
                                handler: function () {
                                    _this.native.wechatShare(_this.data.content, '', img || _this.http.zdomain + 'logo108.png', 2);
                                }
                            },
                            {
                                text: '分享到朋友圈',
                                role: '',
                                handler: function () {
                                    _this.native.wechatShare(_this.data.content, '', img || _this.http.zdomain + 'logo108.png', 1);
                                }
                            }
                        ];
                        // this.native.weboShare();
                        if (this.user.user_id == this.data.userid) {
                            buttons.push({
                                text: '删除',
                                handler: function () {
                                    _this.sureDelete();
                                }
                            });
                        }
                        buttons.push({
                            text: '取消',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        });
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: '操作',
                                buttons: buttons
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
    PqcontentPage.prototype.seleteItem = function () {
        var _this = this;
        console.log(this.data);
        this.http.getDataloading(this.http.deletepqitem, { id: this.id, type: 1 }).subscribe(function (res) {
            _this.mydeletefn.setId(_this.id, 0);
            _this.pqlistfn.deleteOne(_this.id);
            _this.goBack();
        }, function (err) { });
    };
    PqcontentPage.prototype.sureDelete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '提示',
                            message: '删除后无法恢复!',
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: '确定删除',
                                    handler: function () {
                                        _this.seleteItem();
                                    }
                                }
                            ]
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
    PqcontentPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _services_pqlist_service__WEBPACK_IMPORTED_MODULE_5__["PqlistService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
        { type: _services_gzlist_service__WEBPACK_IMPORTED_MODULE_7__["GzlistService"] },
        { type: _services_emojiishow_service__WEBPACK_IMPORTED_MODULE_8__["EmojiishowService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: _services_plitemclick_service__WEBPACK_IMPORTED_MODULE_10__["PlitemclickService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: src_app_services_native_service__WEBPACK_IMPORTED_MODULE_1__["NativeService"] },
        { type: src_app_services_deletemyrelease_service__WEBPACK_IMPORTED_MODULE_11__["DeletemyreleaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PqcontentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-pqcontent',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pqcontent.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pqcontent/pqcontent.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pqcontent.page.scss */ "./src/app/pages/pqcontent/pqcontent.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_pqlist_service__WEBPACK_IMPORTED_MODULE_5__["PqlistService"], _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            _services_gzlist_service__WEBPACK_IMPORTED_MODULE_7__["GzlistService"], _services_emojiishow_service__WEBPACK_IMPORTED_MODULE_8__["EmojiishowService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _services_plitemclick_service__WEBPACK_IMPORTED_MODULE_10__["PlitemclickService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], src_app_services_native_service__WEBPACK_IMPORTED_MODULE_1__["NativeService"],
            src_app_services_deletemyrelease_service__WEBPACK_IMPORTED_MODULE_11__["DeletemyreleaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PqcontentPage);
    return PqcontentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pqcontent-pqcontent-module.js.map