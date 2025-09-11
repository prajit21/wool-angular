import { Component, inject } from '@angular/core';

import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from 'ngx-bar-rating';

import { searchResultAllDetails } from '../../../../shared/data/data/search-result';

@Component({
  selector: 'app-search-result-all',
  imports: [BarRatingModule, NgbModule],
  templateUrl: './search-result-all.html',
  styleUrl: './search-result-all.scss',
})
export class SearchResultAll {
  config = inject(NgbRatingConfig);

  public searchResultAllDetails = searchResultAllDetails;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
