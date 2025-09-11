import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { SupportTicketList } from './support-ticket-list/support-ticket-list';
import { supportTicket, supportTicketListDetails } from '../../../shared/data/data/support-ticket';
import {
  SortEvent,
  SupportTicketDirective,
} from '../../../shared/directive/support-ticket.directive';
import { SupportTicketService } from '../../../shared/services/support-ticket.service';

@Component({
  selector: 'app-support-ticket',
  imports: [SupportTicketList, CommonModule, NgbModule, SupportTicketDirective, FormsModule],
  templateUrl: './support-ticket.html',
  styleUrl: './support-ticket.scss',
  providers: [SupportTicketService, DecimalPipe],
})
export class SupportTicket {
  service = inject(SupportTicketService);

  public supportTicketListDetails = supportTicketListDetails;
  supportTicket$: Observable<supportTicket[]>;
  total$: Observable<number>;

  readonly headers = viewChildren(SupportTicketDirective);

  constructor() {
    const service = this.service;

    this.supportTicket$ = service.supportTicket$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers().forEach(header => {
      if (header.appSupportTicket() !== column) {
        header.currentDirection.set('');
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
