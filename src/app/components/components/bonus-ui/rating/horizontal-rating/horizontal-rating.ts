import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-horizontal-rating',
  imports: [FormsModule, BarRatingModule],
  templateUrl: './horizontal-rating.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './horizontal-rating.scss',
})
export class HorizontalRating {
  public rate = 7;
}
