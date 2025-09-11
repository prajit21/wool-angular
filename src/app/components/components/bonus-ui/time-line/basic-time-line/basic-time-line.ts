import { Component } from '@angular/core';

import { basicTimeline } from '../../../../../shared/data/data/bonus-ui/timeline';

@Component({
  selector: 'app-basic-time-line',
  templateUrl: './basic-time-line.html',
  styleUrl: './basic-time-line.scss',
})
export class BasicTimeLine {
  public basicTimeline = basicTimeline;
}
