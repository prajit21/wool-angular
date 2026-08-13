import { Component, ChangeDetectionStrategy } from '@angular/core';

import { FooterContent } from '../footer-content/footer-content';

@Component({
  selector: 'app-footer-light',
  imports: [FooterContent],
  templateUrl: './footer-light.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer-light.scss',
})
export class FooterLight {}
