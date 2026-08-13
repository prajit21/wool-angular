import { Component, ChangeDetectionStrategy } from '@angular/core';

import { customHoverStripedTable } from '../../../../../../shared/data/data/tables';

@Component({
  selector: 'app-custom-table-color-hover-striped',
  imports: [],
  templateUrl: './custom-table-color-hover-striped.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './custom-table-color-hover-striped.scss',
})
export class CustomTableColorHoverStriped {
  public customHoverStripedTable = customHoverStripedTable;
}
