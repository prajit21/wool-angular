import { Component, ChangeDetectionStrategy } from '@angular/core';

import { follower } from '../../../../../../shared/data/data/social-apps';

@Component({
  selector: 'app-social-followers',
  imports: [],
  templateUrl: './social-followers.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './social-followers.scss',
})
export class SocialFollowers {
  public follower = follower;
}
