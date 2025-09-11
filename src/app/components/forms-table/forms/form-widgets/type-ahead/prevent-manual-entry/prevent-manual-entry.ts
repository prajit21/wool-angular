import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  Observable,
  OperatorFunction,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs';

import {
  statedDataInterface,
  statesData,
} from '../../../../../../shared/data/data/form-widgets/type-ahead';

@Component({
  selector: 'app-prevent-manual-entry',
  imports: [NgbModule],
  templateUrl: './prevent-manual-entry.html',
  styleUrl: './prevent-manual-entry.scss',
})
export class PreventManualEntry {
  public searchData = statesData;

  formatter = (state: statedDataInterface) => state.name;

  search: OperatorFunction<string, readonly { id: number; name: string }[]> = (
    text$: Observable<string>,
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter(term => term.length >= 2),
      map(term =>
        this.searchData.filter(state => new RegExp(term, 'mi').test(state.name)).slice(0, 10),
      ),
    );
}
