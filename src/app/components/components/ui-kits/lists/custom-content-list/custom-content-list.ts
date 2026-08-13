import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { customContent } from '../../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-custom-content-list',
  imports: [NgClass],
  templateUrl: './custom-content-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './custom-content-list.scss',
})
export class CustomContentList {
  public customContent = customContent;
}
