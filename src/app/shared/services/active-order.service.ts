import { DecimalPipe } from '@angular/common';
import { Injectable, PipeTransform, inject } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
  Subject,
  debounceTime,
  delay,
  of,
  switchMap,
  tap,
} from 'rxjs';

import { activeOrdersData } from '../data/data/dashboard';
import { SortColumn, SortDirection } from '../directive/active-order.directive';
import { activeOrders } from '../interface/dashboard';

interface SearchResult {
  activeOrder: activeOrders[];
  total: number;
}

interface State {
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(activeOrder: activeOrders[], column: SortColumn, direction: string): activeOrders[] {
  if (direction === '' || column === '') {
    return activeOrder;
  } else {
    return [...activeOrder].sort((a, b) => {
      const res = compare(a[column] as string | number, b[column] as string | number);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(order: activeOrders, term: string, pipe: PipeTransform) {
  return (
    order.date.toLowerCase().includes(term.toLowerCase()) ||
    order.time.toLowerCase().includes(term.toLowerCase()) ||
    order.type.toLowerCase().includes(term.toLowerCase()) ||
    order.price.toLowerCase().includes(term.toLowerCase()) ||
    order.usd.toLowerCase().includes(term.toLowerCase()) ||
    order.status.toLowerCase().includes(term.toLowerCase()) ||
    pipe.transform(order.price).includes(term)
  );
}
@Injectable({
  providedIn: 'root',
})
export class ActiveOrderService {
  private pipe = inject(DecimalPipe);

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _activeOrder$ = new BehaviorSubject<activeOrders[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
  };

  constructor() {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false)),
      )
      .subscribe(result => {
        this._activeOrder$.next(result.activeOrder);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get activeOrder$() {
    return this._activeOrder$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }

  get searchTerm() {
    return this._state.searchTerm;
  }

  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, searchTerm } = this._state;

    // 1. sort
    let activeOrder = sort(activeOrdersData, sortColumn, sortDirection);

    // 2. filter
    activeOrder = activeOrder.filter(order => matches(order, searchTerm, this.pipe));
    const total = activeOrder.length;

    return of({ activeOrder, total });
  }
}
