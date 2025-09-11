import { Component } from '@angular/core';

import { AutoCloseAlert } from './auto-close-alert/auto-close-alert';
import { BasicAlert } from './basic-alert/basic-alert';
import { DangerAlert } from './danger-alert/danger-alert';
import { InfoAlert } from './info-alert/info-alert';
import { MovieAlert } from './movie-alert/movie-alert';
import { PikachuAlert } from './pikachu-alert/pikachu-alert';
import { QuestionAlert } from './question-alert/question-alert';
import { SuccessMessageAlert } from './success-message-alert/success-message-alert';
import { TitleTextAlert } from './title-text-alert/title-text-alert';
import { UserNameAlert } from './user-name-alert/user-name-alert';
import { WarningAlert } from './warning-alert/warning-alert';
import { WarningModeAlert } from './warning-mode-alert/warning-mode-alert';

@Component({
  selector: 'app-sweet-alert',
  imports: [
    MovieAlert,
    AutoCloseAlert,
    BasicAlert,
    DangerAlert,
    InfoAlert,
    MovieAlert,
    PikachuAlert,
    QuestionAlert,
    SuccessMessageAlert,
    TitleTextAlert,
    UserNameAlert,
    WarningAlert,
    WarningModeAlert,
  ],
  templateUrl: './sweet-alert.html',
  styleUrl: './sweet-alert.scss',
})
export class SweetAlert {}
