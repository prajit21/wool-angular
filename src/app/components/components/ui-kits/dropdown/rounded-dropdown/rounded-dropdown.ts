import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { roundedDropdown } from '../../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-rounded-dropdown',
  imports: [NgbModule],
  templateUrl: './rounded-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './rounded-dropdown.scss',
})
export class RoundedDropdown {
  public roundedDropdown = roundedDropdown;
}
