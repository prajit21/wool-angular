import { Component } from '@angular/core';

import { GridColumns } from './grid-columns/grid-columns';
import { GridOffset } from './grid-offset/grid-offset';
import { GridOptions } from './grid-options/grid-options';
import { GridOrder } from './grid-order/grid-order';
import { HorizontalAlignment } from './horizontal-alignment/horizontal-alignment';
import { NestingGrid } from './nesting-grid/nesting-grid';
import { VerticalAlignment } from './vertical-alignment/vertical-alignment';

@Component({
  selector: 'app-grid',
  imports: [
    GridColumns,
    GridOffset,
    GridOptions,
    GridOrder,
    HorizontalAlignment,
    NestingGrid,
    VerticalAlignment,
  ],
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
})
export class Grid {}
