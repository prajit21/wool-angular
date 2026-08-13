import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { customOutline } from '../../../../../shared/interface/buttons';

@Component({
  selector: 'app-custom-outline-button-groups',
  imports: [],
  templateUrl: './custom-outline-button-groups.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './custom-outline-button-groups.scss',
})
export class CustomOutlineButtonGroups {
  readonly details = input<customOutline>();
  readonly buttonColor = input<string[]>();
}
