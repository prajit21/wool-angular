import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { customProgressBar } from '../../../../../shared/data/data/ui-kits/progress';

@Component({
  selector: 'app-custom-progress-bar',
  imports: [CommonModule],
  templateUrl: './custom-progress-bar.html',
  styleUrl: './custom-progress-bar.scss',
})
export class CustomProgressBar {
  public customProgressBar = customProgressBar;
}
