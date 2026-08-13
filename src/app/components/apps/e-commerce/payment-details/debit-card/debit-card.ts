import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Title } from '../../../../../shared/components/ui/title/title';

@Component({
  selector: 'app-debit-card',
  imports: [Title],
  templateUrl: './debit-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './debit-card.scss',
})
export class DebitCard {}
