import { Component } from '@angular/core';

import { BadgeButton } from './badge-button/badge-button';
import { BadgeHeading } from './badge-heading/badge-heading';
import { CommonTagPills } from './common-tag-pills/common-tag-pills';
import { tagPills } from '../../../../shared/data/data/ui-kits/tag-pills';

@Component({
  selector: 'app-tag-pills',
  imports: [CommonTagPills, BadgeHeading, BadgeButton],
  templateUrl: './tag-pills.html',
  styleUrl: './tag-pills.scss',
})
export class TagPills {
  public tagPills = tagPills;
}
