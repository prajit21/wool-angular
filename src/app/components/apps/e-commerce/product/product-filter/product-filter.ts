import { Component, inject } from '@angular/core';

import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { newProducts } from '../../../../../shared/data/data/e-commerce/product';
import { ProductService } from '../../../../../shared/services/product.service';

@Component({
  selector: 'app-product-filter',
  imports: [NgxSliderModule, CarouselModule],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.scss',
})
export class ProductFilter {
  productService = inject(ProductService);

  public newProducts = newProducts;
  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ['‹', '›'],
    items: 1,
  };

  public value: number = 100;
  public maxValue: number = 70;

  public sliderOption: Options = {
    floor: 0,
    ceil: 200,
  };

  openFilter() {
    this.productService.isOpenFilter = !this.productService.isOpenFilter;
  }
}
