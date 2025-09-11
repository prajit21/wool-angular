import { Component } from '@angular/core';

import { sizingTable } from '../../../../../../shared/data/data/tables';

@Component({
  selector: 'app-sizing-table',
  imports: [],
  templateUrl: './sizing-table.html',
  styleUrl: './sizing-table.scss',
})
export class SizingTable {
  public sizingTable = sizingTable;
}
