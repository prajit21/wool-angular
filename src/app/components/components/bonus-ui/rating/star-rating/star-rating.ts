import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-star-rating',
  imports: [BarRatingModule],
  templateUrl: './star-rating.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './star-rating.scss',
})
export class StarRating {
  public cssRate = 1;
}
