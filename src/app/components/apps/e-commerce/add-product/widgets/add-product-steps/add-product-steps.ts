import { Component, input, output } from '@angular/core';

import { SvgIcon } from '../../../../../../shared/components/ui/svg-icon/svg-icon';
import { addProductSteps } from '../../../../../../shared/data/data/e-commerce/add-product';

@Component({
  selector: 'app-add-product-steps',
  imports: [SvgIcon],
  templateUrl: './add-product-steps.html',
  styleUrl: './add-product-steps.scss',
})
export class AddProductSteps {
  readonly activeStep = input<string>();

  readonly activeTabValue = output<string>();

  public addProductSteps = addProductSteps;
  public activeTab = 'details';

  ngOnChanges() {
    this.addProductSteps.filter(data => {
      const activeStep = this.activeStep();
      if (activeStep) {
        if (data.value == activeStep) {
          if (!data.active) {
            data.active = true;
          }
        } else {
          data.active = false;
        }
      } else {
        this.activeTab = 'details';
      }
    });
  }
}
