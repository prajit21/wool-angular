import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { sizingDropdown } from '../../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-sizing-dropdown',
  imports: [CommonModule, NgbModule],
  templateUrl: './sizing-dropdown.html',
  styleUrl: './sizing-dropdown.scss',
})
export class SizingDropdown {
  public sizingDropdown = sizingDropdown;
}
