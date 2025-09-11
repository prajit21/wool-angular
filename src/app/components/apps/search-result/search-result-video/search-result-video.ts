import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { searchResultVideo } from '../../../../shared/data/data/search-result';

@Component({
  selector: 'app-search-result-video',
  imports: [],
  templateUrl: './search-result-video.html',
  styleUrl: './search-result-video.scss',
})
export class SearchResultVideo {
  sanitizer = inject(DomSanitizer);

  public searchResultVideo = searchResultVideo;

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
