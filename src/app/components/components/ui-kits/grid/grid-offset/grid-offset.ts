import { Component } from '@angular/core';

import { gridOffset } from '../../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-grid-offset',
  imports: [],
  templateUrl: './grid-offset.html',
  styleUrl: './grid-offset.scss',
})
export class GridOffset {
  public gridOffset = gridOffset;
}
