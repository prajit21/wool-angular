import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Title } from '../../../../../shared/components/ui/title/title';

@Component({
  selector: 'app-credit-card',
  imports: [Title],
  templateUrl: './credit-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './credit-card.scss',
})
export class CreditCard {}
