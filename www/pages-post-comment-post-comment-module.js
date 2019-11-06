(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-post-comment-post-comment-module"],{

/***/ "./src/app/pages/post-comment/post-comment.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/post-comment/post-comment.module.ts ***!
  \***********************************************************/
/*! exports provided: PostCommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentPageModule", function() { return PostCommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-comment.page */ "./src/app/pages/post-comment/post-comment.page.ts");







var routes = [
    {
        path: '',
        component: _post_comment_page__WEBPACK_IMPORTED_MODULE_6__["PostCommentPage"]
    }
];
var PostCommentPageModule = /** @class */ (function () {
    function PostCommentPageModule() {
    }
    PostCommentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_post_comment_page__WEBPACK_IMPORTED_MODULE_6__["PostCommentPage"]]
        })
    ], PostCommentPageModule);
    return PostCommentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/post-comment/post-comment.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/post-comment/post-comment.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: wjy-mac\n * @Date: 2019-11-01 15:49:39\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-05 17:41:15\n * @Description: 发布评论\n -->\n<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>发布评论</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"sub()\" [disabled]=\"isupdate && isupdate.length > 0\">\n        发布\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"my-list\">\n    <div class=\"my-item\" *ngFor=\"let item of pflist; let key = index\" [ngClass]=\"{hidden: isxc && key > 0}\">\n      <div class=\"top\">\n        <div class=\"left\">\n          {{item.name}}\n        </div>\n        <div class=\"right\">\n          <img *ngFor=\"let data of imglist; let i = index\" \n          [src]=\"item.val >= i + 1 ? '../../../assets/icon/branch_active.png' : '../../../assets/icon/branch.png'\"\n          (click)=\"setPf(key, i + 1)\"\n          alt=\"\">\n        </div>\n      </div>\n      <div class=\"des\">\n        <span *ngIf=\"item.val == 5\">5分,非常满意</span>\n        <span *ngIf=\"item.val == 4\">4分,满意</span>\n        <span *ngIf=\"item.val == 3\">3分,一般</span>\n        <span *ngIf=\"item.val == 2\">2分,不满意</span>\n        <span *ngIf=\"item.val == 1\">1分,非常不满意</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"goods_list\">\n    <div class=\"pl-item\" *ngFor=\"let item of goodsObjarr; let goodsindex = index\">\n      <div class=\"goods_name\"><p>{{item.goodsName}}</p></div>\n      <div class=\"my-list\">\n        <div class=\"my-item\">\n          <div class=\"top\">\n            <div class=\"left\">\n              描述\n            </div>\n            <div class=\"right\">\n              <img *ngFor=\"let data of imglist; let i = index\" \n              [src]=\"item.comment_rank >= i + 1 ? '../../../assets/icon/branch_active.png' : '../../../assets/icon/branch.png'\"\n              (click)=\"setitemPf(item, i + 1)\"\n              alt=\"\">\n            </div>\n          </div>\n          <div class=\"des\">\n            <span *ngIf=\"item.comment_rank == 5\">5分,非常满意</span>\n            <span *ngIf=\"item.comment_rank == 4\">4分,满意</span>\n            <span *ngIf=\"item.comment_rank == 3\">3分,一般</span>\n            <span *ngIf=\"item.comment_rank == 2\">2分,不满意</span>\n            <span *ngIf=\"item.comment_rank == 1\">1分,非常不满意</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"hasbq\">\n        <ion-chip *ngFor=\"let tag of item.tags; let i = index\" [color]=\"tag.active ? 'success' : ''\" (click)=\"setChangebq(item, i)\">\n          <ion-label>{{tag.tag_name}}</ion-label>\n        </ion-chip>\n      </div>\n      <div class=\"my-row\" [ngClass]=\"{noTop: item.tags.length === 0}\">\n          <div class=\"my-item\" *ngFor=\"let data of item['tags_zi']; let i = index\" (click)=\"removeBq(i, item)\">\n            <ion-chip color=\"success\">\n              <ion-label>{{data}}</ion-label>\n              <ion-icon name=\"close-circle\"></ion-icon>\n            </ion-chip>\n          </div>\n        </div>\n      <div class=\"addbq-box\">\n        <div class=\"left\">\n          <ion-item>\n            <ion-label>标签</ion-label>\n            <ion-input [(ngModel)]=\"item.newbq\" placeholder=\"请输入自定义标签名称\"></ion-input>\n          </ion-item>\n        </div>\n        <div class=\"right\" *ngIf=\"item.newbq\">\n          <ion-button color=\"success\" size=\"small\" (click)=\"addBq(item)\">确定</ion-button>\n        </div>\n      </div>\n      <ion-item>\n        <ion-textarea rows=\"4\" [(ngModel)]=\"item.content\" placeholder=\"说说你的看法吧\"></ion-textarea>\n      </ion-item>\n      <ion-row margin-top margin-bottom>\n        <ion-col size=\"3\">\n          <div class=\"img-box\" (click)=\"selecteImgs(goodsindex, 6 - (imgs[goodsindex] ? imgs[goodsindex].length : 0))\" *ngIf=\"!(imgs[goodsindex] && imgs[goodsindex].length === 6)\">\n            <img src=\"../../../assets/add2.png\" alt=\"\">\n          </div>\n          <div class=\"img-box\" *ngFor=\"let src of imgs[goodsindex]; let imgindex = index;\">\n            <img [src]=\"src\" alt=\"\">\n            <div class=\"loadEffect\" *ngIf=\"!item.imgs[imgindex]\">\n              <span></span>\n              <span></span>\n              <span></span>\n              <span></span>\n              <span></span>\n              <span></span>\n              <span></span>\n              <span></span>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div class=\"nmbox\">\n    <ion-toggle color=\"success\" size=\"small\" [(ngModel)]=\"isNm\"></ion-toggle><ion-text>匿名</ion-text>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/post-comment/post-comment.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/post-comment/post-comment.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-list .my-item {\n  margin-bottom: 10px; }\n  .my-list .my-item .top {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .my-list .my-item .top .left {\n      width: 40px;\n      font-size: var(--ion-text); }\n  .my-list .my-item .top .right {\n      flex: 1;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center; }\n  .my-list .my-item .top .right img {\n        width: 20px;\n        margin-right: 5px; }\n  .my-list .my-item .des {\n    font-size: var(--ion-sm-text);\n    color: var(--ion-color-medium);\n    margin-top: 5px; }\n  .addbq-box {\n  font-size: var(--ion-text);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .addbq-box .left {\n    flex: 1; }\n  .addbq-box .right {\n    width: auto; }\n  .my-row {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap; }\n  .my-row.noTop {\n    padding-top: 0; }\n  .goods_list {\n  margin-bottom: 10px; }\n  .goods_list .pl-item {\n    border-bottom: 10px solid var(--ion-gray-background-color); }\n  .goods_list .goods_name {\n    font-size: var(--ion-title); }\n  .goods_list .goods_name p {\n      margin-bottom: 5px; }\n  .hasbq {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap; }\n  .nmbox {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n  .nmbox ion-text {\n    margin-left: 10px; }\n  .line {\n  height: 10px;\n  background-color: var(--ion-gray-background-color); }\n  .img-box {\n  width: 100%;\n  padding-top: 100%;\n  position: relative; }\n  .img-box img {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  .hidden {\n  display: none; }\n  .loadEffect {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.3); }\n  .loadEffect span {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: var(--ion-color-success);\n  position: absolute;\n  -webkit-animation: load 1.04s ease infinite; }\n  .loadEffect span:nth-child(1) {\n  left: 0;\n  top: 50%;\n  margin-top: -10px;\n  -webkit-animation-delay: 0.13s; }\n  .loadEffect span:nth-child(2) {\n  left: 14px;\n  top: 14px;\n  -webkit-animation-delay: 0.26s; }\n  .loadEffect span:nth-child(3) {\n  left: 50%;\n  top: 0;\n  margin-left: -10px;\n  -webkit-animation-delay: 0.39s; }\n  .loadEffect span:nth-child(4) {\n  top: 14px;\n  right: 14px;\n  -webkit-animation-delay: 0.52s; }\n  .loadEffect span:nth-child(5) {\n  right: 0;\n  top: 50%;\n  margin-top: -10px;\n  -webkit-animation-delay: 0.65s; }\n  .loadEffect span:nth-child(6) {\n  right: 14px;\n  bottom: 14px;\n  -webkit-animation-delay: 0.78s; }\n  .loadEffect span:nth-child(7) {\n  bottom: 0;\n  left: 50%;\n  margin-left: -10px;\n  -webkit-animation-delay: 0.91s; }\n  .loadEffect span:nth-child(8) {\n  bottom: 14px;\n  left: 14px;\n  -webkit-animation-delay: 1.04s; }\n  @-webkit-keyframes load {\n  0% {\n    -webkit-transform: scale(1.2);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.3);\n    opacity: 0.5; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9wb3N0LWNvbW1lbnQvcG9zdC1jb21tZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFtQixFQUFBO0VBRnZCO0lBSU0sYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7RUFQekI7TUFTUSxXQUFXO01BQ1gsMEJBQTBCLEVBQUE7RUFWbEM7TUFhUSxPQUFPO01BQ1AsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiwyQkFBMkI7TUFDM0IsbUJBQW1CLEVBQUE7RUFqQjNCO1FBbUJVLFdBQVc7UUFDWCxpQkFBaUIsRUFBQTtFQXBCM0I7SUF5Qk0sNkJBQTZCO0lBQzdCLDhCQUErQjtJQUMvQixlQUFlLEVBQUE7RUFJckI7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CLEVBQUE7RUFMckI7SUFPSSxPQUFPLEVBQUE7RUFQWDtJQVVJLFdBQVcsRUFBQTtFQUdmO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7RUFOakI7SUFRSSxjQUFjLEVBQUE7RUFHbEI7RUFDRSxtQkFBbUIsRUFBQTtFQURyQjtJQUdJLDBEQUEwRCxFQUFBO0VBSDlEO0lBTUksMkJBQTJCLEVBQUE7RUFOL0I7TUFRTSxrQkFBa0IsRUFBQTtFQUl4QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7RUFFakI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUIsRUFBQTtFQUpyQjtJQU1JLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0UsWUFBWTtFQUNaLGtEQUFrRCxFQUFBO0VBRXBEO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQUhwQjtJQUtJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPLEVBQUE7RUFHWDtFQUNFLGFBQWEsRUFBQTtFQUVmO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxvQ0FBaUMsRUFBQTtFQUVuQztFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLDJDQUEyQyxFQUFBO0VBRTdDO0VBQ0UsT0FBTztFQUNQLFFBQVE7RUFDUixpQkFBZ0I7RUFDaEIsOEJBQTZCLEVBQUE7RUFFL0I7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULDhCQUE2QixFQUFBO0VBRS9CO0VBQ0UsU0FBUztFQUNULE1BQU07RUFDTixrQkFBa0I7RUFDbEIsOEJBQTZCLEVBQUE7RUFFL0I7RUFDRSxTQUFTO0VBQ1QsV0FBVTtFQUNWLDhCQUE2QixFQUFBO0VBRS9CO0VBQ0UsUUFBUTtFQUNSLFFBQVE7RUFDUixpQkFBZ0I7RUFDaEIsOEJBQTZCLEVBQUE7RUFFL0I7RUFDRSxXQUFXO0VBQ1gsWUFBVztFQUNYLDhCQUE2QixFQUFBO0VBRS9CO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsOEJBQTZCLEVBQUE7RUFFL0I7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLDhCQUE2QixFQUFBO0VBRS9CO0VBQ0U7SUFDSSw2QkFBNkI7SUFDN0IsVUFBVSxFQUFBO0VBRWQ7SUFDSSw2QkFBNEI7SUFDNUIsWUFBWSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0LWNvbW1lbnQvcG9zdC1jb21tZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1saXN0IHtcbiAgLm15LWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgLnRvcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAubGVmdCB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgICAgIH1cbiAgICAgIC5yaWdodCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZGVzIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICAgICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gIH1cbn1cbi5hZGRicS1ib3gge1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAubGVmdCB7XG4gICAgZmxleDogMTtcbiAgfVxuICAucmlnaHQge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG59XG4ubXktcm93IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAmLm5vVG9wIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxufVxuLmdvb2RzX2xpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAucGwtaXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgfVxuICAuZ29vZHNfbmFtZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xuICAgIHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxufVxuLmhhc2JxIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubm1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGlvbi10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuLmxpbmUge1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xufVxuLmltZy1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sb2FkRWZmZWN0e1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgLjMpO1xufVxuLmxvYWRFZmZlY3Qgc3BhbntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZCAxLjA0cyBlYXNlIGluZmluaXRlO1xufVxuLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoMSl7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOi0xMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTowLjEzcztcbn1cbi5sb2FkRWZmZWN0IHNwYW46bnRoLWNoaWxkKDIpe1xuICBsZWZ0OiAxNHB4O1xuICB0b3A6IDE0cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjAuMjZzO1xufVxuLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoMyl7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjAuMzlzO1xufVxuLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoNCl7XG4gIHRvcDogMTRweDtcbiAgcmlnaHQ6MTRweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MC41MnM7XG59XG4ubG9hZEVmZmVjdCBzcGFuOm50aC1jaGlsZCg1KXtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOi0xMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTowLjY1cztcbn1cbi5sb2FkRWZmZWN0IHNwYW46bnRoLWNoaWxkKDYpe1xuICByaWdodDogMTRweDtcbiAgYm90dG9tOjE0cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjAuNzhzO1xufVxuLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoNyl7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjAuOTFzO1xufVxuLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoOCl7XG4gIGJvdHRvbTogMTRweDtcbiAgbGVmdDogMTRweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MS4wNHM7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZHtcbiAgMCV7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJXtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMyk7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/post-comment/post-comment.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/post-comment/post-comment.page.ts ***!
  \*********************************************************/
/*! exports provided: PostCommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentPage", function() { return PostCommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_native_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var src_app_services_orderlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/orderlist.service */ "./src/app/services/orderlist.service.ts");
/* harmony import */ var src_app_services_xclist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/xclist.service */ "./src/app/services/xclist.service.ts");

/*
 * @Author: wjy-mac
 * @Date: 2019-11-01 15:49:39
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-05 17:41:50
 * @Description: file content
 */







var PostCommentPage = /** @class */ (function () {
    function PostCommentPage(activeroute, nav, http, native, orderlist, xcxllist, actionSheetController) {
        this.activeroute = activeroute;
        this.nav = nav;
        this.http = http;
        this.native = native;
        this.orderlist = orderlist;
        this.xcxllist = xcxllist;
        this.actionSheetController = actionSheetController;
    }
    PostCommentPage.prototype.ngOnInit = function () {
        this.pflist = [{ name: '服务', val: 5, key: 'server' },
            { name: '发货', val: 5, key: 'send' },
            { name: '物流', val: 5, key: 'shipping' }];
        // {name: '描述', val: 5, key: 'comment_rank'},
        this.imglist = [1, 1, 1, 1, 1];
        this.isNm = true;
        this.imgs = [];
    };
    PostCommentPage.prototype.ionViewWillEnter = function () {
        console.log('进入2');
        var params = this.activeroute.snapshot.queryParams;
        this.orderId = params['id'];
        this.isxc = params['type'] ? true : false;
        this.getBq();
    };
    /**
     * @Author: wjy-mac
     * @description: 获取订单商品对象
     * @Date: 2019-11-05 17:00:01
     * @param {type}
     * @return:
     */
    PostCommentPage.prototype.getBq = function () {
        var _this = this;
        this.goodsObjarr = [];
        this.http.getData(this.http.getGoodsTag, { order_id: this.orderId }).subscribe(function (res) {
            console.log(res);
            _this.orderSn = res['order_sn'];
            if (res['data'] && res['data'].length > 0) {
                _this.imgs.fill([], 0, res['data'].length - 1);
                res['data'].map(function (data) {
                    var obj = {
                        content: '',
                        tags_zi: [],
                        comment_tag: [],
                        comment_rank: 5,
                        imgs: [] // 图片列表
                    };
                    obj = Object.assign(obj, data);
                    _this.goodsObjarr.push(obj);
                });
            }
        }, function (err2) {
            _this.goBack();
        });
    };
    /**
     * @Author: wjy-mac
     * @description: 设置商品分数
     * @Date: 2019-11-04 17:49:18
     * @param {type} item 商品对象
     * @param {type} val 分数
     * @return:
     */
    PostCommentPage.prototype.setitemPf = function (item, val) {
        item['comment_rank'] = val;
    };
    /**
     * @Author: wjy-mac
     * @description: 删除单个自定义标签
     * @Date: 2019-11-04 15:51:25
     * @param {type} index 删除序号
     * @param {type} item 操作数组对象
     * @return:
     */
    PostCommentPage.prototype.removeBq = function (index, item) {
        item['tags_zi'].splice(index, 1);
    };
    /**
     * @Author: wjy-mac
     * @description: 设置平分
     * @Date: 2019-11-04 15:08:47
     * @param {type} index 位置，pflist的第几个数据
     * @param {type} val 分数
     * @return:
     */
    PostCommentPage.prototype.setPf = function (index, val) {
        this.pflist[index].val = val;
    };
    /**
     * @Author: wjy-mac
     * @description: 添加标签
     * @Date: 2019-11-04 15:40:48
     * @param {type} item 操作对象数据
     * @return:
     */
    PostCommentPage.prototype.addBq = function (item) {
        console.log(item);
        item['tags_zi'].push(item.newbq);
        item.newbq = '';
    };
    /**
     * @Author: wjy-mac
     * @description: 设置已有标签的选中
     * @Date: 2019-11-04 22:06:47
     * @param {type} item 商品对象
     * @param {type} i 第几个标签
     * @return:
     */
    PostCommentPage.prototype.setChangebq = function (item, i) {
        var bool = true;
        if (item['tags'][i].active) {
            item['tags'][i].active = false;
            bool = false;
        }
        else {
            item['tags'][i].active = true;
        }
        var id = item['tags'][i]['tag_id'];
        if (bool) {
            item['comment_tag'].push(id);
        }
        else {
            for (var index = 0; index < item['comment_tag'].length; index++) {
                if (item['comment_tag'][index] == id) {
                    item['comment_tag'].splice(index, 1);
                    break;
                }
            }
        }
    };
    /**
     * @Author: wjy-mac
     * @description: 获取图片
     * @Date: 2019-11-05 17:00:29
     * @param {type} index 评论商品对象序号
     * @param {type} length 还可以添加几张
     * @return:
     */
    PostCommentPage.prototype.selecteImgs = function (index, length) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: '请选择来源',
                            buttons: [{
                                    text: '相机',
                                    role: 'destructive',
                                    handler: function () {
                                        _this.native.getPictureByCamera().then(function (res) {
                                            _this.basezfile(res, index);
                                        });
                                    }
                                }, {
                                    text: '相册',
                                    handler: function () {
                                        _this.native.getPictures(length).then(function (res) {
                                            res.map(function (img) {
                                                _this.basezfile(img, index);
                                            });
                                        }, function (err) {
                                        });
                                    }
                                }, {
                                    text: '取消',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
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
    /**
     * @Author: wjy-mac
     * @description: 将上传图片改为异步结合,获取图片上传完成后的事件
     * @Date: 2019-11-05 17:11:59
     * @param {type}
     * @return:
     */
    PostCommentPage.prototype.basezfile = function (base64, index) {
        var _this = this;
        if (!this.imgs[index]) {
            this.imgs[index] = [];
        }
        this.imgs[index].push(base64);
        var nowimgindex = this.imgs[index].length - 1;
        var file = this.native.getImgbase64tofile(base64, 'comment' + index, 'imgFile');
        if (!this.isupdate) {
            this.isupdate = [];
        }
        this.isupdate.push(1);
        this.imgupload(file).then(function (res) {
            _this.isupdate.splice(0, 1);
            _this.goodsObjarr[index]['imgs'][nowimgindex] = res;
        }).catch(function (err3) {
            _this.isupdate.splice(0, 1);
            _this.imgs[index].splice(nowimgindex, 1);
        });
    };
    /**
     * @Author: wjy-mac
     * @description: 上传图片方法
     * @Date: 2019-11-05 17:12:29
     * @param {type} file 图片对象
     * @return:
     */
    PostCommentPage.prototype.imgupload = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var oReq = new XMLHttpRequest();
            oReq.open('POST', _this.http.domain + _this.http.updateimg);
            oReq.onreadystatechange = function (oEvent) {
                if (oReq.readyState == 4 && oReq.status == 200) {
                    var res = JSON.parse(oReq.response);
                    resolve(res.result);
                }
            };
            oReq.onerror = function (err) {
                reject(err);
            };
            oReq.send(file);
        });
    };
    PostCommentPage.prototype.goBack = function () {
        this.nav.back();
    };
    PostCommentPage.prototype.sub = function () {
        var _this = this;
        var obj = {};
        this.pflist.map(function (item) {
            obj[item.key] = item.val;
        });
        obj['pjarr'] = JSON.stringify(Array.from(this.goodsObjarr));
        obj['o_id'] = this.orderId;
        if (this.isNm) {
            obj['hide_username'] = 1;
        }
        console.log(obj);
        this.http.postformdataloading(this.http.commentSend, obj).subscribe(function (res) {
            _this.native.presentToast(res.msg);
            if (_this.isxc) {
                _this.xcxllist.setOrderispj(_this.orderId, _this.orderSn);
            }
            else {
                _this.orderlist.setOrderispj(_this.orderId, _this.orderSn);
            }
            _this.goBack();
        }, function (err2) {
        });
    };
    PostCommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-comment',
            template: __webpack_require__(/*! ./post-comment.page.html */ "./src/app/pages/post-comment/post-comment.page.html"),
            styles: [__webpack_require__(/*! ./post-comment.page.scss */ "./src/app/pages/post-comment/post-comment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], src_app_services_native_service__WEBPACK_IMPORTED_MODULE_5__["NativeService"], src_app_services_orderlist_service__WEBPACK_IMPORTED_MODULE_6__["OrderlistService"],
            src_app_services_xclist_service__WEBPACK_IMPORTED_MODULE_7__["XclistService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
    ], PostCommentPage);
    return PostCommentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-post-comment-post-comment-module.js.map