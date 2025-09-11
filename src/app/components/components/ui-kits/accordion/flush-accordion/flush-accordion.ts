import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { flushAccordion } from '../../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-flush-accordion',
  imports: [NgbModule],
  templateUrl: './flush-accordion.html',
  styleUrl: './flush-accordion.scss',
})
export class FlushAccordion {
  public flushAccordion = flushAccordion;
}
