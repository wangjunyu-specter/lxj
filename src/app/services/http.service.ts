/*
 * @Author: wjy-mac
 * @Date: 2019-08-03 14:52:31
 * @LastEditors  : wjy-mac
 * @LastEditTime : 2020-01-03 13:29:38
 * @Description: file content
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { NativeService } from './native.service';
import { UserService } from './user.service';
import { HTTP } from '@ionic-native/http/ngx';
import {error, promise} from 'selenium-webdriver';
import {NavController, AlertController} from "@ionic/angular";
// import * as api from '../mo'


const zdomain = 'https://sc.cdlxj.cn/';
// const toke: string = '15308081024-31785997575345274881558784601TABG';
// const toke: string = '15456456456-76918544985912005121558445163FCAD';
// const userid: string = '60';
// const user_rank: string = '0';
// const userid: string = '16';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public zdomain = zdomain;
  public domain = zdomain + 'mobile/';
  wslink = 'ws://news.cdlxj.cn';
  login = 'user.php?act=signin'; // 登录
  yzpwd = 'user.php?act=yzpwd'; // 验证密码
  shareLink = 'article.php?act=wxshare'; // 分享链接
  sendYzm = 'register.php?act=send_mobile_code'; // 发送验证码 mobile_phone
  resetPwd = 'register.php?act=resetPwd'; // 发送验证码 mobile_phone
  editsurplus = 'user.php?act=act_edit_surplus'; // 余额支付
  acteditpayment = 'user.php?act=act_edit_payment'; // 第三方支付
  acteditpayment2 = 'user.php?act=act_edit_payment_end'; // 获取第三方支付是否成功
  actionacteditpaymentclose = 'user.php?act=act_edit_payment_close'; // 未支付的第三方支付关闭第三方订单
  getusercenter = 'user.php?act=getusercenter'; // 获取个人中心 点赞 关注等数量
  getousercenter = 'user.php?act=getousercenter'; // 获取个人中心 点赞 关注等数量
  editorupdateaddress = 'user.php?act=act_edit_address'; // 编辑添加地址
  getMynews = 'user.php?act=getMynews'; // 获取通知公告
  getMynewslist = 'user.php?act=getMynewslist'; // 获取聊天消息列表
  getMynewscontent = 'user.php?act=getMynewscontent'; // 获取聊天消息详情列表
  setMynews = 'user.php?act=setMynews'; // 设置通知公告已读
  setMynewsList = 'user.php?act=setMynewslist'; // 设置聊天消息已读
  DeleteMynewslist = 'user.php?act=DeleteMynewslist'; // 删除聊天消息
  deleteaddress = 'user.php?act=drop_consignee'; // 删除地址
  register = 'register.php?act=register&register_type=mobile'; // 注册
  getIndex = 'index.php?act=get_index'; // 获取首页数据
  getscIndex = 'index.php?act=get_index_sc'; // 获取商城首页数据
  getarticlecontent = 'index.php?act=getarticle'; // 获取文章详情
  getProductList = 'category.php?act=ajax'; // 获取产品列表
  getlljlList = 'category.php?act=getgoodslist'; // 根据id获取列表  浏览记录
  getProductListbanner = 'category.php?act=ajaxbanner'; // 获取产品列表banner
  getProductListtj = 'category.php?act=categrynavtj'; // 获取产品列表推荐广告
  getGoods = 'goods.php?act=getgoods'; // 获取产品详情
  getsupplier = 'goods.php?act=getgoodssupplier'; // 获取产品店铺
  getGoodcomment = 'goods_comment.php?act=getgcontentc'; // 获取评论
  getGoodcommentList = 'goods_comment.php?act=getcommentslist'; // 获取评论列表
  getProductprice = 'goods.php?act=price'; // 改变属性后获取价格
  getZt = 'topic.php?act=get_zt'; // 获取对应专题 topic_id
  getindexmore = 'index_bestgoods.php?act=ajax'; // 获取首页更多商品
  getsjindexmore = 'goods.php?act=getsuppliertjgoods'; // 获取商家首页推荐商品
  getsjfl = 'supplier_catalog.php?act=dianpufeilieajax'; // 获取商家分类suppId=18
  getsjflgoods = 'supplier.php?go=category&act=getgoods'; // 获取商家分类商品suppId=18,id=91
  getsjsearchgoods = 'supplier.php?go=search'; // 获取商家搜索或所有商品&suppId=1&keywords=
  addgwc = 'flow.php?step=add_to_cart'; // 加入购物车 goods: {"quick":0,"spec":[],"goods_id":277,"number":"1","parent":0}
  addgz = 'user.php?act=collect2'; // 关注商品  user_id, id
  scshop = 'supplier.php?go=other&act=add_guanzhu'; // 收藏店铺 suppId
  removeguanzhu = 'supplier.php?go=other&act=remove_guanzhu'; // 取消收藏店铺 suppId
  qrorder = 'flow.php?step=checkoutapp'; // 确认订单
  getaddress = 'flow.php?step=consignee_list'; // 获取地址
  setMraddress = 'user.php?act=set_address'; // 设置默认地址
  // deleteaddress = 'flow.php?act=deletelxr'; // 删除地址
  getTclist = 'goods.php?act=taocan2'; // 获取优惠套餐 goods_id
  addtc = 'flow.php?step=add_package_to_cart'; // 购买套餐 package_info{package_id，number}
  changebonus = 'flow.php?step=change_bonus'; // 使用红包 bonus suppid sel_cartgoods
  setbonussn = 'flow.php?step=validate_bonus'; // 使用线下红包bonus_sn=1232223&suppid=6'
  changesurplus = 'flow.php?step=change_surplus'; // 使用余额surplus=40
  updateGwc = 'flow.php?step=update_group_cart'; // 更新购物车
  yzpaypwd = 'flow.php?step=yzpaypwd'; // 验证支付密码是否正确
  selcart = 'flow.php?act=selcart'; // 购物车选择商品
  deletegoods = 'flow.php?step=drop_goods'; // 删除购物车商品
  getgwc = 'flow.php?'; // 购物车
  checksurplus = 'flow.php?step=check_surplus'; // 验证余额是否大于订单金额
  getpaymentlist = 'flow.php?step=get_payment_list'; // 获取支付方式
  scorder = 'flow.php?step=done'; // 生成订单
  orderlist = 'user.php?act=ajax_order_list'; // 获得订单列表 composite_status: -1全部 100待付款 101待发货 105待收货 102待评价 last 0 amount 10
  updategwcattr = 'flow.php?is_ajax=1&step=edit_cart_goods'; // 更新购物车属性 rec_id=807&goods_id=291&attr=340&number=1
  getBounus = 'user.php?act=bonus'; // 获取红包
  collectionlist = 'user.php?act=collection_list'; // 我的收藏商品
  followshop = 'user.php?act=follow_shop'; // 我的收藏店铺
  delfollow = 'user.php?act=del_follow'; // 删除收藏店铺
  delfollowgoods = 'user.php?act=del_attention'; // 删除收藏商品
  getfollowpqlist = 'article.php?act=getfollowlist'; // 获取关注票圈列表
  getfollowlistuser = 'article.php?act=getfollowlistuser'; // 获取关注列表
  getpllist = 'article.php?act=getpllist'; // 获取评论
  getpchildllist = 'article.php?act=getpchildllist'; // 获取子评论
  getpqlist = 'article.php?act=getpqlist'; // 获取票圈等列表
  fbpqitem = 'article.php?act=insetItem'; // 发布游记等
  deletepqitem = 'article.php?act=deleteitem'; // 删除票圈游记等
  setdz = 'article.php?act=setdz'; // 点赞
  setpl = 'article.php?act=setpl'; // 评论
  delpl = 'article.php?act=delpl'; // 删除评论
  setgz = 'article.php?act=setgz'; // 设置关注
  getReadnum = 'article.php?act=getReadnum'; // 获取已读数量
  getpqlistsearch = 'article.php?act=getpqlistsearch'; // 获取搜索
  updateimg = 'article.php?act=updateimg'; // 上传图片
  shupdateimg = 'includes/kindeditor/php/upload_json.php?dir=image'; // 售后上传图片
  setyepay = 'security.php?act=do_payment_password_reset'; // 设置余额支付密码  开启余额支付
  // updatevideo = 'article.php?act=updatevideo'; // 上传视频
  getcity = 'region.php?'; // 设置关注parent=0 type=2
  orderDetail = 'user.php?act=order_detail'; // 获取订单详情&order_id=206
  cancelOrder = 'user.php?act=cancel_order'; // 取消订单&order_id=219
  getGoodsTag = 'user.php?act=getGoods_tag'; // 获取商品评论标签&order_id=219
  cancelOrderxc = 'user.php?act=cancel_order_xc'; // 取消行程&order_id=219
  getGzlist = 'user.php?act=getGzlist'; // 获取关注的人
  editprofile = 'user.php?act=act_edit_profile'; // 修改用户资料
  // getFslist = 'user.php?act=getFslist'; // 获取粉丝列表 无用
  goodsSearch = 'search4.php?'; // 搜索
  tipword = 'ajax_www_68ecshop_com.php?act=tipword'; // 搜索 关键字
  getbonus = 'user.php?act=adduser_bonus'; // 领取优惠券 ', 'id=' + type_id + '&no_have=' + no_have
  getZtlist = 'topic.php?act=get_ztlist'; // 获取专题列表
  getZtlistbanner = 'topic.php?act=get_ztlist_banner'; // 获取专题列表banner
  okgoods = 'api/okgoods.php'; // 确认订单
  backorderact = 'user.php?act=back_order_act'; // 退货退款
  backList = 'user.php?act=back_list_ajax'; // 退货退款列表
  delbackorder = 'user.php?act=del_back_order_ajax'; // 取消退货退款申请
  backorderdetail = 'user.php?act=back_order_detail_ajax'; // 退货退款详情
  backorderdetailedit = 'user.php?act=back_order_detail_edit_ajax'; // 退货退款详情
  affirmReceived = 'user.php?act=affirm_received'; // 确认收货 order_id=457
  commentSend = 'user.php?act=comment_send'; // 发送评论


  user: any;
  // changebonus = 'flow.php?step=select_shipping'; // 使用红包 bonus suppid sel_cartgoods
  constructor(private http: HttpClient, private nhttp: HTTP, private nativeService: NativeService,
              private userfn: UserService, private nav: NavController, public alertController: AlertController) { }

  postformdata(url, params = {}): Observable<any> {
    return Observable.create((observer) => {
      let newparams;
      if (this.nativeService.ismobile()) {
        newparams = params;
      } else {
        newparams = this.paramFormat(params);
      }
      this.postdata(url, newparams, 1).subscribe(res => {
        observer.next(res);
      }, err => {
        observer.error(err);
      });
    });
  }
  postdataloading(url, params = {}): Observable<any> {
    this.nativeService.showLoading();
    return Observable.create((observer) => {
      this.postdata(url, params, 1).subscribe(res => {
        observer.next(res);
      }, err => {
        observer.error(err);
      });
    });
  }
  postdata(url, params, type?): Observable<any> {
    return Observable.create((observer) => {
      this.setHeard(url).then(httpOptions => {
        if (this.nativeService.ismobile()) {
          if (type === 1) {
            this.nhttp.setDataSerializer('urlencoded');
          } else {
            this.nhttp.setDataSerializer('json');
          }
          this.nhttp.post(httpOptions.url, params, httpOptions.header).then(res => {
            const obj = JSON.parse(res.data);
            // alert(obj);
            // alert(JSON.parse(obj))
            const bool = this.setResfn(obj);
            if (bool) {
              observer.next(obj);
            } else {
              observer.error(obj);
            }
          }).catch(err => {
            console.error(err);
            // alert(err);
            // alert(JSON.stringify(err))
            this.requestFailed(httpOptions.url, err);
            observer.error(err);
          });
        } else {
          this.http.post(httpOptions.url, params, httpOptions.header).subscribe(res => {
            const bool = this.setResfn(res);
            if (bool) {
              observer.next(res);
            } else {
              observer.error(res);
            }
          }, err => {
            console.error(err);
            this.requestFailed(httpOptions.url, err);
            observer.error(err);
          });
        }
      });
    });
  }
  postformdataloading(url, params): Observable<any> {
    return Observable.create((observer) => {
      this.nativeService.showLoading();
      this.postformdata(url, params).subscribe(res => {
        this.nativeService.hideLoading();
        observer.next(res);
      }, err => {
        this.nativeService.hideLoading();
        console.error(err);
        observer.error(err);
      });
    });
  }
  getpostformdata(url, getparams, params?): Observable<any> {
    return Observable.create((observer) => {
      for (const key in getparams) {
        url += '&' + key + '=' + getparams[key];
      }
      // url = this.domain + url;
      this.postformdata(url, params).subscribe(res => {
        observer.next(res);
      }, err => {
        console.error(err);
        observer.error(err);
      });
    });
  }
  getpostformdataloading(url, getparams, params): Observable<any> {
    return Observable.create((observer) => {
      this.nativeService.showLoading();
      this.getpostformdata(url, getparams, params).subscribe(res => {
        this.nativeService.hideLoading();
        observer.next(res);
      }, err => {
        console.error(err);
        this.nativeService.hideLoading();
        observer.error(err);
      });
    });
  }
  getData(url, params?, type?): Observable<any> {
    if (params) {
      for (const key in params) {
        url += '&' + key + '=' + params[key];
      }
    }
    return Observable.create((observer) => {
      this.setHeard(url).then(httpOptions => {
        if (this.nativeService.ismobile()) {
          if (type === 1) {
            this.nhttp.setDataSerializer('urlencoded');
          } else {
            this.nhttp.setDataSerializer('json');
          }
          this.nhttp.get(httpOptions.url, {}, httpOptions.header).then(res => {
            // alert(1)
            // alert(res);
            // alert(JSON.stringify(res))
            const obj = JSON.parse(res.data);

            const bool = this.setResfn(obj);
            if (bool) {
              observer.next(obj);
            } else {
              observer.error(obj);
            }
          }).catch(err => {
            // alert(err)
            // alert(JSON.stringify(err))
            console.error(err);
            this.requestFailed(httpOptions.url, err);
            observer.error(err);
          });
        } else {
          this.http.get(httpOptions.url, httpOptions.header).subscribe(res => {
            const bool = this.setResfn(res);
            if (bool) {
              observer.next(res);
            } else {
              observer.error(res);
            }
          }, err => {
            console.error(err);
            this.requestFailed(httpOptions.url, err);
            observer.error(err);
          });
        }
      });
    });
  }
  getDataloading(url, params?): Observable<any> {
    this.nativeService.showLoading();
    return Observable.create((observer) => {
      this.getData(url, params || '', 1).subscribe(res => {
        this.nativeService.hideLoading();
        observer.next(res);
      }, error1 => {
        this.nativeService.hideLoading();
        observer.error(error1);
      });
    });
  }
  async setHeard(url) {
    let user: any;
    if (!this.user) {
      try {
        this.user = await this.userfn.getUser();
        user = this.user;
      } catch (e) {
        console.error(e);
        user = {};
      }
    } else {
      user = this.user;
    }
    console.log(user);
    const ze = /^(HTTP)/i;
    if (!ze.test(url)) {
      url = this.domain + url;
    }
    url += '&user_id=' + user['user_id'];
    const uuid = this.nativeService.getUuid();
    if (uuid) {
      url += '&uuid=' + uuid;
    }
    const address = this.userfn.getLocation3();
    if (address.country) {
      let url2 = ('&country=' + address.country + '&province=' + address.province +
      '&city=' + address.city + '&lat=' + address.lat + '&lng=' + address.lng);
      url += encodeURI(url2);
    }
    let header: any;
    if (user.token) {
      if (this.nativeService.ismobile()) {
        header = this.nhttp.setHeader('*', 'token', user.token || '');
      } else {
        header = {
          headers: new HttpHeaders({ token: user.token || '' })
        };
      }
    }
    return {
      url,
      header
    };
  }
  // async getToken() {
  //   return new Promise((resolve, reject) => {
  //     this.userfn.getUser().then(res => {
  //       resolve(res);
  //     }).catch(() => {
  //       reject({});
  //     });
  //   });
  // }
  setResfn(res) {
      if (res && res.status === 1) {
        return true;
      } else if (res && res.status === 2) {
          this.nativeService.presentToast(res.msg || res.message);
          return true;
      } else if (res && res.status === 3) {
        // this.nativeService.presentToast('登录失效，请重新登录!');
        // this.logints();
        this.nativeService.resetlogin();
        return false;
      } else {
        const msg = res ? (res.msg || res.message) : '响应错误';
        this.requestFailed('', '',  msg);
        return false;
      }
      // return true;
  }
// 序列化参数
  paramFormat(data: any): string {
    const obj: any = new FormData();
    Object.keys(data).map(key => {
      if (!data[key] && data[key] != 0) {
        return false;
      }
      obj.append(key, data[key]);
    });
    return obj;
  }
  async logints() {
    const alert = await this.alertController.create({
      header: '提示!',
      message: '需要先登录哦!!!',
      buttons: [
        {
          text: '随便看看',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '去登录',
          handler: () => {
            console.log('Confirm Okay');
            this.nav.navigateRoot('/login');
          }
        }
      ]
    });

    await alert.present();
  }
  private requestFailed(url: string, err, rmsg ?: string) {
    this.nativeService.hideLoading();
    let msg = '';
    if (!err) {
      msg += rmsg;
    } else {
      // alert(err)
      // alert(JSON.stringify(err))
      const status = err.status;
      if (!this.nativeService.isConnecting()) {
      // if (false) {
        msg += '请求失败，请连接网络';
      } else {
        if (status === 0) {
          msg += '请求失败，请求响应出错';
        } else if (status === 404) {
          msg += '请求失败，未找到请求地址';
        } else if (status === 500) {
          msg += '请求失败，服务器出错，请稍后再试';
        } else {
          // alert(url)
          msg += '请求发生异常';
        }
      }
    }

    this.nativeService.presentToast(msg);
    // this.alertCtrl.create({
    //   title: msg,
    //   subTitle: status,
    //   buttons: [{text: '确定'}]
    // }).present();
  }
  clearUser() {
    this.user = null;
  }
}
