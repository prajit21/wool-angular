import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { postDetails } from '../../../../../shared/interface/users';

@Component({
  selector: 'app-user-single-post',
  imports: [],
  templateUrl: './user-single-post.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './user-single-post.scss',
})
export class UserSinglePost {
  public readonly postDetails = input<postDetails>();
}
