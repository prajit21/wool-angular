import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-border-tab',
  imports: [NgbModule],
  templateUrl: './border-tab.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './border-tab.scss',
})
export class BorderTab {
  public active = 2;
}
