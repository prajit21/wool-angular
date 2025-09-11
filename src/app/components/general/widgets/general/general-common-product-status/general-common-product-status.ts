import { Component, input } from '@angular/core';

import { productStatus } from '../../../../../shared/interface/widgets-general';

@Component({
  selector: 'app-general-common-product-status',
  imports: [],
  templateUrl: './general-common-product-status.html',
  styleUrl: './general-common-product-status.scss',
})
export class GeneralCommonProductStatus {
  readonly status = input<productStatus>();
}
