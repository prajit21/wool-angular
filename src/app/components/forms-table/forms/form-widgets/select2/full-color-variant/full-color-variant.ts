import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-full-color-variant',
  imports: [CommonModule],
  templateUrl: './full-color-variant.html',
  styleUrl: './full-color-variant.scss',
})
export class FullColorVariant {
  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'inverse'];
}
