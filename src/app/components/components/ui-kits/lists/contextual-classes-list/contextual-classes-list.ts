import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { contextualClassList } from '../../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-contextual-classes-list',
  imports: [TitleCasePipe],
  templateUrl: './contextual-classes-list.html',
  styleUrl: './contextual-classes-list.scss',
})
export class ContextualClassesList {
  public contextualClassList = contextualClassList;
}
