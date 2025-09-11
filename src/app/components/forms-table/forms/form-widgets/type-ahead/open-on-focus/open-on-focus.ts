import { Component, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import {
  Observable,
  OperatorFunction,
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  merge,
} from 'rxjs';

import { state } from '../../../../../../shared/data/data/form-widgets/type-ahead';

@Component({
  selector: 'app-open-on-focus',
  imports: [FormsModule, NgbModule],
  templateUrl: './open-on-focus.html',
  styleUrl: './open-on-focus.scss',
})
export class OpenOnFocus {
  readonly instance = viewChild<NgbTypeahead>('instance');
  public states = state;

  public focus$ = new Subject<string>();
  public click$ = new Subject<string>();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance()?.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term =>
        (term === ''
          ? this.states
          : this.states.filter((v: string) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
        ).slice(0, 10),
      ),
    );
  };
}
