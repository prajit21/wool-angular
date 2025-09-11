import { Component } from '@angular/core';

import { paginationAlignment } from '../../../../../shared/data/data/bonus-ui/pagination';

@Component({
  selector: 'app-pagination-alignment',
  imports: [],
  templateUrl: './pagination-alignment.html',
  styleUrl: './pagination-alignment.scss',
})
export class PaginationAlignment {
  public paginationAlignment = paginationAlignment;
}
