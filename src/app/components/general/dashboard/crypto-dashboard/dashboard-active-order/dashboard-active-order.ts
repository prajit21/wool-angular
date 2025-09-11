import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Observable } from 'rxjs';

import { Title } from '../../../../../shared/components/ui/title/title';
import { activeOrdersData } from '../../../../../shared/data/data/dashboard';
import {
  ActiveOrderDirective,
  SortEvent,
} from '../../../../../shared/directive/active-order.directive';
import { activeOrders } from '../../../../../shared/interface/dashboard';
import { ActiveOrderService } from '../../../../../shared/services/active-order.service';

@Component({
  selector: 'app-dashboard-active-order',
  templateUrl: './dashboard-active-order.html',
  styleUrl: './dashboard-active-order.scss',
  imports: [Title, RouterModule, FormsModule, CommonModule, ActiveOrderDirective],
  providers: [ActiveOrderService, DecimalPipe],
})
export class DashboardActiveOrder {
  service = inject(ActiveOrderService);

  public activeOrders = activeOrdersData;

  activeOrders$: Observable<activeOrders[]>;
  total$: Observable<number>;

  readonly headers = viewChildren(ActiveOrderDirective);

  constructor() {
    const service = this.service;

    this.activeOrders$ = service.activeOrder$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers().forEach(header => {
      if (header.sortable() !== column) {
        header.currentDirection.set('');
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
