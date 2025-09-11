import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { activeList } from '../../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-active-list',
  imports: [CommonModule],
  templateUrl: './active-list.html',
  styleUrl: './active-list.scss',
})
export class ActiveList {
  public activeList = activeList;
}
