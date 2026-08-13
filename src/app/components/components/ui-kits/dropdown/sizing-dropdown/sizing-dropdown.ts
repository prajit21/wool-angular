import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { sizingDropdown } from '../../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-sizing-dropdown',
  imports: [NgbModule, NgClass],
  templateUrl: './sizing-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sizing-dropdown.scss',
})
export class SizingDropdown {
  public sizingDropdown = sizingDropdown;
}
