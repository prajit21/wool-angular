import { Component } from '@angular/core';

import { backGroundColor } from '../../../../../shared/data/data/ui-kits/helper-classic';

@Component({
  selector: 'app-background-colors',
  imports: [],
  templateUrl: './background-colors.html',
  styleUrl: './background-colors.scss',
})
export class BackgroundColors {
  public backGroundColor = backGroundColor;
}
