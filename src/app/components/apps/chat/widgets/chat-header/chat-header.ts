import { Component, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  imports: [],
  templateUrl: './chat-header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
