import { Component } from '@angular/core';

import { CollapseAccordion } from './collapse-accordion/collapse-accordion';
import { FlushAccordion } from './flush-accordion/flush-accordion';
import { HorizontalAccordion } from './horizontal-accordion/horizontal-accordion';
import { MultipleCollapseAccordion } from './multiple-collapse-accordion/multiple-collapse-accordion';
import { OutlinedAccordion } from './outlined-accordion/outlined-accordion';
import { SimpleAccordion } from './simple-accordion/simple-accordion';
import { WithIconAccordion } from './with-icon-accordion/with-icon-accordion';

@Component({
  selector: 'app-accordion',
  imports: [
    CollapseAccordion,
    MultipleCollapseAccordion,
    FlushAccordion,
    HorizontalAccordion,
    OutlinedAccordion,
    SimpleAccordion,
    WithIconAccordion,
  ],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion {}
