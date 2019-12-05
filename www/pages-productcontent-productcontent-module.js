(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-productcontent-productcontent-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productcontent/productcontent.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productcontent/productcontent.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n * @Author: wjy-mac\r\n * @Date: 2019-07-28 01:58:20\r\n * @LastEditors: wjy-mac\r\n * @LastEditTime: 2019-11-28 16:31:55\r\n * @Description: file content\r\n -->\r\n<ion-header [translucent]=\"true\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" [ngClass]=\"'show-' + toolbaropacity\">\r\n    <div class=\"search-bar\">\r\n      <div class=\"left\" (click)=\"goBack()\">\r\n        <img src=\"/assets/backbg.svg\" alt=\"\">\r\n      </div>\r\n      <div class=\"center\">\r\n      </div>\r\n      <div class=\"right\">\r\n        <!--<img src=\"/assets/wechatbg.svg\" alt=\"\">-->\r\n        <div class=\"round\"><ion-icon name=\"share\"></ion-icon></div>\r\n        <div class=\"round\" (click)=\"toprightmore($event)\"><ion-icon name=\"more\" mode=\"ios\"></ion-icon></div>\r\n        <!--<img src=\"/assets/czbg.svg\" alt=\"\">-->\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\" [fullscreen]=\"true\" (ionScroll)=\"logScrolling($event)\">\r\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n       pullingIcon=\"arrow-dropdown\"\r\n       pullingText=\"Pull to refresh\"\r\n       refreshingSpinner=\"circles\"\r\n       refreshingText=\"更新中...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div *ngIf=\"!productData\" class=\"top\">\r\n    <ion-skeleton-text animated style=\"height: 260px;\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"height: 20px;\" ></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"height: 20px;\" ></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"margin-top: 10px; height: 44px;\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"height: 44px;\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"height: 60px;margin-top: 10px;\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"height: 60px;margin-top: 10px;\"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style=\"height: 200px;margin-top: 10px;\"></ion-skeleton-text>\r\n    <ion-row>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-col><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-col>\r\n      <ion-skeleton-text animated style=\"height: 20px;margin-top: 10px;\"></ion-skeleton-text>\r\n      <ion-skeleton-text animated style=\"margin-top: 10px;\"></ion-skeleton-text>\r\n      <ion-skeleton-text animated style=\"height: 100px;margin-top: 10px;\"></ion-skeleton-text>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"tw-content2 ion-padding\" *ngIf=\"isshowtopnav\">\r\n    <div class=\"title\">\r\n      <div class=\"box\" [ngClass]=\"{'active': pageNav === 1}\" (click)=\"gotoPoint(1)\">图文介绍<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && productData.ishw\" [ngClass]=\"{'active': pageNav === 2}\" (click)=\"gotoPoint(2)\">行程线路<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && !productData.ishw\" [ngClass]=\"{'active': pageNav === 2}\" (click)=\"gotoPoint(2)\">规格参数<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && productData.ishw\" [ngClass]=\"{'active': pageNav === 3}\" (click)=\"gotoPoint(3)\">费用说明<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && !productData.ishw\" [ngClass]=\"{'active': pageNav === 3}\" (click)=\"gotoPoint(3)\">包装售后<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && productData.ishw\" [ngClass]=\"{'active': pageNav === 4}\" (click)=\"gotoPoint(4)\">购买须知<span></span></div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"top\" *ngIf=\"productData\">\r\n    <ion-slides pager=\"true\">\r\n      <ion-slide *ngFor=\"let item of productData.bannerList\">\r\n        <img src=\"{{http.zdomain + item}}\">\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <div class=\"yhtime-box\" *ngIf=\"productData && productData.xsprice.promote_price && productData.xsprice.promote_price !== '0' && productData.xsprice.promote_end_date\">\r\n    <img src=\"./assets/cxbar.svg\" alt=\"\">\r\n    <div class=\"text-content\">\r\n      <div class=\"left\"><span>限时价</span><span>¥</span><span>{{productData.xsprice.promote_price}}</span></div>\r\n      <div class=\"right\">\r\n        <span>剩余时间</span>\r\n        <div class=\"time-box\">\r\n          <span *ngIf=\"xsday && xsday != 0\">{{xsday}}</span><span *ngIf=\"xsday && xsday != 0\">:</span><span>{{xsHouse}}</span><span>:</span><span>{{xsMin}}</span><span>:</span><span>{{xsSec}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"title-box\" *ngIf=\"productData\" [ngClass]=\"{'title-top': !productData.xsprice.promote_price || productData.xsprice.promote_price == '0' || !productData.xsprice.promote_end_date}\">\r\n    <app-productlist *ngIf=\"productData.topData\" [ishw]=\"productData.ishw\" [data]=\"productData.topData\" [price]=\"productData.activestartprice\"></app-productlist>\r\n  </div>\r\n  <div class=\"fwbox line-height\">\r\n    <ion-list node=\"ios\" *ngIf=\"productData\">\r\n      <ion-item *ngIf=\"productData.yf\">\r\n        <ion-label>\r\n          <span class=\"ion-margin-end\">发货</span>\r\n          <span *ngIf=\"productData.yf > 0\">运费：{{productData.yf}}</span>\r\n          <span *ngIf=\"productData.yf == -1\">快递包邮</span>\r\n        </ion-label>\r\n        <!--<ion-note>销量3万</ion-note>-->\r\n      </ion-item>\r\n      <ion-item button  (click)=\"showfw()\">\r\n        <ion-label *ngIf=\"productData && productData.fw\">\r\n          <span class=\"ion-margin-end\">服务</span>\r\n          <span *ngFor=\"let item of productData.fw\" style=\"margin-right: 10px\"><img src=\"./assets/gou.svg\" alt=\"\">{{item}}</span>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item button  (click)=\"lqbonus()\" *ngIf=\"productData && productData.bonusList && productData.bonusList.length > 0\">\r\n        <ion-label>\r\n          <span class=\"ion-margin-end\">领券</span>\r\n          <app-yhbox [notitle]=\"true\" [des]=\"'满' + productData.bonusList[0].min_goods_amount + '减' + productData.bonusList[0].type_money\"></app-yhbox>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item button (click)=\"showyh()\">\r\n        <ion-label *ngIf=\"productData\">\r\n          优惠\r\n          <app-yhbox style=\"margin-left: 10px\" *ngIf=\"!productData.promotion || productData.promotion.length === 0\" [title]=\"'优惠券自动抵扣'\"></app-yhbox>\r\n          <app-yhbox style=\"margin-left: 10px\" *ngFor=\"let item of productData.promotion\" [title]=\"item.act_name\" [des]=\"item.act_name\"></app-yhbox>\r\n          <app-yhbox style=\"margin-left: 10px\" *ngFor=\"let item of productData.volume_price_list\" [title]=\"'满' + item.number + '件' + item.price +'/件'\" [des]=\"'满' + item.number + '件' + item.price +'/件'\"></app-yhbox>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"productData && !productData.ishw && productData.mrseletestr && productData.isdelete == 0 && productData.onsale == 1\" button (click)=\"presentModal(1)\">\r\n        <ion-label>\r\n          <span class=\"ion-margin-end\">选择</span>\r\n          <span>{{productData.mrseletestr}}</span>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <div class=\"tc-box line-height\" *ngIf=\"productData && productData.ishw && productData.isdelete == 0 && productData.onsale == 1\">\r\n    <ion-list mode=\"ios\" lines=\"none\">\r\n      <ion-item button (click)=\"openpage()\">\r\n        <ion-label>选择套餐</ion-label>\r\n        <div solt=\"end\" class=\"right-div\" *ngIf=\"productData\">\r\n          <span *ngFor=\"let item of productData.month;let i = index;\">{{i !== 0 ? '/':''}}{{item}}月</span>\r\n          <span>可选</span>\r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div class=\"ion-padding-start ion-padding-end ion-padding-top\">\r\n      <ion-slides [options]=\"slideOpts\" *ngIf=\"productData\">\r\n        <ion-slide *ngFor=\"let item of productData.timetc; let i = index;\">\r\n          <app-seletebtn [block]=\"true\" [name]=\"item.label | goodTime\" [price]=\"item.minprice\" [isactive]=\"item.selected_key_ecshop68\"\r\n          (mclick)=\"setTimetc($event)\" [id]=\"item.id\" [nopadding]=\"true\"></app-seletebtn>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n  </div>\r\n  <div class=\"yhpj line-height\" *ngIf=\"productData && productData.pinglunnum && productData.pinglunnum > 0\">\r\n    <ion-list mode=\"ios\" lines=\"none\">\r\n      <ion-item button>\r\n        <ion-label>用户评价({{productData.pinglunnum | setnum}})</ion-label>\r\n        <span (click)=\"openAllcomment()\">全部评价</span>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-chip color=\"secondary\" *ngFor=\"let item of pingluntags\">\r\n          <ion-label color=\"dark\">{{item.tag_name}}({{item.tag_num}})</ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div *ngFor=\"let item of comment\">\r\n      <app-pjcontent [data]=\"item\"></app-pjcontent>\r\n    </div>\r\n    <!--<ion-list mode=\"ios\" lines=\"none\">-->\r\n      <!--<ion-item button>-->\r\n        <!--<ion-label>问大家</ion-label>-->\r\n        <!--<span>共9条问题</span>-->\r\n      <!--</ion-item>-->\r\n    <!--</ion-list>-->\r\n    <!--<ion-list lines=\"none\">-->\r\n      <!--<ion-item>-->\r\n        <!--<img src=\"./assets/wen.svg\" slot=\"start\" alt=\"\">-->\r\n        <!--<ion-label>-->\r\n          <!--<h2>什么时候出发</h2>-->\r\n          <!--<p>123个回答</p>-->\r\n        <!--</ion-label>-->\r\n      <!--</ion-item>-->\r\n      <!--<ion-item>-->\r\n        <!--<img src=\"./assets/wen.svg\" slot=\"start\" alt=\"\">-->\r\n        <!--<ion-label>-->\r\n          <!--<h2>除了套餐价格以外，还有其他费用吗</h2>-->\r\n          <!--<p>123个回答</p>-->\r\n        <!--</ion-label>-->\r\n      <!--</ion-item>-->\r\n    <!--</ion-list>-->\r\n  </div>\r\n  <div class=\"shop-information line-height\" *ngIf=\"supplier\">\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-thumbnail slot=\"start\">\r\n          <img [src]=\"supplier.shoplogo ? http.zdomain + supplier.shoplogo : 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h2>{{supplier.shopname}}</h2>\r\n          <p>\r\n            <span *ngIf=\"suppid == 0\"><img class=\"kb\" src=\"./assets/kb.svg\" alt=\"\">平台特供</span>\r\n            <span *ngIf=\"supplier.yj > 0 && suppid != 0\"><img class=\"kb\" src=\"./assets/kb.svg\" alt=\"\">认证商家</span>\r\n            <span><img src=\"./assets/dz.svg\" alt=\"\">金牌口碑</span>\r\n          </p>\r\n        </ion-label>\r\n        <app-mybutton *ngIf=\"suppid != 0\" [bname]=\"'进店逛逛'\" slot=\"end\"  (click)=\"opendp()\"></app-mybutton>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-grid class=\"shop-des\" *ngIf=\"goodsnumobj\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <h2>{{supplier.goodsnumobj[1]}}</h2>\r\n          <p>{{supplier.goodsnumobj[0]}}</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2>{{supplier.fensiobj[1]}}</h2>\r\n          <p>{{supplier.fensiobj[0]}}</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2>{{supplier.haopingobj[1] == 0 ? '100' : supplier.haopingobj[1]}}%</h2>\r\n          <p>{{supplier.haopingobj[0]}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col *ngFor=\"let item of supplier.best_goods\" size=\"4\">\r\n          <app-tjproduct [price]=\"item.shop_price\" [name]=\"item.goods_name\"\r\n                         [src]=\"http.zdomain + item.thumb\" [id]=\"item.goods_id\" (tclick)=\"optenProduct($event)\"></app-tjproduct>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div class=\"cztc\" *ngIf=\"productData && productData.cztc.length > 0\">\r\n    <ion-list mode=\"ios\">\r\n      <ion-item button lines=\"none\" (click)=\"gototc()\">\r\n        <ion-label>超值套餐</ion-label>\r\n        <span>更多套餐</span>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div class=\"ion-padding\">\r\n      <ion-slides pager=\"true\" [options]=\"slideOptslv\" class=\"lxlg\"  (click)=\"gototc()\">\r\n        <ion-slide style=\"position: relative\">\r\n          <img class=\"tcbgimg\" src=\"../assets/tcbj.png\" alt=\"\">\r\n          <div class=\"tc-first-box\">\r\n            <div>原价：<span>{{productData.cztc[0].subtotal}}</span></div>\r\n            <div class=\"xj\">套餐价：<span>{{productData.cztc[0].package_price}}</span></div>\r\n            <div>节省：{{productData.cztc[0].saving}}</div>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide *ngFor=\"let data of productData.cztc[0].goods_list\">\r\n          <img style=\"width: 15px\" [src]=\"http.domain + 'themesmobile/68ecshopcom_mobile/images/goods/jia.png'\">\r\n          <img [src]=\"http.domain + data.goods_thumb\">\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"tw-content line-height ion-padding\">\r\n    <div class=\"title\">\r\n      <div class=\"box\" [ngClass]=\"{'active': pageNav === 1}\" (click)=\"gotoPoint(1)\">图文介绍<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && productData.ishw\" [ngClass]=\"{'active': pageNav === 2}\" (click)=\"gotoPoint(2)\">行程线路<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && !productData.ishw\" [ngClass]=\"{'active': pageNav === 2}\" (click)=\"gotoPoint(2)\">规格参数<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && productData.ishw\" [ngClass]=\"{'active': pageNav === 3}\" (click)=\"gotoPoint(3)\">费用说明<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && !productData.ishw\" [ngClass]=\"{'active': pageNav === 3}\" (click)=\"gotoPoint(3)\">包装售后<span></span></div>\r\n      <div class=\"box\" *ngIf=\"productData && productData.ishw\" [ngClass]=\"{'active': pageNav === 4}\" (click)=\"gotoPoint(4)\">购买须知<span></span></div>\r\n    </div>\r\n    <div class=\"car-information\" *ngIf=\"productData && productData.hbxx && productData.ishw\">\r\n      <div class=\"tmcontent-title\">{{productData.hbxx.car | carorother}}信息</div>\r\n      <div class=\"car-des\">{{productData.hbxx.car | carorother}}信息仅供参考，具体信息可咨询商家</div>\r\n      <div class=\"information-box\">\r\n        <div class=\"box\">\r\n          <div class=\"title\"><img src=\"./assets/to.svg\" alt=\"\">{{productData.hbxx.start_city}}-{{productData.hbxx.forcity}}</div>\r\n          <div class=\"footer\">\r\n            <div class=\"time\">\r\n              <span>{{productData.hbxx.starttime | onlytime}}</span>\r\n              <span>{{productData.hbxx.startpoint}}</span>\r\n            </div>\r\n            <div class=\"center\">\r\n              <span></span>\r\n              <div>{{productData.hbxx.starttime | timedifference: productData.hbxx.arrivetime}}</div>\r\n            </div>\r\n            <div class=\"time\">\r\n              <span>{{productData.hbxx.arrivetime | onlytime}}</span>\r\n              <span>{{productData.hbxx.arrivepoint}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"box\">\r\n          <div class=\"title\"><img src=\"./assets/back.svg\" alt=\"\">{{productData.hbxx.fstartCity}}-{{productData.hbxx.fforcity}}</div>\r\n          <div class=\"footer\">\r\n            <div class=\"time\">\r\n              <span>{{productData.hbxx.fstarttime | onlytime}}</span>\r\n              <span>{{productData.hbxx.fstartpoint}}</span>\r\n            </div>\r\n            <div class=\"center\">\r\n              <span></span>\r\n              <div>{{productData.hbxx.fstarttime | timedifference: productData.hbxx.farrivetime}}</div>\r\n            </div>\r\n            <div class=\"time\">\r\n              <span>{{productData.hbxx.farrivetime | onlytime}}</span>\r\n              <span>{{productData.hbxx.farrivepoint}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tmcontent-title\">图文介绍</div>\r\n    <div class=\"twjs-box tw-html-content\">\r\n      <div *ngIf=\"productData\" [innerHTML]=\"assembleHTML(productData.twcontent)\"></div>\r\n    </div>\r\n    <div class=\"tmcontent-title xcxl\" *ngIf=\"productData\">{{productData.ishw ? '行程线路' : '规格参数'}}</div>\r\n    <!--<div class=\"gmxz-des\">-->\r\n      <!--5天4晚|4个景点-->\r\n    <!--</div>-->\r\n    <div class=\"\" margin-top=\"5px\">\r\n      <ion-grid *ngIf=\"productData && !productData.ishw\">\r\n        <ion-list *ngIf=\"productData\">\r\n          <ion-item *ngIf=\"productData.goods_sn\">\r\n            <ion-label>\r\n              商品编号\r\n            </ion-label>\r\n            <div slot=\"end\">{{productData.goods_sn}}</div>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"productData.goods_brand\">\r\n            <ion-label>\r\n              商品品牌\r\n            </ion-label>\r\n            <div slot=\"end\">{{productData.goods_brand}}</div>\r\n          </ion-item>\r\n          <ion-item *ngFor=\"let item of productData.properties\">\r\n            <ion-label>{{item.name}}</ion-label>\r\n            <div slot=\"end\">{{item.value}}</div>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-grid>\r\n      <ion-slides [options]=\"slideOpts2\" *ngIf=\"productData && productData.xclx && productData.xclx.length > 1\">\r\n        <ion-slide *ngFor=\"let item of productData.xclx; let i = index;\">\r\n          <app-seletebtn [block]=\"true\" [name]=\"item.jtjy_name\" [isactive]=\"i === tcxqIndex\"\r\n                         (mclick)=\"setTccontentindex($event)\" [id]=\"i + 1\"></app-seletebtn>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n    <div class=\"xclx-box\" *ngIf=\"productData && productData.xclx && productData.xclx.length > 0 && productData.ishw\">\r\n      <app-xclx [data]=\"productData.xclx[tcxqIndex].attr\"></app-xclx>\r\n    </div>\r\n    <div class=\"tmcontent-title fysm\" *ngIf=\"productData\">{{productData.ishw ? '费用说明' : '包装售后'}}</div>\r\n    <div class=\"twjs-box\" *ngIf=\"productData && !productData.ishw\">\r\n      <h2><span></span>包装清单</h2>\r\n      <p>{{productData.goods_brief || '暂无'}}</p>\r\n      <h2><span></span>售后服务</h2>\r\n      <p>{{productData.goods_shfw ||  '暂无'}}</p>\r\n      <h2><span></span>价格说明</h2>\r\n      <div *ngFor=\"let item of productData.ptjgsm;let i = index;\" style=\"color: #999;font-size: 12px;\">\r\n        {{(i + 1) + '、' + item}}\r\n      </div>\r\n    </div>\r\n    <div class=\"gmxz-des\" *ngIf=\"productData && productData.ishw\">\r\n      费用透明，全程0购物\r\n    </div>\r\n    <div class=\"twjs-box\" *ngIf=\"productData && productData.ishw\">\r\n      <h2><span></span>费用包含</h2>\r\n      <p>下单前请注意：为了确保您顺利出行，请下单前来电确认余位和行程。</p>\r\n      <div class=\"fybh-box\">\r\n        <div *ngIf=\"productData && productData.fybh\" [innerHTML]=\"assembleHTML(productData.fybh)\"></div>\r\n      </div>\r\n      <h2><span></span>费用不包含</h2>\r\n      <div class=\"fybh-box\">\r\n        <div *ngIf=\"productData && productData.fybbh\" [innerHTML]=\"assembleHTML(productData.fybbh)\"></div>\r\n      </div>\r\n      <h2><span></span>购物说明</h2>\r\n      <div class=\"fybh-box\">\r\n        <div *ngIf=\"productData && productData.gmsm\" [innerHTML]=\"assembleHTML(productData.gmsm)\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tmcontent-title gmxz\" *ngIf=\"productData && productData.ishw\">购买须知</div>\r\n    <div class=\"gmxz-des\" *ngIf=\"productData && productData.ishw\">\r\n      全程为您服务，让您无忧出行\r\n    </div>\r\n    <div class=\"twjs-box\" *ngIf=\"productData && productData.ishw\">\r\n      <h2><span></span>退款说明</h2>\r\n      <p *ngIf=\"productData && productData.tkgx == 1\">\r\n        商家确认前随时可退，商家确认后将不支持退款\r\n      </p>\r\n      <p *ngIf=\"productData && productData.tkgx == 2\">\r\n        商家确认前随时可退，商家确认后将按照下列规则退款：\r\n      </p>\r\n      <ul class=\"tkxz\" *ngIf=\"productData && productData.tksm\">\r\n        <li *ngFor=\"let item of productData.tksm;let i = index\">\r\n          {{i + 1}}.出发日期前{{item.beforetime}}天(含),扣除订单金额&nbsp;<ion-text color=\"danger\">{{item.kcbl}}%</ion-text>&nbsp;作为卖家损失费\r\n        </li>\r\n      </ul>\r\n      <ul class=\"tkxz\" *ngIf=\"productData && (!productData.tksm || productData.tksm.length === 0)\">\r\n        <li>\r\n          出行前随时可退\r\n        </li>\r\n      </ul>\r\n      <h2><span></span>温馨提示</h2>\r\n      <div *ngIf=\"productData && productData.gmxz\" [innerHTML]=\"assembleHTML(productData.gmxz)\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"klyk\" *ngIf=\"productData && productData.related_goods.length > 0\">\r\n    看了又看\r\n  </div>\r\n  <ion-grid *ngIf=\"productData\">\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let item of productData.related_goods\" size=\"4\">\r\n        <app-tjproduct [price]=\"item.shop_price\" [name]=\"item.goods_name\"\r\n                       [src]=\"http.zdomain + item.goods_thumb\" [id]=\"item.goods_id\" (tclick)=\"optenProduct($event)\"></app-tjproduct>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" *ngIf=\"productData\">\r\n    <div class=\"footer-content\">\r\n      <div class=\"left\">\r\n        <div class=\"box\" (click)=\"toKf()\"><img src=\"./assets/kf-icon.svg\" alt=\"\"><span>客服</span></div>\r\n        <div class=\"box\" (click)=\"opendp(1)\"><img src=\"./assets/dianpu-icon.svg\" alt=\"\"><span>店铺</span></div>\r\n        <div class=\"box\" (click)=\"scgoods()\">\r\n          <img *ngIf=\"productData.issc !== 1\" src=\"./assets/sc-icon.svg\" alt=\"\">\r\n          <img *ngIf=\"productData.issc === 1\" src=\"./assets/icon/sc.svg\" alt=\"\">\r\n          <span>收藏</span></div>\r\n      </div>\r\n      <div class=\"right\" (click)=\"openpage()\"\r\n           [ngClass]=\"{'gray': productData.month && productData.month.length == 0 || productData.isdelete == 1 || productData.onsale == 0}\"\r\n           *ngIf=\"productData.ishw || productData.isdelete == 1 || productData.onsale == 0\">\r\n        {{productData.isdelete == 1 ? '已删除' : productData.onsale == 0 ? '已下架' : '立即预订'}}\r\n      </div>\r\n      <div class=\"right-goods\" *ngIf=\"!productData.ishw && productData.isdelete != 1 && productData.onsale != 0\">\r\n        <div class=\"left\" (click)=\"presentModal(2)\">\r\n          加入购物车\r\n        </div>\r\n        <div class=\"right\" (click)=\"presentModal(3)\">\r\n          立即购买\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/carorother.pipe.ts":
/*!************************************!*\
  !*** ./src/app/carorother.pipe.ts ***!
  \************************************/
/*! exports provided: CarorotherPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarorotherPipe", function() { return CarorotherPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarorotherPipe = /** @class */ (function () {
    function CarorotherPipe() {
    }
    CarorotherPipe.prototype.transform = function (value, args) {
        if (value == 0) {
            return '飞机';
        }
        else if (value == 1) {
            return '火车/高铁';
        }
        else if (value == 2) {
            return '汽车';
        }
        else {
            return '游轮';
        }
    };
    CarorotherPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'carorother'
        })
    ], CarorotherPipe);
    return CarorotherPipe;
}());



/***/ }),

/***/ "./src/app/good-time.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/good-time.pipe.ts ***!
  \***********************************/
/*! exports provided: GoodTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodTimePipe", function() { return GoodTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: wjy-mac
 * @Date: 2019-04-01 21:16:38
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-28 14:55:29
 * @Description: file content
 */

var GoodTimePipe = /** @class */ (function () {
    function GoodTimePipe() {
    }
    GoodTimePipe.prototype.transform = function (value, args) {
        console.log(value);
        var arr = [];
        if (value.indexOf(' ') > -1) {
            value = value.split(' ')[0];
        }
        if (value.indexOf('/') > -1) {
            arr = value.split('/');
        }
        else if (value.indexOf('-') > -1) {
            arr = value.split('-');
        }
        var month;
        var day;
        if (arr.length === 3) {
            month = arr[1];
            day = arr[2];
        }
        else {
            month = arr[0];
            day = arr[1];
        }
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return month + '/' + day;
    };
    GoodTimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'goodTime'
        })
    ], GoodTimePipe);
    return GoodTimePipe;
}());



/***/ }),

/***/ "./src/app/onlytime.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/onlytime.pipe.ts ***!
  \**********************************/
/*! exports provided: OnlytimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlytimePipe", function() { return OnlytimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnlytimePipe = /** @class */ (function () {
    function OnlytimePipe() {
    }
    OnlytimePipe.prototype.transform = function (value, args) {
        if (value.includes(' ')) {
            var time = value.replace(/(^\s*)|(\s*$)/g, "");
            time = time.split(' ');
            time = time.filter(function (x) {
                if (x)
                    return true;
                else
                    return false;
            });
            if (time[1].includes('：'))
                time[1] = time[1].replace(/：/g, ':');
            return time[1];
        }
        return value;
    };
    OnlytimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'onlytime'
        })
    ], OnlytimePipe);
    return OnlytimePipe;
}());



/***/ }),

/***/ "./src/app/pages/productcontent/productcontent.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/productcontent/productcontent.module.ts ***!
  \***************************************************************/
/*! exports provided: ProductcontentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductcontentPageModule", function() { return ProductcontentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productcontent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productcontent.page */ "./src/app/pages/productcontent/productcontent.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _good_time_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../good-time.pipe */ "./src/app/good-time.pipe.ts");
/* harmony import */ var _carorother_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../carorother.pipe */ "./src/app/carorother.pipe.ts");
/* harmony import */ var _timedifference_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../timedifference.pipe */ "./src/app/timedifference.pipe.ts");
/* harmony import */ var _onlytime_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../onlytime.pipe */ "./src/app/onlytime.pipe.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");













// import { TimePipe } from '../../time.pipe';
var routes = [
    {
        path: '',
        component: _productcontent_page__WEBPACK_IMPORTED_MODULE_6__["ProductcontentPage"]
    }
];
var ProductcontentPageModule = /** @class */ (function () {
    function ProductcontentPageModule() {
    }
    ProductcontentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_productcontent_page__WEBPACK_IMPORTED_MODULE_6__["ProductcontentPage"], _good_time_pipe__WEBPACK_IMPORTED_MODULE_8__["GoodTimePipe"], _carorother_pipe__WEBPACK_IMPORTED_MODULE_9__["CarorotherPipe"], _timedifference_pipe__WEBPACK_IMPORTED_MODULE_10__["TimedifferencePipe"], _onlytime_pipe__WEBPACK_IMPORTED_MODULE_11__["OnlytimePipe"]]
        })
    ], ProductcontentPageModule);
    return ProductcontentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/productcontent/productcontent.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/productcontent/productcontent.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n  padding: 0 10px;\n  height: 36px;\n}\n.search-bar .left {\n  width: var(--ion-statusbar-left);\n  font-size: var(--ion-icon-big);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.search-bar .left img {\n  width: 22px;\n  margin-left: 5px;\n}\n.search-bar .right {\n  width: 52px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.search-bar .right div.round {\n  background-color: rgba(0, 0, 0, 0.6);\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.search-bar .center {\n  display: -webkit-box;\n  flex: 1;\n  margin: 0 15px;\n  height: 27px;\n}\nion-content {\n  --background: var(--ion-gray-background-color);\n}\napp-seletebtn {\n  width: 100%;\n}\n.yhtime-box {\n  margin-top: -20px;\n  position: relative;\n  z-index: 100;\n  width: 100%;\n}\n.yhtime-box img {\n  width: 100%;\n}\n.yhtime-box .text-content {\n  position: absolute;\n  width: 100%;\n  height: 50%;\n  top: 10%;\n  left: 0;\n  display: flex;\n  align-items: stretch;\n}\n.yhtime-box .text-content > div {\n  flex: 1;\n}\n.yhtime-box .text-content .left {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-end;\n  color: #fff;\n}\n.yhtime-box .text-content .left span {\n  display: inline-block;\n  font-size: var(--ion-text);\n}\n.yhtime-box .text-content .left span:first-of-type {\n  padding-left: 15px;\n  margin-right: 10px;\n}\n.yhtime-box .text-content .left span:last-of-type {\n  font-size: 26px;\n  font-weight: 600;\n  margin-bottom: -3px;\n}\n.yhtime-box .text-content .right {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-end;\n  font-size: var(--ion-text);\n  color: #fff;\n  padding-right: 15px;\n}\n.yhtime-box .text-content .right .time-box {\n  margin-left: 5px;\n}\n.yhtime-box .text-content .right .time-box span:nth-of-type(odd) {\n  background-color: #fff;\n  padding: 0 2px;\n  border-radius: 3px;\n  color: #1DB9BD;\n  margin: 0 3px;\n}\n.top {\n  margin-top: var(--ion-platform-margin-top);\n  background-color: #fff;\n}\n.top ion-slides {\n  --bullet-background-active: #fff;\n}\n.title-box {\n  background-color: #fff;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  position: relative;\n  margin-top: -15px;\n  z-index: 0;\n}\n.title-box.title-top {\n  margin-top: -12px;\n}\n.line-height {\n  margin-top: 8px;\n}\n.fwbox {\n  background: #fff;\n}\n.fwbox ion-list {\n  margin-bottom: 0;\n}\n.fwbox ion-list ion-item {\n  --background: #fff;\n}\n.fwbox ion-list ion-item ion-label {\n  font-size: var(--ion-text);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.fwbox ion-list ion-item ion-label span {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.fwbox ion-list ion-item ion-label img {\n  width: 13px;\n  margin-right: 5px;\n}\n.fwbox ion-list ion-item:last-of-type ion-label app-yhbox {\n  margin-left: 8px;\n}\n.fwbox ion-list ion-item:last-of-type ion-label app-yhbox:first-of-type {\n  margin-left: 15px;\n}\n.tc-box, .yhpj {\n  background-color: #fff;\n  padding-bottom: 15px;\n}\n.tc-box ion-list ion-item, .yhpj ion-list ion-item {\n  --background: #fff;\n}\n.tc-box ion-list ion-item .right-div, .yhpj ion-list ion-item .right-div {\n  display: flex;\n}\n.tc-box ion-list ion-item span, .yhpj ion-list ion-item span {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-primary);\n}\nion-list {\n  margin-bottom: 0;\n}\n.shop-information {\n  padding: 15px 0;\n  background-color: #fff;\n}\n.shop-information ion-label span {\n  margin-right: 10px;\n}\n.shop-information ion-label img {\n  width: 15px;\n  margin-right: 5px;\n}\n.shop-information ion-label img.kb {\n  margin-bottom: -2px;\n}\n.shop-des ion-col {\n  text-align: center;\n}\n.shop-des h2 {\n  font-size: var(--ion-title);\n  margin-bottom: 0;\n}\n.shop-des p {\n  font-size: var(--ion-sm-text);\n  margin-top: 5px;\n  color: var(--ion-color-medium);\n}\n.isscrollcontent {\n  position: fixed;\n  background-color: #fff;\n  width: 100%;\n  top: 44px;\n  left: 0;\n  z-index: 1000;\n  padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n}\n.tw-content2 {\n  position: fixed;\n  top: var(--ion-platform-margin-height);\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  --padding-bottom: 0;\n  padding-bottom: 0;\n  background-color: #fff;\n  box-shadow: 0 2px 3px rgba(var(--ion-color-medium-rgb), 0.4);\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.tw-content2 > .title {\n  display: flex;\n}\n.tw-content2 > .title > .box {\n  flex: 1;\n  color: var(--ion-color-dark);\n  font-size: var(--ion-text);\n  padding-bottom: 15px;\n  text-align: center;\n}\n.tw-content2 > .title > .box.active {\n  font-weight: 600;\n  position: relative;\n}\n.tw-content2 > .title > .box.active span {\n  width: 20px;\n  height: 3px;\n  border-radius: 1.5px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -10px;\n  background-color: var(--ion-color-secondary);\n}\n.tw-content {\n  background-color: #fff;\n}\n.tw-content > .title {\n  display: flex;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.tw-content > .title > .box {\n  flex: 1;\n  color: var(--ion-color-dark);\n  font-size: var(--ion-text);\n  padding-bottom: 15px;\n  text-align: center;\n}\n.tw-content > .title > .box.active {\n  font-weight: 600;\n  position: relative;\n}\n.tw-content > .title > .box.active span {\n  width: 20px;\n  height: 3px;\n  border-radius: 1.5px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -10px;\n  background-color: var(--ion-color-secondary);\n}\n.tw-content .car-information .car-des {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n  text-align: center;\n  margin-top: 8px;\n  margin-bottom: 15px;\n}\n.tw-content .car-information .information-box {\n  border: 1px solid var(--ion-color-light);\n  border-radius: 5px;\n  padding: 15px;\n  color: var(--ion-color-dark);\n}\n.tw-content .car-information .information-box .box:first-of-type {\n  border-bottom: 1px solid var(--ion-color-light);\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n}\n.tw-content .car-information .information-box .title {\n  font-size: var(--ion-text);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding-bottom: 15px;\n}\n.tw-content .car-information .information-box .title img {\n  width: 19px;\n  margin-right: 5px;\n}\n.tw-content .car-information .information-box .footer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.tw-content .car-information .information-box .footer .center {\n  flex: 1;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.tw-content .car-information .information-box .footer .center span {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  border-bottom: 1px solid var(--ion-color-light);\n  z-index: 0;\n}\n.tw-content .car-information .information-box .footer .center div {\n  display: inline-block;\n  border: 1px solid var(--ion-color-light);\n  padding: 0 5px;\n  font-size: var(--ion-sm-text);\n  height: 22px;\n  border-radius: 15px;\n  background-color: #fff;\n  position: relative;\n  z-index: 1;\n}\n.tw-content .car-information .information-box .footer .time {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.tw-content .car-information .information-box .footer .time span:first-of-type {\n  font-size: var(--ion-title);\n  font-weight: 600;\n}\n.tw-content .car-information .information-box .footer .time span:last-of-type {\n  font-size: var(--ion-sm-text);\n}\n.tw-content .tmcontent-title {\n  font-size: var(--ion-big-title);\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  text-align: center;\n  margin-top: 30px;\n}\n.tw-content .twjs-box h2 {\n  font-size: var(--ion-title);\n  font-weight: 600;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.tw-content .twjs-box h2 span {\n  width: 5px;\n  height: 5px;\n  background-color: var(--ion-color-secondary);\n  display: inline-block;\n  margin-right: 5px;\n}\n.tw-content .twjs-box p {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n}\n.tw-content .twjs-box div {\n  font-size: var(--ion-text);\n  margin: 20px 0 10px;\n}\n.tw-content .twjs-box div ol {\n  padding: 0;\n}\n.tw-content .twjs-box .fybh-box {\n  list-style: none;\n  color: var(--ion-color-dark) !important;\n  padding: 0;\n}\n.tw-content .gmxz-des {\n  font-size: var(--ion-sm-text);\n  color: var(--ion-color-medium);\n  text-align: center;\n  margin-top: 8px;\n}\nion-footer {\n  background-color: #fff;\n}\nion-footer ion-toolbar {\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n}\nion-footer .footer-content {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: stretch;\n}\nion-footer .footer-content .left {\n  padding: 5px 0;\n  width: 44%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\nion-footer .footer-content .left .box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: var(--ion-tab-sm-text);\n  color: var(--ion-color-medium);\n}\nion-footer .footer-content .left .box img {\n  width: 20px;\n}\nion-footer .footer-content .right {\n  flex: 1;\n  background-color: var(--ion-color-danger);\n  color: #fff;\n  font-size: var(--ion-title);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-footer .footer-content .right:active {\n  background-color: var(--ion-color-danger-tint);\n}\nion-footer .footer-content .right.gray {\n  background-color: var(--ion-color-medium);\n}\nion-footer .footer-content .right-goods {\n  padding-right: 10px;\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  font-size: 11px;\n}\nion-footer .footer-content .right-goods > div {\n  flex: 1;\n  font-size: var(--ion-sm-text);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 26px;\n}\nion-footer .footer-content .right-goods .left {\n  background-color: var(--ion-color-secondary);\n  color: #fff;\n  border-top-left-radius: 13px;\n  border-bottom-left-radius: 13px;\n}\nion-footer .footer-content .right-goods .left:active {\n  background-color: var(--ion-color-secondary-tint);\n}\nion-footer .footer-content .right-goods .right {\n  border-top-right-radius: 13px;\n  border-bottom-right-radius: 13px;\n}\n.klyk {\n  font-size: var(--ion-text);\n  color: var(--ion-color-medium);\n  text-align: center;\n  margin-top: 20px;\n}\nul.tkxz {\n  list-style: none;\n  padding-left: 5px;\n  font-size: var(--ion-text);\n  color: var(--ion-color-dark);\n}\nul.tkxz li {\n  line-height: 18px;\n  margin-bottom: 8px;\n}\n.show-0 {\n  --opacity: 0;\n}\n.show-1 {\n  --opacity: 0.01;\n}\n.show-2 {\n  --opacity: 0.02;\n}\n.show-3 {\n  --opacity: 0.03;\n}\n.show-4 {\n  --opacity: 0.04;\n}\n.show-5 {\n  --opacity: 0.05;\n}\n.show-6 {\n  --opacity: 0.06;\n}\n.show-7 {\n  --opacity: 0.07;\n}\n.show-8 {\n  --opacity: 0.08;\n}\n.show-9 {\n  --opacity: 0.09;\n}\n.show-10 {\n  --opacity: 0.1;\n}\n.show-11 {\n  --opacity: 0.11;\n}\n.show-12 {\n  --opacity: 0.12;\n}\n.show-13 {\n  --opacity: 0.13;\n}\n.show-14 {\n  --opacity: 0.14;\n}\n.show-15 {\n  --opacity: 0.15;\n}\n.show-16 {\n  --opacity: 0.16;\n}\n.show-17 {\n  --opacity: 0.17;\n}\n.show-18 {\n  --opacity: 0.18;\n}\n.show-19 {\n  --opacity: 0.19;\n}\n.show-20 {\n  --opacity: 0.2;\n}\n.show-21 {\n  --opacity: 0.21;\n}\n.show-22 {\n  --opacity: 0.22;\n}\n.show-23 {\n  --opacity: 0.23;\n}\n.show-24 {\n  --opacity: 0.24;\n}\n.show-25 {\n  --opacity: 0.25;\n}\n.show-26 {\n  --opacity: 0.26;\n}\n.show-27 {\n  --opacity: 0.27;\n}\n.show-28 {\n  --opacity: 0.28;\n}\n.show-29 {\n  --opacity: 0.29;\n}\n.show-30 {\n  --opacity: 0.3;\n}\n.show-31 {\n  --opacity: 0.31;\n}\n.show-32 {\n  --opacity: 0.32;\n}\n.show-33 {\n  --opacity: 0.33;\n}\n.show-34 {\n  --opacity: 0.34;\n}\n.show-35 {\n  --opacity: 0.35;\n}\n.show-36 {\n  --opacity: 0.36;\n}\n.show-37 {\n  --opacity: 0.37;\n}\n.show-38 {\n  --opacity: 0.38;\n}\n.show-39 {\n  --opacity: 0.39;\n}\n.show-40 {\n  --opacity: 0.4;\n}\n.show-41 {\n  --opacity: 0.41;\n}\n.show-42 {\n  --opacity: 0.42;\n}\n.show-43 {\n  --opacity: 0.43;\n}\n.show-44 {\n  --opacity: 0.44;\n}\n.show-45 {\n  --opacity: 0.45;\n}\n.show-46 {\n  --opacity: 0.46;\n}\n.show-47 {\n  --opacity: 0.47;\n}\n.show-48 {\n  --opacity: 0.48;\n}\n.show-49 {\n  --opacity: 0.49;\n}\n.show-50 {\n  --opacity: 0.5;\n}\n.show-51 {\n  --opacity: 0.51;\n}\n.show-52 {\n  --opacity: 0.52;\n}\n.show-53 {\n  --opacity: 0.53;\n}\n.show-54 {\n  --opacity: 0.54;\n}\n.show-55 {\n  --opacity: 0.55;\n}\n.show-56 {\n  --opacity: 0.56;\n}\n.show-57 {\n  --opacity: 0.57;\n}\n.show-58 {\n  --opacity: 0.58;\n}\n.show-59 {\n  --opacity: 0.59;\n}\n.show-60 {\n  --opacity: 0.6;\n}\n.show-61 {\n  --opacity: 0.61;\n}\n.show-62 {\n  --opacity: 0.62;\n}\n.show-63 {\n  --opacity: 0.63;\n}\n.show-64 {\n  --opacity: 0.64;\n}\n.show-65 {\n  --opacity: 0.65;\n}\n.show-66 {\n  --opacity: 0.66;\n}\n.show-67 {\n  --opacity: 0.67;\n}\n.show-68 {\n  --opacity: 0.68;\n}\n.show-69 {\n  --opacity: 0.69;\n}\n.show-70 {\n  --opacity: 0.7;\n}\n.show-71 {\n  --opacity: 0.71;\n}\n.show-72 {\n  --opacity: 0.72;\n}\n.show-73 {\n  --opacity: 0.73;\n}\n.show-74 {\n  --opacity: 0.74;\n}\n.show-75 {\n  --opacity: 0.75;\n}\n.show-76 {\n  --opacity: 0.76;\n}\n.show-77 {\n  --opacity: 0.77;\n}\n.show-78 {\n  --opacity: 0.78;\n}\n.show-79 {\n  --opacity: 0.79;\n}\n.show-80 {\n  --opacity: 0.8;\n}\n.show-81 {\n  --opacity: 0.81;\n}\n.show-82 {\n  --opacity: 0.82;\n}\n.show-83 {\n  --opacity: 0.83;\n}\n.show-84 {\n  --opacity: 0.84;\n}\n.show-85 {\n  --opacity: 0.85;\n}\n.show-86 {\n  --opacity: 0.86;\n}\n.show-87 {\n  --opacity: 0.87;\n}\n.show-88 {\n  --opacity: 0.88;\n}\n.show-89 {\n  --opacity: 0.89;\n}\n.show-90 {\n  --opacity: 0.9;\n}\n.show-91 {\n  --opacity: 0.91;\n}\n.show-92 {\n  --opacity: 0.92;\n}\n.show-93 {\n  --opacity: 0.93;\n}\n.show-94 {\n  --opacity: 0.94;\n}\n.show-95 {\n  --opacity: 0.95;\n}\n.show-96 {\n  --opacity: 0.96;\n}\n.show-97 {\n  --opacity: 0.97;\n}\n.show-98 {\n  --opacity: 0.98;\n}\n.show-99 {\n  --opacity: 0.99;\n}\n.show-100 {\n  --opacity: 1;\n}\nion-modal, .modal {\n  --height: 70%;\n}\n.cztc {\n  background-color: #fff;\n  margin-top: 10px;\n}\n.cztc .tcbgimg {\n  border-radius: 5px;\n}\n.cztc .tc-first-box {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: var(--ion-text);\n  line-height: 22px;\n}\n.cztc .tc-first-box > div:first-of-type span {\n  text-decoration: line-through;\n}\n.cztc .tc-first-box .xj {\n  color: var(--ion-color-danger);\n}\n.cztc .tc-first-box .xj span {\n  font-size: var(--ion-title);\n}\n.tw-html-content img {\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ankvRGVza3RvcC9seGovc3JjL2FwcC9wYWdlcy9wcm9kdWN0Y29udGVudC9wcm9kdWN0Y29udGVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3Rjb250ZW50L3Byb2R1Y3Rjb250ZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDR047QURBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0VKO0FEREk7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDR047QURLRTtFQUNFLG9CQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDSEo7QURTQTtFQUNFLDhDQUFBO0FDTkY7QURVQTtFQUNFLFdBQUE7QUNQRjtBRFNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTkY7QURPRTtFQUNFLFdBQUE7QUNMSjtBRE9FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDTEo7QURNSTtFQUNFLE9BQUE7QUNKTjtBRE1JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNKTjtBREtNO0VBQ0UscUJBQUE7RUFDQSwwQkFBQTtBQ0hSO0FESVE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDRlY7QURJUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRlY7QURPSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0xOO0FETU07RUFDRSxnQkFBQTtBQ0pSO0FES1E7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDSFY7QURTQTtFQUVFLDBDQUFBO0VBQ0Esc0JBQUE7QUNQRjtBRFFFO0VBQ0UsZ0NBQUE7QUNOSjtBRFNBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNORjtBRE9FO0VBQ0UsaUJBQUE7QUNMSjtBRFFBO0VBQ0UsZUFBQTtBQ0xGO0FEUUE7RUFDRSxnQkFBQTtBQ0xGO0FETUU7RUFDRSxnQkFBQTtBQ0pKO0FES0k7RUFDRSxrQkFBQTtBQ0hOO0FESU07RUFDRSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNGUjtBREdRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0RWO0FER1E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNEVjtBRGFVO0VBQ0UsZ0JBQUE7QUNYWjtBRFlZO0VBQ0UsaUJBQUE7QUNWZDtBRGtCQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUNmRjtBRGlCSTtFQUNFLGtCQUFBO0FDZk47QURnQk07RUFDRSxhQUFBO0FDZFI7QURnQk07RUFDRSw2QkFBQTtFQUNBLCtCQUFBO0FDZFI7QURtQkE7RUFDRSxnQkFBQTtBQ2hCRjtBRGtCQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ2ZGO0FEaUJJO0VBQ0Usa0JBQUE7QUNmTjtBRGlCSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ2ZOO0FEZ0JNO0VBQ0UsbUJBQUE7QUNkUjtBRG9CRTtFQUNFLGtCQUFBO0FDakJKO0FEbUJFO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQ2pCSjtBRG1CRTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDakJKO0FEb0JBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDakJGO0FEa0NBO0VBQ0UsZUFBQTtFQUNBLHNDQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLHNCQUFBO0VBQ0EsNERBQUE7RUFDQSwrQ0FBQTtBQ2hDRjtBRGlDRTtFQUNFLGFBQUE7QUMvQko7QURnQ0k7RUFDRSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUM5Qk47QUQrQk07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDN0JSO0FEOEJRO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDNUJWO0FEa0NBO0VBQ0Usc0JBQUE7QUMvQkY7QURnQ0U7RUFDRSxhQUFBO0VBQ0EsK0NBQUE7QUM5Qko7QUQrQkk7RUFDRSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUM3Qk47QUQ4Qk07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDNUJSO0FENkJRO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDM0JWO0FEa0NJO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDaENOO0FEa0NJO0VBQ0Usd0NBQUE7RUFHQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQ2hDTjtBRGtDUTtFQUNFLCtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ2hDVjtBRG1DTTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDakNSO0FEa0NRO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDaENWO0FEbUNNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ2pDUjtBRGtDUTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2hDVjtBRGlDVTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QUMvQlo7QURpQ1U7RUFDRSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUMvQlo7QURrQ1E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDaENWO0FEa0NZO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQ2hDZDtBRGtDWTtFQUNFLDZCQUFBO0FDaENkO0FEdUNFO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3JDSjtBRHdDSTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDdENOO0FEdUNNO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNyQ1I7QUR3Q0k7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0FDdENOO0FEd0NJO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQ3RDTjtBRHVDTTtFQUNFLFVBQUE7QUNyQ1I7QUR3Q0k7RUFDRSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0EsVUFBQTtBQ3RDTjtBRDBDRTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUN4Q0o7QUQyQ0E7RUFDRSxzQkFBQTtBQ3hDRjtBRHlDRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDdkNKO0FEeUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ3ZDSjtBRHdDSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ3RDTjtBRHVDTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0FDckNSO0FEc0NRO0VBQ0UsV0FBQTtBQ3BDVjtBRHdDSTtFQUNFLE9BQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdENOO0FEdUNNO0VBQ0UsOENBQUE7QUNyQ1I7QUR1Q007RUFDRSx5Q0FBQTtBQ3JDUjtBRHdDSTtFQUNFLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDdENOO0FEdUNNO0VBQ0UsT0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDckNSO0FEdUNNO0VBQ0UsNENBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQ3JDUjtBRHNDUTtFQUNFLGlEQUFBO0FDcENWO0FEdUNNO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtBQ3JDUjtBRDBDQTtFQUNFLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDdkNGO0FEeUNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUN0Q0Y7QUR1Q0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDckNKO0FEMENFO0VBQWdCLFlBQUE7QUN0Q2xCO0FEc0NFO0VBQWdCLGVBQUE7QUNsQ2xCO0FEa0NFO0VBQWdCLGVBQUE7QUM5QmxCO0FEOEJFO0VBQWdCLGVBQUE7QUMxQmxCO0FEMEJFO0VBQWdCLGVBQUE7QUN0QmxCO0FEc0JFO0VBQWdCLGVBQUE7QUNsQmxCO0FEa0JFO0VBQWdCLGVBQUE7QUNkbEI7QURjRTtFQUFnQixlQUFBO0FDVmxCO0FEVUU7RUFBZ0IsZUFBQTtBQ05sQjtBRE1FO0VBQWdCLGVBQUE7QUNGbEI7QURFRTtFQUFnQixjQUFBO0FDRWxCO0FERkU7RUFBZ0IsZUFBQTtBQ01sQjtBRE5FO0VBQWdCLGVBQUE7QUNVbEI7QURWRTtFQUFnQixlQUFBO0FDY2xCO0FEZEU7RUFBZ0IsZUFBQTtBQ2tCbEI7QURsQkU7RUFBZ0IsZUFBQTtBQ3NCbEI7QUR0QkU7RUFBZ0IsZUFBQTtBQzBCbEI7QUQxQkU7RUFBZ0IsZUFBQTtBQzhCbEI7QUQ5QkU7RUFBZ0IsZUFBQTtBQ2tDbEI7QURsQ0U7RUFBZ0IsZUFBQTtBQ3NDbEI7QUR0Q0U7RUFBZ0IsY0FBQTtBQzBDbEI7QUQxQ0U7RUFBZ0IsZUFBQTtBQzhDbEI7QUQ5Q0U7RUFBZ0IsZUFBQTtBQ2tEbEI7QURsREU7RUFBZ0IsZUFBQTtBQ3NEbEI7QUR0REU7RUFBZ0IsZUFBQTtBQzBEbEI7QUQxREU7RUFBZ0IsZUFBQTtBQzhEbEI7QUQ5REU7RUFBZ0IsZUFBQTtBQ2tFbEI7QURsRUU7RUFBZ0IsZUFBQTtBQ3NFbEI7QUR0RUU7RUFBZ0IsZUFBQTtBQzBFbEI7QUQxRUU7RUFBZ0IsZUFBQTtBQzhFbEI7QUQ5RUU7RUFBZ0IsY0FBQTtBQ2tGbEI7QURsRkU7RUFBZ0IsZUFBQTtBQ3NGbEI7QUR0RkU7RUFBZ0IsZUFBQTtBQzBGbEI7QUQxRkU7RUFBZ0IsZUFBQTtBQzhGbEI7QUQ5RkU7RUFBZ0IsZUFBQTtBQ2tHbEI7QURsR0U7RUFBZ0IsZUFBQTtBQ3NHbEI7QUR0R0U7RUFBZ0IsZUFBQTtBQzBHbEI7QUQxR0U7RUFBZ0IsZUFBQTtBQzhHbEI7QUQ5R0U7RUFBZ0IsZUFBQTtBQ2tIbEI7QURsSEU7RUFBZ0IsZUFBQTtBQ3NIbEI7QUR0SEU7RUFBZ0IsY0FBQTtBQzBIbEI7QUQxSEU7RUFBZ0IsZUFBQTtBQzhIbEI7QUQ5SEU7RUFBZ0IsZUFBQTtBQ2tJbEI7QURsSUU7RUFBZ0IsZUFBQTtBQ3NJbEI7QUR0SUU7RUFBZ0IsZUFBQTtBQzBJbEI7QUQxSUU7RUFBZ0IsZUFBQTtBQzhJbEI7QUQ5SUU7RUFBZ0IsZUFBQTtBQ2tKbEI7QURsSkU7RUFBZ0IsZUFBQTtBQ3NKbEI7QUR0SkU7RUFBZ0IsZUFBQTtBQzBKbEI7QUQxSkU7RUFBZ0IsZUFBQTtBQzhKbEI7QUQ5SkU7RUFBZ0IsY0FBQTtBQ2tLbEI7QURsS0U7RUFBZ0IsZUFBQTtBQ3NLbEI7QUR0S0U7RUFBZ0IsZUFBQTtBQzBLbEI7QUQxS0U7RUFBZ0IsZUFBQTtBQzhLbEI7QUQ5S0U7RUFBZ0IsZUFBQTtBQ2tMbEI7QURsTEU7RUFBZ0IsZUFBQTtBQ3NMbEI7QUR0TEU7RUFBZ0IsZUFBQTtBQzBMbEI7QUQxTEU7RUFBZ0IsZUFBQTtBQzhMbEI7QUQ5TEU7RUFBZ0IsZUFBQTtBQ2tNbEI7QURsTUU7RUFBZ0IsZUFBQTtBQ3NNbEI7QUR0TUU7RUFBZ0IsY0FBQTtBQzBNbEI7QUQxTUU7RUFBZ0IsZUFBQTtBQzhNbEI7QUQ5TUU7RUFBZ0IsZUFBQTtBQ2tObEI7QURsTkU7RUFBZ0IsZUFBQTtBQ3NObEI7QUR0TkU7RUFBZ0IsZUFBQTtBQzBObEI7QUQxTkU7RUFBZ0IsZUFBQTtBQzhObEI7QUQ5TkU7RUFBZ0IsZUFBQTtBQ2tPbEI7QURsT0U7RUFBZ0IsZUFBQTtBQ3NPbEI7QUR0T0U7RUFBZ0IsZUFBQTtBQzBPbEI7QUQxT0U7RUFBZ0IsZUFBQTtBQzhPbEI7QUQ5T0U7RUFBZ0IsY0FBQTtBQ2tQbEI7QURsUEU7RUFBZ0IsZUFBQTtBQ3NQbEI7QUR0UEU7RUFBZ0IsZUFBQTtBQzBQbEI7QUQxUEU7RUFBZ0IsZUFBQTtBQzhQbEI7QUQ5UEU7RUFBZ0IsZUFBQTtBQ2tRbEI7QURsUUU7RUFBZ0IsZUFBQTtBQ3NRbEI7QUR0UUU7RUFBZ0IsZUFBQTtBQzBRbEI7QUQxUUU7RUFBZ0IsZUFBQTtBQzhRbEI7QUQ5UUU7RUFBZ0IsZUFBQTtBQ2tSbEI7QURsUkU7RUFBZ0IsZUFBQTtBQ3NSbEI7QUR0UkU7RUFBZ0IsY0FBQTtBQzBSbEI7QUQxUkU7RUFBZ0IsZUFBQTtBQzhSbEI7QUQ5UkU7RUFBZ0IsZUFBQTtBQ2tTbEI7QURsU0U7RUFBZ0IsZUFBQTtBQ3NTbEI7QUR0U0U7RUFBZ0IsZUFBQTtBQzBTbEI7QUQxU0U7RUFBZ0IsZUFBQTtBQzhTbEI7QUQ5U0U7RUFBZ0IsZUFBQTtBQ2tUbEI7QURsVEU7RUFBZ0IsZUFBQTtBQ3NUbEI7QUR0VEU7RUFBZ0IsZUFBQTtBQzBUbEI7QUQxVEU7RUFBZ0IsZUFBQTtBQzhUbEI7QUQ5VEU7RUFBZ0IsY0FBQTtBQ2tVbEI7QURsVUU7RUFBZ0IsZUFBQTtBQ3NVbEI7QUR0VUU7RUFBZ0IsZUFBQTtBQzBVbEI7QUQxVUU7RUFBZ0IsZUFBQTtBQzhVbEI7QUQ5VUU7RUFBZ0IsZUFBQTtBQ2tWbEI7QURsVkU7RUFBZ0IsZUFBQTtBQ3NWbEI7QUR0VkU7RUFBZ0IsZUFBQTtBQzBWbEI7QUQxVkU7RUFBZ0IsZUFBQTtBQzhWbEI7QUQ5VkU7RUFBZ0IsZUFBQTtBQ2tXbEI7QURsV0U7RUFBZ0IsZUFBQTtBQ3NXbEI7QUR0V0U7RUFBZ0IsWUFBQTtBQzBXbEI7QUR4V0E7RUFDRSxhQUFBO0FDMldGO0FEeldBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQzRXRjtBRDFXRTtFQUdFLGtCQUFBO0FDNFdKO0FEMVdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUMyV0o7QUR6V007RUFDRSw2QkFBQTtBQzJXUjtBRHhXSTtFQUNFLDhCQUFBO0FDMFdOO0FEeldNO0VBQ0UsMkJBQUE7QUMyV1I7QURwV0U7RUFDRSx1QkFBQTtBQ3VXSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3Rjb250ZW50L3Byb2R1Y3Rjb250ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiB2YXIoLS1pb24tc3RhdHVzYmFyLWxlZnQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24taWNvbi1iaWcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICB3aWR0aDogNTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZGl2LnJvdW5kIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICAgIHdpZHRoOiAyMXB4O1xyXG4gICAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC8vaW1nIHtcclxuICAgIC8vICB3aWR0aDogMjJweDtcclxuICAgIC8vICBoZWlnaHQ6IDIycHg7XHJcbiAgICAvLyAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIC8vfVxyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gIH1cclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLy8tLWJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWdyYXktYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgLy90b3A6IC02NXB4O1xyXG59XHJcblxyXG5hcHAtc2VsZXRlYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ueWh0aW1lLWJveCB7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC50ZXh0LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICY+ZGl2IHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICAgIC5sZWZ0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbiAgICAgICAgICAvL21hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgLnRpbWUtYm94IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIHNwYW46bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICBjb2xvcjogIzFEQjlCRDtcclxuICAgICAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50b3Age1xyXG4gIC8vbWFyZ2luLXRvcDogLTQ0cHg7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi10b3ApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2ZmZjtcclxuICB9XHJcbn1cclxuLnRpdGxlLWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICB6LWluZGV4OiAwO1xyXG4gICYudGl0bGUtdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gIH1cclxufVxyXG4ubGluZS1oZWlnaHQge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLmZ3Ym94IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGlvbi1saXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTNweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIC8vICBpb24tbGFiZWwge1xyXG4gICAgICAvLyAgICBzcGFuIHtcclxuICAgICAgLy8gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgLy8gICAgfVxyXG4gICAgICAvLyAgfVxyXG4gICAgICAvL31cclxuICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBhcHAteWhib3gge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50Yy1ib3gsIC55aHBqIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGlvbi1saXN0IHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAucmlnaHQtZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnNob3AtaW5mb3JtYXRpb24ge1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAmLmtiIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5zaG9wLWRlcyB7XHJcbiAgaW9uLWNvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG59XHJcbi5pc3Njcm9sbGNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDo0NHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG4vLy50dy1jb250ZW50MiB7XHJcbi8vICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICB0b3A6IDA7XHJcbi8vICBsZWZ0OiAwO1xyXG4vLyAgd2lkdGg6IDEwMCU7XHJcbi8vICB6LWluZGV4OiAxMDA7XHJcbi8vICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuLy8gIG1hcmdpbi10b3A6IDNweDtcclxuLy8gIHBhZGRpbmctbGVmdDogMDtcclxuLy8gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbi8vICBwYWRkaW5nLWJvdHRvbTogMDtcclxuLy8gIC50aXRsZSB7XHJcbi8vICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbi8vICB9XHJcbi8vfVxyXG4udHctY29udGVudDIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IHZhcigtLWlvbi1wbGF0Zm9ybS1tYXJnaW4taGVpZ2h0KTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIC8vb3BhY2l0eTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgLjQpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICY+LnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAmPi5ib3gge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50dy1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICY+LnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICY+LmJveCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMS41cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNhci1pbmZvcm1hdGlvbiB7XHJcblxyXG4gICAgLmNhci1kZXMge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5pbmZvcm1hdGlvbi1ib3gge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgLmJveCB7XHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRleHQpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAuY2VudGVyIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGltZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudG1jb250ZW50LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLWJpZy10aXRsZSk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIC50d2pzLWJveCB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgICAgbWFyZ2luOiAyMHB4IDAgMTBweDtcclxuICAgICAgb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5meWJoLWJveCB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIC5nbXh6LWRlcyB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcbn1cclxuaW9uLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG4gIC5mb290ZXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgLmxlZnQge1xyXG4gICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgd2lkdGg6IDQ0JTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5ib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRhYi1zbS10ZXh0KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50KTtcclxuICAgICAgfVxyXG4gICAgICAmLmdyYXkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHQtZ29vZHMge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAmPmRpdiB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5sZWZ0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxM3B4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEzcHg7XHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJpZ2h0IHtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTNweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ua2x5ayB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbnVsLnRreHoge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICBsaSB7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG59XHJcbkBmb3IgJGkgZnJvbSAwIHRocm91Z2ggMTAwIHtcclxuICAuc2hvdy0jeyRpfSB7ICAgLS1vcGFjaXR5OiAjeyRpIC8gMTAwfTsgfVxyXG59XHJcbmlvbi1tb2RhbCwgLm1vZGFsICB7XHJcbiAgLS1oZWlnaHQ6IDcwJTtcclxufVxyXG4uY3p0YyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAudGNiZ2ltZyB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICAudGMtZmlyc3QtYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgLy9tYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgJj5kaXY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC54aiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udHctaHRtbC1jb250ZW50IHtcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5zZWFyY2gtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMzZweDtcbn1cbi5zZWFyY2gtYmFyIC5sZWZ0IHtcbiAgd2lkdGg6IHZhcigtLWlvbi1zdGF0dXNiYXItbGVmdCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLWljb24tYmlnKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaC1iYXIgLmxlZnQgaW1nIHtcbiAgd2lkdGg6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc2VhcmNoLWJhciAucmlnaHQge1xuICB3aWR0aDogNTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNlYXJjaC1iYXIgLnJpZ2h0IGRpdi5yb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMjFweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaC1iYXIgLmNlbnRlciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDAgMTVweDtcbiAgaGVpZ2h0OiAyN3B4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWdyYXktYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbmFwcC1zZWxldGVidG4ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnlodGltZS1ib3gge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnlodGltZS1ib3ggaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ueWh0aW1lLWJveCAudGV4dC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi55aHRpbWUtYm94IC50ZXh0LWNvbnRlbnQgPiBkaXYge1xuICBmbGV4OiAxO1xufVxuLnlodGltZS1ib3ggLnRleHQtY29udGVudCAubGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBjb2xvcjogI2ZmZjtcbn1cbi55aHRpbWUtYm94IC50ZXh0LWNvbnRlbnQgLmxlZnQgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG59XG4ueWh0aW1lLWJveCAudGV4dC1jb250ZW50IC5sZWZ0IHNwYW46Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnlodGltZS1ib3ggLnRleHQtY29udGVudCAubGVmdCBzcGFuOmxhc3Qtb2YtdHlwZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcbn1cbi55aHRpbWUtYm94IC50ZXh0LWNvbnRlbnQgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4ueWh0aW1lLWJveCAudGV4dC1jb250ZW50IC5yaWdodCAudGltZS1ib3gge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnlodGltZS1ib3ggLnRleHQtY29udGVudCAucmlnaHQgLnRpbWUtYm94IHNwYW46bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjMURCOUJEO1xuICBtYXJnaW46IDAgM3B4O1xufVxuXG4udG9wIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi10b3ApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnRvcCBpb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmZmY7XG59XG5cbi50aXRsZS1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgei1pbmRleDogMDtcbn1cbi50aXRsZS1ib3gudGl0bGUtdG9wIHtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG59XG5cbi5saW5lLWhlaWdodCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmZ3Ym94IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5md2JveCBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZndib3ggaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG4uZndib3ggaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5md2JveCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5md2JveCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgaW1nIHtcbiAgd2lkdGg6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmZ3Ym94IGlvbi1saXN0IGlvbi1pdGVtOmxhc3Qtb2YtdHlwZSBpb24tbGFiZWwgYXBwLXloYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5md2JveCBpb24tbGlzdCBpb24taXRlbTpsYXN0LW9mLXR5cGUgaW9uLWxhYmVsIGFwcC15aGJveDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi50Yy1ib3gsIC55aHBqIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4udGMtYm94IGlvbi1saXN0IGlvbi1pdGVtLCAueWhwaiBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cbi50Yy1ib3ggaW9uLWxpc3QgaW9uLWl0ZW0gLnJpZ2h0LWRpdiwgLnlocGogaW9uLWxpc3QgaW9uLWl0ZW0gLnJpZ2h0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udGMtYm94IGlvbi1saXN0IGlvbi1pdGVtIHNwYW4sIC55aHBqIGlvbi1saXN0IGlvbi1pdGVtIHNwYW4ge1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc2hvcC1pbmZvcm1hdGlvbiB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5zaG9wLWluZm9ybWF0aW9uIGlvbi1sYWJlbCBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNob3AtaW5mb3JtYXRpb24gaW9uLWxhYmVsIGltZyB7XG4gIHdpZHRoOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5zaG9wLWluZm9ybWF0aW9uIGlvbi1sYWJlbCBpbWcua2Ige1xuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xufVxuXG4uc2hvcC1kZXMgaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaG9wLWRlcyBoMiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zaG9wLWRlcyBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tc20tdGV4dCk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4uaXNzY3JvbGxjb250ZW50IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA0NHB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udHctY29udGVudDIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogdmFyKC0taW9uLXBsYXRmb3JtLW1hcmdpbi1oZWlnaHQpO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjQpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbi50dy1jb250ZW50MiA+IC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udHctY29udGVudDIgPiAudGl0bGUgPiAuYm94IHtcbiAgZmxleDogMTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udHctY29udGVudDIgPiAudGl0bGUgPiAuYm94LmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50dy1jb250ZW50MiA+IC50aXRsZSA+IC5ib3guYWN0aXZlIHNwYW4ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4udHctY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4udHctY29udGVudCA+IC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuLnR3LWNvbnRlbnQgPiAudGl0bGUgPiAuYm94IHtcbiAgZmxleDogMTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udHctY29udGVudCA+IC50aXRsZSA+IC5ib3guYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnR3LWNvbnRlbnQgPiAudGl0bGUgPiAuYm94LmFjdGl2ZSBzcGFuIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAxLjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi50dy1jb250ZW50IC5jYXItaW5mb3JtYXRpb24gLmNhci1kZXMge1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi50dy1jb250ZW50IC5jYXItaW5mb3JtYXRpb24gLmluZm9ybWF0aW9uLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuLnR3LWNvbnRlbnQgLmNhci1pbmZvcm1hdGlvbiAuaW5mb3JtYXRpb24tYm94IC5ib3g6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi50dy1jb250ZW50IC5jYXItaW5mb3JtYXRpb24gLmluZm9ybWF0aW9uLWJveCAudGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi50dy1jb250ZW50IC5jYXItaW5mb3JtYXRpb24gLmluZm9ybWF0aW9uLWJveCAudGl0bGUgaW1nIHtcbiAgd2lkdGg6IDE5cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnR3LWNvbnRlbnQgLmNhci1pbmZvcm1hdGlvbiAuaW5mb3JtYXRpb24tYm94IC5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnR3LWNvbnRlbnQgLmNhci1pbmZvcm1hdGlvbiAuaW5mb3JtYXRpb24tYm94IC5mb290ZXIgLmNlbnRlciB7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnR3LWNvbnRlbnQgLmNhci1pbmZvcm1hdGlvbiAuaW5mb3JtYXRpb24tYm94IC5mb290ZXIgLmNlbnRlciBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHotaW5kZXg6IDA7XG59XG4udHctY29udGVudCAuY2FyLWluZm9ybWF0aW9uIC5pbmZvcm1hdGlvbi1ib3ggLmZvb3RlciAuY2VudGVyIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi50dy1jb250ZW50IC5jYXItaW5mb3JtYXRpb24gLmluZm9ybWF0aW9uLWJveCAuZm9vdGVyIC50aW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udHctY29udGVudCAuY2FyLWluZm9ybWF0aW9uIC5pbmZvcm1hdGlvbi1ib3ggLmZvb3RlciAudGltZSBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICBmb250LXNpemU6IHZhcigtLWlvbi10aXRsZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udHctY29udGVudCAuY2FyLWluZm9ybWF0aW9uIC5pbmZvcm1hdGlvbi1ib3ggLmZvb3RlciAudGltZSBzcGFuOmxhc3Qtb2YtdHlwZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xufVxuLnR3LWNvbnRlbnQgLnRtY29udGVudC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLWJpZy10aXRsZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi50dy1jb250ZW50IC50d2pzLWJveCBoMiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRpdGxlKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnR3LWNvbnRlbnQgLnR3anMtYm94IGgyIHNwYW4ge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4udHctY29udGVudCAudHdqcy1ib3ggcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXNtLXRleHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4udHctY29udGVudCAudHdqcy1ib3ggZGl2IHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIG1hcmdpbjogMjBweCAwIDEwcHg7XG59XG4udHctY29udGVudCAudHdqcy1ib3ggZGl2IG9sIHtcbiAgcGFkZGluZzogMDtcbn1cbi50dy1jb250ZW50IC50d2pzLWJveCAuZnliaC1ib3gge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG4udHctY29udGVudCAuZ214ei1kZXMge1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xufVxuaW9uLWZvb3RlciAuZm9vdGVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuaW9uLWZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLmxlZnQge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgd2lkdGg6IDQ0JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tZm9vdGVyIC5mb290ZXItY29udGVudCAubGVmdCAuYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLXRhYi1zbS10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuaW9uLWZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLmxlZnQgLmJveCBpbWcge1xuICB3aWR0aDogMjBweDtcbn1cbmlvbi1mb290ZXIgLmZvb3Rlci1jb250ZW50IC5yaWdodCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1mb290ZXIgLmZvb3Rlci1jb250ZW50IC5yaWdodDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQpO1xufVxuaW9uLWZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLnJpZ2h0LmdyYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbmlvbi1mb290ZXIgLmZvb3Rlci1jb250ZW50IC5yaWdodC1nb29kcyB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG59XG5pb24tZm9vdGVyIC5mb290ZXItY29udGVudCAucmlnaHQtZ29vZHMgPiBkaXYge1xuICBmbGV4OiAxO1xuICBmb250LXNpemU6IHZhcigtLWlvbi1zbS10ZXh0KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjZweDtcbn1cbmlvbi1mb290ZXIgLmZvb3Rlci1jb250ZW50IC5yaWdodC1nb29kcyAubGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTNweDtcbn1cbmlvbi1mb290ZXIgLmZvb3Rlci1jb250ZW50IC5yaWdodC1nb29kcyAubGVmdDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xufVxuaW9uLWZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLnJpZ2h0LWdvb2RzIC5yaWdodCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxM3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTNweDtcbn1cblxuLmtseWsge1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbnVsLnRreHoge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG51bC50a3h6IGxpIHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnNob3ctMCB7XG4gIC0tb3BhY2l0eTogMDtcbn1cblxuLnNob3ctMSB7XG4gIC0tb3BhY2l0eTogMC4wMTtcbn1cblxuLnNob3ctMiB7XG4gIC0tb3BhY2l0eTogMC4wMjtcbn1cblxuLnNob3ctMyB7XG4gIC0tb3BhY2l0eTogMC4wMztcbn1cblxuLnNob3ctNCB7XG4gIC0tb3BhY2l0eTogMC4wNDtcbn1cblxuLnNob3ctNSB7XG4gIC0tb3BhY2l0eTogMC4wNTtcbn1cblxuLnNob3ctNiB7XG4gIC0tb3BhY2l0eTogMC4wNjtcbn1cblxuLnNob3ctNyB7XG4gIC0tb3BhY2l0eTogMC4wNztcbn1cblxuLnNob3ctOCB7XG4gIC0tb3BhY2l0eTogMC4wODtcbn1cblxuLnNob3ctOSB7XG4gIC0tb3BhY2l0eTogMC4wOTtcbn1cblxuLnNob3ctMTAge1xuICAtLW9wYWNpdHk6IDAuMTtcbn1cblxuLnNob3ctMTEge1xuICAtLW9wYWNpdHk6IDAuMTE7XG59XG5cbi5zaG93LTEyIHtcbiAgLS1vcGFjaXR5OiAwLjEyO1xufVxuXG4uc2hvdy0xMyB7XG4gIC0tb3BhY2l0eTogMC4xMztcbn1cblxuLnNob3ctMTQge1xuICAtLW9wYWNpdHk6IDAuMTQ7XG59XG5cbi5zaG93LTE1IHtcbiAgLS1vcGFjaXR5OiAwLjE1O1xufVxuXG4uc2hvdy0xNiB7XG4gIC0tb3BhY2l0eTogMC4xNjtcbn1cblxuLnNob3ctMTcge1xuICAtLW9wYWNpdHk6IDAuMTc7XG59XG5cbi5zaG93LTE4IHtcbiAgLS1vcGFjaXR5OiAwLjE4O1xufVxuXG4uc2hvdy0xOSB7XG4gIC0tb3BhY2l0eTogMC4xOTtcbn1cblxuLnNob3ctMjAge1xuICAtLW9wYWNpdHk6IDAuMjtcbn1cblxuLnNob3ctMjEge1xuICAtLW9wYWNpdHk6IDAuMjE7XG59XG5cbi5zaG93LTIyIHtcbiAgLS1vcGFjaXR5OiAwLjIyO1xufVxuXG4uc2hvdy0yMyB7XG4gIC0tb3BhY2l0eTogMC4yMztcbn1cblxuLnNob3ctMjQge1xuICAtLW9wYWNpdHk6IDAuMjQ7XG59XG5cbi5zaG93LTI1IHtcbiAgLS1vcGFjaXR5OiAwLjI1O1xufVxuXG4uc2hvdy0yNiB7XG4gIC0tb3BhY2l0eTogMC4yNjtcbn1cblxuLnNob3ctMjcge1xuICAtLW9wYWNpdHk6IDAuMjc7XG59XG5cbi5zaG93LTI4IHtcbiAgLS1vcGFjaXR5OiAwLjI4O1xufVxuXG4uc2hvdy0yOSB7XG4gIC0tb3BhY2l0eTogMC4yOTtcbn1cblxuLnNob3ctMzAge1xuICAtLW9wYWNpdHk6IDAuMztcbn1cblxuLnNob3ctMzEge1xuICAtLW9wYWNpdHk6IDAuMzE7XG59XG5cbi5zaG93LTMyIHtcbiAgLS1vcGFjaXR5OiAwLjMyO1xufVxuXG4uc2hvdy0zMyB7XG4gIC0tb3BhY2l0eTogMC4zMztcbn1cblxuLnNob3ctMzQge1xuICAtLW9wYWNpdHk6IDAuMzQ7XG59XG5cbi5zaG93LTM1IHtcbiAgLS1vcGFjaXR5OiAwLjM1O1xufVxuXG4uc2hvdy0zNiB7XG4gIC0tb3BhY2l0eTogMC4zNjtcbn1cblxuLnNob3ctMzcge1xuICAtLW9wYWNpdHk6IDAuMzc7XG59XG5cbi5zaG93LTM4IHtcbiAgLS1vcGFjaXR5OiAwLjM4O1xufVxuXG4uc2hvdy0zOSB7XG4gIC0tb3BhY2l0eTogMC4zOTtcbn1cblxuLnNob3ctNDAge1xuICAtLW9wYWNpdHk6IDAuNDtcbn1cblxuLnNob3ctNDEge1xuICAtLW9wYWNpdHk6IDAuNDE7XG59XG5cbi5zaG93LTQyIHtcbiAgLS1vcGFjaXR5OiAwLjQyO1xufVxuXG4uc2hvdy00MyB7XG4gIC0tb3BhY2l0eTogMC40Mztcbn1cblxuLnNob3ctNDQge1xuICAtLW9wYWNpdHk6IDAuNDQ7XG59XG5cbi5zaG93LTQ1IHtcbiAgLS1vcGFjaXR5OiAwLjQ1O1xufVxuXG4uc2hvdy00NiB7XG4gIC0tb3BhY2l0eTogMC40Njtcbn1cblxuLnNob3ctNDcge1xuICAtLW9wYWNpdHk6IDAuNDc7XG59XG5cbi5zaG93LTQ4IHtcbiAgLS1vcGFjaXR5OiAwLjQ4O1xufVxuXG4uc2hvdy00OSB7XG4gIC0tb3BhY2l0eTogMC40OTtcbn1cblxuLnNob3ctNTAge1xuICAtLW9wYWNpdHk6IDAuNTtcbn1cblxuLnNob3ctNTEge1xuICAtLW9wYWNpdHk6IDAuNTE7XG59XG5cbi5zaG93LTUyIHtcbiAgLS1vcGFjaXR5OiAwLjUyO1xufVxuXG4uc2hvdy01MyB7XG4gIC0tb3BhY2l0eTogMC41Mztcbn1cblxuLnNob3ctNTQge1xuICAtLW9wYWNpdHk6IDAuNTQ7XG59XG5cbi5zaG93LTU1IHtcbiAgLS1vcGFjaXR5OiAwLjU1O1xufVxuXG4uc2hvdy01NiB7XG4gIC0tb3BhY2l0eTogMC41Njtcbn1cblxuLnNob3ctNTcge1xuICAtLW9wYWNpdHk6IDAuNTc7XG59XG5cbi5zaG93LTU4IHtcbiAgLS1vcGFjaXR5OiAwLjU4O1xufVxuXG4uc2hvdy01OSB7XG4gIC0tb3BhY2l0eTogMC41OTtcbn1cblxuLnNob3ctNjAge1xuICAtLW9wYWNpdHk6IDAuNjtcbn1cblxuLnNob3ctNjEge1xuICAtLW9wYWNpdHk6IDAuNjE7XG59XG5cbi5zaG93LTYyIHtcbiAgLS1vcGFjaXR5OiAwLjYyO1xufVxuXG4uc2hvdy02MyB7XG4gIC0tb3BhY2l0eTogMC42Mztcbn1cblxuLnNob3ctNjQge1xuICAtLW9wYWNpdHk6IDAuNjQ7XG59XG5cbi5zaG93LTY1IHtcbiAgLS1vcGFjaXR5OiAwLjY1O1xufVxuXG4uc2hvdy02NiB7XG4gIC0tb3BhY2l0eTogMC42Njtcbn1cblxuLnNob3ctNjcge1xuICAtLW9wYWNpdHk6IDAuNjc7XG59XG5cbi5zaG93LTY4IHtcbiAgLS1vcGFjaXR5OiAwLjY4O1xufVxuXG4uc2hvdy02OSB7XG4gIC0tb3BhY2l0eTogMC42OTtcbn1cblxuLnNob3ctNzAge1xuICAtLW9wYWNpdHk6IDAuNztcbn1cblxuLnNob3ctNzEge1xuICAtLW9wYWNpdHk6IDAuNzE7XG59XG5cbi5zaG93LTcyIHtcbiAgLS1vcGFjaXR5OiAwLjcyO1xufVxuXG4uc2hvdy03MyB7XG4gIC0tb3BhY2l0eTogMC43Mztcbn1cblxuLnNob3ctNzQge1xuICAtLW9wYWNpdHk6IDAuNzQ7XG59XG5cbi5zaG93LTc1IHtcbiAgLS1vcGFjaXR5OiAwLjc1O1xufVxuXG4uc2hvdy03NiB7XG4gIC0tb3BhY2l0eTogMC43Njtcbn1cblxuLnNob3ctNzcge1xuICAtLW9wYWNpdHk6IDAuNzc7XG59XG5cbi5zaG93LTc4IHtcbiAgLS1vcGFjaXR5OiAwLjc4O1xufVxuXG4uc2hvdy03OSB7XG4gIC0tb3BhY2l0eTogMC43OTtcbn1cblxuLnNob3ctODAge1xuICAtLW9wYWNpdHk6IDAuODtcbn1cblxuLnNob3ctODEge1xuICAtLW9wYWNpdHk6IDAuODE7XG59XG5cbi5zaG93LTgyIHtcbiAgLS1vcGFjaXR5OiAwLjgyO1xufVxuXG4uc2hvdy04MyB7XG4gIC0tb3BhY2l0eTogMC44Mztcbn1cblxuLnNob3ctODQge1xuICAtLW9wYWNpdHk6IDAuODQ7XG59XG5cbi5zaG93LTg1IHtcbiAgLS1vcGFjaXR5OiAwLjg1O1xufVxuXG4uc2hvdy04NiB7XG4gIC0tb3BhY2l0eTogMC44Njtcbn1cblxuLnNob3ctODcge1xuICAtLW9wYWNpdHk6IDAuODc7XG59XG5cbi5zaG93LTg4IHtcbiAgLS1vcGFjaXR5OiAwLjg4O1xufVxuXG4uc2hvdy04OSB7XG4gIC0tb3BhY2l0eTogMC44OTtcbn1cblxuLnNob3ctOTAge1xuICAtLW9wYWNpdHk6IDAuOTtcbn1cblxuLnNob3ctOTEge1xuICAtLW9wYWNpdHk6IDAuOTE7XG59XG5cbi5zaG93LTkyIHtcbiAgLS1vcGFjaXR5OiAwLjkyO1xufVxuXG4uc2hvdy05MyB7XG4gIC0tb3BhY2l0eTogMC45Mztcbn1cblxuLnNob3ctOTQge1xuICAtLW9wYWNpdHk6IDAuOTQ7XG59XG5cbi5zaG93LTk1IHtcbiAgLS1vcGFjaXR5OiAwLjk1O1xufVxuXG4uc2hvdy05NiB7XG4gIC0tb3BhY2l0eTogMC45Njtcbn1cblxuLnNob3ctOTcge1xuICAtLW9wYWNpdHk6IDAuOTc7XG59XG5cbi5zaG93LTk4IHtcbiAgLS1vcGFjaXR5OiAwLjk4O1xufVxuXG4uc2hvdy05OSB7XG4gIC0tb3BhY2l0eTogMC45OTtcbn1cblxuLnNob3ctMTAwIHtcbiAgLS1vcGFjaXR5OiAxO1xufVxuXG5pb24tbW9kYWwsIC5tb2RhbCB7XG4gIC0taGVpZ2h0OiA3MCU7XG59XG5cbi5jenRjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jenRjIC50Y2JnaW1nIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY3p0YyAudGMtZmlyc3QtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IHZhcigtLWlvbi10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG4uY3p0YyAudGMtZmlyc3QtYm94ID4gZGl2OmZpcnN0LW9mLXR5cGUgc3BhbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLmN6dGMgLnRjLWZpcnN0LWJveCAueGoge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG4uY3p0YyAudGMtZmlyc3QtYm94IC54aiBzcGFuIHtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tdGl0bGUpO1xufVxuXG4udHctaHRtbC1jb250ZW50IGltZyB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/productcontent/productcontent.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/productcontent/productcontent.page.ts ***!
  \*************************************************************/
/*! exports provided: ProductcontentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductcontentPage", function() { return ProductcontentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_topage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/topage.service */ "./src/app/services/topage.service.ts");
/* harmony import */ var _services_native_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/native.service */ "./src/app/services/native.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_getproduct_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/getproduct.service */ "./src/app/services/getproduct.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_supplierlist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/supplierlist.service */ "./src/app/services/supplierlist.service.ts");
/* harmony import */ var _components_goodsattr_goodsattr_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/goodsattr/goodsattr.component */ "./src/app/components/goodsattr/goodsattr.component.ts");
/* harmony import */ var _components_goods_contentnav_goods_contentnav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/goods-contentnav/goods-contentnav.component */ "./src/app/components/goods-contentnav/goods-contentnav.component.ts");
/* harmony import */ var _services_lljl_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/lljl.service */ "./src/app/services/lljl.service.ts");
/* harmony import */ var _services_gwc_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/gwc.service */ "./src/app/services/gwc.service.ts");
/* harmony import */ var _services_collelist_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/collelist.service */ "./src/app/services/collelist.service.ts");
/* harmony import */ var _services_xcsclist_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/xcsclist.service */ "./src/app/services/xcsclist.service.ts");
/* harmony import */ var _components_available_bonus_available_bonus_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/available-bonus/available-bonus.component */ "./src/app/components/available-bonus/available-bonus.component.ts");



/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-05 21:01:29
 * @Description: file content
 */






// import {ShopContentService} from "../../services/shop-content.service";

// import { UserService } from '../../services/user.service';







var ProductcontentPage = /** @class */ (function () {
    // mrattrarr: string[]; // 默认选中属性
    // mrseletestr: string;
    function ProductcontentPage(nav, el, route, http, activeroute, sanitizer, getProduct, actionSheetController, supplierlist, modalController, popoverController, lljlfn, gwcfn, collefn, xcxlfn, native, topagefn) {
        this.nav = nav;
        this.el = el;
        this.route = route;
        this.http = http;
        this.activeroute = activeroute;
        this.sanitizer = sanitizer;
        this.getProduct = getProduct;
        this.actionSheetController = actionSheetController;
        this.supplierlist = supplierlist;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.lljlfn = lljlfn;
        this.gwcfn = gwcfn;
        this.collefn = collefn;
        this.xcxlfn = xcxlfn;
        this.native = native;
        this.topagefn = topagefn;
        this.slideOptslv = {
            // slidesOffsetBefore : 50,
            slidesPerView: 3.2,
            slidesPerGroup: 1,
            spaceBetween: 10,
            pagination: ''
            // slidesOffsetAfter : 100,
        };
    }
    ProductcontentPage.prototype.ionViewWillEnter = function () {
        console.log('要进来了');
    };
    ProductcontentPage.prototype.ionViewDidEnter = function () {
        console.log('进来了');
        this.setInit();
    };
    ProductcontentPage.prototype.ngOnInit = function () {
        console.log('准备进来了');
        this.oldId = [];
        this.oldsuppid = [];
        this.slideOpts = {
            slidesPerView: 4.5,
            slidesPerGroup: 1,
            spaceBetween: 5,
            zoom: {
                toggle: false
            }
        };
        this.slideOpts2 = {
            slidesPerView: 4.2,
            slidesPerGroup: 1,
            spaceBetween: 5,
            zoom: {
                toggle: false
            }
        };
        this.cleardate();
    };
    ProductcontentPage.prototype.doRefresh = function (event) {
        this.cleardate();
        var id = this.oldId[this.oldId.length - 1];
        var suppid = this.oldsuppid[this.oldsuppid.length - 1];
        // this.setInit(this.oldId[this.oldId.length - 1], this.oldsuppid[this.oldsuppid.length - 1]);
        this.pageNav = 1;
        this.isshowtopnav = false;
        this.toolbaropacity = '0';
        this.comment = [];
        this.tcxqIndex = 0;
        this.pid = id;
        this.getData(id, true).then(function (res) {
            event.target.complete();
        }).catch(function (err2) {
            event.target.complete();
        });
        this.getComment(id);
        this.suppid = suppid;
        this.getsupplier();
    };
    ProductcontentPage.prototype.setInit = function (id, suppid) {
        var _this = this;
        if (id === void 0) { id = '-1'; }
        if (suppid === void 0) { suppid = '0'; }
        this.toolbaropacity = '0';
        this.comment = [];
        this.tcxqIndex = 0;
        if (id != '-1') {
            this.pid = id;
            this.getData(id);
            this.getComment(id);
            this.suppid = suppid;
            this.getsupplier();
        }
        else {
            this.activeroute.queryParams.subscribe(function (params) {
                var id = params['id'];
                if (_this.oldId.length > 0 && _this.oldId[_this.oldId.length - 1] == id) {
                    return false;
                }
                _this.suppid = params['suppid'] || '-1';
                if (_this.oldsuppid.length > 0 && _this.suppid === '-1') {
                    _this.suppid = _this.oldsuppid[_this.oldsuppid.length - 1];
                }
                _this.pid = id;
                _this.oldId.push(_this.pid);
                _this.getsupplier();
                _this.getData(id);
                _this.getComment(id);
                _this.lljlfn.addjl(id);
            });
        }
        this.pageNav = 1;
        this.isshowtopnav = false;
    };
    ProductcontentPage.prototype.setTccontentindex = function ($event) {
        this.tcxqIndex = $event.id - 1;
    };
    // 获取店铺信息
    ProductcontentPage.prototype.getsupplier = function () {
        var _this = this;
        this.supplierlist.getData(this.suppid, this.pid).then(function (res) {
            if (_this.suppid == '-1') {
                console.log(res);
                _this.suppid = res.suppid;
            }
            _this.supplier = res;
        }).catch(function (err) {
            console.error(err);
        });
    };
    ProductcontentPage.prototype.getData = function (id, isre) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProduct.getProduct(id, isre).then(function (res) {
                            _this.productData = res;
                            if (_this.productData.xsprice.promote_price && _this.productData.xsprice.promote_price !== '0'
                                && _this.productData.xsprice.promote_end_date) {
                                _this.setXstime();
                            }
                        }).catch(function (err) {
                            _this.goBack();
                            // console.error(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    ProductcontentPage.prototype.toKf = function () {
        this.topagefn.toPage(17, this.suppid, this.supplier.shopname, 1);
    };
    ProductcontentPage.prototype.getComment = function (id) {
        var _this = this;
        this.http.getData(this.http.getGoodcomment, { 'goods_id': id }).subscribe(function (res) {
            _this.pingluntags = res['data']['tags'];
            _this.comment = res['data']['comment'];
        }, function (err) { });
    };
    ProductcontentPage.prototype.assembleHTML = function (strHTML) {
        return this.sanitizer.bypassSecurityTrustHtml(strHTML);
    };
    ProductcontentPage.prototype.setTimetc = function ($event) {
        this.getProduct.clickOuttime($event.id);
    };
    ProductcontentPage.prototype.setXstime = function () {
        var _this = this;
        var setTime = setInterval(function () {
            var endDate = _this.productData.xsprice.promote_end_date;
            var nowDate = Date.parse((new Date()).toString());
            var totalSeconds = parseInt(((Number(endDate) - Number(nowDate)) / 1000).toString(), 10);
            var days = Math.floor(totalSeconds / (60 * 60 * 24));
            var modulo = totalSeconds % (60 * 60 * 24);
            var hours = Math.floor(modulo / (60 * 60));
            modulo = modulo % (60 * 60);
            var minutes = Math.floor(modulo / 60);
            var seconds = parseInt((modulo % 60).toString(), 10);
            if (hours >= 10) {
                _this.xsHouse = hours.toString();
            }
            else {
                _this.xsHouse = "0" + hours;
            }
            if (minutes >= 10) {
                _this.xsMin = minutes.toString();
            }
            else {
                _this.xsMin = "0" + minutes;
            }
            if (seconds >= 10) {
                _this.xsSec = seconds.toString();
            }
            else {
                _this.xsSec = "0" + seconds;
            }
            _this.xsday = days.toString();
            if (days === 0 && hours === 0 && minutes === 0 && seconds <= 0) {
                clearInterval(setTime);
            }
        }, 1000);
    };
    ProductcontentPage.prototype.logScrolling = function ($event) {
        var top = $event.detail.scrollTop;
        if (!this.scroolold) {
            this.scroolold = top;
        }
        else {
            if (this.scroolold > 44 && top > 44) {
                this.setShowtopnav(top, this.scroolold);
                this.scroolold = top;
                return false;
            }
            this.scroolold = top;
        }
        var num = 0;
        if (top < 44) {
            num = top * 2 / 100;
        }
        else {
            num = 1;
        }
        this.setNavstatus(num);
    };
    ProductcontentPage.prototype.setShowtopnav = function (nowtop, oldtop) {
        var type = this.pdtop(nowtop, oldtop);
        if (type === -1) {
            return false;
        }
        else if (type === 0) {
            if (this.isshowtopnav) {
                this.isshowtopnav = false;
            }
            return;
        }
        this.pageNav = type;
        if (!this.isshowtopnav) {
            this.isshowtopnav = true;
        }
    };
    ProductcontentPage.prototype.setNavstatus = function (num) {
        this.toolbaropacity = parseInt((num * 100).toString(), 10).toString();
    };
    ProductcontentPage.prototype.goBack = function () {
        // this.location.back();
        if (this.oldId.length > 1) {
            this.nav.back();
            var id = this.oldId.splice(this.oldId.length - 2, 2);
            var suid = this.oldsuppid.splice(this.oldsuppid.length - 2, 2);
            this.cleardate();
            this.setInit(id[0], suid[0]);
        }
        else {
            this.nav.back();
        }
    };
    ProductcontentPage.prototype.presentModal = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data, i, j, item, ii, jj, id, obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_goodsattr_goodsattr_component__WEBPACK_IMPORTED_MODULE_10__["GoodsattrComponent"],
                            cssClass: 'attrModal',
                            componentProps: {
                                // src: this.http.domain + this.productData.goods_thumb,
                                max: this.productData.topData.buymax,
                                gxb: this.productData.gxb,
                                attrlist: this.productData.specification,
                                goodsid: this.pid,
                                type: type,
                                mrattr: this.productData.mrattrarr
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data) {
                            if (data.arr) {
                                this.productData.mrattrarr = data.arr;
                                this.productData.mrseletestr = '';
                                for (i = 0, j = this.productData.specification.length; i < j; i++) {
                                    item = this.productData.specification[i];
                                    for (ii = 0, jj = item.values.length; ii < jj; ii++) {
                                        id = item.values[ii].id;
                                        if (data.arr.includes(id)) {
                                            if (!this.productData.mrseletestr) {
                                                this.productData.mrseletestr = item.name + ':' + item.values[ii]['label'];
                                            }
                                            else {
                                                this.productData.mrseletestr += ',' + item.name + ':' + item.values[ii]['label'];
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                            obj = {
                                quick: 0,
                                spec: data.arr,
                                goods_id: this.pid,
                                number: data.num,
                                parent: 0,
                                isls: data.type - 2
                            };
                            this.http.postformdata(this.http.addgwc, { goods: JSON.stringify(obj) }).subscribe(function (res) {
                                if (res['rec_id'] && data.type === 3) {
                                    _this.route.navigate(['/spgoods-confirmation'], { queryParams: { catid: res['rec_id'] } });
                                }
                                else {
                                    _this.native.presentToast(res.msg || res.message);
                                    _this.gwcfn.getListhttp(1);
                                }
                            }, function (error2) { });
                            // if (data.type === 3) {
                            //   this.route.navigate(['/spgoods-confirmation'], );
                            // }
                            // if (data.type == 2) {
                            //   this.http.postformdata(this.http.addgwc, {goods: JSON.stringify({quick: 0, spec: data.arr, goods_id: this.pid, number: data.num, parent: 0})}).subscribe(res => {}, error2 => {})
                            // }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductcontentPage.prototype.lqbonus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_available_bonus_available_bonus_component__WEBPACK_IMPORTED_MODULE_16__["AvailableBonusComponent"],
                            cssClass: 'attrModal',
                            componentProps: {
                                // src: this.http.domain + this.productData.goods_thumb,
                                list: this.productData.bonusList,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductcontentPage.prototype.ngOnDestroy = function () {
        console.log('销毁');
        if (this.isSetout) {
            clearTimeout(this.isSetout);
            this.isSetout = null;
        }
    };
    ProductcontentPage.prototype.gotoPoint = function (type) {
        // if (!this.isshowtopnav) return false;
        // this.ioncontent.g
        // this.pageNav = type;
        var top = this.getPointtop(type);
        if (type === 1) {
            top -= 44;
        }
        else {
            top -= 110;
        }
        this.content.scrollToPoint(0, top, 300);
    };
    ProductcontentPage.prototype.getPointtop = function (type) {
        var top;
        if (!type) {
            type = this.pageNav;
        }
        if (type === 1) {
            if (this.el.nativeElement.querySelector('.tw-content')) {
                top = this.el.nativeElement.querySelector('.tw-content').offsetTop;
            }
        }
        else if (type === 2) {
            if (this.el.nativeElement.querySelector('.xcxl')) {
                top = this.el.nativeElement.querySelector('.xcxl').offsetTop;
            }
        }
        else if (type === 3) {
            if (this.el.nativeElement.querySelector('.fysm')) {
                top = this.el.nativeElement.querySelector('.fysm').offsetTop;
            }
        }
        else if (type === 4) {
            if (this.el.nativeElement.querySelector('.gmxz')) {
                top = this.el.nativeElement.querySelector('.gmxz').offsetTop;
            }
        }
        return top || 0;
    };
    ProductcontentPage.prototype.pdtop = function (nowtop, oldtop) {
        for (var i = 1; i <= 4; i++) {
            var top_1 = this.getPointtop(i);
            var ntop = this.getPointtop(i + 1);
            ntop -= 120;
            if (i !== 1) {
                top_1 -= 120;
            }
            else {
                top_1 -= 72;
            }
            if (nowtop <= top_1) {
                if (oldtop > top_1) {
                    return 0;
                }
                else if (oldtop <= top_1) {
                    return -1;
                }
            }
            else if (nowtop > top_1 && nowtop <= ntop) {
                return i;
            }
            else if (nowtop > ntop) {
                continue;
            }
        }
        return 4;
    };
    ProductcontentPage.prototype.showfw = function () {
        var arr = [];
        for (var i = 0, j = this.productData.fw.length; i < j; i++) {
            var item = this.productData.fw[i];
            var obj = {
                text: item,
                handler: function () { }
            };
            arr.push(obj);
        }
        this.showMore(arr, '所有服务');
    };
    ProductcontentPage.prototype.showyh = function () {
        var arr = [];
        for (var i = 0, j = this.productData.promotion.length; i < j; i++) {
            var item = this.productData.promotion[i];
            var obj = {
                text: item.act_name,
                handler: function () { }
            };
            arr.push(obj);
        }
        for (var i = 0, j = this.productData.volume_price_list.length; i < j; i++) {
            var item = this.productData.volume_price_list[i];
            var obj = {
                text: '满' + item.number + '件享受' + item.price + '/件',
                handler: function () { }
            };
            arr.push(obj);
        }
        this.showMore(arr, '优惠信息');
    };
    ProductcontentPage.prototype.showMore = function (arr, title) {
        if (arr === void 0) { arr = []; }
        if (title === void 0) { title = '提示'; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: title,
                            mode: 'md',
                            buttons: arr
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
    ProductcontentPage.prototype.openpage = function () {
        if (!this.productData.month || this.productData.month.length == 0 || this.productData.month.length == 0 || this.productData.isdelete == 1) {
            return false;
        }
        // this.nav.navigateForward(['/selete-content'], );
        this.route.navigate(['/selete-content'], { queryParams: { id: this.pid } });
    };
    ProductcontentPage.prototype.opendp = function (type) {
        if (type && this.suppid.toString() === '0') {
            if (this.productData.ishw) {
                this.nav.navigateBack('tabs/tab1');
            }
            else {
                this.nav.navigateBack('tabs/tab3');
            }
        }
        else {
            this.route.navigate(['/sj-index'], { queryParams: { id: this.suppid } });
        }
    };
    ProductcontentPage.prototype.scgoods = function () {
        var _this = this;
        this.http.getData(this.http.addgz, { id: this.pid }).subscribe(function (res) {
            _this.productData.issc = _this.productData.issc === 1 ? 0 : 1;
            if (_this.productData.ishw) {
                _this.xcxlfn.reset();
            }
            else {
                _this.collefn.reset();
            }
        }, function (error2) {
            if (_this.productData.ishw) {
                _this.xcxlfn.reset();
            }
            else {
                _this.collefn.reset();
            }
        });
    };
    /**
     *
     * @param $event
     */
    ProductcontentPage.prototype.optenProduct = function ($event) {
        this.oldsuppid.push(this.suppid);
        var supid;
        for (var _i = 0, _a = this.supplier.best_goods; _i < _a.length; _i++) {
            var item = _a[_i];
            if ($event == item['goods_id']) {
                supid = item['suppid'];
                this.suppid = supid;
                break;
            }
        }
        this.route.navigate(['/productcontent'], { queryParams: { id: $event, suppid: this.suppid } });
        this.cleardate();
        this.setInit($event, this.suppid);
        this.content.scrollToPoint(0, 0, 0);
    };
    ProductcontentPage.prototype.gototc = function () {
        this.route.navigate(['/moreyhtc'], { queryParams: { id: this.pid } });
    };
    /**
     * @Author: wjy-mac
     * @description: 跳转所有评论页面
     * @Date: 2019-11-05 11:38:17
     * @param {type}
     * @return:
     */
    ProductcontentPage.prototype.openAllcomment = function () {
        this.route.navigate(['/comments-list'], { queryParams: { id: this.pid } });
    };
    ProductcontentPage.prototype.toprightmore = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_goods_contentnav_goods_contentnav_component__WEBPACK_IMPORTED_MODULE_11__["GoodsContentnavComponent"],
                            event: ev,
                            mode: 'ios',
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductcontentPage.prototype.cleardate = function () {
        this.scroolold = null;
        this.pageNav = null;
        this.isshowtopnav = null;
        this.xclx = null;
        this.xsHouse = null;
        this.xsMin = null;
        this.xsSec = null;
        this.xsday = null;
        this.twcontent = null;
        this.pinglunnum = null;
        this.pingluntags = null;
        this.pid = null;
        this.comment = null;
        this.tcxqIndex = null;
        this.toolbaropacity = null;
        this.shopName = null;
    };
    ProductcontentPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
        { type: _services_getproduct_service__WEBPACK_IMPORTED_MODULE_7__["GetproductService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _services_supplierlist_service__WEBPACK_IMPORTED_MODULE_9__["SupplierlistService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
        { type: _services_lljl_service__WEBPACK_IMPORTED_MODULE_12__["LljlService"] },
        { type: _services_gwc_service__WEBPACK_IMPORTED_MODULE_13__["GwcService"] },
        { type: _services_collelist_service__WEBPACK_IMPORTED_MODULE_14__["CollelistService"] },
        { type: _services_xcsclist_service__WEBPACK_IMPORTED_MODULE_15__["XcsclistService"] },
        { type: _services_native_service__WEBPACK_IMPORTED_MODULE_2__["NativeService"] },
        { type: _services_topage_service__WEBPACK_IMPORTED_MODULE_1__["TopageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], ProductcontentPage.prototype, "content", void 0);
    ProductcontentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-productcontent',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./productcontent.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productcontent/productcontent.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./productcontent.page.scss */ "./src/app/pages/productcontent/productcontent.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _services_getproduct_service__WEBPACK_IMPORTED_MODULE_7__["GetproductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _services_supplierlist_service__WEBPACK_IMPORTED_MODULE_9__["SupplierlistService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _services_lljl_service__WEBPACK_IMPORTED_MODULE_12__["LljlService"], _services_gwc_service__WEBPACK_IMPORTED_MODULE_13__["GwcService"],
            _services_collelist_service__WEBPACK_IMPORTED_MODULE_14__["CollelistService"], _services_xcsclist_service__WEBPACK_IMPORTED_MODULE_15__["XcsclistService"], _services_native_service__WEBPACK_IMPORTED_MODULE_2__["NativeService"],
            _services_topage_service__WEBPACK_IMPORTED_MODULE_1__["TopageService"]])
    ], ProductcontentPage);
    return ProductcontentPage;
}());



/***/ }),

/***/ "./src/app/timedifference.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/timedifference.pipe.ts ***!
  \****************************************/
/*! exports provided: TimedifferencePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimedifferencePipe", function() { return TimedifferencePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimedifferencePipe = /** @class */ (function () {
    function TimedifferencePipe() {
    }
    TimedifferencePipe.prototype.transform = function (value, args) {
        var _a;
        var start = value.replace(/(^\s*)|(\s*$)/g, "");
        var end = args.replace(/(^\s*)|(\s*$)/g, "");
        if (start.includes('：')) {
            start = start.replace(/：/g, ':');
        }
        if (start.includes('-')) {
            start = start.replace(/-/g, '/');
        }
        if (start.split(':').length - 1 < 2) {
            start += ':00';
        }
        if (end.includes('：')) {
            end = end.replace(/：/g, ':');
        }
        if (end.includes('-')) {
            end = end.replace(/-/g, '/');
        }
        if (end.split(':').length - 1 < 2) {
            end += ':00';
        }
        var now_time = Date.parse(new Date(start).toString()); //当前出发的时间戳
        var end_time = Date.parse(new Date(end).toString()); //指定时间的时间戳
        if (end_time < now_time) {
            _a = [end_time, now_time], now_time = _a[0], end_time = _a[1];
        }
        var time_dis = end_time - now_time;
        var days = Math.floor(time_dis / (24 * 3600 * 1000));
        //计算出小时数
        var leave1 = time_dis % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
        var hours = Math.floor(leave1 / (3600 * 1000));
        //计算相差分钟数
        var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
        var minutes = Math.floor(leave2 / (60 * 1000));
        //计算相差秒数
        // const leave3=leave2%(60*1000);//计算小时数后剩余的毫秒数
        // const second = leave3/1000;
        var time = '';
        if (days) {
            time = days + '天';
        }
        if (hours) {
            time += hours + '小时';
        }
        if (minutes) {
            time += minutes + '分钟';
        }
        return time;
    };
    TimedifferencePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'timedifference'
        })
    ], TimedifferencePipe);
    return TimedifferencePipe;
}());



/***/ })

}]);
//# sourceMappingURL=pages-productcontent-productcontent-module.js.map