import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Title } from '../../../../../shared/components/ui/title/title';

@Component({
  selector: 'app-emi',
  imports: [Title],
  templateUrl: './emi.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './emi.scss',
})
export class Emi {}
