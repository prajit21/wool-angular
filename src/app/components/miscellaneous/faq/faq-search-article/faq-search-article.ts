import { Component, ChangeDetectionStrategy } from '@angular/core';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-faq-search-article',
  imports: [FeatherIcons],
  templateUrl: './faq-search-article.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './faq-search-article.scss',
})
export class FaqSearchArticle {}
