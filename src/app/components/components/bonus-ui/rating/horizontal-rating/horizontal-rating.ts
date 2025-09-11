import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-horizontal-rating',
  imports: [FormsModule, BarRatingModule],
  templateUrl: './horizontal-rating.html',
  styleUrl: './horizontal-rating.scss',
})
export class HorizontalRating {
  public rate = 7;
}
