import { TitleCasePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-color-variant',
  imports: [TitleCasePipe],
  templateUrl: './color-variant.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './color-variant.scss',
})
export class ColorVariant {
  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'inverse'];
}
