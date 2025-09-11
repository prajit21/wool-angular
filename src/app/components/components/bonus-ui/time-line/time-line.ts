import { Component } from '@angular/core';

import { BasicTimeLine } from './basic-time-line/basic-time-line';
import { HorizontalTimeLine } from './horizontal-time-line/horizontal-time-line';
import { HoveringTimeLine } from './hovering-time-line/hovering-time-line';
import { Timeline } from './timeline/timeline';
import { VariationTimeLine } from './variation-time-line/variation-time-line';

@Component({
  selector: 'app-time-line',
  imports: [BasicTimeLine, HorizontalTimeLine, HoveringTimeLine, Timeline, VariationTimeLine],
  templateUrl: './time-line.html',
  styleUrl: './time-line.scss',
})
export class TimeLine {}
