(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









// import {VgCoreModule} from '../../../node_modules/videogular2/core';
// import {VgControlsModule} from '../../../node_modules/videogular2/controls';
// import {VgOverlayPlayModule} from '../../../node_modules/videogular2/overlay-play';
// import {VgBufferingModule} from '../../../node_modules/videogular2/buffering';
// import {VideoComponent} from '../components/video/video.component';
var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                // VgCoreModule,
                // VgControlsModule,
                // VgOverlayPlayModule,
                // VgBufferingModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]],
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-07-24 22:51:02\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-10-10 15:49:37\r\n * @Description: file content\r\n -->\r\n<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <div class=\"search-bar\">\r\n      <!--<div class=\"left\" (click)=\"toPage(4)\">-->\r\n        <!--成都-->\r\n        <!--<img src=\"/assets/index-arrow.svg\">-->\r\n      <!--</div>-->\r\n      <div class=\"center\" (click)=\"searchModal()\">\r\n        <div class=\"search-box\">\r\n          <img src=\"/assets/fdj.svg\"><span *ngIf=\"shopdata\">{{searchKey}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"right\" (click)=\"tofb()\">\r\n      <img src=\"/assets/fabu.svg\" alt=\"\">\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-bar\">\r\n      <div *ngFor=\"let item of pageArray;let i = index\" class=\"item\"\r\n           [ngClass]=\"{active: pageType == i}\" (click)=\"setType(i)\">{{item}}</div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n       pullingIcon=\"arrow-dropdown\"\r\n       pullingText=\"Pull to refresh\"\r\n       refreshingSpinner=\"circles\"\r\n       refreshingText=\"更新中...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"content-box content-one\" [ngClass]=\"{show: pageType == 0}\">\r\n    <app-nomore *ngIf=\"gzlist && gzlist.length === 0\"></app-nomore>\r\n    <ion-card mode=\"ios\" margin-start=\"0\" margin-end=\"0\" *ngFor=\"let item of gzlist\">\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\" (click)=\"goperson(item.userid)\">\r\n          <img [src]=\"item.headimg | imgsrc: http.zdomain\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2 class=\"item-title\" (click)=\"goperson(item.userid)\">{{item.user_name}}<app-yhbox [color]=\"'yellow'\" [title]=\"item.name\" [noborder]=\"true\"></app-yhbox></h2>\r\n          <p>{{item.createtime | oldtonow}}</p></ion-label>\r\n        <ion-button *ngIf=\"pageType != 0\" (click)=\"setgz(item.userid)\" color=\"medium\" size=\"small\" shape=\"round\" fill=\"outline\" slot=\"end\">+关注</ion-button>\r\n      </ion-item>\r\n\r\n      <ion-card-content>\r\n        <div class=\"title\" *ngIf=\"item.content && item.content != 'null'\" (click)=\"toPage(item.id)\">{{item.content}}</div>\r\n        <div padding-top>\r\n          <app-pqimgbox [imglist]=\"item.thumb[0] ? item.thumb : item.imgarr\" [ytimglist]=\"item.imgarr\"></app-pqimgbox>\r\n        </div>\r\n        <!--<img (click)=\"toPage(1, 1)\" class=\"radius-img\" src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" alt=\"\">-->\r\n        <div class=\"address-box\">\r\n          <div class=\"left\">\r\n            <div class=\"address\" *ngIf=\"item.address && item.address != 'null'\">\r\n              <ion-icon name=\"pin\" color=\"dark\"></ion-icon>\r\n              <span>{{item.address}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"right\">\r\n            <ion-button size=\"small\" fill=\"clear\" color=\"dark\"  (click)=\"setdz(item)\">\r\n              <ion-icon name=\"heart-empty\" *ngIf=\"item.isdz == 0\"></ion-icon>\r\n              <ion-icon name=\"heart\" color=\"danger\" *ngIf=\"item.isdz == 1\"></ion-icon>\r\n              {{item.dznum | setnum}}\r\n            </ion-button>\r\n            <ion-button size=\"small\" fill=\"clear\" color=\"dark\"  (click)=\"toPage(item.id)\">\r\n              <ion-icon slot=\"start\" name=\"text\" mode=\"md\"></ion-icon>\r\n              {{item.plnum | setnum}}\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n        <div class=\"img-box\" *ngIf=\"item.dznum > 0\">\r\n          <img *ngFor=\"let src of item.heads\" [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\r\n          {{item.dznum | setnum}}人觉得很赞\r\n        </div>\r\n        <div class=\"pl\" (click)=\"toPage(item.id)\" *ngFor=\"let pl of item.plarr\">\r\n          <span>{{pl.user_name}}：</span>{{pl.content | decodeuri}}\r\n        </div>\r\n        <ion-button no-padding size=\"small\" fill=\"clear\" (click)=\"toPage(item.id)\" *ngIf=\"item.plnum > 2\">查看剩余{{(item.plnum - 2) | setnum}}条回复</ion-button>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <div class=\"content-box content-one\" [ngClass]=\"{show: pageType == 1}\">\r\n    <app-nomore *ngIf=\"pqlist && pqlist.length === 0\"></app-nomore>\r\n    <div *ngFor=\"let item of pqlist\">\r\n      <ion-card mode=\"ios\" margin-start=\"0\" margin-end=\"0\" *ngIf=\"item.opentype == 0\">\r\n        <ion-item>\r\n          <ion-avatar slot=\"start\" (click)=\"goperson(item.userid)\">\r\n            <img [src]=\"http.headimg | imgsrc: http.zdomain\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2 class=\"item-title\" (click)=\"goperson(item.userid)\">{{item.user_name}}<app-yhbox [color]=\"'yellow'\" [title]=\"item.name\" [noborder]=\"true\"></app-yhbox></h2>\r\n            <p>{{item.createtime | oldtonow}}</p></ion-label>\r\n          <ion-button  *ngIf=\"item.userid | isgz: gzlistfn.getGzlist()\" (click)=\"setgz(item.userid)\" color=\"medium\" size=\"small\" shape=\"round\" fill=\"outline\" slot=\"end\">+关注</ion-button>\r\n        </ion-item>\r\n\r\n        <ion-card-content>\r\n          <div class=\"title\" (click)=\"toPage(item.id)\"  *ngIf=\"item.content && item.content != 'null'\">{{item.content}}</div>\r\n          <div padding-top>\r\n            <app-pqimgbox [imglist]=\"item.thumb[0] ? item.thumb : item.imgarr\" [ytimglist]=\"item.imgarr\"></app-pqimgbox>\r\n          </div>\r\n          <!--<img (click)=\"toPage(1, 1)\" class=\"radius-img\" src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" alt=\"\">-->\r\n          <div class=\"address-box\">\r\n            <div class=\"left\">\r\n              <div class=\"address\" *ngIf=\"item.address && item.address != 'null'\">\r\n                <ion-icon name=\"pin\" color=\"dark\"></ion-icon>\r\n                <span>{{item.address}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"right\">\r\n              <ion-button size=\"small\" fill=\"clear\" color=\"dark\" (click)=\"setdz(item)\">\r\n                <ion-icon name=\"heart-empty\" *ngIf=\"item.isdz == 0\"></ion-icon>\r\n                <ion-icon name=\"heart\" color=\"danger\" *ngIf=\"item.isdz == 1\"></ion-icon>\r\n                {{item.dznum | setnum}}\r\n              </ion-button>\r\n              <ion-button size=\"small\" fill=\"clear\" color=\"dark\" (click)=\"toPage(item.id)\">\r\n                <ion-icon slot=\"start\" name=\"text\" mode=\"md\"></ion-icon>\r\n                {{item.plnum | setnum}}\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n          <div class=\"img-box\" *ngIf=\"item.dznum > 0\">\r\n            <img *ngFor=\"let src of item.heads\" [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\r\n\r\n            {{item.dznum | setnum}}人觉得很赞\r\n          </div>\r\n          <div class=\"pl\" (click)=\"toPage(item.id)\" *ngFor=\"let pl of item.plarr\">\r\n            <span>{{pl.user_name}}：</span>{{pl.content | decodeuri}}\r\n          </div>\r\n          <ion-button no-padding size=\"small\" fill=\"clear\" (click)=\"toPage(item.id)\" *ngIf=\"item.plnum > 2\">查看剩余{{(item.plnum - 2) | setnum}}条回复</ion-button>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <div *ngIf=\"item.opentype != 0\" padding>\r\n        <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\r\n          <div class=\"title\">{{item.content}}</div>\r\n          <ion-row>\r\n            <ion-col *ngFor=\"let src of item.imgarr\">\r\n              <img [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"footer\">\r\n            <span class=\"tag-box red\">广告</span>\r\n            <span>{{item.author || item.user_name}}</span>\r\n            <!--<span>{{item.plnum}}条评论</span>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content-box content-three\" [ngClass]=\"{show: pageType == 2}\">\r\n    <app-nomore *ngIf=\"yjlist && yjlist.length === 0\"></app-nomore>\r\n    <ion-row *ngFor=\"let item of yjlist\">\r\n      <ion-col [size]=\"12\" no-padding *ngIf=\"item.opentype == 0\">\r\n        <ion-card mode=\"ios\" margin-start=\"0\" margin-end=\"0\">\r\n          <ion-card-header *ngIf=\"item.imgarr.length > 0\" (click)=\"toPage(item.id)\">\r\n            <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain\" alt=\"\">\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <div class=\"title yj-title\" (click)=\"toPage(item.id)\">{{item.title}}</div>\r\n            <p *ngIf=\"item.des && item.des != 'null'\" (click)=\"toPage(item.id)\">{{item.des}}</p>\r\n            <div class=\"person-box\" margin-top>\r\n              <div class=\"person\" (click)=\"goperson(item.userid)\">\r\n                <img [src]=\"item.headimg | imgsrc: http.zdomain\">\r\n                <div class=\"name-box\">\r\n                  <div class=\"name\" (click)=\"goperson(item.userid)\">{{item.user_name}} <app-yhbox [color]=\"'yellow'\" [title]=\"item.name\" [noborder]=\"true\"></app-yhbox></div>\r\n                  <div class=\"des\">{{item.createtime | oldtonow}}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"gz\" *ngIf=\"item.userid | isgz: gzlistfn.getGzlist()\" (click)=\"setgz(item.userid)\">\r\n                <span>+关注</span>\r\n              </div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <div *ngIf=\"item.opentype != 0\" padding>\r\n        <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\r\n          <div class=\"title\">{{item.title}}</div>\r\n          <ion-row>\r\n            <ion-col *ngFor=\"let src of item.imgarr\">\r\n              <img [src]=\"http.zdomain + src\" alt=\"\">\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"footer\">\r\n            <span class=\"tag-box red\">广告</span>\r\n            <span>{{item.author || item.user_name}}</span>\r\n            <!--<span>{{item.plnum}}条评论</span>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"content-box content-four\" [ngClass]=\"{show: pageType == 3}\">\r\n    <app-nomore *ngIf=\"gllist && gllist.length === 0\"></app-nomore>\r\n    <div  *ngFor=\"let item of gllist\">\r\n      <ion-item *ngIf=\"item.opentype == 0\">\r\n        <ion-thumbnail slot=\"end\" *ngIf=\"item.imgarr.length > 0\" (click)=\"toPage(item.id)\">\r\n          <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain \" alt=\"\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <div (click)=\"toPage(item.id)\">\r\n            {{item.title}}\r\n          </div>\r\n          <div class=\"footer\">\r\n            <span class=\"tag-box\" [ngStyle]=\"{display: item.tag && item.tag != 'null' ? '' : 'none'}\" (click)=\"toPage(item.id)\">{{item.tag}}</span>\r\n            <span (click)=\"goperson(item.userid)\">{{item.author || item.user_name}}</span>\r\n            <span>&nbsp;|&nbsp;</span>\r\n            <span (click)=\"toPage(item.id)\">{{item.plnum | setnum}}条评论</span>\r\n          </div>\r\n        </ion-label>\r\n      </ion-item>\r\n      <div *ngIf=\"item.opentype != 0\" padding>\r\n        <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\r\n          <div class=\"title\">{{item.title}}</div>\r\n          <ion-row>\r\n            <ion-col *ngFor=\"let src of item.imgarr\">\r\n              <img [src]=\"http.zdomain + src\" alt=\"\">\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"footer\">\r\n            <span class=\"tag-box red\">广告</span>\r\n            <span>{{item.author || item.user_name}}</span>\r\n            <!--<span>{{item.plnum}}条评论</span>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content-box content-four\" [ngClass]=\"{show: pageType == 4}\">\r\n    <app-nomore *ngIf=\"zmlist && zmlist.length === 0\"></app-nomore>\r\n    <div *ngFor=\"let item of zmlist\">\r\n      <ion-item *ngIf=\"item.opentype == 0\">\r\n        <ion-thumbnail slot=\"start\" *ngIf=\"item.imgarr.length > 0\" (click)=\"toPage(item.id)\">\r\n          <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain\" alt=\"\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <div (click)=\"toPage(item.id)\">{{item.title}}</div>\r\n          <div class=\"footer\">\r\n            <span class=\"tag-box\"  [ngStyle]=\"{display: item.tag && item.tag != 'null' ? '' : 'none'}\" (click)=\"toPage(item.id)\">{{item.tag}}</span>\r\n            <span (click)=\"goperson(item.userid)\">{{item.author || item.user_name}}</span>\r\n            <span>&nbsp;|&nbsp;</span>\r\n            <span (click)=\"toPage(item.id)\">{{item.plnum | setnum}}条评论</span>\r\n          </div>\r\n        </ion-label>\r\n      </ion-item>\r\n      <div *ngIf=\"item.opentype != 0\" padding>\r\n        <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\r\n          <div class=\"title\">{{item.title}}</div>\r\n          <ion-row>\r\n            <ion-col *ngFor=\"let src of item.imgarr\">\r\n              <img [src]=\"http.zdomain + src\" alt=\"\">\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"footer\">\r\n            <span class=\"tag-box red\">广告</span>\r\n            <span>{{item.author || item.user_name}}</span>\r\n            <!--<span>{{item.plnum}}条评论</span>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n       loadingSpinner=\"bubbles\"\r\n       loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n  <!--<vg-player>-->\r\n    <!--<vg-overlay-play></vg-overlay-play>-->\r\n    <!--<vg-buffering></vg-buffering>-->\r\n    <!--&lt;!&ndash;<vg-controls [vgAutohide]=\"true\" [vgAutohideTime]=\"5\">&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<vg-play-pause></vg-play-pause>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<vg-time-display [vgProperty]=\"'current'\"></vg-time-display>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<vg-scrub-bar>&ndash;&gt;-->\r\n        <!--&lt;!&ndash;<vg-scrub-bar-current-time [vgSlider]=\"true\"></vg-scrub-bar-current-time>&ndash;&gt;-->\r\n        <!--&lt;!&ndash;<vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;</vg-scrub-bar>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<vg-time-display [vgProperty]=\"'total'\"></vg-time-display>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<vg-fullscreen></vg-fullscreen>&ndash;&gt;-->\r\n    <!--&lt;!&ndash;</vg-controls>&ndash;&gt;-->\r\n    <!--<video #media playsinline webkit-playsinline [vgMedia]=\"media\" [src]=\"http.zdomain + '/mobile/videos/201906/VID_20190630_014253.mp4'\" autoplay></video>-->\r\n  <!--</vg-player>-->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px; }\n  .search-bar .left {\n    width: 48px;\n    font-size: var(--ion-title);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .search-bar .left img {\n      width: 12px;\n      margin-left: 5px; }\n  .search-bar .right {\n    width: 20px; }\n  .search-bar .right img {\n      width: 19px; }\n  .search-bar .center {\n    display: -webkit-box;\n    flex: 1;\n    margin: 0 15px 0 0;\n    height: 27px;\n    background-color: #fff;\n    border-radius: 13.5px;\n    box-sizing: border-box;\n    padding-left: 10px;\n    padding-right: 15px;\n    overflow: hidden; }\n  .search-bar .center .search-box {\n      display: flex;\n      flex: 1;\n      width: 100%;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      color: var(--ion-color-medium);\n      font-size: var(--ion-text);\n      line-height: 27px; }\n  .search-bar .center .search-box span {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .search-bar .center .search-box img {\n        width: 17px;\n        height: 20px;\n        margin-right: 10px; }\n  .footer-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .footer-bar .item {\n    width: 45px;\n    text-align: center;\n    height: 42px;\n    font-size: var(--ion-text);\n    line-height: 50px;\n    color: #fff; }\n  .footer-bar .item.active {\n      font-size: var(--ion-title);\n      font-weight: 600;\n      line-height: 47px;\n      position: relative; }\n  .footer-bar .item.active::after {\n        content: '';\n        display: block;\n        position: absolute;\n        bottom: 0;\n        width: 50%;\n        left: 25%;\n        height: 3px;\n        background: #fff;\n        border-radius: 1.5px; }\n  ion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\n  .content-box {\n  display: none; }\n  .content-box.show {\n    display: block; }\n  .item-title {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start; }\n  .item-title app-yhbox {\n    margin-left: 10px; }\n  .img-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--ion-color-medium); }\n  .img-box img {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    margin-right: 5px; }\n  .pl {\n  margin-top: 10px;\n  font-size: var(--ion-sm-text);\n  flex-wrap: wrap; }\n  .pl span {\n    font-size: var(--ion-text);\n    color: var(--ion-color-dark); }\n  ion-card .address {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: var(--ion-color-light);\n  padding: 2px 5px;\n  border-radius: 5px;\n  font-size: var(--ion-sm-text); }\n  ion-card .address span {\n    flex: 1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden; }\n  ion-card .address-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center; }\n  ion-card .address-box .left {\n    width: 50%; }\n  ion-card .address-box .right {\n    width: 50%;\n    text-align: right; }\n  .content-one ion-card {\n  border-radius: 0;\n  box-shadow: none;\n  margin-left: 0;\n  margin-right: 0;\n  border-bottom: 1px solid var(--ion-color-light); }\n  .content-one ion-card ion-card-content {\n    padding-top: 0; }\n  .content-one ion-item {\n  --border-color: #fff; }\n  .content-one .radius-img {\n  border-radius: 8px; }\n  .content-one .title {\n  font-size: var(--ion-title);\n  color: var(--ion-color-dark); }\n  .content-three ion-card-header {\n  padding: 0; }\n  .content-four ion-thumbnail {\n  --border-radius: 5px;\n  --size: 80px;\n  width: 85px; }\n  .content-four ion-label {\n  white-space: normal; }\n  .content-four .footer {\n  margin-top: 7px;\n  font-size: var(--ion-sm-text);\n  line-height: 20px; }\n  .content-four .footer span {\n    color: var(--ion-color-medium); }\n  .content-four .footer span:first-of-type {\n      color: var(--ion-color-primary);\n      border: 1px solid var(--ion-color-primary);\n      border-radius: 3px;\n      margin-right: 10px; }\n  .person-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center; }\n  .person-box .person {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .person-box .person img {\n      width: 28px;\n      height: 28px;\n      border-radius: 50%;\n      margin-right: 10px; }\n  .person-box .person .name-box {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start; }\n  .person-box .person .name-box .name {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: flex-start;\n        font-size: var(--ion-text);\n        color: var(--ion-color-dark); }\n  .person-box .person .name-box .name app-yhbox {\n          margin-left: 10px; }\n  .person-box .person .name-box .des {\n        font-size: var(--ion-sm-text);\n        color: var(--ion-color-medium); }\n  .person-box .gz span {\n    background: var(--ion-color-linegradient);\n    font-size: var(--ion-sm-text);\n    height: 20px;\n    padding: 0 7px;\n    display: block;\n    line-height: 20px;\n    text-align: center;\n    border-radius: 10px;\n    color: #fff; }\n  .person-box .gz span:active {\n      background: var(--ion-color-linegradient-active); }\n  .yj-title {\n  font-weight: 600;\n  color: var(--ion-color-dark); }\n  .tag-box {\n  border: 1px solid var(--ion-color-success);\n  color: var(--ion-color-success);\n  border-radius: 5px;\n  font-size: var(--ion-sm-text);\n  padding: 0 1px; }\n  .tag-box.red {\n    color: var(--ion-color-danger) !important;\n    border-color: var(--ion-color-danger) !important; }\n  .gg-box .title {\n  font-weight: 600; }\n  .gg-box img {\n  width: 100%;\n  border-radius: 7px; }\n  .gg-box .tag-box {\n  margin-right: 10px; }\n  .gg-box .footer {\n  font-size: var(--ion-sm-text); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlLEVBQUE7RUFOakI7SUFRSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQixFQUFBO0VBYnZCO01BZU0sV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBaEJ0QjtJQW9CSSxXQUFXLEVBQUE7RUFwQmY7TUFzQk0sV0FBVyxFQUFBO0VBdEJqQjtJQTBCSSxvQkFBb0I7SUFDcEIsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBR3RCLHFCQUFxQjtJQUdyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTtFQXZDcEI7TUF5Q00sYUFBYTtNQUNiLE9BQU87TUFDUCxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLDJCQUEyQjtNQUMzQixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLDBCQUEwQjtNQUMxQixpQkFBaUIsRUFBQTtFQWpEdkI7UUFvRFEsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBQTtFQXREL0I7UUF5RFEsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0IsRUFBQTtFQUsxQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQixFQUFBO0VBSnJCO0lBTUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixXQUFXLEVBQUE7RUFYZjtNQWFNLDJCQUEyQjtNQUMzQixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBO0VBaEJ4QjtR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Z0RBQWdELEVBQUE7RUFHcEQ7RUFFSSxnQkFBZ0IsRUFBQTtFQUZwQjtFQUtJLFdBQVc7RUFHWCxrQkFBa0IsRUFBQTtFQVJ0QjtFQVdJLGtCQUFrQixFQUFBO0VBWHRCO0VBY0ksNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zZWFyY2gtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgLmxlZnQge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwIDE1cHggMCAwO1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTMuNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAuc2VhcmNoLWJveCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICAvL2Rpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5mb290ZXItYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLml0ZW0ge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQ3cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgcmVkKSwgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIGJsdWUpKTtcclxufVxyXG4uY29udGVudC1ib3gge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgJi5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4uaXRlbS10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFwcC15aGJveCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbWctYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxufVxyXG4ucGwge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gIC8vZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAvL2p1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIH1cclxufVxyXG5pb24tY2FyZCB7XHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAvL3BhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICAuYWRkcmVzcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLy9tYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hZGRyZXNzLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAubGVmdCB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LW9uZSB7XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLnJhZGl1cy1pbWcge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgfVxyXG59XHJcbi5jb250ZW50LXRocmVlIHtcclxuICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuLmNvbnRlbnQtZm91ciB7XHJcbiAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tc2l6ZTogODBweDtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gIH1cclxuICBpb24tbGFiZWwge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuXHJcbiAgfVxyXG4gIC5mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucGVyc29uLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5wZXJzb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC5uYW1lLWJveCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgIGFwcC15aGJveCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmRlcyB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5neiB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpbmVncmFkaWVudCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIC8vd2lkdGg6IDUwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgN3B4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpbmVncmFkaWVudC1hY3RpdmUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi55ai10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcbi50YWctYm94IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgcGFkZGluZzogMCAxcHg7XHJcbiAgJi5yZWQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5nZy1ib3gge1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIH1cclxuICAudGFnLWJveCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5mb290ZXIge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_shop_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shop-content.service */ "./src/app/services/shop-content.service.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_pqlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/pqlist.service */ "./src/app/services/pqlist.service.ts");
/* harmony import */ var _services_gzlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/gzlist.service */ "./src/app/services/gzlist.service.ts");
/* harmony import */ var _services_yjlist_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/yjlist.service */ "./src/app/services/yjlist.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_selete_media_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/selete-media.service */ "./src/app/services/selete-media.service.ts");
/* harmony import */ var _components_fbselete_fbselete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/fbselete/fbselete.component */ "./src/app/components/fbselete/fbselete.component.ts");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/topage.service */ "./src/app/services/topage.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-14 23:03:42
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-08-04 00:04:38
 * @Description: file content
 */










// import {FbseletePage} from '../pages/fbselete/fbselete.page';


// import {SharesearchComponent} from "../components/sharesearch/sharesearch.component";
// import {VideoComponent} from '../components/video/video.component';
// import {GoodsattrComponent} from '../components/goodsattr/goodsattr.component';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(http, shop, route, pqlistfn, gzlistfn, yjlistfn, modalController, topage, native, seletemedia) {
        this.http = http;
        this.shop = shop;
        this.route = route;
        this.pqlistfn = pqlistfn;
        this.gzlistfn = gzlistfn;
        this.yjlistfn = yjlistfn;
        this.modalController = modalController;
        this.topage = topage;
        this.native = native;
        this.seletemedia = seletemedia;
        this.pageType = 0;
        this.pageArray = ['关注', '票圈', '游记', '攻略', '招募'];
        this.ishttp = new Set();
    }
    Tab2Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('加载完了');
        this.gzlist = this.pqlistfn.getgzList();
        this.shop.getShop().then(function (res) {
            _this.shopdata = res;
            if (_this.shopdata.search_keywords) {
                _this.searchKey = _this.shopdata.search_keywords.split('|')[2];
            }
        }).catch(function (err) {
        });
        this.native.getAppversion().then(function (res) {
            console.log(res);
        }).catch(function (err2) {
            console.error(err2);
        });
    };
    Tab2Page.prototype.ngOnInit = function () {
        // this.gzlist = this.pqlistfn.getgzList();
        // this.shop.getShop().then(res => {
        //   this.shopdata = res;
        // }).catch(err => {
        //
        // });
    };
    Tab2Page.prototype.toPage = function (id) {
        console.log(id);
        var type = this.pageType;
        if (type < 2) {
            this.route.navigate(['/pqcontent'], { queryParams: { id: id, type: type } });
        }
        else {
            this.route.navigate(['/yjcontent'], { queryParams: { id: id, type: type - 2 } });
        }
    };
    Tab2Page.prototype.searchModal = function () {
        // const modal = await this.modalController.create({
        //   component: SharesearchComponent,
        //   componentProps: { searchKey: this.searchKey }
        // });
        // return await modal.present();
        this.route.navigate(['/sharesearch'], { queryParams: { searchKey: this.searchKey } });
    };
    Tab2Page.prototype.setType = function (type) {
        this.pageType = type;
        if (type === 1 && !this.pqlist) {
            this.pqlist = this.pqlistfn.getList();
        }
        else if (type === 2 && !this.yjlist) {
            this.yjlist = this.yjlistfn.getyjList();
        }
        else if (type === 3 && !this.gllist) {
            this.gllist = this.yjlistfn.getglList();
        }
        else if (type === 4 && !this.zmlist) {
            this.zmlist = this.yjlistfn.getzmList();
        }
    };
    Tab2Page.prototype.doRefresh = function (event) {
        switch (Number(this.pageType)) {
            case 0:
                this.pqlistfn.reset(1).then(function (res) {
                    event.target.complete();
                }).catch(function (err2) {
                    event.target.complete();
                });
                break;
            case 1:
                this.pqlistfn.reset(2).then(function (res) {
                    event.target.complete();
                }).catch(function (err2) {
                    event.target.complete();
                });
                break;
            case 2:
                this.yjlistfn.reset(1).then(function (res) {
                    event.target.complete();
                }).catch(function (err2) {
                    event.target.complete();
                });
                break;
            case 3:
                this.yjlistfn.reset(2).then(function (res) {
                    event.target.complete();
                }).catch(function (err2) {
                    event.target.complete();
                });
                break;
            case 4:
                this.yjlistfn.reset(3).then(function (res) {
                    event.target.complete();
                }).catch(function (err2) {
                    event.target.complete();
                });
                break;
        }
    };
    Tab2Page.prototype.loadData = function (event) {
        switch (Number(this.pageType)) {
            case 0:
                this.pqlistfn.addList(1).then(function (res) {
                    event.target.complete();
                }).catch(function (err2) {
                    event.target.complete();
                });
                break;
            case 1:
                this.pqlistfn.addList(2).then(function (res) {
                    event.target.complete();
                }).catch(function (err2) {
                    event.target.complete();
                });
                break;
            case 2:
                this.yjlistfn.addList(1).then(function (res) {
                    event.target.complete();
                }).catch(function (err2) {
                    event.target.complete();
                });
                break;
            case 3:
                this.yjlistfn.addList(2).then(function (res) {
                    event.target.complete();
                }).catch(function (err2) {
                    event.target.complete();
                });
                break;
            case 4:
                this.yjlistfn.addList(3).then(function (res) {
                    event.target.complete();
                }).catch(function (err2) {
                    event.target.complete();
                });
                break;
        }
    };
    Tab2Page.prototype.tofb = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_fbselete_fbselete_component__WEBPACK_IMPORTED_MODULE_11__["FbseleteComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            console.log(res);
                            if (!res.data) {
                                return false;
                            }
                            if (res.data.type === 0) {
                                if (res.data.mediatype === 1) {
                                    _this.native.getPictureByCamera().then(function (filedata) {
                                        if (!filedata) {
                                            return false;
                                        }
                                        _this.seletemedia.addImg(filedata);
                                        _this.toFbpq(res.data.mediatype);
                                    });
                                    // this.native.getPictureByCamera().then((filedata: MediaFile) => {
                                    //
                                    // }, err => {});
                                }
                                else if (res.data.mediatype === 2) {
                                    _this.native.captureVideo().then(function (filedata) {
                                        if (!filedata) {
                                            return false;
                                        }
                                        _this.seletemedia.setData(filedata);
                                        _this.toFbpq(res.data.mediatype);
                                    }, function (err) { });
                                }
                                else {
                                    _this.native.getPictures(9).then(function (path) {
                                        if (!path || path.length == 0) {
                                            return false;
                                        }
                                        path.map(function (img) {
                                            _this.seletemedia.addImg(img);
                                        });
                                        _this.toFbpq(res.data.mediatype);
                                    });
                                }
                            }
                            else {
                                _this.route.navigate(['/fbyj'], { queryParams: { type: res.data.type } });
                            }
                            // this.setData(item.menu_url);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab2Page.prototype.toFbpq = function (type) {
        this.route.navigate(['/fbpqimg'], { queryParams: { type: type } });
    };
    Tab2Page.prototype.toPages = function (type, id, name) {
        this.topage.toPage(type, id, name);
    };
    Tab2Page.prototype.setdz = function (item) {
        var _this = this;
        console.log(item);
        if (this.ishttp.has(item.id)) {
            this.native.presentToast('请稍后再试!');
            return false;
        }
        this.ishttp.add(item.id);
        var isqx;
        if (item.isdz == 0) {
            isqx = 0;
        }
        else {
            isqx = 1;
        }
        var obj = {
            touid: item.userid,
            tid: item.id,
            istop: 1,
            isqx: isqx
        };
        this.http.getData(this.http.setdz, obj).subscribe(function (res) {
            _this.ishttp.delete(item.id);
            // if (isqx == 1) {
            //   item.isdz = 0;
            // } else {
            //   item.isdz = 1;
            // }
            // item.dznum = res.result.dznum;
            // if (item.heads.length === 5 && item.dznum < 5) {
            //   item.heads = item.heads.splice(0, item.dznum);
            // }
            _this.setdatadz(item, isqx, res.result.dznum);
            _this.setopydata(item.id, isqx, res.result.dznum);
        }, function (error2) {
            _this.ishttp.delete(item.id);
        });
    };
    Tab2Page.prototype.setdatadz = function (item, isqx, num) {
        if (isqx == 1) {
            item.isdz = 0;
        }
        else {
            item.isdz = 1;
        }
        item.dznum = num;
        if (item.heads && item.heads.length === 5 && item.dznum < 5) {
            item.heads = item.heads.splice(0, item.dznum);
        }
    };
    Tab2Page.prototype.setopydata = function (id, isqx, num) {
        var arr;
        if (this.pageType === 0) {
            arr = this.pqlist;
        }
        else if (this.pageType === 1) {
            arr = this.gzlist;
        }
        for (var i = 0, j = arr.length; i < j; i++) {
            if (arr[i].id == id) {
                console.log(arr[i]);
                this.setdatadz(arr[i], isqx, num);
                return;
            }
        }
    };
    Tab2Page.prototype.setgz = function (touid) {
        var _this = this;
        this.http.getData(this.http.setgz, { touid: touid, type: 1 }).subscribe(function (res) {
            console.log(res);
            _this.gzlistfn.puitem(touid);
        });
    };
    Tab2Page.prototype.goperson = function (id) {
        console.log(id);
        this.route.navigate(['/myrelease'], { queryParams: { userid: id } });
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_shop_content_service__WEBPACK_IMPORTED_MODULE_3__["ShopContentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_pqlist_service__WEBPACK_IMPORTED_MODULE_6__["PqlistService"],
            _services_gzlist_service__WEBPACK_IMPORTED_MODULE_7__["GzlistService"], _services_yjlist_service__WEBPACK_IMPORTED_MODULE_8__["YjlistService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"], _services_topage_service__WEBPACK_IMPORTED_MODULE_12__["TopageService"],
            _services_native_service__WEBPACK_IMPORTED_MODULE_4__["NativeService"], _services_selete_media_service__WEBPACK_IMPORTED_MODULE_10__["SeleteMediaService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map