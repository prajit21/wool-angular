import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { activeList } from '../../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-active-list',
  imports: [NgClass],
  templateUrl: './active-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './active-list.scss',
})
export class ActiveList {
  public activeList = activeList;
}
