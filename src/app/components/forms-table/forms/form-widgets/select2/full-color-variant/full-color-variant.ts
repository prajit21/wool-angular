import { TitleCasePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-full-color-variant',
  imports: [TitleCasePipe],
  templateUrl: './full-color-variant.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './full-color-variant.scss',
})
export class FullColorVariant {
  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'inverse'];
}
