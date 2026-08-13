import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import * as feather from 'feather-icons';

@Component({
  selector: 'app-feather-icons',
  templateUrl: './feather-icons.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './feather-icons.scss',
})
export class FeatherIcons {
  public readonly icon = input<string>();
  readonly class = input<string>();

  constructor() {}

  ngAfterViewInit() {
    feather.replace();
  }
}
