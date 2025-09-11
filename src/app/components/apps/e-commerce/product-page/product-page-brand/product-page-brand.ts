import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { productBrand, productServices } from '../../../../../shared/data/data/e-commerce/product';

@Component({
  selector: 'app-product-page-brand',
  imports: [FeatherIcons],
  templateUrl: './product-page-brand.html',
  styleUrl: './product-page-brand.scss',
})
export class ProductPageBrand {
  public productBrand = productBrand;
  public productServices = productServices;
}
