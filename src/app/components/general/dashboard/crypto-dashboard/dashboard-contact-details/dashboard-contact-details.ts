import { Component } from '@angular/core';

import { Title } from '../../../../../shared/components/ui/title/title';
import { dashboardContacts } from '../../../../../shared/data/data/dashboard';

@Component({
  selector: 'app-dashboard-contact-details',
  imports: [Title],
  templateUrl: './dashboard-contact-details.html',
  styleUrl: './dashboard-contact-details.scss',
})
export class DashboardContactDetails {
  public dashboardContacts = dashboardContacts;
}
