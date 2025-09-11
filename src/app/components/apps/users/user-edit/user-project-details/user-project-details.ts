import { Component } from '@angular/core';

import { userProject } from '../../../../../shared/data/data/users';

@Component({
  selector: 'app-user-project-details',
  imports: [],
  templateUrl: './user-project-details.html',
  styleUrl: './user-project-details.scss',
})
export class UserProjectDetails {
  public userProject = userProject;
}
