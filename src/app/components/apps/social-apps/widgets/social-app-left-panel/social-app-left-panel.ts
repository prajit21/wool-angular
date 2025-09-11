import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SocialActivityFeed } from './social-activity-feed/social-activity-feed';
import { SocialMutualFriends } from './social-mutual-friends/social-mutual-friends';
import { SocialProfileDetails } from './social-profile-details/social-profile-details';

@Component({
  selector: 'app-social-app-left-panel',
  imports: [SocialActivityFeed, SocialMutualFriends, SocialProfileDetails, NgbModule],
  templateUrl: './social-app-left-panel.html',
  styleUrl: './social-app-left-panel.scss',
})
export class SocialAppLeftPanel {}
