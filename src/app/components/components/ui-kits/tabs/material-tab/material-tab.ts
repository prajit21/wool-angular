import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-material-tab',
  imports: [NgbModule, FormsModule],
  templateUrl: './material-tab.html',
  styleUrl: './material-tab.scss',
})
export class MaterialTab {
  public active = 1;
}
