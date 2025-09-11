import { Component } from '@angular/core';

import { UserAddressDetails } from './user-address-details/user-address-details';
import { UserPersonalDetails } from './user-personal-details/user-personal-details';
import { UserProjectDetails } from './user-project-details/user-project-details';

@Component({
  selector: 'app-user-edit',
  imports: [UserAddressDetails, UserPersonalDetails, UserProjectDetails],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.scss',
})
export class UserEdit {}
