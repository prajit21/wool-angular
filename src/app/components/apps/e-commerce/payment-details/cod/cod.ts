import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Title } from '../../../../../shared/components/ui/title/title';

@Component({
  selector: 'app-cod',
  imports: [Title],
  templateUrl: './cod.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './cod.scss',
})
export class Cod {}
