import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { browseArticles } from '../../../../shared/data/data/knowledgebase';

@Component({
  selector: 'app-knowledgebase-article',
  imports: [FeatherIcons],
  templateUrl: './knowledgebase-article.html',
  styleUrl: './knowledgebase-article.scss',
})
export class KnowledgebaseArticle {
  public browseArticles = browseArticles;
}
