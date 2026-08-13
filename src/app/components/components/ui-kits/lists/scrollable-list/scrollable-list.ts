import { Component, ChangeDetectionStrategy } from '@angular/core';

import { scrollableList } from '../../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-scrollable-list',
  imports: [],
  templateUrl: './scrollable-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './scrollable-list.scss',
})
export class ScrollableList {
  public scrollableList = scrollableList;
}
