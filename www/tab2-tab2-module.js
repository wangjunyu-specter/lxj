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

module.exports = "<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-07-24 22:51:02\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-11-28 17:25:29\r\n * @Description: file content\r\n -->\r\n<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\">\r\n    <div class=\"search-bar\">\r\n      <!--<div class=\"left\" (click)=\"toPage(4)\">-->\r\n        <!--成都-->\r\n        <!--<img src=\"/assets/index-arrow.svg\">-->\r\n      <!--</div>-->\r\n      <div class=\"center\" (click)=\"searchModal()\">\r\n        <div class=\"search-box\">\r\n          <img src=\"/assets/fdj.svg\">\r\n          <span *ngIf=\"shopdata\">{{searchKey}}</span>\r\n          <span *ngIf=\"!shopdata\">发现精彩</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"right\" (click)=\"tofb()\">\r\n      <img src=\"/assets/fabu.svg\" alt=\"\">\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-bar\">\r\n      <div *ngFor=\"let item of pageArray;let i = index\" class=\"item\"\r\n           [ngClass]=\"{active: item.active == 1}\" (click)=\"setType(i)\">{{item.name}}</div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n       pullingIcon=\"arrow-dropdown\"\r\n       pullingText=\"Pull to refresh\"\r\n       refreshingSpinner=\"circles\"\r\n       refreshingText=\"更新中...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"content-box content-one\" [ngClass]=\"{show: pageType == 0}\">\r\n    <app-nomore *ngIf=\"gzlist && gzlist.length === 0\"></app-nomore>\r\n    <ion-card mode=\"ios\" margin-start=\"0\" margin-end=\"0\" *ngFor=\"let item of gzlist\">\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\" (click)=\"goperson(item.userid)\">\r\n          <img [src]=\"item.headimg | imgsrc: http.zdomain\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2 class=\"item-title\" (click)=\"goperson(item.userid)\">{{item.user_name}}<app-yhbox [color]=\"'yellow'\" [title]=\"item.name\" [noborder]=\"true\"></app-yhbox></h2>\r\n          <p>{{item.createtime | oldtonow}}</p></ion-label>\r\n        <ion-button *ngIf=\"pageType != 0\" (click)=\"setgz(item.userid)\" color=\"medium\" size=\"small\" shape=\"round\" fill=\"outline\" slot=\"end\">+关注</ion-button>\r\n      </ion-item>\r\n\r\n      <ion-card-content>\r\n        <div class=\"title\" *ngIf=\"item.content && item.content != 'null'\" (click)=\"toPage(item.id)\">{{item.content}}</div>\r\n        <div padding-top>\r\n          <app-pqimgbox [imglist]=\"item.thumb[0] ? item.thumb : item.imgarr\" [ytimglist]=\"item.imgarr\"></app-pqimgbox>\r\n        </div>\r\n        <!--<img (click)=\"toPage(1, 1)\" class=\"radius-img\" src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" alt=\"\">-->\r\n        <div class=\"address-box\">\r\n          <div class=\"left\">\r\n            <div class=\"address\" *ngIf=\"item.address && item.address != 'null'\">\r\n              <ion-icon name=\"pin\" color=\"dark\"></ion-icon>\r\n              <span>{{item.address}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"right\">\r\n            <ion-button size=\"small\" fill=\"clear\" color=\"dark\"  (click)=\"setdz(item)\">\r\n              <ion-icon name=\"heart-empty\" *ngIf=\"item.isdz == 0\"></ion-icon>\r\n              <ion-icon name=\"heart\" color=\"danger\" *ngIf=\"item.isdz == 1\"></ion-icon>\r\n              {{item.dznum | setnum}}\r\n            </ion-button>\r\n            <ion-button size=\"small\" fill=\"clear\" color=\"dark\"  (click)=\"toPage(item.id)\">\r\n              <ion-icon slot=\"start\" name=\"text\" mode=\"md\"></ion-icon>\r\n              {{item.plnum | setnum}}\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n        <div class=\"img-box\" *ngIf=\"item.dznum > 0\">\r\n          <img *ngFor=\"let src of item.heads\" [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\r\n          {{item.dznum | setnum}}人觉得很赞\r\n        </div>\r\n        <div class=\"pl\" (click)=\"toPage(item.id)\" *ngFor=\"let pl of item.plarr\">\r\n          <span>{{pl.user_name}}：</span>{{pl.content | decodeuri}}\r\n        </div>\r\n        <ion-button no-padding size=\"small\" fill=\"clear\" (click)=\"toPage(item.id)\" *ngIf=\"item.plnum > 2\">查看剩余{{(item.plnum - 2) | setnum}}条回复</ion-button>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <div class=\"content-box content-one\" [ngClass]=\"{show: pageType == 1}\">\r\n    <app-nomore *ngIf=\"pqlist && pqlist.length === 0\"></app-nomore>\r\n    <div *ngFor=\"let item of pqlist\">\r\n      <ion-card mode=\"ios\" margin-start=\"0\" margin-end=\"0\" *ngIf=\"item.opentype == 0\">\r\n        <ion-item>\r\n          <ion-avatar slot=\"start\" (click)=\"goperson(item.userid)\">\r\n            <img [src]=\"http.headimg | imgsrc: http.zdomain\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2 class=\"item-title\" (click)=\"goperson(item.userid)\">{{item.user_name}}<app-yhbox [color]=\"'yellow'\" [title]=\"item.name\" [noborder]=\"true\"></app-yhbox></h2>\r\n            <p>{{item.createtime | oldtonow}}</p></ion-label>\r\n          <ion-button  *ngIf=\"setIsgz(item.userid)\" (click)=\"setgz(item.userid)\" color=\"medium\" size=\"small\" shape=\"round\" fill=\"outline\" slot=\"end\">+关注</ion-button>\r\n        </ion-item>\r\n\r\n        <ion-card-content>\r\n          <div class=\"title\" (click)=\"toPage(item.id)\"  *ngIf=\"item.content && item.content != 'null'\">{{item.content}}</div>\r\n          <div padding-top>\r\n            <app-pqimgbox [imglist]=\"item.thumb[0] ? item.thumb : item.imgarr\" [ytimglist]=\"item.imgarr\"></app-pqimgbox>\r\n          </div>\r\n          <!--<img (click)=\"toPage(1, 1)\" class=\"radius-img\" src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" alt=\"\">-->\r\n          <div class=\"address-box\">\r\n            <div class=\"left\">\r\n              <div class=\"address\" *ngIf=\"item.address && item.address != 'null'\">\r\n                <ion-icon name=\"pin\" color=\"dark\"></ion-icon>\r\n                <span>{{item.address}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"right\">\r\n              <ion-button size=\"small\" fill=\"clear\" color=\"dark\" (click)=\"setdz(item)\">\r\n                <ion-icon name=\"heart-empty\" *ngIf=\"item.isdz == 0\"></ion-icon>\r\n                <ion-icon name=\"heart\" color=\"danger\" *ngIf=\"item.isdz == 1\"></ion-icon>\r\n                {{item.dznum | setnum}}\r\n              </ion-button>\r\n              <ion-button size=\"small\" fill=\"clear\" color=\"dark\" (click)=\"toPage(item.id)\">\r\n                <ion-icon slot=\"start\" name=\"text\" mode=\"md\"></ion-icon>\r\n                {{item.plnum | setnum}}\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n          <div class=\"img-box\" *ngIf=\"item.dznum > 0\">\r\n            <img *ngFor=\"let src of item.heads\" [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\r\n\r\n            {{item.dznum | setnum}}人觉得很赞\r\n          </div>\r\n          <div class=\"pl\" (click)=\"toPage(item.id)\" *ngFor=\"let pl of item.plarr\">\r\n            <span>{{pl.user_name}}：</span>{{pl.content | decodeuri}}\r\n          </div>\r\n          <ion-button no-padding size=\"small\" fill=\"clear\" (click)=\"toPage(item.id)\" *ngIf=\"item.plnum > 2\">查看剩余{{(item.plnum - 2) | setnum}}条回复</ion-button>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <div *ngIf=\"item.opentype != 0\" padding>\r\n        <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\r\n          <div class=\"title\">{{item.content}}</div>\r\n          <ion-row>\r\n            <ion-col *ngFor=\"let src of item.imgarr\">\r\n              <img [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"footer\">\r\n            <span class=\"tag-box red\">广告</span>\r\n            <span>{{item.author || item.user_name}}</span>\r\n            <!--<span>{{item.plnum}}条评论</span>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content-box content-three\" [ngClass]=\"{show: pageType == 2}\">\r\n    <app-nomore *ngIf=\"yjlist && yjlist.length === 0\"></app-nomore>\r\n    <ion-row *ngFor=\"let item of yjlist\">\r\n      <ion-col [size]=\"12\" no-padding *ngIf=\"item.opentype == 0\">\r\n        <ion-card mode=\"ios\" margin-start=\"0\" margin-end=\"0\">\r\n          <ion-card-header *ngIf=\"item.imgarr.length > 0\" (click)=\"toPage(item.id)\">\r\n            <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain\" alt=\"\">\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <div class=\"title yj-title\" (click)=\"toPage(item.id)\">{{item.title}}</div>\r\n            <p *ngIf=\"item.des && item.des != 'null'\" (click)=\"toPage(item.id)\">{{item.des}}</p>\r\n            <div class=\"person-box\" margin-top>\r\n              <div class=\"person\" (click)=\"goperson(item.userid)\">\r\n                <img [src]=\"item.headimg | imgsrc: http.zdomain\">\r\n                <div class=\"name-box\">\r\n                  <div class=\"name\" (click)=\"goperson(item.userid)\">{{item.user_name}} <app-yhbox [color]=\"'yellow'\" [title]=\"item.name\" [noborder]=\"true\"></app-yhbox></div>\r\n                  <div class=\"des\">{{item.createtime | oldtonow}}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"gz\" *ngIf=\"item.userid | isgz: gzlistfn.getGzlist()\" (click)=\"setgz(item.userid)\">\r\n                <span>+关注</span>\r\n              </div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <div *ngIf=\"item.opentype != 0\" padding>\r\n        <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\r\n          <div class=\"title\">{{item.title}}</div>\r\n          <ion-row>\r\n            <ion-col *ngFor=\"let src of item.imgarr\">\r\n              <img [src]=\"http.zdomain + src\" alt=\"\">\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"footer\">\r\n            <span class=\"tag-box red\">广告</span>\r\n            <span>{{item.author || item.user_name}}</span>\r\n            <!--<span>{{item.plnum}}条评论</span>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"content-box content-four\" [ngClass]=\"{show: pageType == 3}\">\r\n    <app-nomore *ngIf=\"gllist && gllist.length === 0\"></app-nomore>\r\n    <div  *ngFor=\"let item of gllist\">\r\n      <ion-item *ngIf=\"item.opentype == 0\">\r\n        <ion-thumbnail slot=\"end\" *ngIf=\"item.imgarr.length > 0\" (click)=\"toPage(item.id)\">\r\n          <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain \" alt=\"\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <div (click)=\"toPage(item.id)\">\r\n            {{item.title}}\r\n          </div>\r\n          <div class=\"footer\">\r\n            <span class=\"tag-box\" [ngStyle]=\"{display: item.tag && item.tag != 'null' ? '' : 'none'}\" (click)=\"toPage(item.id)\">{{item.tag}}</span>\r\n            <span (click)=\"goperson(item.userid)\">{{item.author || item.user_name}}</span>\r\n            <span>&nbsp;|&nbsp;</span>\r\n            <span (click)=\"toPage(item.id)\">{{item.plnum | setnum}}条评论</span>\r\n          </div>\r\n        </ion-label>\r\n      </ion-item>\r\n      <div *ngIf=\"item.opentype != 0\" padding>\r\n        <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\r\n          <div class=\"title\">{{item.title}}</div>\r\n          <ion-row>\r\n            <ion-col *ngFor=\"let src of item.imgarr\">\r\n              <img [src]=\"http.zdomain + src\" alt=\"\">\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"footer\">\r\n            <span class=\"tag-box red\">广告</span>\r\n            <span>{{item.author || item.user_name}}</span>\r\n            <!--<span>{{item.plnum}}条评论</span>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content-box content-four\" [ngClass]=\"{show: pageType == 4}\">\r\n    <app-nomore *ngIf=\"zmlist && zmlist.length === 0\"></app-nomore>\r\n    <div *ngFor=\"let item of zmlist\">\r\n      <ion-item *ngIf=\"item.opentype == 0\">\r\n        <ion-thumbnail slot=\"start\" *ngIf=\"item.imgarr.length > 0\" (click)=\"toPage(item.id)\">\r\n          <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain\" alt=\"\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <div (click)=\"toPage(item.id)\">{{item.title}}</div>\r\n          <div class=\"footer\">\r\n            <span class=\"tag-box\"  [ngStyle]=\"{display: item.tag && item.tag != 'null' ? '' : 'none'}\" (click)=\"toPage(item.id)\">{{item.tag}}</span>\r\n            <span (click)=\"goperson(item.userid)\">{{item.author || item.user_name}}</span>\r\n            <span>&nbsp;|&nbsp;</span>\r\n            <span (click)=\"toPage(item.id)\">{{item.plnum | setnum}}条评论</span>\r\n          </div>\r\n        </ion-label>\r\n      </ion-item>\r\n      <div *ngIf=\"item.opentype != 0\" padding>\r\n        <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\r\n          <div class=\"title\">{{item.title}}</div>\r\n          <ion-row>\r\n            <ion-col *ngFor=\"let src of item.imgarr\">\r\n              <img [src]=\"http.zdomain + src\" alt=\"\">\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"footer\">\r\n            <span class=\"tag-box red\">广告</span>\r\n            <span>{{item.author || item.user_name}}</span>\r\n            <!--<span>{{item.plnum}}条评论</span>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n       loadingSpinner=\"bubbles\"\r\n       loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n  <!--<vg-player>-->\r\n    <!--<vg-overlay-play></vg-overlay-play>-->\r\n    <!--<vg-buffering></vg-buffering>-->\r\n    <!--&lt;!&ndash;<vg-controls [vgAutohide]=\"true\" [vgAutohideTime]=\"5\">&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<vg-play-pause></vg-play-pause>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<vg-time-display [vgProperty]=\"'current'\"></vg-time-display>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<vg-scrub-bar>&ndash;&gt;-->\r\n        <!--&lt;!&ndash;<vg-scrub-bar-current-time [vgSlider]=\"true\"></vg-scrub-bar-current-time>&ndash;&gt;-->\r\n        <!--&lt;!&ndash;<vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;</vg-scrub-bar>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<vg-time-display [vgProperty]=\"'total'\"></vg-time-display>&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<vg-fullscreen></vg-fullscreen>&ndash;&gt;-->\r\n    <!--&lt;!&ndash;</vg-controls>&ndash;&gt;-->\r\n    <!--<video #media playsinline webkit-playsinline [vgMedia]=\"media\" [src]=\"http.zdomain + '/mobile/videos/201906/VID_20190630_014253.mp4'\" autoplay></video>-->\r\n  <!--</vg-player>-->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 6px 10px 0; }\n  .search-bar .left {\n    width: 48px;\n    font-size: var(--ion-title);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .search-bar .left img {\n      width: 12px;\n      margin-left: 5px; }\n  .search-bar .right {\n    width: 20px; }\n  .search-bar .right img {\n      width: 19px; }\n  .search-bar .center {\n    display: flex;\n    flex: 1;\n    margin: 0 15px 0 0;\n    height: 27px;\n    background-color: #fff;\n    border-radius: 13.5px;\n    box-sizing: border-box;\n    padding-left: 10px;\n    padding-right: 15px;\n    overflow: hidden; }\n  .search-bar .center .search-box {\n      display: flex;\n      flex: 1;\n      width: 100%;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      color: var(--ion-color-medium);\n      font-size: var(--ion-text);\n      line-height: 27px; }\n  .search-bar .center .search-box span {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .search-bar .center .search-box img {\n        width: 17px;\n        height: 20px;\n        margin-right: 10px; }\n  .footer-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .footer-bar .item {\n    width: 45px;\n    text-align: center;\n    height: 42px;\n    font-size: var(--ion-text);\n    line-height: 50px;\n    color: #fff; }\n  .footer-bar .item.active {\n      font-size: var(--ion-title);\n      font-weight: 600;\n      line-height: 47px;\n      position: relative; }\n  .footer-bar .item.active::after {\n        content: '';\n        display: block;\n        position: absolute;\n        bottom: 0;\n        width: 50%;\n        left: 25%;\n        height: 3px;\n        background: #fff;\n        border-radius: 1.5px; }\n  ion-toolbar {\n  --background: linear-gradient(var(--ion-color-secondary, red), var(--ion-color-success, blue)); }\n  .content-box {\n  display: none; }\n  .content-box.show {\n    display: block; }\n  .item-title {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start; }\n  .item-title app-yhbox {\n    margin-left: 10px; }\n  .img-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--ion-color-medium); }\n  .img-box img {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    margin-right: 5px; }\n  .pl {\n  margin-top: 10px;\n  font-size: var(--ion-sm-text);\n  flex-wrap: wrap; }\n  .pl span {\n    font-size: var(--ion-text);\n    color: var(--ion-color-dark); }\n  ion-card .address {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: var(--ion-color-light);\n  padding: 2px 5px;\n  border-radius: 5px;\n  font-size: var(--ion-sm-text); }\n  ion-card .address span {\n    flex: 1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden; }\n  ion-card .address-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center; }\n  ion-card .address-box .left {\n    width: 50%; }\n  ion-card .address-box .right {\n    width: 50%;\n    text-align: right; }\n  .content-one ion-card {\n  border-radius: 0;\n  box-shadow: none;\n  margin-left: 0;\n  margin-right: 0;\n  border-bottom: 1px solid var(--ion-color-light); }\n  .content-one ion-card ion-card-content {\n    padding-top: 0; }\n  .content-one ion-item {\n  --border-color: #fff; }\n  .content-one .radius-img {\n  border-radius: 8px; }\n  .content-one .title {\n  font-size: var(--ion-title);\n  color: var(--ion-color-dark); }\n  .content-three ion-card-header {\n  padding: 0; }\n  .content-four ion-thumbnail {\n  --border-radius: 5px;\n  --size: 80px;\n  width: 85px; }\n  .content-four ion-label {\n  white-space: normal; }\n  .content-four .footer {\n  margin-top: 7px;\n  font-size: var(--ion-sm-text);\n  line-height: 20px; }\n  .content-four .footer span {\n    color: var(--ion-color-medium); }\n  .content-four .footer span:first-of-type {\n      color: var(--ion-color-primary);\n      border: 1px solid var(--ion-color-primary);\n      border-radius: 3px;\n      margin-right: 10px; }\n  .person-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center; }\n  .person-box .person {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .person-box .person img {\n      width: 28px;\n      height: 28px;\n      border-radius: 50%;\n      margin-right: 10px; }\n  .person-box .person .name-box {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start; }\n  .person-box .person .name-box .name {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: flex-start;\n        font-size: var(--ion-text);\n        color: var(--ion-color-dark); }\n  .person-box .person .name-box .name app-yhbox {\n          margin-left: 10px; }\n  .person-box .person .name-box .des {\n        font-size: var(--ion-sm-text);\n        color: var(--ion-color-medium); }\n  .person-box .gz span {\n    background: var(--ion-color-linegradient);\n    font-size: var(--ion-sm-text);\n    height: 20px;\n    padding: 0 7px;\n    display: block;\n    line-height: 20px;\n    text-align: center;\n    border-radius: 10px;\n    color: #fff; }\n  .person-box .gz span:active {\n      background: var(--ion-color-linegradient-active); }\n  .yj-title {\n  font-weight: 600;\n  color: var(--ion-color-dark); }\n  .tag-box {\n  border: 1px solid var(--ion-color-success);\n  color: var(--ion-color-success);\n  border-radius: 5px;\n  font-size: var(--ion-sm-text);\n  padding: 0 1px; }\n  .tag-box.red {\n    color: var(--ion-color-danger) !important;\n    border-color: var(--ion-color-danger) !important; }\n  .gg-box .title {\n  font-weight: 600; }\n  .gg-box img {\n  width: 100%;\n  border-radius: 7px; }\n  .gg-box .tag-box {\n  margin-right: 10px; }\n  .gg-box .footer {\n  font-size: var(--ion-sm-text); }\n  ion-card-header {\n  max-height: 200px;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTtFQU5yQjtJQVFJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7RUFidkI7TUFlTSxXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUFoQnRCO0lBb0JJLFdBQVcsRUFBQTtFQXBCZjtNQXNCTSxXQUFXLEVBQUE7RUF0QmpCO0lBMEJJLGFBQWE7SUFDYixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFHdEIscUJBQXFCO0lBR3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBO0VBdkNwQjtNQXlDTSxhQUFhO01BQ2IsT0FBTztNQUNQLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsMkJBQTJCO01BQzNCLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsMEJBQTBCO01BQzFCLGlCQUFpQixFQUFBO0VBakR2QjtRQW9EUSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFBO0VBdEQvQjtRQXlEUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQixFQUFBO0VBSzFCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CLEVBQUE7RUFKckI7SUFNSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLFdBQVcsRUFBQTtFQVhmO01BYU0sMkJBQTJCO01BQzNCLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsa0JBQWtCLEVBQUE7RUFoQnhCO1FB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REFBZ0QsRUFBQTtFQUdwRDtFQUVJLGdCQUFnQixFQUFBO0VBRnBCO0VBS0ksV0FBVztFQUdYLGtCQUFrQixFQUFBO0VBUnRCO0VBV0ksa0JBQWtCLEVBQUE7RUFYdEI7RUFjSSw2QkFBNkIsRUFBQTtFQUdqQztFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNlYXJjaC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4IDA7XHJcbiAgLmxlZnQge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IDAgMTVweCAwIDA7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMy41cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEzLjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzLjVweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIC8vZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmZvb3Rlci1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuaXRlbSB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogNDdweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCByZWQpLCB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgYmx1ZSkpO1xyXG59XHJcbi5jb250ZW50LWJveCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICAmLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbi5pdGVtLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYXBwLXloYm94IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmltZy1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG59XHJcbi5wbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAvL2Rpc3BsYXk6IGZsZXg7XHJcbiAgLy9mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC8vanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgfVxyXG59XHJcbmlvbi1jYXJkIHtcclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIC8vcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5hZGRyZXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAvL21heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmFkZHJlc3MtYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5sZWZ0IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtb25lIHtcclxuICBpb24tY2FyZCB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAucmFkaXVzLWltZyB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICB9XHJcbn1cclxuLmNvbnRlbnQtdGhyZWUge1xyXG4gIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG4uY29udGVudC1mb3VyIHtcclxuICBpb24tdGh1bWJuYWlsIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1zaXplOiA4MHB4O1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG5cclxuICB9XHJcbiAgLmZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5wZXJzb24tYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLnBlcnNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hbWUtYm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgYXBwLXloYm94IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGVzIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmd6IHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGluZWdyYWRpZW50KTtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgLy93aWR0aDogNTBweDtcclxuICAgICAgcGFkZGluZzogMCA3cHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGluZWdyYWRpZW50LWFjdGl2ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnlqLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuLnRhZy1ib3gge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICBwYWRkaW5nOiAwIDFweDtcclxuICAmLnJlZCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmdnLWJveCB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgfVxyXG4gIC50YWctYm94IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmZvb3RlciB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICB9XHJcbn1cclxuaW9uLWNhcmQtaGVhZGVyIHtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */"

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
 * @LastEditTime: 2019-11-26 23:29:13
 * @Description: file content
 */










// import {FbseletePage} from '../pages/fbselete/fbselete.page';


// import { DeletemyreleaseService } from '../services/deletemyrelease.service';
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
        // this.pageArray = ['关注', '票圈', '游记', '攻略', '召集'];
        this.pageArray = [{
                name: '关注',
                type: 0,
                active: 1
            },
            {
                name: '票圈',
                type: 1,
                active: -1
            },
            {
                name: '约游',
                type: 4,
                active: -1
            },
            {
                name: '游记',
                type: 2,
                active: -1
            },
            {
                name: '攻略',
                type: 3,
                active: -1
            }];
        this.ishttp = new Set();
    }
    Tab2Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('加载完了');
        this.gzlist = this.pqlistfn.getgzList();
        this.gzuserlist = this.gzlistfn.getGzlist();
        this.shop.getShop().then(function (res) {
            _this.shopdata = res;
            if (_this.shopdata.search_keywords) {
                _this.searchKey = _this.shopdata.search_keywords.split('|')[2];
            }
        }).catch(function (err) {
        });
        // this.native.getAppversion().then(res => {
        //   console.log(res);
        // }).catch(err2 => {
        //   console.error(err2);
        // })
        // alert(this.native.isandroid());
        // alert(this.native.isios());
        // alert(this.native.ismobile2());
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
    Tab2Page.prototype.setType = function (index) {
        var type;
        this.pageArray.forEach(function (res, i) {
            if (i === index) {
                res.active = 1;
                type = res.type;
            }
            else {
                res.active = -1;
            }
        });
        this.pageType = type;
        if (type === 0) {
            this.gzuserlist = this.gzlistfn.getGzlist();
            if (!this.pqlist) {
                this.gzlist = this.pqlistfn.getgzList();
            }
            else {
                this.pqlistfn.reset(1);
            }
        }
        else if (type === 1) {
            if (!this.pqlist) {
                this.pqlist = this.pqlistfn.getList();
            }
            else {
                this.pqlistfn.reset(2);
            }
        }
        else if (type === 2) {
            if (!this.yjlist) {
                this.yjlist = this.yjlistfn.getyjList();
            }
            else {
                this.yjlistfn.reset(1).then(function (res) { }).catch(function (err) { });
            }
        }
        else if (type === 3) {
            if (!this.gllist) {
                this.gllist = this.yjlistfn.getglList();
            }
            else {
                this.yjlistfn.reset(2).then(function (res) { }).catch(function (err) { });
            }
        }
        else if (type === 4) {
            if (!this.zmlist) {
                this.zmlist = this.yjlistfn.getzmList();
            }
            else {
                this.yjlistfn.reset(3).then(function (res) { }).catch(function (err) { });
            }
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
                            if (!res || res && !res.data) {
                                return false;
                            }
                            if (res.data.type === 0) {
                                // if (res.data.mediatype === 1) {
                                //   this.native.getPictureByCamera().then(filedata => {
                                //     if (!filedata) {
                                //       alert(1);
                                //       return false;
                                //     }
                                //     this.seletemedia.addImg(filedata);
                                //     this.toFbpq(res.data.mediatype);
                                //   });
                                //   // this.native.getPictureByCamera().then((filedata: MediaFile) => {
                                //   //
                                //   // }, err => {});
                                // } else if (res.data.mediatype === 2) {
                                //   this.native.captureVideo().then((filedata: MediaFile) => {
                                //     if (!filedata) {
                                //       return false;
                                //     }
                                //     this.seletemedia.setData(filedata);
                                //     this.toFbpq(res.data.mediatype);
                                //   }, err => {});
                                // } else {
                                //   this.native.getPictures(9).then((path: any) => {
                                //     if (!path || path.length == 0) {
                                //       return false;
                                //     }
                                //     path.map(img => {
                                //       this.seletemedia.addImg(img);
                                //     })
                                //     this.toFbpq(res.data.mediatype);
                                //   });
                                // }
                                _this.toFbpq();
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
    Tab2Page.prototype.toFbpq = function () {
        this.route.navigate(['/fbpqimg'], { queryParams: { type: 1 } });
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
        console.log(this.gzuserlist);
        this.http.getData(this.http.setgz, { touid: touid, type: 1 }).subscribe(function (res) {
            console.log(res);
            // this.gzlistfn.puitem(touid);
            _this.gzuserlist.push(touid);
            console.log(_this.gzuserlist);
        });
    };
    Tab2Page.prototype.goperson = function (id) {
        console.log(id);
        this.route.navigate(['/myrelease'], { queryParams: { userid: id } });
    };
    Tab2Page.prototype.setIsgz = function (id) {
        if (!this.gzuserlist.includes(id)) {
            return true;
        }
        else {
            return false;
        }
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