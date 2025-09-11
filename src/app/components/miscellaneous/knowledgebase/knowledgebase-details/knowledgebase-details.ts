import { Component, input } from '@angular/core';

import { knowledgebase } from '../../../../shared/interface/knowledgebase';
import { CommonFaq } from '../../faq/common-faq/common-faq';

@Component({
  selector: 'app-knowledgebase-details',
  imports: [CommonFaq],
  templateUrl: './knowledgebase-details.html',
  styleUrl: './knowledgebase-details.scss',
})
export class KnowledgebaseDetails {
  readonly details = input<knowledgebase>();
}
