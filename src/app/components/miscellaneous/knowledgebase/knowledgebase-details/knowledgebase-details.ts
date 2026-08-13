import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { knowledgebase } from '../../../../shared/interface/knowledgebase';
import { CommonFaq } from '../../faq/common-faq/common-faq';

@Component({
  selector: 'app-knowledgebase-details',
  imports: [CommonFaq],
  templateUrl: './knowledgebase-details.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './knowledgebase-details.scss',
})
export class KnowledgebaseDetails {
  readonly details = input<knowledgebase>();
}
