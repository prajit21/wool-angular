import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { jobCards, jobDetail } from '../../../../shared/data/data/job-search';
import { JobSearchFilter } from '../job-search-filter/job-search-filter';

@Component({
  selector: 'app-job-search-job-details',
  imports: [JobSearchFilter, CommonModule, NgbModule],
  templateUrl: './job-search-job-details.html',
  styleUrl: './job-search-job-details.scss',
})
export class JobSearchJobDetails {
  config = inject(NgbRatingConfig);

  public jobDetail = jobDetail;

  public jobCards = jobCards;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
