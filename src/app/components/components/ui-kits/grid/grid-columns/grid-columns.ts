import { Component } from '@angular/core';

import { gridColumn } from '../../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-grid-columns',
  imports: [],
  templateUrl: './grid-columns.html',
  styleUrl: './grid-columns.scss',
})
export class GridColumns {
  public gridColumn = gridColumn;
}
