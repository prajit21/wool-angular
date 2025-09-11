import { Component } from '@angular/core';

import * as data from '../../../../../../shared/data/data/checkbox-radio';

@Component({
  selector: 'app-custom-checkbox',
  imports: [],
  templateUrl: './custom-checkbox.html',
  styleUrl: './custom-checkbox.scss',
})
export class CustomCheckbox {
  public borderedCheckbox = data.borderedCheckbox;
  public iconCheckBox = data.iconCheckBox;
  public filledCheckBox = data.filledCheckBox;
}
