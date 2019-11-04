/*
 * @Author: wjy-mac
 * @Date: 2019-11-01 15:49:39
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-04 17:54:45
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { NativeService } from 'src/app/services/native.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.page.html',
  styleUrls: ['./post-comment.page.scss'],
})
export class PostCommentPage implements OnInit {
  // commentObj: object;
  imglist: number[]; // 平分图标循环，只是为了要一个5个值得数组
  pflist: any[]; // 平分对象列表
  newbq: string;
  orderId: string; // 订单id
  goodsObjarr: object[]; // 评论商品对象列表
  msdx: object
  constructor(private activeroute: ActivatedRoute, private nav: NavController,
    private http: HttpService, private native: NativeService) { }

  ngOnInit() {
    this.pflist = [{name: '服务', val: 5, key: 'server'},
                    {name: '发货', val: 5, key: 'send'},
                    {name: '物流', val: 5, key: 'shipping'}];
                    // {name: '描述', val: 5, key: 'comment_rank'},
    this.imglist = [1, 1, 1, 1, 1];
    // this.commentObj = {
    //   content: '', // 内容
    //   tags_zi: [], // 自定义标签
    //   comment_tag: [23, 22] // 已选标签
    // };
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
  goBack(): void {
    this.nav.back();
  }
  sub() {
    // const obj = Object.assign({}, this.commentObj);
    // this.pflist.map(item => {
    //   obj[item.key] = item.val;
    // });
    // if (obj['comment_tag'].length > 0) {
    //   obj['comment_tag'] = obj['comment_tag'].join(',');
    // }
    // console.log(obj);
  }
}
