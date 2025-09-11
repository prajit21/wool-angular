import { Component } from '@angular/core';

import { ActiveDisabledPagination } from './active-disabled-pagination/active-disabled-pagination';
import { DefaultPagination } from './default-pagination/default-pagination';
import { IconPagination } from './icon-pagination/icon-pagination';
import { PaginationAlignment } from './pagination-alignment/pagination-alignment';
import { PaginationSizing } from './pagination-sizing/pagination-sizing';
import { RoundedPagination } from './rounded-pagination/rounded-pagination';

@Component({
  selector: 'app-pagination',
  imports: [
    ActiveDisabledPagination,
    DefaultPagination,
    IconPagination,
    PaginationAlignment,
    PaginationSizing,
    RoundedPagination,
  ],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination {}
