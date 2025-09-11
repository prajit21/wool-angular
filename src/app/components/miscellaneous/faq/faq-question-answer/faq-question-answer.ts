import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../shared/components/ui/feather-icons/feather-icons';
import { faqQuestionAnswer, headers } from '../../../../shared/data/data/faq';

@Component({
  selector: 'app-faq-question-answer',
  imports: [NgbModule, FeatherIcons],
  templateUrl: './faq-question-answer.html',
  styleUrl: './faq-question-answer.scss',
})
export class FaqQuestionAnswer {
  public faqQuestionAnswer = faqQuestionAnswer;
  public headers = headers;
}
