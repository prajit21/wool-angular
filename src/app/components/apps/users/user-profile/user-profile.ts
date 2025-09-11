import { Component } from '@angular/core';

import { UserDetails } from './user-details/user-details';
import { UserDoublePost } from './user-double-post/user-double-post';
import { UserLeftSidePost } from './user-left-side-post/user-left-side-post';
import { UserSinglePost } from './user-single-post/user-single-post';
import { postDetails1, postDetails2 } from '../../../../shared/data/data/users';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
  imports: [UserDoublePost, UserSinglePost, UserDetails, UserLeftSidePost],
})
export class UserProfile {
  public postDetails1 = postDetails1;
  public postDetails2 = postDetails2;
}
