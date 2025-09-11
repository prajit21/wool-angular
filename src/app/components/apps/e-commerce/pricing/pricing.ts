import { Component } from '@angular/core';

import { Title } from '../../../../shared/components/ui/title/title';
import {
  becomeMemberPlan,
  simplePricingPlan,
} from '../../../../shared/data/data/e-commerce/pricing';

@Component({
  selector: 'app-pricing',
  imports: [Title],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {
  public becomeMemberPlan = becomeMemberPlan;
  public simplePricingPlan = simplePricingPlan;
}
