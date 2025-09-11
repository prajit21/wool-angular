import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-accordion',
  imports: [],
  templateUrl: './horizontal-accordion.html',
  styleUrl: './horizontal-accordion.scss',
})
export class HorizontalAccordion {
  public elem: boolean = false;

  toggle() {
    this.elem = !this.elem;
  }
}
