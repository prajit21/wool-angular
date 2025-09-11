import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertical-tab',
  imports: [NgbModule, FormsModule],
  templateUrl: './vertical-tab.html',
  styleUrl: './vertical-tab.scss',
})
export class VerticalTab {
  public active = 'component';
}
