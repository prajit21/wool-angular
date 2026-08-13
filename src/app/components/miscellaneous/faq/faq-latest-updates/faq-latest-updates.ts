import { Component, ChangeDetectionStrategy } from '@angular/core';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';

@Component({
  selector: 'app-faq-latest-updates',
  imports: [FeatherIcons],
  templateUrl: './faq-latest-updates.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './faq-latest-updates.scss',
})
export class FaqLatestUpdates {}
