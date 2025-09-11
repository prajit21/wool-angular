import { Component, input } from '@angular/core';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { articleVideos } from '../../../../shared/interface/faq';

@Component({
  selector: 'app-latest-article-videos',
  imports: [FeatherIcons],
  templateUrl: './latest-article-videos.html',
  styleUrl: './latest-article-videos.scss',
})
export class LatestArticleVideos {
  readonly articleVideo = input<articleVideos[]>();
}
