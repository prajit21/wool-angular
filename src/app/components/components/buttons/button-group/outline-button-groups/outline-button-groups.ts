import { NgClass } from '@angular/common';
import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { button } from '../../../../../shared/interface/buttons';

@Component({
  selector: 'app-outline-button-groups',
  imports: [NgClass],
  templateUrl: './outline-button-groups.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './outline-button-groups.scss',
})
export class OutlineButtonGroups {
  readonly details = input<button>();
  readonly buttonColor = input<string[]>();
}
