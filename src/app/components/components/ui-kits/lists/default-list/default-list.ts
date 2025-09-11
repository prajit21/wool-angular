import { Component } from '@angular/core';

import { defaultList } from '../../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-default-list',
  imports: [],
  templateUrl: './default-list.html',
  styleUrl: './default-list.scss',
})
export class DefaultList {
  public defaultList = defaultList;
}
