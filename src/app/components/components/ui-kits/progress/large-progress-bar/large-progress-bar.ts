import { Component, ChangeDetectionStrategy } from '@angular/core';

import { basicProgressBar } from '../../../../../shared/data/data/ui-kits/progress';

@Component({
  selector: 'app-large-progress-bar',
  templateUrl: './large-progress-bar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './large-progress-bar.scss',
})
export class LargeProgressBar {
  public progress = basicProgressBar.data;
}
