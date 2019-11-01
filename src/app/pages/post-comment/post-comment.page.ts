/*
 * @Author: wjy-mac
 * @Date: 2019-11-01 15:49:39
 * @LastEditors: wjy-mac
 * @LastEditTime: 2019-11-01 17:34:23
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
  commentObj: object;
  constructor(private activeroute: ActivatedRoute, private nav: NavController,
    private http: HttpService, private native: NativeService) { }

  ngOnInit() {
    this.commentObj = {
      comment_rank: 5, // 描述
      server: 5, // 服务
      send: 5, // 发货
      shipping: 5, // 物流
      content: '', // 内容
      tags_zi: [], // 自定义标签
      comment_tag: [] // 已选标签
    };
  }
  goBack(): void {
    this.nav.back();
  }
}
