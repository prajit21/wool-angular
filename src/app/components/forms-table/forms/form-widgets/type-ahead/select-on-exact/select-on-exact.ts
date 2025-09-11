import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, map } from 'rxjs';

import { statesData } from '../../../../../../shared/data/data/form-widgets/type-ahead';

@Component({
  selector: 'app-select-on-exact',
  imports: [NgbModule],
  templateUrl: './select-on-exact.html',
  styleUrl: './select-on-exact.scss',
})
export class SelectOnExact {
  public searchData = statesData;

  search: OperatorFunction<string, readonly { name: string }[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term =>
        term === ''
          ? []
          : this.searchData
              .filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10),
      ),
    );

  formatter = (x: { name: string }) => x.name;
}
