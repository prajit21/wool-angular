import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CheckoutBilling } from './checkout-billing/checkout-billing';
import { CheckoutPlaceOrder } from './checkout-place-order/checkout-place-order';

@Component({
  selector: 'app-checkout',
  imports: [CheckoutBilling, CheckoutPlaceOrder],
  templateUrl: './checkout.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './checkout.scss',
})
export class Checkout {}
