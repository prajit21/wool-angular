import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { alerts } from '../../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-dark-theme-alert',
  imports: [TitleCasePipe],
  templateUrl: './dark-theme-alert.html',
  styleUrl: './dark-theme-alert.scss',
})
export class DarkThemeAlert {
  public alerts = alerts;
}
