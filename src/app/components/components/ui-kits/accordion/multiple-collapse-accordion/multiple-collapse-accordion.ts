import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-collapse-accordion',
  imports: [],
  templateUrl: './multiple-collapse-accordion.html',
  styleUrl: './multiple-collapse-accordion.scss',
})
export class MultipleCollapseAccordion {
  public elem1: boolean = false;
  public elem2: boolean = false;

  toggle(value: string) {
    if (value == 'first') {
      this.elem1 = !this.elem1;
    } else if (value == 'second') {
      this.elem2 = !this.elem2;
    } else if (value == 'both') {
      this.elem1 = !this.elem1;
      this.elem2 = !this.elem2;
    }
  }
}
