import { Component } from '@angular/core';

import { UserCards } from '../../users/user-cards/user-cards';

@Component({
  selector: 'app-social-app-friends',
  imports: [UserCards],
  templateUrl: './social-app-friends.html',
  styleUrl: './social-app-friends.scss',
})
export class SocialAppFriends {}
