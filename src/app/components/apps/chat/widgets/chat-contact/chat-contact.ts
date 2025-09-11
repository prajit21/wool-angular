import { Component } from '@angular/core';

import { contact } from '../../../../../shared/data/data/chat';

@Component({
  selector: 'app-chat-contact',
  imports: [],
  templateUrl: './chat-contact.html',
  styleUrl: './chat-contact.scss',
})
export class ChatContact {
  public contact = contact;
}
