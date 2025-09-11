import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { orderDetails } from '../../../../shared/data/data/e-commerce/order-history';
import {
  ProductOrderDirective,
  sortOrderEvent,
} from '../../../../shared/directive/product-order.directive';
import { order, productOrder } from '../../../../shared/interface/e-commerce';
import { ProductOrderService } from '../../../../shared/services/e-commerce/product-order.service';

@Component({
  selector: 'app-order-history',
  imports: [CommonModule, FeatherIcons, FormsModule, NgbModule, ProductOrderDirective],
  templateUrl: './order-history.html',
  styleUrl: './order-history.scss',
  providers: [ProductOrderService, DecimalPipe],
})
export class OrderHistory {
  service = inject(ProductOrderService);

  public orderDetails = orderDetails;
  product$: Observable<productOrder[]>;
  total$: Observable<number>;

  readonly headers = viewChildren(ProductOrderDirective);

  constructor() {
    const service = this.service;

    this.product$ = service.product$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: sortOrderEvent) {
    // resetting other headers
    this.headers().forEach(header => {
      if (header.appProductOrder() !== column) {
        header.direction = '';
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
