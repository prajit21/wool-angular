import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, map } from 'rxjs';

import { statesWithFlags } from '../../../../../../shared/data/data/form-widgets/type-ahead';

@Component({
  selector: 'app-template-result',
  imports: [NgbModule],
  templateUrl: './template-result.html',
  styleUrl: './template-result.scss',
})
export class TemplateResult {
  public flagData = statesWithFlags;

  search: OperatorFunction<string, readonly { name: string; flag: string }[]> = (
    text$: Observable<string>,
  ) =>
    text$.pipe(
      debounceTime(200),
      map(term =>
        term === ''
          ? []
          : this.flagData
              .filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10),
      ),
    );

  formatter = (x: { name: string }) => x.name;
}
