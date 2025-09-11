import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { calls } from '../../../../../shared/data/data/chat';

@Component({
  selector: 'app-chat-menu',
  imports: [CommonModule],
  templateUrl: './chat-menu.html',
  styleUrl: './chat-menu.scss',
})
export class ChatMenu {
  public calls = calls;

  public openTab: string = 'call';

  public tabbed(val: string) {
    this.openTab = val;
  }
}
