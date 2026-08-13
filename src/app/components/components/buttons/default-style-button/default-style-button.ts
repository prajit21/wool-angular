import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import * as data from '../../../../shared/data/data/buttons';

@Component({
  selector: 'app-default-style-button',
  imports: [NgClass, TitleCasePipe],
  templateUrl: './default-style-button.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './default-style-button.scss',
})
export class DefaultStyleButton {
  public buttons = data.buttons;
  public buttonColor = data.buttonColors;
  public outlinedButton = data.outlinedButton;
}
