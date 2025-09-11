import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-icon-tab',
  imports: [NgbModule],
  templateUrl: './icon-tab.html',
  styleUrl: './icon-tab.scss',
})
export class IconTab {
  public active = 1;
}
