import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { userProfile } from '../../../../data/data/header';
import { FeatherIcons } from '../../../ui/feather-icons/feather-icons';

@Component({
  selector: 'app-header-user-profile',
  templateUrl: './header-user-profile.html',
  styleUrl: './header-user-profile.scss',
  imports: [FeatherIcons, RouterModule],
})
export class HeaderUserProfile {
  private router = inject(Router);

  public userProfile = userProfile;

  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
