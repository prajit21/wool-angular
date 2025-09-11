import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { button } from '../../../../../shared/interface/buttons';

@Component({
  selector: 'app-outline-button-groups',
  imports: [CommonModule],
  templateUrl: './outline-button-groups.html',
  styleUrl: './outline-button-groups.scss',
})
export class OutlineButtonGroups {
  readonly details = input<button>();
  readonly buttonColor = input<string[]>();
}
