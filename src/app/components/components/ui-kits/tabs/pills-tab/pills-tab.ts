import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pills-tab',
  imports: [NgbModule, FormsModule],
  templateUrl: './pills-tab.html',
  styleUrl: './pills-tab.scss',
})
export class PillsTab {
  public active = 3;
}
