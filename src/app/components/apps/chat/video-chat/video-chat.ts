import { Component } from '@angular/core';

import { ChatContact } from '../widgets/chat-contact/chat-contact';
import { ChatHeader } from '../widgets/chat-header/chat-header';
import { ChatMenu } from '../widgets/chat-menu/chat-menu';

@Component({
  selector: 'app-video-chat',
  imports: [ChatMenu, ChatHeader, ChatContact],
  templateUrl: './video-chat.html',
  styleUrl: './video-chat.scss',
})
export class VideoChat {
  public isShow: boolean;

  openMenu(value: boolean) {
    this.isShow = value;
  }
}
