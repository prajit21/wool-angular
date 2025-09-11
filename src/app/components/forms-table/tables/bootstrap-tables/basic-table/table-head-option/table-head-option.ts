import { Component } from '@angular/core';

import { headOptionData } from '../../../../../../shared/data/data/tables';

@Component({
  selector: 'app-table-head-option',
  imports: [],
  templateUrl: './table-head-option.html',
  styleUrl: './table-head-option.scss',
})
export class TableHeadOption {
  public headOptionData = headOptionData;
}
