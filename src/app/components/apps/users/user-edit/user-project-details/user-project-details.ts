import { Component, ChangeDetectionStrategy } from '@angular/core';

import { userProject } from '../../../../../shared/data/data/users';

@Component({
  selector: 'app-user-project-details',
  imports: [],
  templateUrl: './user-project-details.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './user-project-details.scss',
})
export class UserProjectDetails {
  public userProject = userProject;
}
