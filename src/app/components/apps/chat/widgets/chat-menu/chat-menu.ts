import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { calls } from '../../../../../shared/data/data/chat';

@Component({
  selector: 'app-chat-menu',
  imports: [NgClass],
  templateUrl: './chat-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './chat-menu.scss',
})
export class ChatMenu {
  public calls = calls;

  public openTab: string = 'call';

  public tabbed(val: string) {
    this.openTab = val;
  }
}
