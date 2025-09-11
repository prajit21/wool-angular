import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { horizontalTimeline } from '../../../../../shared/data/data/bonus-ui/timeline';

@Component({
  selector: 'app-horizontal-time-line',
  imports: [CommonModule],
  templateUrl: './horizontal-time-line.html',
  styleUrl: './horizontal-time-line.scss',
})
export class HorizontalTimeLine {
  public horizontalTimeline = horizontalTimeline;
}
