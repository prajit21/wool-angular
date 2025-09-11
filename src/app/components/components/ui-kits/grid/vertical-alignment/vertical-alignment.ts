import { Component } from '@angular/core';

import { alignmentDetails } from '../../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-vertical-alignment',
  imports: [],
  templateUrl: './vertical-alignment.html',
  styleUrl: './vertical-alignment.scss',
})
export class VerticalAlignment {
  public alignmentDetails = alignmentDetails;
}
