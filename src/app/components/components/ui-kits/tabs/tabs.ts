import { Component } from '@angular/core';

import { BorderTab } from './border-tab/border-tab';
import { IconTab } from './icon-tab/icon-tab';
import { JustifyTab } from './justify-tab/justify-tab';
import { MaterialLeftTab } from './material-left-tab/material-left-tab';
import { MaterialTab } from './material-tab/material-tab';
import { PillsTab } from './pills-tab/pills-tab';
import { SimpleTab } from './simple-tab/simple-tab';
import { VerticalTab } from './vertical-tab/vertical-tab';

@Component({
  selector: 'app-tabs',
  imports: [
    BorderTab,
    IconTab,
    JustifyTab,
    MaterialLeftTab,
    MaterialTab,
    PillsTab,
    SimpleTab,
    VerticalTab,
  ],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs {}
