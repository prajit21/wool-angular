import { Component } from '@angular/core';

import { CurrentRating } from './current-rating/current-rating';
import { HorizontalRating } from './horizontal-rating/horizontal-rating';
import { MovieRating } from './movie-rating/movie-rating';
import { SquareRating } from './square-rating/square-rating';
import { StarRating } from './star-rating/star-rating';
import { VerticalRating } from './vertical-rating/vertical-rating';

@Component({
  selector: 'app-rating',
  imports: [CurrentRating, MovieRating, SquareRating, StarRating, VerticalRating, HorizontalRating],
  templateUrl: './rating.html',
  styleUrl: './rating.scss',
})
export class Rating {}
