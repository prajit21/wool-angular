import { Component, ChangeDetectionStrategy } from '@angular/core';

import { horizontalList } from '../../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-horizontal-list',
  imports: [],
  templateUrl: './horizontal-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './horizontal-list.scss',
})
export class HorizontalList {
  public horizontalList = horizontalList;
}
