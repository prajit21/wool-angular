import { Component } from '@angular/core';

import { BasicTooltip } from './basic-tooltip/basic-tooltip';
import { ColoredTooltip } from './colored-tooltip/colored-tooltip';
import { FilledTooltip } from './filled-tooltip/filled-tooltip';
import { TooltipDirection } from './tooltip-direction/tooltip-direction';
import { TooltipHtmlElement } from './tooltip-html-element/tooltip-html-element';

@Component({
  selector: 'app-tooltip',
  imports: [BasicTooltip, ColoredTooltip, FilledTooltip, TooltipDirection, TooltipHtmlElement],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
})
export class Tooltip {}
