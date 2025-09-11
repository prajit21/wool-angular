import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { basicProgressBar } from '../../../../../shared/data/data/ui-kits/progress';

@Component({
  selector: 'app-large-progress-bar',
  imports: [CommonModule],
  templateUrl: './large-progress-bar.html',
  styleUrl: './large-progress-bar.scss',
})
export class LargeProgressBar {
  public progress = basicProgressBar.data;
}
