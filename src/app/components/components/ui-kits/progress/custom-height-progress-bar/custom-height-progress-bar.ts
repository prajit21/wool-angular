import { Component, ChangeDetectionStrategy } from '@angular/core';

import { customHeightProgressBar } from '../../../../../shared/data/data/ui-kits/progress';

@Component({
  selector: 'app-custom-height-progress-bar',
  templateUrl: './custom-height-progress-bar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './custom-height-progress-bar.scss',
})
export class CustomHeightProgressBar {
  public progress = customHeightProgressBar;
}
