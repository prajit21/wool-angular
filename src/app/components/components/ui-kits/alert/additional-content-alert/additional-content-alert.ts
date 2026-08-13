import { Component, ChangeDetectionStrategy } from '@angular/core';

import { additionalContent } from '../../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-additional-content-alert',
  imports: [],
  templateUrl: './additional-content-alert.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './additional-content-alert.scss',
})
export class AdditionalContentAlert {
  public additionalContent = additionalContent;
}
