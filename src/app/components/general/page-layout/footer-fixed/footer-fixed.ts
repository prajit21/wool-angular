import { Component, ChangeDetectionStrategy } from '@angular/core';

import { FooterContent } from '../footer-content/footer-content';

@Component({
  selector: 'app-footer-fixed',
  imports: [FooterContent],
  templateUrl: './footer-fixed.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer-fixed.scss',
})
export class FooterFixed {}
