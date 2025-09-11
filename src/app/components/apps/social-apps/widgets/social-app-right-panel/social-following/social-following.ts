import { Component } from '@angular/core';

import { following } from '../../../../../../shared/data/data/social-apps';

@Component({
  selector: 'app-social-following',
  imports: [],
  templateUrl: './social-following.html',
  styleUrl: './social-following.scss',
})
export class SocialFollowing {
  public following = following;
}
