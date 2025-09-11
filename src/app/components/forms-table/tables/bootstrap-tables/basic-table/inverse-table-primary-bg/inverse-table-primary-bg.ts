import { Component } from '@angular/core';

import { basicTableBottomBorder } from '../../../../../../shared/data/data/tables';

@Component({
  selector: 'app-inverse-table-primary-bg',
  imports: [],
  templateUrl: './inverse-table-primary-bg.html',
  styleUrl: './inverse-table-primary-bg.scss',
})
export class InverseTablePrimaryBg {
  public inverseTable = basicTableBottomBorder;
}
