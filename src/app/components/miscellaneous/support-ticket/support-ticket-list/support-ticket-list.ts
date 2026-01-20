import { Component, input } from '@angular/core';

import { supportTicketList } from '../../../../shared/interface/support-ticket';

@Component({
  selector: 'app-support-ticket-list',
  templateUrl: './support-ticket-list.html',
  styleUrl: './support-ticket-list.scss',
})
export class SupportTicketList {
  readonly details = input<supportTicketList>();
}
