/*
 * @Author: wjy-mac
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-12-03 10:58:00
 * @Description: file content
 */
var exec = require('cordova/exec');

exports.payment = function(payInfo, success, error) {
    exec(success, error, "alipay", "payment", [payInfo]);
};
