import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModal, NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from 'ngx-bar-rating';

import { Products } from '../../../../../shared/interface/e-commerce';
import { ProductService } from '../../../../../shared/services/product.service';
import { ProductDetailsModal } from '../product-details-modal/product-details-modal';

@Component({
  selector: 'app-product-details',
  imports: [BarRatingModule, RouterModule, NgbModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  private productService = inject(ProductService);
  config = inject(NgbRatingConfig);
  private modal = inject(NgbModal);

  public listData: Products[] = [];
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

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.productService.products().subscribe(data => {
      this.listData = data.product;
    });
  }

  openModal(details: Products) {
    const modalRef = this.modal.open(ProductDetailsModal, { size: 'lg', centered: true });
    modalRef.componentInstance.productDetail = details;
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
