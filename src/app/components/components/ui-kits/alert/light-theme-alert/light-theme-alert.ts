import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { alerts } from '../../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-light-theme-alert',
  imports: [TitleCasePipe],
  templateUrl: './light-theme-alert.html',
  styleUrl: './light-theme-alert.scss',
})
export class LightThemeAlert {
  public alerts = alerts;
}
