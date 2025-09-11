import { Component, inject, input } from '@angular/core';

import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { tutorials } from '../../../../shared/interface/faq';

@Component({
  selector: 'app-featured-tutorials',
  imports: [NgbModule],
  templateUrl: './featured-tutorials.html',
  styleUrl: './featured-tutorials.scss',
})
export class FeaturedTutorials {
  config = inject(NgbRatingConfig);

  readonly tutorials = input<tutorials[]>();

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
