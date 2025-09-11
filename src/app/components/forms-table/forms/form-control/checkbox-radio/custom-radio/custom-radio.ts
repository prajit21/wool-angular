import { Component } from '@angular/core';

import * as data from '../../../../../../shared/data/data/checkbox-radio';

@Component({
  selector: 'app-custom-radio',
  imports: [],
  templateUrl: './custom-radio.html',
  styleUrl: './custom-radio.scss',
})
export class CustomRadio {
  public borderedRadio = data.borderedRadio;
  public iconRadio = data.iconRadio;
  public filledRadio = data.filledRadio;
}
