import { Directive, HostBinding, HostListener, input, output, signal } from '@angular/core';

import { supportTicket } from '../data/data/support-ticket';

export type SortColumn = keyof supportTicket | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}
@Directive({
  selector: '[appSupportTicket]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class SupportTicketDirective {
  readonly appSupportTicket = input<SortColumn>('');
  readonly direction = input<SortDirection>(''); // Initial direction

  // Local writable signal
  public currentDirection = signal<SortDirection>(this.direction());

  // Output event
  readonly sort = output<SortEvent>();

  // HostBinding for CSS classes
  @HostBinding('class.asc')
  get isAsc() {
    return this.currentDirection() === 'asc';
  }

  @HostBinding('class.desc')
  get isDesc() {
    return this.currentDirection() === 'desc';
  }

  // Handle click
  @HostListener('click')
  rotate() {
    this.currentDirection.set(rotate[this.currentDirection()]);
    this.sort.emit({ column: this.appSupportTicket(), direction: this.currentDirection() });
  }
}
