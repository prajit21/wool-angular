import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { alignmentDropdown } from '../../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-alignment-dropdown',
  imports: [NgbModule, NgClass],
  templateUrl: './alignment-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './alignment-dropdown.scss',
})
export class AlignmentDropdown {
  public alignmentDropdown = alignmentDropdown;
}
