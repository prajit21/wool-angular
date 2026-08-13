import { Component, ChangeDetectionStrategy } from '@angular/core';

import { sizingTable } from '../../../../../../shared/data/data/tables';

@Component({
  selector: 'app-sizing-table',
  imports: [],
  templateUrl: './sizing-table.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sizing-table.scss',
})
export class SizingTable {
  public sizingTable = sizingTable;
}
