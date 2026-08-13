import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  descriptionList,
  orderList,
  unOrderedList,
} from '../../../../../shared/data/data/ui-kits/typography';

@Component({
  selector: 'app-listing-typography',
  imports: [],
  templateUrl: './listing-typography.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './listing-typography.scss',
})
export class ListingTypography {
  public unOrderedList = unOrderedList;
  public orderList = orderList;
  public descriptionList = descriptionList;
}
