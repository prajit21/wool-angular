import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { smallProgressBar } from '../../../../../shared/data/data/ui-kits/progress';

@Component({
  selector: 'app-small-progress-bar',
  imports: [CommonModule],
  templateUrl: './small-progress-bar.html',
  styleUrl: './small-progress-bar.scss',
})
export class SmallProgressBar {
  public smallProgressBar = smallProgressBar;
}
