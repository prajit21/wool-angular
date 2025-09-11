import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simple-tab',
  imports: [NgbModule, FormsModule],
  templateUrl: './simple-tab.html',
  styleUrl: './simple-tab.scss',
})
export class SimpleTab {
  public active = 2;
}
