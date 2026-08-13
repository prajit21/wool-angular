import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-segmented-button',
  imports: [NgbModule],
  templateUrl: './input-segmented-button.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './input-segmented-button.scss',
})
export class InputSegmentedButton {}
