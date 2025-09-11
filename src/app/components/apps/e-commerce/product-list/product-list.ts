import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { ECommerceDirective, SortEvent } from '../../../../shared/directive/e-commerce.directive';
import { productList } from '../../../../shared/interface/e-commerce';
import { ECommerceService } from '../../../../shared/services/e-commerce/e-commerce.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
  imports: [NgbModule, CommonModule, FormsModule, ECommerceDirective],
  providers: [ECommerceService, DecimalPipe],
})
export class ProductList {
  service = inject(ECommerceService);

  product$: Observable<productList[]>;
  total$: Observable<number>;

  readonly headers = viewChildren(ECommerceDirective);

  constructor() {
    const service = this.service;

    this.product$ = service.product$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers().forEach(header => {
      if (header.appECommerce() !== column) {
        header.currentDirection.set('');
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
