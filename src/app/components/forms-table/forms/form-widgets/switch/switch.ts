import { Component } from '@angular/core';

import { CommonSwitch } from './common-switch/common-switch';
import { CustomSwitch } from './custom-switch/custom-switch';
import { SwitchIconSizing } from './switch-icon-sizing/switch-icon-sizing';
import { SwitchSizing } from './switch-sizing/switch-sizing';
import { VariationSwitches } from './variation-switches/variation-switches';
import * as data from '../../../../../shared/data/data/form-widgets/switch';

@Component({
  selector: 'app-switch',
  imports: [CommonSwitch, CustomSwitch, SwitchIconSizing, SwitchSizing, VariationSwitches],
  templateUrl: './switch.html',
  styleUrl: './switch.scss',
})
export class Switch {
  public iconSwitchButton = data.iconSwitchButton;
  public uncheckedSwitch = data.uncheckedSwitch;
  public borderWithIcon = data.borderWithIcon;
  public disabledOutline = data.disabledOutline;
}
