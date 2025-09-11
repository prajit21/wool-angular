import { Component, input } from '@angular/core';

import { avatar } from '../../../../../shared/interface/ui-kits';

@Component({
  selector: 'app-common-avatar',
  imports: [],
  templateUrl: './common-avatar.html',
  styleUrl: './common-avatar.scss',
})
export class CommonAvatar {
  readonly details = input<avatar>();
}
