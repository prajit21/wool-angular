import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CommonFaq } from './common-faq/common-faq';
import { FaqLatestUpdates } from './faq-latest-updates/faq-latest-updates';
import { FaqNavigation } from './faq-navigation/faq-navigation';
import { FaqQuestionAnswer } from './faq-question-answer/faq-question-answer';
import { FaqSearchArticle } from './faq-search-article/faq-search-article';
import { FeaturedTutorials } from './featured-tutorials/featured-tutorials';
import { LatestArticleVideos } from './latest-article-videos/latest-article-videos';
import { faqs, featuredTutorial, latestArticleVideo } from '../../../shared/data/data/faq';

@Component({
  selector: 'app-faq',
  imports: [
    CommonFaq,
    FaqNavigation,
    FaqLatestUpdates,
    FaqQuestionAnswer,
    FeaturedTutorials,
    LatestArticleVideos,
    FaqSearchArticle,
    CommonModule,
  ],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  public faqs = faqs;
  public featuredTutorial = featuredTutorial;
  public latestArticleVideo = latestArticleVideo;
}
