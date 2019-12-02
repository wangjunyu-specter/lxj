(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sharesearch-sharesearch-module"],{

/***/ "./src/app/pages/sharesearch/sharesearch.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sharesearch/sharesearch.module.ts ***!
  \*********************************************************/
/*! exports provided: SharesearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesearchPageModule", function() { return SharesearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sharesearch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sharesearch.page */ "./src/app/pages/sharesearch/sharesearch.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _sharesearch_page__WEBPACK_IMPORTED_MODULE_6__["SharesearchPage"]
    }
];
var SharesearchPageModule = /** @class */ (function () {
    function SharesearchPageModule() {
    }
    SharesearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sharesearch_page__WEBPACK_IMPORTED_MODULE_6__["SharesearchPage"]]
        })
    ], SharesearchPageModule);
    return SharesearchPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sharesearch/sharesearch.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/sharesearch/sharesearch.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <div class=\"footer-bar\">\n      <div *ngFor=\"let item of pageArray;let i = index\" class=\"item\"\n           [ngClass]=\"{active: pageType == i}\" (click)=\"setType(i)\">{{item}}</div>\n    </div>\n    <ion-buttons slot=\"end\" mode=\"ios\">\n      <ion-button color=\"white\" (click)=\"close()\">\n        取消\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar mode=\"ios\" (ionChange)=\"searchkey()\" [(ngModel)]=\"searchtext\" [cancelButtonIcon]=\"true\" [placeholder]=\"searchKey\"></ion-searchbar>\n  <div class=\"content-box content-one\" [ngClass]=\"{show: pageType == 0}\">\n    <div *ngFor=\"let item of list\">\n      <ion-card mode=\"ios\" margin-start=\"0\" margin-end=\"0\" *ngIf=\"item.opentype == 0\">\n        <ion-item>\n          <ion-avatar slot=\"start\"  (click)=\"goperson(item.userid)\">\n            <img [src]=\"http.headimg | imgsrc: http.zdomain\">\n          </ion-avatar>\n          <ion-label>\n            <h2 class=\"item-title\" (click)=\"goperson(item.userid)\">{{item.user_name}}<app-yhbox [color]=\"'yellow'\" [title]=\"item.name\" [noborder]=\"true\"></app-yhbox></h2>\n            <p>{{item.createtime | oldtonow}}</p></ion-label>\n          <ion-button  *ngIf=\"item.userid | isgz: gzlistfn.getList()\" (click)=\"setgz(item.userid)\" color=\"medium\" size=\"small\" shape=\"round\" fill=\"outline\" slot=\"end\">+关注</ion-button>\n        </ion-item>\n\n        <ion-card-content>\n          <div class=\"title\" (click)=\"toPage(item.id)\"  *ngIf=\"item.content && item.content != 'null'\">{{item.content}}</div>\n          <div padding-top>\n            <app-pqimgbox [imglist]=\"item.thumb[0] ? item.thumb : item.imgarr\" [ytimglist]=\"item.imgarr\"></app-pqimgbox>\n          </div>\n          <!--<img (click)=\"toPage(1, 1)\" class=\"radius-img\" src=\"https://ionicframework.com/docs/demos/api/card/madison.jpg\" alt=\"\">-->\n          <div class=\"address-box\">\n            <div class=\"left\">\n              <div class=\"address\" *ngIf=\"item.address && item.address != 'null'\">\n                <ion-icon name=\"pin\" color=\"dark\"></ion-icon>\n                <span>{{item.address}}</span>\n              </div>\n            </div>\n            <div class=\"right\">\n              <ion-button size=\"small\" fill=\"clear\" color=\"dark\" (click)=\"setdz(item)\">\n                <ion-icon name=\"heart-empty\" *ngIf=\"item.isdz == 0\"></ion-icon>\n                <ion-icon name=\"heart\" color=\"danger\" *ngIf=\"item.isdz == 1\"></ion-icon>\n                {{item.dznum | setnum}}\n              </ion-button>\n              <ion-button size=\"small\" fill=\"clear\" color=\"dark\" (click)=\"toPage(item.id)\">\n                <ion-icon slot=\"start\" name=\"text\" mode=\"md\"></ion-icon>\n                {{item.plnum | setnum}}\n              </ion-button>\n            </div>\n          </div>\n          <div class=\"img-box\" *ngIf=\"item.dznum > 0\">\n            <img *ngFor=\"let src of item.heads\" [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\n\n            {{item.dznum | setnum}}人觉得很赞\n          </div>\n          <div class=\"pl\" (click)=\"toPage(item.id)\" *ngFor=\"let pl of item.plarr\">\n            <span>{{pl.user_name}}：</span>{{pl.content | decodeuri}}\n          </div>\n          <ion-button no-padding size=\"small\" fill=\"clear\" (click)=\"toPage(item.id)\" *ngIf=\"item.plnum > 2\">查看剩余{{(item.plnum - 2) | setnum}}条回复</ion-button>\n        </ion-card-content>\n      </ion-card>\n      <div *ngIf=\"item.opentype != 0\" padding>\n        <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\n          <div class=\"title\">{{item.content}}</div>\n          <ion-row>\n            <ion-col *ngFor=\"let src of item.imgarr\">\n              <img [src]=\"src | imgsrc: http.zdomain\" alt=\"\">\n            </ion-col>\n          </ion-row>\n          <div class=\"footer\">\n            <span class=\"tag-box red\">广告</span>\n            <span>{{item.author || item.user_name}}</span>\n            <!--<span>{{item.plnum}}条评论</span>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"content-box content-three\" [ngClass]=\"{show: pageType == 1}\">\n    <ion-row *ngFor=\"let item of list\">\n      <ion-col [size]=\"12\" no-padding *ngIf=\"item.opentype == 0\">\n        <ion-card mode=\"ios\" margin-start=\"0\" margin-end=\"0\">\n          <ion-card-header *ngIf=\"item.imgarr.length > 0\" (click)=\"toPage(item.id)\">\n            <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain\" alt=\"\">\n          </ion-card-header>\n\n          <ion-card-content>\n            <div class=\"title yj-title\" (click)=\"toPage(item.id)\">{{item.title}}</div>\n            <p *ngIf=\"item.des && item.des != 'null'\" (click)=\"toPage(item.id)\">{{item.des}}</p>\n            <div class=\"person-box\" margin-top>\n              <div class=\"person\" (click)=\"goperson(item.userid)\">\n                <img [src]=\"item.headimg | imgsrc: http.zdomain\">\n                <div class=\"name-box\">\n                  <div class=\"name\">{{item.user_name}} <app-yhbox [color]=\"'yellow'\" [title]=\"item.name\" [noborder]=\"true\"></app-yhbox></div>\n                  <div class=\"des\">{{item.createtime | oldtonow}}</div>\n                </div>\n              </div>\n              <div class=\"gz\" *ngIf=\"item.userid | isgz: gzlistfn.getList()\" (click)=\"setgz(item.userid)\">\n                <span>+关注</span>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <div *ngIf=\"item.opentype != 0\" padding>\n        <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\n          <div class=\"title\">{{item.title}}</div>\n          <ion-row>\n            <ion-col *ngFor=\"let src of item.imgarr\">\n              <img [src]=\"http.zdomain + src\" alt=\"\">\n            </ion-col>\n          </ion-row>\n          <div class=\"footer\">\n            <span class=\"tag-box red\">广告</span>\n            <span>{{item.author || item.user_name}}</span>\n            <!--<span>{{item.plnum}}条评论</span>-->\n          </div>\n        </div>\n      </div>\n    </ion-row>\n  </div>\n  <div class=\"content-box content-four\" [ngClass]=\"{show: pageType == 2}\">\n    <div  *ngFor=\"let item of list\">\n      <ion-item *ngIf=\"item.opentype == 0\">\n        <ion-thumbnail slot=\"end\" *ngIf=\"item.imgarr.length > 0\" (click)=\"toPage(item.id)\">\n          <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain \" alt=\"\">\n        </ion-thumbnail>\n        <ion-label>\n          <div (click)=\"toPage(item.id)\">\n            {{item.title}}\n          </div>\n\n          <div class=\"footer\">\n            <span class=\"tag-box\" [ngStyle]=\"{display: item.tag && item.tag != 'null' ? '' : 'none'}\" (click)=\"toPage(item.id)\">{{item.tag}}</span>\n            <span (click)=\"goperson(item.userid)\">{{item.author || item.user_name}}</span>\n            <span>&nbsp;|&nbsp;</span>\n            <span (click)=\"toPage(item.id)\">{{item.plnum | setnum}}条评论</span>\n          </div>\n        </ion-label>\n      </ion-item>\n      <div *ngIf=\"item.opentype != 0\" padding>\n        <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\n          <div class=\"title\">{{item.title}}</div>\n          <ion-row>\n            <ion-col *ngFor=\"let src of item.imgarr\">\n              <img [src]=\"http.zdomain + src\" alt=\"\">\n            </ion-col>\n          </ion-row>\n          <div class=\"footer\">\n            <span class=\"tag-box red\">广告</span>\n            <span>{{item.author || item.user_name}}</span>\n            <!--<span>{{item.plnum}}条评论</span>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"content-box content-four\" [ngClass]=\"{show: pageType == 3}\">\n    <div *ngFor=\"let item of list\">\n      <ion-item *ngIf=\"item.opentype == 0\">\n        <ion-thumbnail slot=\"start\" *ngIf=\"item.imgarr.length > 0\" (click)=\"toPage(item.id)\">\n          <img class=\"radius-img\" [src]=\"item.thumb[0] || item.imgarr[0] | imgsrc: http.zdomain\" alt=\"\">\n        </ion-thumbnail>\n        <ion-label>\n          <div (click)=\"toPage(item.id)\">\n            {{item.title}}\n          </div>\n          <div class=\"footer\">\n            <span class=\"tag-box\"  (click)=\"toPage(item.id)\" [ngStyle]=\"{display: item.tag && item.tag != 'null' ? '' : 'none'}\">{{item.tag}}</span>\n            <span (click)=\"goperson(item.userid)\">{{item.author || item.user_name}}</span>\n            <span>&nbsp;|&nbsp;</span>\n            <span (click)=\"toPage(item.id)\">{{item.plnum | setnum}}条评论</span>\n          </div>\n        </ion-label>\n      </ion-item>\n      <div *ngIf=\"item.opentype != 0\" padding>\n        <div class=\"gg-box\" (click)=\"toPages(item.opentype, item.url)\">\n          <div class=\"title\">{{item.title}}</div>\n          <ion-row>\n            <ion-col *ngFor=\"let src of item.imgarr\">\n              <img [src]=\"http.zdomain + src\" alt=\"\">\n            </ion-col>\n          </ion-row>\n          <div class=\"footer\">\n            <span class=\"tag-box red\">广告</span>\n            <span>{{item.author || item.user_name}}</span>\n            <!--<span>{{item.plnum}}条评论</span>-->\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n       loadingSpinner=\"bubbles\"\n       loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/sharesearch/sharesearch.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/sharesearch/sharesearch.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .footer-bar .item {\n    width: 45px;\n    text-align: center;\n    height: 42px;\n    font-size: var(--ion-text);\n    line-height: 50px;\n    color: #fff; }\n  .footer-bar .item.active {\n      font-size: var(--ion-title);\n      font-weight: 600;\n      line-height: 47px;\n      position: relative; }\n  .footer-bar .item.active::after {\n        content: '';\n        display: block;\n        position: absolute;\n        bottom: 0;\n        width: 50%;\n        left: 25%;\n        height: 3px;\n        background: #fff;\n        border-radius: 1.5px; }\n  .content-box {\n  display: none; }\n  .content-box.show {\n    display: block; }\n  .item-title {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start; }\n  .item-title app-yhbox {\n    margin-left: 10px; }\n  .img-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--ion-color-medium); }\n  .img-box img {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    margin-right: 5px; }\n  .pl {\n  margin-top: 10px;\n  font-size: var(--ion-sm-text);\n  flex-wrap: wrap; }\n  .pl span {\n    font-size: var(--ion-text);\n    color: var(--ion-color-dark); }\n  ion-card .address {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: var(--ion-color-light);\n  padding: 2px 5px;\n  border-radius: 5px;\n  font-size: var(--ion-sm-text); }\n  ion-card .address span {\n    flex: 1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden; }\n  ion-card .address-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center; }\n  ion-card .address-box .left {\n    width: 50%; }\n  ion-card .address-box .right {\n    width: 50%;\n    text-align: right; }\n  .content-one ion-card {\n  border-radius: 0;\n  box-shadow: none;\n  margin-left: 0;\n  margin-right: 0;\n  border-bottom: 1px solid var(--ion-color-light); }\n  .content-one ion-card ion-card-content {\n    padding-top: 0; }\n  .content-one ion-item {\n  --border-color: #fff; }\n  .content-one .radius-img {\n  border-radius: 8px; }\n  .content-one .title {\n  font-size: var(--ion-title);\n  color: var(--ion-color-dark); }\n  .content-three ion-card-header {\n  padding: 0; }\n  .content-four ion-thumbnail {\n  --border-radius: 5px;\n  --size: 80px;\n  width: 85px; }\n  .content-four ion-label {\n  white-space: normal; }\n  .content-four .footer {\n  margin-top: 7px;\n  font-size: var(--ion-sm-text);\n  line-height: 20px; }\n  .content-four .footer span {\n    color: var(--ion-color-medium); }\n  .content-four .footer span:first-of-type {\n      color: var(--ion-color-primary);\n      border: 1px solid var(--ion-color-primary);\n      border-radius: 3px;\n      margin-right: 10px; }\n  .person-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center; }\n  .person-box .person {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .person-box .person img {\n      width: 28px;\n      height: 28px;\n      border-radius: 50%;\n      margin-right: 10px; }\n  .person-box .person .name-box {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start; }\n  .person-box .person .name-box .name {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: flex-start;\n        font-size: var(--ion-text);\n        color: var(--ion-color-dark); }\n  .person-box .person .name-box .name app-yhbox {\n          margin-left: 10px; }\n  .person-box .person .name-box .des {\n        font-size: var(--ion-sm-text);\n        color: var(--ion-color-medium); }\n  .person-box .gz span {\n    background: var(--ion-color-linegradient);\n    font-size: var(--ion-sm-text);\n    height: 20px;\n    padding: 0 7px;\n    display: block;\n    line-height: 20px;\n    text-align: center;\n    border-radius: 10px;\n    color: #fff; }\n  .person-box .gz span:active {\n      background: var(--ion-color-linegradient-active); }\n  .yj-title {\n  font-weight: 600;\n  color: var(--ion-color-dark); }\n  .tag-box {\n  border: 1px solid var(--ion-color-success);\n  color: var(--ion-color-success);\n  border-radius: 5px;\n  font-size: var(--ion-sm-text);\n  padding: 0 1px; }\n  .tag-box.red {\n    color: var(--ion-color-danger) !important;\n    border-color: var(--ion-color-danger) !important; }\n  .gg-box .title {\n  font-weight: 600; }\n  .gg-box img {\n  width: 100%;\n  border-radius: 7px; }\n  .gg-box .tag-box {\n  margin-right: 10px; }\n  .gg-box .footer {\n  font-size: var(--ion-sm-text); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9zaGFyZXNlYXJjaC9zaGFyZXNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUIsRUFBQTtFQUpyQjtJQU1JLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsV0FBVyxFQUFBO0VBWGY7TUFhTSwyQkFBMkI7TUFDM0IsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixrQkFBa0IsRUFBQTtFQWhCeEI7UUFrQlEsV0FBVztRQUNYLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFVBQVU7UUFDVixTQUFTO1FBQ1QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixvQkFBb0IsRUFBQTtFQUs1QjtFQUNFLGFBQWEsRUFBQTtFQURmO0lBR0ksY0FBYyxFQUFBO0VBR2xCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCLEVBQUE7RUFKN0I7SUFNSSxpQkFBaUIsRUFBQTtFQUlyQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQU9uQiw4QkFBOEIsRUFBQTtFQVhoQztJQU1JLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0VBSXJCO0VBQ0UsZ0JBQWdCO0VBS2hCLDZCQUE2QjtFQUM3QixlQUFlLEVBQUE7RUFQakI7SUFTSSwwQkFBMEI7SUFDMUIsNEJBQTRCLEVBQUE7RUFHaEM7RUFLSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUE7RUFaakM7SUFlTSxPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0IsRUFBQTtFQWxCdEI7RUF1QkksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7RUExQnZCO0lBNEJNLFVBQVUsRUFBQTtFQTVCaEI7SUErQk0sVUFBVTtJQUNWLGlCQUFpQixFQUFBO0VBS3ZCO0VBSUksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLCtDQUErQyxFQUFBO0VBUm5EO0lBVU0sY0FBYyxFQUFBO0VBVnBCO0VBY0ksb0JBQWUsRUFBQTtFQWRuQjtFQW1CSSxrQkFBa0IsRUFBQTtFQW5CdEI7RUFzQkksMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBO0VBR2hDO0VBRUksVUFBVSxFQUFBO0VBR2Q7RUFFSSxvQkFBZ0I7RUFDaEIsWUFBTztFQUNQLFdBQVcsRUFBQTtFQUpmO0VBT0ksbUJBQW1CLEVBQUE7RUFQdkI7RUFXSSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGlCQUFpQixFQUFBO0VBYnJCO0lBZU0sOEJBQThCLEVBQUE7RUFmcEM7TUFpQlEsK0JBQStCO01BQy9CLDBDQUEwQztNQUMxQyxrQkFBa0I7TUFDbEIsa0JBQWtCLEVBQUE7RUFLMUI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTtFQUpyQjtJQU1JLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQixFQUFBO0VBVHZCO01BV00sV0FBVztNQUNYLFlBQVk7TUFHWixrQkFBa0I7TUFDbEIsa0JBQWtCLEVBQUE7RUFoQnhCO01BbUJNLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLHVCQUF1QixFQUFBO0VBdEI3QjtRQXdCUSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLDRCQUE0QixFQUFBO0VBN0JwQztVQStCVSxpQkFBaUIsRUFBQTtFQS9CM0I7UUFtQ1EsNkJBQTZCO1FBQzdCLDhCQUE4QixFQUFBO0VBcEN0QztJQTBDTSx5Q0FBeUM7SUFDekMsNkJBQTZCO0lBQzdCLFlBQVk7SUFFWixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFHbEIsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTtFQXJEakI7TUF1RFEsZ0RBQWdELEVBQUE7RUFLeEQ7RUFDRSxnQkFBZ0I7RUFDaEIsNEJBQTRCLEVBQUE7RUFFOUI7RUFDRSwwQ0FBMEM7RUFDMUMsK0JBQStCO0VBRy9CLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsY0FBYyxFQUFBO0VBUGhCO0lBU0kseUNBQXlDO0lBQ3pDLGdEQUFnRCxFQUFBO0VBR3BEO0VBRUksZ0JBQWdCLEVBQUE7RUFGcEI7RUFLSSxXQUFXO0VBR1gsa0JBQWtCLEVBQUE7RUFSdEI7RUFXSSxrQkFBa0IsRUFBQTtFQVh0QjtFQWNJLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hhcmVzZWFyY2gvc2hhcmVzZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuaXRlbSB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogNDdweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jb250ZW50LWJveCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICAmLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbi5pdGVtLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYXBwLXloYm94IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmltZy1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG59XHJcbi5wbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAvL2Rpc3BsYXk6IGZsZXg7XHJcbiAgLy9mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC8vanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgfVxyXG59XHJcbmlvbi1jYXJkIHtcclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIC8vcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5hZGRyZXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAvL21heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmFkZHJlc3MtYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5sZWZ0IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtb25lIHtcclxuICBpb24tY2FyZCB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAucmFkaXVzLWltZyB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICB9XHJcbn1cclxuLmNvbnRlbnQtdGhyZWUge1xyXG4gIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG4uY29udGVudC1mb3VyIHtcclxuICBpb24tdGh1bWJuYWlsIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1zaXplOiA4MHB4O1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG5cclxuICB9XHJcbiAgLmZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5wZXJzb24tYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLnBlcnNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hbWUtYm94IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgYXBwLXloYm94IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGVzIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmd6IHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGluZWdyYWRpZW50KTtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgLy93aWR0aDogNTBweDtcclxuICAgICAgcGFkZGluZzogMCA3cHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGluZWdyYWRpZW50LWFjdGl2ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnlqLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuLnRhZy1ib3gge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICBwYWRkaW5nOiAwIDFweDtcclxuICAmLnJlZCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmdnLWJveCB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgfVxyXG4gIC50YWctYm94IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmZvb3RlciB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/sharesearch/sharesearch.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/sharesearch/sharesearch.page.ts ***!
  \*******************************************************/
/*! exports provided: SharesearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesearchPage", function() { return SharesearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_gzlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/gzlist.service */ "./src/app/services/gzlist.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-07-15 15:12:56
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-29 11:29:13
 * @Description: file content
 */





var SharesearchPage = /** @class */ (function () {
    function SharesearchPage(http, activeroute, nav, gzlistfn, route) {
        this.http = http;
        this.activeroute = activeroute;
        this.nav = nav;
        this.gzlistfn = gzlistfn;
        this.route = route;
    }
    SharesearchPage.prototype.ngOnInit = function () {
        this.pageArray = ['票圈', '游记', '攻略', '约游']; // 搜索页面暂不支持关注
        this.pageType = 0;
        this.page = 1;
        this.limit = 20;
        var params = this.activeroute.snapshot.queryParams;
        this.searchKey = params['searchKey'];
    };
    SharesearchPage.prototype.close = function () {
        this.nav.back();
        console.log('关闭了');
    };
    SharesearchPage.prototype.setType = function (type) {
        this.pageType = type;
        this.czobj();
        this.getHttp();
    };
    SharesearchPage.prototype.searchkey = function () {
        this.czobj();
        this.getHttp();
    };
    SharesearchPage.prototype.czobj = function () {
        this.page = 1;
        this.list = [];
    };
    SharesearchPage.prototype.loadData = function (event) {
        this.page++;
        this.getHttp(event);
    };
    SharesearchPage.prototype.getHttp = function (event) {
        var _this = this;
        if (!this.searchtext) {
            return false;
        }
        var obj = {
            page: this.page,
            num: this.limit,
            type: this.pageType + 1,
            search: this.searchtext
        };
        this.http.postformdata(this.http.getpqlistsearch, obj).subscribe(function (res) {
            console.log(res);
            _this.list = res['data'];
            if (event) {
                event.target.complete();
            }
        }, function (error2) {
            if (event) {
                event.target.complete();
            }
        });
    };
    SharesearchPage.prototype.goperson = function (id) {
        console.log(id);
        this.route.navigate(['/myrelease'], { queryParams: { userid: id } });
    };
    SharesearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sharesearch',
            template: __webpack_require__(/*! ./sharesearch.page.html */ "./src/app/pages/sharesearch/sharesearch.page.html"),
            styles: [__webpack_require__(/*! ./sharesearch.page.scss */ "./src/app/pages/sharesearch/sharesearch.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_gzlist_service__WEBPACK_IMPORTED_MODULE_5__["GzlistService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SharesearchPage);
    return SharesearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sharesearch-sharesearch-module.js.map