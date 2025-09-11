import { Component } from '@angular/core';

import { stripeRowInverseTable } from '../../../../../../shared/data/data/tables';

@Component({
  selector: 'app-striped-row-inverse-table',
  imports: [],
  templateUrl: './striped-row-inverse-table.html',
  styleUrl: './striped-row-inverse-table.scss',
})
export class StripedRowInverseTable {
  public stripeRowInverseTable = stripeRowInverseTable;
}
