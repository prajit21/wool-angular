import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-movie-rating',
  imports: [BarRatingModule],
  templateUrl: './movie-rating.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './movie-rating.scss',
})
export class MovieRating {
  public movieRate = 2;
}
