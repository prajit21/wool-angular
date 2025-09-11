import { Component } from '@angular/core';

import { breakPointTable } from '../../../../../../shared/data/data/tables';

@Component({
  selector: 'app-break-point-specific-table',
  imports: [],
  templateUrl: './break-point-specific-table.html',
  styleUrl: './break-point-specific-table.scss',
})
export class BreakPointSpecificTable {
  public breakPointTable = breakPointTable;
}
