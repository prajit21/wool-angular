import { Component, output } from '@angular/core';

import { advanceTab } from '../../../../../../shared/data/data/e-commerce/add-product';
import { AddProductAdditionalOption } from '../add-product-additional-option/add-product-additional-option';
import { AddProductInventory } from '../add-product-inventory/add-product-inventory';
import { AddProductShipping } from '../add-product-shipping/add-product-shipping';

@Component({
  selector: 'app-add-product-advance',
  imports: [AddProductInventory, AddProductAdditionalOption, AddProductShipping],
  templateUrl: './add-product-advance.html',
  styleUrl: './add-product-advance.scss',
})
export class AddProductAdvance {
  readonly activeStep = output<string>();

  public advanceTab = advanceTab;
  public activeTab = 'inventory';

  changeTab(value: string) {
    this.activeTab = value;
  }

  changeActiveTab(value: string) {
    this.activeStep.emit(value);
  }
}
