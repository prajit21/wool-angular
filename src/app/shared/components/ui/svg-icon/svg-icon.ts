import { CommonModule } from '@angular/common';
import { Component, Input, inject, input } from '@angular/core';

import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.html',
  styleUrl: './svg-icon.scss',
  imports: [CommonModule],
})
export class SvgIcon {
  layout = inject(LayoutService);

  public readonly icon = input<string>();
  @Input('class') public class: string;
  readonly change = input<boolean>(false);

  getSvgType() {
    return (
      document.getElementsByClassName('page-sub-header')[0].getAttribute('icon') == 'stroke-svg'
    );
  }
}
