/*
 * @Author: wjy-mac
 * @Date: 2019-11-01 15:49:39
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-04 23:48:37
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { NativeService } from 'src/app/services/native.service';
import { OrderlistService } from 'src/app/services/orderlist.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.page.html',
  styleUrls: ['./post-comment.page.scss'],
})
export class PostCommentPage implements OnInit {
  imglist: number[]; // 平分图标循环，只是为了要一个5个值得数组
  pflist: any[]; // 平分对象列表
  newbq: string;
  orderId: string; // 订单id
  goodsObjarr: object[]; // 评论商品对象列表
  isNm: boolean; // 是否匿名
  orderSn: string;
  constructor(private activeroute: ActivatedRoute, private nav: NavController,
    private http: HttpService, private native: NativeService, private orderlist: OrderlistService) { }

  ngOnInit() {
    this.pflist = [{name: '服务', val: 5, key: 'server'},
                    {name: '发货', val: 5, key: 'send'},
                    {name: '物流', val: 5, key: 'shipping'}];
                    // {name: '描述', val: 5, key: 'comment_rank'},
    this.imglist = [1, 1, 1, 1, 1];
    this.isNm = false;
  }
  ionViewWillEnter() {
    console.log('进入2')
    const params = this.activeroute.snapshot.queryParams;
    this.orderId = params['id'];
    this.getBq();
  }
  getBq() {
    this.goodsObjarr = [];
    this.http.getData(this.http.getGoodsTag, {order_id: this.orderId}).subscribe(res => {
      console.log(res);
      this.orderSn = res['order_sn'];
      if (res['data'] && res['data'].length > 0) {
        res['data'].map(data => {
          let obj = {
            content: '', // 内容
            tags_zi: [], // 自定义标签
            comment_tag: [], // 已选标签
            comment_rank: 5 // 描述分
          };
          obj = Object.assign(obj, data);
          this.goodsObjarr.push(obj);
        });
      }
    }, err2 => {
      this.goBack();
    });
  }
  /**
   * @Author: wjy-mac
   * @description: 设置商品分数
   * @Date: 2019-11-04 17:49:18
   * @param {type} item 商品对象
   * @param {type} val 分数
   * @return: 
   */  
  setitemPf(item: object, val: number) {
    item['comment_rank'] = val;
  }
  /**
   * @Author: wjy-mac
   * @description: 删除单个自定义标签
   * @Date: 2019-11-04 15:51:25
   * @param {type} index 删除序号
   * @param {type} item 操作数组对象
   * @return: 
   */  
  removeBq(index: number, item: string[]) {
    item['tags_zi'].splice(index, 1);
  }
  /**
   * @Author: wjy-mac
   * @description: 设置平分
   * @Date: 2019-11-04 15:08:47
   * @param {type} index 位置，pflist的第几个数据
   * @param {type} val 分数
   * @return: 
   */
  setPf(index: number, val: number) {
    this.pflist[index].val = val;
  }
  /**
   * @Author: wjy-mac
   * @description: 添加标签
   * @Date: 2019-11-04 15:40:48
   * @param {type} item 操作对象数据
   * @return: 
   */  
  addBq(item) {
    console.log(item);
    item['tags_zi'].push(item.newbq);
    item.newbq = '';
  }
  /**
   * @Author: wjy-mac
   * @description: 设置已有标签的选中
   * @Date: 2019-11-04 22:06:47
   * @param {type} item 商品对象
   * @param {type} i 第几个标签
   * @return: 
   */  
  setChangebq(item: object, i: number) {
    let bool: boolean = true;
    if (item['tags'][i].active) {
      item['tags'][i].active = false;
      bool = false;
    } else {
      item['tags'][i].active = true;
    }
    const id = item['tags'][i]['tag_id'];
    if (bool) {
      item['comment_tag'].push(id);
    } else {
      for (let index = 0; index < item['comment_tag'].length; index++) {
        if (item['comment_tag'][index] == id) {
          item['comment_tag'].splice(index, 1);
          break;
        }
      }
    }
  }
  goBack(): void {
    this.nav.back();
  }
  sub() {
    // const obj = Object.assign({}, this.commentObj);
    const obj = {};
    this.pflist.map(item => {
      obj[item.key] = item.val;
    });
    obj['pjarr'] = JSON.stringify(Array.from(this.goodsObjarr));
    obj['o_id'] = this.orderId;
    console.log(this.isNm)
    if (this.isNm) {
      obj['hide_username'] = 1;
    }
    console.log(obj);
    // if (obj['comment_tag'].length > 0) {
    //   obj['comment_tag'] = obj['comment_tag'].join(',');
    // }
    // console.log(obj);
    this.http.postformdataloading(this.http.commentSend, obj).subscribe(res => {
      console.log(res);
      this.native.presentToast(res.msg);
      this.orderlist.setOrderispj(this.orderId, this.orderSn);
      this.goBack();
    }, err2 => {

    });
  }
}
