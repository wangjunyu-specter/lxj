import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  constructor() { }
  getEmoji() {
    const EMOJIS = '😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 ' +
      '🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 ' +
      '🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 ' +
      '😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 ' +
      '🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ ' +
      '👮 👷‍♀️ 👷';
    const array = EMOJIS.split(' '); // 以空格来区分每一个emoji
    // array.splice(10, 1);
    // array.splice(25, 1);
    // array.splice(33, 1);
    // array.splice(54, 1);
    // array.splice(55, 1);
    // array.splice(63, 1);
    // array.splice(67, 1);
    // array.splice(121, 1);
    // array.splice(123, 1);
    // array.splice(131, 1);
    // array.splice(138, 1);
    // array.splice(142, 1);
    // array.splice(144, 1);
    // array.splice(153, 1);
    return array;
  }
}
