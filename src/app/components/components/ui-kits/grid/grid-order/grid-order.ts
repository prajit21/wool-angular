import { Component } from '@angular/core';

import { gridOrder } from '../../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-grid-order',
  imports: [],
  templateUrl: './grid-order.html',
  styleUrl: './grid-order.scss',
})
export class GridOrder {
  public gridOrder = gridOrder;
}
