import { Component } from '@angular/core';

import { alignmentDetails } from '../../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-horizontal-alignment',
  imports: [],
  templateUrl: './horizontal-alignment.html',
  styleUrl: './horizontal-alignment.scss',
})
export class HorizontalAlignment {
  public alignmentDetails = alignmentDetails;
}
