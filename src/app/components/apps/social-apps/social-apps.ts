import { Component } from '@angular/core';

import { SocialAppAbout } from './social-app-about/social-app-about';
import { SocialAppFriends } from './social-app-friends/social-app-friends';
import { SocialAppPhotos } from './social-app-photos/social-app-photos';
import { SocialAppProfile } from './social-app-profile/social-app-profile';
import { SocialAppTimeline } from './social-app-timeline/social-app-timeline';

@Component({
  selector: 'app-social-apps',
  imports: [SocialAppProfile, SocialAppAbout, SocialAppFriends, SocialAppTimeline, SocialAppPhotos],
  templateUrl: './social-apps.html',
  styleUrl: './social-apps.scss',
})
export class SocialApps {
  public activeTab: string;

  getTabValue(value: string) {
    this.activeTab = value;
  }
}
