import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { supportTicket } from '../../../../shared/data/data/support-ticket';
import {
  SortEvent,
  SupportTicketDirective,
} from '../../../../shared/directive/support-ticket.directive';
import { SupportTicketService } from '../../../../shared/services/support-ticket.service';

@Component({
  selector: 'app-data-table',
  imports: [CommonModule, NgbModule, FormsModule, SupportTicketDirective],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
  providers: [SupportTicketService, DecimalPipe],
})
export class DataTable {
  service = inject(SupportTicketService);

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
