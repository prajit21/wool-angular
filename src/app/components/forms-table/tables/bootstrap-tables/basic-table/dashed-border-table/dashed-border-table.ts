import { Component } from '@angular/core';

import { dashedBorderTable } from '../../../../../../shared/data/data/tables';

@Component({
  selector: 'app-dashed-border-table',
  imports: [],
  templateUrl: './dashed-border-table.html',
  styleUrl: './dashed-border-table.scss',
})
export class DashedBorderTable {
  public dashedBorderTable = dashedBorderTable;
}
