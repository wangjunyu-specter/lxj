import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {EmojiishowService} from "../../services/emojiishow.service";
import {NativeService} from "../../services/native.service";
import {PlitemclickService} from "../../services/plitemclick.service";

@Component({
  selector: 'app-chatinputbox',
  templateUrl: './chatinputbox.component.html',
  styleUrls: ['./chatinputbox.component.scss'],
})
export class ChatinputboxComponent implements OnInit {
  setHeight: object;
  // isemoji: boolean;
  formdata: any;
  @Input() username: string;
  @Output() myfous = new EventEmitter();
  @Output() mybulr = new EventEmitter();
  @Output() sub = new EventEmitter();
  isandroid: boolean;
  @ViewChild('myInput') myInput: any;
  // heightStatus: string;
  keyboardH: number;
  constructor(private emojiishow: EmojiishowService, private native: NativeService, private itemclickfn: PlitemclickService) { }

  ngOnInit() {
    // this.heightStatus = 'close';
    this.inputhy();
    this.isandroid = this.native.isandroid();
    window.addEventListener('keyboardWillShow', (event: any) => {
      // Describe your logic which will be run each time when keyboard is about to be shown.
      this.keyboardH = event.keyboardHeight;
      // this.keyboardH = 0;
      // this.emojiishow.setIsshow(2);
      // this.heightStatus = 'show';
    });
    window.addEventListener('keyboardWillHide', (event: any) => {
      // Describe your logic which will be run each time when keyboard is about to be shown.
      if (!this.emojiishow.getIsshows()) {
        this.keyboardH = 0;
        this.myInput.getInputElement().then(res => {
          // this.heightStatus = 'close';
          res.blur();
          // this.ionBlur();
        });
      } else {
        this.keyboardH = 150;
      }
    });
    // window.addEventListener('keyboardDidHide', (event: any) => {
    //   // Describe your logic which will be run each time when keyboard is about to be shown.
    //   if (!this.emojiishow.getIsshows()) {
    //     this.myInput.getInputElement().then(res => {
    //       // this.heightStatus = 'close';
    //       res.blur();
    //       // this.ionBlur();
    //     });
    //   }
    // });
    this.itemclickfn.Source.subscribe(type => {
      console.log(type)
      if (type == 1) {
        this.myInput.setFocus();
      } else {
        this.myInput.getInputElement().then(res => {
          // this.heightStatus = 'close';
          res.blur();
          this.inputhy()
        });
      }
    });
  }
  ionFocus() {
    console.log('获得焦点')
    this.emojiishow.setIsshow(2);
    this.setFocus();
  }
  setFocus() {
    this.setHeight = {
      height: ''
    };
    // this.keyboardH = 200;
    this.myfous.emit();
  }
  ionBlur() {
    console.log('失去焦点')
    // this.mybulr.emit();
    if (!this.emojiishow.getIsshows()) {
      // this.inputhy();
      this.mybulr.emit();
    }
  }
  changeItem(item) {
      this.formdata['content'] += item;
  }
  toggle() {
    console.log('点击了')
    if (!this.emojiishow.getIsshows()) {
      this.emojiishow.setIsshow(1);
      this.setFocus();
      this.keyboardH = 150;
      // this.heightStatus = 'center';
    } else {
      this.emojiishow.setIsshow(2);
      this.myInput.setFocus();
      // this.heightStatus = 'show';
    }
  }
  onSubmit(data) { // : todo 文字消失
    if (!this.formdata['content']) {
      return false;
    }
    this.sub.emit(encodeURIComponent(this.formdata['content']));
    this.inputhy();
  }
  inputhy() {
    this.keyboardH = 0;
    this.formdata = {
      content: ''
    };
    this.setHeight = {
      height: '43px'
    };
    this.emojiishow.setIsshow(2);
  }
}
