import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { accordionWithIcon } from '../../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-with-icon-accordion',
  imports: [FeatherIcons, NgbModule],
  templateUrl: './with-icon-accordion.html',
  styleUrl: './with-icon-accordion.scss',
})
export class WithIconAccordion {
  public accordionWithIcon = accordionWithIcon;
}
