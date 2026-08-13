import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simple-tab',
  imports: [NgbModule, FormsModule],
  templateUrl: './simple-tab.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './simple-tab.scss',
})
export class SimpleTab {
  public active = 2;
}
