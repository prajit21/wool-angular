import { Component, ChangeDetectionStrategy } from '@angular/core';

import { mutualFriendsDetails } from '../../../../../../shared/data/data/social-apps';

@Component({
  selector: 'app-social-mutual-friends',
  imports: [],
  templateUrl: './social-mutual-friends.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './social-mutual-friends.scss',
})
export class SocialMutualFriends {
  public mutualFriends = mutualFriendsDetails;
}
