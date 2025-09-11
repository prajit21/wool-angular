import { Directive, Input, input, output } from '@angular/core';

import { productOrder } from '../interface/e-commerce';

export type SortColumnOrder = keyof productOrder | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotateOrder: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

export interface sortOrderEvent {
  column: SortColumnOrder;
  direction: SortDirection;
}

@Directive({
  selector: 'th[appProductOrder]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotateOrder()',
  },
})
export class ProductOrderDirective {
  readonly appProductOrder = input<SortColumnOrder>('');
  @Input() direction: SortDirection = '';
  readonly sortOrder = output<sortOrderEvent>();

  rotateOrder() {
    this.direction = rotateOrder[this.direction];
    this.sortOrder.emit({ column: this.appProductOrder(), direction: this.direction });
  }
}
