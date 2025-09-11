import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AddProductAdvance } from './widgets/add-product-advance/add-product-advance';
import { AddProductCategory } from './widgets/add-product-category/add-product-category';
import { AddProductDetails } from './widgets/add-product-details/add-product-details';
import { AddProductGallery } from './widgets/add-product-gallery/add-product-gallery';
import { AddProductPrice } from './widgets/add-product-price/add-product-price';
import { AddProductSteps } from './widgets/add-product-steps/add-product-steps';

@Component({
  selector: 'app-add-product',
  imports: [
    AddProductSteps,
    AddProductGallery,
    AddProductPrice,
    AddProductAdvance,
    CommonModule,
    AddProductDetails,
    AddProductCategory,
  ],
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss',
})
export class AddProduct {
  public activeTab: string = 'details';
  public validation: boolean = false;

  getTabValue(value: string) {
    this.activeTab = value;
  }

  getValidation(value: boolean) {
    this.validation = value;
  }
}
