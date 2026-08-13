import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { faq } from '../../../../shared/interface/faq';

@Component({
  selector: 'app-common-faq',
  imports: [FeatherIcons],
  templateUrl: './common-faq.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './common-faq.scss',
})
export class CommonFaq {
  readonly details = input<faq>();
}
