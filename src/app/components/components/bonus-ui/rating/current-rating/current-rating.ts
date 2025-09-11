import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-current-rating',
  imports: [FormsModule, BarRatingModule],
  templateUrl: './current-rating.html',
  styleUrl: './current-rating.scss',
})
export class CurrentRating {
  public faoRate = 5.6;
  public faoRated = false;

  onFaoRate(e: number) {
    this.faoRated = true;
    this.faoRate = e;
  }

  faoReset() {
    this.faoRated = false;
    this.faoRate = 5.6;
  }
}
