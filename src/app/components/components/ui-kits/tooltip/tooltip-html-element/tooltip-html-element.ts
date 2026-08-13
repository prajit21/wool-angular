import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip-html-element',
  imports: [NgbModule],
  templateUrl: './tooltip-html-element.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './tooltip-html-element.scss',
})
export class TooltipHtmlElement {}
