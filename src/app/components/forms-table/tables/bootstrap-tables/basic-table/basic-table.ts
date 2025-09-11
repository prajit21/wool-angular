import { Component } from '@angular/core';

import { BasicTableBottomBorder } from './basic-table-bottom-border/basic-table-bottom-border';
import { BreakPointSpecificTable } from './break-point-specific-table/break-point-specific-table';
import { CaptionTable } from './caption-table/caption-table';
import { CustomTableColorHoverStriped } from './custom-table-color-hover-striped/custom-table-color-hover-striped';
import { DashedBorderTable } from './dashed-border-table/dashed-border-table';
import { HoverRowHorizontalBorder } from './hover-row-horizontal-border/hover-row-horizontal-border';
import { InverseTable } from './inverse-table/inverse-table';
import { InverseTablePrimaryBg } from './inverse-table-primary-bg/inverse-table-primary-bg';
import { ResponsiveTableLightBg } from './responsive-table-light-bg/responsive-table-light-bg';
import { SizingTable } from './sizing-table/sizing-table';
import { StripedRowInverseTable } from './striped-row-inverse-table/striped-row-inverse-table';
import { TableHeadOption } from './table-head-option/table-head-option';

@Component({
  selector: 'app-basic-table',
  imports: [
    BasicTableBottomBorder,
    BreakPointSpecificTable,
    CaptionTable,
    CustomTableColorHoverStriped,
    DashedBorderTable,
    HoverRowHorizontalBorder,
    InverseTable,
    InverseTablePrimaryBg,
    ResponsiveTableLightBg,
    SizingTable,
    StripedRowInverseTable,
    TableHeadOption,
  ],
  templateUrl: './basic-table.html',
  styleUrl: './basic-table.scss',
})
export class BasicTable {}
