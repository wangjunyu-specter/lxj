(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-myrelease-myrelease-module"],{

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

/***/ "./src/app/pages/myrelease/myrelease.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/myrelease/myrelease.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{!userId ? '我的发布' : ''}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n       pullingIcon=\"arrow-dropdown\"\n       pullingText=\"Pull to refresh\"\n       refreshingSpinner=\"circles\"\n       refreshingText=\"更新中...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"center-top\" *ngIf=\"user\">\n    <div class=\"box ion-padding\">\n      <div class=\"header\">\n        <ion-avatar>\n          <img [src]=\"user.headimg  | imgsrc: http.domain\">\n        </ion-avatar>\n        <div class=\"right\">\n          <div class=\"name\">\n            {{user.user_name}}\n            <ion-button color=\"success\" size=\"small\" *ngIf=\"userId && !isgz\" (click)=\"setgz(userId)\">\n              关注\n              <!--<img src=\"./assets/centerarrow.svg\">-->\n            </ion-button>\n            <ion-button color=\"secondary\" size=\"small\" *ngIf=\"userId && isgz\" (click)=\"setgz(userId, 2)\">\n              取消关注\n              <!--<img src=\"./assets/centerarrow.svg\">-->\n            </ion-button>\n          </div>\n          <div class=\"des\">\n            <span>LV.{{user.user_rank}}</span>\n            {{user.lxdj}}\n          </div>\n        </div>\n      </div>\n      <div class=\"footer\">\n        <ion-grid>\n          <ion-row>\n            <ion-col (click)=\"openUsers(1)\">\n              <span>{{user.gznum | setnum}}</span><span>关注</span>\n            </ion-col>\n            <ion-col (click)=\"openUsers(2)\">\n              <span>{{user.fsnum | setnum}}</span><span>粉丝</span>\n            </ion-col>\n            <ion-col>\n              <span>{{user.dznum | setnum}}</span><span>获赞</span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n  <div class=\"ion-padding\">\n    <div style=\"background: #fff\">\n      <ion-segment mode=\"ios\" (ionChange)=\"setType()\" color=\"success\" [(ngModel)]=\"pageType\">\n        <ion-segment-button [value]=\"1\" mode=\"ios\">\n          <ion-label>票圈</ion-label>\n        </ion-segment-button>\n        <ion-segment-button [value]=\"2\" mode=\"ios\">\n          <ion-label>游记</ion-label>\n        </ion-segment-button>\n        <ion-segment-button [value]=\"3\" mode=\"ios\">\n          <ion-label>攻略</ion-label>\n        </ion-segment-button>\n        <ion-segment-button [value]=\"4\" mode=\"ios\">\n          <ion-label>游记</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    <app-nomore *ngIf=\" allList && allList.length > 0 && (pageType == 1 && allList[0].length === 0 || pageType == 2 && allList[1].length === 0 || pageType == 3 && allList[2].length === 0 || pageType == 4 && allList[3].length === 0) \"></app-nomore>\n    <div class=\"content-box content-one\" [ngClass]=\"{show: pageType == 1}\">\n      <div *ngFor=\"let item of allList[0]\">\n        <ion-card mode=\"ios\" *ngIf=\"item.opentype == 0\">\n          <img *ngIf=\"item.status == 3 && userId == 0\" class=\"wtg\" src=\"../../../assets/wtg.svg\" />\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img [src]=\"http.headimg | imgsrc: http.zdomain\">\n            </ion-avatar>\n            <ion-label>\n              <h2 class=\"item-title\">{{item.user_name}}<app-yhbox [color]=\"'yellow'\" [title]=\"item.name\" [noborder]=\"true\"></app-yhbox></h2>\n              <p>{{item.createtime | oldtonow}}</p></ion-label>\n            <!--<ion-button  *ngIf=\"item.userid | isgz: gzlistfn.getList()\" (click)=\"setgz(item.userid)\" color=\"medium\" size=\"small\" shape=\"round\" fill=\"outline\" slot=\"end\">+关注</ion-button>-->\n          </ion-item>\n\n          <ion-card-content>\n            <div class=\"title\" (click)=\"toPage(item.id)\"  *ngIf=\"item.content && item.content != 'null'\">{{item.content}}</div>\n            <div class=\"ion-padding-top\">\n              <app-pqimgbox [imglist]=\"item.thumb[0] ? item.thumb : item.imgarr\" [ytimglist]=\"item.imgarr\"></app-pqimgbox>\n            </div>\n            <!--<img (click)=\"toPage(1, 1)\" class=\"radius-img\" src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" alt=\"\">-->\n            <div class=\"address-box\">\n              <div class=\"left\">\n                <div class=\"address\" *ngIf=\"item.address && item.address != 'null'\">\n                  <ion-icon name=\"pin\" color=\"dark\"></ion-icon>\n                  <span>{{item.address}}</span>\n                </div>\n              </div>\n              <div class=\"right\">\n                <ion-button size=\"small\" fill=\"clear\" color=\"dark\">\n                  <ion-icon name=\"heart-empty\" *ngIf=\"item.isdz == 0\"></ion-icon>\n                  <ion-icon name=\"heart\" color=\"danger\" *ngIf=\"item.isdz == 1\"></ion-icon>\n                  {{item.dznum | setnum}}\n                </ion-button>\n                <ion-button size=\"small\" fill=\"clear\" color=\"dark\" (click)=\"toPage(item.id)\">\n                  <ion-icon slot=\"start\" name=\"text\" mode=\"md\"></ion-icon>\n                  {{item.plnum | setnum}}\n                </ion-button>\n              </div>\n            </div>\n            <div class=\"img-box\" *ngIf=\"item.dznum > 0\">\n              <img *ngFor=\"let src of item.heads\" [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\n              {{item.dznum | setnum}}人觉得很赞\n            </div>\n            <div class=\"pl\" (click)=\"toPage(item.id)\" *ngFor=\"let pl of item.plarr\">\n              <span>{{pl.user_name}}：</span>{{pl.content | decodeuri}}\n            </div>\n            <ion-button class=\"ion-no-padding\" size=\"small\" fill=\"clear\" (click)=\"toPage(item.id)\" *ngIf=\"item.plnum > 2\">查看剩余{{(item.plnum - 2) | setnum}}条回复</ion-button>\n          </ion-card-content>\n        </ion-card>\n        <div *ngIf=\"item.opentype != 0\" class=\"ion-padding\">\n          <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\n            <div class=\"title\">{{item.content}}</div>\n            <ion-row>\n              <ion-col *ngFor=\"let src of item.imgarr\">\n                <img [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\n              </ion-col>\n            </ion-row>\n            <div class=\"footer\">\n              <span class=\"tag-box red\">广告</span>\n              <span>{{item.author || item.user_name}}</span>\n              <!--<span>{{item.plnum}}条评论</span>-->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"content-box content-three\" [ngClass]=\"{show: pageType == 2}\">\n      <ion-row *ngFor=\"let item of allList[1]\">\n        <ion-col [size]=\"12\" class=\"ion-no-padding\" *ngIf=\"item.opentype == 0\">\n          <ion-card mode=\"ios\" margin-start=\"0\" margin-end=\"0\">\n              <img *ngIf=\"item.status == 3 && userId == 0\" class=\"wtg\" src=\"../../../assets/wtg.svg\" />\n            <ion-card-header *ngIf=\"item.imgarr.length > 0\" (click)=\"toPage(item.id)\">\n              <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain\" alt=\"\">\n            </ion-card-header>\n\n            <ion-card-content>\n              <div class=\"title yj-title\" (click)=\"toPage(item.id)\">{{item.title}}</div>\n              <p *ngIf=\"item.des && item.des != 'null'\" (click)=\"toPage(item.id)\">{{item.des}}</p>\n              <div class=\"person-box\" margin-top>\n                <div class=\"person\" (click)=\"toPage(item.id)\">\n                  <img [src]=\"item.headimg | imgsrc: http.zdomain\">\n                  <div class=\"name-box\">\n                    <div class=\"name\">{{item.user_name}} <app-yhbox [color]=\"'yellow'\" [title]=\"item.name\" [noborder]=\"true\"></app-yhbox></div>\n                    <div class=\"des\">{{item.createtime | oldtonow}}</div>\n                  </div>\n                </div>\n                <!--<div class=\"gz\" *ngIf=\"item.userid | isgz: gzlistfn.getList()\" (click)=\"setgz(item.userid)\">-->\n                <!--<span>+关注</span>-->\n                <!--</div>-->\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <div *ngIf=\"item.opentype != 0\" class=\"ion-padding\">\n          <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\n            <div class=\"title\">{{item.title}}</div>\n            <ion-row>\n              <ion-col *ngFor=\"let src of item.imgarr\">\n                <img [src]=\"http.zdomain + src\" alt=\"\">\n              </ion-col>\n            </ion-row>\n            <div class=\"footer\">\n              <span class=\"tag-box red\">广告</span>\n              <span>{{item.author || item.user_name}}</span>\n              <!--<span>{{item.plnum}}条评论</span>-->\n            </div>\n          </div>\n        </div>\n      </ion-row>\n    </div>\n    <div class=\"content-box content-four\" [ngClass]=\"{show: pageType == 3}\">\n      <div  *ngFor=\"let item of allList[2]\" style=\"position: relative;\">\n        <img *ngIf=\"item.status == 3 && userId == 0\" class=\"wtg wtg-end\" src=\"../../../assets/wtg.svg\" />\n        <ion-item (click)=\"toPage(item.id)\" *ngIf=\"item.opentype == 0\">\n          <ion-thumbnail slot=\"end\" *ngIf=\"item.imgarr.length > 0 && (userId != 0 || userId == 0 && item.status != 3) \">\n            <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain \" alt=\"\">\n          </ion-thumbnail>\n          <ion-label>\n            {{item.title}}\n            <div class=\"footer\">\n              <span class=\"tag-box\" [ngStyle]=\"{display: item.tag && item.tag != 'null' ? '' : 'none'}\">{{item.tag}}</span>\n              <span>{{item.author || item.user_name}}</span>\n              <span>&nbsp;|&nbsp;</span>\n              <span>{{item.plnum | setnum}}条评论</span>\n            </div>\n          </ion-label>\n        </ion-item>\n        <div *ngIf=\"item.opentype != 0\" class=\"ion-padding\">\n          <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\n            <div class=\"title\">{{item.title}}</div>\n            <ion-row>\n              <ion-col *ngFor=\"let src of item.imgarr\">\n                <img [src]=\"http.zdomain + src\" alt=\"\">\n              </ion-col>\n            </ion-row>\n            <div class=\"footer\">\n              <span class=\"tag-box red\">广告</span>\n              <span>{{item.author || item.user_name}}</span>\n              <!--<span>{{item.plnum}}条评论</span>-->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"content-box content-four\" [ngClass]=\"{show: pageType == 4}\">\n      <div *ngFor=\"let item of allList[3]\" style=\"position: relative;\">\n        <img *ngIf=\"item.status == 3 && userId == 0\" class=\"wtg wtg-end\" src=\"../../../assets/wtg.svg\" />\n        <ion-item (click)=\"toPage(item.id)\" *ngIf=\"item.opentype == 0\">\n          <ion-thumbnail slot=\"start\" *ngIf=\"item.imgarr.length > 0\">\n            <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain\" alt=\"\">\n          </ion-thumbnail>\n          <ion-label>\n            {{item.title}}\n            <div class=\"footer\">\n              <span class=\"tag-box\"  [ngStyle]=\"{display: item.tag && item.tag != 'null' ? '' : 'none'}\">{{item.tag}}</span>\n              <span>{{item.author || item.user_name}}</span>\n              <span>&nbsp;|&nbsp;</span>\n              <span>{{item.plnum | setnum}}条评论</span>\n            </div>\n          </ion-label>\n        </ion-item>\n        <div *ngIf=\"item.opentype != 0\" class=\"ion-padding\">\n          <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\n            <div class=\"title\">{{item.title}}</div>\n            <ion-row>\n              <ion-col *ngFor=\"let src of item.imgarr\">\n                <img [src]=\"http.zdomain + src\" alt=\"\">\n              </ion-col>\n            </ion-row>\n            <div class=\"footer\">\n              <span class=\"tag-box red\">广告</span>\n              <span>{{item.author || item.user_name}}</span>\n              <!--<span>{{item.plnum}}条评论</span>-->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"bubbles\"\n       loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/myrelease/myrelease.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/myrelease/myrelease.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px; }\n  .search-bar .left {\n    width: 48px;\n    font-size: var(--ion-title);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .search-bar .left img {\n      width: 12px;\n      margin-left: 5px; }\n  .search-bar .right {\n    width: 20px; }\n  .search-bar .right img {\n      width: 19px; }\n  .search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px 0 0;\n    height: 27px;\n    background-color: #fff;\n    border-radius: 13.5px;\n    box-sizing: border-box;\n    padding-left: 10px;\n    padding-right: 15px;\n    overflow: hidden; }\n  .search-bar .center .search-box {\n      display: flex;\n      flex: 1;\n      width: 100%;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      color: var(--ion-color-medium);\n      font-size: var(--ion-text);\n      line-height: 27px; }\n  .search-bar .center .search-box span {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .search-bar .center .search-box img {\n        width: 17px;\n        height: 20px;\n        margin-right: 10px; }\n  .footer-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .footer-bar .item {\n    width: 45px;\n    text-align: center;\n    height: 42px;\n    font-size: var(--ion-text);\n    line-height: 50px;\n    color: #fff; }\n  .footer-bar .item.active {\n      font-size: var(--ion-title);\n      font-weight: 600;\n      line-height: 47px;\n      position: relative; }\n  .footer-bar .item.active::after {\n        content: '';\n        display: block;\n        position: absolute;\n        bottom: 0;\n        width: 50%;\n        left: 25%;\n        height: 3px;\n        background: #fff;\n        border-radius: 1.5px; }\n  ion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\n  .content-box {\n  display: none; }\n  .content-box.show {\n    display: block; }\n  .item-title {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start; }\n  .item-title app-yhbox {\n    margin-left: 10px; }\n  .img-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--ion-color-medium); }\n  .img-box img {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    margin-right: 5px; }\n  .pl {\n  margin-top: 10px;\n  font-size: var(--ion-sm-text);\n  flex-wrap: wrap; }\n  .pl span {\n    font-size: var(--ion-text);\n    color: var(--ion-color-dark); }\n  ion-card .address {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: var(--ion-color-light);\n  padding: 2px 5px;\n  border-radius: 5px;\n  font-size: var(--ion-sm-text); }\n  ion-card .address span {\n    flex: 1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden; }\n  ion-card .address-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center; }\n  ion-card .address-box .left {\n    width: 50%; }\n  ion-card .address-box .right {\n    width: 50%;\n    text-align: right; }\n  .content-one ion-card {\n  border-radius: 0;\n  box-shadow: none;\n  margin-left: 0;\n  margin-right: 0;\n  border-bottom: 1px solid var(--ion-color-light); }\n  .content-one ion-card ion-card-content {\n    padding-top: 0; }\n  .content-one ion-item {\n  --border-color: #fff; }\n  .content-one .radius-img {\n  border-radius: 8px; }\n  .content-one .title {\n  font-size: var(--ion-title);\n  color: var(--ion-color-dark); }\n  .content-three ion-card-header {\n  padding: 0; }\n  .content-four ion-thumbnail {\n  --border-radius: 5px;\n  --size: 80px;\n  width: 85px; }\n  .content-four ion-label {\n  white-space: normal; }\n  .content-four .footer {\n  margin-top: 7px;\n  font-size: var(--ion-sm-text);\n  line-height: 20px; }\n  .content-four .footer span {\n    color: var(--ion-color-medium); }\n  .content-four .footer span:first-of-type {\n      color: var(--ion-color-primary);\n      border: 1px solid var(--ion-color-primary);\n      border-radius: 3px;\n      margin-right: 10px; }\n  .person-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center; }\n  .person-box .person {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .person-box .person img {\n      width: 28px;\n      height: 28px;\n      border-radius: 50%;\n      margin-right: 10px; }\n  .person-box .person .name-box {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start; }\n  .person-box .person .name-box .name {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: flex-start;\n        font-size: var(--ion-text);\n        color: var(--ion-color-dark); }\n  .person-box .person .name-box .name app-yhbox {\n          margin-left: 10px; }\n  .person-box .person .name-box .des {\n        font-size: var(--ion-sm-text);\n        color: var(--ion-color-medium); }\n  .person-box .gz span {\n    background: var(--ion-color-linegradient);\n    font-size: var(--ion-sm-text);\n    height: 20px;\n    padding: 0 7px;\n    display: block;\n    line-height: 20px;\n    text-align: center;\n    border-radius: 10px;\n    color: #fff; }\n  .person-box .gz span:active {\n      background: var(--ion-color-linegradient-active); }\n  .yj-title {\n  font-weight: 600;\n  color: var(--ion-color-dark); }\n  .tag-box {\n  border: 1px solid var(--ion-color-success);\n  color: var(--ion-color-success);\n  border-radius: 5px;\n  font-size: var(--ion-sm-text);\n  padding: 0 1px; }\n  .tag-box.red {\n    color: var(--ion-color-danger) !important;\n    border-color: var(--ion-color-danger) !important; }\n  .gg-box .title {\n  font-weight: 600; }\n  .gg-box img {\n  width: 100%;\n  border-radius: 7px; }\n  .gg-box .tag-box {\n  margin-right: 10px; }\n  .gg-box .footer {\n  font-size: var(--ion-sm-text); }\n  .center-top {\n  position: relative;\n  z-index: 0;\n  height: 170px;\n  background: url('centerhead.svg') top left no-repeat;\n  background-size: cover; }\n  .center-top .box {\n    position: absolute;\n    width: 100%;\n    top: 26px;\n    display: flex;\n    height: calc(100% - 61px);\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    color: #fff; }\n  .center-top .box .header {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center; }\n  .center-top .box .right {\n      flex: 1;\n      padding-left: 10px; }\n  .center-top .box .name {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      font-size: var(--ion-big-title);\n      margin-bottom: 5px; }\n  .center-top .box .name ion-button {\n        font-size: var(--ion-sm-text);\n        --color: #fff; }\n  .center-top .box .name ion-button img {\n          width: 10px; }\n  .center-top .box .des {\n      font-size: var(--ion-sm-text); }\n  .center-top .box .des span {\n        background-color: rgba(255, 255, 255, 0.3);\n        padding: 1px 3px;\n        border-radius: 3px; }\n  .center-top .box .footer {\n      width: 100%; }\n  .center-top .box .footer ion-col {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center; }\n  .center-top .box .footer ion-col span:first-of-type {\n          font-size: var(--ion-title); }\n  .center-top .box .footer ion-col span:last-of-type {\n          font-size: var(--ion-sm-text); }\n  ion-card-header {\n  max-height: 200px;\n  overflow: hidden; }\n  ion-card {\n  margin-left: 0;\n  margin-bottom: 0;\n  margin-right: 0; }\n  ion-card .shz, ion-card .ytg, ion-card .wtg {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    width: 68px;\n    z-index: 100; }\n  .wtg-end {\n  width: 50px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 200; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9teXJlbGVhc2UvbXlyZWxlYXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZSxFQUFBO0VBTmpCO0lBUUksV0FBVztJQUNYLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQkFBbUIsRUFBQTtFQWJ2QjtNQWVNLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTtFQWhCdEI7SUFvQkksV0FBVyxFQUFBO0VBcEJmO01Bc0JNLFdBQVcsRUFBQTtFQXRCakI7SUEwQkksb0JBQW9CO0lBQ3BCLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUd0QixxQkFBcUI7SUFHckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7RUF2Q3BCO01BeUNNLGFBQWE7TUFDYixPQUFPO01BQ1AsV0FBVztNQUNYLG1CQUFtQjtNQUNuQiwyQkFBMkI7TUFDM0IsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QiwwQkFBMEI7TUFDMUIsaUJBQWlCLEVBQUE7RUFqRHZCO1FBb0RRLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUE7RUF0RC9CO1FBeURRLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCLEVBQUE7RUFLMUI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUIsRUFBQTtFQUpyQjtJQU1JLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsV0FBVyxFQUFBO0VBWGY7TUFhTSwyQkFBMkI7TUFDM0IsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixrQkFB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V0FBVztJQUNYLFlBQVksRUFBQTtFQUdoQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teXJlbGVhc2UvbXlyZWxlYXNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2VhcmNoLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEzLjVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLnNlYXJjaC1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgLy9kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZm9vdGVyLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5pdGVtIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbGVmdDogMjUlO1xyXG4gICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS41cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksIHJlZCksIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCBibHVlKSk7XHJcbn1cclxuLmNvbnRlbnQtYm94IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gICYuc2hvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuLml0ZW0tdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhcHAteWhib3gge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW1nLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbn1cclxuLnBsIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC8vZGlzcGxheTogZmxleDtcclxuICAvL2ZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgLy9hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICB9XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgLy9wYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmFkZHJlc3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIC8vbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYWRkcmVzcy1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmxlZnQge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudC1vbmUge1xyXG4gIGlvbi1jYXJkIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5yYWRpdXMtaW1nIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIH1cclxufVxyXG4uY29udGVudC10aHJlZSB7XHJcbiAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcbi5jb250ZW50LWZvdXIge1xyXG4gIGlvbi10aHVtYm5haWwge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLXNpemU6IDgwcHg7XHJcbiAgICB3aWR0aDogODVweDtcclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcblxyXG4gIH1cclxuICAuZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnBlcnNvbi1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAucGVyc29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubmFtZS1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICBhcHAteWhib3gge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kZXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuZ3oge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saW5lZ3JhZGllbnQpO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAvL3dpZHRoOiA1MHB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDdweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saW5lZ3JhZGllbnQtYWN0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ueWotdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG4udGFnLWJveCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gIHBhZGRpbmc6IDAgMXB4O1xyXG4gICYucmVkIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uZ2ctYm94IHtcclxuICAudGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB9XHJcbiAgLnRhZy1ib3gge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAuZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRlci10b3Age1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvL21hcmdpbi10b3A6IGNhbGModmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi10b3ApIC0gNXB4KTtcclxuICB6LWluZGV4OiAwO1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NlbnRlcmhlYWQuc3ZnXCIpIHRvcCBsZWZ0IG5vLXJlcGVhdDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAuYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAyNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjFweCk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hbWUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWJpZy10aXRsZSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgLS1jb2xvcjogI2ZmZjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGVzIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDFweCAzcHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlciB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgLnNoeiwgLnl0ZywgLnd0ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gIH1cclxufVxyXG4ud3RnLWVuZCB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICB6LWluZGV4OiAyMDA7XHJcbn0iXX0= */"

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
    MyreleasePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myrelease',
            template: __webpack_require__(/*! ./myrelease.page.html */ "./src/app/pages/myrelease/myrelease.page.html"),
            styles: [__webpack_require__(/*! ./myrelease.page.scss */ "./src/app/pages/myrelease/myrelease.page.scss")]
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