import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-material-left-tab',
  imports: [NgbModule, FormsModule],
  templateUrl: './material-left-tab.html',
  styleUrl: './material-left-tab.scss',
})
export class MaterialLeftTab {
  public active = 1;
}
