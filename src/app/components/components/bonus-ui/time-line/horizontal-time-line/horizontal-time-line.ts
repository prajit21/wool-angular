import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { horizontalTimeline } from '../../../../../shared/data/data/bonus-ui/timeline';

@Component({
  selector: 'app-horizontal-time-line',
  imports: [NgClass],
  templateUrl: './horizontal-time-line.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './horizontal-time-line.scss',
})
export class HorizontalTimeLine {
  public horizontalTimeline = horizontalTimeline;
}
