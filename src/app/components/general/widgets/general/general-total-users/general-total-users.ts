import { Component, ChangeDetectionStrategy } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/ui/feather-icons/feather-icons';
import { Title } from '../../../../../shared/components/ui/title/title';
import { totalUserData } from '../../../../../shared/data/data/widgets-general';

@Component({
  selector: 'app-general-total-users',
  imports: [FeatherIcons, Title],
  templateUrl: './general-total-users.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './general-total-users.scss',
})
export class GeneralTotalUsers {
  public totalUserData = totalUserData;
}
