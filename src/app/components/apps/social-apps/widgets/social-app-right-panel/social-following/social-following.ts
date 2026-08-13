import { Component, ChangeDetectionStrategy } from '@angular/core';

import { following } from '../../../../../../shared/data/data/social-apps';

@Component({
  selector: 'app-social-following',
  imports: [],
  templateUrl: './social-following.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './social-following.scss',
})
export class SocialFollowing {
  public following = following;
}
