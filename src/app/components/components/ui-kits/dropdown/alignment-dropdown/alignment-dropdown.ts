import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { alignmentDropdown } from '../../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-alignment-dropdown',
  imports: [NgbModule, NgClass],
  templateUrl: './alignment-dropdown.html',
  styleUrl: './alignment-dropdown.scss',
})
export class AlignmentDropdown {
  public alignmentDropdown = alignmentDropdown;
}
