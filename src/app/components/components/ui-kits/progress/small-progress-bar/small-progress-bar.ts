import { Component, ChangeDetectionStrategy } from '@angular/core';

import { smallProgressBar } from '../../../../../shared/data/data/ui-kits/progress';

@Component({
  selector: 'app-small-progress-bar',
  templateUrl: './small-progress-bar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './small-progress-bar.scss',
})
export class SmallProgressBar {
  public smallProgressBar = smallProgressBar;
}
