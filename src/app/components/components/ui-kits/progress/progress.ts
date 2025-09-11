import { Component } from '@angular/core';

import { CommonProgressBar } from './common-progress-bar/common-progress-bar';
import { CustomHeightProgressBar } from './custom-height-progress-bar/custom-height-progress-bar';
import { CustomProgressBar } from './custom-progress-bar/custom-progress-bar';
import { LargeProgressBar } from './large-progress-bar/large-progress-bar';
import { MultipleProgressBar } from './multiple-progress-bar/multiple-progress-bar';
import { NumberStepProgress } from './number-step-progress/number-step-progress';
import { SmallProgressBar } from './small-progress-bar/small-progress-bar';
import * as progressDetails from '../../../../shared/data/data/ui-kits/progress';

@Component({
  selector: 'app-progress',
  imports: [
    CommonProgressBar,
    CustomProgressBar,
    CustomHeightProgressBar,
    LargeProgressBar,
    MultipleProgressBar,
    LargeProgressBar,
    NumberStepProgress,
    SmallProgressBar,
  ],
  templateUrl: './progress.html',
  styleUrl: './progress.scss',
})
export class Progress {
  public progressData = progressDetails;
}
