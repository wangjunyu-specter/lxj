import { Injectable } from '@angular/core';
import { MediaFile } from '@ionic-native/media-capture/ngx';
import {File} from '@ionic-native/file/ngx';
// import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class SeleteMediaService {
  private data: MediaFile;
  private list: string[];
  private cdflist: any[];
  constructor(private file: File) {
    this.list = [];
    this.cdflist = [];
  }
  setData(data: MediaFile) {
    // data.fullPath = data.fullPath.replace(/^file:\/\//, '');
    // this.data.push(data);
    this.data = data;
    this.addImg(data.fullPath);

  }
  getcdfList(): string[] {
    return this.cdflist;
  }
  getList(): string[] {
    return this.list;
  }
  addImg(path) {
    this.list.push(path);
    // this.file.resolveLocalFilesystemUrl(path).then(res => {
    //   this.cdflist.push(res.toInternalURL());
    // }, err => {
    //
    // }).catch(err => {});
  }
  getData(): MediaFile {
    return this.data;
  }
  removeOne(index: number) {
    // this.data.splice(index, 1);
    this.list.splice(index, 1);
  }
  clear() {
    this.list.length = 0;
    this.data = null;
    this.cdflist.length = 0;
  }
}
