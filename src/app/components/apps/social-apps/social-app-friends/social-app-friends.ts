import { Component, ChangeDetectionStrategy } from '@angular/core';

import { UserCards } from '../../users/user-cards/user-cards';

@Component({
  selector: 'app-social-app-friends',
  imports: [UserCards],
  templateUrl: './social-app-friends.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './social-app-friends.scss',
})
export class SocialAppFriends {}
