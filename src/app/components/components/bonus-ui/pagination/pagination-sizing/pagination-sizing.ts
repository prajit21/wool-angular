import { Component } from '@angular/core';

import { paginationSizing } from '../../../../../shared/data/data/bonus-ui/pagination';

@Component({
  selector: 'app-pagination-sizing',
  imports: [],
  templateUrl: './pagination-sizing.html',
  styleUrl: './pagination-sizing.scss',
})
export class PaginationSizing {
  public paginationSizing = paginationSizing;
}
