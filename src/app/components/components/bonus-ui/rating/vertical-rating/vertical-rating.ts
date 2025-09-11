import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-vertical-rating',
  imports: [FormsModule, BarRatingModule],
  templateUrl: './vertical-rating.html',
  styleUrl: './vertical-rating.scss',
})
export class VerticalRating {
  public rate = 1;
}
