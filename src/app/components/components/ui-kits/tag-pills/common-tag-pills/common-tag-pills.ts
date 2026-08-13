import { NgClass } from '@angular/common';
import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { tagPill } from '../../../../../shared/interface/ui-kits';

@Component({
  selector: 'app-common-tag-pills',
  imports: [FeatherIcons, NgClass],
  templateUrl: './common-tag-pills.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './common-tag-pills.scss',
})
export class CommonTagPills {
  readonly details = input<tagPill>();
}
