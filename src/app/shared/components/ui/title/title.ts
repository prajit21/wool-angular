import { Component, input } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-title',
  imports: [NgbModule],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title {
  readonly title = input<string>();
  readonly dropdown = input<boolean>(false);
  readonly dots = input<boolean>(false);
  readonly dropdownText = input<string>('Yearly');
  readonly type = input<string>();
  readonly border = input<boolean>(false);
}
