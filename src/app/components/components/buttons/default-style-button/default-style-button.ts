import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import * as data from '../../../../shared/data/data/buttons';

@Component({
  selector: 'app-default-style-button',
  imports: [CommonModule],
  templateUrl: './default-style-button.html',
  styleUrl: './default-style-button.scss',
})
export class DefaultStyleButton {
  public buttons = data.buttons;
  public buttonColor = data.buttonColors;
  public outlinedButton = data.outlinedButton;
}
