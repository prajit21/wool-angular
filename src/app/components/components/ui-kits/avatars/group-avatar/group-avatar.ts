import { Component } from '@angular/core';

import { groupAvatar } from '../../../../../shared/data/data/ui-kits/avatars';

@Component({
  selector: 'app-group-avatar',
  imports: [],
  templateUrl: './group-avatar.html',
  styleUrl: './group-avatar.scss',
})
export class GroupAvatar {
  public groupAvatar = groupAvatar;
}
