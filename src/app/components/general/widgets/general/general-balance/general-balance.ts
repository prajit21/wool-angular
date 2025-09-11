import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { balance } from '../../../../../shared/data/data/widgets-general';

@Component({
  selector: 'app-general-balance',
  imports: [FeatherIcons, RouterModule],
  templateUrl: './general-balance.html',
  styleUrl: './general-balance.scss',
})
export class GeneralBalance {
  public balance = balance;
}
