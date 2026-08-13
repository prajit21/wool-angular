import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BootstrapCalendar } from './bootstrap-calendar/bootstrap-calendar';
import { DefaultCalendar } from './default-calendar/default-calendar';

@Component({
  selector: 'app-date-picker',
  imports: [BootstrapCalendar, DefaultCalendar],
  templateUrl: './date-picker.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './date-picker.scss',
})
export class DatePicker {}
