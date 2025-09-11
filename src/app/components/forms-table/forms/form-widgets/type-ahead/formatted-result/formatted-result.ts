import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';

import { state } from '../../../../../../shared/data/data/form-widgets/type-ahead';

@Component({
  selector: 'app-formatted-result',
  imports: [FormsModule, NgbModule],
  templateUrl: './formatted-result.html',
  styleUrl: './formatted-result.scss',
})
export class FormattedResult {
  public searchData = state;

  public formatter = (result: string) => result.toUpperCase();
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term === ''
          ? []
          : this.searchData
              .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10),
      ),
    );
}
