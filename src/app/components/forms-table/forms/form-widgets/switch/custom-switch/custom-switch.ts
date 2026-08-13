import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { customSwitches } from '../../../../../../shared/data/data/form-widgets/switch';

@Component({
  selector: 'app-custom-switch',
  imports: [NgClass],
  templateUrl: './custom-switch.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './custom-switch.scss',
})
export class CustomSwitch {
  public customSwitches = customSwitches;
}
