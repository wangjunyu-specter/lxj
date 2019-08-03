import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { EmojiService } from '../../services/emoji.service';
import {EmojiishowService} from "../../services/emojiishow.service";
import {trigger, state, style, animate, transition} from '@angular/animations';

// export const EMOJI_ACCESSOR: any = {
//   provide: NG_VALUE_ACCESSOR,
//   useExisting: forwardRef(() => EmojiPickComponent),
//   multi: true
//
// }
@Component({
  selector: 'app-emojipick',
  templateUrl: './emojipick.component.html',
  styleUrls: ['./emojipick.component.scss'],
  animations: [
    trigger('openClose', [
      state('show', style({
        bottom: '0px',
        // position: 'relative'
      })),
      state('close', style({
        bottom: '-170px'
      })),
      transition('* => *', [
        animate('0.2s')
      ])
    ])
  ]
})
export class EmojipickComponent implements OnInit {
  list: any[];
  slideOpts: any;
  @Input() isemoji: boolean;
  @Output() setItem = new EventEmitter();
  isshow: any;
  constructor(private emojiservice: EmojiService, private emojiishow: EmojiishowService) { }

  ngOnInit() {
    this.isshow = this.emojiishow.getIsshow();
    this.list = this.emojiservice.getEmoji();
    this.slideOpts = {
      slidesPerView : 8,
      slidesPerGroup : 8,
      slidesPerColumn: 3,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination2',
        // bulletClass: 'my-swiper-item'
        renderBullet: function (index, className) {
          return '<span class="' + className + '" style="margin: 0 5px;">&nbsp;</span>';
        }
      },
    };
  }
  changeItem(item) {
    this.setItem.emit(item);
  }

}
