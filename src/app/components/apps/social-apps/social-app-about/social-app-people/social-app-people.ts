import { Component, ChangeDetectionStrategy } from '@angular/core';

import { peopleKnowYou } from '../../../../../shared/data/data/social-apps';

@Component({
  selector: 'app-social-app-people',
  imports: [],
  templateUrl: './social-app-people.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './social-app-people.scss',
})
export class SocialAppPeople {
  public peopleKnowYou = peopleKnowYou;
}
