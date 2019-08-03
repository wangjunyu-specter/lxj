import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../../services/http.service';
import {NativeService} from "../../services/native.service";
import { PlitemclickService } from '../../services/plitemclick.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-pllist',
  templateUrl: './pllist.component.html',
  styleUrls: ['./pllist.component.scss'],
})
export class PllistComponent implements OnInit {
  @Input() data: any;
  @Input() tid: string;
  @Input() uid: string;
  @Output() setItem = new EventEmitter();
  pageobj: object;
  isall: boolean;
  ishttp: Set<string>;

  constructor(public http: HttpService, private native: NativeService, private itemclickfn: PlitemclickService,
              private route: Router) { }

  ngOnInit() {
    this.ishttp = new Set();
    this.isall = false;
    if (!this.data) {
      this.data = {};
    }
    this.pageobj = {
      page: 1,
      num: 10
    };
  }
  seleteItem(item) {
    console.log(item)
    this.setItem.emit(item);
    this.itemclickfn.Source.emit(1);
  }
  geitmore() {
    if (this.isall) {
      return false;
    }
    const obj = Object.assign({tid: this.tid, pid: this.data.id}, this.pageobj);
    this.http.getData(this.http.getpchildllist, obj).subscribe(res => {
      console.log(res);
      this.data.chrild.push(...res.result);
      if (res.result.length < this.pageobj['num']) {
        this.isall = true;
      } else {
        this.pageobj['page']++;
      }
    }, err => {
      console.log(err);
    });
  }
  setdz(item) {
    console.log(item)
    if (this.ishttp.has(item.id)) {
      this.native.presentToast('请稍后再试!');
      return false;
    }
    this.ishttp.add(item.id);
    let isqx: number;
    if (item.isdz == 0) {
      isqx = 0;
    } else {
      isqx = 1;
    }
    const obj = {
      touid: item.touid,
      tid: this.tid,
      istop: 2,
      isqx,
      plid: item.id
    }
    this.http.getData(this.http.setdz, obj).subscribe(res => {
      this.ishttp.delete(item.id);
      if (isqx == 1) {
        item.isdz = 0;
        item.dznum--;
      } else {
        item.isdz = 1;
        item.dznum++;
      }
      // item.dznum = res.result.dznum;
      // if (item.heads.length === 5 && item.dznum < 5) {
      //   item.heads = item.heads.splice(0, item.dznum);
      // }
      // this.setdatadz(item, isqx, res.result.dznum);
      // this.setopydata(item.id, isqx, res.result.dznum);
    }, error2 => {
      this.ishttp.delete(item.id);
    });
  }
  goperson(id) {
    console.log(id)
    this.route.navigate(['/myrelease'], {queryParams: {userid: id}});
  }
}
