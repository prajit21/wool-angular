import { Component } from '@angular/core';

import { customHoverStripedTable } from '../../../../../../shared/data/data/tables';

@Component({
  selector: 'app-custom-table-color-hover-striped',
  imports: [],
  templateUrl: './custom-table-color-hover-striped.html',
  styleUrl: './custom-table-color-hover-striped.scss',
})
export class CustomTableColorHoverStriped {
  public customHoverStripedTable = customHoverStripedTable;
}
