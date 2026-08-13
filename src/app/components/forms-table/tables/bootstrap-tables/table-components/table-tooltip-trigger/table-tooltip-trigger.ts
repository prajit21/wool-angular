import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table-tooltip-trigger',
  imports: [NgbModule],
  templateUrl: './table-tooltip-trigger.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './table-tooltip-trigger.scss',
})
export class TableTooltipTrigger {}
