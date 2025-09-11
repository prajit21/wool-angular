import { Component } from '@angular/core';

import { ChatContact } from '../widgets/chat-contact/chat-contact';
import { ChatMenu } from '../widgets/chat-menu/chat-menu';
import { UserChat } from '../widgets/user-chat/user-chat';

@Component({
  selector: 'app-chat-app',
  imports: [UserChat, ChatMenu, ChatContact],
  templateUrl: './chat-app.html',
  styleUrl: './chat-app.scss',
})
export class ChatApp {
  public isShow: boolean;

  openMenu(value: boolean) {
    this.isShow = value;
  }
}
