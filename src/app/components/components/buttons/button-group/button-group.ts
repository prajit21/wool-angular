import { Component } from '@angular/core';

import { ButtonGroups } from './button-groups/button-groups';
import { CheckBoxButtonGroups } from './check-box-button-groups/check-box-button-groups';
import { CustomOutlineButtonGroups } from './custom-outline-button-groups/custom-outline-button-groups';
import { NestingButtonGroups } from './nesting-button-groups/nesting-button-groups';
import { OutlineButtonGroups } from './outline-button-groups/outline-button-groups';
import { RadioButtonGroups } from './radio-button-groups/radio-button-groups';
import { VerticalButtonGroups } from './vertical-button-groups/vertical-button-groups';
import * as data from '../../../../shared/data/data/buttons';

@Component({
  selector: 'app-button-group',
  imports: [
    ButtonGroups,
    NestingButtonGroups,
    CheckBoxButtonGroups,
    CustomOutlineButtonGroups,
    NestingButtonGroups,
    OutlineButtonGroups,
    RadioButtonGroups,
    VerticalButtonGroups,
  ],
  templateUrl: './button-group.html',
  styleUrl: './button-group.scss',
})
export class ButtonGroup {
  public buttonColor = data.buttonGroupColors;
  public buttonGroup = data.buttonGroup;
  public customOutlineButton = data.customOutlineButton;
  public outlineGroupButton = data.outlineGroupButton;
}
