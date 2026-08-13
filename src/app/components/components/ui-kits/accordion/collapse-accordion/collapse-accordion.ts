import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-collapse-accordion',
  imports: [],
  templateUrl: './collapse-accordion.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './collapse-accordion.scss',
})
export class CollapseAccordion {
  public elem: boolean = false;

  toggle() {
    this.elem = !this.elem;
  }
}
