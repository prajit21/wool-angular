import { Component, ChangeDetectionStrategy } from '@angular/core';

import { numberBadgeList } from '../../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-number-badge-list',
  imports: [],
  templateUrl: './number-badge-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './number-badge-list.scss',
})
export class NumberBadgeList {
  public numberBadgeList = numberBadgeList;
}
