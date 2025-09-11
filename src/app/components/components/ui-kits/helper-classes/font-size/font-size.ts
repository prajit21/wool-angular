import { Component } from '@angular/core';

import { fontSize } from '../../../../../shared/data/data/ui-kits/helper-classic';

@Component({
  selector: 'app-font-size',
  imports: [],
  templateUrl: './font-size.html',
  styleUrl: './font-size.scss',
})
export class FontSize {
  public fontSize = fontSize;
}
