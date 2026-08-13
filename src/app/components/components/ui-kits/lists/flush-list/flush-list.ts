import { Component, ChangeDetectionStrategy } from '@angular/core';

import { flushList } from '../../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-flush-list',
  imports: [],
  templateUrl: './flush-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './flush-list.scss',
})
export class FlushList {
  public flushList = flushList;
}
