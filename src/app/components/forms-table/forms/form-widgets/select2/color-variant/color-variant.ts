import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-color-variant',
  imports: [TitleCasePipe],
  templateUrl: './color-variant.html',
  styleUrl: './color-variant.scss',
})
export class ColorVariant {
  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'inverse'];
}
