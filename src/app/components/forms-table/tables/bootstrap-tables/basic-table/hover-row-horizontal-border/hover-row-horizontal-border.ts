import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../../shared/components/ui/feather-icons/feather-icons';
import { hoverRowHorizontal } from '../../../../../../shared/data/data/tables';

@Component({
  selector: 'app-hover-row-horizontal-border',
  imports: [FeatherIcons],
  templateUrl: './hover-row-horizontal-border.html',
  styleUrl: './hover-row-horizontal-border.scss',
})
export class HoverRowHorizontalBorder {
  public hoverRowHorizontal = hoverRowHorizontal;
}
