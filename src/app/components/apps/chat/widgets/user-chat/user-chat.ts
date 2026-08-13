import { NgClass } from '@angular/common';
import { Component, output, ChangeDetectionStrategy } from '@angular/core';

import { chat } from '../../../../../shared/data/data/chat';
import { ChatHeader } from '../chat-header/chat-header';

@Component({
  selector: 'app-user-chat',
  imports: [ChatHeader, NgClass],
  templateUrl: './user-chat.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './user-chat.scss',
})
export class UserChat {
  readonly menuOpen = output<boolean>();

  public chat = chat;

  openMenu(value: boolean) {
    this.menuOpen.emit(value);
  }
}
