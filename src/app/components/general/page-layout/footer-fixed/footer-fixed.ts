import { Component } from '@angular/core';

import { FooterContent } from '../footer-content/footer-content';

@Component({
  selector: 'app-footer-fixed',
  imports: [FooterContent],
  templateUrl: './footer-fixed.html',
  styleUrl: './footer-fixed.scss',
})
export class FooterFixed {}
