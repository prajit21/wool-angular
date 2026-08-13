import { Component, ChangeDetectionStrategy } from '@angular/core';

import { inverseTable } from '../../../../../../shared/data/data/tables';

@Component({
  selector: 'app-inverse-table',
  imports: [],
  templateUrl: './inverse-table.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './inverse-table.scss',
})
export class InverseTable {
  public inverseTable = inverseTable;
}
