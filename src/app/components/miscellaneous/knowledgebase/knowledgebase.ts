import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { KnowledgebaseArticle } from './knowledgebase-article/knowledgebase-article';
import { KnowledgebaseArticleVideo } from './knowledgebase-article-video/knowledgebase-article-video';
import { KnowledgebaseDetails } from './knowledgebase-details/knowledgebase-details';
import { KnowledgebaseFeaturedTutorials } from './knowledgebase-featured-tutorials/knowledgebase-featured-tutorials';
import { FeatherIcons } from '../../../shared/components/ui/feather-icons/feather-icons';
import { knowledgebaseDetails } from '../../../shared/data/data/knowledgebase';

@Component({
  selector: 'app-knowledgebase',
  imports: [
    KnowledgebaseArticle,
    KnowledgebaseArticleVideo,
    KnowledgebaseDetails,
    KnowledgebaseFeaturedTutorials,
    CommonModule,
    FeatherIcons,
  ],
  templateUrl: './knowledgebase.html',
  styleUrl: './knowledgebase.scss',
})
export class Knowledgebase {
  public knowledgebaseDetails = knowledgebaseDetails;
}
