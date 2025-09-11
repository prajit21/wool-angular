import { Component } from '@angular/core';

import { responsiveLightBgTable } from '../../../../../../shared/data/data/tables';

@Component({
  selector: 'app-responsive-table-light-bg',
  imports: [],
  templateUrl: './responsive-table-light-bg.html',
  styleUrl: './responsive-table-light-bg.scss',
})
export class ResponsiveTableLightBg {
  public responsiveLightBgTable = responsiveLightBgTable;
}
