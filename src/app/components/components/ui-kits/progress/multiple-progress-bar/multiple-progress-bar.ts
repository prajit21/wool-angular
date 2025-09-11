import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { multipleProgress } from '../../../../../shared/data/data/ui-kits/progress';

@Component({
  selector: 'app-multiple-progress-bar',
  imports: [CommonModule],
  templateUrl: './multiple-progress-bar.html',
  styleUrl: './multiple-progress-bar.scss',
})
export class MultipleProgressBar {
  public multipleProgress = multipleProgress;
}
