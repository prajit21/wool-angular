import { Component } from '@angular/core';

import { mutualFriendsDetails } from '../../../../../../shared/data/data/social-apps';

@Component({
  selector: 'app-social-mutual-friends',
  imports: [],
  templateUrl: './social-mutual-friends.html',
  styleUrl: './social-mutual-friends.scss',
})
export class SocialMutualFriends {
  public mutualFriends = mutualFriendsDetails;
}
