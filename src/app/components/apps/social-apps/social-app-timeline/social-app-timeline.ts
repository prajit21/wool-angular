import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { timeLinePostDetails } from '../../../../shared/data/data/social-apps';
import { SocialAppLeftPanel } from '../widgets/social-app-left-panel/social-app-left-panel';
import { SocialAppRightPanel } from '../widgets/social-app-right-panel/social-app-right-panel';

@Component({
  selector: 'app-social-app-timeline',
  imports: [FeatherIcons, SocialAppLeftPanel, SocialAppRightPanel, CommonModule],
  templateUrl: './social-app-timeline.html',
  styleUrl: './social-app-timeline.scss',
})
export class SocialAppTimeline {
  public timeLinePostDetails = timeLinePostDetails;
}
