import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { customContent } from '../../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-custom-content-list',
  imports: [CommonModule],
  templateUrl: './custom-content-list.html',
  styleUrl: './custom-content-list.scss',
})
export class CustomContentList {
  public customContent = customContent;
}
