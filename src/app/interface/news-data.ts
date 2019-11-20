/*
 * @Author: wjy-mac
 * @Date: 2019-11-07 16:25:09
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-14 20:50:12
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

//由邮件系统修改过来
export interface TzData {
  id: string;
  email: string; // uid
  template_id: string;
  email_content: string; // 内容
  title: string; // 标题
  error: string;
  pri: string; // 重要度
  last_send: string; // 发送时间
  supplier_id: string;
  isread: string; // 是否已读 0 未读 1已读
}