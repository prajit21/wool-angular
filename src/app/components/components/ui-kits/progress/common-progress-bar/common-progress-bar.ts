import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { progress } from '../../../../../shared/interface/ui-kits';

@Component({
  selector: 'app-common-progress-bar',
  templateUrl: './common-progress-bar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './common-progress-bar.scss',
})
export class CommonProgressBar {
  readonly details = input<progress>();
}
