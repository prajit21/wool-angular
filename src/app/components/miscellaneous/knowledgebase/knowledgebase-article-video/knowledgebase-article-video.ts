import { Component } from '@angular/core';

import { latestArticleVideo } from '../../../../shared/data/data/knowledgebase';
import { LatestArticleVideos } from '../../faq/latest-article-videos/latest-article-videos';

@Component({
  selector: 'app-knowledgebase-article-video',
  imports: [LatestArticleVideos],
  templateUrl: './knowledgebase-article-video.html',
  styleUrl: './knowledgebase-article-video.scss',
})
export class KnowledgebaseArticleVideo {
  public latestArticleVideo = latestArticleVideo;
}
