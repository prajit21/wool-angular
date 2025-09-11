import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { roundedDropdown } from '../../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-rounded-dropdown',
  imports: [NgbModule],
  templateUrl: './rounded-dropdown.html',
  styleUrl: './rounded-dropdown.scss',
})
export class RoundedDropdown {
  public roundedDropdown = roundedDropdown;
}
