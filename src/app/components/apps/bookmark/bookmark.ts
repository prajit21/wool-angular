import { Component } from '@angular/core';

import { BookmarkDetails } from './bookmark-details/bookmark-details';
import { BookmarkSidemenu } from './bookmark-sidemenu/bookmark-sidemenu';

@Component({
  selector: 'app-bookmark',
  imports: [BookmarkSidemenu, BookmarkDetails],
  templateUrl: './bookmark.html',
  styleUrl: './bookmark.scss',
})
export class Bookmark {
  public activeTab: string;

  getTab(value: string) {
    this.activeTab = value;
  }
}
