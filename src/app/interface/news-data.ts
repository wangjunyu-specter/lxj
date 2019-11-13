/*
 * @Author: wjy-mac
 * @Date: 2019-11-07 16:25:09
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-13 15:53:10
 * @Description: 即时消息类型
 */

export interface NewsData {
  type: number; // 1表示 文字消息 2 图片
  content: string; // 消息内容
  time: number; // 发送时间
  uid: string; // 发送方id
  tid: string | number; // 目标id
  uheader: string; // 发消息者头像
  theader: string; // 目标人员头像
  uname: string; // 发消息者名字
  tname: string; // 目标人员名字
  shopId: string; // 店铺id
  shopName: string; // 店铺名
  wd: number; // 1已读 -1未读
  kftype?: number; // 1售前 2售后 0客服
  isyh?: number; // 1 表示用户
}
