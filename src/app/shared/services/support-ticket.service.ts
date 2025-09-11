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

import { supportTicket, supportTicketTable } from '../data/data/support-ticket';
import { SortColumn, SortDirection } from '../directive/support-ticket.directive';

interface SearchResult {
  supportTicket: supportTicket[];
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

function sort(
  supportTicket: supportTicket[],
  column: SortColumn,
  direction: string,
): supportTicket[] {
  if (direction === '' || column === '') {
    return supportTicket;
  } else {
    return [...supportTicket].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(ticket: supportTicket, term: string, pipe: PipeTransform) {
  return (
    ticket.name.toLowerCase().includes(term.toLowerCase()) ||
    ticket.position.toLowerCase().includes(term.toLowerCase()) ||
    ticket.office.toLowerCase().includes(term.toLowerCase()) ||
    pipe.transform(ticket.salary).includes(term) ||
    pipe.transform(ticket.progress).includes(term) ||
    pipe.transform(ticket.extn).includes(term) ||
    ticket.email.toLowerCase().includes(term.toLowerCase())
  );
}
@Injectable({
  providedIn: 'root',
})
export class SupportTicketService {
  private pipe = inject(DecimalPipe);

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _supportTicket$ = new BehaviorSubject<supportTicket[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: 'asc',
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
        this._supportTicket$.next(result.supportTicket);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get supportTicket$() {
    return this._supportTicket$.asObservable();
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

  get sortColumn() {
    return this._state.sortColumn;
  }

  get sortDirection() {
    return this._state.sortDirection;
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
    let supportTicket = sort(supportTicketTable, sortColumn, sortDirection);

    // 2. filter
    supportTicket = supportTicket.filter(order => matches(order, searchTerm, this.pipe));
    const total = supportTicket.length;

    // 3. paginate
    supportTicket = supportTicket.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ supportTicket, total });
  }
}
