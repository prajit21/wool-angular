import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Products } from '../../../../../shared/interface/e-commerce';

@Component({
  selector: 'app-product-details-modal',
  imports: [],
  templateUrl: './product-details-modal.html',
  styleUrl: './product-details-modal.scss',
})
export class ProductDetailsModal {
  private modal = inject(NgbActiveModal);
  private router = inject(Router);

  readonly productDetail = input<Products>();

  public counter: number = 1;

  changeValue(value: number) {
    if (value == -1) {
      if (this.counter > 1) {
        this.counter -= 1;
      }
    } else if (value == 1) {
      this.counter += 1;
    }
  }

  closeModal() {
    this.modal.close();
  }

  addToCart() {
    this.router.navigate(['/e-commerce/cart']);
    this.modal.close();
  }

  viewDetails() {
    this.router.navigate(['/e-commerce/product-page']);
    this.modal.close();
  }
}
