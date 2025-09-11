import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { simpleAccordion } from '../../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-simple-accordion',
  imports: [FeatherIcons, NgbModule],
  templateUrl: './simple-accordion.html',
  styleUrl: './simple-accordion.scss',
})
export class SimpleAccordion {
  public simpleAccordion = simpleAccordion;
}
