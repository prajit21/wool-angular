import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';

import { state } from '../../../../../../shared/data/data/form-widgets/type-ahead';

@Component({
  selector: 'app-basic-type-ahead',
  imports: [FormsModule, NgbModule],
  templateUrl: './basic-type-ahead.html',
  styleUrl: './basic-type-ahead.scss',
})
export class BasicTypeAhead {
  public states = state;

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term.length < 2
          ? []
          : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );
}
