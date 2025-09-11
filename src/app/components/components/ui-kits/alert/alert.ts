import { Component } from '@angular/core';

import { AdditionalContentAlert } from './additional-content-alert/additional-content-alert';
import { AlertIcon } from './alert-icon/alert-icon';
import { DarkThemeAlert } from './dark-theme-alert/dark-theme-alert';
import { DismissDarkAlert } from './dismiss-dark-alert/dismiss-dark-alert';
import { DismissLightAlert } from './dismiss-light-alert/dismiss-light-alert';
import { LeftBorderAlert } from './left-border-alert/left-border-alert';
import { LightThemeAlert } from './light-theme-alert/light-theme-alert';
import { LiveAlert } from './live-alert/live-alert';
import { OutlinedAlert } from './outlined-alert/outlined-alert';

@Component({
  selector: 'app-alert',
  imports: [
    AdditionalContentAlert,
    AlertIcon,
    DarkThemeAlert,
    DismissLightAlert,
    DismissDarkAlert,
    LeftBorderAlert,
    LightThemeAlert,
    LiveAlert,
    OutlinedAlert,
  ],
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
})
export class Alert {}
