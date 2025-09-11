import { Component } from '@angular/core';

import { captionTable } from '../../../../../../shared/data/data/tables';

@Component({
  selector: 'app-caption-table',
  imports: [],
  templateUrl: './caption-table.html',
  styleUrl: './caption-table.scss',
})
export class CaptionTable {
  public captionTable = captionTable;
}
