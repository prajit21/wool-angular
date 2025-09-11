import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { simpleAccordion } from '../../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-outlined-accordion',
  imports: [FeatherIcons, NgbModule],
  templateUrl: './outlined-accordion.html',
  styleUrl: './outlined-accordion.scss',
})
export class OutlinedAccordion {
  public simpleAccordion = simpleAccordion;
}
