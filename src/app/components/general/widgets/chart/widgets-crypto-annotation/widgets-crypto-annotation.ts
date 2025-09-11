import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Title } from '../../../../../shared/components/ui/title/title';
import { cryptoAnnotation } from '../../../../../shared/data/chart/widgets-chart';

@Component({
  selector: 'app-widgets-crypto-annotation',
  imports: [Title, NgApexchartsModule],
  templateUrl: './widgets-crypto-annotation.html',
  styleUrl: './widgets-crypto-annotation.scss',
})
export class WidgetsCryptoAnnotation {
  public cryptoAnnotation = cryptoAnnotation;
}
