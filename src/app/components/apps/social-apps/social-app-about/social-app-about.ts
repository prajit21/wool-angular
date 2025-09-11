import { Component } from '@angular/core';

import { SocialAppPeople } from './social-app-people/social-app-people';
import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import {
  activityLogDetails,
  hobbiesEductionDetails,
  peopleKnowYou,
} from '../../../../shared/data/data/social-apps';
import { SocialAppLeftPanel } from '../widgets/social-app-left-panel/social-app-left-panel';
import { SocialAppRightPanel } from '../widgets/social-app-right-panel/social-app-right-panel';

@Component({
  selector: 'app-social-app-about',
  imports: [FeatherIcons, SocialAppLeftPanel, SocialAppPeople, SocialAppRightPanel],
  templateUrl: './social-app-about.html',
  styleUrl: './social-app-about.scss',
})
export class SocialAppAbout {
  public peopleKnowYou = peopleKnowYou;
  public hobbiesEductionDetails = hobbiesEductionDetails;
  public activityLogDetails = activityLogDetails;
}
