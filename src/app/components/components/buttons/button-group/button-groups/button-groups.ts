import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

import { button } from '../../../../../shared/interface/buttons';

@Component({
  selector: 'app-button-groups',
  imports: [CommonModule],
  templateUrl: './button-groups.html',
  styleUrl: './button-groups.scss',
})
export class ButtonGroups {
  @Input() details: button;

  readonly buttonColor = input<string[]>();
}
