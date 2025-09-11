import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { justifyTab } from '../../../../../shared/data/data/ui-kits/tabs';

@Component({
  selector: 'app-justify-tab',
  imports: [NgbModule, FormsModule],
  templateUrl: './justify-tab.html',
  styleUrl: './justify-tab.scss',
})
export class JustifyTab {
  public justifyTab = justifyTab;
  public active = 2;
}
