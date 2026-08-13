import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { avatar } from '../../../../../shared/interface/ui-kits';

@Component({
  selector: 'app-common-avatar',
  imports: [],
  templateUrl: './common-avatar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './common-avatar.scss',
})
export class CommonAvatar {
  readonly details = input<avatar>();
}
