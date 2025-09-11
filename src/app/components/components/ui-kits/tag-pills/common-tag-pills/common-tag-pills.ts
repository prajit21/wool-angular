import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { tagPill } from '../../../../../shared/interface/ui-kits';

@Component({
  selector: 'app-common-tag-pills',
  imports: [CommonModule, FeatherIcons],
  templateUrl: './common-tag-pills.html',
  styleUrl: './common-tag-pills.scss',
})
export class CommonTagPills {
  readonly details = input<tagPill>();
}
