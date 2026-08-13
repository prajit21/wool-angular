import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip-direction',
  imports: [NgbModule],
  templateUrl: './tooltip-direction.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './tooltip-direction.scss',
})
export class TooltipDirection {}
