(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-myrelease-myrelease-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myrelease/myrelease.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myrelease/myrelease.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{!userId ? '我的发布' : ''}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n       pullingIcon=\"arrow-dropdown\"\n       pullingText=\"Pull to refresh\"\n       refreshingSpinner=\"circles\"\n       refreshingText=\"更新中...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"center-top\" *ngIf=\"user\">\n    <div class=\"box ion-padding\">\n      <div class=\"header\">\n        <ion-avatar>\n          <img [src]=\"user.headimg  | imgsrc: http.domain\">\n        </ion-avatar>\n        <div class=\"right\">\n          <div class=\"name\">\n            {{user.user_name}}\n            <ion-button color=\"success\" size=\"small\" *ngIf=\"userId && !isgz\" (click)=\"setgz(userId)\">\n              关注\n              <!--<img src=\"./assets/centerarrow.svg\">-->\n            </ion-button>\n            <ion-button color=\"secondary\" size=\"small\" *ngIf=\"userId && isgz\" (click)=\"setgz(userId, 2)\">\n              取消关注\n              <!--<img src=\"./assets/centerarrow.svg\">-->\n            </ion-button>\n          </div>\n          <div class=\"des\">\n            <span>LV.{{user.user_rank}}</span>\n            {{user.lxdj}}\n          </div>\n        </div>\n      </div>\n      <div class=\"footer\">\n        <ion-grid>\n          <ion-row>\n            <ion-col (click)=\"openUsers(1)\">\n              <span>{{user.gznum | setnum}}</span><span>关注</span>\n            </ion-col>\n            <ion-col (click)=\"openUsers(2)\">\n              <span>{{user.fsnum | setnum}}</span><span>粉丝</span>\n            </ion-col>\n            <ion-col>\n              <span>{{user.dznum | setnum}}</span><span>获赞</span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n  <div class=\"ion-padding\">\n    <div style=\"background: #fff\">\n      <ion-segment mode=\"ios\" (ionChange)=\"setType()\" color=\"success\" [(ngModel)]=\"pageType\">\n        <ion-segment-button [value]=\"1\" mode=\"ios\">\n          <ion-label>票圈</ion-label>\n        </ion-segment-button>\n        <ion-segment-button [value]=\"2\" mode=\"ios\">\n          <ion-label>游记</ion-label>\n        </ion-segment-button>\n        <ion-segment-button [value]=\"3\" mode=\"ios\">\n          <ion-label>攻略</ion-label>\n        </ion-segment-button>\n        <ion-segment-button [value]=\"4\" mode=\"ios\">\n          <ion-label>游记</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    <app-nomore *ngIf=\" allList && allList.length > 0 && (pageType == 1 && allList[0].length === 0 || pageType == 2 && allList[1].length === 0 || pageType == 3 && allList[2].length === 0 || pageType == 4 && allList[3].length === 0) \"></app-nomore>\n    <div class=\"content-box content-one\" [ngClass]=\"{show: pageType == 1}\">\n      <div *ngFor=\"let item of allList[0]\">\n        <ion-card mode=\"ios\" *ngIf=\"item.opentype == 0\">\n          <img *ngIf=\"item.status == 3 && userId == 0\" class=\"wtg\" src=\"../../../assets/wtg.svg\" />\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img [src]=\"http.headimg | imgsrc: http.zdomain\">\n            </ion-avatar>\n            <ion-label>\n              <h2 class=\"item-title\">{{item.user_name}}<app-yhbox [color]=\"'yellow'\" [title]=\"item.name\" [noborder]=\"true\"></app-yhbox></h2>\n              <p>{{item.createtime | oldtonow}}</p></ion-label>\n            <!--<ion-button  *ngIf=\"item.userid | isgz: gzlistfn.getList()\" (click)=\"setgz(item.userid)\" color=\"medium\" size=\"small\" shape=\"round\" fill=\"outline\" slot=\"end\">+关注</ion-button>-->\n          </ion-item>\n\n          <ion-card-content>\n            <div class=\"title\" (click)=\"toPage(item.id)\"  *ngIf=\"item.content && item.content != 'null'\">{{item.content}}</div>\n            <div class=\"ion-padding-top\">\n              <app-pqimgbox [imglist]=\"item.thumb[0] ? item.thumb : item.imgarr\" [ytimglist]=\"item.imgarr\"></app-pqimgbox>\n            </div>\n            <!--<img (click)=\"toPage(1, 1)\" class=\"radius-img\" src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" alt=\"\">-->\n            <div class=\"address-box\">\n              <div class=\"left\">\n                <div class=\"address\" *ngIf=\"item.address && item.address != 'null'\">\n                  <ion-icon name=\"pin\" color=\"dark\"></ion-icon>\n                  <span>{{item.address}}</span>\n                </div>\n              </div>\n              <div class=\"right\">\n                <ion-button size=\"small\" fill=\"clear\" color=\"dark\">\n                  <ion-icon name=\"heart-empty\" *ngIf=\"item.isdz == 0\"></ion-icon>\n                  <ion-icon name=\"heart\" color=\"danger\" *ngIf=\"item.isdz == 1\"></ion-icon>\n                  {{item.dznum | setnum}}\n                </ion-button>\n                <ion-button size=\"small\" fill=\"clear\" color=\"dark\" (click)=\"toPage(item.id)\">\n                  <ion-icon slot=\"start\" name=\"text\" mode=\"md\"></ion-icon>\n                  {{item.plnum | setnum}}\n                </ion-button>\n              </div>\n            </div>\n            <div class=\"img-box\" *ngIf=\"item.dznum > 0\">\n              <img *ngFor=\"let src of item.heads\" [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\n              {{item.dznum | setnum}}人觉得很赞\n            </div>\n            <div class=\"pl\" (click)=\"toPage(item.id)\" *ngFor=\"let pl of item.plarr\">\n              <span>{{pl.user_name}}：</span>{{pl.content | decodeuri}}\n            </div>\n            <ion-button class=\"ion-no-padding\" size=\"small\" fill=\"clear\" (click)=\"toPage(item.id)\" *ngIf=\"item.plnum > 2\">查看剩余{{(item.plnum - 2) | setnum}}条回复</ion-button>\n          </ion-card-content>\n        </ion-card>\n        <div *ngIf=\"item.opentype != 0\" class=\"ion-padding\">\n          <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\n            <div class=\"title\">{{item.content}}</div>\n            <ion-row>\n              <ion-col *ngFor=\"let src of item.imgarr\">\n                <img [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\n              </ion-col>\n            </ion-row>\n            <div class=\"footer\">\n              <span class=\"tag-box red\">广告</span>\n              <span>{{item.author || item.user_name}}</span>\n              <!--<span>{{item.plnum}}条评论</span>-->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"content-box content-three\" [ngClass]=\"{show: pageType == 2}\">\n      <ion-row *ngFor=\"let item of allList[1]\">\n        <ion-col [size]=\"12\" class=\"ion-no-padding\" *ngIf=\"item.opentype == 0\">\n          <ion-card mode=\"ios\" margin-start=\"0\" margin-end=\"0\">\n              <img *ngIf=\"item.status == 3 && userId == 0\" class=\"wtg\" src=\"../../../assets/wtg.svg\" />\n            <ion-card-header *ngIf=\"item.imgarr.length > 0\" (click)=\"toPage(item.id)\">\n              <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain\" alt=\"\">\n            </ion-card-header>\n\n            <ion-card-content>\n              <div class=\"title yj-title\" (click)=\"toPage(item.id)\">{{item.title}}</div>\n              <p *ngIf=\"item.des && item.des != 'null'\" (click)=\"toPage(item.id)\">{{item.des}}</p>\n              <div class=\"person-box\" margin-top>\n                <div class=\"person\" (click)=\"toPage(item.id)\">\n                  <img [src]=\"item.headimg | imgsrc: http.zdomain\">\n                  <div class=\"name-box\">\n                    <div class=\"name\">{{item.user_name}} <app-yhbox [color]=\"'yellow'\" [title]=\"item.name\" [noborder]=\"true\"></app-yhbox></div>\n                    <div class=\"des\">{{item.createtime | oldtonow}}</div>\n                  </div>\n                </div>\n                <!--<div class=\"gz\" *ngIf=\"item.userid | isgz: gzlistfn.getList()\" (click)=\"setgz(item.userid)\">-->\n                <!--<span>+关注</span>-->\n                <!--</div>-->\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <div *ngIf=\"item.opentype != 0\" class=\"ion-padding\">\n          <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\n            <div class=\"title\">{{item.title}}</div>\n            <ion-row>\n              <ion-col *ngFor=\"let src of item.imgarr\">\n                <img [src]=\"http.zdomain + src\" alt=\"\">\n              </ion-col>\n            </ion-row>\n            <div class=\"footer\">\n              <span class=\"tag-box red\">广告</span>\n              <span>{{item.author || item.user_name}}</span>\n              <!--<span>{{item.plnum}}条评论</span>-->\n            </div>\n          </div>\n        </div>\n      </ion-row>\n    </div>\n    <div class=\"content-box content-four\" [ngClass]=\"{show: pageType == 3}\">\n      <div  *ngFor=\"let item of allList[2]\" style=\"position: relative;\">\n        <img *ngIf=\"item.status == 3 && userId == 0\" class=\"wtg wtg-end\" src=\"../../../assets/wtg.svg\" />\n        <ion-item (click)=\"toPage(item.id)\" *ngIf=\"item.opentype == 0\">\n          <ion-thumbnail slot=\"end\" *ngIf=\"item.imgarr.length > 0 && (userId != 0 || userId == 0 && item.status != 3) \">\n            <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain \" alt=\"\">\n          </ion-thumbnail>\n          <ion-label>\n            {{item.title}}\n            <div class=\"footer\">\n              <span class=\"tag-box\" [ngStyle]=\"{display: item.tag && item.tag != 'null' ? '' : 'none'}\">{{item.tag}}</span>\n              <span>{{item.author || item.user_name}}</span>\n              <span>&nbsp;|&nbsp;</span>\n              <span>{{item.plnum | setnum}}条评论</span>\n            </div>\n          </ion-label>\n        </ion-item>\n        <div *ngIf=\"item.opentype != 0\" class=\"ion-padding\">\n          <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\n            <div class=\"title\">{{item.title}}</div>\n            <ion-row>\n              <ion-col *ngFor=\"let src of item.imgarr\">\n                <img [src]=\"http.zdomain + src\" alt=\"\">\n              </ion-col>\n            </ion-row>\n            <div class=\"footer\">\n              <span class=\"tag-box red\">广告</span>\n              <span>{{item.author || item.user_name}}</span>\n              <!--<span>{{item.plnum}}条评论</span>-->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"content-box content-four\" [ngClass]=\"{show: pageType == 4}\">\n      <div *ngFor=\"let item of allList[3]\" style=\"position: relative;\">\n        <img *ngIf=\"item.status == 3 && userId == 0\" class=\"wtg wtg-end\" src=\"../../../assets/wtg.svg\" />\n        <ion-item (click)=\"toPage(item.id)\" *ngIf=\"item.opentype == 0\">\n          <ion-thumbnail slot=\"start\" *ngIf=\"item.imgarr.length > 0\">\n            <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain\" alt=\"\">\n          </ion-thumbnail>\n          <ion-label>\n            {{item.title}}\n            <div class=\"footer\">\n              <span class=\"tag-box\"  [ngStyle]=\"{display: item.tag && item.tag != 'null' ? '' : 'none'}\">{{item.tag}}</span>\n              <span>{{item.author || item.user_name}}</span>\n              <span>&nbsp;|&nbsp;</span>\n              <span>{{item.plnum | setnum}}条评论</span>\n            </div>\n          </ion-label>\n        </ion-item>\n        <div *ngIf=\"item.opentype != 0\" class=\"ion-padding\">\n          <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\n            <div class=\"title\">{{item.title}}</div>\n            <ion-row>\n              <ion-col *ngFor=\"let src of item.imgarr\">\n                <img [src]=\"http.zdomain + src\" alt=\"\">\n              </ion-col>\n            </ion-row>\n            <div class=\"footer\">\n              <span class=\"tag-box red\">广告</span>\n              <span>{{item.author || item.user_name}}</span>\n              <!--<span>{{item.plnum}}条评论</span>-->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"bubbles\"\n       loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/myrelease/myrelease.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/myrelease/myrelease.module.ts ***!
  \*****************************************************/
/*! exports provided: MyreleasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyreleasePageModule", function() { return MyreleasePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myrelease_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myrelease.page */ "./src/app/pages/myrelease/myrelease.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _myrelease_page__WEBPACK_IMPORTED_MODULE_6__["MyreleasePage"]
    }
];
var MyreleasePageModule = /** @class */ (function () {
    function MyreleasePageModule() {
    }
    MyreleasePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_myrelease_page__WEBPACK_IMPORTED_MODULE_6__["MyreleasePage"]]
        })
    ], MyreleasePageModule);
    return MyreleasePageModule;
}());



/***/ }),

/***/ "./src/app/pages/myrelease/myrelease.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/myrelease/myrelease.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px;\n}\n.search-bar .left {\n  width: 48px;\n  font-size: var(--ion-title);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.search-bar .left img {\n  width: 12px;\n  margin-left: 5px;\n}\n.search-bar .right {\n  width: 20px;\n}\n.search-bar .right img {\n  width: 19px;\n}\n.search-bar .center {\n  display: -webkit-box;\n  flex: 1;\n  margin: 0 15px 0 0;\n  height: 27px;\n  background-color: #fff;\n  border-radius: 13.5px;\n  box-sizing: border-box;\n  padding-left: 10px;\n  padding-right: 15px;\n  overflow: hidden;\n}\n.search-bar .center .search-box {\n  display: flex;\n  flex: 1;\n  width: 100%;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--ion-color-medium);\n  font-size: var(--ion-text);\n  line-height: 27px;\n}\n.search-bar .center .search-box span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.search-bar .center .search-box img {\n  width: 17px;\n  height: 20px;\n  margin-right: 10px;\n}\n.footer-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.footer-bar .item {\n  width: 45px;\n  text-align: center;\n  height: 42px;\n  font-size: var(--ion-text);\n  line-height: 50px;\n  color: #fff;\n}\n.footer-bar .item.active {\n  font-size: var(--ion-title);\n  font-weight: 600;\n  line-height: 47px;\n  position: relative;\n}\n.footer-bar .item.active::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 50%;\n  left: 25%;\n  height: 3px;\n  background: #fff;\n  border-radius: 1.5px;\n}\nion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue));\n}\n.content-box {\n  display: none;\n}\n.content-box.show {\n  display: block;\n}\n.item-title {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.item-title app-yhbox {\n  margin-left: 10px;\n}\n.img-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--ion-color-medium);\n}\n.img-box img {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.pl {\n  margin-top: 10px;\n  font-size: var(--ion-sm-text);\n  flex-wrap: wrap;\n}\n.pl span {\n  font-size: var(--ion-text);\n  color: var(--ion-color-dark);\n}\nion-card .address {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: var(--ion-color-light);\n  padding: 2px 5px;\n  border-radius: 5px;\n  font-size: var(--ion-sm-text);\n}\nion-card .address span {\n  flex: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\nion-card .address-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\nion-card .address-box .left {\n  width: 50%;\n}\nion-card .address-box .right {\n  width: 50%;\n  text-align: right;\n}\n.content-one ion-card {\n  border-radius: 0;\n  box-shadow: none;\n  margin-left: 0;\n  margin-right: 0;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.content-one ion-card ion-card-content {\n  padding-top: 0;\n}\n.content-one ion-item {\n  --border-color: #fff;\n}\n.content-one .radius-img {\n  border-radius: 8px;\n}\n.content-one .title {\n  font-size: var(--ion-title);\n  color: var(--ion-color-dark);\n}\n.content-three ion-card-header {\n  padding: 0;\n}\n.content-four ion-thumbnail {\n  --border-radius: 5px;\n  --size: 80px;\n  width: 85px;\n}\n.content-four ion-label {\n  white-space: normal;\n}\n.content-four .footer {\n  margin-top: 7px;\n  font-size: var(--ion-sm-text);\n  line-height: 20px;\n}\n.content-four .footer span {\n  color: var(--ion-color-medium);\n}\n.content-four .footer span:first-of-type {\n  color: var(--ion-color-primary);\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 3px;\n  margin-right: 10px;\n}\n.person-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.person-box .person {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.person-box .person img {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.person-box .person .name-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.person-box .person .name-box .name {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: var(--ion-text);\n  color: var(--ion-color-dark);\n}\n.person-box .person .name-box .name app-yhbox {\n  margin-left: 10px;\n}\n.person-box .person .name-box .des {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n}\n.person-box .gz span {\n  background: var(--ion-color-linegradient);\n  font-size: var(--ion-sm-text);\n  height: 20px;\n  padding: 0 7px;\n  display: block;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 10px;\n  color: #fff;\n}\n.person-box .gz span:active {\n  background: var(--ion-color-linegradient-active);\n}\n.yj-title {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.tag-box {\n  border: 1px solid var(--ion-color-success);\n  color: var(--ion-color-success);\n  border-radius: 5px;\n  font-size: var(--ion-sm-text);\n  padding: 0 1px;\n}\n.tag-box.red {\n  color: var(--ion-color-danger) !important;\n  border-color: var(--ion-color-danger) !important;\n}\n.gg-box .title {\n  font-weight: 600;\n}\n.gg-box img {\n  width: 100%;\n  border-radius: 7px;\n}\n.gg-box .tag-box {\n  margin-right: 10px;\n}\n.gg-box .footer {\n  font-size: var(--ion-sm-text);\n}\n.center-top {\n  position: relative;\n  z-index: 0;\n  height: 170px;\n  background: url('centerhead.svg') top left no-repeat;\n  background-size: cover;\n}\n.center-top .box {\n  position: absolute;\n  width: 100%;\n  top: 26px;\n  display: flex;\n  height: calc(100% - 61px);\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  color: #fff;\n}\n.center-top .box .header {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.center-top .box .right {\n  flex: 1;\n  padding-left: 10px;\n}\n.center-top .box .name {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  font-size: var(--ion-big-title);\n  margin-bottom: 5px;\n}\n.center-top .box .name ion-button {\n  font-size: var(--ion-sm-text);\n  --color: #fff;\n}\n.center-top .box .name ion-button img {\n  width: 10px;\n}\n.center-top .box .des {\n  font-size: var(--ion-sm-text);\n}\n.center-top .box .des span {\n  background-color: rgba(255, 255, 255, 0.3);\n  padding: 1px 3px;\n  border-radius: 3px;\n}\n.center-top .box .footer {\n  width: 100%;\n}\n.center-top .box .footer ion-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.center-top .box .footer ion-col span:first-of-type {\n  font-size: var(--ion-title);\n}\n.center-top .box .footer ion-col span:last-of-type {\n  font-size: var(--ion-sm-text);\n}\nion-card-header {\n  max-height: 200px;\n  overflow: hidden;\n}\nion-card {\n  margin-left: 0;\n  margin-bottom: 0;\n  margin-right: 0;\n}\nion-card .shz, ion-card .ytg, ion-card .wtg {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 68px;\n  z-index: 100;\n}\n.wtg-end {\n  width: 50px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9teXJlbGVhc2UvbXlyZWxlYXNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXlyZWxlYXNlL215cmVsZWFzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBRjtBRENFO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNFTjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FEQUk7RUFDRSxXQUFBO0FDRU47QURDRTtFQUNFLG9CQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFHQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUNFTjtBRERNO0VBRUUsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRVI7QURBTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0FGO0FEQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjtBREFJO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFTjtBRERNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDR1I7QURFQTtFQUNFLDhGQUFBO0FDQ0Y7QURDQTtFQUNFLGFBQUE7QUNFRjtBRERFO0VBQ0UsY0FBQTtBQ0dKO0FEQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FDR0Y7QURGRTtFQUNFLGlCQUFBO0FDSUo7QURBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFPQSw4QkFBQTtBQ0hGO0FESEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNLSjtBRERBO0VBQ0UsZ0JBQUE7RUFLQSw2QkFBQTtFQUNBLGVBQUE7QUNBRjtBRENFO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtBQ0NKO0FETUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNISjtBREtJO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0hOO0FET0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTEo7QURNSTtFQUNFLFVBQUE7QUNKTjtBRE1JO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDSk47QURVRTtFQUdFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0FDUEo7QURRSTtFQUNFLGNBQUE7QUNOTjtBRFNFO0VBQ0Usb0JBQUE7QUNQSjtBRFNFO0VBR0Usa0JBQUE7QUNQSjtBRFNFO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQ1BKO0FEV0U7RUFDRSxVQUFBO0FDUko7QURZRTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNUSjtBRFdFO0VBQ0UsbUJBQUE7QUNUSjtBRFlFO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUNWSjtBRFdJO0VBQ0UsOEJBQUE7QUNUTjtBRFVNO0VBQ0UsK0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNSUjtBRGFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1ZGO0FEV0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDVEo7QURVSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1JOO0FEVUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FDUk47QURTTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDUFI7QURRUTtFQUNFLGlCQUFBO0FDTlY7QURTTTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNQUjtBRFlJO0VBQ0UseUNBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFFQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFHQSxtQkFBQTtFQUNBLFdBQUE7QUNYTjtBRFlNO0VBQ0UsZ0RBQUE7QUNWUjtBRGVBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtBQ1pGO0FEY0E7RUFDRSwwQ0FBQTtFQUNBLCtCQUFBO0VBR0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNYRjtBRFlFO0VBQ0UseUNBQUE7RUFDQSxnREFBQTtBQ1ZKO0FEY0U7RUFDRSxnQkFBQTtBQ1hKO0FEYUU7RUFDRSxXQUFBO0VBR0Esa0JBQUE7QUNYSjtBRGFFO0VBQ0Usa0JBQUE7QUNYSjtBRGFFO0VBQ0UsNkJBQUE7QUNYSjtBRGVBO0VBQ0Usa0JBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG9EQUFBO0VBRUEsc0JBQUE7QUNiRjtBRGNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNaSjtBRGFJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNYTjtBRGFJO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FDWE47QURhSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FDWE47QURZTTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtBQ1ZSO0FEV1E7RUFDRSxXQUFBO0FDVFY7QURhSTtFQUNFLDZCQUFBO0FDWE47QURZTTtFQUNFLDBDQUFBO0VBQ0EsZ0JBQUE7RUFHQSxrQkFBQTtBQ1ZSO0FEYUk7RUFDRSxXQUFBO0FDWE47QURZTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNWUjtBRFlVO0VBQ0UsMkJBQUE7QUNWWjtBRFlVO0VBQ0UsNkJBQUE7QUNWWjtBRGtCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNmRjtBRGlCQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNkRjtBRGVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDYko7QURnQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNiRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215cmVsZWFzZS9teXJlbGVhc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zZWFyY2gtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgLmxlZnQge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwIDE1cHggMCAwO1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAuc2VhcmNoLWJveCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICAvL2Rpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5mb290ZXItYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLml0ZW0ge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQ3cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcclxufVxyXG4uY29udGVudC1ib3gge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgJi5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4uaXRlbS10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFwcC15aGJveCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbWctYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxufVxyXG4ucGwge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gIC8vZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAvL2p1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIH1cclxufVxyXG5pb24tY2FyZCB7XHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAvL3BhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICAuYWRkcmVzcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLy9tYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hZGRyZXNzLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAubGVmdCB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LW9uZSB7XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLnJhZGl1cy1pbWcge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgfVxyXG59XHJcbi5jb250ZW50LXRocmVlIHtcclxuICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuLmNvbnRlbnQtZm91ciB7XHJcbiAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tc2l6ZTogODBweDtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gIH1cclxuICBpb24tbGFiZWwge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuXHJcbiAgfVxyXG4gIC5mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucGVyc29uLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5wZXJzb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC5uYW1lLWJveCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgIGFwcC15aGJveCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmRlcyB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5neiB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpbmVncmFkaWVudCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIC8vd2lkdGg6IDUwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgN3B4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpbmVncmFkaWVudC1hY3RpdmUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi55ai10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcbi50YWctYm94IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgcGFkZGluZzogMCAxcHg7XHJcbiAgJi5yZWQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5nZy1ib3gge1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIH1cclxuICAudGFnLWJveCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5mb290ZXIge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2VudGVyLXRvcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1pb24tcGxhdGZvcm0tbWFyZ2luLXRvcCkgLSA1cHgpO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY2VudGVyaGVhZC5zdmdcIikgdG9wIGxlZnQgbm8tcmVwZWF0O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC5ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDI2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MXB4KTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tYmlnLXRpdGxlKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXMge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMyk7XHJcbiAgICAgICAgcGFkZGluZzogMXB4IDNweDtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb290ZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVyIHtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICAuc2h6LCAueXRnLCAud3RnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDY4cHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgfVxyXG59XHJcbi53dGctZW5kIHtcclxuICB3aWR0aDogNTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHotaW5kZXg6IDIwMDtcclxufSIsIi5zZWFyY2gtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uc2VhcmNoLWJhciAubGVmdCB7XG4gIHdpZHRoOiA0OHB4O1xuICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWFyY2gtYmFyIC5sZWZ0IGltZyB7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnNlYXJjaC1iYXIgLnJpZ2h0IHtcbiAgd2lkdGg6IDIwcHg7XG59XG4uc2VhcmNoLWJhciAucmlnaHQgaW1nIHtcbiAgd2lkdGg6IDE5cHg7XG59XG4uc2VhcmNoLWJhciAuY2VudGVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgaGVpZ2h0OiAyN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEzLjVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMy41cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzLjVweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zZWFyY2gtYmFyIC5jZW50ZXIgLnNlYXJjaC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICBsaW5lLWhlaWdodDogMjdweDtcbn1cbi5zZWFyY2gtYmFyIC5jZW50ZXIgLnNlYXJjaC1ib3ggc3BhbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnNlYXJjaC1iYXIgLmNlbnRlciAuc2VhcmNoLWJveCBpbWcge1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5mb290ZXItYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3Rlci1iYXIgLml0ZW0ge1xuICB3aWR0aDogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQycHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uZm9vdGVyLWJhciAuaXRlbS5hY3RpdmUge1xuICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9vdGVyLWJhciAuaXRlbS5hY3RpdmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNTAlO1xuICBsZWZ0OiAyNSU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxLjVweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpO1xufVxuXG4uY29udGVudC1ib3gge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbnRlbnQtYm94LnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLml0ZW0tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uaXRlbS10aXRsZSBhcHAteWhib3gge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmltZy1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5pbWctYm94IGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5wbCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucGwgc3BhbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG5pb24tY2FyZCAuYWRkcmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbn1cbmlvbi1jYXJkIC5hZGRyZXNzIHNwYW4ge1xuICBmbGV4OiAxO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1jYXJkIC5hZGRyZXNzLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jYXJkIC5hZGRyZXNzLWJveCAubGVmdCB7XG4gIHdpZHRoOiA1MCU7XG59XG5pb24tY2FyZCAuYWRkcmVzcy1ib3ggLnJpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jb250ZW50LW9uZSBpb24tY2FyZCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbi5jb250ZW50LW9uZSBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uY29udGVudC1vbmUgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZjtcbn1cbi5jb250ZW50LW9uZSAucmFkaXVzLWltZyB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmNvbnRlbnQtb25lIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLmNvbnRlbnQtdGhyZWUgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRlbnQtZm91ciBpb24tdGh1bWJuYWlsIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tc2l6ZTogODBweDtcbiAgd2lkdGg6IDg1cHg7XG59XG4uY29udGVudC1mb3VyIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4uY29udGVudC1mb3VyIC5mb290ZXIge1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5jb250ZW50LWZvdXIgLmZvb3RlciBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmNvbnRlbnQtZm91ciAuZm9vdGVyIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5wZXJzb24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBlcnNvbi1ib3ggLnBlcnNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wZXJzb24tYm94IC5wZXJzb24gaW1nIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5wZXJzb24tYm94IC5wZXJzb24gLm5hbWUtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnBlcnNvbi1ib3ggLnBlcnNvbiAubmFtZS1ib3ggLm5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuLnBlcnNvbi1ib3ggLnBlcnNvbiAubmFtZS1ib3ggLm5hbWUgYXBwLXloYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ucGVyc29uLWJveCAucGVyc29uIC5uYW1lLWJveCAuZGVzIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5wZXJzb24tYm94IC5neiBzcGFuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpbmVncmFkaWVudCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDAgN3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBlcnNvbi1ib3ggLmd6IHNwYW46YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpbmVncmFkaWVudC1hY3RpdmUpO1xufVxuXG4ueWotdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4udGFnLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBwYWRkaW5nOiAwIDFweDtcbn1cbi50YWctYm94LnJlZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG59XG5cbi5nZy1ib3ggLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5nZy1ib3ggaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmdnLWJveCAudGFnLWJveCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5nZy1ib3ggLmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xufVxuXG4uY2VudGVyLXRvcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NlbnRlcmhlYWQuc3ZnXCIpIHRvcCBsZWZ0IG5vLXJlcGVhdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmNlbnRlci10b3AgLmJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMjZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MXB4KTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2VudGVyLXRvcCAuYm94IC5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNlbnRlci10b3AgLmJveCAucmlnaHQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uY2VudGVyLXRvcCAuYm94IC5uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IHZhcigtLWlvbi1iaWctdGl0bGUpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2VudGVyLXRvcCAuYm94IC5uYW1lIGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cbi5jZW50ZXItdG9wIC5ib3ggLm5hbWUgaW9uLWJ1dHRvbiBpbWcge1xuICB3aWR0aDogMTBweDtcbn1cbi5jZW50ZXItdG9wIC5ib3ggLmRlcyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xufVxuLmNlbnRlci10b3AgLmJveCAuZGVzIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIHBhZGRpbmc6IDFweCAzcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmNlbnRlci10b3AgLmJveCAuZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2VudGVyLXRvcCAuYm94IC5mb290ZXIgaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNlbnRlci10b3AgLmJveCAuZm9vdGVyIGlvbi1jb2wgc3BhbjpmaXJzdC1vZi10eXBlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xufVxuLmNlbnRlci10b3AgLmJveCAuZm9vdGVyIGlvbi1jb2wgc3BhbjpsYXN0LW9mLXR5cGUge1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbmlvbi1jYXJkIC5zaHosIGlvbi1jYXJkIC55dGcsIGlvbi1jYXJkIC53dGcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiA2OHB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi53dGctZW5kIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogMjAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/myrelease/myrelease.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/myrelease/myrelease.page.ts ***!
  \***************************************************/
/*! exports provided: MyreleasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyreleasePage", function() { return MyreleasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_gzlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/gzlist.service */ "./src/app/services/gzlist.service.ts");
/* harmony import */ var src_app_services_deletemyrelease_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/deletemyrelease.service */ "./src/app/services/deletemyrelease.service.ts");
/* harmony import */ var src_app_services_editmyrelease_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/editmyrelease.service */ "./src/app/services/editmyrelease.service.ts");









var MyreleasePage = /** @class */ (function () {
    function MyreleasePage(nav, http, activeroute, topage, route, gzlistfn, mydeletefn, editMyrelease) {
        this.nav = nav;
        this.http = http;
        this.activeroute = activeroute;
        this.topage = topage;
        this.route = route;
        this.gzlistfn = gzlistfn;
        this.mydeletefn = mydeletefn;
        this.editMyrelease = editMyrelease;
    }
    MyreleasePage.prototype.ngOnInit = function () {
        this.pageType = 1;
        this.allList = [];
        var limit = 20;
        this.pqpageObj = {
            page: 1,
            num: limit,
            type: 1,
            isall: false
        };
        this.yjpageObj = {
            page: 1,
            num: limit,
            type: 2,
            isall: false
        };
        this.glpageObj = {
            page: 1,
            num: limit,
            type: 3,
            isall: false
        };
        this.zmpageObj = {
            page: 1,
            num: limit,
            type: 4,
            isall: false
        };
        var params = this.activeroute.snapshot.queryParams;
        this.userId = params['userid'] || 0;
    };
    MyreleasePage.prototype.goBack = function () {
        this.nav.back();
    };
    MyreleasePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var deleteObj = this.mydeletefn.getId();
        if (deleteObj['id']) {
            if (this.allList.length > 0) {
                for (var index = 0; index < this.allList[deleteObj.type].length; index++) {
                    var element = this.allList[deleteObj.type][index];
                    if (deleteObj['id'] == element['id']) {
                        this.allList[deleteObj.type].splice(index, 1);
                        this.mydeletefn.clear();
                        break;
                    }
                }
            }
            else {
                this.mydeletefn.clear();
            }
        }
        var item = this.editMyrelease.getData();
        if (item.data && item.data.id) {
            console.log('进入1');
            var ischage = this.editMyrelease.getIschage();
            if (this.allList.length > 0 && ischage) {
                this.changeItem(item.type, item.data);
                console.log('进入2');
            }
            this.editMyrelease.clear();
        }
        this.gzlistfn.getList().then(function (res) {
            _this.gzList = res;
            if (_this.gzList.includes(_this.userId) && _this.userId) {
                _this.isgz = true;
            }
            else {
                _this.isgz = false;
            }
        }).catch(function (err2) { });
        this.setType();
        console.log(this.userId);
        if (this.userId) {
            this.http.getData(this.http.getousercenter, { userId: this.userId }).subscribe(function (res) {
                console.log(res);
                _this.user = res.data;
            }, function (error2) { });
        }
    };
    /**
     * @Author: wjy-mac
     * @description: 内容编辑后改变列表数据
     * @Date: 2019-11-20 00:02:14
     * @param {type}
     * @return:
     */
    MyreleasePage.prototype.changeItem = function (type, data) {
        console.log(type);
        console.log(data);
        for (var index = 0; index < this.allList[type].length; index++) {
            var element = this.allList[type][index];
            if (element['id'] == data.id) {
                var obj = Object.assign(element, data);
                this.allList[type].splice(index, 1, obj);
            }
        }
    };
    MyreleasePage.prototype.toPages = function (type, id, name) {
        this.topage.toPage(type, id, name);
    };
    MyreleasePage.prototype.toPage = function (id) {
        console.log(id);
        var type = this.pageType;
        if (type == 1) {
            this.route.navigate(['/pqcontent'], { queryParams: { id: id, type: type } });
        }
        else {
            this.route.navigate(['/yjcontent'], { queryParams: { id: id, type: type - 2 } });
        }
    };
    MyreleasePage.prototype.doRefresh = function (event) {
        switch (Number(this.pageType)) {
            case 1:
                this.pqpageObj.page = 1;
                this.pqpageObj.isall = false;
                break;
            case 2:
                this.yjpageObj.page = 1;
                this.yjpageObj.isall = false;
                break;
            case 3:
                this.glpageObj.page = 1;
                this.glpageObj.isall = false;
                break;
            case 4:
                this.zmpageObj.page = 1;
                this.zmpageObj.isall = false;
                break;
        }
        this.getListhttp(event, 1);
    };
    MyreleasePage.prototype.setType = function () {
        var type = Number(this.pageType);
        console.log(type);
        if (!this.allList[this.pageType - 1]) {
            this.allList[this.pageType - 1] = [];
            this.getListhttp();
        }
    };
    MyreleasePage.prototype.loadData = function (event) {
        var obj;
        switch (Number(this.pageType)) {
            case 1:
                obj = this.pqpageObj;
                break;
            case 2:
                obj = this.yjpageObj;
                break;
            case 3:
                obj = this.glpageObj;
                break;
            case 4:
                obj = this.zmpageObj;
                break;
        }
        if (obj.isall) {
            event.target.complete();
            return false;
        }
        this.getListhttp(event);
    };
    MyreleasePage.prototype.getListhttp = function (event, type) {
        var _this = this;
        var src = this.http.getpqlist;
        var obj;
        switch (Number(this.pageType)) {
            case 1:
                obj = Object.assign({}, this.pqpageObj);
                this.pqpageObj.page++;
                break;
            case 2:
                obj = Object.assign({}, this.yjpageObj);
                this.yjpageObj.page++;
                break;
            case 3:
                obj = Object.assign({}, this.glpageObj);
                this.glpageObj.page++;
                break;
            case 4:
                obj = Object.assign({}, this.zmpageObj);
                this.zmpageObj.page++;
                break;
        }
        obj.userId = this.userId;
        obj.getPerson = 1;
        this.http.getData(src, obj).subscribe(function (res) {
            var _a;
            var data = res['result'];
            if (type) {
                _this.allList[_this.pageType - 1] = [];
            }
            (_a = _this.allList[_this.pageType - 1]).push.apply(_a, data['result']);
            switch (Number(_this.pageType)) {
                case 1:
                    // this.pqlist.push(...data['result']);
                    if (!data['result'].length || data['result'].length < obj.num) {
                        _this.pqpageObj.isall = true;
                    }
                    else {
                        _this.pqpageObj.page++;
                    }
                    break;
                case 2:
                    // this.yjlist.push(...data['result']);
                    if (!data['result'].length || data['result'].length < obj.num) {
                        _this.yjpageObj.isall = true;
                    }
                    else {
                        _this.yjpageObj.page++;
                    }
                    break;
                case 3:
                    // this.gllist.push(...data['result']);
                    if (!data['result'].length || data['result'].length < obj.num) {
                        _this.glpageObj.isall = true;
                    }
                    else {
                        _this.glpageObj.page++;
                    }
                    break;
                case 4:
                    // this.zmlist.push(...data['result']);
                    if (!data['result'].length || data['result'].length < obj.num) {
                        _this.zmpageObj.isall = true;
                    }
                    else {
                        _this.zmpageObj.page++;
                    }
                    break;
            }
            if (event) {
                event.target.complete();
            }
            // this.newGoods = data['new_goods'];
        }, function (err) {
            // alert(JSON.stringify(err))
            console.log(err);
            if (event) {
                event.target.complete();
            }
        });
    };
    MyreleasePage.prototype.openUsers = function (type) {
        // this.userId
        this.route.navigate(['/userlist'], { queryParams: { type: type, userId: this.userId } });
    };
    MyreleasePage.prototype.setgz = function (touid, type) {
        var _this = this;
        if (type === void 0) { type = 1; }
        this.http.getData(this.http.setgz, { touid: touid, type: type }).subscribe(function (res) {
            console.log(res);
            if (type === 1) {
                _this.isgz = true;
                _this.gzlistfn.puitem(touid);
            }
            else {
                _this.isgz = false;
                _this.gzlistfn.removeItem(touid);
            }
        });
    };
    MyreleasePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_topage_service__WEBPACK_IMPORTED_MODULE_4__["TopageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_gzlist_service__WEBPACK_IMPORTED_MODULE_6__["GzlistService"] },
        { type: src_app_services_deletemyrelease_service__WEBPACK_IMPORTED_MODULE_7__["DeletemyreleaseService"] },
        { type: src_app_services_editmyrelease_service__WEBPACK_IMPORTED_MODULE_8__["EditmyreleaseService"] }
    ]; };
    MyreleasePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myrelease',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myrelease.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myrelease/myrelease.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myrelease.page.scss */ "./src/app/pages/myrelease/myrelease.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_topage_service__WEBPACK_IMPORTED_MODULE_4__["TopageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_gzlist_service__WEBPACK_IMPORTED_MODULE_6__["GzlistService"],
            src_app_services_deletemyrelease_service__WEBPACK_IMPORTED_MODULE_7__["DeletemyreleaseService"], src_app_services_editmyrelease_service__WEBPACK_IMPORTED_MODULE_8__["EditmyreleaseService"]])
    ], MyreleasePage);
    return MyreleasePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-myrelease-myrelease-module.js.map