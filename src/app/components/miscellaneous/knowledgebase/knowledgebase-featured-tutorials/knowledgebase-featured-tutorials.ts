import { Component, ChangeDetectionStrategy } from '@angular/core';

import { featuredTutorialDetails } from '../../../../shared/data/data/knowledgebase';
import { FeaturedTutorials } from '../../faq/featured-tutorials/featured-tutorials';

@Component({
  selector: 'app-knowledgebase-featured-tutorials',
  imports: [FeaturedTutorials],
  templateUrl: './knowledgebase-featured-tutorials.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './knowledgebase-featured-tutorials.scss',
})
export class KnowledgebaseFeaturedTutorials {
  public featuredTutorialDetails = featuredTutorialDetails;
}
