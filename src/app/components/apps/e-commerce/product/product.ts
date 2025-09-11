import { Component, inject } from '@angular/core';

import { ProductDetails } from './product-details/product-details';
import { ProductFilter } from './product-filter/product-filter';
import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { ProductService } from '../../../../shared/services/product.service';

@Component({
  selector: 'app-product',
  imports: [FeatherIcons, ProductFilter, ProductDetails],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  productService = inject(ProductService);

  public listView: boolean = false;
  public gridView: boolean = true;
  public col_xl_6: boolean = false;
  public col_sm_6: boolean = false;
  public col_xl_4: boolean = false;
  public col_sm_4: boolean = false;
  public col_xl_3: boolean = true;
  public col_sm_3: boolean = true;
  public col_xl_2: boolean = false;
  public col_xl_12: boolean = false;

  openFilter() {
    this.productService.isOpenFilter = !this.productService.isOpenFilter;
  }

  grid() {
    this.productService.gridOpen();
  }

  list() {
    this.productService.listOpen();
  }

  grid2() {
    this.productService.grid2();
  }

  grid3() {
    this.productService.grid3();
  }

  grid4() {
    this.productService.grid4();
  }

  grid6() {
    this.productService.grid6();
  }

  ngDoCheck() {
    this.listView = this.productService.listView;
    this.gridView = this.productService.gridView;
    this.col_xl_6 = this.productService.col_xl_6;
    this.col_sm_6 = this.productService.col_sm_6;
    this.col_xl_4 = this.productService.col_xl_4;
    this.col_sm_4 = this.productService.col_sm_4;
    this.col_xl_3 = this.productService.col_xl_3;
    this.col_sm_3 = this.productService.col_sm_3;
    this.col_xl_2 = this.productService.col_xl_2;
    this.col_xl_12 = this.productService.col_xl_12;
  }
}
