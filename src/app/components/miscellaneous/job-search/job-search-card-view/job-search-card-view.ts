import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { jobCards } from '../../../../shared/data/data/job-search';
import { JobSearchFilter } from '../job-search-filter/job-search-filter';

@Component({
  selector: 'app-job-search-card-view',
  imports: [CommonModule, NgbModule, JobSearchFilter],
  templateUrl: './job-search-card-view.html',
  styleUrl: './job-search-card-view.scss',
})
export class JobSearchCardView {
  config = inject(NgbRatingConfig);

  public jobCards = jobCards;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
