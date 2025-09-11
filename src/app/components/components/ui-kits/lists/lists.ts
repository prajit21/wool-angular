import { Component } from '@angular/core';

import { ActiveList } from './active-list/active-list';
import { CheckBoxList } from './check-box-list/check-box-list';
import { ContextualClassesList } from './contextual-classes-list/contextual-classes-list';
import { CustomContentList } from './custom-content-list/custom-content-list';
import { DefaultList } from './default-list/default-list';
import { DisabledList } from './disabled-list/disabled-list';
import { FlushList } from './flush-list/flush-list';
import { HorizontalList } from './horizontal-list/horizontal-list';
import { JsBehaviorList } from './js-behavior-list/js-behavior-list';
import { NumberBadgeList } from './number-badge-list/number-badge-list';
import { NumberList } from './number-list/number-list';
import { RadioList } from './radio-list/radio-list';
import { ScrollableList } from './scrollable-list/scrollable-list';

@Component({
  selector: 'app-lists',
  imports: [
    ActiveList,
    CheckBoxList,
    ContextualClassesList,
    CustomContentList,
    DefaultList,
    DisabledList,
    FlushList,
    HorizontalList,
    JsBehaviorList,
    NumberBadgeList,
    NumberList,
    ScrollableList,
    RadioList,
  ],
  templateUrl: './lists.html',
  styleUrl: './lists.scss',
})
export class Lists {}
