import { Component, output, ChangeDetectionStrategy } from '@angular/core';

import { SvgIcon } from '../../../../../../shared/components/ui/svg-icon/svg-icon';

@Component({
  selector: 'app-add-product-inventory',
  imports: [SvgIcon],
  templateUrl: './add-product-inventory.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './add-product-inventory.scss',
})
export class AddProductInventory {
  readonly activeStep = output<string>();

  previous() {
    this.activeStep.emit('price');
  }
}
