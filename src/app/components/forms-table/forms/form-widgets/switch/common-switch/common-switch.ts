import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { switches } from '../../../../../../shared/interface/switch';

@Component({
  selector: 'app-common-switch',
  standalone: true,
  imports: [NgClass, TitleCasePipe],
  templateUrl: './common-switch.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./common-switch.scss'],
})
export class CommonSwitch {
  public readonly data = input<switches>();
}
