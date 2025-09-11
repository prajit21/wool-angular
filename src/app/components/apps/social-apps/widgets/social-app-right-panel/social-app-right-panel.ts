import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SocialFollowers } from './social-followers/social-followers';
import { SocialFollowing } from './social-following/social-following';
import { SocialFriends } from './social-friends/social-friends';
import { SocialLatestPhotos } from './social-latest-photos/social-latest-photos';
import { SocialProfileIntro } from './social-profile-intro/social-profile-intro';

@Component({
  selector: 'app-social-app-right-panel',
  imports: [
    NgbModule,
    SocialProfileIntro,
    SocialFollowers,
    SocialFollowing,
    SocialLatestPhotos,
    SocialFriends,
  ],
  templateUrl: './social-app-right-panel.html',
  styleUrl: './social-app-right-panel.scss',
})
export class SocialAppRightPanel {}
