import { Component } from '@angular/core';

import { CommonAvatar } from './common-avatar/common-avatar';
import { GroupAvatar } from './group-avatar/group-avatar';
import { avatars } from '../../../../shared/data/data/ui-kits/avatars';

@Component({
  selector: 'app-avatars',
  imports: [CommonAvatar, GroupAvatar],
  templateUrl: './avatars.html',
  styleUrl: './avatars.scss',
})
export class Avatars {
  public avatars = avatars;
}
