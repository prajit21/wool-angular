import { Component } from '@angular/core';

import { friends } from '../../../../../../shared/data/data/social-apps';

@Component({
  selector: 'app-social-friends',
  imports: [],
  templateUrl: './social-friends.html',
  styleUrl: './social-friends.scss',
})
export class SocialFriends {
  public friends = friends;
}
