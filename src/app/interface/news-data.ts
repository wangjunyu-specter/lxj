/*
 * @Author: wjy-mac
 * @Date: 2019-11-07 16:25:09
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-07 17:06:29
 * @Description: 及时消息类型
 */
export interface NewsData {
  type: number; // 1表示 文字消息 2 图片
  content: string; // 消息内容
  time: number; // 发送时间
  uid: string; // 发送方id
  tid?: string | number; // 目标id
  header?: string; // 头像
  name: string;
  shopId?: string; // 店铺id
  shopName?: string; // 店铺名
}
