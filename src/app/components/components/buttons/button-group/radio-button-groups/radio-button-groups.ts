import { Component } from '@angular/core';

import { radioGroup } from '../../../../../shared/data/data/buttons';

@Component({
  selector: 'app-radio-button-groups',
  imports: [],
  templateUrl: './radio-button-groups.html',
  styleUrl: './radio-button-groups.scss',
})
export class RadioButtonGroups {
  public radioGroup = radioGroup;
}
