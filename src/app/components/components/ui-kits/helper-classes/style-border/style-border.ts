import { Component } from '@angular/core';

import { styleInBorder } from '../../../../../shared/data/data/ui-kits/helper-classic';

@Component({
  selector: 'app-style-border',
  imports: [],
  templateUrl: './style-border.html',
  styleUrl: './style-border.scss',
})
export class StyleBorder {
  public styleInBorder = styleInBorder;
}
