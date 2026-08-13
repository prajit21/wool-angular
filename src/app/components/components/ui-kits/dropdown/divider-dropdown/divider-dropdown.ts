import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { dividerDropdown } from '../../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-divider-dropdown',
  imports: [NgbModule],
  templateUrl: './divider-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './divider-dropdown.scss',
})
export class DividerDropdown {
  public dividerDropdown = dividerDropdown;
}
