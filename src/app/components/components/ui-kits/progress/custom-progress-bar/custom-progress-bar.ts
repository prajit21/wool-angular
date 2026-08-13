import { Component, ChangeDetectionStrategy } from '@angular/core';

import { customProgressBar } from '../../../../../shared/data/data/ui-kits/progress';

@Component({
  selector: 'app-custom-progress-bar',
  templateUrl: './custom-progress-bar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './custom-progress-bar.scss',
})
export class CustomProgressBar {
  public customProgressBar = customProgressBar;
}
