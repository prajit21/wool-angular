import {
  Directive,
  HostBinding,
  HostListener,
  input,
  signal,
  effect,
  Output,
  EventEmitter,
} from '@angular/core';

import { ORDERS } from '../data/data/e-commerce/order-history';

export type SortColumn = keyof ORDERS | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: Record<SortDirection, SortDirection> = { asc: 'desc', desc: '', '': 'asc' };

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[appProductOrder]',
  host: {
    '[class.asc]': 'isAsc',
    '[class.desc]': 'isDesc',
    '(click)': 'rotateColumn()',
  },
})
export class ProductOrderDirective {
  @Output() sort = new EventEmitter<SortEvent>();
  readonly sortableOrder = input<SortColumn>('');
  readonly direction = input<SortDirection>(''); // initial direction from parent

  public currentDirection = signal<SortDirection>(this.direction());

  constructor() {
    effect(() => this.currentDirection.set(this.direction()));
  }

  @HostBinding('class.asc') get isAsc() {
    return this.currentDirection() === 'asc';
  }
  @HostBinding('class.desc') get isDesc() {
    return this.currentDirection() === 'desc';
  }

  @HostListener('click')
  rotateColumn() {
    this.currentDirection.set(rotate[this.currentDirection()]);
    this.sort.emit({ column: this.sortableOrder(), direction: this.currentDirection() });
  }
}
