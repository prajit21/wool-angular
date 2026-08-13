import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-type-dropdown',
  imports: [NgbModule],
  templateUrl: './input-type-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './input-type-dropdown.scss',
})
export class InputTypeDropdown {}
