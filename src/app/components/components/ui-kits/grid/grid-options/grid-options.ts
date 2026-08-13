import { Component, ChangeDetectionStrategy } from '@angular/core';

import { gridOptions } from '../../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-grid-options',
  imports: [],
  templateUrl: './grid-options.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './grid-options.scss',
})
export class GridOptions {
  public gridOptions = gridOptions;
}
