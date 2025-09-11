import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { userCards } from '../../../../shared/data/data/users';

@Component({
  selector: 'app-user-cards',
  imports: [RouterModule],
  templateUrl: './user-cards.html',
  styleUrl: './user-cards.scss',
})
export class UserCards {
  readonly fluidClass = input<boolean>(true);

  public userCards = userCards;
}
