import { Component, ChangeDetectionStrategy } from '@angular/core';

import { gridColumn } from '../../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-grid-columns',
  imports: [],
  templateUrl: './grid-columns.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './grid-columns.scss',
})
export class GridColumns {
  public gridColumn = gridColumn;
}
