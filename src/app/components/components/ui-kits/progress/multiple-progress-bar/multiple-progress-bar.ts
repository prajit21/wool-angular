
import { Component } from '@angular/core';

import { multipleProgress } from '../../../../../shared/data/data/ui-kits/progress';

@Component({
  selector: 'app-multiple-progress-bar',
  templateUrl: './multiple-progress-bar.html',
  styleUrl: './multiple-progress-bar.scss',
})
export class MultipleProgressBar {
  public multipleProgress = multipleProgress;
}
