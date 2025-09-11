import { Component } from '@angular/core';

import { BasicTypeAhead } from './basic-type-ahead/basic-type-ahead';
import { FormattedResult } from './formatted-result/formatted-result';
import { OpenOnFocus } from './open-on-focus/open-on-focus';
import { PreventManualEntry } from './prevent-manual-entry/prevent-manual-entry';
import { SelectOnExact } from './select-on-exact/select-on-exact';
import { TemplateResult } from './template-result/template-result';
import { WikipediaSearch } from './wikipedia-search/wikipedia-search';

@Component({
  selector: 'app-type-ahead',
  imports: [
    BasicTypeAhead,
    FormattedResult,
    OpenOnFocus,
    PreventManualEntry,
    SelectOnExact,
    TemplateResult,
    WikipediaSearch,
  ],
  templateUrl: './type-ahead.html',
  styleUrl: './type-ahead.scss',
})
export class TypeAhead {}
