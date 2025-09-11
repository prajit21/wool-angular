import { Component } from '@angular/core';

import { activityFeedDetails } from '../../../../../../shared/data/data/social-apps';

@Component({
  selector: 'app-social-activity-feed',
  imports: [],
  templateUrl: './social-activity-feed.html',
  styleUrl: './social-activity-feed.scss',
})
export class SocialActivityFeed {
  public activityFeed = activityFeedDetails;
}
