import { Component } from '@angular/core';

import { LeftRibbons } from './left-ribbons/left-ribbons';
import { RightRibbons } from './right-ribbons/right-ribbons';

@Component({
  selector: 'app-ribbons',
  imports: [LeftRibbons, RightRibbons],
  templateUrl: './ribbons.html',
  styleUrl: './ribbons.scss',
})
export class Ribbons {}
