import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { basicDropdown } from '../../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-basic-dropdown',
  imports: [NgbModule],
  templateUrl: './basic-dropdown.html',
  styleUrl: './basic-dropdown.scss',
})
export class BasicDropdown {
  public basicDropdown = basicDropdown;
}
