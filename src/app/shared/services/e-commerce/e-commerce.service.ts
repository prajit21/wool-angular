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

import { productListDetails } from '../../data/data/e-commerce/product-list';
import { SortColumn, SortDirection } from '../../directive/e-commerce.directive';
import { productList } from '../../interface/e-commerce';

interface SearchResult {
  product: productList[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(product: productList[], column: SortColumn, direction: string): productList[] {
  if (direction === '' || column === '') {
    return product;
  } else {
    return [...product].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(product: productList, term: string, pipe: PipeTransform) {
  return (
    product.name.toLowerCase().includes(term.toLowerCase()) ||
    product.desc.toLowerCase().includes(term.toLowerCase()) ||
    pipe.transform(product.amount).includes(term) ||
    product.stock.toLowerCase().includes(term.toLowerCase()) ||
    product.date.toLowerCase().includes(term.toLowerCase())
  );
}

@Injectable({
  providedIn: 'root',
})
export class ECommerceService {
  private pipe = inject(DecimalPipe);

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _product$ = new BehaviorSubject<productList[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
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
        this._product$.next(result.product);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get product$() {
    return this._product$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
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
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let product = sort(productListDetails, sortColumn, sortDirection);

    // 2. filter
    product = product.filter(product => matches(product, searchTerm, this.pipe));
    const total = product.length;

    // 3. paginate
    product = product.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ product, total });
  }
}
