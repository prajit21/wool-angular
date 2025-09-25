import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { orderDetails, ORDERS } from '../../../../shared/data/data/e-commerce/order-history';
import {
  ProductOrderDirective,
  SortEvent,
} from '../../../../shared/directive/product-order.directive';
import { order } from '../../../../shared/interface/e-commerce';
import { OrderService } from '../../../../shared/services/e-commerce/product-order.service';

@Component({
  selector: 'app-order-history',
  imports: [CommonModule, FeatherIcons, FormsModule, NgbModule, ProductOrderDirective],
  templateUrl: './order-history.html',
  styleUrl: './order-history.scss',
  providers: [OrderService, DecimalPipe],
})
export class OrderHistory {
  public orderDetails = orderDetails;

  public products$: Observable<ORDERS[]>;
  service = inject(OrderService);
  total$: Observable<number>;

  readonly headers = viewChildren(ProductOrderDirective);

  constructor() {
    this.products$ = this.service.support$;
    this.total$ = this.service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach(header => {
      if (header.sortableOrder() !== column) {
        header.currentDirection.set('');
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  remove(id: number, subId: order) {
    this.orderDetails.forEach(data => {
      if (data.id == id) {
        data.details.forEach(subData => {
          if (subData.id == subId.id) {
            data.details.splice(data.details.indexOf(subId), 1);
          }
        });
      }
    });
  }
}
