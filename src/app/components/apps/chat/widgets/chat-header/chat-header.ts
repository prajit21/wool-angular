import { Component, output } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  imports: [],
  templateUrl: './chat-header.html',
  styleUrl: './chat-header.scss',
})
export class ChatHeader {
  readonly menuOpen = output<boolean>();

  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
    this.menuOpen.emit(this.isOpen);
  }
}
