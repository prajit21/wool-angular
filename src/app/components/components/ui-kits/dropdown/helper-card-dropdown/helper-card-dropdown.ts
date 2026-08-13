import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { helperCardDropdown } from '../../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-helper-card-dropdown',
  imports: [NgbModule],
  templateUrl: './helper-card-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './helper-card-dropdown.scss',
})
export class HelperCardDropdown {
  public helperCardDropdown = helperCardDropdown;
}
