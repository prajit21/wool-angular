import { Component } from '@angular/core';

import { checkboxGroup } from '../../../../../shared/data/data/buttons';

@Component({
  selector: 'app-check-box-button-groups',
  imports: [],
  templateUrl: './check-box-button-groups.html',
  styleUrl: './check-box-button-groups.scss',
})
export class CheckBoxButtonGroups {
  public checkboxGroup = checkboxGroup;
}
