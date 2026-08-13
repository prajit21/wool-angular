import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { productDescription } from '../../../../../shared/data/data/e-commerce/product';

export interface description {
  id: number;
  title: string;
  value: string;
  details: {
    data: string;
    colClass: string;
  }[];
}
[];

@Component({
  selector: 'app-product-page-description',
  imports: [NgClass],
  templateUrl: './product-page-description.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './product-page-description.scss',
})
export class ProductPageDescription {
  public productDescription = productDescription;
  public tabData: description;
  public activeTab = 'febric';

  ngOnInit() {
    productDescription.filter(data => {
      if (data.value == this.activeTab) {
        this.tabData = data;
      }
    });
  }

  changeTab(id: number) {
    productDescription.filter(data => {
      if (id == data.id) {
        this.activeTab = data.value;
        this.tabData = data;
      }
    });
  }
}
