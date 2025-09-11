import { Component } from '@angular/core';

import { SearchResultAll } from './search-result-all/search-result-all';
import { SearchResultImages } from './search-result-images/search-result-images';
import { SearchResultVideo } from './search-result-video/search-result-video';
import { searchResultTabs } from '../../../shared/data/data/search-result';

@Component({
  selector: 'app-search-result',
  imports: [SearchResultAll, SearchResultImages, SearchResultVideo],
  templateUrl: './search-result.html',
  styleUrl: './search-result.scss',
})
export class SearchResult {
  public searchResultTabs = searchResultTabs;
  public activeTab: string = 'all';

  changeTab(value: string) {
    this.activeTab = value;
  }
}
