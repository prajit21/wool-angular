import { Component, ChangeDetectionStrategy } from '@angular/core';

import { alignmentDetails } from '../../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-vertical-alignment',
  imports: [],
  templateUrl: './vertical-alignment.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './vertical-alignment.scss',
})
export class VerticalAlignment {
  public alignmentDetails = alignmentDetails;
}
