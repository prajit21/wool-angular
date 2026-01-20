
import { Component } from '@angular/core';

import { customHeightProgressBar } from '../../../../../shared/data/data/ui-kits/progress';

@Component({
  selector: 'app-custom-height-progress-bar',
  templateUrl: './custom-height-progress-bar.html',
  styleUrl: './custom-height-progress-bar.scss',
})
export class CustomHeightProgressBar {
  public progress = customHeightProgressBar;
}
