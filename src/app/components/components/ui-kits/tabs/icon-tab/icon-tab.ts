import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-icon-tab',
  imports: [NgbModule],
  templateUrl: './icon-tab.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './icon-tab.scss',
})
export class IconTab {
  public active = 1;
}
