(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-post-comment-post-comment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post-comment/post-comment.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post-comment/post-comment.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n * @Author: wjy-mac\n * @Date: 2019-11-01 15:49:39\n * @LastEditors: wjy-mac\n * @LastEditTime: 2019-11-05 22:45:11\n * @Description: 发布评论\n -->\n<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon mode=\"ios\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>发布评论</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"sub()\" [disabled]=\"isupdate && isupdate.length > 0\">\n        发布\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"my-list\">\n    <div class=\"my-item\" *ngFor=\"let item of pflist; let key = index\" [ngClass]=\"{hidden: isxc && key > 0}\">\n      <div class=\"top\">\n        <div class=\"left\">\n          {{item.name}}\n        </div>\n        <div class=\"right\">\n          <img *ngFor=\"let data of imglist; let i = index\" \n          [src]=\"item.val >= i + 1 ? '../../../assets/icon/branch_active.png' : '../../../assets/icon/branch.png'\"\n          (click)=\"setPf(key, i + 1)\"\n          alt=\"\">\n        </div>\n      </div>\n      <div class=\"des\">\n        <span *ngIf=\"item.val == 5\">5分,非常满意</span>\n        <span *ngIf=\"item.val == 4\">4分,满意</span>\n        <span *ngIf=\"item.val == 3\">3分,一般</span>\n        <span *ngIf=\"item.val == 2\">2分,不满意</span>\n        <span *ngIf=\"item.val == 1\">1分,非常不满意</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"goods_list\">\n    <div class=\"pl-item\" *ngFor=\"let item of goodsObjarr; let goodsindex = index\">\n      <div class=\"goods_name\"><p>{{item.goodsName}}</p></div>\n      <div class=\"my-list\">\n        <div class=\"my-item\">\n          <div class=\"top\">\n            <div class=\"left\">\n              描述\n            </div>\n            <div class=\"right\">\n              <img *ngFor=\"let data of imglist; let i = index\" \n              [src]=\"item.comment_rank >= i + 1 ? '../../../assets/icon/branch_active.png' : '../../../assets/icon/branch.png'\"\n              (click)=\"setitemPf(item, i + 1)\"\n              alt=\"\">\n            </div>\n          </div>\n          <div class=\"des\">\n            <span *ngIf=\"item.comment_rank == 5\">5分,非常满意</span>\n            <span *ngIf=\"item.comment_rank == 4\">4分,满意</span>\n            <span *ngIf=\"item.comment_rank == 3\">3分,一般</span>\n            <span *ngIf=\"item.comment_rank == 2\">2分,不满意</span>\n            <span *ngIf=\"item.comment_rank == 1\">1分,非常不满意</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"hasbq\">\n        <ion-chip *ngFor=\"let tag of item.tags; let i = index\" [color]=\"tag.active ? 'success' : ''\" (click)=\"setChangebq(item, i)\">\n          <ion-label>{{tag.tag_name}}</ion-label>\n        </ion-chip>\n      </div>\n      <div class=\"my-row\" [ngClass]=\"{noTop: item.tags.length === 0}\">\n          <div class=\"my-item\" *ngFor=\"let data of item['tags_zi']; let i = index\" (click)=\"removeBq(i, item)\">\n            <ion-chip color=\"success\">\n              <ion-label>{{data}}</ion-label>\n              <ion-icon name=\"close-circle\"></ion-icon>\n            </ion-chip>\n          </div>\n        </div>\n      <div class=\"addbq-box\">\n        <div class=\"left\">\n          <ion-item>\n            <ion-label>标签</ion-label>\n            <ion-input [(ngModel)]=\"item.newbq\" placeholder=\"请输入自定义标签名称\"></ion-input>\n          </ion-item>\n        </div>\n        <div class=\"right\" *ngIf=\"item.newbq\">\n          <ion-button color=\"success\" size=\"small\" (click)=\"addBq(item)\">确定</ion-button>\n        </div>\n      </div>\n      <ion-item>\n        <ion-textarea rows=\"4\" [(ngModel)]=\"item.content\" placeholder=\"说说你的看法吧\"></ion-textarea>\n      </ion-item>\n      <ion-row margin-top margin-bottom>\n        <ion-col size=\"3\">\n          <div class=\"img-box\" (click)=\"selecteImgs(goodsindex, 6 - (imgs[goodsindex] ? imgs[goodsindex].length : 0))\" *ngIf=\"!(imgs[goodsindex] && imgs[goodsindex].length === 6)\">\n            <img src=\"../../../assets/add2.png\" alt=\"\">\n          </div>\n        </ion-col>\n        <ion-col *ngFor=\"let src of imgs[goodsindex]; let imgindex = index;\" size=\"3\">\n          <div class=\"img-box\">\n            <img [src]=\"src\" alt=\"\">\n            <div class=\"loadEffect\" *ngIf=\"!item.imgs[imgindex]\">\n              <span></span>\n              <span></span>\n              <span></span>\n              <span></span>\n              <span></span>\n              <span></span>\n              <span></span>\n              <span></span>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div class=\"nmbox\">\n    <ion-toggle color=\"success\" size=\"small\" [(ngModel)]=\"isNm\"></ion-toggle><ion-text>匿名</ion-text>\n  </div>\n</ion-content>\n");

/***/ }),

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

/***/ "./src/app/pages/post-comment/post-comment.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/post-comment/post-comment.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-list .my-item {\n  margin-bottom: 10px;\n}\n.my-list .my-item .top {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.my-list .my-item .top .left {\n  width: 40px;\n  font-size: var(--ion-text);\n}\n.my-list .my-item .top .right {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.my-list .my-item .top .right img {\n  width: 20px;\n  margin-right: 5px;\n}\n.my-list .my-item .des {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n  margin-top: 5px;\n}\n.addbq-box {\n  font-size: var(--ion-text);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.addbq-box .left {\n  flex: 1;\n}\n.addbq-box .right {\n  width: auto;\n}\n.my-row {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.my-row.noTop {\n  padding-top: 0;\n}\n.goods_list {\n  margin-bottom: 10px;\n}\n.goods_list .pl-item {\n  border-bottom: 10px solid var(--ion-gray-background-color);\n}\n.goods_list .goods_name {\n  font-size: var(--ion-title);\n}\n.goods_list .goods_name p {\n  margin-bottom: 5px;\n}\n.hasbq {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.nmbox {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.nmbox ion-text {\n  margin-left: 10px;\n}\n.line {\n  height: 10px;\n  background-color: var(--ion-gray-background-color);\n}\n.img-box {\n  width: 100%;\n  padding-top: 100%;\n  position: relative;\n}\n.img-box img {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.hidden {\n  display: none;\n}\n.loadEffect {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.loadEffect span {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: var(--ion-color-success);\n  position: absolute;\n  -webkit-animation: load 1.04s ease infinite;\n}\n.loadEffect span:nth-child(1) {\n  left: 0;\n  top: 50%;\n  margin-top: -10px;\n  -webkit-animation-delay: 0.13s;\n}\n.loadEffect span:nth-child(2) {\n  left: 14px;\n  top: 14px;\n  -webkit-animation-delay: 0.26s;\n}\n.loadEffect span:nth-child(3) {\n  left: 50%;\n  top: 0;\n  margin-left: -10px;\n  -webkit-animation-delay: 0.39s;\n}\n.loadEffect span:nth-child(4) {\n  top: 14px;\n  right: 14px;\n  -webkit-animation-delay: 0.52s;\n}\n.loadEffect span:nth-child(5) {\n  right: 0;\n  top: 50%;\n  margin-top: -10px;\n  -webkit-animation-delay: 0.65s;\n}\n.loadEffect span:nth-child(6) {\n  right: 14px;\n  bottom: 14px;\n  -webkit-animation-delay: 0.78s;\n}\n.loadEffect span:nth-child(7) {\n  bottom: 0;\n  left: 50%;\n  margin-left: -10px;\n  -webkit-animation-delay: 0.91s;\n}\n.loadEffect span:nth-child(8) {\n  bottom: 14px;\n  left: 14px;\n  -webkit-animation-delay: 1.04s;\n}\n@-webkit-keyframes load {\n  0% {\n    -webkit-transform: scale(1.2);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.3);\n    opacity: 0.5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9wb3N0LWNvbW1lbnQvcG9zdC1jb21tZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcG9zdC1jb21tZW50L3Bvc3QtY29tbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDQ047QURBTTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQ0VSO0FEQU07RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0VSO0FERFE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNHVjtBRENJO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNDTjtBREdBO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURDRTtFQUNFLE9BQUE7QUNDSjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FERUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7QURBRTtFQUNFLGNBQUE7QUNFSjtBRENBO0VBQ0UsbUJBQUE7QUNFRjtBRERFO0VBQ0UsMERBQUE7QUNHSjtBRERFO0VBQ0UsMkJBQUE7QUNHSjtBREZJO0VBQ0Usa0JBQUE7QUNJTjtBREFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNHRjtBRERBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0lGO0FESEU7RUFDRSxpQkFBQTtBQ0tKO0FERkE7RUFDRSxZQUFBO0VBQ0Esa0RBQUE7QUNLRjtBREhBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNNRjtBRExFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDT0o7QURKQTtFQUNFLGFBQUE7QUNPRjtBRExBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7QUNRRjtBRE5BO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDU0Y7QURQQTtFQUNFLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ1VGO0FEUkE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FDV0Y7QURUQTtFQUNFLFNBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ1lGO0FEVkE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDYUY7QURYQTtFQUNFLFFBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ2NGO0FEWkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDZUY7QURiQTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ2dCRjtBRGRBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtBQ2lCRjtBRGZBO0VBQ0U7SUFDSSw2QkFBQTtJQUNBLFVBQUE7RUNrQko7RURoQkE7SUFDSSw2QkFBQTtJQUNBLFlBQUE7RUNrQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3QtY29tbWVudC9wb3N0LWNvbW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWxpc3Qge1xuICAubXktaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAudG9wIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC5sZWZ0IHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICAgICAgfVxuICAgICAgLnJpZ2h0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5kZXMge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gICAgICBjb2xvcjogIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgfVxufVxuLmFkZGJxLWJveCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5sZWZ0IHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC5yaWdodCB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi5teS1yb3cge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gICYubm9Ub3Age1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG59XG4uZ29vZHNfbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC5wbC1pdGVtIHtcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xuICB9XG4gIC5nb29kc19uYW1lIHtcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XG4gICAgcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICB9XG59XG4uaGFzYnEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5ubWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW9uLXRleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4ubGluZSB7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWdyYXktYmFja2dyb3VuZC1jb2xvcik7XG59XG4uaW1nLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxvYWRFZmZlY3R7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAuMyk7XG59XG4ubG9hZEVmZmVjdCBzcGFue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkIDEuMDRzIGVhc2UgaW5maW5pdGU7XG59XG4ubG9hZEVmZmVjdCBzcGFuOm50aC1jaGlsZCgxKXtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6LTEwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjAuMTNzO1xufVxuLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoMil7XG4gIGxlZnQ6IDE0cHg7XG4gIHRvcDogMTRweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MC4yNnM7XG59XG4ubG9hZEVmZmVjdCBzcGFuOm50aC1jaGlsZCgzKXtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MC4zOXM7XG59XG4ubG9hZEVmZmVjdCBzcGFuOm50aC1jaGlsZCg0KXtcbiAgdG9wOiAxNHB4O1xuICByaWdodDoxNHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTowLjUycztcbn1cbi5sb2FkRWZmZWN0IHNwYW46bnRoLWNoaWxkKDUpe1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6LTEwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjAuNjVzO1xufVxuLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoNil7XG4gIHJpZ2h0OiAxNHB4O1xuICBib3R0b206MTRweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MC43OHM7XG59XG4ubG9hZEVmZmVjdCBzcGFuOm50aC1jaGlsZCg3KXtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MC45MXM7XG59XG4ubG9hZEVmZmVjdCBzcGFuOm50aC1jaGlsZCg4KXtcbiAgYm90dG9tOiAxNHB4O1xuICBsZWZ0OiAxNHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheToxLjA0cztcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsb2Fke1xuICAwJXtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAle1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4zKTtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufSIsIi5teS1saXN0IC5teS1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5teS1saXN0IC5teS1pdGVtIC50b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubXktbGlzdCAubXktaXRlbSAudG9wIC5sZWZ0IHtcbiAgd2lkdGg6IDQwcHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xufVxuLm15LWxpc3QgLm15LWl0ZW0gLnRvcCAucmlnaHQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubXktbGlzdCAubXktaXRlbSAudG9wIC5yaWdodCBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubXktbGlzdCAubXktaXRlbSAuZGVzIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYWRkYnEtYm94IHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hZGRicS1ib3ggLmxlZnQge1xuICBmbGV4OiAxO1xufVxuLmFkZGJxLWJveCAucmlnaHQge1xuICB3aWR0aDogYXV0bztcbn1cblxuLm15LXJvdyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5teS1yb3cubm9Ub3Age1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLmdvb2RzX2xpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmdvb2RzX2xpc3QgLnBsLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHZhcigtLWlvbi1ncmF5LWJhY2tncm91bmQtY29sb3IpO1xufVxuLmdvb2RzX2xpc3QgLmdvb2RzX25hbWUge1xuICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XG59XG4uZ29vZHNfbGlzdCAuZ29vZHNfbmFtZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaGFzYnEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLm5tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5tYm94IGlvbi10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5saW5lIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLmltZy1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbWctYm94IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxvYWRFZmZlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ubG9hZEVmZmVjdCBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZCAxLjA0cyBlYXNlIGluZmluaXRlO1xufVxuXG4ubG9hZEVmZmVjdCBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMTNzO1xufVxuXG4ubG9hZEVmZmVjdCBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDE0cHg7XG4gIHRvcDogMTRweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMjZzO1xufVxuXG4ubG9hZEVmZmVjdCBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjM5cztcbn1cblxuLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoNCkge1xuICB0b3A6IDE0cHg7XG4gIHJpZ2h0OiAxNHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC41MnM7XG59XG5cbi5sb2FkRWZmZWN0IHNwYW46bnRoLWNoaWxkKDUpIHtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNjVzO1xufVxuXG4ubG9hZEVmZmVjdCBzcGFuOm50aC1jaGlsZCg2KSB7XG4gIHJpZ2h0OiAxNHB4O1xuICBib3R0b206IDE0cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjc4cztcbn1cblxuLmxvYWRFZmZlY3Qgc3BhbjpudGgtY2hpbGQoNykge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC45MXM7XG59XG5cbi5sb2FkRWZmZWN0IHNwYW46bnRoLWNoaWxkKDgpIHtcbiAgYm90dG9tOiAxNHB4O1xuICBsZWZ0OiAxNHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4wNHM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59Il19 */");

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
 * @LastEditTime: 2019-11-05 22:40:53
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
        var file = this.native.getImgbase64tofile(base64, 'comment' + index, 'file');
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
    PostCommentPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: src_app_services_native_service__WEBPACK_IMPORTED_MODULE_5__["NativeService"] },
        { type: src_app_services_orderlist_service__WEBPACK_IMPORTED_MODULE_6__["OrderlistService"] },
        { type: src_app_services_xclist_service__WEBPACK_IMPORTED_MODULE_7__["XclistService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
    ]; };
    PostCommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-comment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-comment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post-comment/post-comment.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-comment.page.scss */ "./src/app/pages/post-comment/post-comment.page.scss")).default]
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